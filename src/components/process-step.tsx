import { LucideIcon } from "lucide-react";
import { cn, resolveTone, toneClasses } from "@/lib/utils";

type ProcessStepProps = {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  tone?: string;
};

export function ProcessStep({
  number,
  title,
  description,
  icon: Icon,
  tone = "blue",
}: ProcessStepProps) {
  const safeTone = resolveTone(tone);

  return (
    <div className="relative flex min-w-0 flex-col items-center text-center md:flex-row md:text-left">
      <div className="relative shrink-0">
        <div className={cn("flex h-16 w-16 items-center justify-center rounded-full border bg-white", toneClasses[safeTone].ring)}>
          <Icon className={toneClasses[safeTone].soft.replace("bg-", "text-").split(" ")[1]} size={30} />
        </div>
        <span className={cn("absolute -bottom-3 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full text-xs font-bold text-white", toneClasses[safeTone].icon)}>
          {number}
        </span>
      </div>
      <div className="mt-6 md:ml-7 md:mt-0">
        <h3 className="font-display text-base font-semibold text-[#00091b]">{title}</h3>
        <p className="mt-2 max-w-[220px] text-sm leading-6 text-[#43474e]">{description}</p>
      </div>
    </div>
  );
}
