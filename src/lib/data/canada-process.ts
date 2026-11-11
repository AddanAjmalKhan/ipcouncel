export type DetailedStep = {
  title: string;
  time: string;
  description: string;
  points?: string[];
};

export type FeeRow = {
  item: string;
  amount: string;
  note?: string;
};

export type SourceLink = {
  org: string;
  label: string;
  href: string;
};

export type ComparisonRow = {
  label: string;
  canada: string;
  us: string;
};

export const canadaSteps: DetailedStep[] = [
  {
    title: "Clearance Search & Legal Opinion",
    time: "1–5 Business Days",
    description:
      "We search the Canadian Trademarks Database, provincial business names, and common-law use to spot conflicts before you invest in filing.",
    points: ["Federal Search", "Common-Law Search", "Attorney Opinion"],
  },
  {
    title: "Application Filed with CIPO",
    time: "Day 1",
    description:
      "We draft goods and services using CIPO's pre-approved list, grouped by Nice class, and file electronically. Since 2019, you do not need to declare use in Canada to file or register.",
    points: ["Nice Classification", "Filing Date Secured", "Paris Priority Claim (If Any)"],
  },
  {
    title: "Formalities Check",
    time: "Weeks After Filing",
    description:
      "CIPO confirms the application meets minimum requirements and assigns the filing date. Expedited examination is available in limited cases (e.g. court action, counterfeiting).",
  },
  {
    title: "Substantive Examination",
    time: "~18–30 Months",
    description:
      "An examiner reviews distinctiveness, descriptiveness, confusion with existing marks, and the goods and services wording.",
  },
  {
    title: "Examiner's Report (Office Action)",
    time: "3 Months to Respond",
    description:
      "If objections are raised, we argue the case, amend the application, or submit evidence. Extensions are available for a fee.",
    points: ["Confusion", "Clearly Descriptive", "Goods & Services Wording"],
  },
  {
    title: "Approval & Advertisement",
    time: "After Approval",
    description:
      "The approved application is published in the Canadian Trademarks Journal so third parties can review it.",
  },
  {
    title: "Opposition Period",
    time: "2 Months",
    description:
      "Anyone may file a statement of opposition with the Trademarks Opposition Board. We monitor the window and defend your application if challenged.",
  },
  {
    title: "Registration",
    time: "Automatic",
    description:
      "If no opposition is filed (or it is resolved in your favour), the mark registers. There is no separate registration fee, and you may use the ® symbol.",
  },
  {
    title: "Maintenance & 10-Year Renewal",
    time: "Every 10 Years",
    description:
      "Registrations renew every ten years. After three years, an unused mark can be challenged under Section 45, so keep evidence of use.",
    points: ["Section 45 Non-Use", "Watch Services", "Renewal Filing"],
  },
];

export const canadaVsUs: ComparisonRow[] = [
  { label: "Use Required to Register", canada: "No", us: "Yes (or Statement of Use)" },
  { label: "Typical Time to Registration", canada: "~2–3 Years", us: "~12–18 Months" },
  { label: "Opposition Window", canada: "2 Months", us: "30 Days (Extendable)" },
  { label: "Renewal", canada: "Every 10 Years", us: "Years 5–6, Then Every 10" },
  { label: "Government Office", canada: "CIPO", us: "USPTO" },
];

export const canadaFees: FeeRow[] = [
  { item: "Application — First Class (Online)", amount: "$491.06" },
  { item: "Application — Each Additional Class", amount: "$149.04" },
  { item: "Application — First Class (Paper / Other Means)", amount: "$640.10" },
  {
    item: "Extension of Time (Per Deadline)",
    amount: "$150.00",
    note: "E.g. extra time to answer an examiner's report",
  },
  {
    item: "Statement of Opposition",
    amount: "$1,115.08",
    note: "Paid by the party opposing a mark",
  },
  { item: "Section 45 Non-Use Notice Request", amount: "$595.06" },
  { item: "Renewal — First Class (Online)", amount: "$595.06", note: "Every 10 years" },
  { item: "Renewal — Each Additional Class", amount: "$185.49" },
  { item: "Recording a Transfer of Ownership", amount: "$125.00" },
  {
    item: "Registration Fee",
    amount: "$0",
    note: "Abolished for applications filed on or after June 17, 2019",
  },
];

export const canadaSources: SourceLink[] = [
  {
    org: "CIPO",
    label: "Fees for Trademarks",
    href: "https://ised-isde.canada.ca/site/canadian-intellectual-property-office/en/trademarks/fees-trademarks",
  },
  {
    org: "CIPO",
    label: "Trademarks: The Registration Process",
    href: "https://ised-isde.canada.ca/site/canadian-intellectual-property-office/en/trademarks",
  },
  {
    org: "CIPO",
    label: "Canadian Trademarks Database",
    href: "https://ised-isde.canada.ca/cipo/trademark-search/srch",
  },
  {
    org: "CIPO",
    label: "Goods and Services Manual",
    href: "https://ised-isde.canada.ca/cipo/gsm-mpb/",
  },
  {
    org: "CIPO",
    label: "Trademarks Opposition Board",
    href: "https://ised-isde.canada.ca/site/canadian-intellectual-property-office/en/trademarks-opposition-board",
  },
  {
    org: "Justice Canada",
    label: "Trademarks Act",
    href: "https://laws-lois.justice.gc.ca/eng/acts/t-13/",
  },
];
