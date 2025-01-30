import {
  numbersCircleAnimateVariants,
  numbersCircleRevealVariants,
} from "@/_lib/utils";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function SvgAvgBorrow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1, once: true });

  return (
    <motion.svg
      ref={ref}
      variants={{
        hidden: {},
        visible: {},
        animate: {},
      }}
      initial={["hidden", "initial"]}
      animate={["revealAnimate", isInView ? "animate" : "initial"]}
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
      width="457"
      height="250"
      viewBox="0 0 457 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block w-full overflow-clip relative z-1 rounded-[16px] bg-[--bg-4]"
    >
      <rect
        width="457"
        height="250"
        fill="#48ABFF"
        style={{ fill: "color(display-p3 0.2824 0.6706 1.0000)" }}
      ></rect>

      <motion.g
        style={{
          transformOrigin: "228.5px 0px 0px",
        }}
        variants={numbersCircleAnimateVariants}
      >
        {/* Outer circle */}
        <motion.g
          style={{ transformOrigin: "228.5px 0px" }}
          variants={numbersCircleRevealVariants}
          custom={{ direction: -1, delay: 0 }}
        >
          <circle
            mask="url(#borrow-circle-outer-mask-1)"
            cx="228.5"
            r="228.5"
            fill="#A9E7FF"
            style={{ fill: "color(display-p3 0.6628 0.9060 1.0000)" }}
          ></circle>
          <mask id="borrow-circle-outer-mask-1">
            <rect
              x="228.5"
              y="-228.5"
              width="228.5"
              height="457"
              fill="white"
            ></rect>
          </mask>
          <circle
            mask="url(#borrow-circle-outer-mask-2)"
            cx="228.5"
            r="228.5"
            fill="#1A88F8"
            style={{ fill: "color(display-p3 0.1020 0.5333 0.9725)" }}
          ></circle>
          <mask id="borrow-circle-outer-mask-2">
            <rect
              x="0"
              y="-228.5"
              width="228.5"
              height="457"
              fill="white"
            ></rect>
          </mask>

          {/* Inner circle */}
          <motion.g
            style={{ transformOrigin: "228.5px 0px" }}
            variants={numbersCircleRevealVariants}
            custom={{ direction: -1, delay: 1 }}
          >
            <circle
              mask="url(#borrow-circle-inner-mask-1)"
              cx="228.5"
              r="114"
              fill="#A9E7FF"
              style={{ fill: "color(display-p3 0.6628 0.9060 1.0000)" }}
            ></circle>
            <mask id="borrow-circle-inner-mask-1">
              <rect
                x="114.5"
                y="-114"
                width="114"
                height="228"
                fill="white"
              ></rect>
            </mask>
            <circle
              mask="url(#borrow-circle-inner-mask-2)"
              cx="228.5"
              r="114"
              fill="#1A88F8"
              style={{ fill: "color(display-p3 0.1020 0.5333 0.9725)" }}
            ></circle>
            <mask id="borrow-circle-inner-mask-2">
              <rect
                x="228.5"
                y="-114"
                width="114"
                height="228"
                fill="white"
              ></rect>
            </mask>
          </motion.g>
        </motion.g>
      </motion.g>
    </motion.svg>
  );
}

export default SvgAvgBorrow;
