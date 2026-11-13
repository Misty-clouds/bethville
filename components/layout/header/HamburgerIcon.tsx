"use client";

import { motion } from "motion/react";
import { menuTween } from "@/lib/motion";

/** Two 16×2 bars that morph into an X. Positions match the Framer component (42×42 box). */
export function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative block size-[42px] rounded-[36px]">
      <motion.span
        className="absolute left-[13px] h-0.5 w-4 rounded-[25%/200%] bg-menu-ink"
        initial={false}
        animate={open ? { top: 20, rotate: -45 } : { top: 16, rotate: 0 }}
        transition={menuTween}
      />
      <motion.span
        className="absolute left-[13px] h-0.5 w-4 rounded-[25%/200%] bg-menu-ink"
        initial={false}
        animate={open ? { top: 20, rotate: 45 } : { top: 23, rotate: 0 }}
        transition={menuTween}
      />
    </span>
  );
}
