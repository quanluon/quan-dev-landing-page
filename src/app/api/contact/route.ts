import { contact } from "@/lib/site-data";
import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  serviceInterest?: string;
  message?: string;
  locale?: string;
};

let resendClient: Resend | null = null;

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }

  return resendClient;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Dữ liệu gửi lên không hợp lệ." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const serviceInterest = payload.serviceInterest?.trim();
  const message = payload.message?.trim();
  const locale = payload.locale?.trim();

  if (!name || !email || !serviceInterest || !message) {
    return NextResponse.json({ message: "Vui lòng điền đầy đủ thông tin bắt buộc." }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL || contact.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!to || !from) {
    return NextResponse.json(
      { message: "Contact email environment variables are not configured." },
      { status: 500 },
    );
  }

  try {
    await getResend().emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Hong Quan Dev] Lead mới từ ${name}`,
      text: [
        `Họ tên: ${name}`,
        `Email: ${email}`,
        `Nhu cầu: ${serviceInterest}`,
        locale ? `Ngôn ngữ: ${locale}` : "",
        "",
        "Tin nhắn:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ message: "Đã gửi yêu cầu thành công." });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json(
      { message: "Không thể gửi email lúc này. Vui lòng thử lại sau." },
      { status: 500 },
    );
  }
}
