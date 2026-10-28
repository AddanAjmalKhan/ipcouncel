import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { allPracticeAreas } from "@/lib/data/practice-areas";

type PracticeAreaPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allPracticeAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: PracticeAreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = allPracticeAreas.find((item) => item.slug === slug);

  if (!area) {
    return {};
  }

  return {
    title: area.title,
    description: area.description,
  };
}

export default async function PracticeAreaDetailPage({
  params,
}: PracticeAreaPageProps) {
  const { slug } = await params;
  const index = allPracticeAreas.findIndex((item) => item.slug === slug);

  if (index === -1) {
    notFound();
  }

  const area = allPracticeAreas[index];
  const next = allPracticeAreas[(index + 1) % allPracticeAreas.length];

  return (
    <>
      <section className="bg-cream-soft">
        <Container className="py-16 lg:py-20">
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
          >
            ← All Practice Areas
          </Link>

          <div className="mt-10 flex items-center gap-3">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-navy">
              {area.number}
            </span>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-light">
              Trademark Practice
            </span>
          </div>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[0.95] tracking-tighter text-ink sm:text-6xl lg:text-7xl xl:text-8xl">
            {area.title}
          </h1>

          <p className="mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-muted sm:text-2xl">
            {area.tagline}
          </p>
        </Container>

        <div className="border-t border-border">
          <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1fr_1.6fr] lg:gap-20 lg:py-20">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-navy">
                Services
              </p>
              <ul className="mt-6 space-y-4">
                {area.services.map((service) => (
                  <li
                    key={service}
                    className="border-l-2 border-border pl-4 text-base text-ink"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="space-y-6 text-lg leading-relaxed text-muted">
                {area.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 border border-border bg-cream-dark p-8 lg:p-10">
                <h3 className="font-serif text-2xl text-ink">
                  We manage the entire process.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  From the moment you engage us, our firm becomes the
                  correspondence attorney of record. We handle every USPTO
                  letter, every Office Action, and every 5- and 10-year
                  renewal for the life of your mark.
                </p>
                <div className="mt-6">
                  <Button href="/consultation" variant="primary">
                    Discuss Your Matter
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="bg-cream py-10">
        <Container className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-muted">Next practice area</span>
          <Link
            href={`/practice-areas/${next.slug}`}
            className="font-serif text-2xl text-ink transition-colors hover:text-accent"
          >
            {next.title} →
          </Link>
        </Container>
      </section>
    </>
  );
}
