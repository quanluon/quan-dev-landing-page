import { FileSearch } from "lucide-react";
import { PrimaryButton } from "@/components/primary-button";
import { ProcessStep } from "@/components/process-step";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/routing";
import { getSiteData } from "@/lib/site-data";

export const metadata = {
  title: "AI OCR / Document Intelligence - Hồng Quân Dev",
};

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function AiDocumentIntelligencePage({ params }: PageProps) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const { documentFlow, documentUseCases, projects } = getSiteData(locale);
  const documentProject = projects.find((project) => project.visual === "document") ?? projects[1];

  return (
    <div>
      <section className="grid-pattern border-b border-[#c4c6cf]">
        <div className="content-container grid items-center gap-12 py-20 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mono-label mb-8 inline-flex items-center gap-2 rounded-full border border-[#c4c6cf] bg-white px-3 py-1.5 text-[#43474e]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#006c49]" />
              {dictionary.ai.eyebrow}
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-[#00091b] md:text-6xl">
              {dictionary.ai.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#43474e]">
              {dictionary.ai.description}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton href={`/${locale}/contact`}>{dictionary.ai.primaryCta}</PrimaryButton>
              <PrimaryButton href={`/${locale}/projects`} variant="secondary">{dictionary.ai.secondaryCta}</PrimaryButton>
            </div>
          </div>
          <ProjectCard {...documentProject} locale={locale} tone="green" />
        </div>
      </section>

      <section className="content-container py-16">
        <SectionHeading
          title={dictionary.ai.useCasesTitle}
          description={dictionary.ai.useCasesDescription}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {documentUseCases.map((item) => (
            <div className="flex items-start gap-4 border border-[#c4c6cf] bg-white p-5 md:rounded-lg" key={item}>
              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#9af2c5]/50 text-[#006c49]">
                <FileSearch size={18} />
              </span>
              <p className="leading-7 text-[#43474e]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#c4c6cf] bg-[#eceef0]">
        <div className="content-container py-16">
          <SectionHeading title={dictionary.ai.flowTitle} />
          <div className="mt-12 grid gap-10 lg:grid-cols-4">
            {documentFlow.map((step, index) => (
              <ProcessStep key={step.title} number={index + 1} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="content-container py-16">
        <div className="border border-[#c4c6cf] bg-white p-10 text-center md:rounded-lg">
          <h2 className="font-display text-3xl font-semibold text-[#00091b]">{dictionary.ai.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#43474e]">
            {dictionary.ai.ctaDescription}
          </p>
          <div className="mt-8">
            <PrimaryButton href={`/${locale}/contact`}>{dictionary.common.sendRequest}</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
