import { MessageCircle } from "lucide-react";
import { ServiceCard } from "@/components/cards";
import { PrimaryButton } from "@/components/primary-button";
import { ProcessStep } from "@/components/process-step";
import { SectionHeading } from "@/components/section-heading";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/routing";
import { getSiteData } from "@/lib/site-data";

export const metadata = {
  title: "Dịch vụ - Hồng Quân Dev",
};

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const { servicePackages, serviceProcess } = getSiteData(locale);

  return (
    <div>
      <section className="grid-pattern border-b border-[#c4c6cf]">
        <div className="content-container py-20">
          <SectionHeading
            title={dictionary.services.title}
            description={dictionary.services.description}
          />
        </div>
      </section>

      <section className="content-container py-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {servicePackages.map((service) => (
            <ServiceCard compact key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="border-y border-[#c4c6cf] bg-[#eceef0]">
        <div className="content-container py-16">
          <SectionHeading title={dictionary.services.processTitle} />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {serviceProcess.map((step, index) => (
              <ProcessStep key={step.title} number={index + 1} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="content-container py-16">
        <div className="grid items-center gap-8 border border-[#c4c6cf] bg-white p-8 md:grid-cols-[auto_1fr_auto] md:rounded-lg">
          <div className="flex h-20 w-20 items-center justify-center rounded-md bg-[#d6e3ff] text-[#1a365d]">
            <MessageCircle size={38} />
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-[#00091b]">{dictionary.services.ctaTitle}</h2>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-[#43474e]">
              {dictionary.services.ctaDescription}
            </p>
          </div>
          <PrimaryButton href={`/${locale}/contact`}>{dictionary.common.contactDiscuss}</PrimaryButton>
        </div>
      </section>
    </div>
  );
}
