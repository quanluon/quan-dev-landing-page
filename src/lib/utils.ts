export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const toneClasses = {
  blue: {
    icon: "bg-[#1a365d] text-white",
    soft: "bg-[#d6e3ff] text-[#1a365d]",
    ring: "border-[#aec7f5]",
  },
  green: {
    icon: "bg-[#006c49] text-white",
    soft: "bg-[#9af2c5]/50 text-[#006c49]",
    ring: "border-[#81d8ad]",
  },
  orange: {
    icon: "bg-[#102134] text-white",
    soft: "bg-[#d3e4fe] text-[#102134]",
    ring: "border-[#b7c8e1]",
  },
  purple: {
    icon: "bg-[#00091b] text-white",
    soft: "bg-[#e0e3e5] text-[#00091b]",
    ring: "border-[#c4c6cf]",
  },
} as const;

export type Tone = keyof typeof toneClasses;

export function resolveTone(tone: string | undefined): Tone {
  if (tone === "blue" || tone === "green" || tone === "orange" || tone === "purple") {
    return tone;
  }

  return "blue";
}
