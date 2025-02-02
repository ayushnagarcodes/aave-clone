import { motion } from "motion/react";

const transition = {
  ease: "linear",
  duration: 1.35,
  delay: 4.5,
  repeat: Infinity,
  repeatDelay: 6,
  times: [0, 0.1, 0.2, 0.8, 0.9, 1],
};

function IconTransparent() {
  return (
    <motion.svg
      variants={{ animate: {} }}
      animate="animate"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <mask id="transparent-mask-left" width="32" height="32">
        <rect x="-16" y="0" width="64" height="32" fill="white"></rect>

        {/* Left ellipse - outline */}
        <motion.ellipse
          variants={{
            animate: {
              cx: [9, 6, 9, 9, 6, 9],
              rx: [0, 11, 11, 11, 11, 0],
              ry: [0, 16, 16, 16, 16, 0],
            },
          }}
          initial={false}
          transition={transition}
          cy="16"
          fill="black"
        ></motion.ellipse>
      </mask>

      {/* Left ellipse */}
      <motion.ellipse
        variants={{
          animate: {
            cx: [9, 6, 9, 9, 6, 9],
            rx: [6, 8, 8, 8, 8, 6],
            ry: [10, 13, 13, 13, 13, 10],
            fill: [
              "#d4d3fd",
              "#9896ff",
              "#9896ff",
              "#9896ff",
              "#9896ff",
              "#d4d3fd",
            ],
          },
        }}
        initial={false}
        transition={transition}
        mask="url(#transparent-mask-right)"
        cy="16"
      ></motion.ellipse>

      {/* Right ellipse - outline */}
      <mask id="transparent-mask-right" width="32" height="32">
        <rect x="-16" y="0" width="64" height="32" fill="white"></rect>

        <motion.ellipse
          variants={{
            animate: {
              cx: [21, 24, 21, 21, 24, 21],
              rx: [11, 0, 0, 0, 0, 11],
              ry: [16, 0, 0, 0, 0, 16],
            },
          }}
          initial={false}
          transition={transition}
          cy="16"
          fill="black"
        ></motion.ellipse>
      </mask>

      {/* Right ellipse */}
      <motion.ellipse
        variants={{
          animate: {
            cx: [21, 24, 21, 21, 24, 21],
            rx: [8, 6, 6, 6, 6, 8],
            ry: [13, 10, 10, 10, 10, 13],
            fill: [
              "#9896ff",
              "#d4d3fd",
              "#d4d3fd",
              "#d4d3fd",
              "#d4d3fd",
              "#9896ff",
            ],
          },
        }}
        initial={false}
        transition={transition}
        mask="url(#transparent-mask-left)"
        cy="16"
      ></motion.ellipse>
    </motion.svg>
  );
}

export default IconTransparent;
