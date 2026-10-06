import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "@/lib/navigation";
import { SITE } from "@/lib/site";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { PageContainer } from "@/components/ui/PageContainer";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="smk-mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobil menyu"
          initial={reduceMotion ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="absolute inset-x-0 top-full flex h-[calc(100svh-4rem)] flex-col justify-between overflow-y-auto border-t border-white/10 bg-purple-950 lg:hidden"
        >
          <PageContainer className="py-4">
            <ul className="flex flex-col">
              {NAV_ITEMS.map((item, index) => (
                <motion.li
                  key={item.to}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: EASE, delay: 0.06 + index * 0.05 }}
                >
                  <NavLink
                    to={item.to}
                    onClick={onClose}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center justify-between border-b border-white/10 py-5 text-[1.375rem] font-medium tracking-[-0.02em] transition-colors duration-200",
                        isActive ? "text-white" : "text-white/70 hover:text-white",
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </PageContainer>

          <PageContainer className="pb-6">
            <p className="text-[0.875rem] text-white/50">
              {SITE.city}, {SITE.country}
            </p>
          </PageContainer>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
