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
      "Applications drafted, reviewed, and filed by a licensed Canadian trademark attorney.",
  },
  {
    stage: "Publication",
    title: "Opposition Monitoring",
    description:
      "Your mark is published in the Trademarks Journal. We monitor for oppositions during the statutory window and respond on your behalf.",
  },
  {
    stage: "Year 10",
    title: "10-Year Renewal",
    description:
      "Every ten years we file the renewal to maintain your federal registration indefinitely.",
  },
  {
    stage: "Any Time",
    title: "Office Action Response",
    description:
      "If CIPO issues any refusal or procedural letter, we prepare the response, argue the case, and negotiate with the examiner.",
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
      "Comprehensive federal, provincial, and common-law search followed by a written attorney opinion on registrability and risk.",
    badge: "5–7 Business Days",
  },
  {
    step: "03",
    title: "Attorney Filing of Trademark Application",
    description:
      "Your application is drafted, reviewed, and filed by a licensed Canadian trademark attorney using the correct filing basis and identification of goods.",
    badge: "Filed Within 5 Days",
  },
  {
    step: "04",
    title: "Trademark Examination",
    description:
      "Your application is assigned to a CIPO examiner. Our firm monitors the docket and handles all correspondence on your behalf.",
    badge: "3–6 Months",
  },
  {
    step: "05",
    title: "Office Action Response (If Required)",
    description:
      "If the examiner issues any refusal, we prepare a full legal response — including cited case law, evidence of use, and examiner interviews if needed.",
    badge: "Within Filing Deadline",
  },
  {
    step: "06",
    title: "Publication for Opposition",
    description:
      "The mark is published in the Trademarks Journal. Third parties have a statutory window to oppose. We monitor for oppositions and defend if any are filed.",
    badge: "Opposition Window",
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
      "We docket every deadline. Renewal filed every 10 years to keep your registration in force. Continuous brand monitoring throughout.",
    badge: "10-Year Renewal Filings",
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
    title: "CIPO Application or Registration",
    description:
      "A valid Canadian application or registration is the foundation for a Madrid Protocol filing.",
  },
  {
    label: "Certification",
    title: "CIPO Certification to WIPO",
    description:
      "CIPO certifies your base mark and forwards the application to WIPO in Geneva.",
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
