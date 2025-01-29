import { easeSwift } from "@/_lib/utils";
import type { IntroTabType } from "@/_types/types";
import { motion } from "motion/react";

interface SvgIntroProps {
  activeIntroTab: IntroTabType;
}

const generateColumnVariants = (column: number) => ({
  hidden: { y: -400, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: easeSwift, delay: 0.2 * (column - 1) },
  },
});

const generateAnimateVariants = (column: number) => ({
  hidden: { y: 0 },
  animate: {
    y: [0, 30, -30, 20, -20, 20, -30, 30, 0],
    transition: {
      duration: 16,
      delay: 0.4 * (column - 1),
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
});

const generateUpperCircleVariants = (
  activeIntroTab: IntroTabType,
  column: number
) => {
  const delay = 0.2 * (column - 1);

  return {
    y: activeIntroTab === "Borrow" ? 0 : -184,
    transition: {
      duration: 1,
      ease: easeSwift,
      delay: activeIntroTab === "Borrow" ? 0.1 + delay : delay,
    },
  };
};

const generateLowerCircleVariants = (
  activeIntroTab: IntroTabType,
  column: number
) => {
  const delay = 0.2 * (column - 1);

  return {
    y: activeIntroTab === "Borrow" ? 400 : 0,
    transition: {
      duration: activeIntroTab === "Borrow" ? 2 : 1,
      ease: easeSwift,
      delay: activeIntroTab === "Borrow" ? delay : 0.1 + delay,
    },
  };
};

function SvgIntro({ activeIntroTab }: SvgIntroProps) {
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
      width="986"
      height="450"
      viewBox="0 0 986 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-12 rounded-2xl bg-[--bg-4]"
    >
      <g id="2">
        <rect width="986" height="450" fill="#F7F6F6"></rect>
        <rect width="986" height="225" fill="#FCFCFB"></rect>

        {/* Gray Masked */}
        <g id="gray-masked" clipPath="url(#clip1_3066_1499)">
          <g>
            {/* Column 1 */}
            <motion.g
              style={{ transform: "none", transformOrigin: "223px 237px 0px" }}
              variants={generateColumnVariants(1)}
            >
              <g transform="translate(0 0)">
                <motion.g
                  style={{
                    transformOrigin: "223px 237px 0px",
                  }}
                  variants={generateAnimateVariants(1)}
                >
                  <motion.g
                    style={{
                      transformOrigin: "223px 237px 0px",
                    }}
                    initial={{ y: -184 }}
                    animate={generateUpperCircleVariants(activeIntroTab, 1)}
                  >
                    <circle
                      mask="url(#:Rplotq6:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#1A88F8"
                      style={{ fill: "color(display-p3 0.102 0.5333 0.9725)" }}
                    ></circle>
                    <mask id=":Rplotq6:">
                      <rect
                        x="223"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                    <circle
                      mask="url(#:Rplotq6H1:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#48ABFF"
                      style={{ fill: "color(display-p3 0.2824 0.6706 1)" }}
                    ></circle>
                    <mask id=":Rplotq6H1:">
                      <rect
                        x="133"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                  </motion.g>
                  <motion.g
                    style={{
                      transformOrigin: "223px 237px 0px",
                    }}
                    initial={{ y: 0 }}
                    animate={generateLowerCircleVariants(activeIntroTab, 1)}
                  >
                    <circle
                      mask="url(#:Rplotq6:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#1A88F8"
                      style={{ fill: "color(display-p3 0.102 0.5333 0.9725)" }}
                    ></circle>
                    <mask id=":Rplotq6:">
                      <rect
                        x="223"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                    <circle
                      mask="url(#:Rplotq6H1:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#48ABFF"
                      style={{ fill: "color(display-p3 0.2824 0.6706 1)" }}
                    ></circle>
                    <mask id=":Rplotq6H1:">
                      <rect
                        x="133"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                  </motion.g>
                </motion.g>
              </g>
            </motion.g>

            {/* Column 2 */}
            <motion.g
              style={{ transform: "none", transformOrigin: "405px 201px 0px" }}
              variants={generateColumnVariants(2)}
            >
              <g transform="translate(182 -36)">
                <motion.g
                  style={{
                    transformOrigin: "223px 237px 0px",
                  }}
                  variants={generateAnimateVariants(2)}
                >
                  <motion.g
                    style={{
                      transformOrigin: "223px 237px 0px",
                    }}
                    initial={{ y: -184 }}
                    animate={generateUpperCircleVariants(activeIntroTab, 2)}
                  >
                    <circle
                      mask="url(#:R19lotq6:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#1A88F8"
                      style={{ fill: "color(display-p3 0.102 0.5333 0.9725)" }}
                    ></circle>
                    <mask id=":R19lotq6:">
                      <rect
                        x="223"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                    <circle
                      mask="url(#:R19lotq6H1:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#48ABFF"
                      style={{ fill: "color(display-p3 0.2824 0.6706 1)" }}
                    ></circle>
                    <mask id=":R19lotq6H1:">
                      <rect
                        x="133"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                  </motion.g>
                  <motion.g
                    style={{
                      transformOrigin: "223px 237px 0px",
                    }}
                    initial={{ y: 0 }}
                    animate={generateLowerCircleVariants(activeIntroTab, 2)}
                  >
                    <circle
                      mask="url(#:R19lotq6:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#1A88F8"
                      style={{ fill: "color(display-p3 0.102 0.5333 0.9725)" }}
                    ></circle>
                    <mask id=":R19lotq6:">
                      <rect
                        x="223"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                    <circle
                      mask="url(#:R19lotq6H1:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#48ABFF"
                      style={{ fill: "color(display-p3 0.2824 0.6706 1)" }}
                    ></circle>
                    <mask id=":R19lotq6H1:">
                      <rect
                        x="133"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                  </motion.g>
                </motion.g>
              </g>
            </motion.g>

            {/* Column 3 */}
            <motion.g
              style={{ transform: "none", transformOrigin: "587px 237px 0px" }}
              variants={generateColumnVariants(3)}
            >
              <g transform="translate(364 0)">
                <motion.g
                  style={{
                    transformOrigin: "223px 237px 0px",
                  }}
                  variants={generateAnimateVariants(3)}
                >
                  <motion.g
                    style={{
                      transformOrigin: "223px 237px 0px",
                    }}
                    initial={{ y: -184 }}
                    animate={generateUpperCircleVariants(activeIntroTab, 3)}
                  >
                    <circle
                      mask="url(#:R1plotq6:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#1A88F8"
                      style={{ fill: "color(display-p3 0.102 0.5333 0.9725)" }}
                    ></circle>
                    <mask id=":R1plotq6:">
                      <rect
                        x="223"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                    <circle
                      mask="url(#:R1plotq6H1:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#48ABFF"
                      style={{ fill: "color(display-p3 0.2824 0.6706 1)" }}
                    ></circle>
                    <mask id=":R1plotq6H1:">
                      <rect
                        x="133"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                  </motion.g>
                  <motion.g
                    style={{
                      transformOrigin: "223px 237px 0px",
                    }}
                    initial={{ y: 0 }}
                    animate={generateLowerCircleVariants(activeIntroTab, 3)}
                  >
                    <circle
                      mask="url(#:R1plotq6:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#1A88F8"
                      style={{ fill: "color(display-p3 0.102 0.5333 0.9725)" }}
                    ></circle>
                    <mask id=":R1plotq6:">
                      <rect
                        x="223"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                    <circle
                      mask="url(#:R1plotq6H1:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#48ABFF"
                      style={{ fill: "color(display-p3 0.2824 0.6706 1)" }}
                    ></circle>
                    <mask id=":R1plotq6H1:">
                      <rect
                        x="133"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                  </motion.g>
                </motion.g>
              </g>
            </motion.g>

            {/* Column 4 */}
            <motion.g
              style={{ transform: "none", transformOrigin: "769px 201px 0px" }}
              variants={generateColumnVariants(4)}
            >
              <g transform="translate(546 -36)">
                <motion.g
                  style={{
                    transformOrigin: "223px 237px 0px",
                  }}
                  variants={generateAnimateVariants(4)}
                >
                  <motion.g
                    style={{
                      transformOrigin: "223px 237px 0px",
                    }}
                    initial={{ y: -184 }}
                    animate={generateUpperCircleVariants(activeIntroTab, 4)}
                  >
                    <circle
                      mask="url(#:R29lotq6:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#1A88F8"
                      style={{ fill: "color(display-p3 0.102 0.5333 0.9725)" }}
                    ></circle>
                    <mask id=":R29lotq6:">
                      <rect
                        x="223"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                    <circle
                      mask="url(#:R29lotq6H1:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#48ABFF"
                      style={{ fill: "color(display-p3 0.2824 0.6706 1)" }}
                    ></circle>
                    <mask id=":R29lotq6H1:">
                      <rect
                        x="133"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                  </motion.g>
                  <motion.g
                    style={{
                      transformOrigin: "223px 237px 0px",
                    }}
                    initial={{ y: 0 }}
                    animate={generateLowerCircleVariants(activeIntroTab, 4)}
                  >
                    <circle
                      mask="url(#:R29lotq6:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#1A88F8"
                      style={{ fill: "color(display-p3 0.102 0.5333 0.9725)" }}
                    ></circle>
                    <mask id=":R29lotq6:">
                      <rect
                        x="223"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                    <circle
                      mask="url(#:R29lotq6H1:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#48ABFF"
                      style={{ fill: "color(display-p3 0.2824 0.6706 1)" }}
                    ></circle>
                    <mask id=":R29lotq6H1:">
                      <rect
                        x="133"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                  </motion.g>
                </motion.g>
              </g>
            </motion.g>
          </g>
        </g>

        {/* Blue Masked */}
        <g id="blue-masked" clipPath="url(#clip0_3066_1499)">
          <g>
            {/* Column 1 */}
            <motion.g
              style={{ transform: "none", transformOrigin: "223px 237px 0px" }}
              variants={generateColumnVariants(1)}
            >
              <g transform="translate(0 0)">
                <motion.g
                  style={{
                    transformOrigin: "223px 237px 0px",
                  }}
                  variants={generateAnimateVariants(1)}
                >
                  <motion.g
                    style={{
                      transformOrigin: "223px 237px 0px",
                    }}
                    initial={{ y: -184 }}
                    animate={generateUpperCircleVariants(activeIntroTab, 1)}
                  >
                    <circle
                      mask="url(#:Rq5otq6:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#6BCEF5"
                      style={{ fill: "color(display-p3 0.4196 0.8078 0.9608)" }}
                    ></circle>
                    <mask id=":Rq5otq6:">
                      <rect
                        x="223"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                    <circle
                      mask="url(#:Rq5otq6H1:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#B5E7FA"
                      style={{ fill: "color(display-p3 0.7098 0.9059 0.9804)" }}
                    ></circle>
                    <mask id=":Rq5otq6H1:">
                      <rect
                        x="133"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                  </motion.g>
                  <motion.g
                    style={{
                      transformOrigin: "223px 237px 0px",
                    }}
                    initial={{ y: 0 }}
                    animate={generateLowerCircleVariants(activeIntroTab, 1)}
                  >
                    <circle
                      mask="url(#:Rq5otq6:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#6BCEF5"
                      style={{ fill: "color(display-p3 0.4196 0.8078 0.9608)" }}
                    ></circle>
                    <mask id=":Rq5otq6:">
                      <rect
                        x="223"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                    <circle
                      mask="url(#:Rq5otq6H1:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#B5E7FA"
                      style={{ fill: "color(display-p3 0.7098 0.9059 0.9804)" }}
                    ></circle>
                    <mask id=":Rq5otq6H1:">
                      <rect
                        x="133"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                  </motion.g>
                </motion.g>
              </g>
            </motion.g>

            {/* Column 2 */}
            <motion.g
              style={{ transform: "none", transformOrigin: "405px 201px 0px" }}
              variants={generateColumnVariants(2)}
            >
              <g transform="translate(182 -36)">
                <motion.g
                  style={{
                    transformOrigin: "223px 237px 0px",
                  }}
                  variants={generateAnimateVariants(2)}
                >
                  <motion.g
                    style={{
                      transformOrigin: "223px 237px 0px",
                    }}
                    initial={{ y: -184 }}
                    animate={generateUpperCircleVariants(activeIntroTab, 2)}
                  >
                    <circle
                      mask="url(#:R1a5otq6:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#6BCEF5"
                      style={{ fill: "color(display-p3 0.4196 0.8078 0.9608)" }}
                    ></circle>
                    <mask id=":R1a5otq6:">
                      <rect
                        x="223"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                    <circle
                      mask="url(#:R1a5otq6H1:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#B5E7FA"
                      style={{ fill: "color(display-p3 0.7098 0.9059 0.9804)" }}
                    ></circle>
                    <mask id=":R1a5otq6H1:">
                      <rect
                        x="133"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                  </motion.g>
                  <motion.g
                    style={{
                      transformOrigin: "223px 237px 0px",
                    }}
                    initial={{ y: 0 }}
                    animate={generateLowerCircleVariants(activeIntroTab, 2)}
                  >
                    <circle
                      mask="url(#:R1a5otq6:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#6BCEF5"
                      style={{ fill: "color(display-p3 0.4196 0.8078 0.9608)" }}
                    ></circle>
                    <mask id=":R1a5otq6:">
                      <rect
                        x="223"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                    <circle
                      mask="url(#:R1a5otq6H1:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#B5E7FA"
                      style={{ fill: "color(display-p3 0.7098 0.9059 0.9804)" }}
                    ></circle>
                    <mask id=":R1a5otq6H1:">
                      <rect
                        x="133"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                  </motion.g>
                </motion.g>
              </g>
            </motion.g>

            {/* Column 3 */}
            <motion.g
              style={{ transform: "none", transformOrigin: "587px 237px 0px" }}
              variants={generateColumnVariants(3)}
            >
              <g transform="translate(364 0)">
                <motion.g
                  style={{
                    transformOrigin: "223px 237px 0px",
                  }}
                  variants={generateAnimateVariants(3)}
                >
                  <motion.g
                    style={{
                      transformOrigin: "223px 237px 0px",
                    }}
                    initial={{ y: -184 }}
                    animate={generateUpperCircleVariants(activeIntroTab, 3)}
                  >
                    <circle
                      mask="url(#:R1q5otq6:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#6BCEF5"
                      style={{ fill: "color(display-p3 0.4196 0.8078 0.9608)" }}
                    ></circle>
                    <mask id=":R1q5otq6:">
                      <rect
                        x="223"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                    <circle
                      mask="url(#:R1q5otq6H1:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#B5E7FA"
                      style={{ fill: "color(display-p3 0.7098 0.9059 0.9804)" }}
                    ></circle>
                    <mask id=":R1q5otq6H1:">
                      <rect
                        x="133"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                  </motion.g>
                  <motion.g
                    style={{
                      transformOrigin: "223px 237px 0px",
                    }}
                    initial={{ y: 0 }}
                    animate={generateLowerCircleVariants(activeIntroTab, 3)}
                  >
                    <circle
                      mask="url(#:R1q5otq6:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#6BCEF5"
                      style={{ fill: "color(display-p3 0.4196 0.8078 0.9608)" }}
                    ></circle>
                    <mask id=":R1q5otq6:">
                      <rect
                        x="223"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                    <circle
                      mask="url(#:R1q5otq6H1:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#B5E7FA"
                      style={{ fill: "color(display-p3 0.7098 0.9059 0.9804)" }}
                    ></circle>
                    <mask id=":R1q5otq6H1:">
                      <rect
                        x="133"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                  </motion.g>
                </motion.g>
              </g>
            </motion.g>

            {/* Column 4 */}
            <motion.g
              style={{ transform: "none", transformOrigin: "769px 201px 0px" }}
              variants={generateColumnVariants(4)}
            >
              <g transform="translate(546 -36)">
                <motion.g
                  style={{
                    transformOrigin: "223px 237px 0px",
                  }}
                  variants={generateAnimateVariants(4)}
                >
                  <motion.g
                    style={{
                      transformOrigin: "223px 237px 0px",
                    }}
                    initial={{ y: -184 }}
                    animate={generateUpperCircleVariants(activeIntroTab, 4)}
                  >
                    <circle
                      mask="url(#:R2a5otq6:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#6BCEF5"
                      style={{ fill: "color(display-p3 0.4196 0.8078 0.9608)" }}
                    ></circle>
                    <mask id=":R2a5otq6:">
                      <rect
                        x="223"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                    <circle
                      mask="url(#:R2a5otq6H1:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#B5E7FA"
                      style={{ fill: "color(display-p3 0.7098 0.9059 0.9804)" }}
                    ></circle>
                    <mask id=":R2a5otq6H1:">
                      <rect
                        x="133"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                  </motion.g>
                  <motion.g
                    style={{
                      transformOrigin: "223px 237px 0px",
                    }}
                    initial={{ y: 0 }}
                    animate={generateLowerCircleVariants(activeIntroTab, 4)}
                  >
                    <circle
                      mask="url(#:R2a5otq6:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#6BCEF5"
                      style={{ fill: "color(display-p3 0.4196 0.8078 0.9608)" }}
                    ></circle>
                    <mask id=":R2a5otq6:">
                      <rect
                        x="223"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                    <circle
                      mask="url(#:R2a5otq6H1:)"
                      cx="223"
                      cy="237"
                      r="90"
                      fill="#B5E7FA"
                      style={{ fill: "color(display-p3 0.7098 0.9059 0.9804)" }}
                    ></circle>
                    <mask id=":R2a5otq6H1:">
                      <rect
                        x="133"
                        y="147"
                        width="90"
                        height="180"
                        fill="white"
                      ></rect>
                    </mask>
                  </motion.g>
                </motion.g>
              </g>
            </motion.g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3066_1499">
          <rect width="986" height="225" fill="white"></rect>
        </clipPath>
        <clipPath id="clip1_3066_1499">
          <rect width="986" height="225" y="225" fill="white"></rect>
        </clipPath>
      </defs>
    </motion.svg>
  );
}

export default SvgIntro;
