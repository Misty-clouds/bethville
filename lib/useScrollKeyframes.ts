"use client";

import {
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type MotionValue,
  type SpringOptions,
} from "motion/react";
import { useEffect, type RefObject } from "react";

export type ScrollKeyframe = {
  /** Element whose scroll position drives this keyframe. */
  ref: RefObject<HTMLElement | null>;
  value: number;
};

/**
 * Sum of offsetTop up the offsetParent chain — exactly what Framer uses.
 * For sticky elements this is their *live* (stuck) offset, which is why the
 * ranges are recomputed on every scroll frame.
 */
function offsetTopChain(el: HTMLElement) {
  let top = 0;
  let node: HTMLElement | null = el;
  while (node && node !== document.documentElement) {
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return top;
}

/** Piecewise-linear interpolation, clamped at both ends. */
function interpolate(value: number, input: number[], output: number[]) {
  if (value <= input[0]) return output[0];
  for (let i = 1; i < input.length; i++) {
    if (value <= input[i]) {
      const span = input[i] - input[i - 1];
      const progress = span === 0 ? 1 : (value - input[i - 1]) / span;
      return output[i - 1] + (output[i] - output[i - 1]) * progress;
    }
  }
  return output[output.length - 1];
}

/**
 * Port of Framer's "Scroll Transform → onScrollTarget" effect.
 *
 * Keyframe k interpolates from keyframe k-1's value while the page scrolls from
 * `refTop - 1 - threshold * viewportHeight` through the ref's height (clamped
 * to end just before the next keyframe starts). The result is spring-smoothed.
 */
export function useScrollKeyframes(
  initial: number,
  keyframes: ScrollKeyframe[],
  spring: SpringOptions,
  viewportThreshold = 0.5,
): MotionValue<number> {
  const { scrollY } = useScroll();
  const raw = useMotionValue(initial);

  const update = (scroll: number) => {
    if (keyframes.length === 0) return;
    const offset = viewportThreshold * window.innerHeight;
    const starts: number[] = [];
    const input: number[] = [];
    const output: number[] = [];

    for (let k = keyframes.length - 1; k >= 0; k--) {
      const el = keyframes[k].ref.current;
      if (!el) return;
      const start = offsetTopChain(el) - 1 - offset;
      const end = Math.max(start + el.clientHeight, 0);
      const nextStart = starts[starts.length - 1];
      starts.push(start);
      input.unshift(
        Math.max(start, 0),
        nextStart === undefined ? end : Math.min(end, Math.max(nextStart - 1, 0)),
      );
      output.unshift(k === 0 ? initial : keyframes[k - 1].value, keyframes[k].value);
    }

    raw.set(interpolate(scroll, input, output));
  };

  useMotionValueEvent(scrollY, "change", update);

  useEffect(() => {
    const sync = () => update(window.scrollY);
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
    // keyframes / initial are static per component instance
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useSpring(raw, spring);
}
