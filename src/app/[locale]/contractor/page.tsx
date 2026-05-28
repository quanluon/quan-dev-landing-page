import { Clock, Globe2, Handshake, UserRound } from "lucide-react";
import { ContactCard, ServiceCard } from "@/components/cards";
import { LeadForm } from "@/components/lead-form";
import { SectionHeading } from "@/components/section-heading";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/routing";
import { getSiteData } from "@/lib/site-data";
import { Avatar } from "@/components/avatar";

export const metadata = {
  title: "Remote Contractor - Hồng Quân Dev",
};

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function ContractorPage({ params }: PageProps) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const { contactCards, contractorFit, contractorProfile, servicePackages } = getSiteData(locale);
  const interests = servicePackages.map((service) => service.title as string);

  return (
    <div>
      <section className="grid-pattern border-b border-[#c4c6cf]">
        <div className="content-container grid items-center gap-12 py-20 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mono-label mb-8 inline-flex items-center gap-2 rounded-full border border-[#c4c6cf] bg-white px-3 py-1.5 text-[#43474e]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#006c49]" />
              {dictionary.contractor.eyebrow}
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-[#00091b] md:text-6xl">
              {dictionary.contractor.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#43474e]">
              {dictionary.contractor.description}
            </p>
            <p className="mt-5 max-w-2xl leading-7 text-[#43474e]">
              {dictionary.contractor.support}
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {[
                { label: dictionary.contractor.chips[0], icon: Clock },
                { label: dictionary.contractor.chips[1], icon: Globe2 },
                { label: dictionary.contractor.chips[2], icon: Handshake },
              ].map((item) => (
                <div className="flex items-center gap-3 border border-[#c4c6cf] bg-white px-4 py-3 text-sm font-semibold text-[#43474e] md:rounded-lg" key={item.label}>
                  <item.icon className="text-[#006c49]" size={21} />
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[#c4c6cf] bg-white p-8 md:rounded-lg">
            <div className="flex items-center gap-6 border-b border-[#c4c6cf] pb-7">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#c4c6cf] bg-[#e6e8ea] text-[#1a365d]">
                <Avatar/>
              </div>
              <div>
                <h2 className="font-display text-3xl font-semibold text-[#00091b]">Lương Hồng Quân</h2>
                <p className="mt-1 text-[#43474e]">{dictionary.contractor.profileRole}</p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#81d8ad] bg-[#9af2c5]/40 px-4 py-2 text-sm font-semibold text-[#006c49]">
                  <span className="h-2 w-2 rounded-full bg-[#006c49]" />
                  {dictionary.contractor.availability}
                </p>
              </div>
            </div>
            <div className="mt-7 space-y-6">
              {contractorProfile.map((item) => (
                <div className="flex gap-5" key={item.title}>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-[#d6e3ff] text-[#1a365d]">
                    <item.icon size={28} />
                  </span>
                  <span>
                    <span className="block font-display text-xl font-semibold text-[#00091b]">{item.title}</span>
                    <span className="mt-1 block text-[#43474e]">{item.description}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-container py-16">
        <SectionHeading title={dictionary.contractor.fitTitle} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {contractorFit.map((item) => (
            <ServiceCard compact key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="content-container pb-20">
        <SectionHeading title={dictionary.contractor.contactTitle} />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {contactCards.map((card) => (
              <ContactCard key={card.title} {...card} />
            ))}
          </div>
          <LeadForm dictionary={dictionary.form} interests={interests} locale={locale} />
        </div>
      </section>
    </div>
  );
}
