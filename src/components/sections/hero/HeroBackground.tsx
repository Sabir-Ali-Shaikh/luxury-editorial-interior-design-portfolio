import { AnimatePresence, motion, type MotionValue } from "motion/react";
import Image from "next/image";
import type { HeroProject } from "@/data/heroProjects";

type HeroBackgroundProps = {
  project: HeroProject;
  imageScale: MotionValue<number>;
  imageY: MotionValue<number>;
  reducedMotion: boolean;
};

export function HeroBackground({ project, imageScale, imageY, reducedMotion }: HeroBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(9, 8, 7, 0.78) 0%, rgba(9, 8, 7, 0.38) 28%, rgba(9, 8, 7, 0.16) 55%, rgba(9, 8, 7, 0.38) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(16, 14, 12, 0.72) 0%, rgba(16, 14, 12, 0) 38%, rgba(16, 14, 12, 0.08) 100%)",
        }}
      />

      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06, opacity: 0.75 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            className="absolute inset-0"
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.08, opacity: 0 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="absolute inset-0"
              style={reducedMotion ? undefined : { scale: imageScale, y: imageY }}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
