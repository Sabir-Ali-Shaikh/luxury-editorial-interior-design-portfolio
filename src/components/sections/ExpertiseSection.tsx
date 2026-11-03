"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { expertiseServices } from "@/data/expertiseServices";

export function ExpertiseSection() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="expertise" aria-labelledby="expertise-title" className="scroll-mt-[6rem] bg-[#08281e] text-[#f3ebdf]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] py-12 md:py-14 lg:py-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[1.3fr_repeat(4,minmax(0,1fr))] lg:gap-0">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="pb-4 md:col-span-2 lg:col-span-1 lg:pb-0 lg:pr-6 xl:pr-8"
          >
            <motion.div
              className="mb-5 flex items-center gap-3"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.08 }}
            >
              <span className="text-[0.68rem] font-medium uppercase tracking-[0.23em] text-[#f3ebdf]">Expertise</span>
              <span className="h-px w-12 bg-[#f3ebdf]/35" aria-hidden="true" />
            </motion.div>

            <motion.h2
              id="expertise-title"
              className="max-w-[8ch] font-heading text-[clamp(2.6rem,4vw,3.4rem)] leading-[0.94] tracking-[-0.04em] text-[#f3ebdf]"
              initial={reduceMotion ? false : { opacity: 0, y: "105%" }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.16 }}
            >
              What I Create
            </motion.h2>

            <motion.p
              className="mt-5 max-w-[17rem] text-[0.82rem] leading-[1.6] text-[#f3ebdf]/80 md:max-w-[20rem]"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.25 }}
            >
              A considered and holistic approach to interiors, from spatial planning to the finest finishing detail.
            </motion.p>
          </motion.div>

          {expertiseServices.map((service, index) => (
            <motion.article
              key={service.id}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: reduceMotion ? 0 : 0.18 + index * 0.1,
              }}
              className={cn(
                "group relative flex min-h-[14rem] flex-col justify-between border-t border-[#f3ebdf]/20 py-5 md:py-6 lg:border-l lg:border-t-0 lg:px-5 xl:px-6",
              )}
            >
              <span className="font-heading text-[1.8rem] italic leading-none text-[#d9c29d] md:text-[2rem]">
                {service.number}
              </span>

              <div className="mt-5">
                <h3 className="max-w-[12ch] font-heading text-[1.7rem] leading-[0.96] tracking-[-0.04em] text-[#f3ebdf] transition-colors duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#d9c29d] md:text-[2rem] lg:text-[2.2rem]">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-[14rem] text-[0.74rem] leading-[1.6] text-[#f3ebdf]/75 md:text-[0.8rem]">
                  {service.description}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-start pt-2 text-[#d9c29d]">
                <ArrowRight
                  size={18}
                  className="transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
