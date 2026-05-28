"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Send, X } from "lucide-react";
import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { localizedPath, locales, type Locale } from "@/lib/i18n/routing";
import { getSiteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Avatar } from "./avatar";

type SiteHeaderProps = {
  dictionary: Dictionary["header"];
  locale: Locale;
};

export function SiteHeader({ dictionary, locale }: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { navItems } = getSiteData(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-[#c4c6cf] bg-[#f7f9fb]/95 backdrop-blur">
      <div className="content-container flex h-20 items-center justify-between">
        <Link className="flex items-center gap-3 text-[#00091b]" href={`/${locale}`} onClick={() => setOpen(false)}>
          <div className="flex h-8 w-8 items-center justify-center">
            <Avatar />
          </div>
          <span className="font-display text-2xl font-bold tracking-normal">{dictionary.brand}</span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => {
            const active = pathname === `/${locale}${item.href}`;
            return (
              <Link
                className={cn(
                  "relative py-7 text-sm font-medium text-[#43474e] transition hover:text-[#00091b]",
                  active && "text-[#00091b]",
                )}
                href={`/${locale}${item.href}`}
                key={item.href}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 w-full bg-[#00091b] opacity-0 transition",
                    active && "opacity-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            className="inline-flex h-10 items-center justify-center gap-2 rounded-[3px] border border-[#00091b] bg-[#00091b] px-5 text-sm font-semibold text-white transition hover:bg-[#1a365d]"
            href={`/${locale}/contact`}
          >
            {dictionary.cta}
            <Send size={18} />
          </Link>
          <div className="flex items-center border border-[#c4c6cf] bg-white">
            {locales.map((item) => (
              <Link
                className={cn(
                  "px-3 py-2 text-xs font-semibold uppercase text-[#43474e]",
                  item === locale && "bg-[#00091b] text-white",
                )}
                href={localizedPath(item, pathname)}
                key={item}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <button
          aria-label="Mở menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#c4c6cf] bg-white text-[#00091b] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#c4c6cf] bg-[#f7f9fb] px-4 py-5 lg:hidden">
          <nav className="mx-auto grid max-w-[1200px] gap-2">
            {navItems.map((item) => (
              <Link
                className={cn(
                  "rounded-md px-4 py-3 font-semibold text-[#43474e]",
                  pathname === `/${locale}${item.href}` && "bg-[#e6e8ea] text-[#00091b]",
                )}
                href={`/${locale}${item.href}`}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-[3px] bg-[#00091b] px-5 font-semibold text-white"
              href={`/${locale}/contact`}
              onClick={() => setOpen(false)}
            >
              {dictionary.cta}
              <Send size={17} />
            </Link>
            <div className="mt-2 grid grid-cols-2 border border-[#c4c6cf] bg-white">
              {locales.map((item) => (
                <Link
                  className={cn(
                    "px-4 py-3 text-center text-sm font-semibold uppercase text-[#43474e]",
                    item === locale && "bg-[#00091b] text-white",
                  )}
                  href={localizedPath(item, pathname)}
                  key={item}
                  onClick={() => setOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
