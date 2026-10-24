import { cn } from "@/lib/utils";

type SectionLabelProps = {
  number: string;
  label: string;
  variant?: "navy" | "accent";
  className?: string;
};

const variantStyles = {
  navy: "text-navy",
  accent: "text-accent",
};

export default function SectionLabel({
  number,
  label,
  variant = "navy",
  className,
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "font-mono text-xs font-medium uppercase tracking-[0.2em]",
        variantStyles[variant],
        className
      )}
    >
      {number} / {label}
    </p>
  );
}
