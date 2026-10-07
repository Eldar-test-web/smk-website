import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeUp } from "@/lib/motion";
import type { TeamMember } from "@/data/team";

type TeamCardProps = {
  member: TeamMember;
  className?: string;
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2);
}

export function TeamCard({ member, className }: TeamCardProps) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = Boolean(member.photo) && !photoFailed;

  return (
    <motion.article variants={fadeUp} className={cn(className)}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-ui border border-lavender-200 bg-lavender-100">
        {showPhoto ? (
          <img
            src={member.photo as string}
            alt={member.name}
            loading="lazy"
            decoding="async"
            onError={() => setPhotoFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center bg-[linear-gradient(158deg,var(--color-lavender-50)_0%,var(--color-lavender-200)_100%)]"
          >
            <span className="select-none text-[clamp(2.5rem,6vw,3.25rem)] font-bold tracking-[-0.04em] text-lavender-400">
              {getInitials(member.name)}
            </span>
          </span>
        )}
      </div>

      <div className="mt-5 border-t border-lavender-200 pt-5">
        <h3 className="text-[0.875rem] font-semibold uppercase leading-tight tracking-[0.02em] text-purple-950">
          {member.name}
        </h3>
        <p className="mt-2 text-[0.9375rem] leading-snug text-body">{member.role}</p>
      </div>
    </motion.article>
  );
}
