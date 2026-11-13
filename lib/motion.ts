import type { Transition } from "motion/react";

/** Easing used by every Framer appear effect on the original site. */
export const appearEase = [0.5, 0, 0.88, 0.77] as const;

/** Section headings & body copy: fade-up 32px, 0.4s, 0.1s delay. */
export const appearSection: Transition = {
  type: "tween",
  duration: 0.4,
  delay: 0.1,
  ease: appearEase,
};

/** Hero pill / heading / CTA / image: 0.6s, 0.3s delay. */
export const appearHero: Transition = {
  type: "tween",
  duration: 0.6,
  delay: 0.3,
  ease: appearEase,
};

/** Hero divider and supporting text: 0.6s, 0.5s delay. */
export const appearHeroLate: Transition = {
  type: "tween",
  duration: 0.6,
  delay: 0.5,
  ease: appearEase,
};

/** Header nav + contact button. */
export const appearHeader: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
  mass: 1,
};

/** FAQ accordion. */
export const faqSpring: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 40,
  mass: 1,
};

/** Mobile menu / hamburger morph. */
export const menuTween: Transition = {
  type: "tween",
  duration: 0.3,
  ease: [0.44, 0, 0.56, 1],
};
