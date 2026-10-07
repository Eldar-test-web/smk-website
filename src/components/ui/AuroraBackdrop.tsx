import { cn } from "@/lib/cn";

type AuroraBackdropProps = {
  className?: string;
};

export function AuroraBackdrop({ className }: AuroraBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <span className="aurora aurora-1" />
      <span className="aurora aurora-2" />
      <span className="aurora aurora-3" />
      <span className="aurora aurora-4" />
    </div>
  );
}
