import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SiteHeader() {
  const link = "text-sm text-muted-foreground hover:text-foreground transition-colors";
  return (
    <header className="border-b bg-background/90 backdrop-blur sticky top-0 z-10">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-lg font-semibold">IP Counsel Group</Link>
        <nav className="flex gap-6">
          <Link to="/canada-trademark-process" className={link} activeProps={{ className: "text-foreground" }}>Canada</Link>
          <Link to="/global-trademark-process" className={link} activeProps={{ className: "text-foreground" }}>Global</Link>
        </nav>
      </div>
    </header>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro: string }) {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 text-4xl md:text-6xl font-medium max-w-3xl leading-[1.05]">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-muted">{intro}</p>
      </div>
    </section>
  );
}

export type Step = { title: string; time: string; body: string; points?: string[] };

export function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="divide-y border-y">
      {steps.map((s, i) => (
        <li key={s.title} className="grid md:grid-cols-[120px_1fr_200px] gap-4 py-8">
          <span className="font-display text-4xl text-accent">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3 className="text-2xl font-medium">{s.title}</h3>
            <p className="mt-2 text-muted-foreground max-w-2xl">{s.body}</p>
            {s.points && (
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <li key={p} className="text-xs border rounded-sm px-2 py-1 bg-card">{p}</li>
                ))}
              </ul>
            )}
          </div>
          <p className="eyebrow md:text-right self-start">{s.time}</p>
        </li>
      ))}
    </ol>
  );
}

export function SectionTitle({ n, title }: { n: string; title: ReactNode }) {
  return (
    <div className="mb-10">
      <p className="eyebrow">{n}</p>
      <h2 className="mt-3 text-3xl md:text-4xl font-medium">{title}</h2>
    </div>
  );
}

export function Cta() {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16 flex flex-col md:flex-row gap-6 md:items-center justify-between">
        <h2 className="text-3xl font-medium">Ready to protect your brand?</h2>
        <a href="https://www.internationalipcounsel.com/consultation" className="inline-flex bg-accent text-accent-foreground px-6 py-3 rounded-sm font-semibold hover:opacity-90">
          Schedule a Free Consultation
        </a>
      </div>
    </section>
  );
}

export function Disclaimer() {
  return (
    <p className="mx-auto max-w-6xl px-6 py-8 text-xs text-muted-foreground">
      Timelines are typical estimates and change with office backlogs. This page is general information, not legal advice.
    </p>
  );
}

export type Fee = { item: string; amount: string; note?: string };

export function FeeTable({ fees, currency }: { fees: Fee[]; currency: string }) {
  return (
    <div className="overflow-x-auto border rounded-sm bg-card">
      <table className="w-full text-sm">
        <thead className="bg-secondary text-left">
          <tr><th className="p-4">Official fee</th><th className="p-4 text-right">{currency}</th></tr>
        </thead>
        <tbody>
          {fees.map((f) => (
            <tr key={f.item} className="border-t">
              <td className="p-4"><span className="font-medium">{f.item}</span>{f.note && <span className="block text-muted-foreground text-xs mt-1">{f.note}</span>}</td>
              <td className="p-4 text-right font-display text-lg whitespace-nowrap">{f.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export type Source = { label: string; org: string; href: string };

export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <ul className="grid md:grid-cols-2 gap-px bg-border border">
      {sources.map((s) => (
        <li key={s.href} className="bg-card">
          <a href={s.href} target="_blank" rel="noreferrer" className="block p-6 hover:bg-secondary transition-colors">
            <p className="eyebrow">{s.org}</p>
            <p className="mt-2 font-medium">{s.label} ↗</p>
          </a>
        </li>
      ))}
    </ul>
  );
}

const attorneys = [
  { name: "James Andrew Smith", role: "Trademark Attorney", focus: "Canadian filings, examination & CIPO correspondence" },
  { name: "Christopher Tortorice", role: "Trademark Attorney", focus: "Office action responses, oppositions & enforcement" },
  { name: "Jason Hugh", role: "Trademark Attorney", focus: "Madrid Protocol & international portfolio strategy" },
];

export function Attorneys() {
  return (
    <div className="grid md:grid-cols-3 gap-px bg-border border">
      {attorneys.map((a) => (
        <div key={a.name} className="bg-card p-8">
          <div className="size-14 rounded-full bg-ink text-ink-foreground grid place-items-center font-display text-xl">
            {a.name.split(" ").map((w) => w[0]).filter((_, i, arr) => i === 0 || i === arr.length - 1).join("")}
          </div>
          <h3 className="mt-5 text-2xl font-medium">{a.name}</h3>
          <p className="eyebrow mt-2">{a.role}</p>
          <p className="mt-3 text-muted-foreground text-sm">{a.focus}</p>
        </div>
      ))}
    </div>
  );
}
