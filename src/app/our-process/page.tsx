import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { fullProcessSteps, madridSteps } from "@/lib/data/process";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Once your application is filed, we take over — every USPTO letter, every deadline, and every renewal for the life of your mark.",
};

export default function OurProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Process"
        title={
          <>
            Eight steps. <em className="italic">One firm.</em>
            <br />
            Ten years of protection.
          </>
        }
        description="Once you engage us, we manage the entire USPTO process — through registration, through the 5-year Section 8, and through every 10-year renewal thereafter."
      />

      <section className="bg-cream-soft py-20 lg:py-28">
        <Container>
          <div className="divide-y divide-border border border-border">
            {fullProcessSteps.map((step) => (
              <div
                key={step.step}
                className="grid grid-cols-1 gap-4 p-8 sm:grid-cols-[100px_1fr_auto] sm:items-center sm:gap-10"
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-muted-light">
                  Step {step.step}
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
                <span className="inline-flex w-fit items-center border border-border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-navy">
                  {step.badge}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink text-cream">
        <Container className="grid grid-cols-1 gap-12 py-20 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:py-28">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              Global Protection
            </p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.1] sm:text-5xl">
              Madrid Protocol international filing.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">
              Extend your U.S. trademark to 130+ countries through a single
              Madrid Protocol application filed via the USPTO and certified
              to WIPO. We manage the certification, country designations,
              and any office actions raised by member offices.
            </p>
          </div>

          <div className="grid grid-cols-1 border border-cream/15 sm:grid-cols-2">
            {madridSteps.map((step, index) => (
              <div
                key={step.label}
                className={cn(
                  "border-cream/15 px-8 py-10",
                  index === 0 && "border-b sm:border-r",
                  index === 1 && "border-b",
                  index === 2 && "sm:border-r"
                )}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
                  {step.label}
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

      <CtaBanner
        title="Start with a free consultation."
        description=""
        buttonText="Schedule with an Attorney"
      />
    </>
  );
}
