import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function Logo({ variant = "dark", className }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="IP Counsel Group"
      width={871}
      height={271}
      priority
      className={cn(
        "h-9 w-auto lg:h-10",
        variant === "light" && "brightness-0 invert",
        className
      )}
    />
  );
}
