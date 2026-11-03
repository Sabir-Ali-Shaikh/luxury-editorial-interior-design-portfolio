"use client";
import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";
import { editorialTransition } from "@/lib/motion";
import { SmoothScrollProvider } from "./smooth-scroll-provider";
export function AppProviders({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user" transition={editorialTransition}><SmoothScrollProvider>{children}</SmoothScrollProvider></MotionConfig>;
}
