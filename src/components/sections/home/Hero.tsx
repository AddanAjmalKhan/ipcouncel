import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-cream-soft lg:min-h-[calc(100vh-6rem)]">
      <Container className="py-16 lg:py-24">
        <div>
          <span className="inline-block border border-border bg-cream-dark px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/80">
            U.S. Trademark Counsel • USPTO &amp; Madrid Protocol Representation
          </span>

          <h1 className="mt-8 font-serif text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            America&apos;s Trusted{" "}
            <em className="italic text-ink">Trademark</em> Attorneys
          </h1>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-muted">
            Protect your brand in the U.S. and abroad. We represent entrepreneurs,
            startups, and established companies through federal trademark filing,
            Madrid Protocol global registration, and the full life of your mark —
            from search through ten-year renewals.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/consultation" variant="primary">
              Schedule a Free Consultation
            </Button>
            <Button href="/practice-areas" variant="outline">
              Explore Practice Areas
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
