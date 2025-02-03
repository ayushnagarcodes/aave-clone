import { easeSwift } from "@/_lib/utils";
import { delay } from "motion";
import { motion } from "motion/react";

interface SvgLogoBigProps {
  isInView: boolean;
}

const svgRevealVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      bounce: 200,
      damping: 0,
      ease: "backOut",
      delay: 0.15,
    },
  },
  animate: {},
};

const eyeAnimateVariants = {
  hidden: { x: 0, scaleY: 0 },
  scale: {
    scaleY: [1, 0, 1, 1, 0, 1, 1, 0, 1],
    transition: {
      duration: 1.6,
      delay: 0.5,
      ease: easeSwift,
      repeat: Infinity,
      repeatDelay: 4.15,
      times: [0, 0.0625, 0.125, 0.3125, 0.375, 0.4375, 0.75, 0.8125, 0.875, 1],
    },
  },
  translate: {
    x: [0, 15, 15, -15, -15, 0],
    transition: {
      duration: 1.75,
      delay: 0.5,
      ease: easeSwift,
      repeat: Infinity,
      repeatDelay: 4,
    },
  },
};

function SvgLogoBig({ isInView }: SvgLogoBigProps) {
  return (
    <motion.svg
      variants={svgRevealVariants}
      initial="hidden"
      animate={isInView ? ["visible", "scale", "translate"] : "hidden"}
      width="324"
      height="324"
      viewBox="0 0 324 324"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        variants={eyeAnimateVariants}
        style={{ transformOrigin: "161.416px 180.84px 0px" }}
      >
        <path
          d="M136.871 201.968C148.54 200.074 156.464 189.079 154.57 177.41C152.675 165.741 141.68 157.817 130.011 159.711C118.342 161.605 110.418 172.6 112.312 184.269C114.207 195.938 125.202 203.862 136.871 201.968Z"
          fill="white"
        ></path>
        <path
          d="M192.82 201.968C204.489 200.074 212.413 189.079 210.519 177.41C208.625 165.741 197.63 157.817 185.961 159.711C174.292 161.605 166.368 172.6 168.262 184.269C170.156 195.938 181.151 203.862 192.82 201.968Z"
          fill="white"
        ></path>
      </motion.g>

      <path
        d="M161.378 92.4766C103.258 92.4766 56.1371 140.495 56.1523 199.71H83.0342C83.0342 155.333 117.832 119.353 161.378 119.353C204.923 119.353 239.721 155.333 239.721 199.71H266.603C266.613 140.495 219.492 92.4766 161.378 92.4766Z"
        fill="white"
      ></path>
    </motion.svg>
  );
}

export default SvgLogoBig;
