import Link from "next/link";
import { PracticeArea } from "@/lib/data/practice-areas";

type PracticeAreaGridProps = {
  areas: PracticeArea[];
  linkToDetail?: boolean;
};

export default function PracticeAreaGrid({ areas, linkToDetail = true }: PracticeAreaGridProps) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {areas.map((area) => {
        const content = (
          <>
            <p className="text-xs font-medium text-muted-light">{area.number}</p>
            <h3 className="mt-4 text-lg font-semibold text-ink">{area.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
            <ul className="mt-5 space-y-1.5">
              {area.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-[11px] font-semibold uppercase tracking-[0.08em] text-navy"
                >
                  • {bullet}
                </li>
              ))}
            </ul>
          </>
        );

        if (!linkToDetail) {
          return (
            <div key={area.slug} id={area.slug} className="scroll-mt-28 bg-cream p-8">
              {content}
            </div>
          );
        }

        return (
          <Link
            key={area.slug}
            href={`/practice-areas#${area.slug}`}
            className="group bg-cream p-8 transition-colors hover:bg-cream-dark"
          >
            {content}
          </Link>
        );
      })}
    </div>
  );
}
