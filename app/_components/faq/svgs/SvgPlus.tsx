import { motion } from "motion/react";

const transition = {
  ease: "linear",
  duration: 0.2,
};

function SvgPlus() {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      className="stroke-[#1a88f8] flex-shrink-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={{
          inactive: { rotateZ: 0 },
          active: { rotateZ: 180 },
        }}
        transition={transition}
        d="M19 25.5H26L33 25.5"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ transform: "none", transformOrigin: "26px 25.5px 0px" }}
      ></motion.path>
      <motion.path
        variants={{
          inactive: { rotateZ: 0, scale: 1 },
          active: { rotateZ: 80, scale: 0 },
        }}
        transition={transition}
        d="M26 18.5L26 25.5L26 32.5"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ transform: " none", transformOrigin: "26px 25.5px 0px" }}
      ></motion.path>
    </svg>
  );
}

export default SvgPlus;
