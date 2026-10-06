import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Tone = "white" | "paper" | "dark";

type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: Tone;
};

const TONES: Record<Tone, string> = {
  white: "bg-white text-purple-950",
  paper: "bg-paper-2 text-purple-950",
  dark: "bg-purple-950 text-white",
};

export function Section({ tone = "white", className, children, ...rest }: SectionProps) {
  return (
    <section className={cn("py-20 sm:py-24 lg:py-28", TONES[tone], className)} {...rest}>
      {children}
    </section>
  );
}
