"use client";
import { useEffect, type ReactNode } from "react";
import type LocomotiveScroll from "locomotive-scroll";
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const allowed = window.matchMedia("(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let instance: LocomotiveScroll | undefined;
    let generation = 0;
    const sync = async () => {
      const current = ++generation;
      instance?.destroy();
      instance = undefined;
      if (!allowed.matches) return;
      try {
        const { default: Scroll } = await import("locomotive-scroll");
        if (current !== generation || !allowed.matches) return;
        instance = new Scroll({ lenisOptions: { smoothWheel: true, syncTouch: false, anchors: true } });
      } catch (error) { console.warn("Smooth scroll unavailable; using native scrolling.", error); }
    };
    void sync();
    allowed.addEventListener("change", sync);
    return () => { ++generation; allowed.removeEventListener("change", sync); instance?.destroy(); };
  }, []);
  return children;
}
