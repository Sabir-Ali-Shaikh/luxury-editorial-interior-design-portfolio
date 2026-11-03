"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { MaterialPanel } from "@/components/sections/materials/MaterialPanel";
import { materials } from "@/data/materials";

export function MaterialGallery() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      className="overflow-x-auto pb-2 md:overflow-visible"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.25 }}
    >
      <div className="flex min-w-[42rem] gap-[3px] md:min-w-0 md:gap-[4px] lg:min-w-0">
        {materials.map((material, index) => (
          <MaterialPanel
            key={material.id}
            material={material}
            index={index}
            active={activeId === material.id}
            onHoverStart={() => setActiveId(material.id)}
            onHoverEnd={() => setActiveId(null)}
          />
        ))}
      </div>
    </motion.div>
  );
}
