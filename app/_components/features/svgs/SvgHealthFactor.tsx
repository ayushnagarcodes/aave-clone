import { easeSwift } from "@/_lib/utils";
import { motion } from "motion/react";

interface SvgHealthFactorProps {
  isInView: boolean;
}

const revealTransition = {
  duration: 0.85,
  ease: easeSwift,
};

const animateTransition = {
  duration: 4.5,
  ease: "easeInOut",
  repeat: Infinity,
  repeatType: "reverse" as const,
  delay: 0.5,
};

const bgCircleVariants = {
  hidden: { fill: "rgba(255, 228, 196, 1)" },
  animate: { fill: "rgba(255, 247, 174, 1)", transition: animateTransition },
};

const revealContainerVariants = {
  hidden: { scale: 0, rotate: 360 },
  visible: { scale: 1, rotate: 0, transition: revealTransition },
};

const animateContainerVariants = {
  hidden: { rotate: 0 },
  animate: { rotate: [0, 40], transition: animateTransition },
};

const ringVariants = {
  hidden: {
    fill: "rgba(255, 228, 196, 1)",
    stroke: "rgba(255, 171, 70, 1)",
  },
  animate: {
    fill: "rgba(255, 247, 174, 1)",
    stroke: "rgba(255, 214, 49, 1)",
    transition: animateTransition,
  },
};

const knobVariants = {
  hidden: { fill: "rgba(255, 128, 0, 1)" },
  animate: { fill: "rgba(255, 184, 0, 1)", transition: animateTransition },
};

function SvgHealthFactor({ isInView }: SvgHealthFactorProps) {
  return (
    <motion.svg
      variants={{
        hidden: {},
        visible: {},
        animate: {},
      }}
      initial="hidden"
      animate={isInView ? ["animate", "visible"] : ""}
      width="402"
      height="201"
      viewBox="0 0 402 201"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: "translate(120px, -48px)" }}
      className="absolute -z-10 top-0 right-0"
    >
      <g clipPath="url(#clip0_2961_6831)">
        {/* Bg circle */}
        <motion.g
          variants={{ hidden: { opacity: 0 }, animate: { opacity: 1 } }}
        >
          <motion.circle
            cx="201"
            cy="201"
            r="201"
            variants={bgCircleVariants}
          ></motion.circle>
        </motion.g>

        {/* Reveal container */}
        <motion.g
          style={{ transformOrigin: "198.25px 201px 0px" }}
          variants={revealContainerVariants}
        >
          {/* Animate container */}
          <motion.g
            style={{
              transformOrigin: "198.25px 201px 0px",
            }}
            variants={animateContainerVariants}
          >
            {/* Ring */}
            <motion.circle
              variants={ringVariants}
              cx="201"
              cy="201"
              r="109.5"
              stroke="rgba(255, 210, 52, 1)"
              strokeWidth="55"
              fill="rgba(255, 245, 176, 1)"
            ></motion.circle>

            {/* Knob */}
            <motion.circle
              variants={knobVariants}
              cx="117"
              cy="130"
              r="31"
              fill="rgba(255, 179, 0, 1)"
              stroke="#FCFCFB"
              strokeWidth="12"
            ></motion.circle>
          </motion.g>
        </motion.g>
      </g>

      <defs>
        <clipPath id="clip0_2961_6831">
          <rect
            width="402"
            height="201"
            fill="white"
            style={{ fill: "white", fillOpacity: 1 }}
          ></rect>
        </clipPath>
      </defs>
    </motion.svg>
  );
}

export default SvgHealthFactor;
