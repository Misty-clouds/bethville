"use client";

import { motion } from "motion/react";
import { useRef, type ReactNode } from "react";
import { useScrollKeyframes } from "@/lib/useScrollKeyframes";

/** Row of testimonial cards that slides 1000px left as the row scrolls past. */
export function TestimonialTrack({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useScrollKeyframes(0, [{ ref, value: -1000 }], {
    stiffness: 232,
    damping: 90,
    mass: 1,
  });

  return (
    <motion.div ref={ref} style={{ x }} className="flex w-full items-center gap-8">
      {children}
    </motion.div>
  );
}
