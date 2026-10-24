import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { consultationHref, footerPracticeLinks, siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo variant="light" />
          <p className="mt-6 text-sm leading-relaxed text-cream/70">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cream/50">
            Practice
          </p>
          <ul className="mt-5 space-y-3">
            {footerPracticeLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/90 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cream/50">
            Contact
          </p>
          <ul className="mt-5 space-y-3 text-sm text-cream/90">
            <li>
              <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} className="hover:text-accent">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <Link href={consultationHref} className="font-medium text-accent hover:text-accent/80">
                Schedule consultation →
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{siteConfig.copyright}</p>
          <p className="uppercase tracking-[0.15em]">{siteConfig.badge}</p>
        </Container>
      </div>
    </footer>
  );
}
