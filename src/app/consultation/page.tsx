import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Container from "@/components/ui/Container";
import ConsultationForm from "@/components/consultation/ConsultationForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Schedule a Consultation",
  description:
    "Speak directly with a trademark attorney — no sales team, no gatekeeping. Consultations are always complimentary.",
};

const contactRows = [
  { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}` },
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Hours", value: siteConfig.hours },
];

const expectations = [
  "30-minute call with a licensed U.S. trademark attorney.",
  "Preliminary review of your mark and business goals.",
  "Clear, flat-fee quote for any recommended work.",
  "No obligation, no sales pressure.",
];

export default function ConsultationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Schedule your trademark <em className="italic">consultation.</em>
          </>
        }
        description="Speak directly with one of our trademark attorneys about your application, existing registration, or brand protection strategy. Consultations are always complimentary."
      />

      <section className="bg-cream-soft py-20 lg:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-navy">
              Direct Contact
            </p>

            <dl className="mt-6 divide-y divide-border border-t border-border">
              {contactRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-6 py-4"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                    {row.label}
                  </dt>
                  <dd className="text-sm text-ink">
                    {row.href ? (
                      <a href={row.href} className="hover:text-accent">
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 border border-border bg-cream-dark p-8">
              <h3 className="font-serif text-xl text-ink">What to expect</h3>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-relaxed text-muted">
                {expectations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <ConsultationForm />
        </Container>
      </section>
    </>
  );
}
