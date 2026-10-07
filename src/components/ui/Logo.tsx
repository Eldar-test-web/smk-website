import { cn } from "@/lib/cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 410"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("block", className)}
    >
      <g fill="currentColor">
        <path d="M263 380c-58-24-134-74-187-142-21-26-25-52-9-58 24-9 64 15 104 51 46 41 76 97 92 149Z" />
        <path d="M269 380c28-60 76-116 136-156 64-42 124-72 162-98 16-11 28-8 23 7-11 37-33 79-63 117-46 60-102 106-154 122-42 12-84 14-104 8Z" />
        <circle cx="146" cy="204" r="28" />
        <path d="M166 188c10-36 28-64 56-88-14 46-30 84-38 116-12-6-18-16-18-28Z" />
        <circle cx="298" cy="152" r="35" />
        <path d="M250 78c18 48 44 84 76 110 36-4 78 4 100 24-28-34-74-56-122-62-22-22-42-48-54-72Z" />
        <path d="M302 154c82-46 180-56 270-34-92-4-182 22-256 66Z" />
        <path d="M328 208c76-38 164-42 244-18-82-10-160 11-228 50Z" />
      </g>
      <g stroke="currentColor" strokeWidth={8} strokeLinecap="round">
        <path d="M304 364c82 15 168-16 242-79" />
        <path d="M321 382c81 16 167-17 244-81" />
        <path d="M339 400c79 16 164-18 240-83" />
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
  sm: { mark: "h-5", wordmark: "text-base" },
  md: { mark: "h-7", wordmark: "text-xl" },
  lg: { mark: "h-12 sm:h-14", wordmark: "text-[2.25rem] sm:text-[2.75rem]" },
} as const;

export function Logo({ className, size = "md", showTagline = false }: LogoProps) {
  const scale = SIZES[size];

  return (
    <span className={cn("inline-flex items-center gap-3.5", className)}>
      <LogoMark className={cn("w-auto", scale.mark)} />
      <span className="flex flex-col leading-none">
        <span className={cn("font-extrabold tracking-[-0.045em]", scale.wordmark)}>SMK</span>
        {showTagline ? (
          <span className="mt-2 text-[0.6875rem] font-medium tracking-[0.08em] opacity-60">
            Sumqayıt Məktəblər Klubu
          </span>
        ) : null}
      </span>
    </span>
  );
}
