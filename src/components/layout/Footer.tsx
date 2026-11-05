"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";

const socialProfileEntries = [
  { label: "Instagram", href: siteConfig.socialProfiles.instagram },
  { label: "Pinterest", href: siteConfig.socialProfiles.pinterest },
  { label: "LinkedIn", href: siteConfig.socialProfiles.linkedin },
  { label: "Behance", href: siteConfig.socialProfiles.behance },
];

const contactEntries = [
  { label: "Email", value: siteConfig.contact.email ? <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> : "Awaiting studio email" },
  { label: "Phone", value: siteConfig.contact.phone ? <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a> : "Awaiting studio phone" },
  { label: "Location", value: siteConfig.contact.location ?? "Project-specific location details to be confirmed" },
];

export function Footer() {
  const reducedMotion = useReducedMotion() ?? false;

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <footer className="bg-[#061f19] text-[#f3ebdf]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] pb-8 pt-8 md:pb-10 md:pt-10">
        <motion.div
          initial={reducedMotion ? false : { scaleX: 0, opacity: 0 }}
          whileInView={reducedMotion ? undefined : { scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reducedMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="h-px origin-left bg-[#d9c29d]/30"
        />

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pr-8"
          >
            <div className="font-heading text-[clamp(2.2rem,2vw,2.9rem)] leading-none tracking-[-0.04em] text-[#f3ebdf]">{siteConfig.brandName}</div>
            <div className="mt-2 text-[0.64rem] font-medium uppercase tracking-[0.22em] text-[#d9c29d]">{siteConfig.brandTagline}</div>
            <p className="mt-5 max-w-[18rem] text-[0.8rem] leading-[1.7] text-[#f3ebdf]/75">{siteConfig.brandStatement}</p>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0 : 0.08 }}
            className="md:pl-4 lg:pl-0"
          >
            <div className="mb-4 text-[0.64rem] font-medium uppercase tracking-[0.22em] text-[#d9c29d]">EXPLORE</div>
            <nav aria-label="Footer navigation" className="space-y-3">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group block text-[0.82rem] text-[#f3ebdf]/80 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[#d9c29d]"
                >
                  <span className="inline-flex items-center gap-2">
                    <span>{item.label}</span>
                    <ArrowUpRight size={12} className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" aria-hidden="true" />
                  </span>
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0 : 0.16 }}
            className="md:pl-4 lg:pl-0"
          >
            <div className="mb-4 text-[0.64rem] font-medium uppercase tracking-[0.22em] text-[#d9c29d]">CONTACT</div>
            <div className="space-y-3 text-[0.8rem] text-[#f3ebdf]/80">
              {contactEntries.map((entry) => (
                <div key={entry.label} className="flex flex-col gap-1">
                  <span className="text-[0.54rem] uppercase tracking-[0.18em] text-[#d9c29d]">{entry.label}</span>
                  <span>{entry.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0 : 0.24 }}
            className="md:pl-4 lg:pl-0"
          >
            <div className="mb-4 text-[0.64rem] font-medium uppercase tracking-[0.22em] text-[#d9c29d]">FOLLOW</div>
            <div className="space-y-3 text-[0.8rem] text-[#f3ebdf]/80">
              {socialProfileEntries.some((profile) => Boolean(profile.href)) ? (
                socialProfileEntries
                  .filter((profile) => Boolean(profile.href))
                  .map((profile) => (
                    <a
                      key={profile.label}
                      href={profile.href ?? "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#d9c29d]"
                    >
                      <span>{profile.label}</span>
                      <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </a>
                  ))
              ) : (
                <p className="max-w-[12rem] text-[0.8rem] leading-[1.7] text-[#f3ebdf]/70">Social channels will be published once the studio profiles are approved.</p>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0 : 0.32 }}
          className="mt-10 flex flex-col gap-4 border-t border-[#d9c29d]/25 pt-5 md:flex-row md:items-center md:justify-between"
        >
          <div className="text-[0.62rem] uppercase tracking-[0.18em] text-[#f3ebdf]/70">© {new Date().getFullYear()} ATELIER. ALL RIGHTS RESERVED.</div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 self-start text-[0.62rem] uppercase tracking-[0.18em] text-[#d9c29d] transition-colors duration-300 hover:text-[#f3ebdf]"
            aria-label="Scroll back to the top of the page"
          >
            <span>Back to top</span>
            <span className="inline-flex transition-transform duration-300 group-hover:-translate-y-1" aria-hidden="true">↑</span>
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
