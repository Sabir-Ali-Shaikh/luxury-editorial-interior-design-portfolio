import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { HeroProject } from "@/data/heroProjects";

type HeroControlsProps = {
  project: HeroProject;
  projectIndex: number;
  totalProjects: number;
  onPrevious: () => void;
  onNext: () => void;
  reducedMotion: boolean;
};

export function HeroControls({
  project,
  projectIndex,
  totalProjects,
  onPrevious,
  onNext,
  reducedMotion,
}: HeroControlsProps) {
  const hasMultipleProjects = totalProjects > 1;

  return (
    <motion.div
      className="relative z-10 border-t border-white/20 pt-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
    >
      <div className="grid items-end gap-5 md:grid-cols-[1.3fr_0.7fr_0.9fr]">
        <div className="min-w-0">
          <p className="text-[0.66rem] uppercase tracking-[0.3em] text-ivory/65">Featured Project</p>
          <p className="mt-3 font-heading text-[2.1rem] leading-none tracking-[-0.04em] text-ivory md:text-[2.5rem]">
            {project.title}
          </p>
          <div className="mt-4 h-px w-full max-w-[16rem] bg-white/25" />
        </div>

        <div className="flex items-end justify-center md:justify-center">
          <div className="text-center">
            <p className="text-[0.66rem] uppercase tracking-[0.28em] text-ivory/65">Scroll</p>
            <div className="mx-auto mt-3 h-10 w-px overflow-hidden bg-white/35">
              <motion.div
                className="h-full w-full bg-[#d9c29d]"
                animate={reducedMotion ? { y: 0, opacity: 1 } : { y: [0, 18, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.7, repeat: reducedMotion ? 0 : Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-end justify-end md:justify-end">
          <div className="flex items-center gap-4">
            <div className="min-w-[4.2rem] text-right text-[0.7rem] uppercase tracking-[0.24em] text-ivory/65">
              {String(projectIndex + 1).padStart(2, "0")} / {String(totalProjects).padStart(2, "0")}
            </div>

            {hasMultipleProjects ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous project"
                  onClick={onPrevious}
                  className="inline-flex h-10 w-10 items-center justify-center border border-white/30 bg-black/10 text-ivory transition-opacity duration-200 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
                >
                  <ArrowLeft size={16} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Next project"
                  onClick={onNext}
                  className="inline-flex h-10 w-10 items-center justify-center border border-white/30 bg-black/10 text-ivory transition-opacity duration-200 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
                >
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
