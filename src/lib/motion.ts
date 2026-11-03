import type { Transition } from "motion/react";
export const editorialEase = [0.22, 1, 0.36, 1] as const;
export const editorialTransition: Transition = { duration: 0.7, ease: editorialEase };
