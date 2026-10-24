"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { FaqItem } from "@/lib/data/resources";

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border border-t border-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="text-base font-semibold text-ink">
                {item.question}
              </span>
              <span
                className={cn(
                  "shrink-0 font-mono text-lg text-muted transition-transform duration-200",
                  isOpen && "rotate-45"
                )}
              >
                +
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-200 ease-out",
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              )}
              style={{ display: "grid" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl text-sm leading-relaxed text-muted">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
