import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "light";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: () => void;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-ink text-cream hover:bg-ink-light",
  outline: "border border-ink text-ink hover:bg-ink hover:text-cream",
  light: "border border-cream text-cream hover:bg-cream hover:text-ink",
};

const baseStyles =
  "inline-flex items-center justify-center px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-200";

export default function Button({
  children,
  variant = "primary",
  className,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    const { onClick } = rest as ButtonAsLink;
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  const { onClick, type = "button" } = rest as ButtonAsButton;

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
