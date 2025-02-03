import { easeSwift } from "@/_lib/utils";
import { motion } from "motion/react";

interface SvgGrowthCurveProps {
  isInView: boolean;
}

function SvgGrowthCurve({ isInView }: SvgGrowthCurveProps) {
  return (
    <motion.svg
      variants={{
        hidden: {},
        visible: {},
        animate: {},
      }}
      initial="hidden"
      animate={isInView ? ["animate", "visible"] : ""}
      className="block opacity-1 mt-12 mx-auto"
      overflow="visible"
      width="417"
      height="76"
      viewBox="0 0 417 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Pulse */}
      <motion.circle
        variants={{
          hidden: { scale: 0, opacity: 0 },
          animate: { scale: [0, 2, 0], opacity: [0.8, 0, 0] },
        }}
        transition={{
          repeat: Infinity,
          repeatDelay: 1,
          duration: 1.2,
          delay: 1.75,
          ease: "easeOut",
          times: [0, 1, 1],
        }}
        cx="414.5"
        cy="2"
        r="12"
        stroke="var(--gho-1)"
        strokeWidth="8"
        style={{
          transformOrigin: "414.5px 2px 0px",
        }}
      ></motion.circle>

      {/* Grey bg */}
      <motion.path
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{
          ease: "easeOut",
          duration: 0.4,
          delay: 0.25,
        }}
        stroke="#000000"
        strokeOpacity="0.075"
        d="M2 73.995C82.645 74.3047 278.148 60.3392 415 2"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></motion.path>

      {/* Green curve line */}
      <motion.path
        variants={{
          hidden: { strokeDasharray: "0px 1px" },
          visible: { strokeDasharray: "1px 1px" },
        }}
        transition={{
          ease: "easeInOut",
          duration: 1.5,
          delay: 0.1,
        }}
        opacity={isInView ? 1 : 0}
        d="M2 73.995C82.645 74.3047 278.148 60.3392 415 2"
        stroke="var(--gho-1)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          vectorEffect: "non-scaling-stroke",
          transition: "opacity 0.2s ease-out .2s",
        }}
        pathLength="1"
        strokeDashoffset="0px"
      ></motion.path>

      <motion.g
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: { scale: 1, opacity: 1 },
        }}
        transition={{
          ease: "easeOut",
          duration: 1,
          delay: 1.75,
        }}
        style={{ transformOrigin: "414.5px 2px 0px" }}
      >
        {/* Knob */}
        <motion.circle
          variants={{
            hidden: { scale: 0 },
            animate: { scale: [1, 1.1, 1] },
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 1,
            duration: 1.2,
            delay: 1.75,
            ease: "easeInOut",
            times: [0, 0.8, 1],
          }}
          cx="414.5"
          cy="2"
          r="10"
          fill="var(--gho-1)"
          stroke="#FCFCFB"
          strokeWidth="3"
          style={{
            transformOrigin: "414.5px 2px 0px",
          }}
        ></motion.circle>
      </motion.g>
    </motion.svg>
  );
}

export default SvgGrowthCurve;
