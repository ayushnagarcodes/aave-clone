import { backInSmooth, easeSwift } from "@/_lib/utils";
import { motion } from "motion/react";

interface SvgShortfallProps {
  isInView: boolean;
}

const centerCircleVariants = {
  hidden: { y: 0, rotate: -360 },
  visible: {
    y: [0, -72, -72, 0],
    rotate: [-360, -360, -360, 0],
    originY: 1.4,
    transition: {
      duration: 1.5,
      ease: backInSmooth,
      times: [0, 0.4, 0.6, 1],
    },
  },
};

const circleRevealVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: (delay: number) => ({
    scale: 1,
    rotate: 0,
    transition: { duration: 1, ease: easeSwift, delay: 1.2 + delay * 0.025 },
  }),
};

const animateVariants = {
  hidden: { rotate: 0 },

  // direction: 1 for clockwise (for the ring) | -1 for counter-clockwise (for the inner circles)
  animate: (direction: 1 | -1) => ({
    rotate: 360 * direction,
    transition: {
      duration: 60,
      ease: "linear",
      repeat: Infinity,
    },
  }),
};

function SvgShortfall({ isInView }: SvgShortfallProps) {
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
      {/* Circles ring */}
      <motion.g
        variants={animateVariants}
        custom={1}
        style={{
          transformOrigin: "248px 128px 0px",
        }}
      >
        <g style={{ transformOrigin: "248px 128px 0px" }}>
          {/* Circle 1 */}
          <motion.g
            variants={circleRevealVariants}
            custom={0}
            style={{ transformOrigin: "248px 60px 0px" }}
          >
            <motion.g
              variants={animateVariants}
              custom={-1}
              style={{
                transformOrigin: "248px 60px 0px",
              }}
            >
              <path
                d="M248 81C259.598 81 269 71.598 269 60C269 48.402 259.598 39 248 39V81Z"
                fill="#63BBB6"
                style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
              ></path>
              <path
                d="M248 39C236.402 39 227 48.402 227 60C227 71.598 236.402 81 248 81L248 39Z"
                fill="#1F807B"
                style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
              ></path>
            </motion.g>
          </motion.g>

          {/* Circle 2 */}
          <motion.g
            variants={circleRevealVariants}
            custom={1}
            style={{
              transformOrigin: "296.083px 79.9167px 0px",
            }}
          >
            <motion.g
              variants={animateVariants}
              custom={-1}
              style={{
                transformOrigin: "296.083px 79.9167px 0px",
              }}
            >
              <path
                d="M281.234 94.7661C289.435 102.967 302.731 102.967 310.932 94.7661C319.134 86.5651 319.134 73.2686 310.932 65.0676L281.234 94.7661Z"
                fill="#63BBB6"
                style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
              ></path>
              <path
                d="M310.932 65.0674C302.731 56.8664 289.435 56.8664 281.234 65.0674C273.033 73.2684 273.033 86.5649 281.234 94.7659L310.932 65.0674Z"
                fill="#1F807B"
                style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
              ></path>
            </motion.g>
          </motion.g>

          {/* Circle 3 */}
          <motion.g
            variants={circleRevealVariants}
            custom={2}
            style={{ transformOrigin: "316px 128px 0px" }}
          >
            <motion.g
              variants={animateVariants}
              custom={-1}
              style={{
                transformOrigin: "316px 128px 0px",
              }}
            >
              <path
                d="M295 128C295 139.598 304.402 149 316 149C327.598 149 337 139.598 337 128L295 128Z"
                fill="#63BBB6"
                style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
              ></path>
              <path
                d="M337 128C337 116.402 327.598 107 316 107C304.402 107 295 116.402 295 128L337 128Z"
                fill="#1F807B"
                style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
              ></path>
            </motion.g>
          </motion.g>

          {/* Circle 4 */}
          <motion.g
            variants={circleRevealVariants}
            custom={3}
            style={{
              transformOrigin: "296.083px 176.083px 0px",
            }}
          >
            <motion.g
              variants={animateVariants}
              custom={-1}
              style={{
                transformOrigin: "296.083px 176.083px 0px",
              }}
            >
              <path
                d="M281.234 161.234C273.033 169.435 273.033 182.731 281.234 190.932C289.435 199.133 302.731 199.133 310.932 190.932L281.234 161.234Z"
                fill="#63BBB6"
                style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
              ></path>
              <path
                d="M310.932 190.932C319.134 182.731 319.134 169.435 310.932 161.234C302.731 153.033 289.435 153.033 281.234 161.234L310.932 190.932Z"
                fill="#1F807B"
                style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
              ></path>
            </motion.g>
          </motion.g>

          {/* Circle 5 */}
          <motion.g
            variants={circleRevealVariants}
            custom={4}
            style={{ transformOrigin: "248px 196px 0px" }}
          >
            <motion.g
              variants={animateVariants}
              custom={-1}
              style={{
                transformOrigin: "248px 196px 0px",
              }}
            >
              <path
                d="M248 217C259.598 217 269 207.598 269 196C269 184.402 259.598 175 248 175V217Z"
                fill="#63BBB6"
                style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
              ></path>
              <path
                d="M248 175C236.402 175 227 184.402 227 196C227 207.598 236.402 217 248 217L248 175Z"
                fill="#1F807B"
                style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
              ></path>
            </motion.g>
          </motion.g>

          {/* Circle 6 */}
          <motion.g
            variants={circleRevealVariants}
            custom={5}
            style={{
              transformOrigin: "199.917px 176.084px 0px",
            }}
          >
            <motion.g
              variants={animateVariants}
              custom={-1}
              style={{
                transformOrigin: "199.917px 176.084px 0px",
              }}
            >
              <path
                d="M185.068 190.933C193.269 199.134 206.565 199.134 214.766 190.933C222.967 182.732 222.967 169.435 214.766 161.234L185.068 190.933Z"
                fill="#63BBB6"
                style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
              ></path>
              <path
                d="M214.766 161.234C206.565 153.033 193.269 153.033 185.068 161.234C176.866 169.435 176.866 182.731 185.068 190.932L214.766 161.234Z"
                fill="#1F807B"
                style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
              ></path>
            </motion.g>
          </motion.g>

          {/* Circle 7 */}
          <motion.g
            variants={circleRevealVariants}
            custom={6}
            style={{ transformOrigin: "180px 128px 0px" }}
          >
            <motion.g
              variants={animateVariants}
              custom={-1}
              style={{
                transformOrigin: "180px 128px 0px",
              }}
            >
              <path
                d="M159 128C159 139.598 168.402 149 180 149C191.598 149 201 139.598 201 128L159 128Z"
                fill="#63BBB6"
                style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
              ></path>
              <path
                d="M201 128C201 116.402 191.598 107 180 107C168.402 107 159 116.402 159 128L201 128Z"
                fill="#1F807B"
                style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
              ></path>
            </motion.g>
          </motion.g>

          {/* Circle 8 */}
          <motion.g
            variants={circleRevealVariants}
            custom={7}
            style={{
              transformOrigin: "199.917px 79.9167px 0px",
            }}
          >
            <motion.g
              variants={animateVariants}
              custom={-1}
              style={{
                transformOrigin: "199.917px 79.9167px 0px",
              }}
            >
              <path
                d="M185.068 65.0674C176.866 73.2684 176.866 86.5649 185.068 94.7659C193.269 102.967 206.565 102.967 214.766 94.7659L185.068 65.0674Z"
                fill="#63BBB6"
                style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
              ></path>
              <path
                d="M214.766 94.7659C222.967 86.5649 222.967 73.2684 214.766 65.0674C206.565 56.8664 193.269 56.8664 185.068 65.0674L214.766 94.7659Z"
                fill="#1F807B"
                style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
              ></path>
            </motion.g>
          </motion.g>
        </g>
      </motion.g>

      {/* Center circle */}
      <motion.g
        variants={centerCircleVariants}
        style={{ transformOrigin: "248px 184px 0px" }}
      >
        <path
          d="M248 156C263.464 156 276 143.464 276 128C276 112.536 263.464 100 248 100V156Z"
          fill="#1F807B"
          style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
        ></path>
        <path
          d="M248 100C232.536 100 220 112.536 220 128C220 143.464 232.536 156 248 156L248 100Z"
          fill="#63BBB6"
          style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
        ></path>
      </motion.g>
    </motion.svg>
  );
}

export default SvgShortfall;
