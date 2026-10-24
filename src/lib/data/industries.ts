export const industries: string[] = [
  "Technology & SaaS",
  "E-Commerce & Amazon",
  "Consumer Products",
  "Healthcare",
  "Restaurants & Hospitality",
  "Financial Services",
  "Entertainment",
  "Professional Services",
];

export type WhyUsItem = {
  number: string;
  text: string;
};

export const whyUsItems: WhyUsItem[] = [
  { number: "/01", text: "Flat-fee legal services with transparent pricing." },
  { number: "/02", text: "Nationwide representation before the USPTO and TTAB." },
  { number: "/03", text: "Attorney-prepared filings — no paralegal-only work." },
  { number: "/04", text: "Full lifecycle management, from filing through 10-year renewals." },
];

export type IndustryDetail = {
  number: string;
  title: string;
  description: string;
};

export const industryDetails: IndustryDetail[] = [
  {
    number: "01",
    title: "Technology",
    description:
      "Software marks, SaaS product names, API brand protection, and open-source trademark strategy.",
  },
  {
    number: "02",
    title: "Software",
    description:
      "Application and platform brand registration, versioning strategy, and code-name protection.",
  },
  {
    number: "03",
    title: "E-Commerce",
    description:
      "Marketplace brand protection, Amazon Brand Registry enrollment, and counterfeit takedowns.",
  },
  {
    number: "04",
    title: "Healthcare",
    description:
      "Pharmaceutical, medical device, and healthcare service marks with regulatory-aware review.",
  },
  {
    number: "05",
    title: "Apparel",
    description:
      "Fashion brand protection, design mark registration, and international expansion.",
  },
  {
    number: "06",
    title: "Restaurants",
    description:
      "Restaurant names, franchise system marks, menu item protection, and geographic filings.",
  },
  {
    number: "07",
    title: "Financial Services",
    description:
      "Fintech brand protection, product naming, and regulated financial services trademark filings.",
  },
  {
    number: "08",
    title: "Professional Services",
    description:
      "Law firm, consulting, and accounting practice trademark and service mark registration.",
  },
  {
    number: "09",
    title: "Manufacturing",
    description:
      "Product line names, industrial brand protection, and B2B trademark portfolios.",
  },
  {
    number: "10",
    title: "Consumer Products",
    description:
      "CPG brand registration, packaging mark protection, and multi-class filings.",
  },
  {
    number: "11",
    title: "Entertainment",
    description:
      "Film, music, gaming, and streaming brand protection with rights management.",
  },
  {
    number: "12",
    title: "Construction",
    description:
      "Contractor brand marks, design-build service marks, and regional trademark strategy.",
  },
  {
    number: "13",
    title: "Automotive",
    description:
      "Dealer network marks, parts brand registration, and automotive service mark protection.",
  },
  {
    number: "14",
    title: "Real Estate",
    description:
      "Brokerage, development, and property brand trademark registration.",
  },
  {
    number: "15",
    title: "Education",
    description:
      "Institutional marks, program brand protection, and educational service mark filings.",
  },
];
