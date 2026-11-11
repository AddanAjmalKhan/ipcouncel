import { createFileRoute } from "@tanstack/react-router";
import { Attorneys, Cta, Disclaimer, FeeTable, PageHero, SectionTitle, SiteHeader, SourceList, StepList, type Fee, type Source, type Step } from "@/components/site";

const title = "Canadian Trademark Registration Process | IP Counsel Group";
const desc = "Step-by-step guide to registering a trademark with CIPO: search, filing, examination, advertisement, opposition, registration and renewal.";

export const Route = createFileRoute("/canada-trademark-process")({
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
  component: CanadaPage,
});

const steps: Step[] = [
  { title: "Clearance Search & Legal Opinion", time: "1–5 business days", body: "We search the Canadian Trademarks Database, provincial business names and common-law use to spot conflicts before you invest in filing.", points: ["Federal search", "Common-law search", "Attorney opinion"] },
  { title: "Application Filed with CIPO", time: "Day 1", body: "We draft goods and services using CIPO's pre-approved list, grouped by Nice class, and file electronically. Since 2019, you do not need to declare use in Canada to file or register.", points: ["Nice classification", "Filing date secured", "Paris priority claim (if any)"] },
  { title: "Formalities Check", time: "Weeks after filing", body: "CIPO confirms the application meets minimum requirements and assigns the filing date. Expedited examination is available in limited cases (e.g. court action, counterfeiting)." },
  { title: "Substantive Examination", time: "~ 18–30 months", body: "An examiner reviews distinctiveness, descriptiveness, confusion with existing marks, and the goods and services wording." },
  { title: "Examiner's Report (Office Action)", time: "3 months to respond", body: "If objections are raised, we argue the case, amend the application or submit evidence. Extensions are available for a fee.", points: ["Confusion", "Clearly descriptive", "Goods & services wording"] },
  { title: "Approval & Advertisement", time: "After approval", body: "The approved application is published in the Canadian Trademarks Journal so third parties can review it." },
  { title: "Opposition Period", time: "2 months", body: "Anyone may file a statement of opposition with the Trademarks Opposition Board. We monitor the window and defend your application if challenged." },
  { title: "Registration", time: "Automatic", body: "If no opposition is filed (or it is resolved in your favour), the mark registers. There is no separate registration fee, and you may use the ® symbol." },
  { title: "Maintenance & 10-Year Renewal", time: "Every 10 years", body: "Registrations renew every ten years. After three years, an unused mark can be challenged under Section 45, so keep evidence of use.", points: ["Section 45 non-use", "Watch services", "Renewal filing"] },
];

const vsUs = [
  ["Use required to register", "No", "Yes (or Statement of Use)"],
  ["Typical time to registration", "~ 2–3 years", "~ 12–18 months"],
  ["Opposition window", "2 months", "30 days (extendable)"],
  ["Renewal", "Every 10 years", "Years 5–6, then every 10"],
  ["Government office", "CIPO", "USPTO"],
];

const fees: Fee[] = [
  { item: "Application — first class (online)", amount: "$491.06" },
  { item: "Application — each additional class", amount: "$149.04" },
  { item: "Application — first class (paper / other means)", amount: "$640.10" },
  { item: "Extension of time (per deadline)", amount: "$150.00", note: "e.g. extra time to answer an examiner's report" },
  { item: "Statement of opposition", amount: "$1,115.08", note: "Paid by the party opposing a mark" },
  { item: "Section 45 non-use notice request", amount: "$595.06" },
  { item: "Renewal — first class (online)", amount: "$595.06", note: "Every 10 years" },
  { item: "Renewal — each additional class", amount: "$185.49" },
  { item: "Recording a transfer of ownership", amount: "$125.00" },
  { item: "Registration fee", amount: "$0", note: "Abolished for applications filed on or after June 17, 2019" },
];

const sources: Source[] = [
  { org: "CIPO", label: "Fees for trademarks", href: "https://ised-isde.canada.ca/site/canadian-intellectual-property-office/en/trademarks/fees-trademarks" },
  { org: "CIPO", label: "Trademarks: the registration process", href: "https://ised-isde.canada.ca/site/canadian-intellectual-property-office/en/trademarks" },
  { org: "CIPO", label: "Canadian Trademarks Database", href: "https://ised-isde.canada.ca/cipo/trademark-search/srch" },
  { org: "CIPO", label: "Goods and Services Manual", href: "https://ised-isde.canada.ca/cipo/gsm-mpb/" },
  { org: "CIPO", label: "Trademarks Opposition Board", href: "https://ised-isde.canada.ca/site/canadian-intellectual-property-office/en/trademarks-opposition-board" },
  { org: "Justice Canada", label: "Trademarks Act", href: "https://laws-lois.justice.gc.ca/eng/acts/t-13/" },
];

function CanadaPage() {
  return (
    <>
      <SiteHeader />
      <PageHero eyebrow="Canada • CIPO" title={<>The Canadian <em>Trademark</em> Process</>} intro="From the first search to ten-year renewals — every step of registering your brand with the Canadian Intellectual Property Office, handled by a licensed trademark attorney." />
      <main className="mx-auto max-w-6xl px-6 py-20 space-y-24">
        <section>
          <SectionTitle n="01 / Step by step" title={<>Nine stages, <em>one</em> point of contact.</>} />
          <StepList steps={steps} />
        </section>
        <section>
          <SectionTitle n="02 / Compared" title="Canada vs. United States" />
          <div className="overflow-x-auto border rounded-sm bg-card">
            <table className="w-full text-sm">
              <thead className="bg-secondary text-left">
                <tr><th className="p-4"></th><th className="p-4">Canada</th><th className="p-4">United States</th></tr>
              </thead>
              <tbody>
                {vsUs.map(([k, ca, us]) => (
                  <tr key={k} className="border-t"><td className="p-4 font-medium">{k}</td><td className="p-4">{ca}</td><td className="p-4 text-muted-foreground">{us}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <SectionTitle n="03 / Fees" title={<>CIPO <em>government</em> fees (2026)</>} />
          <FeeTable fees={fees} currency="CAD" />
          <p className="mt-4 text-sm text-muted-foreground">Official CIPO fees only, adjusted each January 1. Our attorney fees are flat and quoted before filing.</p>
        </section>
        <section>
          <SectionTitle n="04 / Your attorneys" title={<>Handled by <em>licensed</em> counsel</>} />
          <Attorneys />
        </section>
        <section>
          <SectionTitle n="05 / Sources & further reading" title="Official CIPO resources" />
          <SourceList sources={sources} />
        </section>
      </main>
      <Disclaimer />
      <Cta />
    </>
  );
}
