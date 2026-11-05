"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { MaterialGallery } from "@/components/sections/materials/MaterialGallery";

export function MaterialEditSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const introY = useTransform(scrollYProgress, [0, 1], [12, -12]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.8, 1, 1]);

  return (
    <section ref={sectionRef} id="materials" aria-labelledby="materials-title" className="scroll-mt-[6rem] bg-[#f3ebdf] text-[#100e0c]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] py-10 md:py-12 lg:py-14">
        <div className="grid gap-4 md:gap-5 lg:grid-cols-[0.9fr_2.1fr] lg:items-center lg:gap-6 xl:gap-7">
          <motion.div
            style={reducedMotion ? undefined : { y: introY, opacity: introOpacity }}
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="mb-5 flex items-center gap-3"
              initial={reducedMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: reducedMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0 : 0.06 }}
            >
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[#100e0c]">THE MATERIAL EDIT</span>
            </motion.div>

            <motion.h2
              id="materials-title"
              className="max-w-[8.5ch] font-heading text-[clamp(2.8rem,3.7vw,4.1rem)] leading-[0.92] tracking-[-0.05em] text-[#100e0c]"
              initial={reducedMotion ? false : { opacity: 0, y: "105%" }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: reducedMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0 : 0.12 }}
            >
              Every material
              <span className="block">tells a story.</span>
            </motion.h2>

            <motion.p
              className="mt-5 max-w-[20rem] text-[0.82rem] leading-[1.6] text-[#2e2c2a] md:text-[0.9rem]"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: reducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0 : 0.2 }}
            >
              “A curated study in texture, tone and craft — materials that bring depth, character and enduring beauty to a space.”
            </motion.p>
          </motion.div>

          <div className="overflow-hidden">
            <MaterialGallery />
          </div>
        </div>
      </div>
    </section>
  );
}
