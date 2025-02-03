import { motion } from "motion/react";

interface SvgGhoProps {
  isInView: boolean;
}

const animateTransition = {
  ease: "easeOut",
  duration: 4,
  repeat: Infinity,
};

const circleVariants = {
  hidden: { scale: 0 },
  visible: (delay: number) => ({
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      delay: 0.05 * delay,
    },
  }),
};

function SvgGho({ isInView }: SvgGhoProps) {
  return (
    <motion.svg
      variants={{
        hidden: {},
        visible: {},
        animate: {},
      }}
      initial="hidden"
      animate={isInView ? ["animate", "visible"] : ""}
      className="w-full h-full"
      viewBox="0 0 650 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        variants={{ hidden: { scale: 0.7 }, visible: { scale: 1 } }}
        transition={{ duration: 3.5 }}
        style={{ transformOrigin: "324.413px 249px 0px" }}
      >
        {/* GHO Icon */}
        <motion.g
          variants={circleVariants}
          custom={4}
          style={{ transformOrigin: "325px 250px 0px" }}
        >
          <circle
            cx="325"
            cy="250"
            r="73"
            fill="#28D358"
            style={{ fill: "color(display-p3 0.1585 0.8276 0.3459)" }}
          ></circle>
          <clipPath id="clip0_3123_123010">
            <circle
              cx="325"
              cy="250"
              r="73"
              fill="white"
              style={{ fill: "color(display-p3 0.1585 0.8276 0.3459)" }}
            ></circle>
            <circle cx="40" cy="35" r="35"></circle>
          </clipPath>
          <path
            d="M368.738 285.357L368.52 285.295L368.406 285.49C359.557 300.581 345.135 310.162 324.432 310.162C291.524 310.162 264.841 282.969 264.841 249.43C264.841 215.891 291.524 188.699 324.432 188.699C354.101 188.699 379.406 210.803 383.973 239.728H368.305C363.967 219.153 346.093 204.211 324.432 204.211C299.483 204.211 279.552 224.013 279.552 249.43C279.552 274.85 299.476 294.289 324.422 294.289C346.916 294.289 364.905 278.486 368.308 256.75H384.012V306.638L369.581 315.629V285.808V285.591L369.373 285.528C369.267 285.496 369.157 285.468 369.05 285.44L369.021 285.433C368.924 285.407 368.83 285.383 368.738 285.357Z"
            fill="white"
            stroke="#3BE069"
            style={{ stroke: "color(display-p3 0.2314 0.8784 0.4118)" }}
            strokeWidth="0.584946"
            clipPath="url(#clip0_3123_123010)"
          ></path>
          <circle
            cx="340.365"
            cy="240.006"
            r="12.3425"
            fill="white"
            stroke="#3BE069"
            style={{ stroke: "color(display-p3 0.2314 0.8784 0.4118)" }}
            strokeWidth="0.584946"
          ></circle>
          <circle
            cx="308.516"
            cy="240.006"
            r="12.3425"
            fill="white"
            stroke="#3BE069"
            style={{ stroke: "color(display-p3 0.2314 0.8784 0.4118)" }}
            strokeWidth="0.584946"
          ></circle>
        </motion.g>

        {/* Circle 01 */}
        <motion.g
          variants={{
            ...circleVariants,
            animate: { y: [-7, 10, -7], transition: animateTransition },
          }}
          style={{ transformOrigin: "-53px 454px 0px" }}
        >
          <g
            style={{
              transform: "translateY(-4.00857px)",
              transformOrigin: "-53px 454px 0px",
            }}
          >
            <g>
              <circle
                cx="-53"
                cy="454"
                r="74"
                fill="#28D358"
                fillOpacity="0.25"
                style={{ fill: "color(display-p3 0.1569 0.8275 0.3451)" }}
              ></circle>
            </g>
          </g>
        </motion.g>

        {/* Circle 02 */}
        <motion.g
          variants={{
            ...circleVariants,
            animate: { y: [-2, 4, -2], transition: animateTransition },
          }}
          custom={10}
          style={{ transformOrigin: "56px 262px 0px" }}
        >
          <g
            style={{
              transform: "translateY(5.8859px)",
              transformOrigin: "56px 262px 0px",
            }}
          >
            <g>
              <circle
                cx="56"
                cy="262"
                r="35"
                fill="#28D358"
                fillOpacity="0.7"
                style={{ fill: "color(display-p3 0.1585 0.8276 0.3459)" }}
              ></circle>
            </g>
          </g>
        </motion.g>

        {/* Circle 03 */}
        <motion.g
          variants={{
            ...circleVariants,
            animate: { y: [-6, 7, -6], transition: animateTransition },
          }}
          custom={6}
          style={{ transformOrigin: "556px 101px 0px" }}
        >
          <g
            style={{
              transform: "translateY(-1.01243px)",
              transformOrigin: "556px 101px 0px",
            }}
          >
            <g>
              <circle
                cx="556"
                cy="101"
                r="31"
                fill="#92E7AA"
                style={{ fill: "color(display-p3 0.5725 0.9059 0.6667)" }}
              ></circle>
            </g>
          </g>
        </motion.g>

        {/* Circle 04 */}
        <motion.g
          variants={{
            ...circleVariants,
            animate: { y: [9, -10, 9], transition: animateTransition },
          }}
          custom={12}
          style={{ transformOrigin: "575px 454px 0px" }}
        >
          <g
            style={{
              transform: "translateY(4.84466px)",
              transformOrigin: "575px 454px 0px",
            }}
          >
            <g>
              <circle
                cx="575"
                cy="454"
                r="35"
                fill="#28D358"
                fillOpacity="0.5"
                style={{ fill: "color(display-p3 0.1569 0.8275 0.3451)" }}
              ></circle>
            </g>
          </g>
        </motion.g>

        {/* Circle 05 */}
        <motion.g
          variants={{
            ...circleVariants,
            animate: { y: [-7, 9, -7], transition: animateTransition },
          }}
          custom={16}
          style={{ transformOrigin: "182px -30px 0px" }}
        >
          <g
            style={{
              transform: "translateY(5.24533px)",
              transformOrigin: "182px -30px 0px",
            }}
          >
            <g>
              <circle
                cx="182"
                cy="-30"
                r="52"
                fill="#28D358"
                fillOpacity="0.5"
                style={{ fill: "color(display-p3 0.1569 0.8275 0.3451)" }}
              ></circle>
            </g>
          </g>
        </motion.g>

        {/* Circle 06 */}
        <motion.g
          variants={{
            ...circleVariants,
            animate: { y: [8, -2, 8], transition: animateTransition },
          }}
          custom={14}
          style={{ transformOrigin: "301px 528px 0px" }}
        >
          <g
            style={{
              transform: "translateY(-1.97729px)",
              transformOrigin: "301px 528px 0px",
            }}
          >
            <g>
              <circle
                cx="301"
                cy="528"
                r="52"
                fill="#28D358"
                fillOpacity="0.5"
                style={{ fill: "color(display-p3 0.1569 0.8275 0.3451)" }}
              ></circle>
            </g>
          </g>
        </motion.g>

        {/* Circle 07 */}
        <motion.g
          variants={{
            ...circleVariants,
            animate: { y: [-4, 3, -4], transition: animateTransition },
          }}
          custom={2}
          style={{ transformOrigin: "190px 151px 0px" }}
        >
          <g
            style={{
              transform: "translateY(0.180449px)",
              transformOrigin: "190px 151px 0px",
            }}
          >
            <g>
              <circle
                cx="190"
                cy="151"
                r="13"
                fill="#28D358"
                style={{ fill: "color(display-p3 0.1585 0.8276 0.3459)" }}
              ></circle>
            </g>
          </g>
        </motion.g>

        {/* Circle 08 */}
        <motion.g
          variants={{
            ...circleVariants,
            animate: { y: [-9, 9, -9], transition: animateTransition },
          }}
          custom={3}
          style={{ transformOrigin: "69px 83px 0px" }}
        >
          <g
            style={{
              transform: "translateY(6.29205px)",
              transformOrigin: "69px 83px 0px",
            }}
          >
            <g>
              <circle
                cx="69"
                cy="83"
                r="18"
                fill="#92E7AA"
                style={{ fill: "color(display-p3 0.5725 0.9059 0.6667)" }}
              ></circle>
            </g>
          </g>
        </motion.g>

        {/* Circle 09 */}
        <motion.g
          variants={{
            ...circleVariants,
            animate: { y: [6, -7, 6], transition: animateTransition },
          }}
          custom={1}
          style={{ transformOrigin: "489px 204px 0px" }}
        >
          <g
            style={{
              transform: "translateY(6.28599px)",
              transformOrigin: "489px 204px 0px",
            }}
          >
            <g>
              <circle
                cx="489"
                cy="204"
                r="13"
                fill="#28D358"
                style={{ fill: "color(display-p3 0.1585 0.8276 0.3459)" }}
              ></circle>
            </g>
          </g>
        </motion.g>

        {/* Circle 10 */}
        <motion.g
          variants={{
            ...circleVariants,
            animate: { y: [5, -7, 5], transition: animateTransition },
          }}
          custom={4}
          style={{ transformOrigin: "369px 164px 0px" }}
        >
          <g
            style={{
              transform: "translateY(3.1337px)",
              transformOrigin: "369px 164px 0px",
            }}
          >
            <g>
              <circle
                cx="369"
                cy="164"
                r="6"
                fill="#28D358"
                style={{ fill: "color(display-p3 0.1585 0.8276 0.3459)" }}
              ></circle>
            </g>
          </g>
        </motion.g>

        {/* Circle 11 */}
        <motion.g
          variants={{
            ...circleVariants,
            animate: { y: [8, -8, 8], transition: animateTransition },
          }}
          custom={12}
          style={{ transformOrigin: "401px 329px 0px" }}
        >
          <g
            style={{
              transform: "translateY(0.421072px)",
              transformOrigin: "401px 329px 0px",
            }}
          >
            <g>
              <circle
                cx="401"
                cy="329"
                r="6"
                fill="#28D358"
                style={{ fill: "color(display-p3 0.1585 0.8276 0.3459)" }}
              ></circle>
            </g>
          </g>
        </motion.g>

        {/* Circle 12 */}
        <motion.g
          variants={{
            ...circleVariants,
            animate: { y: [-6, 6, -6], transition: animateTransition },
          }}
          custom={10}
          style={{ transformOrigin: "223px 283px 0px" }}
        >
          <g
            style={{
              transform: "translateY(5.15314px)",
              transformOrigin: "223px 283px 0px",
            }}
          >
            <g>
              <circle
                cx="223"
                cy="283"
                r="6"
                fill="#28D358"
                style={{ fill: "color(display-p3 0.1585 0.8276 0.3459)" }}
              ></circle>
            </g>
          </g>
        </motion.g>

        {/* Circle 13 */}
        <motion.g
          variants={{
            ...circleVariants,
            animate: { y: [-1, 8, -1], transition: animateTransition },
          }}
          custom={0}
          style={{ transformOrigin: "216px 380px 0px" }}
        >
          <g
            style={{
              transform: "translateY(-3.59636px)",
              transformOrigin: "216px 380px 0px",
            }}
          >
            <g>
              <circle
                cx="216"
                cy="380"
                r="13"
                fill="#92E7AA"
                style={{ fill: "color(display-p3 0.5725 0.9059 0.6667)" }}
              ></circle>
            </g>
          </g>
        </motion.g>
      </motion.g>
    </motion.svg>
  );
}

export default SvgGho;
