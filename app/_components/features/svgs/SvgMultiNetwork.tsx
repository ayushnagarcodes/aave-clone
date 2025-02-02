import { easeSwift } from "@/_lib/utils";
import { motion } from "motion/react";

interface SvgMultiNetworkProps {
  isInView: boolean;
}

const circleRevealVariants = {
  hidden: { x: 100, scale: 0 },
  visible: (delay: number) => ({
    x: 0,
    scale: 1,
    transition: { duration: 0.75, ease: easeSwift, delay: delay * 0.1 },
  }),
};

const circleAnimateVariants = {
  hidden: { x: 0 },
  animate: (delay: number) => ({
    x: [0, 20, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      delay: delay * 0.4,
    },
  }),
};

function SvgMultiNetwork({ isInView }: SvgMultiNetworkProps) {
  return (
    <motion.svg
      variants={{
        hidden: {},
        visible: {},
        animate: {},
      }}
      initial="hidden"
      animate={isInView ? ["animate", "visible"] : ""}
      width="237"
      height="169"
      viewBox="0 0 237 169"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -z-10 top-0 right-0"
    >
      {/* Left circle */}
      <motion.g
        style={{ transformOrigin: "65px 57.0001px 0px" }}
        variants={circleRevealVariants}
        custom={2}
      >
        <motion.g
          style={{
            transformOrigin: "65px 57.0001px 0px",
          }}
          variants={circleAnimateVariants}
          custom={0}
        >
          <path
            d="M65 122C29.1015 122 8.98209e-06 92.8986 1.52588e-05 57.0001L130 57.0001C130 92.8986 100.899 122 65 122Z"
            fill="#9896FF"
            style={{ fill: "color(display-p3 0.5951 0.5870 1.0000)" }}
          ></path>
          <path
            d="M65 -7.99988C100.899 -7.99988 130 21.1016 130 57.0001L0 57.0001C3.13835e-06 21.1016 29.1015 -7.99988 65 -7.99988Z"
            fill="#E2E0FF"
            style={{ fill: "color(display-p3 0.8863 0.8784 1.0000)" }}
          ></path>
        </motion.g>
      </motion.g>

      {/* Middle circle */}
      <motion.g
        style={{
          transformOrigin: "158.286px 56.9998px 0px",
        }}
        variants={circleRevealVariants}
        custom={1}
      >
        <motion.g
          style={{
            transformOrigin: "158.286px 56.9998px 0px",
          }}
          variants={circleAnimateVariants}
          custom={1}
        >
          <path
            d="M158.286 -35.8574C107.003 -35.8573 65.4289 5.71631 65.4289 57L251.144 57C251.144 5.7163 209.57 -35.8574 158.286 -35.8574Z"
            fill="#9896FF"
            style={{ fill: "color(display-p3 0.5951 0.5870 1.0000)" }}
          ></path>
          <path
            d="M158.286 149.857C209.57 149.857 251.143 108.284 251.143 57L65.4287 57C65.4287 108.284 107.002 149.857 158.286 149.857Z"
            fill="#BCBBFF"
            style={{ fill: "color(display-p3 0.7391 0.7337 1.0000)" }}
          ></path>
        </motion.g>
      </motion.g>

      {/* Right circle */}
      <motion.g
        style={{ transformOrigin: "251px 57.0001px 0px" }}
        variants={circleRevealVariants}
        custom={0}
      >
        <motion.g
          style={{
            transformOrigin: "251px 57.0001px 0px",
          }}
          variants={circleAnimateVariants}
          custom={2}
        >
          <path
            d="M251 169C312.856 169 363 118.856 363 57.0001L139 57.0001C139 118.856 189.144 169 251 169Z"
            fill="#9896FF"
            style={{ fill: "color(display-p3 0.5951 0.5870 1.0000)" }}
          ></path>
          <path
            d="M251 -54.9999C189.144 -54.9999 139 -4.85577 139 57.0001L363 57.0001C363 -4.85577 312.856 -54.9999 251 -54.9999Z"
            fill="#E2E0FF"
            style={{ fill: "color(display-p3 0.8863 0.8784 1.0000)" }}
          ></path>
        </motion.g>
      </motion.g>
    </motion.svg>
  );
}

export default SvgMultiNetwork;
