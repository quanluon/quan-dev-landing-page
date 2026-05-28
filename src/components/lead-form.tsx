"use client";

import { FormEvent, useState } from "react";
import { Lock, Send } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/routing";

type LeadFormProps = {
  dictionary: Dictionary["form"];
  interests: string[];
  locale: Locale;
};

export function LeadForm({ dictionary, interests, locale }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      serviceInterest: String(formData.get("serviceInterest") || ""),
      message: String(formData.get("message") || ""),
      locale,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Không thể gửi yêu cầu.");
      }

      event.currentTarget.reset();
      setStatus("success");
      setMessage(dictionary.success);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : dictionary.fallbackError);
    }
  }

  return (
    <form className="border border-[#c4c6cf] bg-white p-6 md:rounded-lg" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="h-12 rounded-[3px] border border-[#c4c6cf] bg-[#f7f9fb] px-4 text-base outline-none transition placeholder:text-[#74777f] focus:border-[#006c49]"
          name="name"
          placeholder={dictionary.name}
          required
        />
        <input
          className="h-12 rounded-[3px] border border-[#c4c6cf] bg-[#f7f9fb] px-4 text-base outline-none transition placeholder:text-[#74777f] focus:border-[#006c49]"
          name="email"
          placeholder={dictionary.email}
          required
          type="email"
        />
      </div>
      <select
        className="mt-4 h-12 w-full rounded-[3px] border border-[#c4c6cf] bg-[#f7f9fb] px-4 text-base text-[#43474e] outline-none transition focus:border-[#006c49]"
        name="serviceInterest"
        required
        defaultValue=""
      >
        <option disabled value="">
          {dictionary.interestPlaceholder}
        </option>
        {interests.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <textarea
        className="mt-4 min-h-36 w-full resize-none rounded-[3px] border border-[#c4c6cf] bg-[#f7f9fb] px-4 py-4 text-base outline-none transition placeholder:text-[#74777f] focus:border-[#006c49]"
        name="message"
        placeholder={dictionary.message}
        required
      />
      <button
        className="mt-4 inline-flex h-12 w-full items-center justify-center gap-3 rounded-[3px] border border-[#00091b] bg-[#00091b] px-6 text-sm font-semibold text-white transition hover:bg-[#1a365d] disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === "loading"}
        type="submit"
      >
        <Send size={19} />
        {status === "loading" ? dictionary.sending : dictionary.submit}
      </button>
      {message ? (
        <p className={`mt-4 text-sm font-semibold ${status === "error" ? "text-red-600" : "text-[#006c49]"}`}>
          {message}
        </p>
      ) : null}
      <p className="mt-5 flex items-center justify-center gap-2 text-center text-sm text-[#43474e]">
        <Lock size={15} />
        {dictionary.privacy}
      </p>
    </form>
  );
}
