import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  label?: string;
  className?: string;
};

export default function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-gradient-to-br from-ink-light via-ink to-ink-light",
        className
      )}
    >
      {label && (
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-cream/40">
          {label}
        </span>
      )}
    </div>
  );
}
