"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";

export function ContactSection() {
  const reducedMotion = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 110, damping: 22, mass: 0.6 });
  const headlineY = useTransform(smoothProgress, [0, 1], [-18, 18]);
  const bodyY = useTransform(smoothProgress, [0, 1], [-8, 8]);
  const [notice, setNotice] = useState("");

  return (
    <section id="contact" ref={sectionRef} aria-labelledby="contact-title" className="scroll-mt-[6rem] bg-[#08281e] text-[#f3ebdf]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] py-14 md:py-16 lg:py-[7.5rem]">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reducedMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-px w-16 origin-left bg-[#d9c29d]/55" aria-hidden="true" />
          <span className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[#d9c29d]">HAVE A PROJECT IN MIND?</span>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-10">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: reducedMotion ? 0 : 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[58rem]"
          >
            <motion.h2 id="contact-title" style={reducedMotion ? undefined : { y: headlineY }} className="font-heading text-[clamp(3.2rem,7vw,7.6rem)] leading-[0.88] tracking-[-0.05em] text-[#f3ebdf]">
              <span className="block">Let&apos;s create something</span>
              <span className="mt-1 block italic">extraordinary.</span>
            </motion.h2>

            <motion.p
              style={reducedMotion ? undefined : { y: bodyY }}
              className="mt-6 max-w-[28rem] text-[0.96rem] leading-[1.7] text-[#f3ebdf]/72 md:text-[1.05rem]"
            >
              Every remarkable space begins with a conversation. Let&apos;s shape a home that reflects your vision, your lifestyle, and your story.
            </motion.p>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0 : 0.16 }}
            className="lg:justify-self-end"
          >
            <a
              href="#contact-inquiry"
              className="group inline-flex items-center gap-3 border border-[#d9c29d] bg-transparent px-5 py-3 text-[0.64rem] font-medium uppercase tracking-[0.18em] text-[#f3ebdf] transition-colors duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#d9c29d] hover:text-[#08281e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3ebdf]"
            >
              <span>Start a conversation</span>
              <span className="inline-flex h-8 w-8 items-center justify-center border border-current transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={14} aria-hidden="true" />
              </span>
            </a>
            <p className="mt-4 max-w-[18rem] text-[0.68rem] uppercase tracking-[0.18em] text-[#d9c29d]">
              Inquiry form prepared for live configuration
            </p>
          </motion.div>
        </div>

        <motion.div
          id="contact-inquiry"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0 : 0.16 }}
          className="mt-12 border-t border-[#d9c29d]/25 pt-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <div className="max-w-[24rem]">
              <div className="mb-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#d9c29d]">PROJECT INQUIRY</div>
              <p className="text-[0.86rem] leading-[1.8] text-[#f3ebdf]/75">
                Contact details and the live submission endpoint are intentionally left pending until the studio confirms the final inquiry channel.
              </p>
            </div>

            <form className="grid gap-4 md:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
              <label className="space-y-2 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#d9c29d]">
                <span>Full name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-[#d9c29d]/35 bg-transparent px-3 py-3 text-[0.8rem] uppercase tracking-[0.08em] text-[#f3ebdf] placeholder:text-[#f3ebdf]/35 focus:border-[#d9c29d] focus:outline-none"
                />
              </label>

              <label className="space-y-2 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#d9c29d]">
                <span>Email address</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-[#d9c29d]/35 bg-transparent px-3 py-3 text-[0.8rem] uppercase tracking-[0.08em] text-[#f3ebdf] placeholder:text-[#f3ebdf]/35 focus:border-[#d9c29d] focus:outline-none"
                />
              </label>

              <label className="space-y-2 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#d9c29d]">
                <span>Project type</span>
                <select className="w-full border border-[#d9c29d]/35 bg-[#08281e] px-3 py-3 text-[0.8rem] uppercase tracking-[0.08em] text-[#f3ebdf] focus:border-[#d9c29d] focus:outline-none">
                  <option className="bg-[#08281e]">Residential Interior Design</option>
                  <option className="bg-[#08281e]">Luxury Space Planning</option>
                  <option className="bg-[#08281e]">Interior Styling</option>
                  <option className="bg-[#08281e]">Bespoke Furniture / Materials</option>
                  <option className="bg-[#08281e]">Other Inquiry</option>
                </select>
              </label>

              <label className="space-y-2 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#d9c29d]">
                <span>Project location</span>
                <input
                  type="text"
                  placeholder="City or region"
                  className="w-full border border-[#d9c29d]/35 bg-transparent px-3 py-3 text-[0.8rem] uppercase tracking-[0.08em] text-[#f3ebdf] placeholder:text-[#f3ebdf]/35 focus:border-[#d9c29d] focus:outline-none"
                />
              </label>

              <label className="space-y-2 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#d9c29d] md:col-span-2">
                <span>Project description</span>
                <textarea
                  rows={4}
                  placeholder="Tell us about the project, your goals, and the feeling you want to create."
                  className="w-full resize-none border border-[#d9c29d]/35 bg-transparent px-3 py-3 text-[0.8rem] leading-[1.7] text-[#f3ebdf] placeholder:text-[#f3ebdf]/35 focus:border-[#d9c29d] focus:outline-none"
                />
              </label>

              <div className="md:col-span-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <button
                  type="button"
                  onClick={() => setNotice("Inquiry form ready for live configuration once the final contact destination is approved.")}
                  className="group inline-flex items-center gap-2 border border-[#d9c29d] bg-transparent px-5 py-3 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#f3ebdf] transition-colors duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#d9c29d] hover:text-[#08281e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3ebdf]"
                >
                  <span>Prepare inquiry</span>
                  <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </button>

                {notice ? <p className="text-[0.62rem] uppercase tracking-[0.16em] text-[#d9c29d]">{notice}</p> : null}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
