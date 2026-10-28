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
        <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[0.95] tracking-tighter text-ink sm:text-6xl lg:text-7xl xl:text-8xl">
          {title}
        </h1>
        {description && (
          <p className="mt-8 max-w-3xl text-xl leading-[1.6] text-muted sm:text-2xl">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
