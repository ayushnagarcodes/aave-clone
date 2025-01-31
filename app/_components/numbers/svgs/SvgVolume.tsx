import { easeSwift } from "@/_lib/utils";
import { motion } from "motion/react";

const rowRevealVariants = {
  // direction: -1 (from left) or 1 (from right)
  hidden: (direction: -1 | 1) => ({ x: 354 * direction }),

  visible: {
    x: 0,
    transition: { duration: 1, ease: easeSwift },
  },
};

const rowAnimateVariants = {
  hidden: { x: 0 },

  // direction: -1 (to left) or 1 (to right)
  animate: (direction: -1 | 1) => ({
    x: [0, 354 * direction, 708 * direction],
    transition: {
      duration: 5.5,
      ease: "easeInOut",
      repeat: Infinity,
      delay: 1,
    },
  }),
};

function SvgVolume() {
  return (
    <svg
      width="457"
      height="250"
      viewBox="545 0 457 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block w-full overflow-clip relative z-1 rounded-[16px] bg-[--bg-4]"
    >
      <rect
        x="0"
        y="0"
        width="400%"
        height="100%"
        fill="#63BBB6"
        style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
      ></rect>

      {/* Top row */}
      <motion.g
        id="bottom"
        style={{ transformOrigin: "770.75px 62.5px 0px" }}
        variants={rowRevealVariants}
        custom={-1}
      >
        <motion.g
          id="top"
          style={{
            transformOrigin: "770.75px 62.5px 0px",
          }}
          variants={rowAnimateVariants}
          custom={1}
        >
          <rect
            id="Rectangle 22445"
            x="771"
            width="770"
            height="125"
            fill="#1F807B"
            style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
          ></rect>
          <rect
            id="Rectangle 22448"
            x="63"
            width="354"
            height="125"
            fill="#1F807B"
            style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
          ></rect>
          <rect
            id="Rectangle 22447"
            width="354"
            height="125"
            transform="matrix(-1 0 0 1 771 0)"
            fill="#63BBB6"
            style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
          ></rect>
          <g id="Group 1171279177">
            <circle
              id="Ellipse 3340"
              cx="62.5"
              cy="62.5"
              r="62.5"
              transform="matrix(1 1.74846e-07 1.74846e-07 -1 708.5 125)"
              fill="#1F807B"
              style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
            ></circle>
            <path
              id="Ellipse 3341"
              d="M771 7.62939e-06C805.518 1.36647e-05 833.5 27.9822 833.5 62.5C833.5 97.0178 805.518 125 771 125L771 7.62939e-06Z"
              fill="#9DEBE7"
              style={{ fill: "color(display-p3 0.6157 0.9216 0.9059)" }}
            ></path>
          </g>
          <g id="Group 1171279178">
            <circle
              id="Ellipse 3340_2"
              cx="62.5"
              cy="62.5"
              r="62.5"
              transform="matrix(1 1.74846e-07 1.74846e-07 -1 354.5 125)"
              fill="#9DEBE7"
              style={{ fill: "color(display-p3 0.6157 0.9216 0.9059)" }}
            ></circle>
            <path
              id="Ellipse 3341_2"
              d="M417 7.62939e-06C451.518 1.36647e-05 479.5 27.9822 479.5 62.5C479.5 97.0178 451.518 125 417 125L417 7.62939e-06Z"
              fill="#1F807B"
              style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
            ></path>
          </g>
          <g id="Group 1171279179">
            <circle
              id="Ellipse 3340_3"
              cx="62.5"
              cy="62.5"
              r="62.5"
              transform="matrix(1 1.74846e-07 1.74846e-07 -1 0.5 125)"
              fill="#1F807B"
              style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
            ></circle>
            <path
              id="Ellipse 3341_3"
              d="M63 7.62939e-06C97.5178 1.36647e-05 125.5 27.9822 125.5 62.5C125.5 97.0178 97.5178 125 63 125L63 7.62939e-06Z"
              fill="#9DEBE7"
              style={{ fill: "color(display-p3 0.6157 0.9216 0.9059)" }}
            ></path>
          </g>
        </motion.g>
      </motion.g>

      {/* Bottom row */}
      <motion.g
        id="bottom"
        style={{ transformOrigin: "771.25px 187.5px 0px" }}
        variants={rowRevealVariants}
        custom={1}
      >
        <motion.g
          id="bottom"
          style={{
            transformOrigin: "771.25px 187.5px 0px",
          }}
          variants={rowAnimateVariants}
          custom={-1}
        >
          <rect
            id="Rectangle 22446"
            width="354"
            height="125"
            transform="matrix(-1 0 0 1 1125 125)"
            fill="#63BBB6"
            style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
          ></rect>
          <rect
            id="Rectangle 22445_2"
            width="770"
            height="125"
            transform="matrix(-1 0 0 1 771 125)"
            fill="#1F807B"
            style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
          ></rect>
          <rect
            id="Rectangle 22447_2"
            width="354"
            height="125"
            transform="matrix(-1 0 0 1 1479 125)"
            fill="#1F807B"
            style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
          ></rect>
          <g id="Group 1171279176">
            <circle
              id="Ellipse 3340_4"
              cx="771"
              cy="187.5"
              r="62.5"
              transform="rotate(180 771 187.5)"
              fill="#1F807B"
              style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
            ></circle>
            <path
              id="Ellipse 3341_4"
              d="M771 125C736.482 125 708.5 152.982 708.5 187.5C708.5 222.018 736.482 250 771 250L771 125Z"
              fill="#9DEBE7"
              style={{ fill: "color(display-p3 0.6157 0.9216 0.9059)" }}
            ></path>
          </g>
          <g id="Group 1171279177_2">
            <circle
              id="Ellipse 3340_5"
              cx="1125"
              cy="187.5"
              r="62.5"
              transform="rotate(180 1125 187.5)"
              fill="#9DEBE7"
              style={{ fill: "color(display-p3 0.6157 0.9216 0.9059)" }}
            ></circle>
            <path
              id="Ellipse 3341_5"
              d="M1125 125C1090.48 125 1062.5 152.982 1062.5 187.5C1062.5 222.018 1090.48 250 1125 250L1125 125Z"
              fill="#1F807B"
              style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
            ></path>
          </g>
          <g id="Group 1171279178_2">
            <circle
              id="Ellipse 3340_6"
              cx="1479"
              cy="187.5"
              r="62.5"
              transform="rotate(180 1479 187.5)"
              fill="#1F807B"
              style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
            ></circle>
            <path
              id="Ellipse 3341_6"
              d="M1479 125C1444.48 125 1416.5 152.982 1416.5 187.5C1416.5 222.018 1444.48 250 1479 250L1479 125Z"
              fill="#9DEBE7"
              style={{ fill: "color(display-p3 0.6157 0.9216 0.9059)" }}
            ></path>
          </g>
        </motion.g>
      </motion.g>
    </svg>
  );
}

export default SvgVolume;
