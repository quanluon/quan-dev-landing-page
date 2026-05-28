import { Bot, Blocks, Code2, Grid2X2 } from "lucide-react";
import { PrimaryButton } from "@/components/primary-button";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/routing";
import { getSiteData } from "@/lib/site-data";
import { cn, resolveTone, toneClasses } from "@/lib/utils";

export const metadata = {
  title: "Dự án - Hồng Quân Dev",
};

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function ProjectsPage({ params }: PageProps) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const { projects, values } = getSiteData(locale);
  const filters = [
    { label: dictionary.projects.filters[0], icon: Grid2X2, active: true },
    { label: dictionary.projects.filters[1], icon: Code2 },
    { label: dictionary.projects.filters[2], icon: Bot },
    { label: dictionary.projects.filters[3], icon: Blocks },
  ];

  return (
    <div>
      <section className="grid-pattern border-b border-[#c4c6cf]">
        <div className="content-container py-20">
          <SectionHeading
            align="left"
            eyebrow={dictionary.projects.eyebrow}
            title={dictionary.projects.title}
            description={dictionary.projects.description}
          />
          <div className="mt-10 flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                className={cn(
                  "inline-flex h-11 items-center gap-2 rounded-[3px] border px-5 text-sm font-semibold transition",
                  filter.active
                    ? "border-[#00091b] bg-[#00091b] text-white"
                    : "border-[#c4c6cf] bg-white text-[#43474e]",
                )}
                key={filter.label}
                type="button"
              >
                <filter.icon size={18} />
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="content-container py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              locale={locale}
              tone={index === 1 ? "green" : index === 2 ? "orange" : index === 3 ? "purple" : "blue"}
            />
          ))}
        </div>
      </section>

      <section className="content-container pb-16">
        <div className="grid gap-6 border border-[#c4c6cf] bg-white p-8 md:grid-cols-3 md:rounded-lg">
          {values.map((value) => (
            <div className="flex items-center gap-5 border-b border-dashed border-[#c4c6cf] pb-6 last:border-b-0 last:pb-0 md:border-b-0 md:border-r md:pb-0 md:pr-6 last:md:border-r-0" key={value.title}>
              <div className={cn("flex h-14 w-14 shrink-0 items-center justify-center rounded-md", toneClasses[resolveTone(value.tone as string)].soft)}>
                <value.icon size={26} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-[#00091b]">{value.title}</h3>
                <p className="mt-2 leading-7 text-[#43474e]">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-container pb-20">
        <div className="border border-[#c4c6cf] bg-[#eceef0] p-10 text-center md:rounded-lg">
          <h2 className="font-display text-3xl font-semibold text-[#00091b]">
            {dictionary.projects.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#43474e]">
            {dictionary.projects.ctaDescription}
          </p>
          <div className="mt-8">
            <PrimaryButton href={`/${locale}/contact`}>{dictionary.common.discussProject}</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
