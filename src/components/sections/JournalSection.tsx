"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { journalEntries } from "@/data/journalEntries";

export function JournalSection() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section id="journal" aria-labelledby="journal-title" className="scroll-mt-[6rem] border-t border-[#100e0c]/15 bg-[#f3ebdf] text-[#100e0c]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] py-10 md:py-12 lg:py-16">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_repeat(3,minmax(0,1fr))] lg:items-stretch">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: reducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="pb-6 pr-0 lg:pb-0 lg:pr-6 xl:pr-8"
          >
            <div className="mb-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#100e0c]">THE JOURNAL</div>
            <h2 id="journal-title" className="font-heading text-[clamp(2.8rem,3vw,4rem)] leading-[0.9] tracking-[-0.04em] text-[#100e0c]">
              Design Notes
            </h2>
            <p className="mt-5 max-w-[22rem] text-[0.78rem] leading-[1.7] text-[#2f2a27] md:text-[0.84rem]">
              Thoughtful observations on interiors, architecture, material rituals, and the lived rhythm of beautifully considered homes.
            </p>
          </motion.div>

          {journalEntries.map((entry, index) => (
            <motion.article
              key={entry.id}
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: reducedMotion ? 0 : 0.75,
                ease: [0.22, 1, 0.36, 1],
                delay: reducedMotion ? 0 : 0.08 + index * 0.1,
              }}
              className="group relative border-t border-[#100e0c]/15 py-5 lg:border-l lg:border-t-0 lg:pl-4 xl:pl-5"
            >
              <div className="flex items-stretch gap-3 md:gap-4">
                <div className="relative h-[7.2rem] w-[7.25rem] shrink-0 overflow-hidden sm:h-[8rem] sm:w-[8.5rem] lg:h-[7.8rem] lg:w-[7.75rem] xl:h-[8.5rem] xl:w-[8.9rem]">
                  <Image
                    src={entry.image}
                    alt={entry.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 40vw, 180px"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                  <div>
                    <div className="mb-2 text-[0.56rem] font-medium uppercase tracking-[0.22em] text-[#100e0c]/75">
                      {entry.category} / {entry.publishedAt}
                    </div>
                    <h3 className="font-heading text-[clamp(1.8rem,1.9vw,2.4rem)] leading-[0.9] tracking-[-0.05em] text-[#100e0c] transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                      {entry.title}
                    </h3>
                  </div>

                  <a
                    href={entry.href}
                    className="mt-4 inline-flex items-center gap-2 self-start text-[0.58rem] font-medium uppercase tracking-[0.2em] text-[#100e0c] transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[#440d1b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#440d1b]"
                    aria-label={`Read article: ${entry.title}`}
                  >
                    <span>Read note</span>
                    <span className="inline-flex h-6 w-6 items-center justify-center border border-[#100e0c]/25 transition-colors duration-300 group-hover:border-[#440d1b] group-hover:text-[#440d1b]">
                      <ArrowUpRight size={12} aria-hidden="true" />
                    </span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
