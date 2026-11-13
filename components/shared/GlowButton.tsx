"use client";

import { motion, type Transition } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/cn";

const GLOW_STOPS = "rgb(111, 153, 84) 0%, rgba(199, 222, 184, 0) 100%";
const STROKE_STOPS = "rgb(218, 255, 194) 0%, rgba(229, 255, 217, 0) 100%";

const glow = (shape: string) => `radial-gradient(${shape}, ${GLOW_STOPS})`;
const stroke = (shape: string) => `radial-gradient(${shape}, ${STROKE_STOPS})`;

/** Framer cycles Top → Right → Bottom → Left, switching every 0.7s with a 0.8s linear tween. */
const glowCycle = [
  glow("25% 50% at 50% 0%"),
  glow("25% 35.4% at 100% 50%"),
  glow("25% 50% at 50% 100%"),
  glow("25% 34.4% at 0% 50%"),
  glow("25% 50% at 50% 0%"),
];
const strokeCycle = [
  stroke("20.7% 50% at 50% 0%"),
  stroke("16.2% 41.2% at 100% 50%"),
  stroke("20.7% 50% at 50% 100%"),
  stroke("16.6% 43.1% at 0% 50%"),
  stroke("20.7% 50% at 50% 0%"),
];
const glowHover = glow("50% 100% at 50% 50%");
const strokeHover = stroke("75% 181.159% at 50% 50%");

const cycleTransition: Transition = {
  duration: 2.8,
  ease: "linear",
  repeat: Infinity,
};
const hoverTransition: Transition = { duration: 0.8, ease: "linear" };

type GlowButtonProps = {
  href: string;
  children: string;
  className?: string;
};

/** The animated "running stroke" CTA used in the hero. */
export function GlowButton({ href, children, className }: GlowButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex h-[62px] w-[245px] cursor-pointer items-center justify-center rounded-[118px] bg-brand px-8 py-5",
        "outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
        className,
      )}
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 z-0 rounded-[72px] blur-[15px]"
        initial={{ background: glowCycle[0] }}
        animate={
          hovered
            ? { background: glowHover, transition: hoverTransition }
            : { background: glowCycle, transition: cycleTransition }
        }
      />
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 z-0 overflow-hidden rounded-[72px]"
        initial={{ background: strokeCycle[0] }}
        animate={
          hovered
            ? { background: strokeHover, transition: hoverTransition }
            : { background: strokeCycle, transition: cycleTransition }
        }
      />
      <span
        aria-hidden="true"
        className="absolute inset-[2px] z-0 rounded-[114px] bg-brand"
      />
      <span className="relative z-[1] whitespace-pre text-[18px] leading-[1.2] font-medium text-white">
        {children}
      </span>
    </a>
  );
}
