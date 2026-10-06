import { cn } from "@/lib/cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 660 360"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("block", className)}
    >
      <g fill="currentColor">
        <path d="M300 336c-60-8-164-36-230-94-30-28-30-60-8-72 22-12 58-2 100 22 60 36 110 96 138 144Z" />
        <path d="M306 338c24-62 66-112 118-144 58-36 128-54 172-44 12 3 14 14 8 26-18 36-40 72-64 108-32 42-84 60-138 58-50-2-88-2-96-4Z" />
        <circle cx="200" cy="128" r="25" />
        <path d="M208 158c14-38 42-62 78-74-8 36-26 68-34 114-22-8-36-22-44-40Z" />
        <circle cx="326" cy="64" r="33" />
        <path d="M346 100c22-48 64-84 116-100-18 50-36 96-48 156-32-10-56-32-68-56Z" />
        <path d="M332 96c92-46 198-58 294-26-104-12-216 8-302 60Z" />
        <path d="M352 140c82-42 178-52 262-26-90-10-198 8-280 46Z" />
      </g>
      <g stroke="currentColor" strokeWidth={7} strokeLinecap="round">
        <path d="M390 354c68 8 132-8 176-46" />
        <path d="M408 368c62 8 124-8 172-46" />
      </g>
    </svg>
  );
}

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
};

const SIZES = {
  sm: { mark: "h-6", wordmark: "text-base" },
  md: { mark: "h-8", wordmark: "text-xl" },
  lg: { mark: "h-11 sm:h-12", wordmark: "text-[2.125rem] sm:text-[2.5rem]" },
} as const;

export function Logo({ className, size = "md", showTagline = false }: LogoProps) {
  const scale = SIZES[size];

  return (
    <span className={cn("inline-flex items-center gap-3.5", className)}>
      <LogoMark className={cn("w-auto", scale.mark)} />
      <span className="flex flex-col leading-none">
        <span className={cn("font-extrabold tracking-[-0.035em]", scale.wordmark)}>SMK</span>
        {showTagline ? (
          <span className="mt-2 text-[0.625rem] font-medium uppercase tracking-[0.16em] opacity-60">
            Sumqayıt Məktəblər Klubu
          </span>
        ) : null}
      </span>
    </span>
  );
}
