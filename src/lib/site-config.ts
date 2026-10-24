export const siteConfig = {
  name: "IP Counsel Group",
  shortName: "IPCG",
  tagline: "Intellectual Property Counsel Group",
  description:
    "A boutique trademark law firm dedicated exclusively to USPTO prosecution, Madrid Protocol global filings, federal registration, TTAB proceedings, and nationwide brand protection.",
  phone: "571-274-2218",
  email: "info@ipcounselgroup.org",
  hours: "Mon–Fri, 9–6 ET",
  copyright: `© ${new Date().getFullYear()} IP Counsel Group Trademark Law. Attorney Advertising.`,
  badge: "Nationwide USPTO Representation",
};

export type NavLink = {
  label: string;
  href: string;
};

export const mainNavLinks: NavLink[] = [
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Our Process", href: "/our-process" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
  { label: "Our Firm", href: "/our-firm" },
];

export const footerPracticeLinks: NavLink[] = [
  { label: "All Practice Areas", href: "/practice-areas" },
  { label: "Our Process", href: "/our-process" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
];

export const consultationHref = "/consultation";
