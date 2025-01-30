import { cubicBezier } from "motion";

export const easeSwift = cubicBezier(0.19, 1, 0.22, 1);

export const easeSnappy = cubicBezier(0.175, 0.885, 0.32, 1.1);

// For SVG animations in 'Numbers' section
export const numbersCircleRevealVariants = {
  // direction: -1 (from top) or 1 (from bottom)
  hidden: ({ direction }) => ({ y: 70 * direction }),

  revealAnimate: ({ direction }) => ({ y: 300 * direction }),

  visible: ({ delay }) => ({
    y: 0,
    transition: { duration: 0.6, delay: 0.05 * delay, ease: easeSnappy },
  }),
};

// For SVG animations in 'Numbers' section
export const numbersCircleAnimateVariants = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, -30, 30, -30, 30, -30],
    transition: {
      duration: 70,
      ease: ["easeOut", "easeInOut", "easeInOut", "easeInOut"],
      repeat: Infinity,
      repeatType: "reverse" as const,
      delay: 0.1,
    },
  },
};
