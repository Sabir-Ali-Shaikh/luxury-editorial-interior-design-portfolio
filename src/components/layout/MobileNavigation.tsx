"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { navigationItems } from "@/data/navigation";
import { NavbarBrand } from "@/components/layout/NavbarBrand";

type MobileNavigationProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const menuRef = useRef<HTMLDivElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])"),
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("keydown", handleKeyDown);
    firstLinkRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          id="mobile-navigation-panel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] bg-[#08281e] px-[var(--gutter)] py-5"
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            ref={menuRef}
            initial={{ y: reduceMotion ? 0 : -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: reduceMotion ? 0 : -18, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex min-h-full max-w-[var(--container-max)] flex-col"
          >
            <div className="flex items-center justify-between pb-6">
              <NavbarBrand />
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center border border-white/25 bg-transparent text-ivory transition-colors duration-300 hover:border-[#d9c29d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center pb-10">
              <nav aria-label="Mobile navigation" className="space-y-4 pt-4">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    ref={item.href === "#home" ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={onClose}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="group block font-heading text-[clamp(2.4rem,9vw,4rem)] leading-none tracking-[-0.05em] text-ivory transition-colors duration-300 hover:text-[#f3ebdf]"
                    aria-current={item.active ? "page" : undefined}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <motion.a
                href="#contact"
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 inline-flex w-fit items-center gap-2 border border-[#d9c29d] bg-[#d9c29d] px-5 py-3 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#110d0a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
              >
                <span>Start a Project</span>
                <ArrowRight size={12} aria-hidden="true" />
              </motion.a>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 text-[0.56rem] uppercase tracking-[0.2em] text-ivory/70"
              >
                Timeless interiors. Personal expression.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
