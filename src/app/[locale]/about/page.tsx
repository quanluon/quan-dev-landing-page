import { CheckCircle2, Code2, ShieldCheck } from "lucide-react";
import { PrimaryButton } from "@/components/primary-button";
import { SectionHeading } from "@/components/section-heading";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/routing";

export const metadata = {
  title: "Về Hồng Quân Dev",
};

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return (
    <div>
      <section className="grid-pattern border-b border-[#c4c6cf]">
        <div className="content-container grid items-center gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-[#c4c6cf] bg-white p-8 md:rounded-lg">
            <div className="flex h-20 w-20 items-center justify-center rounded-md bg-[#d6e3ff] text-[#1a365d]">
              <Code2 size={38} />
            </div>
            <h1 className="mt-7 font-display text-4xl font-bold text-[#00091b]">{dictionary.about.title}</h1>
            <p className="mt-4 text-lg leading-8 text-[#43474e]">
              {dictionary.about.intro}
            </p>
            <div className="mt-8 grid gap-3">
              {dictionary.about.notes.map((item) => (
                <div className="flex items-center gap-3 border border-[#c4c6cf] bg-[#f2f4f6] px-4 py-3 text-sm font-semibold text-[#43474e]" key={item}>
                  <CheckCircle2 className="text-[#006c49]" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              title={dictionary.about.mainTitle}
              description={dictionary.about.mainDescription}
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="border border-[#c4c6cf] bg-white p-6 md:rounded-lg">
                <Code2 className="text-[#1a365d]" size={30} />
                <h2 className="mt-5 font-display text-xl font-semibold text-[#00091b]">{dictionary.about.technicalTitle}</h2>
                <p className="mt-3 leading-7 text-[#43474e]">
                  {dictionary.about.technicalDescription}
                </p>
              </div>
              <div className="border border-[#c4c6cf] bg-white p-6 md:rounded-lg">
                <ShieldCheck className="text-[#006c49]" size={30} />
                <h2 className="mt-5 font-display text-xl font-semibold text-[#00091b]">{dictionary.about.workingTitle}</h2>
                <p className="mt-3 leading-7 text-[#43474e]">
                  {dictionary.about.workingDescription}
                </p>
              </div>
            </div>
            <div className="mt-10 border border-[#c4c6cf] bg-[#eceef0] p-6 md:rounded-lg">
              <h2 className="font-display text-xl font-semibold text-[#00091b]">{dictionary.about.businessTitle}</h2>
              <dl className="mt-5 grid gap-3 text-[#43474e]">
                {dictionary.about.business.map(([label, value]) => (
                  <div key={label}><dt className="font-semibold text-[#00091b]">{label}</dt><dd>{value}</dd></div>
                ))}
              </dl>
            </div>
            <div className="mt-10">
              <PrimaryButton href={`/${locale}/contact`}>{dictionary.common.discussProject}</PrimaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
