import { createFileRoute, Link } from "@tanstack/react-router";
import { Cta, PageHero, SiteHeader } from "@/components/site";

const title = "Trademark Registration Process: Canada & Global | IP Counsel Group";
const desc = "Guides to the Canadian CIPO trademark process and worldwide protection through the Madrid Protocol.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const cards = [
    { to: "/canada-trademark-process" as const, n: "01", t: "Canadian Process", d: "Nine stages with CIPO, from search to renewal." },
    { to: "/global-trademark-process" as const, n: "02", t: "Global Process", d: "Madrid Protocol, regional and national filings." },
  ];
  return (
    <>
      <SiteHeader />
      <PageHero eyebrow="Trademark Process Guides" title={<>How your <em>trademark</em> gets registered</>} intro="Clear, step-by-step guides for protecting your brand in Canada and around the world." />
      <main className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-px bg-border border">
        {cards.map((c) => (
          <Link key={c.to} to={c.to} className="bg-card p-10 group hover:bg-secondary transition-colors">
            <span className="font-display text-4xl text-accent">{c.n}</span>
            <h2 className="mt-4 text-3xl font-medium">{c.t}</h2>
            <p className="mt-2 text-muted-foreground">{c.d}</p>
            <p className="mt-6 eyebrow group-hover:underline">Read the guide →</p>
          </Link>
        ))}
      </main>
      <Cta />
    </>
  );
}
