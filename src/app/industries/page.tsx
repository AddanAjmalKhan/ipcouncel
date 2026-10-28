import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Container from "@/components/ui/Container";
import { industryDetails } from "@/lib/data/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Trusted by brands across technology, e-commerce, consumer products, healthcare, hospitality, financial services, entertainment, and professional services.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title={
          <>
            Trademark counsel for <em className="italic">every industry.</em>
          </>
        }
        description="We represent brand owners across fifteen industries — from solo Amazon sellers to established multi-jurisdictional franchises."
      />

      <section className="bg-cream-soft py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {industryDetails.map((industry) => (
              <div
                key={industry.number}
                className="bg-cream-soft p-8 transition-colors duration-200 hover:bg-white"
              >
                <p className="text-xs font-medium text-muted-light">
                  {industry.number}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {industry.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
