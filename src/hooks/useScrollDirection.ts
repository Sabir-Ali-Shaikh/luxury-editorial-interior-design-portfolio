"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollDirection() {
  const [isCompact, setIsCompact] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const direction = currentY > lastScrollYRef.current ? "down" : currentY < lastScrollYRef.current ? "up" : "stable";

      setIsCompact(currentY > 90);

      if (currentY <= 32) {
        setIsVisible(true);
      } else if (direction === "up") {
        setIsVisible(true);
      } else if (direction === "down" && currentY > 120) {
        setIsVisible(false);
      }

      lastScrollYRef.current = currentY;
    };

    const onScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { isCompact, isVisible };
}
