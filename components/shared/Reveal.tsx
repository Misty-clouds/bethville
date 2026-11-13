"use client";

import { motion, type Transition } from "motion/react";
import type { ReactNode } from "react";
import { appearSection } from "@/lib/motion";

type RevealProps = {
  children?: ReactNode;
  className?: string;
  /** Initial vertical offset in px (Framer uses 32 for content, 0 for pure fades). */
  y?: number;
  transition?: Transition;
  /** Fraction of the element that must be visible before it animates in. */
  amount?: number;
  /** Re-run the animation every time the element re-enters the viewport. */
  repeat?: boolean;
  id?: string;
};

/**
 * Recreates Framer's "Appear" effect: fade + translate in when the element
 * scrolls into view.
 */
export function Reveal({
  children,
  className,
  y = 32,
  transition = appearSection,
  amount = 0.5,
  repeat = false,
  id,
}: RevealProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: !repeat, amount }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
