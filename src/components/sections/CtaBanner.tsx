import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

type CtaBannerProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function CtaBanner({
  title = "Ready to protect your brand?",
  description = "Speak directly with a trademark attorney — no sales team, no gatekeeping. Consultations are always complimentary, and our core services are offered at a flat, one-time fee.",
  buttonText = "Schedule a Free Consultation",
  buttonHref = "/consultation",
}: CtaBannerProps) {
  return (
    <section className="bg-cream-soft py-20 lg:py-28">
      <Container className="flex flex-col items-center text-center">
        <h2 className="max-w-2xl font-serif text-4xl leading-[1.1] text-ink sm:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            {description}
          </p>
        )}
        <div className="mt-10">
          <Button href={buttonHref} variant="primary">
            {buttonText}
          </Button>
        </div>
      </Container>
    </section>
  );
}
