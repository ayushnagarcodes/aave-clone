import { easeSwift } from "@/_lib/utils";
import { motion } from "motion/react";

interface SvgSwapProps {
  isInView: boolean;
}

const transition = {
  duration: 0.75,
  ease: easeSwift,
};

const revealVariants = {
  hidden: (y: number) => ({ y }),
  visible: { y: 0 },
};

const animateVariants = {
  hidden: { y: 0 },
  animate: (delay: number) => ({
    y: [0, -12, 0],
    transition: {
      duration: 3.5,
      ease: "easeInOut",
      repeat: Infinity,
      delay: delay * 0.5,
    },
  }),
};

function SvgSwap({ isInView }: SvgSwapProps) {
  return (
    <motion.svg
      variants={{
        hidden: {},
        visible: {},
        animate: {},
      }}
      initial="hidden"
      animate={isInView ? ["animate", "visible"] : ""}
      width="473"
      height="150"
      viewBox="0 0 473 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -z-10 top-0 right-0"
    >
      <g transform="translate(0 -150)">
        {/* Semi-circle */}
        <motion.g
          style={{
            mixBlendMode: "multiply",
            transformOrigin: "323px 150px 0px",
          }}
          variants={revealVariants}
          custom={-300}
          transition={{ ...transition, delay: 0.1 }}
        >
          <motion.g
            style={{
              transformOrigin: "323px 150px 0px",
            }}
            variants={animateVariants}
            custom={1}
          >
            <g id="Ellipse 3341">
              <path
                d="M323 9.15527e-05C240.157 0.000106037 173 67.1574 173 150C173 232.843 240.157 300 323 300L323 9.15527e-05Z"
                fill="#FFD7B3"
                style={{ fill: "color(display-p3 1.0000 0.8429 0.7023)" }}
              ></path>
            </g>
            <g id="Ellipse 7914">
              <path
                d="M323 -3.05176e-05C405.843 -1.60329e-05 473 67.1573 473 150C473 232.843 405.843 300 323 300L323 -3.05176e-05Z"
                fill="#FF8947"
                style={{ fill: "color(display-p3 1.0000 0.5373 0.2784)" }}
              ></path>
            </g>
          </motion.g>
        </motion.g>

        {/* Quadrant */}
        <motion.g
          style={{
            mixBlendMode: "multiply",
            transformOrigin: "473px 150px 0px",
          }}
          variants={revealVariants}
          custom={-150}
          transition={transition}
        >
          <motion.g
            style={{
              transformOrigin: "473px 150px 0px",
            }}
            variants={animateVariants}
            custom={0}
          >
            <g id="Ellipse 3341_2">
              <path
                d="M473 9.15527e-05C555.843 0.000106037 623 67.1574 623 150C623 232.843 555.843 300 473 300L473 9.15527e-05Z"
                fill="#FFD7B3"
                style={{ fill: "color(display-p3 1.0000 0.8429 0.7023)" }}
              ></path>
            </g>
            <g id="Ellipse 7914_2">
              <path
                d="M473 -3.05176e-05C390.157 -1.60329e-05 323 67.1573 323 150C323 232.843 390.157 300 473 300L473 -3.05176e-05Z"
                fill="#FF8947"
                style={{ fill: "color(display-p3 1.0000 0.5373 0.2784)" }}
              ></path>
            </g>
          </motion.g>
        </motion.g>
      </g>
    </motion.svg>
  );
}

export default SvgSwap;
