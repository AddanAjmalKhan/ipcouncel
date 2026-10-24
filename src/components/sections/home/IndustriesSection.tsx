import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { industries, whyUsItems } from "@/lib/data/industries";

export default function IndustriesSection() {
  return (
    <section className="bg-cream-soft py-20 lg:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative min-h-[360px] w-full overflow-hidden">
          <Image
            src="/industries.jpg"
            alt="IP Counsel Group office"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <SectionLabel number="02" label="Industries" />
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-ink sm:text-5xl">
            Trusted by Brands Across Industries
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {industries.map((industry) => (
              <p
                key={industry}
                className="border-b border-border py-4 text-sm font-semibold uppercase tracking-[0.06em] text-ink"
              >
                {industry}
              </p>
            ))}
          </div>

          <div className="mt-10 border border-border bg-cream-dark p-8">
            <h3 className="font-serif text-xl text-ink">Why IP Counsel Group</h3>
            <ul className="mt-5 space-y-4">
              {whyUsItems.map((item) => (
                <li key={item.number} className="flex gap-4 text-sm leading-relaxed text-muted">
                  <span className="font-mono text-xs font-semibold text-navy">
                    {item.number}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
