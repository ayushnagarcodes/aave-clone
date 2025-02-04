import { easeSwift } from "@/_lib/utils";
import { motion } from "motion/react";

interface SvgAuditsProps {
  isInView: boolean;
}

const generateTransition = (delay: number) => ({
  duration: 1.25,
  ease: easeSwift,
  delay: 0.2 + 0.05 * delay,
  repeat: Infinity,
  repeatType: "mirror" as const,
  repeatDelay: 0.5,
});

const rowRevealVariants = {
  hidden: { x: 450 },
  visible: (delay: number) => ({
    x: 0,
    transition: { duration: 0.8, ease: easeSwift, delay: delay * 0.1 },
  }),
};

function SvgAudits({ isInView }: SvgAuditsProps) {
  return (
    <motion.svg
      variants={{ hidden: {}, visible: {}, animate: {} }}
      initial="hidden"
      animate={isInView ? ["visible", "animate"] : ""}
      className="w-full h-full"
      viewBox="0 0 493 257"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top row */}
      <motion.g
        variants={rowRevealVariants}
        custom={0}
        style={{ transformOrigin: "263px 81px 0px" }}
      >
        <motion.rect
          variants={{
            hidden: { width: 242 },
            animate: { width: 142 },
          }}
          transition={generateTransition(0)}
          x="39"
          y="65"
          height="32"
          rx="16"
          fill="#1F807B"
          style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
        ></motion.rect>

        <motion.g
          variants={{
            hidden: { x: 0 },
            animate: { x: -100 },
          }}
          transition={generateTransition(0)}
          style={{
            transformOrigin: "313px 81px 0px",
          }}
        >
          <path
            d="M313 61C324.046 61 333 69.9543 333 81C333 92.0457 324.046 101 313 101V61Z"
            fill="#1F807B"
            style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
          ></path>
          <path
            d="M313 101C301.954 101 293 92.0457 293 81C293 69.9543 301.954 61 313 61L313 101Z"
            fill="#63BBB6"
            style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
          ></path>
        </motion.g>

        <motion.rect
          variants={{
            hidden: { width: 63, x: 0 },
            animate: { width: 138, x: -100 },
          }}
          transition={generateTransition(0)}
          x="345"
          y="65"
          height="32"
          rx="16"
          fill="#63BBB6"
          style={{
            fill: "color(display-p3 0.3882 0.7333 0.7137)",
            transformOrigin: "376.5px 81px 0px",
          }}
        ></motion.rect>

        <motion.rect
          variants={{
            hidden: { width: 63, x: 0 },
            animate: { width: 88, x: -25 },
          }}
          transition={generateTransition(0)}
          x="424"
          y="65"
          width="83.98174867395181px"
          height="32"
          rx="16"
          fill="#63BBB6"
          style={{
            fill: "color(display-p3 0.3882 0.7333 0.7137)",
            transform: "translateX(-20.9817px)",
            transformOrigin: "455.5px 81px 0px",
          }}
        ></motion.rect>
      </motion.g>

      {/* Middle row */}
      <motion.g
        variants={rowRevealVariants}
        custom={1}
        style={{ transformOrigin: "345px 129px 0px" }}
      >
        <motion.rect
          variants={{
            hidden: { width: 63 },
            animate: { width: 163 },
          }}
          transition={generateTransition(2)}
          x="107"
          y="113"
          height="32"
          rx="16"
          fill="#63BBB6"
          style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
        ></motion.rect>

        <motion.rect
          variants={{
            hidden: { width: 151, x: 0 },
            animate: { width: 101, x: 100 },
          }}
          transition={generateTransition(2)}
          x="186"
          y="113"
          height="32"
          rx="16"
          fill="#1F807B"
          style={{
            fill: "color(display-p3 0.121 0.5025 0.4806)",
            transformOrigin: "261.5px 129px 0px",
          }}
        ></motion.rect>

        <motion.g
          variants={{
            hidden: { x: 0 },
            animate: { x: 50 },
          }}
          transition={generateTransition(2)}
          style={{
            transformOrigin: "369px 129px 0px",
          }}
        >
          <path
            d="M369 109C380.046 109 389 117.954 389 129C389 140.046 380.046 149 369 149V109Z"
            fill="#1F807B"
            style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
          ></path>
          <path
            d="M369 149C357.954 149 349 140.046 349 129C349 117.954 357.954 109 369 109L369 149Z"
            fill="#63BBB6"
            style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
          ></path>
        </motion.g>

        <motion.rect
          variants={{
            hidden: { x: 0 },
            animate: { x: 50 },
          }}
          transition={generateTransition(2)}
          x="401"
          y="113"
          width="182"
          height="32"
          rx="16"
          fill="#63BBB6"
          style={{
            fill: "color(display-p3 0.3882 0.7333 0.7137)",
            transformOrigin: "492px 129px 0px",
          }}
        ></motion.rect>
      </motion.g>

      {/* Bottom row */}
      <motion.g
        variants={rowRevealVariants}
        custom={2}
        style={{ transformOrigin: "335.5px 177px 0px" }}
      >
        <motion.g
          variants={{
            hidden: { x: 0 },
            animate: { x: -30 },
          }}
          transition={generateTransition(1)}
          style={{
            transformOrigin: "199px 177px 0px",
          }}
        >
          <path
            d="M199 157C210.046 157 219 165.954 219 177C219 188.046 210.046 197 199 197V157Z"
            fill="#1F807B"
            style={{ fill: "color(display-p3 0.1210 0.5025 0.4806)" }}
          ></path>
          <path
            d="M199 197C187.954 197 179 188.046 179 177C179 165.954 187.954 157 199 157L199 197Z"
            fill="#63BBB6"
            style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
          ></path>
        </motion.g>

        <motion.rect
          variants={{
            hidden: { width: 182, x: 0 },
            animate: { width: 157, x: -25 },
          }}
          transition={generateTransition(1)}
          x="231"
          y="161"
          height="32"
          rx="16"
          fill="#63BBB6"
          style={{
            fill: "color(display-p3 0.3882 0.7333 0.7137)",
            transformOrigin: "322px 177px 0px",
          }}
        ></motion.rect>

        <motion.rect
          variants={{
            hidden: { width: 63, x: 0 },
            animate: { width: 113, x: -50 },
          }}
          transition={generateTransition(1)}
          x="429"
          y="161"
          height="32"
          rx="16"
          fill="#1F807B"
          style={{
            fill: "color(display-p3 0.121 0.5025 0.4806)",
            transformOrigin: "460.5px 177px 0px",
          }}
        ></motion.rect>
      </motion.g>
    </motion.svg>
  );
}

export default SvgAudits;
