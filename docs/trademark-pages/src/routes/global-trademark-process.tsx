import { createFileRoute } from "@tanstack/react-router";
import { Attorneys, Cta, Disclaimer, FeeTable, PageHero, SectionTitle, SiteHeader, SourceList, StepList, type Fee, type Source, type Step } from "@/components/site";

const title = "Global Trademark Protection & Madrid Protocol | IP Counsel Group";
const desc = "How to protect your trademark worldwide: Madrid Protocol through CIPO and WIPO, regional filings, national filings and priority strategy.";

export const Route = createFileRoute("/global-trademark-process")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GlobalPage,
});

const routes = [
  { name: "Madrid Protocol", tag: "One application, 130+ countries", body: "File one international application through CIPO, pay in one currency and manage all countries from a single registration at WIPO." },
  { name: "Regional Filings", tag: "One right, many countries", body: "A single right covering a whole region — EU trademark (EUIPO, 27 countries), Benelux, OAPI and ARIPO in Africa." },
  { name: "National Filings", tag: "Country by country", body: "Filed directly with each national office through local counsel. Best for non-Madrid countries or where local-language specification matters." },
];

const steps: Step[] = [
  { title: "Global Strategy & Searches", time: "Before filing", body: "We map your key markets, check availability in each, and choose the best mix of Madrid, regional and national filings.", points: ["Market priority", "Multi-country search", "Budget plan"] },
  { title: "Basic Application in Canada", time: "Day 1", body: "Your Canadian application or registration serves as the base for the international filing." },
  { title: "Claim Paris Convention Priority", time: "Within 6 months", body: "Filing abroad within six months of your Canadian filing lets foreign applications keep your Canadian filing date." },
  { title: "Madrid Application (MM2) via CIPO", time: "Filing", body: "We file the international application and designate your countries. CIPO certifies it matches the base application and forwards it to WIPO.", points: ["MM2 form", "Country designations", "CIPO certification"] },
  { title: "WIPO Review & International Registration", time: "~ 1–3 months", body: "WIPO checks formalities, records the international registration and publishes it in the WIPO Gazette." },
  { title: "Examination by Each Country", time: "12–18 months", body: "Each designated office examines under its own law and may issue a provisional refusal. We coordinate responses with local counsel." },
  { title: "Protection Granted", time: "Country by country", body: "Each country that does not refuse (or whose refusal is overcome) grants protection, with the same effect as a national registration." },
  { title: "Central Management & Renewal", time: "Every 10 years", body: "Renewals, ownership changes and new countries are recorded centrally at WIPO. For the first five years, the international registration depends on the Canadian base." },
];

const ideas = [
  ["China", "First-to-file — register early, before manufacturing or sourcing there."],
  ["United States", "Requires proof of use; Madrid filings need a declaration of intent to use."],
  ["European Union", "One EUTM covers 27 countries — usually more cost-effective than individual filings."],
  ["United Kingdom", "Separate from the EU since Brexit — file or designate it separately."],
  ["Non-Madrid countries", "Countries such as Argentina, Taiwan and much of the Middle East need direct national filings."],
];

const fees: Fee[] = [
  { item: "Basic fee — black & white mark", amount: "653" , note: "Covers 10 years" },
  { item: "Basic fee — mark in colour", amount: "903" },
  { item: "Complementary fee — per designated country", amount: "100", note: "Countries without an individual fee" },
  { item: "Individual fee — per designated country", amount: "Varies", note: "Set by each country, e.g. USA, EU, UK, China, Japan" },
  { item: "Supplementary fee — each class beyond three", amount: "100" },
  { item: "Adding countries later (subsequent designation)", amount: "300", note: "Plus each country's fee" },
  { item: "Renewal — basic fee", amount: "653", note: "Every 10 years, plus country fees" },
  { item: "Recording a transfer / licence / limitation", amount: "177" },
];

const sources: Source[] = [
  { org: "WIPO", label: "Madrid System — overview", href: "https://www.wipo.int/en/web/madrid-system" },
  { org: "WIPO", label: "Schedule of fees", href: "https://www.wipo.int/en/web/madrid-system/fees/sched" },
  { org: "WIPO", label: "Madrid Fee Calculator", href: "https://madrid.wipo.int/feecalcapp/" },
  { org: "WIPO", label: "Madrid Monitor (track registrations)", href: "https://www3.wipo.int/madrid/monitor/en/" },
  { org: "WIPO", label: "Global Brand Database", href: "https://branddb.wipo.int/" },
  { org: "CIPO", label: "Madrid Protocol in Canada", href: "https://ised-isde.canada.ca/site/canadian-intellectual-property-office/en/trademarks/madrid-protocol" },
];

function GlobalPage() {
  return (
    <>
      <SiteHeader />
      <PageHero eyebrow="Global • Madrid Protocol • WIPO" title={<>Protect your brand <em>worldwide</em></>} intro="Canada is a member of the Madrid Protocol, so a Canadian business can extend its trademark to over 130 countries through one application — or combine it with regional and national filings." />
      <main className="mx-auto max-w-6xl px-6 py-20 space-y-24">
        <section>
          <SectionTitle n="01 / Ways to file" title={<>Three routes to <em>international</em> protection</>} />
          <div className="grid md:grid-cols-3 gap-px bg-border border">
            {routes.map((r) => (
              <div key={r.name} className="bg-card p-8">
                <p className="eyebrow">{r.tag}</p>
                <h3 className="mt-3 text-2xl font-medium">{r.name}</h3>
                <p className="mt-3 text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <SectionTitle n="02 / Madrid Protocol process" title={<>From Canada to the <em>world</em>, step by step</>} />
          <StepList steps={steps} />
        </section>
        <section>
          <SectionTitle n="03 / Market notes" title="Things to know in key markets" />
          <dl className="divide-y border-y">
            {ideas.map(([k, v]) => (
              <div key={k} className="grid md:grid-cols-[240px_1fr] gap-2 py-5">
                <dt className="font-display text-xl">{k}</dt>
                <dd className="text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section>
          <SectionTitle n="04 / Fees" title={<>WIPO <em>Madrid</em> fees</>} />
          <FeeTable fees={fees} currency="CHF" />
          <p className="mt-4 text-sm text-muted-foreground">Official WIPO fees in Swiss francs. Use WIPO's fee calculator for an exact country-by-country total. Our attorney fee is a flat, one-time fee per international filing.</p>
        </section>
        <section>
          <SectionTitle n="05 / Your attorneys" title={<>Handled by <em>licensed</em> counsel</>} />
          <Attorneys />
        </section>
        <section>
          <SectionTitle n="06 / Sources & further reading" title="Official WIPO & CIPO resources" />
          <SourceList sources={sources} />
        </section>
      </main>
      <Disclaimer />
      <Cta />
    </>
  );
}
