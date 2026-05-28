import { LucideIcon } from "lucide-react";
import { ApiMockup, DashboardMockup } from "@/components/dashboard-mockup";
import type { Locale } from "@/lib/i18n/routing";
import { resolveTone, toneClasses, cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  eyebrow?: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  visual: string;
  tone?: string;
  locale?: Locale;
};

function ProjectVisual({ visual, locale = "vi" }: { visual: string; locale?: Locale }) {
  if (visual === "dashboard") {
    return (
      <div className="h-56 overflow-hidden rounded-xl bg-slate-50">
        <div className="origin-top-left scale-[0.55] md:scale-[0.58]">
          <DashboardMockup locale={locale} />
        </div>
      </div>
    );
  }

  if (visual === "document") {
    return (
      <div className="grid min-h-56 gap-4 rounded-lg border border-[#c4c6cf] bg-[#102134] p-5 text-white md:grid-cols-[0.8fr_1fr]">
        <div className="space-y-3">
          {["Patient note", "Invoice", "Form A", "Discharge summary"].map((item, index) => (
            <div className="border border-white/15 bg-white/5 p-3 text-xs" key={item}>
              <p className="font-mono text-[#9af2c5]">DOC-{index + 1}</p>
              <p className="mt-1 text-white/80">{item}</p>
            </div>
          ))}
        </div>
        <div className="border border-white/15 bg-black/20 p-4 font-mono text-xs leading-6 text-white/80">
          <p className="text-[#9af2c5]">extracted_fields</p>
          <p>{"{"}</p>
          <p>&nbsp;&nbsp;&quot;name&quot;: &quot;...&quot;,</p>
          <p>&nbsp;&nbsp;&quot;date&quot;: &quot;...&quot;,</p>
          <p>&nbsp;&nbsp;&quot;summary&quot;: &quot;ready&quot;</p>
          <p>{"}"}</p>
        </div>
      </div>
    );
  }

  if (visual === "api") {
    return <ApiMockup />;
  }

  if (visual === "booking") {
    return (
      <div className="rounded-lg border border-[#c4c6cf] bg-[#f2f4f6] p-6">
        <div className="mb-4 font-display text-lg font-semibold text-[#00091b]">
          {locale === "vi" ? "Đặt lịch hẹn" : "Book an appointment"}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-md border border-[#c4c6cf] bg-white p-4">
            <p className="mb-3 text-sm font-semibold text-[#43474e]">
              {locale === "vi" ? "Tháng 5, 2025" : "May 2025"}
            </p>
            <div className="grid grid-cols-7 gap-2 text-center text-xs text-[#43474e]">
              {Array.from({ length: 28 }).map((_, index) => (
                <span className={cn("rounded-sm py-1", index === 17 && "bg-[#00091b] text-white")} key={index}>
                  {index + 1}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-[#c4c6cf] bg-white p-4">
            <p className="mb-3 text-sm font-semibold text-[#43474e]">
              {locale === "vi" ? "Chọn khung giờ" : "Choose a time"}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {["09:00", "10:00", "13:30", "15:30"].map((time) => (
                <span className={cn("rounded-sm border px-3 py-2 text-center text-xs", time === "10:00" && "border-[#00091b] bg-[#00091b] text-white")} key={time}>
                  {time}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-56 overflow-hidden rounded-lg border border-[#c4c6cf] bg-[#102134] p-8 text-white">
      <div className="grid-pattern absolute inset-0 opacity-70" />
      <div className="relative max-w-xs">
        <p className="mono-label mb-8 opacity-80">Hồng Quân Dev</p>
        <h3 className="font-display text-2xl font-extrabold leading-tight">
          {locale === "vi" ? "Giải pháp số đồng hành cùng doanh nghiệp" : "Practical systems for growing teams"}
        </h3>
        <button className="mt-8 rounded-[3px] bg-white px-5 py-2 text-sm font-semibold text-[#00091b]">
          {locale === "vi" ? "Tìm hiểu thêm" : "Learn more"}
        </button>
      </div>
    </div>
  );
}

export function ProjectCard({
  title,
  eyebrow,
  description,
  tags,
  icon: Icon,
  visual,
  tone = "blue",
  locale = "vi",
}: ProjectCardProps) {
  const safeTone = resolveTone(tone);

  return (
    <article className="overflow-hidden border border-[#c4c6cf] bg-white p-4 transition hover:-translate-y-1 hover:border-[#74777f] hover:shadow-[0_12px_30px_rgba(0,9,27,0.08)] md:rounded-lg">
      <ProjectVisual locale={locale} visual={visual} />
      <div className="flex gap-5 p-4">
        <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-md", toneClasses[safeTone].soft)}>
          <Icon size={28} />
        </div>
        <div>
          {eyebrow ? <p className="mono-label mb-2 text-[#006c49]">{eyebrow}</p> : null}
          <h3 className="font-display text-2xl font-semibold leading-8 text-[#00091b]">{title}</h3>
          <p className="mt-3 leading-7 text-[#43474e]">{description}</p>
          <p className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span className="mono-label border border-[#c4c6cf] bg-[#f2f4f6] px-2 py-1 text-[#43474e]" key={tag}>{tag}</span>
            ))}
          </p>
        </div>
      </div>
    </article>
  );
}
