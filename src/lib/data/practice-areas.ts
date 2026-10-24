export type PracticeArea = {
  number: string;
  slug: string;
  title: string;
  description: string;
  bullets: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    number: "01",
    slug: "trademark-registration",
    title: "Trademark Registration",
    description: "Comprehensive filing services before the USPTO.",
    bullets: ["Clearance Search", "Attorney Legal Opinion", "Federal Trademark Filing"],
  },
  {
    number: "02",
    slug: "trademark-search-clearance",
    title: "Trademark Search & Clearance",
    description: "Evaluate potential conflicts before you file — or invest.",
    bullets: ["Federal Search", "State Search", "Common Law Search"],
  },
  {
    number: "03",
    slug: "office-action-responses",
    title: "Office Action Responses",
    description: "A refusal is not the end of your application.",
    bullets: ["Likelihood of Confusion", "Descriptiveness Refusals", "Specimen Refusals"],
  },
  {
    number: "04",
    slug: "uspto-examination-support",
    title: "USPTO Examination Support",
    description: "We monitor every stage of examination on your behalf.",
    bullets: ["Application Review", "Examiner Correspondence", "Amendment Requests"],
  },
  {
    number: "05",
    slug: "statement-of-use",
    title: "Statement of Use",
    description: "Converting an Intent-to-Use application into a registration.",
    bullets: ["Statement of Use", "Extension Requests", "Specimen Review"],
  },
  {
    number: "06",
    slug: "madrid-protocol-global-filing",
    title: "Madrid Protocol & Global Filing",
    description: "International trademark protection through the USPTO and WIPO.",
    bullets: [
      "Madrid Protocol Application (MM2)",
      "USPTO Certification of Origin",
      "WIPO International Registration",
    ],
  },
];

export const totalPracticeAreaCount = 11;

export type PracticeAreaFull = {
  number: string;
  slug: string;
  title: string;
  description: string;
};

export const allPracticeAreas: PracticeAreaFull[] = [
  {
    number: "01",
    slug: "trademark-registration",
    title: "Trademark Registration",
    description:
      "Attorney-prepared federal trademark applications for word marks, design marks, slogans, and multi-class portfolios.",
  },
  {
    number: "02",
    slug: "trademark-search-clearance",
    title: "Trademark Search & Clearance",
    description:
      "Detailed federal, state, and common-law searches with a written attorney opinion on registrability and risk.",
  },
  {
    number: "03",
    slug: "office-action-responses",
    title: "Office Action Responses",
    description:
      "Attorney-drafted responses to every type of USPTO refusal, from Likelihood of Confusion to specimen and descriptiveness issues.",
  },
  {
    number: "04",
    slug: "uspto-examination-support",
    title: "USPTO Examination Support",
    description:
      "Once your application is filed, our firm takes over the full USPTO process — you never have to manage a deadline.",
  },
  {
    number: "05",
    slug: "statement-of-use",
    title: "Statement of Use",
    description:
      "For 1(b) applications: preparation and filing of the Statement of Use, extension requests, and specimen review.",
  },
  {
    number: "06",
    slug: "madrid-protocol-global-filing",
    title: "Madrid Protocol & Global Filing",
    description:
      "Flat-fee global trademark filing via the Madrid Protocol, using a U.S. application or registration as the foundation to protect your brand in member countries.",
  },
  {
    number: "07",
    slug: "trademark-monitoring",
    title: "Trademark Monitoring",
    description:
      "Ongoing surveillance of new USPTO filings, competitor activity, and unauthorized uses of your mark.",
  },
  {
    number: "08",
    slug: "trademark-renewals",
    title: "Trademark Renewals",
    description:
      "Section 8, Section 9, and Section 15 filings — plus deadline monitoring for the life of your mark.",
  },
  {
    number: "09",
    slug: "trademark-assignments",
    title: "Trademark Assignments",
    description:
      "Assignments for business sales, corporate transfers, mergers, ownership changes, and licensing.",
  },
  {
    number: "10",
    slug: "ttab-proceedings",
    title: "TTAB Proceedings",
    description:
      "Oppositions, cancellations, appeals, and settlement negotiation before the TTAB.",
  },
  {
    number: "11",
    slug: "brand-protection-enforcement",
    title: "Brand Protection & Enforcement",
    description:
      "Cease and desist letters, marketplace enforcement, domain disputes, and counterfeit reporting.",
  },
];

export type FlatFeeItem = {
  title: string;
  description: string;
};

export const flatFeeItems: FlatFeeItem[] = [
  {
    title: "Trademark Search & Opinion",
    description: "Fixed fee before any filing work begins.",
  },
  {
    title: "USPTO Application Filing",
    description: "One flat fee covers attorney preparation and filing.",
  },
  {
    title: "Office Action Response",
    description: "Fixed-fee response drafted by a licensed attorney.",
  },
  {
    title: "Madrid Protocol Filing",
    description: "Single flat-fee structure per international filing.",
  },
];
