"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { heroProjects } from "@/data/heroProjects";
import { HeroBackground } from "@/components/sections/hero/HeroBackground";
import { HeroContent } from "@/components/sections/hero/HeroContent";
import { HeroControls } from "@/components/sections/hero/HeroControls";

export function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const [activeIndex, setActiveIndex] = useState(0);

  const project = heroProjects[activeIndex];
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.4,
  });

  const backgroundScale = useTransform(smoothProgress, [0, 1], [1.06, 1.12]);
  const backgroundY = useTransform(smoothProgress, [0, 1], [0, -90]);
  const contentY = useTransform(smoothProgress, [0, 0.18, 0.75, 1], [0, 0, -34, -90]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.18, 0.72, 1], [1, 1, 0.85, 0.2]);

  const handlePrevious = () => {
    setActiveIndex((current) => (current - 1 + heroProjects.length) % heroProjects.length);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % heroProjects.length);
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative isolate min-h-[88svh] overflow-hidden bg-[#120e0c] text-ivory"
      aria-labelledby="hero-heading"
    >
      <HeroBackground
        project={project}
        imageScale={backgroundScale}
        imageY={backgroundY}
        reducedMotion={reducedMotion}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 15%, rgba(147, 96, 53, 0.24), transparent 32%), linear-gradient(90deg, rgba(19, 14, 12, 0.62) 0%, rgba(19, 14, 12, 0.18) 30%, rgba(19, 14, 12, 0.12) 56%, rgba(19, 14, 12, 0.26) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[88svh] w-full max-w-[var(--container-max)] items-end px-[var(--gutter)] pb-8 pt-10 md:pb-10 lg:pb-12">
        <div className="w-full">
          <HeroContent
            project={project}
            reducedMotion={reducedMotion}
            contentY={contentY}
            contentOpacity={contentOpacity}
          />
          <HeroControls
            project={project}
            projectIndex={activeIndex}
            totalProjects={heroProjects.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
            reducedMotion={reducedMotion}
          />
        </div>
      </div>
    </section>
  );
}
