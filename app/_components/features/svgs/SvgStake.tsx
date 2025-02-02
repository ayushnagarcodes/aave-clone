import { easeSwift } from "@/_lib/utils";
import { motion } from "motion/react";

interface SvgStakeProps {
  isInView: boolean;
}

const circleRevealVariants = {
  hidden: { scale: 0 },
  visible: (delay: number) => ({
    scale: 1,
    transition: {
      duration: 1.5,
      ease: easeSwift,
      delay: delay * 0.1,
    },
  }),
};

const circleAnimateVariants = {
  hidden: { scale: 1 },
  animate: (delay: number) => ({
    scale: [1, 0.9, 1],
    transition: {
      duration: 4.5,
      ease: "easeInOut",
      repeat: Infinity,
      delay: delay * 0.3,
    },
  }),
};

function SvgStake({ isInView }: SvgStakeProps) {
  return (
    <motion.svg
      variants={{
        hidden: {},
        visible: {},
        animate: {},
      }}
      initial="hidden"
      animate={isInView ? ["animate", "visible"] : ""}
      width="268"
      height="150"
      viewBox="0 0 268 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -z-10 top-0 right-0"
    >
      <motion.g
        style={{ transformOrigin: "147px 0px 0px" }}
        variants={{ hidden: { rotate: -30 }, visible: { rotate: 0 } }}
        transition={{ duration: 1.5, ease: easeSwift }}
      >
        {/* Outer circle */}
        <motion.g
          style={{ transformOrigin: "147px 0px 0px" }}
          variants={circleRevealVariants}
          custom={2}
        >
          <motion.g
            style={{
              transformOrigin: "147px 0px 0px",
            }}
            variants={circleAnimateVariants}
            custom={0}
          >
            <circle
              mask="url(#defi-stake-circle-mask-1)"
              cx="147"
              r="147"
              fill="#DFF6FF"
              style={{ fill: "color(display-p3 0.8739 0.9653 1.0000)" }}
            ></circle>
            <circle
              mask="url(#defi-stake-circle-mask-2)"
              cx="147"
              r="147"
              fill="#6BCEF5"
              style={{ fill: "color(display-p3 0.4196 0.8078 0.9608)" }}
            ></circle>
          </motion.g>
        </motion.g>

        {/* Middle circle */}
        <motion.g
          style={{ transformOrigin: "147px 0px 0px" }}
          variants={circleRevealVariants}
          custom={1}
        >
          <motion.g
            style={{
              transformOrigin: "147px 0px 0px",
            }}
            variants={circleAnimateVariants}
            custom={1}
          >
            <circle
              mask="url(#defi-stake-circle-mask-1)"
              cx="147"
              r="121"
              fill="#6BCEF5"
              style={{ fill: "color(display-p3 0.4196 0.8078 0.9608)" }}
            ></circle>
            <circle
              mask="url(#defi-stake-circle-mask-2)"
              cx="147"
              r="121"
              fill="#B5E7FA"
              style={{ fill: "color(display-p3 0.7098 0.9059 0.9804)" }}
            ></circle>
          </motion.g>
        </motion.g>

        {/* Inner circle */}
        <motion.g
          style={{ transformOrigin: "147px 0px 0px" }}
          variants={circleRevealVariants}
          custom={0}
        >
          <motion.g
            style={{
              transformOrigin: "147px 0px 0px",
            }}
            variants={circleAnimateVariants}
            custom={4}
          >
            <circle
              mask="url(#defi-stake-circle-mask-1)"
              cx="147"
              r="71"
              fill="#DFF6FF"
              style={{ fill: "color(display-p3 0.8739 0.9653 1.0000)" }}
            ></circle>
            <circle
              mask="url(#defi-stake-circle-mask-2)"
              cx="147"
              r="71"
              fill="#6BCEF5"
              style={{ fill: "color(display-p3 0.4196 0.8078 0.9608)" }}
            ></circle>
          </motion.g>
        </motion.g>
      </motion.g>

      <defs>
        <mask id="defi-stake-circle-mask-1">
          <rect y="-147" width="147" height="294" fill="white"></rect>
        </mask>
        <mask id="defi-stake-circle-mask-2">
          <rect x="147" y="-147" width="147" height="294" fill="white"></rect>
        </mask>
      </defs>
    </motion.svg>
  );
}

export default SvgStake;
