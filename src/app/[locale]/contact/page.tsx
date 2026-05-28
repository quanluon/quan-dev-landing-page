import { ContactCard } from "@/components/cards";
import { LeadForm } from "@/components/lead-form";
import { SectionHeading } from "@/components/section-heading";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/routing";
import { getSiteData } from "@/lib/site-data";

export const metadata = {
  title: "Liên hệ - Hồng Quân Dev",
};

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const { contactCards, servicePackages, serviceProcess } = getSiteData(locale);
  const interests = servicePackages.map((service) => service.title as string);

  return (
    <div>
      <section className="grid-pattern border-b border-[#c4c6cf]">
        <div className="content-container py-20">
          <SectionHeading
            align="left"
            title={dictionary.contact.title}
            description={dictionary.contact.description}
          />
        </div>
      </section>

      <section className="content-container py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <LeadForm dictionary={dictionary.form} interests={interests} locale={locale} />
          <div className="space-y-6">
            <div className="border border-[#c4c6cf] bg-white p-7 md:rounded-lg">
              <h2 className="font-display text-2xl font-semibold text-[#00091b]">{dictionary.contact.infoTitle}</h2>
              <div className="mt-6 space-y-4">
                {contactCards.map((card) => (
                  <ContactCard key={card.title} {...card} />
                ))}
              </div>
            </div>
            <div className="border border-[#c4c6cf] bg-[#eceef0] p-7 md:rounded-lg">
              <h2 className="font-display text-2xl font-semibold text-[#00091b]">{dictionary.contact.processTitle}</h2>
              <div className="mt-6 space-y-5">
                {serviceProcess.map((step, index) => (
                  <div className="flex gap-4" key={step.title}>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00091b] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span>
                      <span className="block font-semibold text-[#00091b]">{step.title}</span>
                      <span className="mt-1 block text-sm leading-6 text-[#43474e]">{step.description}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
