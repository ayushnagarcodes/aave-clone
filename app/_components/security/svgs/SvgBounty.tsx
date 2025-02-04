import { easeInOutSharp, easeSwift } from "@/_lib/utils";
import { motion } from "motion/react";

interface SvgBountyProps {
  isInView: boolean;
}

const rowRevealVariants = {
  hidden: { y: -300 },
  visible: (delay: number) => ({
    y: 0,
    transition: { duration: 0.8, ease: easeSwift, delay: delay * 0.075 },
  }),
};

const circleAnimateVariants = {
  hidden: { rotate: 0 },

  /*
    Delay will be same diagonally from top-left to bottom-left circle and so on.
    So, we can calculate delay based on the column number.
  */
  animate: (column: number) => ({
    rotate: 360,
    transition: {
      duration: 1.25,
      ease: easeInOutSharp,
      delay: 0.1 * column,
      repeat: Infinity,
      repeatDelay: 0.85,
    },
  }),
};

function SvgBounty({ isInView }: SvgBountyProps) {
  return (
    <motion.svg
      variants={{ hidden: {}, visible: {}, animate: {} }}
      initial="hidden"
      animate={isInView ? ["visible", "animate"] : ""}
      className="w-full h-full"
      viewBox="0 0 493 257"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 1st Row - Top */}
      <motion.g
        variants={rowRevealVariants}
        custom={4}
        style={{ transformOrigin: "248px 96px 0px" }}
      >
        <motion.g
          variants={circleAnimateVariants}
          custom={0}
          style={{
            transformOrigin: "248px 96px 0px",
          }}
        >
          <path
            d="M248 124C263.464 124 276 111.464 276 96C276 80.536 263.464 68 248 68V124Z"
            fill="#63BBB6"
            style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
          ></path>
          <path
            d="M248 68C232.536 68 220 80.536 220 96C220 111.464 232.536 124 248 124L248 68Z"
            fill="#1F807B"
            style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
          ></path>
        </motion.g>
      </motion.g>

      {/* 2nd Row */}
      <motion.g
        variants={rowRevealVariants}
        custom={3}
        style={{ transformOrigin: "246.5px 142px 0px" }}
      >
        <g>
          <motion.g
            variants={circleAnimateVariants}
            custom={0}
            style={{
              transformOrigin: "224px 142px 0px",
            }}
          >
            <path
              d="M224 163C235.598 163 245 153.598 245 142C245 130.402 235.598 121 224 121V163Z"
              fill="#63BBB6"
              style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
            ></path>
            <path
              d="M224 121C212.402 121 203 130.402 203 142C203 153.598 212.402 163 224 163L224 121Z"
              fill="#1F807B"
              style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
            ></path>
          </motion.g>

          <motion.g
            variants={circleAnimateVariants}
            custom={1}
            style={{
              transformOrigin: "269px 142px 0px",
            }}
          >
            <path
              d="M269 163C280.598 163 290 153.598 290 142C290 130.402 280.598 121 269 121V163Z"
              fill="#63BBB6"
              style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
            ></path>
            <path
              d="M269 121C257.402 121 248 130.402 248 142C248 153.598 257.402 163 269 163L269 121Z"
              fill="#1F807B"
              style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
            ></path>
          </motion.g>
        </g>
      </motion.g>

      {/* 3rd Row */}
      <motion.g
        variants={rowRevealVariants}
        custom={2}
        style={{ transformOrigin: "246px 180px 0px" }}
      >
        <g>
          <motion.g
            variants={circleAnimateVariants}
            custom={0}
            style={{
              transformOrigin: "201px 180px 0px",
            }}
          >
            <path
              d="M201 201C212.598 201 222 191.598 222 180C222 168.402 212.598 159 201 159V201Z"
              fill="#63BBB6"
              style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
            ></path>
            <path
              d="M201 159C189.402 159 180 168.402 180 180C180 191.598 189.402 201 201 201L201 159Z"
              fill="#1F807B"
              style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
            ></path>
          </motion.g>

          <motion.g
            variants={circleAnimateVariants}
            custom={1}
            style={{
              transformOrigin: "246px 180px 0px",
            }}
          >
            <path
              d="M246 201C257.598 201 267 191.598 267 180C267 168.402 257.598 159 246 159V201Z"
              fill="#63BBB6"
              style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
            ></path>
            <path
              d="M246 159C234.402 159 225 168.402 225 180C225 191.598 234.402 201 246 201L246 159Z"
              fill="#1F807B"
              style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
            ></path>
          </motion.g>

          <motion.g
            variants={circleAnimateVariants}
            custom={2}
            style={{
              transformOrigin: "291px 180px 0px",
            }}
          >
            <path
              d="M291 201C302.598 201 312 191.598 312 180C312 168.402 302.598 159 291 159V201Z"
              fill="#63BBB6"
              style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
            ></path>
            <path
              d="M291 159C279.402 159 270 168.402 270 180C270 191.598 279.402 201 291 201L291 159Z"
              fill="#1F807B"
              style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
            ></path>
          </motion.g>
        </g>
      </motion.g>

      {/* 4th Row */}
      <motion.g
        variants={rowRevealVariants}
        custom={1}
        style={{ transformOrigin: "246.5px 217px 0px" }}
      >
        <g>
          <motion.g
            variants={circleAnimateVariants}
            custom={0}
            style={{
              transformOrigin: "179px 217px 0px",
            }}
          >
            <path
              d="M179 238C190.598 238 200 228.598 200 217C200 205.402 190.598 196 179 196V238Z"
              fill="#63BBB6"
              style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
            ></path>
            <path
              d="M179 196C167.402 196 158 205.402 158 217C158 228.598 167.402 238 179 238L179 196Z"
              fill="#1F807B"
              style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
            ></path>
          </motion.g>

          <motion.g
            variants={circleAnimateVariants}
            custom={1}
            style={{
              transformOrigin: "224px 217px 0px",
            }}
          >
            <path
              d="M224 238C235.598 238 245 228.598 245 217C245 205.402 235.598 196 224 196V238Z"
              fill="#63BBB6"
              style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
            ></path>
            <path
              d="M224 196C212.402 196 203 205.402 203 217C203 228.598 212.402 238 224 238L224 196Z"
              fill="#1F807B"
              style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
            ></path>
          </motion.g>

          <motion.g
            variants={circleAnimateVariants}
            custom={2}
            style={{
              transformOrigin: "269px 217px 0px",
            }}
          >
            <path
              d="M269 238C280.598 238 290 228.598 290 217C290 205.402 280.598 196 269 196V238Z"
              fill="#63BBB6"
              style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
            ></path>
            <path
              d="M269 196C257.402 196 248 205.402 248 217C248 228.598 257.402 238 269 238L269 196Z"
              fill="#1F807B"
              style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
            ></path>
          </motion.g>

          <motion.g
            variants={circleAnimateVariants}
            custom={3}
            style={{
              transformOrigin: "314px 217px 0px",
            }}
          >
            <path
              d="M314 238C325.598 238 335 228.598 335 217C335 205.402 325.598 196 314 196V238Z"
              fill="#63BBB6"
              style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
            ></path>
            <path
              d="M314 196C302.402 196 293 205.402 293 217C293 228.598 302.402 238 314 238L314 196Z"
              fill="#1F807B"
              style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
            ></path>
          </motion.g>
        </g>
      </motion.g>

      {/* 5th Row - Bottom */}
      <motion.g
        variants={rowRevealVariants}
        custom={0}
        style={{ transformOrigin: "246px 255px 0px" }}
      >
        <g>
          <motion.g
            variants={circleAnimateVariants}
            custom={0}
            style={{
              transformOrigin: "156px 255px 0px",
            }}
          >
            <path
              d="M156 276C167.598 276 177 266.598 177 255C177 243.402 167.598 234 156 234V276Z"
              fill="#63BBB6"
              style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
            ></path>
            <path
              d="M156 234C144.402 234 135 243.402 135 255C135 266.598 144.402 276 156 276L156 234Z"
              fill="#1F807B"
              style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
            ></path>
          </motion.g>

          <motion.g
            variants={circleAnimateVariants}
            custom={1}
            style={{
              transformOrigin: "201px 255px 0px",
            }}
          >
            <path
              d="M201 276C212.598 276 222 266.598 222 255C222 243.402 212.598 234 201 234V276Z"
              fill="#63BBB6"
              style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
            ></path>
            <path
              d="M201 234C189.402 234 180 243.402 180 255C180 266.598 189.402 276 201 276L201 234Z"
              fill="#1F807B"
              style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
            ></path>
          </motion.g>

          <motion.g
            variants={circleAnimateVariants}
            custom={2}
            style={{
              transformOrigin: "246px 255px 0px",
            }}
          >
            <path
              d="M246 276C257.598 276 267 266.598 267 255C267 243.402 257.598 234 246 234V276Z"
              fill="#63BBB6"
              style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
            ></path>
            <path
              d="M246 234C234.402 234 225 243.402 225 255C225 266.598 234.402 276 246 276L246 234Z"
              fill="#1F807B"
              style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
            ></path>
          </motion.g>

          <motion.g
            variants={circleAnimateVariants}
            custom={3}
            style={{
              transformOrigin: "291px 255px 0px",
            }}
          >
            <path
              d="M291 276C302.598 276 312 266.598 312 255C312 243.402 302.598 234 291 234V276Z"
              fill="#63BBB6"
              style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
            ></path>
            <path
              d="M291 234C279.402 234 270 243.402 270 255C270 266.598 279.402 276 291 276L291 234Z"
              fill="#1F807B"
              style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
            ></path>
          </motion.g>

          <motion.g
            variants={circleAnimateVariants}
            custom={4}
            style={{
              transformOrigin: "336px 255px 0px",
            }}
          >
            <path
              d="M336 276C347.598 276 357 266.598 357 255C357 243.402 347.598 234 336 234V276Z"
              fill="#63BBB6"
              style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
            ></path>
            <path
              d="M336 234C324.402 234 315 243.402 315 255C315 266.598 324.402 276 336 276L336 234Z"
              fill="#1F807B"
              style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
            ></path>
          </motion.g>
        </g>
      </motion.g>
    </motion.svg>
  );
}

export default SvgBounty;
