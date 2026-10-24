import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { processSteps } from "@/lib/data/process";

export default function CommitmentSection() {
  return (
    <section className="bg-ink text-cream">
      <Container className="grid grid-cols-1 gap-12 py-20 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:py-28">
        <div>
          <SectionLabel number="00" label="Our Commitment" variant="accent" />
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] sm:text-5xl">
            Once your application is filed,{" "}
            <em className="italic">we take over.</em>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">
            You focus on your business. We handle every USPTO letter, every
            deadline, and every renewal for the life of your mark.
          </p>
        </div>

        <div className="grid grid-cols-1 border border-cream/15 sm:grid-cols-2">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="border-cream/15 px-8 py-10 [&:nth-child(1)]:border-b [&:nth-child(1)]:sm:border-r [&:nth-child(2)]:border-b [&:nth-child(3)]:sm:border-r"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
                {step.stage}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
