import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/sections/PageHeader";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import { ourFirmServices } from "@/lib/data/our-firm";

export const metadata: Metadata = {
  title: "Our Firm",
  description:
    "A boutique trademark law firm dedicated exclusively to USPTO prosecution and nationwide brand protection.",
};

export default function OurFirmPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Firm"
        title={
          <>
            Your trademark counsel from application to{" "}
            <em className="italic">registration.</em>
          </>
        }
        description="Our firm is dedicated exclusively to trademark law and intellectual property protection. Every application is reviewed, prepared, and managed by experienced trademark attorneys."
      />

      <section className="bg-cream-soft py-20 lg:py-28">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/industries.jpg"
              alt="IP Counsel Group office"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted">
            <p>
              Whether you are filing your first trademark or managing a
              growing portfolio of brands, our legal team provides strategic
              guidance, thorough legal analysis, and proactive communication
              throughout your matter.
            </p>
            <p>
              We are a boutique practice by design. Our clients speak
              directly with the attorney handling their file — not a
              paralegal, not a call center, not an automated form filler.
            </p>
            <p>
              Once your application is filed with the USPTO, we take over
              the full process. We handle every examiner letter, every
              Office Action, and every 5- and 10-year renewal for the life
              of your mark.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <Container>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Our attorneys regularly assist with
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ourFirmServices.map((service) => (
              <div
                key={service}
                className="border border-border bg-cream-soft px-6 py-6 text-sm font-medium text-ink"
              >
                {service}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Speak directly with an attorney."
        description=""
      />
    </>
  );
}
