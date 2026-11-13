"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronLeftIcon } from "@/components/icons/ChevronLeftIcon";
import { faqSpring } from "@/lib/motion";

type FaqItemProps = {
  question: string;
  answer: string;
  /**
   * `true`/`false` set the initial state everywhere. `"md"` mirrors the original:
   * open on tablet and up, closed on mobile — resolved with CSS until the first
   * interaction so there's no flash on load.
   */
  defaultOpen?: boolean | "md";
};

const TABLET_UP = "(min-width: 768px)";

export function FaqItem({ question, answer, defaultOpen = false }: FaqItemProps) {
  // `null` = still following the responsive (CSS-driven) default.
  const [open, setOpen] = useState<boolean | null>(defaultOpen === "md" ? null : defaultOpen);
  const answerId = useId();

  const toggle = () =>
    setOpen((value) => {
      const current = value ?? window.matchMedia(TABLET_UP).matches;
      return !current;
    });

  const responsive = open === null;

  return (
    <div className="flex w-full flex-col items-start overflow-hidden">
      <button
        type="button"
        aria-expanded={open ?? undefined}
        aria-controls={answerId}
        onClick={toggle}
        className="flex w-full cursor-pointer items-start gap-6 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-surface"
      >
        <span className="min-w-0 flex-1 text-[20px] leading-[1.5] tracking-[-0.4px]">{question}</span>
        {responsive ? (
          <span aria-hidden="true" className="block size-8 shrink-0 -rotate-90 md:rotate-90">
            <ChevronLeftIcon className="size-8 text-ink-50" />
          </span>
        ) : (
          <motion.span
            aria-hidden="true"
            className="block size-8 shrink-0"
            initial={false}
            animate={{ rotate: open ? 90 : -90 }}
            transition={faqSpring}
          >
            <ChevronLeftIcon className="size-8 text-ink-50" />
          </motion.span>
        )}
      </button>

      {responsive ? (
        <div id={answerId} className="hidden w-full overflow-hidden md:block">
          <p className="pr-5 pb-5 text-[18px] leading-[1.5] text-ink-60">{answer}</p>
        </div>
      ) : (
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={answerId}
              key="answer"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={faqSpring}
              className="w-full overflow-hidden"
            >
              <p className="pr-5 pb-5 text-[18px] leading-[1.5] text-ink-60">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
