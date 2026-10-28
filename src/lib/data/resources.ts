export type ResourceCard = {
  number: string;
  title: string;
  description: string;
};

export const resourceCards: ResourceCard[] = [
  {
    number: "01",
    title: "Trademark FAQ",
    description:
      "Answers to the most common questions about trademarks, applications, and CIPO procedure.",
  },
  {
    number: "02",
    title: "Trademark Guide",
    description:
      "A plain-English overview of what a trademark is and how federal registration works.",
  },
  {
    number: "03",
    title: "Filing Process Explained",
    description:
      "Step-by-step walkthrough of what happens after your application is filed.",
  },
  {
    number: "04",
    title: "Madrid Protocol Guide",
    description:
      "How to extend Canadian trademark protection to 130+ countries through one WIPO filing.",
  },
  {
    number: "05",
    title: "Filing Timelines",
    description:
      "Realistic timing estimates for each phase — from filing to registration.",
  },
  {
    number: "06",
    title: "Trademark Classes Guide",
    description:
      "How the Nice Classification system works and how to choose the right classes.",
  },
  {
    number: "07",
    title: "Office Action Guide",
    description:
      "Understanding refusals: Likelihood of Confusion, Descriptiveness, and specimen issues.",
  },
  {
    number: "08",
    title: "Statement of Use Guide",
    description:
      "How to convert an Intent-to-Use application to a registration.",
  },
  {
    number: "09",
    title: "Trademark Renewal Guide",
    description:
      "10-year renewal filings explained.",
  },
  {
    number: "10",
    title: "Trademark Blog",
    description:
      "Ongoing commentary on Trademarks Opposition Board decisions, CIPO policy changes, and IP news.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "How long does it take to get a trademark registered?",
    answer:
      "Most applications take 8–14 months from filing to registration, assuming no refusals or oppositions. CIPO examination alone typically takes 3–6 months before an examiner first reviews the application.",
  },
  {
    question: "What happens after I file — do I need to do anything?",
    answer:
      "No. Once your application is filed, our firm monitors the docket and handles all examiner correspondence on your behalf. We'll reach out if CIPO requires a response or if you need to make a decision.",
  },
  {
    question: "What is a Notice of Opposition?",
    answer:
      "After your mark is published in the Trademarks Journal, third parties have a statutory window to file a Notice of Opposition challenging registration. We monitor for oppositions and respond on your behalf.",
  },
  {
    question: "How often do trademarks need to be renewed?",
    answer:
      "Canadian trademark registrations must be renewed every 10 years for as long as you continue to use the mark. We docket and file every renewal for the life of your registration.",
  },
  {
    question: "Do you handle Office Actions from CIPO?",
    answer:
      "Yes. We prepare attorney-drafted responses to every type of refusal, including Likelihood of Confusion, descriptiveness, and specimen issues, with supporting case law and evidence of use.",
  },
  {
    question: "Do you handle Madrid Protocol international filings?",
    answer:
      "Yes. We manage Madrid Protocol filings using a Canadian application or registration as the base, including CIPO certification, country designations, and any office actions raised by member countries.",
  },
  {
    question: "What is a flat-fee trademark service?",
    answer:
      "Our core services — including Canadian applications, Office Action responses, and Madrid Protocol filings — are billed at a single, fixed fee agreed upon before work begins, so there are no hourly billing surprises.",
  },
];
