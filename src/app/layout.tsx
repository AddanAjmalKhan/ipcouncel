import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IP Counsel Group | U.S. Trademark Attorneys",
    template: "%s | IP Counsel Group",
  },
  description:
    "Canada's trusted trademark attorneys. We represent entrepreneurs, startups, and established companies through federal trademark filing, Madrid Protocol global registration, and the full life of your mark.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1 pt-20 lg:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
