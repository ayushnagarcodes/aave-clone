import { easeSwift } from "@/_lib/utils";
import { motion } from "motion/react";

interface SvgGaugeMeterProps {
  isInView: boolean;
}

function SvgGaugeMeter({ isInView }: SvgGaugeMeterProps) {
  return (
    <motion.svg
      variants={{
        hidden: {},
        visible: {},
        animate: {},
      }}
      initial="hidden"
      animate={isInView ? ["animate", "visible"] : ""}
      opacity={isInView ? 1 : 0}
      className="transition-opacity duration-500 delay-[250ms]"
      viewBox="0 0 320 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
    >
      <g style={{ transform: "scale(1.5) translateY(30px) translateX(-52px)" }}>
        <g clipPath="url(#clip0_4040_7171)">
          <g>
            <rect
              width="320"
              height="320"
              transform="matrix(1 0 0 -1 0 320)"
              fill="transparent"
            ></rect>
            <path
              d="M160.5 31C177.375 31 194.084 34.3237 209.675 40.7815C225.265 47.2392 239.431 56.7044 251.363 68.6368C263.296 80.5691 272.761 94.7348 279.219 110.325C285.676 125.916 289 142.625 289 159.5C289 176.375 285.676 193.084 279.219 208.675C272.761 224.265 263.296 238.431 251.363 250.363C239.431 262.296 225.265 271.761 209.675 278.219C194.084 284.676 177.375 288 160.5 288"
              stroke="#28D358"
              style={{ stroke: "color(display-p3 0.1585 0.8276 0.3459)" }}
              strokeWidth="49"
            ></path>
            <path
              d="M160.5 288C143.625 288 126.916 284.676 111.325 278.219C95.7348 271.761 81.5691 262.296 69.6368 250.363C57.7044 238.431 48.2392 224.265 41.7815 208.675C35.3237 193.084 32 176.375 32 159.5C32 142.625 35.3238 125.915 41.7815 110.325C48.2392 94.7348 57.7045 80.5691 69.6368 68.6367C81.5691 56.7044 95.7349 47.2392 111.325 40.7815C126.916 34.3237 143.625 31 160.5 31"
              stroke="#E7F8EB"
              style={{ stroke: "color(display-p3 0.9059 0.9725 0.9216)" }}
              strokeWidth="50"
            ></path>
            <rect
              width="320"
              height="320"
              fill="transparent"
              fillOpacity="0.5"
            ></rect>
            <path
              d="M160.5 3V64"
              stroke="#FCFCFB"
              style={{ stroke: "color(display-p3 0.9882 0.9882 0.9843)" }}
              strokeWidth="2"
            ></path>
          </g>
          <motion.g
            variants={{ hidden: { rotate: 20 }, visible: { rotate: 35 } }}
            transition={{
              ease: easeSwift,
              duration: 2,
            }}
            style={{
              transformOrigin: "160px 160px 0px",
            }}
          >
            <motion.g
              variants={{
                hidden: { rotate: 0 },
                visible: { rotate: [0, 1, 0] },
              }}
              transition={{
                duration: 2.5,
                delay: 1,
                repeat: Infinity,
              }}
              style={{
                transformOrigin: "160px 160px 0px",
              }}
            >
              <rect
                width="320"
                height="320"
                transform="matrix(1 0 0 -1 0 320)"
                fill="transparent"
              ></rect>
              <path
                d="M160.5 288C177.375 288 194.084 284.676 209.675 278.219C225.265 271.761 239.431 262.296 251.363 250.363C263.296 238.431 272.761 224.265 279.219 208.675C285.676 193.084 289 176.375 289 159.5C289 142.625 285.676 125.915 279.219 110.325C272.761 94.7348 263.296 80.5691 251.363 68.6367C239.431 56.7044 225.265 47.2392 209.675 40.7815C194.084 34.3237 177.375 31 160.5 31"
                stroke="#92E7A9"
                style={{ stroke: "color(display-p3 0.9059 0.9725 0.9216)" }}
                strokeWidth="50"
              ></path>
              <rect
                opacity="0.99"
                x="157"
                y="2"
                width="7"
                height="58"
                rx="3.5"
                fill="#28D358"
                stroke="#FCFCFB"
                style={{
                  fill: "color(display-p3 0.1585 0.8276 0.3459)",
                  fillOpacity: 1,
                  stroke: "color(display-p3 0.9882 0.9882 0.9843)",
                  strokeOpacity: 1,
                }}
                strokeWidth="2"
              ></rect>
            </motion.g>
          </motion.g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_4040_7171">
          <rect width="320" height="320" fill="white"></rect>
        </clipPath>
      </defs>
    </motion.svg>
  );
}

export default SvgGaugeMeter;
