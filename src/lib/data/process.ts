export type ProcessStep = {
  stage: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    stage: "Filing → Registration",
    title: "Nationwide Federal Filing",
    description:
      "TEAS Plus and TEAS Standard applications drafted, reviewed, and filed by a licensed U.S. trademark attorney.",
  },
  {
    stage: "Year 5",
    title: "Section 8 Declaration",
    description:
      "Between the 5th and 6th year we prepare and file your Section 8 Declaration of Use — miss it and the registration is cancelled.",
  },
  {
    stage: "Year 10",
    title: "Section 8 & 9 Renewal",
    description:
      "Every ten years we file the combined renewal to maintain your federal registration indefinitely.",
  },
  {
    stage: "Any Time",
    title: "Office Action Response",
    description:
      "If the USPTO issues any refusal or procedural letter, we prepare the response, argue the case, and negotiate with the examiner.",
  },
];

export type FullProcessStep = {
  step: string;
  title: string;
  description: string;
  badge: string;
};

export const fullProcessSteps: FullProcessStep[] = [
  {
    step: "01",
    title: "Free Attorney Consultation",
    description:
      "Speak directly with a trademark attorney about your brand, your goals, and the right filing strategy. No sales team, no gatekeeping.",
    badge: "Same Day",
  },
  {
    step: "02",
    title: "Trademark Search & Legal Review",
    description:
      "Comprehensive federal, state, and common-law search followed by a written attorney opinion on registrability and risk.",
    badge: "5–7 Business Days",
  },
  {
    step: "03",
    title: "Attorney Filing of USPTO Application",
    description:
      "Your application is drafted, reviewed, and filed by a licensed U.S. trademark attorney using the correct filing basis and identification of goods.",
    badge: "Filed Within 5 Days",
  },
  {
    step: "04",
    title: "USPTO Examination",
    description:
      "Your application is assigned to a USPTO examining attorney. Our firm monitors the docket and handles all correspondence on your behalf.",
    badge: "3–6 Months",
  },
  {
    step: "05",
    title: "Office Action Response (If Required)",
    description:
      "If the examiner issues any refusal, we prepare a full legal response — including cited case law, evidence of use, and examiner interviews if needed.",
    badge: "Within USPTO Deadline",
  },
  {
    step: "06",
    title: "Publication for Opposition",
    description:
      "The mark is published in the Official Gazette. Third parties have 30 days to oppose. We monitor for oppositions and defend if any are filed.",
    badge: "30-Day Window",
  },
  {
    step: "07",
    title: "Federal Registration",
    description:
      "Your certificate of registration issues. You now have nationwide federal trademark rights, a valid 10-year term, and access to enforcement remedies.",
    badge: "8–14 Months Typical",
  },
  {
    step: "08",
    title: "Monitoring, Renewals & Lifecycle Care",
    description:
      "We docket every deadline. Section 8 Declaration between year 5–6. Combined Section 8 & 9 renewal every 10 years. Continuous brand monitoring throughout.",
    badge: "5- and 10-Year Filings",
  },
];

export type MadridStep = {
  label: string;
  title: string;
  description: string;
};

export const madridSteps: MadridStep[] = [
  {
    label: "Base Filing",
    title: "USPTO Application or Registration",
    description:
      "A valid U.S. application or registration is the foundation for a Madrid Protocol filing.",
  },
  {
    label: "Certification",
    title: "USPTO Certification to WIPO",
    description:
      "The USPTO certifies your base mark and forwards the application to WIPO in Geneva.",
  },
  {
    label: "Designation",
    title: "Country Selection",
    description:
      "Choose one or more Madrid member countries where you want protection.",
  },
  {
    label: "Lifecycle",
    title: "Renewals & Amendments",
    description:
      "A single WIPO renewal renews the international registration across all designated countries.",
  },
];
