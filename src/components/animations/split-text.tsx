"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
// The semantic copy stays React-owned; SplitType only mutates the visual copy.
export function SplitText({ text, as: Tag = "span", types = "lines,words,chars", className }: {
  text: string; as?: "span" | "p" | "h1" | "h2" | "h3";
  types?: "lines" | "words" | "chars" | "lines,words,chars"; className?: string;
}) {
  const visual = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const element = visual.current;
    if (!element || reduced) return;
    let active = true;
    let split: { revert: () => void } | undefined;
    let observer: ResizeObserver | undefined;
    let frame = 0;
    let removeFontListener = () => {};
    const initialize = async () => {
      const [{ default: SplitType }] = await Promise.all([import("split-type"), document.fonts.ready]);
      if (!active) return;
      const rebuild = () => { split?.revert(); split = new SplitType(element, { types }); };
      rebuild();
      let width = element.getBoundingClientRect().width;
      observer = new ResizeObserver(([entry]) => {
        if (Math.abs(entry.contentRect.width - width) < 1) return;
        width = entry.contentRect.width;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(rebuild);
      });
      observer.observe(element);
      document.fonts.addEventListener("loadingdone", rebuild);
      removeFontListener = () => document.fonts.removeEventListener("loadingdone", rebuild);
    };
    void initialize().catch(() => { split?.revert(); });
    return () => { active = false; cancelAnimationFrame(frame); observer?.disconnect(); removeFontListener(); split?.revert(); };
  }, [text, types, reduced]);
  return <Tag className={className}><span className="sr-only">{text}</span><span key={text} ref={visual} aria-hidden="true" className="split-visual">{text}</span></Tag>;
}

