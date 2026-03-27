"use client";

import { useState, useEffect } from "react";

/**
 * Returns whether the current viewport is mobile (< 768px)
 * or the user prefers reduced motion.
 * 
 * Components should use this to provide lighter animations on mobile
 * (shorter distances, faster durations) rather than disabling them entirely.
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const smallViewport = window.innerWidth < 768;
      setIsMobile(prefersReduced || smallViewport);
    };

    check();

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    motionQuery.addEventListener("change", check);
    window.addEventListener("resize", check);

    return () => {
      motionQuery.removeEventListener("change", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return isMobile;
}

/** Mobile-first fade-up: shorter distance, faster speed */
export function fadeUp(mobile: boolean, delay = 0) {
  return {
    initial: { opacity: 0, y: mobile ? 8 : 20 },
    animate: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: mobile ? 0.3 : 0.8,
      ...(delay && !mobile ? { delay } : {}),
    },
  };
}

/** Mobile-first slide-in from side: uses fade-up on mobile instead */
export function slideIn(mobile: boolean, direction: "left" | "right", delay = 0) {
  if (mobile) {
    return fadeUp(true, 0);
  }
  return {
    initial: { opacity: 0, x: direction === "left" ? -30 : 30 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ...(delay ? { delay } : {}) },
  };
}

/** Mobile-first scale-in: subtler on mobile */
export function scaleIn(mobile: boolean) {
  return {
    initial: { opacity: 0, scale: mobile ? 0.98 : 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: mobile ? 0.4 : 0.8 },
  };
}
