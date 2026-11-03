import { motion, type MotionValue } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { HeroProject } from "@/data/heroProjects";

type HeroContentProps = {
  project: HeroProject;
  reducedMotion: boolean;
  contentY: MotionValue<number>;
  contentOpacity: MotionValue<number>;
};

export function HeroContent({ project, reducedMotion, contentY, contentOpacity }: HeroContentProps) {
  return (
    <motion.div
      className="relative z-10 max-w-[32rem] pb-6 pt-12 md:pb-8 md:pt-16"
      style={reducedMotion ? undefined : { y: contentY, opacity: contentOpacity }}
    >
      <motion.p
        className="text-[0.68rem] uppercase tracking-[0.36em] text-ivory/75"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
      >
        A considered beginning
      </motion.p>

      <h1 id="hero-heading" className="mt-7 space-y-2">
        {project.headline.map((line, index) => (
          <motion.div
            key={line}
            className="overflow-hidden"
            initial={{ opacity: 0, y: "105%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.35 + index * 0.16,
            }}
          >
            <span className="block font-heading text-[clamp(3.6rem,6vw,7rem)] leading-[0.92] tracking-[-0.05em] text-ivory">
              {line}
            </span>
          </motion.div>
        ))}
      </h1>

      <motion.p
        className="mt-8 max-w-[26rem] text-[0.97rem] leading-[1.7] text-ivory/80 md:text-[1.05rem]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
      >
        {project.description}
      </motion.p>

      <div className="mt-9 flex flex-wrap items-center gap-4">
        <motion.a
          href="#portfolio"
          className="group inline-flex items-center gap-3 border border-ivory/35 bg-[rgba(217,194,157,0.96)] px-5 py-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[#110d0a] transition-colors duration-300 hover:bg-[#e9d6b1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.82 }}
        >
          <span>EXPLORE THE PORTFOLIO</span>
          <span className="inline-flex transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
            <ArrowRight size={14} />
          </span>
        </motion.a>

        <motion.a
          href="#about"
          className="inline-flex items-center border border-[#d7c49e] bg-transparent px-5 py-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ivory transition-colors duration-300 hover:bg-[#d7c49e]/10 hover:text-[#f1e5cf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.92 }}
        >
          DISCOVER THE STUDIO
        </motion.a>
      </div>
    </motion.div>
  );
}
