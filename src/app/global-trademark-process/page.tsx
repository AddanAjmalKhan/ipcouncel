import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import {
  filingRoutes,
  globalSteps,
  marketNotes,
  globalFees,
  globalSources,
} from "@/lib/data/global-process";

export const metadata: Metadata = {
  title: "Global Trademark Protection & Madrid Protocol",
  description:
    "How to protect your trademark worldwide: Madrid Protocol through CIPO and WIPO, regional filings, national filings, and priority strategy.",
};

export default function GlobalTrademarkProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Global"
        title={
          <>
            Protect Your Brand <em className="italic">Worldwide</em>
          </>
        }
        description="Canada is a member of the Madrid Protocol, so a Canadian business can extend its trademark to over 130 countries through one application — or combine it with regional and national filings."
      />

      <section className="bg-cream-soft py-20 lg:py-28">
        <Container>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-navy">
            Ways to File
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.0] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Three routes to <em className="italic">international</em> protection.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            {filingRoutes.map((route) => (
              <div key={route.name} className="bg-cream-soft p-8">
                <p className="text-xs font-medium text-muted-light">
                  {route.tag}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-ink">
                  {route.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {route.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <Container>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-navy">
            Madrid Protocol Process
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.0] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            From Canada to the <em className="italic">world</em>, step by step.
          </h2>

          <div className="mt-12 divide-y divide-border border border-border">
            {globalSteps.map((step, index) => (
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

      <section className="bg-cream-soft py-20 lg:py-28">
        <Container>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-navy">
            Market Notes
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.0] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Things to know in key markets.
          </h2>

          <dl className="mt-12 divide-y divide-border border-y border-border">
            {marketNotes.map((note) => (
              <div
                key={note.market}
                className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[220px_1fr] sm:gap-6"
              >
                <dt className="font-serif text-xl text-ink">{note.market}</dt>
                <dd className="text-sm leading-relaxed text-muted">{note.note}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <Container>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-navy">
            Fees
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.0] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            WIPO <em className="italic">Madrid</em> fees.
          </h2>

          <div className="mt-12 divide-y divide-border border border-border">
            {globalFees.map((fee) => (
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
            Official WIPO fees in Swiss francs. Use WIPO&apos;s fee calculator for an
            exact country-by-country total. Our attorney fee is a flat, one-time fee
            per international filing.
          </p>
        </Container>
      </section>

      <section className="bg-cream-soft py-20 lg:py-28">
        <Container>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-navy">
            Sources &amp; Further Reading
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.0] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Official WIPO &amp; CIPO resources.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {globalSources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="bg-cream-soft p-6 transition-colors duration-200 hover:bg-white"
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
