"use client";

import { motion, type SpringOptions } from "motion/react";
import { Children, useRef, type ReactNode, type RefObject } from "react";
import { cn } from "@/lib/cn";
import { useScrollKeyframes } from "@/lib/useScrollKeyframes";

/** Sticky offsets per card: mobile / tablet+laptop+desktop (from the original). */
const STICKY_TOP = [
  "top-[30px] md:top-[100px]",
  "top-[36px] md:top-[130px]",
  "top-[42px] md:top-[170px]",
  "top-[48px] md:top-[210px]",
  "top-[48px] md:top-[210px]",
  "top-[48px] md:top-[210px]",
];

/** Each earlier card shrinks by 5% for every later card (up to 3) that scrolls over it. */
const SCALE_STEPS = [0.95, 0.9, 0.85];

const SPRINGS: SpringOptions[] = [
  { stiffness: 422, damping: 69, mass: 2.3 },
  { stiffness: 422, damping: 69, mass: 2.3 },
  { stiffness: 422, damping: 69, mass: 2.9 },
];

type StackCardProps = {
  index: number;
  refs: RefObject<HTMLDivElement | null>[];
  children: ReactNode;
};

function StackCard({ index, refs, children }: StackCardProps) {
  // Cards 1–3 react to the next (up to three) cards; the rest stay at scale 1.
  const followers = index < SPRINGS.length ? refs.slice(index + 1, 4) : [];
  const scale = useScrollKeyframes(
    1,
    followers.map((ref, i) => ({ ref, value: SCALE_STEPS[i] })),
    SPRINGS[index] ?? SPRINGS[0],
  );

  return (
    <motion.div
      ref={refs[index]}
      className={cn("sticky z-[1] w-full", STICKY_TOP[index])}
      style={followers.length ? { scale } : undefined}
    >
      {children}
    </motion.div>
  );
}

/** Stack of sticky service cards that scale down as later cards overlap them. */
export function ServiceStack({ children }: { children: ReactNode }) {
  const items = Children.toArray(children);
  const r0 = useRef<HTMLDivElement>(null);
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);
  const r3 = useRef<HTMLDivElement>(null);
  const r4 = useRef<HTMLDivElement>(null);
  const r5 = useRef<HTMLDivElement>(null);
  const refs = [r0, r1, r2, r3, r4, r5];

  return (
    <div className="flex w-full flex-col items-center gap-8">
      {items.map((child, index) => (
        <StackCard key={index} index={index} refs={refs}>
          {child}
        </StackCard>
      ))}
    </div>
  );
}
