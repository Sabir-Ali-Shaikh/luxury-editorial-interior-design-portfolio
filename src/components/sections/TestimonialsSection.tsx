"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion() ?? false;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const activeTestimonial = useMemo(() => testimonials[activeIndex], [activeIndex]);
  const totalSlides = testimonials.length;

  const goToSlide = (nextIndex: number, directionValue: 1 | -1) => {
    setDirection(directionValue);
    setActiveIndex(nextIndex);
  };

  const handlePrevious = () => {
    const previousIndex = (activeIndex - 1 + totalSlides) % totalSlides;
    goToSlide(previousIndex, -1);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % totalSlides;
    goToSlide(nextIndex, 1);
  };

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="scroll-mt-[6rem] bg-[#440d1b] text-[#f3ebdf]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] py-12 md:py-14 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_2.1fr_1fr] lg:items-center lg:gap-0 xl:gap-2">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pr-6"
          >
            <div className="mb-8 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#d9c29d]">CLIENT WORDS</div>
            <div className="flex items-center gap-4 md:gap-5">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={handlePrevious}
                className="inline-flex h-11 w-11 items-center justify-center border border-[#d9c29d]/35 bg-transparent text-[#d9c29d] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-x-1 hover:border-[#d9c29d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3ebdf]"
              >
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={handleNext}
                className="inline-flex h-11 w-11 items-center justify-center border border-[#d9c29d]/35 bg-transparent text-[#d9c29d] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-1 hover:border-[#d9c29d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3ebdf]"
              >
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="relative min-h-[11rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.08 }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote
                key={activeTestimonial.id}
                custom={direction}
                initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: direction === 1 ? 22 : -22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: direction === 1 ? -16 : 16 }}
                transition={{ duration: reduceMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="m-0 max-w-[34rem] font-heading text-[clamp(2.1rem,3vw,3.8rem)] leading-[0.98] tracking-[-0.05em] text-[#f3ebdf] italic"
              >
                “{activeTestimonial.quote}”
              </motion.blockquote>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.14 }}
            className="relative border-t border-[#d9c29d]/35 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0"
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`${activeTestimonial.id}-meta`}
                custom={direction}
                initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: direction === 1 ? 14 : -14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: direction === 1 ? -10 : 10 }}
                transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-3"
              >
                <div className="text-[0.62rem] uppercase tracking-[0.18em] text-[#d9c29d]">
                  {activeTestimonial.sampleLabel ?? "ILLUSTRATIVE CLIENT WORDS"}
                </div>
                <div className="text-[0.68rem] uppercase tracking-[0.18em] text-[#d9c29d]">{activeTestimonial.clientName}</div>
                <div className="font-heading text-[1.45rem] leading-[1.05] tracking-[-0.04em] text-[#f3ebdf] italic md:text-[1.8rem]">
                  {activeTestimonial.projectName}
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="mt-8 flex justify-end"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.2 }}
            >
              <motion.span
                key={`${activeTestimonial.id}-counter`}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-[0.65rem] uppercase tracking-[0.18em] text-[#f3ebdf]"
              >
                {String(activeIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
