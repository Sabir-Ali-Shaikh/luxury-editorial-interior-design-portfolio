"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { DesktopNavigation } from "@/components/layout/DesktopNavigation";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { NavbarBrand } from "@/components/layout/NavbarBrand";
import { NavbarCTA } from "@/components/layout/NavbarCTA";

export function Navbar() {
  const reduceMotion = useReducedMotion() ?? false;
  const { isCompact, isVisible } = useScrollDirection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const shouldHideNavbar = !isMobileMenuOpen && !isVisible;

  useEffect(() => {
    if (!isMobileMenuOpen) {
      triggerRef.current?.focus({ preventScroll: true });
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
          shouldHideNavbar ? "-translate-y-full" : "translate-y-0",
          !isMobileMenuOpen && (isCompact ? "bg-[rgba(8,40,30,0.9)] backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.07)]" : "bg-transparent"),
          isCompact && !isMobileMenuOpen && "border-b border-white/10",
          isMobileMenuOpen && "bg-[#08281e]",
        )}
      >
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="flex h-[74px] items-center justify-between lg:h-[86px]">
            <div className="flex shrink-0 items-center">
              <NavbarBrand />
            </div>

            <DesktopNavigation />

            <div className="hidden items-center lg:flex">
              <NavbarCTA />
            </div>

            <button
              ref={triggerRef}
              type="button"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-panel"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-transparent text-ivory transition-colors duration-300 hover:border-[#d9c29d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory lg:hidden"
            >
              <span className="relative flex h-4 w-5 flex-col justify-between" aria-hidden="true">
                <span className={cn("block h-px w-full bg-current transition-transform duration-300", isMobileMenuOpen && "translate-y-[7px] rotate-45")} />
                <span className={cn("block h-px w-full bg-current transition-opacity duration-300", isMobileMenuOpen && "opacity-0")} />
                <span className={cn("block h-px w-full bg-current transition-transform duration-300", isMobileMenuOpen && "-translate-y-[7px] -rotate-45")} />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileNavigation isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
