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
  tagline: string;
  services: string[];
  paragraphs: string[];
};

export const allPracticeAreas: PracticeAreaFull[] = [
  {
    number: "01",
    slug: "trademark-registration",
    title: "Trademark Registration",
    description:
      "Attorney-prepared federal trademark applications for word marks, design marks, slogans, and multi-class portfolios.",
    tagline: "Comprehensive filing services before the USPTO.",
    services: [
      "Clearance Search",
      "Attorney Legal Opinion",
      "Federal Trademark Filing",
      "TEAS Plus Applications",
      "TEAS Standard Applications",
      "Multi-Class Applications",
      "Intent-to-Use Applications",
      "Use-Based Applications",
    ],
    paragraphs: [
      "Every application is drafted, reviewed and filed by a licensed U.S. trademark attorney — never by a paralegal or automated form filler.",
      "We select the correct filing basis (Section 1(a) use-based or Section 1(b) intent-to-use), draft an accurate identification of goods and services, and file directly through TEAS.",
      "Once filed, our firm remains the correspondence attorney of record. We monitor the docket, respond to the USPTO, and manage the file through registration and every subsequent renewal.",
    ],
  },
  {
    number: "02",
    slug: "trademark-search-clearance",
    title: "Trademark Search & Clearance",
    description:
      "Detailed federal, state, and common-law searches with a written attorney opinion on registrability and risk.",
    tagline: "Evaluate potential conflicts before you file — or invest.",
    services: [
      "Federal Search",
      "State Search",
      "Common Law Search",
      "Domain Search",
      "Social Media Search",
      "Attorney Opinion Letter",
      "Risk Assessment",
    ],
    paragraphs: [
      "A clearance search identifies existing marks that could block your application or expose you to infringement liability before you invest in branding, packaging, or marketing.",
      "Our attorneys review USPTO records, state trademark registers, common-law usage, domain names, and social handles — then deliver a plain-English opinion letter explaining the specific risks.",
    ],
  },
  {
    number: "03",
    slug: "office-action-responses",
    title: "Office Action Responses",
    description:
      "Attorney-drafted responses to every type of USPTO refusal, from Likelihood of Confusion to specimen and descriptiveness issues.",
    tagline: "A refusal is not the end of your application.",
    services: [
      "Likelihood of Confusion",
      "Descriptiveness Refusals",
      "Specimen Refusals",
      "Disclaimer Requirements",
      "Identification of Goods",
      "Multiple Class Issues",
      "Ownership Corrections",
      "Procedural Requirements",
    ],
    paragraphs: [
      "Most trademark applications receive at least one Office Action from the USPTO examining attorney. A well-prepared response often overcomes even substantive refusals.",
      "We prepare legal arguments citing case law and TTAB precedent, gather evidence of acquired distinctiveness where needed, and negotiate directly with the examiner — including examiner interviews when appropriate.",
    ],
  },
  {
    number: "04",
    slug: "uspto-examination-support",
    title: "USPTO Examination Support",
    description:
      "Once your application is filed, our firm takes over the full USPTO process — you never have to manage a deadline.",
    tagline: "We monitor every stage of examination on your behalf.",
    services: [
      "Application Review",
      "Examiner Correspondence",
      "Amendment Requests",
      "Legal Arguments",
      "Evidence Preparation",
      "Examiner Interviews",
      "Final Office Action Response",
    ],
    paragraphs: [
      "From the moment your application is filed, we take over the entire USPTO process. We handle all examiner correspondence, file amendments, prepare legal arguments, and manage every procedural step through publication and registration.",
      "Our stewardship continues through the full 10-year term — including the 5-year Section 8 Declaration and every subsequent renewal. You receive one point of contact for the life of the mark.",
    ],
  },
  {
    number: "05",
    slug: "statement-of-use",
    title: "Statement of Use",
    description:
      "For 1(b) applications: preparation and filing of the Statement of Use, extension requests, and specimen review.",
    tagline: "Converting an Intent-to-Use application into a registration.",
    services: [
      "Statement of Use",
      "Extension Requests",
      "Specimen Review",
      "Acceptable Specimen Analysis",
    ],
    paragraphs: [
      "After a Notice of Allowance is issued on an Intent-to-Use application, you have six months to file a Statement of Use — with the option to extend up to five times.",
      "We evaluate your specimens against current USPTO standards, file the Statement of Use or extension, and address any specimen refusals that arise.",
    ],
  },
  {
    number: "06",
    slug: "madrid-protocol-global-filing",
    title: "Madrid Protocol & Global Filing",
    description:
      "Flat-fee global trademark filing via the Madrid Protocol, using a U.S. application or registration as the foundation to protect your brand in member countries.",
    tagline: "International trademark protection through the USPTO and WIPO.",
    services: [
      "Madrid Protocol Application (MM2)",
      "USPTO Certification of Origin",
      "WIPO International Registration",
      "Designation of Contracting Parties",
      "Subsequent Designations",
      "Renewal of International Registration",
      "Recordal & Amendments",
      "Flat-Fee One-Time Filing Fee",
    ],
    paragraphs: [
      "The Madrid Protocol lets U.S. applicants seek trademark protection in more than 130 countries through a single filing with the USPTO, certified and forwarded to WIPO. Our firm manages the entire process from certification to international registration.",
      "We prepare the MM2 application, verify the correct base U.S. application or registration, select target countries, and respond to any irregularities raised by WIPO or local trademark offices. Once registered, we also handle renewals and subsequent designations as your portfolio grows.",
      "This service is offered at a flat-fee, one-time fee structure so you know the total cost before we file — no hourly surprises, no hidden per-country processing charges.",
    ],
  },
  {
    number: "07",
    slug: "trademark-monitoring",
    title: "Trademark Monitoring",
    description:
      "Ongoing surveillance of new USPTO filings, competitor activity, and unauthorized uses of your mark.",
    tagline: "Registration is the beginning, not the end.",
    services: [
      "New Application Watch",
      "Similar Mark Detection",
      "Competitor Monitoring",
      "Brand Surveillance",
      "Unauthorized Use Detection",
    ],
    paragraphs: [
      "A registered trademark loses value if infringing uses go unchallenged. Our monitoring service flags new USPTO applications that conflict with your mark within the 30-day opposition window.",
      "We also monitor competitor filings, marketplaces, and online use — and advise on the appropriate enforcement response for each incident.",
    ],
  },
  {
    number: "08",
    slug: "trademark-renewals",
    title: "Trademark Renewals",
    description:
      "Section 8, Section 9, and Section 15 filings — plus deadline monitoring for the life of your mark.",
    tagline: "Maintain federal registration with timely filings.",
    services: [
      "Section 8 Declaration (5-year)",
      "Section 9 Renewal (10-year)",
      "Section 15 Declaration of Incontestability",
      "Combined Filings",
      "Deadline Monitoring",
    ],
    paragraphs: [
      "A federal trademark registration must be maintained through a Section 8 Declaration between the 5th and 6th year, and renewed every 10 years with a combined Section 8 & 9 filing.",
      "Miss a deadline and the registration is cancelled. We docket every deadline for every mark in your portfolio and prepare the filings on your behalf.",
    ],
  },
  {
    number: "09",
    slug: "trademark-assignments",
    title: "Trademark Assignments",
    description:
      "Assignments for business sales, corporate transfers, mergers, ownership changes, and licensing.",
    tagline: "Attorney-prepared transfers of trademark ownership.",
    services: [
      "Business Sales",
      "Corporate Transfers",
      "Ownership Changes",
      "Mergers",
      "Licensing Agreements",
    ],
    paragraphs: [
      "Trademark rights transfer through recorded assignments. An improperly drafted assignment can invalidate the transfer, break the chain of title, or leave the mark unenforceable.",
      "We prepare, execute, and record assignments with the USPTO — and update the ownership records for downstream registrations and applications.",
    ],
  },
  {
    number: "10",
    slug: "ttab-proceedings",
    title: "TTAB Proceedings",
    description:
      "Oppositions, cancellations, appeals, and settlement negotiation before the TTAB.",
    tagline: "Representation before the Trademark Trial and Appeal Board.",
    services: [
      "Notice of Opposition",
      "Cancellation Proceedings",
      "Appeals",
      "Extensions of Time",
      "Settlement Negotiations",
    ],
    paragraphs: [
      "The Trademark Trial and Appeal Board decides opposition proceedings, cancellations of registered marks, and appeals from final USPTO refusals.",
      "TTAB litigation follows the Federal Rules of Civil Procedure with discovery, testimony, and briefing. Our attorneys represent both petitioners and respondents at every stage.",
    ],
  },
  {
    number: "11",
    slug: "brand-protection-enforcement",
    title: "Brand Protection & Enforcement",
    description:
      "Cease and desist letters, marketplace enforcement, domain disputes, and counterfeit reporting.",
    tagline: "Comprehensive enforcement of your trademark rights.",
    services: [
      "Cease & Desist Letters",
      "Online Marketplace Enforcement",
      "Amazon Brand Registry",
      "Domain Name Disputes (UDRP)",
      "Counterfeit Reporting",
      "Social Media Infringement",
    ],
    paragraphs: [
      "Enforcement is what turns a registration certificate into real market exclusivity. We take a proportional approach — from cease and desist letters to full UDRP domain proceedings and federal court referrals.",
      "For e-commerce clients, we also handle Amazon Brand Registry enrollment, marketplace takedowns, and platform escalation.",
    ],
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
