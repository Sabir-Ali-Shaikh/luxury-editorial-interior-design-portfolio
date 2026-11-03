"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { type Material } from "@/data/materials";

export function MaterialPanel({
  material,
  active,
  index,
  onHoverStart,
  onHoverEnd,
}: {
  material: Material;
  active: boolean;
  index: number;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.figure
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: reduceMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: reduceMotion ? 0 : 0.1 + index * 0.06,
      }}
      className="group relative h-[15rem] min-w-[7.5rem] flex-1 overflow-hidden bg-[#100e0c] md:h-[16rem] lg:h-[13.5rem] xl:h-[15.5rem]"
      style={reduceMotion ? undefined : { flexGrow: active ? 1.7 : 1, transition: "flex-grow 500ms cubic-bezier(0.22, 1, 0.36, 1)" }}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.08, opacity: 0.85 }}
        whileInView={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : index * 0.06 }}
      >
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={material.image}
            alt={material.alt}
            fill
            sizes="(max-width: 767px) 50vw, (max-width: 1279px) 25vw, 12vw"
            style={{ objectFit: "cover", objectPosition: material.objectPosition ?? "center" }}
            className="transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
          />
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#100e0c]/75 via-[#100e0c]/10 to-transparent" />

      <figcaption className="absolute inset-x-0 bottom-0 p-3 text-[#f3ebdf] md:p-3.5 lg:p-4">
        <div className="transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[-3px]">
          <div className="text-[0.58rem] uppercase tracking-[0.18em] text-[#f3ebdf]/80">{material.name}</div>
          <div className="mt-1 font-heading text-[1.15rem] leading-none tracking-[-0.04em] text-[#f3ebdf] md:text-[1.3rem] lg:text-[1.5rem]">
            {material.variant}
          </div>
        </div>
      </figcaption>
    </motion.figure>
  );
}
