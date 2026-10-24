import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import FaqAccordion from "@/components/resources/FaqAccordion";
import Container from "@/components/ui/Container";
import { resourceCards, faqItems } from "@/lib/data/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides and resources on federal trademark filing, USPTO examination, and brand protection.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title={
          <>
            Trademark knowledge, <em className="italic">plainly explained.</em>
          </>
        }
        description="Guides, FAQs, and reference material for entrepreneurs and in-house counsel navigating the U.S. trademark system."
      />

      <section className="bg-cream-soft py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {resourceCards.map((resource) => (
              <div key={resource.number} className="bg-cream-soft p-8">
                <p className="text-xs font-medium text-muted-light">
                  {resource.number}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <Container>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-navy">
            Frequently Asked
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-ink sm:text-5xl">
            Common questions
          </h2>

          <div className="mt-12">
            <FaqAccordion items={faqItems} />
          </div>
        </Container>
      </section>
    </>
  );
}
