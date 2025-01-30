import { easeSwift } from "@/_lib/utils";
import { motion } from "motion/react";

const circleRevealVariants = {
  hidden: { y: 220 },
  visible: (delay: number) => ({
    y: 0,
    transition: { duration: 0.75, ease: easeSwift, delay: delay * 0.1 },
  }),
};

const circleAnimateVariants = {
  hidden: { y: 0 },
  animate: (delay: number) => ({
    y: [0, -10, 0],
    transition: {
      duration: 3.5,
      ease: "easeInOut",
      repeat: Infinity,
      delay: delay * 0.1,
    },
  }),
};

function SvgNetDeposits() {
  return (
    <motion.svg
      variants={{
        hidden: {},
        visible: {},
        animate: {},
      }}
      initial="hidden"
      animate="animate"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
      width="457"
      height="250"
      viewBox="0 0 457 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block w-full overflow-clip relative z-1 rounded-[16px] bg-[--bg-4]"
    >
      <g>
        <g>
          <path
            d="M0 16C0 7.16345 7.16344 0 16 0H441C449.837 0 457 7.16345 457 16V234C457 242.837 449.837 250 441 250H16C7.16344 250 0 242.837 0 234V16Z"
            fill="#9896FF"
            style={{ fill: "color(display-p3 0.5951 0.5870 1.0000)" }}
          ></path>
          <rect
            id="left"
            width="229"
            height="250"
            fill="#BCBBFF"
            style={{ fill: "color(display-p3 0.7391 0.7337 1.0000)" }}
          ></rect>

          {/* Top row */}
          <motion.g
            style={{
              transformOrigin: "229px 186px 0px",
            }}
            variants={circleAnimateVariants}
            custom={16}
          >
            <motion.g
              clipPath="url(#clip1_2915_1498)"
              id="1"
              style={{ transformOrigin: "229px 186px 0px" }}
              variants={circleRevealVariants}
              custom={2}
            >
              <g>
                <rect
                  x="165"
                  y="58"
                  width="128"
                  height="256"
                  rx="64"
                  fill="white"
                  style={{ fill: "white" }}
                ></rect>
                <rect
                  id="Rectangle 22459"
                  x="165"
                  y="58"
                  width="128"
                  height="256"
                  fill="#E2E0FF"
                  style={{ fill: "color(display-p3 0.8863 0.8784 1.0000)" }}
                ></rect>
                <rect
                  id="Rectangle 22458"
                  x="165"
                  y="58"
                  width="64"
                  height="256"
                  fill="#9896FF"
                  style={{ fill: "color(display-p3 0.5951 0.5870 1.0000)" }}
                ></rect>
              </g>
            </motion.g>
          </motion.g>

          {/* Middle row - Left circle */}
          <motion.g
            style={{
              transformOrigin: "165px 250px 0px",
            }}
            variants={circleAnimateVariants}
            custom={0}
          >
            <motion.g
              id="2"
              style={{ transformOrigin: "165px 250px 0px" }}
              variants={circleRevealVariants}
              custom={1}
            >
              <g clipPath="url(#clip2_2915_1498)">
                <rect
                  x="101"
                  y="122"
                  width="128"
                  height="256"
                  rx="64"
                  fill="white"
                  style={{ fill: "white" }}
                ></rect>
                <rect
                  id="Rectangle 22459_2"
                  x="101"
                  y="122"
                  width="128"
                  height="256"
                  fill="#E2E0FF"
                  style={{ fill: "color(display-p3 0.8863 0.8784 1.0000)" }}
                ></rect>
                <rect
                  id="Rectangle 22458_2"
                  x="101"
                  y="122"
                  width="64"
                  height="256"
                  fill="#9896FF"
                  style={{ fill: "color(display-p3 0.5951 0.5870 1.0000)" }}
                ></rect>
              </g>
            </motion.g>
          </motion.g>

          {/* Bottom row - Left circle */}
          <motion.g
            style={{
              transformOrigin: "101px 314px 0px",
            }}
            variants={circleAnimateVariants}
            custom={1}
          >
            <motion.g
              id="4"
              style={{ transformOrigin: "101px 314px 0px" }}
              variants={circleRevealVariants}
              custom={0}
            >
              <g clipPath="url(#clip3_2915_1498)">
                <rect
                  x="37"
                  y="186"
                  width="128"
                  height="256"
                  rx="64"
                  fill="white"
                  style={{ fill: "white" }}
                ></rect>
                <rect
                  id="Rectangle 22459_3"
                  x="37"
                  y="186"
                  width="128"
                  height="256"
                  fill="#E2E0FF"
                  style={{ fill: "color(display-p3 0.8863 0.8784 1.0000)" }}
                ></rect>
                <rect
                  id="Rectangle 22458_3"
                  x="37"
                  y="186"
                  width="64"
                  height="256"
                  fill="#9896FF"
                  style={{ fill: "color(display-p3 0.5951 0.5870 1.0000)" }}
                ></rect>
              </g>
            </motion.g>
          </motion.g>

          {/* Middle row - Right circle */}
          <motion.g
            style={{
              transformOrigin: "293px 250px 0px",
            }}
            variants={circleAnimateVariants}
            custom={3}
          >
            <motion.g
              id="3"
              style={{ transformOrigin: "293px 250px 0px" }}
              variants={circleRevealVariants}
              custom={2}
            >
              <g clipPath="url(#clip4_2915_1498)">
                <rect
                  x="229"
                  y="122"
                  width="128"
                  height="256"
                  rx="64"
                  fill="white"
                  style={{ fill: "white" }}
                ></rect>
                <rect
                  id="Rectangle 22459_4"
                  x="229"
                  y="122"
                  width="128"
                  height="256"
                  fill="#E2E0FF"
                  style={{ fill: "color(display-p3 0.8863 0.8784 1.0000)" }}
                ></rect>
                <rect
                  id="Rectangle 22458_4"
                  x="229"
                  y="122"
                  width="64"
                  height="256"
                  fill="#9896FF"
                  style={{ fill: "color(display-p3 0.5951 0.5870 1.0000)" }}
                ></rect>
              </g>
            </motion.g>
          </motion.g>

          {/* Bottom row - Right circle */}
          <motion.g
            style={{
              transformOrigin: "357px 314px 0px",
            }}
            variants={circleAnimateVariants}
            custom={4}
          >
            <motion.g
              id="6"
              style={{ transformOrigin: "357px 314px 0px" }}
              variants={circleRevealVariants}
              custom={2}
            >
              <g clipPath="url(#clip5_2915_1498)">
                <rect
                  x="293"
                  y="186"
                  width="128"
                  height="256"
                  rx="64"
                  fill="white"
                  style={{ fill: "white" }}
                ></rect>
                <rect
                  id="Rectangle 22459_5"
                  x="293"
                  y="186"
                  width="128"
                  height="256"
                  fill="#E2E0FF"
                  style={{ fill: "color(display-p3 0.8863 0.8784 1.0000)" }}
                ></rect>
                <rect
                  id="Rectangle 22458_5"
                  x="293"
                  y="186"
                  width="64"
                  height="256"
                  fill="#9896FF"
                  style={{ fill: "color(display-p3 0.5951 0.5870 1.0000)" }}
                ></rect>
              </g>
            </motion.g>
          </motion.g>

          {/* Bottom row - Middle circle */}
          <motion.g
            style={{
              transformOrigin: "229px 314px 0px",
            }}
            variants={circleAnimateVariants}
            custom={6}
          >
            <motion.g
              id="5"
              style={{ transformOrigin: "229px 314px 0px" }}
              variants={circleRevealVariants}
              custom={1}
            >
              <g clipPath="url(#clip6_2915_1498)">
                <rect
                  x="165"
                  y="186"
                  width="128"
                  height="256"
                  rx="64"
                  fill="white"
                  style={{ fill: "white" }}
                ></rect>
                <rect
                  id="Rectangle 22459_6"
                  x="165"
                  y="186"
                  width="128"
                  height="256"
                  fill="#E2E0FF"
                  style={{ fill: "color(display-p3 0.8863 0.8784 1.0000)" }}
                ></rect>
                <rect
                  id="Rectangle 22458_6"
                  x="165"
                  y="186"
                  width="64"
                  height="256"
                  fill="#9896FF"
                  style={{ fill: "color(display-p3 0.5951 0.5870 1.0000)" }}
                ></rect>
              </g>
            </motion.g>
          </motion.g>
        </g>
      </g>

      <defs>
        <clipPath id="clip0_2915_1498">
          <path
            d="M0 16C0 7.16345 7.16344 0 16 0H441C449.837 0 457 7.16345 457 16V234C457 242.837 449.837 250 441 250H16C7.16344 250 0 242.837 0 234V16Z"
            fill="white"
            style={{ fill: "white" }}
          ></path>
        </clipPath>
        <clipPath id="clip1_2915_1498">
          <rect
            x="165"
            y="58"
            width="128"
            height="256"
            rx="64"
            fill="white"
            style={{ fill: "white" }}
          ></rect>
        </clipPath>
        <clipPath id="clip2_2915_1498">
          <rect
            x="101"
            y="122"
            width="128"
            height="256"
            rx="64"
            fill="white"
            style={{ fill: "white" }}
          ></rect>
        </clipPath>
        <clipPath id="clip3_2915_1498">
          <rect
            x="37"
            y="186"
            width="128"
            height="256"
            rx="64"
            fill="white"
            style={{ fill: "white" }}
          ></rect>
        </clipPath>
        <clipPath id="clip4_2915_1498">
          <rect
            x="229"
            y="122"
            width="128"
            height="256"
            rx="64"
            fill="white"
            style={{ fill: "white" }}
          ></rect>
        </clipPath>
        <clipPath id="clip5_2915_1498">
          <rect
            x="293"
            y="186"
            width="128"
            height="256"
            rx="64"
            fill="white"
            style={{ fill: "white" }}
          ></rect>
        </clipPath>
        <clipPath id="clip6_2915_1498">
          <rect
            x="165"
            y="186"
            width="128"
            height="256"
            rx="64"
            fill="white"
            style={{ fill: "white" }}
          ></rect>
        </clipPath>
      </defs>
    </motion.svg>
  );
}

export default SvgNetDeposits;
