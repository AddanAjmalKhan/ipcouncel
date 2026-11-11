import type { DetailedStep, FeeRow, SourceLink } from "@/lib/data/canada-process";

export type FilingRoute = {
  name: string;
  tag: string;
  description: string;
};

export type MarketNote = {
  market: string;
  note: string;
};

export const filingRoutes: FilingRoute[] = [
  {
    name: "Madrid Protocol",
    tag: "One Application, 130+ Countries",
    description:
      "File one international application through CIPO, pay in one currency, and manage all countries from a single registration at WIPO.",
  },
  {
    name: "Regional Filings",
    tag: "One Right, Many Countries",
    description:
      "A single right covering a whole region — EU trademark (EUIPO, 27 countries), Benelux, OAPI, and ARIPO in Africa.",
  },
  {
    name: "National Filings",
    tag: "Country by Country",
    description:
      "Filed directly with each national office through local counsel. Best for non-Madrid countries or where local-language specification matters.",
  },
];

export const globalSteps: DetailedStep[] = [
  {
    title: "Global Strategy & Searches",
    time: "Before Filing",
    description:
      "We map your key markets, check availability in each, and choose the best mix of Madrid, regional, and national filings.",
    points: ["Market Priority", "Multi-Country Search", "Budget Plan"],
  },
  {
    title: "Basic Application in Canada",
    time: "Day 1",
    description: "Your Canadian application or registration serves as the base for the international filing.",
  },
  {
    title: "Claim Paris Convention Priority",
    time: "Within 6 Months",
    description:
      "Filing abroad within six months of your Canadian filing lets foreign applications keep your Canadian filing date.",
  },
  {
    title: "Madrid Application (MM2) via CIPO",
    time: "Filing",
    description:
      "We file the international application and designate your countries. CIPO certifies it matches the base application and forwards it to WIPO.",
    points: ["MM2 Form", "Country Designations", "CIPO Certification"],
  },
  {
    title: "WIPO Review & International Registration",
    time: "~1–3 Months",
    description: "WIPO checks formalities, records the international registration, and publishes it in the WIPO Gazette.",
  },
  {
    title: "Examination by Each Country",
    time: "12–18 Months",
    description:
      "Each designated office examines under its own law and may issue a provisional refusal. We coordinate responses with local counsel.",
  },
  {
    title: "Protection Granted",
    time: "Country by Country",
    description:
      "Each country that does not refuse (or whose refusal is overcome) grants protection, with the same effect as a national registration.",
  },
  {
    title: "Central Management & Renewal",
    time: "Every 10 Years",
    description:
      "Renewals, ownership changes, and new countries are recorded centrally at WIPO. For the first five years, the international registration depends on the Canadian base.",
  },
];

export const marketNotes: MarketNote[] = [
  { market: "China", note: "First-to-file — register early, before manufacturing or sourcing there." },
  {
    market: "United States",
    note: "Requires proof of use; Madrid filings need a declaration of intent to use.",
  },
  {
    market: "European Union",
    note: "One EUTM covers 27 countries — usually more cost-effective than individual filings.",
  },
  { market: "United Kingdom", note: "Separate from the EU since Brexit — file or designate it separately." },
  {
    market: "Non-Madrid Countries",
    note: "Countries such as Argentina, Taiwan, and much of the Middle East need direct national filings.",
  },
];

export const globalFees: FeeRow[] = [
  { item: "Basic Fee — Black & White Mark", amount: "CHF 653", note: "Covers 10 years" },
  { item: "Basic Fee — Mark in Colour", amount: "CHF 903" },
  {
    item: "Complementary Fee — Per Designated Country",
    amount: "CHF 100",
    note: "Countries without an individual fee",
  },
  {
    item: "Individual Fee — Per Designated Country",
    amount: "Varies",
    note: "Set by each country, e.g. USA, EU, UK, China, Japan",
  },
  { item: "Supplementary Fee — Each Class Beyond Three", amount: "CHF 100" },
  {
    item: "Adding Countries Later (Subsequent Designation)",
    amount: "CHF 300",
    note: "Plus each country's fee",
  },
  { item: "Renewal — Basic Fee", amount: "CHF 653", note: "Every 10 years, plus country fees" },
  { item: "Recording a Transfer / Licence / Limitation", amount: "CHF 177" },
];

export const globalSources: SourceLink[] = [
  { org: "WIPO", label: "Madrid System — Overview", href: "https://www.wipo.int/en/web/madrid-system" },
  { org: "WIPO", label: "Schedule of Fees", href: "https://www.wipo.int/en/web/madrid-system/fees/sched" },
  { org: "WIPO", label: "Madrid Fee Calculator", href: "https://madrid.wipo.int/feecalcapp/" },
  { org: "WIPO", label: "Madrid Monitor (Track Registrations)", href: "https://www3.wipo.int/madrid/monitor/en/" },
  { org: "WIPO", label: "Global Brand Database", href: "https://branddb.wipo.int/" },
  {
    org: "CIPO",
    label: "Madrid Protocol in Canada",
    href: "https://ised-isde.canada.ca/site/canadian-intellectual-property-office/en/trademarks/madrid-protocol",
  },
];
