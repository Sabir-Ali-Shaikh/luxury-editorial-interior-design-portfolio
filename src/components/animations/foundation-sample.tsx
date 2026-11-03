"use client";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
export function FoundationSample() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const scaleX = useTransform(progress, [0, 1], [0.05, 1]);
  return <div aria-hidden="true" className="mt-12 h-px overflow-hidden bg-gold/30"><motion.div className="h-full origin-left bg-burgundy" style={{ scaleX: reduce ? 1 : scaleX }} /></div>;
}
