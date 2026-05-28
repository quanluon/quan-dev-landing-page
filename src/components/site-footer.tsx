import type { Dictionary } from "@/lib/i18n/dictionaries";

type SiteFooterProps = {
  dictionary: Dictionary["footer"];
};

export function SiteFooter({ dictionary }: SiteFooterProps) {
  return (
    <footer className="border-t border-[#c4c6cf] bg-[#eceef0]">
      <div className="content-container py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl font-bold text-[#00091b]">{dictionary.brand}</p>
            <p className="mt-4 text-sm text-[#43474e]">
              {dictionary.copyright}
            </p>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#43474e]">
            {dictionary.note}
          </p>
        </div>
      </div>
    </footer>
  );
}
