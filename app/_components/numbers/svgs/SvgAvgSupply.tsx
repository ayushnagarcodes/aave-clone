import {
  numbersCircleAnimateVariants,
  numbersCircleRevealVariants,
} from "@/_lib/utils";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function SvgAvgSupply() {
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
        fill="#B5E7FA"
        style={{ fill: "color(display-p3 0.7098 0.9059 0.9804)" }}
      ></rect>

      <motion.g
        style={{
          transformOrigin: "228.5px 250px 0px",
        }}
        variants={numbersCircleAnimateVariants}
      >
        {/* Outer circle */}
        <motion.g
          style={{ transformOrigin: "228.5px 250px" }}
          variants={numbersCircleRevealVariants}
          custom={{ direction: 1, delay: 0 }}
        >
          <circle
            mask="url(#supply-circle-outer-mask-1)"
            cx="228.5"
            cy="250"
            r="228.5"
            fill="#DFF6FF"
            style={{ fill: "color(display-p3 0.8739 0.9653 1.0000)" }}
          ></circle>
          <mask id="supply-circle-outer-mask-1">
            <rect x="0" y="21.5" width="228.5" height="457" fill="white"></rect>
          </mask>
          <circle
            mask="url(#supply-circle-outer-mask-2)"
            cx="228.5"
            cy="250"
            r="228.5"
            fill="#6BCEF5"
            style={{ fill: "color(display-p3 0.4196 0.8078 0.9608)" }}
          ></circle>
          <mask id="supply-circle-outer-mask-2">
            <rect
              x="228.5"
              y="21.5"
              width="228.5"
              height="457"
              fill="white"
            ></rect>
          </mask>

          {/* Inner circle */}
          <motion.g
            style={{
              transformOrigin: "228.684px 250px 0px",
            }}
            variants={numbersCircleRevealVariants}
            custom={{ direction: 1, delay: 1 }}
          >
            <circle
              mask="url(#supply-circle-inner-mask-1)"
              cx="228.684"
              cy="250"
              r="114"
              fill="#DFF6FF"
              style={{ fill: "color(display-p3 0.8739 0.9653 1.0000)" }}
            ></circle>
            <mask id="supply-circle-inner-mask-1">
              <rect
                x="228.5"
                y="114"
                width="114"
                height="228"
                fill="white"
              ></rect>
            </mask>
            <circle
              mask="url(#supply-circle-inner-mask-2)"
              cx="228.684"
              cy="250"
              r="114"
              fill="#6BCEF5"
              style={{ fill: "color(display-p3 0.4196 0.8078 0.9608)" }}
            ></circle>
            <mask id="supply-circle-inner-mask-2">
              <rect
                x="114.5"
                y="114"
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

export default SvgAvgSupply;
