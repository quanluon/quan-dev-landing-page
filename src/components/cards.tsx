import Link from "next/link";
import { ArrowRight, CheckCircle2, LucideIcon } from "lucide-react";
import { cn, resolveTone, toneClasses } from "@/lib/utils";

type IconCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone?: string;
  href?: string;
  bullets?: string[];
  tags?: string[];
  actionLabel?: string;
  compact?: boolean;
};

export function ServiceCard({
  title,
  description,
  icon: Icon,
  tone = "blue",
  href = "/services",
  bullets,
  tags,
  actionLabel = "Learn more",
  compact,
}: IconCardProps) {
  const safeTone = resolveTone(tone);

  return (
    <article className="group border border-[#c4c6cf] bg-white p-8 transition hover:-translate-y-1 hover:border-[#74777f] hover:shadow-[0_12px_30px_rgba(0,9,27,0.08)] md:rounded-lg">
      <div
        className={cn(
          "mb-7 inline-flex h-12 w-12 items-center justify-center rounded-md",
          toneClasses[safeTone].icon,
        )}
      >
        <Icon size={25} strokeWidth={2} />
      </div>
      <h3 className="font-display text-2xl font-semibold leading-8 text-[#00091b]">{title}</h3>
      <p className="mt-4 text-base leading-7 text-[#43474e]">{description}</p>
      {bullets ? (
        <ul className="mt-5 space-y-3">
          {bullets.map((item) => (
            <li className="flex gap-3 text-sm leading-6 text-[#43474e]" key={item}>
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#006c49]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {tags ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span className="mono-label border border-[#c4c6cf] bg-[#f2f4f6] px-2 py-1 text-[#43474e]" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      {!compact ? (
        <Link
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#006c49] transition group-hover:gap-3"
          href={href}
        >
          {actionLabel}
          <ArrowRight size={17} />
        </Link>
      ) : null}
    </article>
  );
}

type ContactCardProps = {
  title: string;
  value: string;
  note?: string;
  href: string;
  icon: LucideIcon;
};

export function ContactCard({ title, value, note, href, icon: Icon }: ContactCardProps) {
  return (
    <Link
      className="flex items-center gap-5 border border-[#c4c6cf] bg-white p-5 transition hover:border-[#74777f] hover:shadow-[0_12px_30px_rgba(0,9,27,0.08)] md:rounded-lg"
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#00091b] text-white">
        <Icon size={22} />
      </span>
      <span className="min-w-0">
        <span className="block font-display text-lg font-semibold text-[#00091b]">{title}</span>
        <span className="block truncate text-[#43474e]">{value}</span>
        {note ? (
          <span className="mt-1 flex items-center gap-2 text-sm text-[#43474e] md:hidden">
            <span className="h-2 w-2 rounded-full bg-[#006c49]" />
            {note}
          </span>
        ) : null}
      </span>
      <ArrowRight className="ml-auto h-5 w-5 text-[#74777f]" />
    </Link>
  );
}
