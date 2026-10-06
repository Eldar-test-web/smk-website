import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";

type Variant = "primary" | "outline" | "onDark" | "outlineOnDark";
type Size = "md" | "lg";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
  to?: string;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const BASE =
  "inline-flex w-full items-center justify-center gap-2.5 rounded-ui font-medium tracking-[0.005em] whitespace-nowrap transition-colors duration-200 active:translate-y-px sm:w-auto";

const SIZES: Record<Size, string> = {
  md: "h-12 px-6 text-[0.9375rem]",
  lg: "h-14 px-7 text-base sm:px-8",
};

const VARIANTS: Record<Variant, string> = {
  primary: "bg-purple-600 text-white hover:bg-purple-700",
  outline: "border border-lavender-200 bg-white text-purple-700 hover:border-purple-500 hover:text-purple-800",
  onDark: "bg-white text-purple-700 hover:bg-lavender-100",
  outlineOnDark: "border border-white/25 text-white hover:border-white/60 hover:bg-white/5",
};

const MotionLink = motion.create(Link);

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  icon,
  to,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(BASE, SIZES[size], VARIANTS[variant], className);
  const content = (
    <>
      {children}
      {icon}
    </>
  );
  const motionProps = {
    whileHover: { y: -1 },
    whileTap: { scale: 0.985, y: 0 },
    transition: { duration: 0.25, ease: EASE },
  };

  if (to) {
    return (
      <MotionLink to={to} className={classes} {...motionProps}>
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
