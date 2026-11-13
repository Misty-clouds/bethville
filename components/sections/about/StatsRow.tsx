"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { stats } from "@/lib/content";

/**
 * Stats rise from y:32 → 0 as the row scrolls into view
 * (Framer "onInView" scroll transform, offset start-end → end-end).
 */
export function StatsRow() {
  const ref = useRef<HTMLDListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [32, 0]), {
    stiffness: 250,
    damping: 60,
    mass: 1,
  });

  return (
    <motion.dl
      ref={ref}
      style={{ y }}
      className="flex w-full flex-col items-center justify-center gap-8 overflow-hidden md:grid md:grid-cols-2 md:gap-12 lg:flex lg:flex-row"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="relative flex w-full flex-col items-start gap-2.5 overflow-hidden pb-8 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-ink-10 md:pb-[50px] lg:min-w-0 lg:flex-1"
        >
          <dt className="text-left text-[24px] leading-[1.5] text-ink-60">{stat.label}</dt>
          <dd className="text-[24px] leading-[1.2] tracking-[-0.48px] md:text-[28px] md:tracking-[-0.56px] lg:text-[36px] lg:tracking-[-0.72px]">
            {stat.value}
          </dd>
        </div>
      ))}
    </motion.dl>
  );
}
