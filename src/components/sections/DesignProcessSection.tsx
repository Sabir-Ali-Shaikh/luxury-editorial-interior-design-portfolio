"use client";

import { motion, useReducedMotion } from "motion/react";
import { designProcessSteps } from "@/data/designProcess";

export function DesignProcessSection() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section id="process" aria-labelledby="process-title" className="scroll-mt-[6rem] border-t border-[#100e0c]/15 bg-[#f3ebdf] text-[#100e0c]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] py-10 md:py-12 lg:py-14">
        <ol className="grid gap-0 lg:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))]">
          <li className="pb-6 lg:pb-0 lg:pr-5 xl:pr-7">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: reducedMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="lg:pr-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#100e0c]">THE DESIGN PROCESS</span>
              </div>

              <h2 id="process-title" className="font-heading text-[clamp(2.8rem,3.3vw,4rem)] leading-[0.92] tracking-[-0.04em] text-[#100e0c]">
                {[
                  "A considered",
                  "journey, together.",
                ].map((line, index) => (
                  <motion.span
                    key={line}
                    className="block overflow-hidden"
                    initial={reducedMotion ? false : { opacity: 0, y: "105%" }}
                    whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{
                      duration: reducedMotion ? 0 : 0.9,
                      ease: [0.22, 1, 0.36, 1],
                      delay: reducedMotion ? 0 : 0.08 + index * 0.12,
                    }}
                  >
                    {line}
                  </motion.span>
                ))}
              </h2>
            </motion.div>
          </li>

          {designProcessSteps.map((step, index) => (
            <motion.li
              key={step.id}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.32 }}
              transition={{
                duration: reducedMotion ? 0 : 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: reducedMotion ? 0 : 0.2 + index * 0.1,
              }}
              className="group relative min-h-[13rem] border-t border-[#100e0c]/20 py-5 lg:border-l lg:border-t-0 lg:py-0 lg:pl-5 xl:pl-6"
            >
              <motion.span
                className="absolute left-0 top-0 hidden h-full w-px origin-top bg-[#100e0c]/25 lg:block"
                initial={reducedMotion ? false : { scaleY: 0 }}
                whileInView={reducedMotion ? undefined : { scaleY: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0 : index * 0.08 }}
              />

              <div className="pt-1 lg:pt-0">
                <motion.div
                  className="mb-2 font-heading text-[1.8rem] leading-none tracking-[-0.04em] text-[#100e0c] transition-colors duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#440d1b] md:text-[2rem]"
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: reducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0 : 0.28 + index * 0.1 }}
                >
                  {step.number}
                </motion.div>

                <motion.h3
                  className="font-heading text-[1.75rem] leading-[0.95] tracking-[-0.05em] text-[#100e0c] transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:text-[#440d1b] md:text-[2rem]"
                  initial={reducedMotion ? false : { opacity: 0, y: "110%" }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0 : 0.35 + index * 0.1 }}
                >
                  {step.title}
                </motion.h3>

                <motion.p
                  className="mt-3 max-w-[16rem] text-[0.74rem] leading-[1.55] text-[#2f2a27] transition-colors duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#100e0c] md:text-[0.8rem]"
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: reducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0 : 0.45 + index * 0.1 }}
                >
                  {step.description}
                </motion.p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
