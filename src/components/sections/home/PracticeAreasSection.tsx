import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import PracticeAreaGrid from "@/components/practice-areas/PracticeAreaGrid";
import { practiceAreas } from "@/lib/data/practice-areas";

export default function PracticeAreasSection() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <SectionLabel number="01" label="Practice Areas" />
            <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.1] text-ink sm:text-5xl">
              Comprehensive Intellectual Property Counsel
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            From U.S. registration to Madrid Protocol global filings and
            lifecycle enforcement, we provide flat-fee legal representation
            for your brand assets.
          </p>
        </div>

        <div className="mt-14">
          <PracticeAreaGrid areas={practiceAreas} />
        </div>

        <div className="mt-10">
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-2 border-b border-ink pb-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:border-accent hover:text-accent"
          >
            View All Eleven Practice Areas →
          </Link>
        </div>
      </Container>
    </section>
  );
}
