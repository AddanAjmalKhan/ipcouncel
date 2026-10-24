import Container from "@/components/ui/Container";
import { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center border-b border-border bg-cream-soft lg:min-h-[calc(100vh-6rem)]">
      <Container className="py-16 lg:py-20">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-navy">
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.1] text-ink sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
