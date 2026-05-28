import { ContactCard, ServiceCard } from "@/components/cards";
import { DashboardMockup } from "@/components/dashboard-mockup";
import { PrimaryButton } from "@/components/primary-button";
import { ProcessStep } from "@/components/process-step";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/routing";
import { getSiteData } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const { contactCards, mainServices, projects, proofBadges, techStacks, workflow } = getSiteData(locale);

  return (
    <>
      <section className="grid-pattern border-b border-[#c4c6cf] bg-[#f7f9fb]">
        <div className="content-container grid items-center gap-14 py-20 md:py-24 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <div className="mono-label mb-8 inline-flex items-center gap-2 rounded-full border border-[#c4c6cf] bg-white px-3 py-1.5 text-[#43474e]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#006c49]" />
              {dictionary.home.eyebrow}
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-normal text-[#00091b] md:text-6xl">
              {dictionary.home.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#43474e]">
              {dictionary.home.intro}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#43474e]">
              {dictionary.home.subIntro}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton href={`/${locale}/contact`}>{dictionary.common.discussProject}</PrimaryButton>
              <PrimaryButton href={`/${locale}/projects`} variant="secondary">{dictionary.common.viewProjects}</PrimaryButton>
            </div>
          </div>
          <DashboardMockup locale={locale} />
        </div>
      </section>

      <section className="content-container py-10">
        <div className="grid border border-[#c4c6cf] bg-white md:grid-cols-5 md:rounded-lg">
          {proofBadges.map((item) => (
            <div className="flex items-center gap-3 border-b border-[#c4c6cf] px-5 py-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0" key={item.label}>
              <item.icon className={item.color} size={22} />
              <span className="text-sm font-semibold text-[#43474e]">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="content-container py-16">
        <SectionHeading
          title={dictionary.home.servicesTitle}
          description={dictionary.home.servicesDescription}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {mainServices.map((service) => (
            <ServiceCard {...service} actionLabel={dictionary.common.learnMore} href={`/${locale}${service.href}`} key={service.title} />
          ))}
        </div>
      </section>

      <section className="border-y border-[#c4c6cf] bg-[#eceef0]">
        <div className="content-container py-16">
          <SectionHeading
            title={dictionary.home.techTitle}
            description={dictionary.home.techDescription}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {techStacks.map((stack) => (
              <article className="border border-[#c4c6cf] bg-white p-6 md:rounded-lg" key={stack.title}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#00091b] text-white">
                    <stack.icon size={20} />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-[#00091b]">{stack.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span className="mono-label border border-[#c4c6cf] bg-[#f2f4f6] px-2 py-1 text-[#43474e]" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-container py-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            title={dictionary.home.projectsTitle}
            description={dictionary.home.projectsDescription}
          />
          <PrimaryButton href={`/${locale}/projects`} variant="ghost">{dictionary.common.viewAll}</PrimaryButton>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              locale={locale}
              tone={index === 1 ? "green" : index === 2 ? "orange" : "blue"}
            />
          ))}
        </div>
      </section>

      <section className="content-container pb-16">
        <SectionHeading title={dictionary.home.workflowTitle} />
        <div className="mt-12 grid gap-10 lg:grid-cols-4">
          {workflow.map((step, index) => (
            <ProcessStep key={step.title} number={index + 1} {...step} />
          ))}
        </div>
      </section>

      <section className="content-container pb-20">
        <div className="grid items-center gap-6 border border-[#c4c6cf] bg-white p-6 md:rounded-lg lg:grid-cols-[1.2fr_1fr_1fr_0.8fr] lg:p-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#00091b]">{dictionary.home.ctaTitle}</h2>
            <p className="mt-3 text-[#43474e]">{dictionary.home.ctaDescription}</p>
          </div>
          {contactCards.slice(0, 2).map((card) => (
            <ContactCard key={card.title} {...card} />
          ))}
          <PrimaryButton className="w-full" href={`/${locale}/contact`}>
            {dictionary.common.sendRequest}
          </PrimaryButton>
        </div>
      </section>
    </>
  );
}
