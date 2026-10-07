import { SMK_ARTWORK, SMK_CANVAS } from "@/assets/brand/smk-artwork";
import { cn } from "@/lib/cn";

const VIEW_BOX = {
  mark: "181 242 1415 812",
  wordmark: "560 1097 655 265",
  stacked: "181 242 1415 1120",
  full: "181 242 1415 1276",
} as const;

export type SmkVariant = keyof typeof VIEW_BOX;

type SmkArtProps = {
  variant: SmkVariant;
  className?: string;
  title?: string;
};

export function SmkArt({ variant, className, title }: SmkArtProps) {
  return (
    <svg
      viewBox={VIEW_BOX[variant]}
      fill="none"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
      className={cn("block", className)}
    >
      {title ? <title>{title}</title> : null}
      <g transform={`translate(0 ${SMK_CANVAS.height}) scale(0.1 -0.1)`} fill="currentColor">
        {SMK_ARTWORK.map((d, index) => (
          <path key={index} d={d} />
        ))}
      </g>
    </svg>
  );
}

type LogoProps = {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
};

export function Logo({ className, markClassName, wordmarkClassName }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <SmkArt variant="mark" className={cn("h-[1.15em] w-auto", markClassName)} />
      <SmkArt variant="wordmark" className={cn("ml-[0.42em] h-[0.6em] w-auto", wordmarkClassName)} />
    </span>
  );
}
