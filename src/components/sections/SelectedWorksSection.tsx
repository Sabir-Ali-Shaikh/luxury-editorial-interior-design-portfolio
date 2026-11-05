"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { portfolioCategories, portfolioProjects, type PortfolioCategory, type PortfolioProject } from "@/data/portfolioProjects";

type CategoryFilter = PortfolioCategory;

const featureOrder = [
  "merlot-residence",
  "house-of-stillness",
  "emerald-courtyard",
  "heritage-apartment",
  "villa-nocturne",
  "sculpted-penthouse",
] as const satisfies readonly string[];

function sortByFeatureOrder(projects: PortfolioProject[]) {
  const indexMap = new Map<string, number>(featureOrder.map((id, index) => [id, index]));
  return [...projects].sort((a, b) => (indexMap.get(a.id) ?? 999) - (indexMap.get(b.id) ?? 999));
}

function ProjectCard({ project, index, featured }: { project: PortfolioProject; index: number; featured?: boolean }) {
  const reducedMotion = useReducedMotion() ?? false;
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 110, damping: 24, mass: 0.5 });
  const revealScale = useTransform(smoothProgress, [0, 0.5, 1], [1.12, 1.01, 1]);
  const revealOpacity = useTransform(smoothProgress, [0, 0.25, 1], [0.72, 1, 1]);
  const y = useTransform(smoothProgress, [0, 1], [18, -20]);

  return (
    <motion.div
      ref={cardRef}
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: reducedMotion ? 0 : 0.9, delay: reducedMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden bg-[#0d1a17]",
        featured ? "lg:row-span-2" : "",
      )}
    >
      <motion.div
        className="absolute inset-0"
        style={reducedMotion ? undefined : { y, scale: revealScale, opacity: revealOpacity }}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={featured ? "(max-width: 767px) 100vw, (max-width: 1439px) 55vw, 30vw" : "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 24vw"}
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#07140f]/80 via-transparent to-[#07140f]/10" />

      <div className="relative flex h-full min-h-[16rem] flex-col justify-end p-5 sm:p-6 lg:p-7">
        <div className="translate-y-1 transition-transform duration-300 group-hover:-translate-y-1">
          <h3 className={cn("font-heading leading-[0.9] tracking-[-0.05em] text-ivory", featured ? "text-[2.2rem] md:text-[2.8rem]" : "text-[1.7rem] md:text-[2.1rem]")}>
            {project.title}
          </h3>
          <p className="mt-3 text-[0.58rem] uppercase tracking-[0.18em] text-ivory/75">
            {project.category} · {project.location} · {project.year}
          </p>
          <button
            type="button"
            className="mt-4 inline-flex items-center gap-3 text-left text-[0.6rem] uppercase tracking-[0.18em] text-[#d9c29d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9c29d]"
            aria-label={`Preview ${project.title}`}
          >
            <span>View project</span>
            <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function SelectedWorksSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const reduceMotion = useReducedMotion() ?? false;

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return sortByFeatureOrder(portfolioProjects);
    return sortByFeatureOrder(portfolioProjects.filter((project) => project.category === activeCategory));
  }, [activeCategory]);

  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const headerY = useTransform(smoothProgress, [0, 1], [18, -8]);
  const headerOpacity = useTransform(smoothProgress, [0, 0.2, 1], [0, 1, 1]);

  const executedCategory = filteredProjects.length === 0 ? "All" : activeCategory;

  return (
    <section ref={sectionRef} id="portfolio" className="scroll-mt-[6rem] relative overflow-hidden bg-[#08281e] text-ivory">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] py-14 md:py-16 lg:py-20">
        <motion.div
          className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          style={reduceMotion ? undefined : { y: headerY, opacity: headerOpacity }}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="text-[0.7rem] uppercase tracking-[0.24em] text-ivory">Selected Works</span>
            <span className="h-px w-20 bg-[#d9c29d]/60" aria-hidden="true" />
          </div>

          <div className="flex flex-wrap items-center gap-4 md:justify-end">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "relative pb-1 text-[0.62rem] uppercase tracking-[0.18em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9c29d]",
                  activeCategory === category ? "text-[#d9c29d]" : "text-ivory/75 hover:text-ivory",
                )}
              >
                {category}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 -bottom-1 h-px bg-[#d9c29d] transition-transform duration-300",
                    activeCategory === category ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={executedCategory}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 12 }}
              transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4 md:grid-cols-2 xl:grid-cols-[1.1fr_1.9fr]"
            >
              <div className="grid gap-4 md:col-span-2 xl:col-span-1 xl:row-span-2">
                {filteredProjects.filter((project) => project.featured).map((project, index) => (
                  <div key={project.id} className="h-full min-h-[22rem] lg:min-h-[28rem] xl:min-h-[39rem]">
                    <ProjectCard project={project} index={index} featured />
                  </div>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:col-span-1 xl:row-span-2">
                {filteredProjects.filter((project) => !project.featured).map((project, index) => (
                  <div key={project.id} className="min-h-[16rem] lg:min-h-[20rem] xl:min-h-[18rem]">
                    <ProjectCard project={project} index={index + 1} />
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 8 }}
              className="rounded-none border border-white/10 bg-[#0d1a17] p-10 text-center"
            >
              <p className="font-heading text-[2rem] text-ivory">New spaces are taking shape.</p>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-ivory/75">More projects in this category are coming soon.</p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="mt-8 flex justify-center"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-3 border border-[#d9c29d] bg-[#d9c29d] px-5 py-3 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#07140f] transition-colors duration-300 hover:bg-[#e4d4ad] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9c29d]"
          >
            <span>Explore All Projects</span>
            <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
