import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { NAV_ITEMS } from "@/lib/navigation";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { LAYERS } from "@/lib/site";
import { PageContainer } from "@/components/ui/PageContainer";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { scrollY } = useScroll();
  const { pathname } = useLocation();

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 16));

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const closeMenu = useCallback(() => {
    if (menuOpen) triggerRef.current?.focus();
    setMenuOpen(false);
  }, [menuOpen]);

  const solid = scrolled && !menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 border-b transition-colors duration-300",
        LAYERS.header,
        solid ? "border-white/10 bg-purple-950/70 backdrop-blur-xl" : "border-transparent bg-transparent",
      )}
    >
      <PageContainer className="flex h-16 items-center justify-between lg:h-[72px]">
        <Link
          to="/"
          className="flex items-center gap-3 text-white transition-opacity duration-200 hover:opacity-80"
          aria-label="SMK, Ana səhifə"
        >
          <Logo size="sm" />
        </Link>

        <nav aria-label="Əsas naviqasiya" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "relative block py-2 text-[0.9375rem] transition-colors duration-200",
                      isActive ? "text-white" : "text-white/60 hover:text-white",
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive ? (
                        <motion.span
                          layoutId="nav-active-underline"
                          className="absolute inset-x-0 bottom-0 h-px bg-white"
                          transition={{ duration: 0.3, ease: EASE }}
                        />
                      ) : null}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={triggerRef}
          type="button"
          onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
          aria-expanded={menuOpen}
          aria-controls="smk-mobile-menu"
          aria-label={menuOpen ? "Menyunu bağla" : "Menyunu aç"}
          className="-mr-2 flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          {menuOpen ? <X size={22} weight="bold" aria-hidden="true" /> : <List size={22} weight="bold" aria-hidden="true" />}
        </button>
      </PageContainer>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </header>
  );
}
