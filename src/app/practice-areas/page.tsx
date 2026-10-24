import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { allPracticeAreas, flatFeeItems } from "@/lib/data/practice-areas";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Comprehensive intellectual property counsel — from trademark registration and clearance to office action responses and Madrid Protocol global filing.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Practice Areas"
        title={
          <>
            Eleven disciplines. <em className="italic">One trademark firm.</em>
          </>
        }
        description="Every service is delivered by a licensed U.S. trademark attorney. Core work is offered at a flat, one-time fee. Select an area for a detailed overview and typical engagement."
      />

      <section className="bg-cream-soft py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {allPracticeAreas.map((area) => (
              <div key={area.slug} id={area.slug} className="scroll-mt-28 bg-cream-soft p-10">
                <p className="text-xs font-medium text-muted-light">
                  {area.number}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-ink">
                  {area.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  {area.description}
                </p>
                <Link
                  href={`/practice-areas#${area.slug}`}
                  className="mt-6 inline-flex items-center gap-2 border-b border-ink pb-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-navy">
              Flat-Fee Pricing
            </p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-ink sm:text-5xl">
              One clear fee for the service.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
              Our core trademark services — including U.S. applications,
              Office Action responses, and Madrid Protocol global filings —
              are offered at a flat, one-time fee. You receive the full
              attorney engagement without hourly billing surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 border border-border sm:grid-cols-2">
            {flatFeeItems.map((item, index) => (
              <div
                key={item.title}
                className={cn(
                  "border-border bg-cream px-8 py-10",
                  index === 0 && "border-b sm:border-r",
                  index === 1 && "border-b",
                  index === 2 && "sm:border-r"
                )}
              >
                <h3 className="text-base font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
