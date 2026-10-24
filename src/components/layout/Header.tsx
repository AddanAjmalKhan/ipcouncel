"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { consultationHref, mainNavLinks } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-shadow duration-200",
        isScrolled
          ? "border-border bg-cream shadow-sm"
          : "border-transparent bg-cream/95 backdrop-blur"
      )}
    >
      <Container className="flex h-20 items-center justify-between lg:h-24">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={consultationHref} variant="primary">
            Consultation
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={cn(
              "h-px w-6 bg-ink transition-transform duration-200",
              isOpen && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "h-px w-6 bg-ink transition-transform duration-200",
              isOpen && "-translate-y-[3.5px] -rotate-45"
            )}
          />
        </button>
      </Container>

      {isOpen && (
        <div className="border-t border-border bg-cream lg:hidden">
          <Container className="flex flex-col gap-1 py-6">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3">
              <Button
                href={consultationHref}
                variant="primary"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                Consultation
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
