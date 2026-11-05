"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const philosophyText = ["Design is more", "than a space.", "It is a feeling."] as const;

export function PhilosophySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    mass: 0.45,
  });

  const imageReveal = useTransform(smoothProgress, [0, 0.45, 1], [0, 1, 1]);
  const imageY = useTransform(smoothProgress, [0, 1], [18, -24]);
  const imageScale = useTransform(smoothProgress, [0, 1], [1.08, 1]);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="scroll-mt-[6rem] relative overflow-hidden bg-[#440d1b] text-ivory"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.35fr_0.8fr] lg:items-center lg:gap-10 xl:gap-14">
          <div className="relative h-[22rem] overflow-hidden md:h-[26rem] lg:h-[19rem] xl:h-[22rem]">
            <motion.div
              className="absolute inset-0"
              style={reducedMotion ? undefined : { clipPath: "inset(0 100% 0 0 round 0px)" }}
            >
              <motion.div
                className="absolute inset-0"
                style={
                  reducedMotion
                    ? undefined
                    : {
                        scale: imageScale,
                        y: imageY,
                        opacity: imageReveal,
                      }
                }
              >
                <Image
                  src="/images/philosophy/philosophy-still-life.jpg"
                  alt="Still-life composition featuring a ceramic vase with dark branches against a warm limestone wall."
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 33vw, 28vw"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          <div className="min-w-0">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[0.62rem] uppercase tracking-[0.24em] text-[#d9c29d]">OUR PHILOSOPHY</span>
              <span className="h-px w-[5.5rem] bg-[#d9c29d]/60" aria-hidden="true" />
            </div>

            <h2 id="philosophy-heading" className="space-y-1 font-heading text-[clamp(2.9rem,5vw,4.5rem)] leading-[0.9] tracking-[-0.05em] text-ivory">
              {philosophyText.map((line, index) => (
                <motion.span
                  key={line}
                  className="block overflow-hidden"
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.9,
                    ease: [0.22, 1, 0.36, 1],
                    delay: reducedMotion ? 0 : 0.2 + index * 0.15,
                  }}
                >
                  <span className={index === 2 ? "italic" : ""}>{line}</span>
                </motion.span>
              ))}
            </h2>
          </div>

          <div className="max-w-[18rem] lg:max-w-[17rem]">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.7, delay: reducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[0.92rem] leading-[1.7] text-ivory/85"
            >
              At Atelier, we create interiors that evoke emotion, inspire daily living, and stand the test of time. Our work is a thoughtful dialogue between architecture, materiality, and the people who live within the space.
            </motion.p>

            <motion.a
              href="#about"
              className="group mt-8 inline-flex items-center gap-3 text-[0.64rem] uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:text-[#d9c29d]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.7, delay: reducedMotion ? 0 : 0.82, ease: [0.22, 1, 0.36, 1] }}
            >
              <span>THE STUDIO STORY</span>
              <span aria-hidden="true" className="inline-flex transition-transform duration-300 group-hover:translate-x-1.5">
                <ArrowRight size={14} />
              </span>
              <span aria-hidden="true" className="block h-px w-10 origin-left bg-[#d9c29d] transition-transform duration-300 group-hover:scale-x-110" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
