import { easeSwift } from "@/_lib/utils";
import { motion } from "motion/react";

interface Svg5YearsProps {
  isInView: boolean;
}

const circleRevealVariants = {
  hidden: { opacity: 0, y: -150 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: easeSwift, delay: delay * 0.15 },
  }),
};

const circleAnimateVariants = {
  hidden: { x: 25 },
  animate: (delay: number) => ({
    x: 0,
    transition: {
      duration: 3,
      ease: "easeInOut",
      delay: 0.2 * delay,
      repeat: Infinity,
      repeatType: "mirror" as const,
    },
  }),
};

function Svg5Years({ isInView }: Svg5YearsProps) {
  return (
    <motion.svg
      variants={{ hidden: {}, visible: {}, animate: {} }}
      initial="hidden"
      animate={isInView ? ["visible", "animate"] : ""}
      className="w-full h-full"
      viewBox="0 0 497 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 1st Circle - Left */}
      <motion.g
        variants={circleRevealVariants}
        custom={0}
        style={{ transformOrigin: "130.819px 128.5px 0px" }}
      >
        <motion.g
          variants={circleAnimateVariants}
          custom={0}
          style={{
            transformOrigin: "130.819px 128.5px 0px",
          }}
        >
          <path
            d="M130.819 143.078C138.87 143.078 145.397 136.551 145.397 128.5C145.397 120.449 138.87 113.922 130.819 113.922V143.078Z"
            fill="#63BBB6"
            style={{
              fill: "color(display-p3 0.3882 0.7333 0.7137)",
              fillOpacity: 1,
            }}
          ></path>
          <path
            d="M130.819 113.922C122.768 113.922 116.241 120.449 116.241 128.5C116.241 136.551 122.768 143.078 130.819 143.078L130.819 113.922Z"
            fill="#1F807B"
            style={{
              fill: "color(display-p3 0.1210 0.5025 0.4806)",
              fillOpacity: 1,
            }}
          ></path>
        </motion.g>
      </motion.g>

      {/* 2nd Circle */}
      <motion.g
        variants={circleRevealVariants}
        custom={1}
        style={{ transformOrigin: "159.107px 128.5px 0px" }}
      >
        <motion.g
          variants={circleAnimateVariants}
          custom={1}
          style={{
            transformOrigin: "159.107px 128.5px 0px",
          }}
        >
          <path
            d="M159.107 148.425C170.112 148.425 179.032 139.504 179.032 128.5C179.032 117.496 170.112 108.575 159.107 108.575V148.425Z"
            fill="#63BBB6"
            style={{
              fill: "color(display-p3 0.3882 0.7333 0.7137)",
              fillOpacity: 1,
            }}
          ></path>
          <path
            d="M159.107 108.575C148.103 108.575 139.182 117.496 139.182 128.5C139.182 139.504 148.103 148.425 159.107 148.425L159.107 108.575Z"
            fill="#1F807B"
            style={{
              fill: "color(display-p3 0.1210 0.5025 0.4806)",
              fillOpacity: 1,
            }}
          ></path>
        </motion.g>
      </motion.g>

      {/* 3rd Circle */}
      <motion.g
        variants={circleRevealVariants}
        custom={2}
        style={{ transformOrigin: "193.832px 128.5px 0px" }}
      >
        <motion.g
          variants={circleAnimateVariants}
          custom={2}
          style={{
            transformOrigin: "193.832px 128.5px 0px",
          }}
        >
          <path
            d="M193.833 152.557C207.119 152.557 217.89 141.786 217.89 128.5C217.89 115.214 207.119 104.443 193.833 104.443V152.557Z"
            fill="#63BBB6"
            style={{
              fill: "color(display-p3 0.3882 0.7333 0.7137)",
              fillOpacity: 1,
            }}
          ></path>
          <path
            d="M193.833 104.443C180.546 104.443 169.775 115.214 169.775 128.5C169.775 141.786 180.546 152.557 193.833 152.557L193.833 104.443Z"
            fill="#1F807B"
            style={{
              fill: "color(display-p3 0.1210 0.5025 0.4806)",
              fillOpacity: 1,
            }}
          ></path>
        </motion.g>
      </motion.g>

      {/* 4th Circle */}
      <motion.g
        variants={circleRevealVariants}
        custom={3}
        style={{ transformOrigin: "243.794px 128.5px 0px" }}
      >
        <motion.g
          variants={circleAnimateVariants}
          custom={3}
          style={{
            transformOrigin: "243.794px 128.5px 0px",
          }}
        >
          <path
            d="M243.793 166.745C264.916 166.745 282.039 149.622 282.039 128.5C282.039 107.378 264.916 90.2549 243.793 90.2549V166.745Z"
            fill="#63BBB6"
            style={{
              fill: "color(display-p3 0.3882 0.7333 0.7137)",
              fillOpacity: 1,
            }}
          ></path>
          <path
            d="M243.793 90.2549C222.671 90.2549 205.548 107.378 205.548 128.5C205.548 149.622 222.671 166.745 243.793 166.745L243.793 90.2549Z"
            fill="#1F807B"
            style={{
              fill: "color(display-p3 0.1210 0.5025 0.4806)",
              fillOpacity: 1,
            }}
          ></path>
        </motion.g>
      </motion.g>

      {/* 5th Circle - Right */}
      <motion.g
        variants={circleRevealVariants}
        custom={4}
        style={{ transformOrigin: "317.249px 128.5px 0px" }}
      >
        <motion.g
          variants={circleAnimateVariants}
          custom={4}
          style={{
            transform: "translateX(2.31271px)",
            transformOrigin: "317.249px 128.5px 0px",
          }}
        >
          <path
            d="M317.249 188.01C350.116 188.01 376.759 161.366 376.759 128.5C376.759 95.6335 350.116 68.99 317.249 68.99V188.01Z"
            fill="#63BBB6"
            style={{
              fill: "color(display-p3 0.3882 0.7333 0.7137)",
              fillOpacity: 1,
            }}
          ></path>
          <path
            d="M317.249 68.99C284.383 68.99 257.739 95.6335 257.739 128.5C257.739 161.366 284.383 188.01 317.249 188.01L317.249 68.99Z"
            fill="#1F807B"
            style={{
              fill: "color(display-p3 0.1210 0.5025 0.4806)",
              fillOpacity: 1,
            }}
          ></path>
        </motion.g>
      </motion.g>
    </motion.svg>
  );
}

export default Svg5Years;
