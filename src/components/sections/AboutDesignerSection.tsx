"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const principles = [
  "Human-centred, emotionally resonant design",
  "A refined, timeless aesthetic",
  "Thoughtful material and craft selection",
];

export function AboutDesignerSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.5 });
  const imageY = useTransform(smoothProgress, [0, 1], [18, -20]);
  const imageScale = useTransform(smoothProgress, [0, 1], [1.08, 1]);
  const headingY = useTransform(smoothProgress, [0, 1], [12, -6]);

  return (
    <section ref={sectionRef} id="about" aria-labelledby="about-title" className="scroll-mt-[6rem] bg-[#f3ebdf] text-[#100e0c]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] py-14 md:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr_1.25fr] lg:items-center lg:gap-8 xl:gap-12">
          <motion.div
            className="relative h-[22rem] overflow-hidden md:h-[25rem] lg:h-[26rem] xl:h-[29rem]"
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: reducedMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="absolute inset-0 overflow-hidden"
              style={reducedMotion ? undefined : { y: imageY, scale: imageScale }}
            >
              <Image
                src="/images/about/designer-portrait.jpg"
                alt="Temporary editorial portrait for the ATELIER designer profile placeholder."
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1199px) 46vw, 32vw"
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>

          <div className="lg:pr-4">
            <motion.div
              className="mb-5 flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: reducedMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[0.62rem] uppercase tracking-[0.22em] text-[#43372f]">THE CREATIVE MIND</span>
              <span className="h-px w-14 bg-[#43372f]/50" aria-hidden="true" />
            </motion.div>

            <h2 id="about-title" className="font-heading text-[clamp(3rem,5vw,4.5rem)] leading-[0.9] tracking-[-0.05em] text-[#100e0c]">
              {[
                "A personal vision",
                "of timeless living.",
              ].map((line, index) => (
                <motion.span
                  key={line}
                  className="block overflow-hidden"
                  initial={reducedMotion ? false : { opacity: 0, y: "105%" }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: reducedMotion ? 0 : 1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: reducedMotion ? 0 : index * 0.16,
                  }}
                  style={reducedMotion ? undefined : { y: headingY }}
                >
                  {line}
                </motion.span>
              ))}
            </h2>
          </div>

          <div className="lg:pl-2">
            <motion.p
              className="max-w-[26rem] text-[0.95rem] leading-[1.7] text-[#2f2a27]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0 : 0.2 }}
            >
              I believe exceptional interiors are deeply personal — spaces that reflect how you live, what you value, and how you want to feel. My approach blends architectural clarity, rich materiality, and a curated sense of artistry to create homes with lasting presence and meaning.
            </motion.p>

            <ul className="mt-8 space-y-3">
              {principles.map((principle, index) => (
                <motion.li
                  key={principle}
                  className="flex items-start gap-3 text-[0.8rem] uppercase tracking-[0.12em] text-[#100e0c]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: reducedMotion ? 0 : 0.35 + index * 0.1,
                  }}
                >
                  <span aria-hidden="true" className="mt-[0.55rem] h-px w-5 bg-[#100e0c]/60" />
                  <span>{principle}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.p
                className="font-heading text-[2.2rem] italic leading-none text-[#100e0c]/80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: reducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0 : 0.7 }}
              >
                Atelier
              </motion.p>

              <motion.button
                type="button"
                className="group inline-flex items-center gap-3 border border-[#100e0c] bg-transparent px-5 py-2.5 text-[0.64rem] uppercase tracking-[0.18em] text-[#100e0c] transition-colors duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#100e0c] hover:text-[#f3ebdf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#100e0c]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: reducedMotion ? 0 : 0.65, delay: reducedMotion ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] }}
              >
                <span>Meet the designer</span>
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
