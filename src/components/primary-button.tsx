import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type PrimaryButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

const variants = {
  primary:
    "border border-[#00091b] bg-[#00091b] text-white hover:bg-[#1a365d]",
  secondary:
    "border border-[#006c49] bg-transparent text-[#006c49] hover:bg-[#006c49] hover:text-white",
  ghost: "text-[#1a365d] hover:bg-[#e6e8ea]",
};

export function PrimaryButton({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  disabled,
}: PrimaryButtonProps) {
  const classes = cn(
    "inline-flex h-14 items-center justify-center gap-3 rounded-xl px-7 text-base font-semibold transition duration-200",
    "md:h-12 md:rounded-[3px] md:px-6 md:text-sm",
    variants[variant],
    disabled && "cursor-not-allowed opacity-60",
    className,
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
        {variant === "primary" ? <Send size={18} /> : <ArrowRight size={18} />}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} type={type}>
      {children}
      <ArrowRight size={18} />
    </button>
  );
}
