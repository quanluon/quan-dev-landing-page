import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  eyebrow,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl", align === "center" ? "text-center" : "text-left")}>
      {eyebrow ? (
        <div className="mono-label mb-7 inline-flex items-center gap-2 rounded-full border border-[#c4c6cf] bg-[#f2f4f6] px-3 py-1.5 text-[#43474e]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#006c49]" />
          {eyebrow}
        </div>
      ) : null}
      <h1 className="font-display text-4xl font-bold tracking-normal text-[#00091b] md:text-5xl">
        {title}
      </h1>
      <div className={cn("mt-5 h-0.5 w-12 bg-[#006c49]", align === "center" && "mx-auto")} />
      {description ? (
        <p className="mt-6 text-lg leading-8 text-[#43474e]">{description}</p>
      ) : null}
    </div>
  );
}
