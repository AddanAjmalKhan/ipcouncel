import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import {
  canadaSteps,
  canadaVsUs,
  canadaFees,
  canadaSources,
} from "@/lib/data/canada-process";

export const metadata: Metadata = {
  title: "Canadian Trademark Registration Process",
  description:
    "Step-by-step guide to registering a trademark with CIPO: search, filing, examination, advertisement, opposition, registration, and renewal.",
};

export default function CanadaTrademarkProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Canada"
        title={
          <>
            The Canadian <em className="italic">Trademark</em> Process
          </>
        }
        description="From the first search to ten-year renewals — every step of registering your brand with the Canadian Intellectual Property Office, handled by a licensed trademark attorney."
      />

      <section className="bg-cream-soft py-20 lg:py-28">
        <Container>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-navy">
            Step by Step
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.0] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Nine stages, <em className="italic">one</em> point of contact.
          </h2>

          <div className="mt-12 divide-y divide-border border border-border">
            {canadaSteps.map((step, index) => (
              <div
                key={step.title}
                className="grid grid-cols-1 gap-4 p-8 sm:grid-cols-[60px_1fr_auto] sm:items-start sm:gap-10"
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-muted-light">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                  {step.points && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {step.points.map((point) => (
                        <li
                          key={point}
                          className="border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-navy"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <span className="inline-flex w-fit items-center border border-border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-navy">
                  {step.time}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <Container>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-navy">
            Compared
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.0] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Canada vs. United States
          </h2>

          <div className="mt-12 overflow-hidden border border-border">
            <div className="grid grid-cols-3 bg-cream-dark text-xs font-semibold uppercase tracking-[0.1em] text-navy">
              <div className="p-4"></div>
              <div className="p-4">Canada</div>
              <div className="p-4">United States</div>
            </div>
            {canadaVsUs.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-3 border-t border-border text-sm"
              >
                <div className="p-4 font-semibold text-ink">{row.label}</div>
                <div className="p-4 text-ink">{row.canada}</div>
                <div className="p-4 text-muted">{row.us}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-soft py-20 lg:py-28">
        <Container>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-navy">
            Fees
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.0] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            CIPO <em className="italic">government</em> fees.
          </h2>

          <div className="mt-12 divide-y divide-border border border-border">
            {canadaFees.map((fee) => (
              <div
                key={fee.item}
                className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold text-ink">{fee.item}</p>
                  {fee.note && (
                    <p className="mt-1 text-xs text-muted">{fee.note}</p>
                  )}
                </div>
                <p className="font-serif text-lg text-ink">{fee.amount}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Official CIPO fees only, adjusted each January 1. Our attorney fees are flat
            and quoted before filing.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <Container>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-navy">
            Sources &amp; Further Reading
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.0] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Official CIPO resources.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {canadaSources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="bg-cream p-6 transition-colors duration-200 hover:bg-white"
              >
                <p className="text-xs font-medium text-muted-light">
                  {source.org}
                </p>
                <p className="mt-2 font-semibold text-ink">{source.label} →</p>
              </a>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted">
            Timelines are typical estimates and change with office backlogs. This page
            is general information, not legal advice.
          </p>
        </Container>
      </section>

      <CtaBanner
        title="Ready to protect your brand?"
        buttonText="Schedule a Free Consultation"
      />
    </>
  );
}
