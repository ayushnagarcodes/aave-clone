import useDebounce from "@/_hooks/useDebounce";
import { easeSwift } from "@/_lib/utils";
import type { MotionValue } from "motion/react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

const svgCircleTransition = { duration: 1.2, ease: easeSwift };

const springOptions = {
  stiffness: 50,
  damping: 15,
  mass: 1,
};

const generateCircleVariants = (x: number, y: number) => ({
  hidden: { opacity: 0, x, y: 1000 },
  animate: {
    opacity: 1,
    x,
    y,
  },
});

// x1 & x2 are the x positions of the circle's left and right edges
const checkRotate = (
  x1: number,
  x2: number,
  currentPointerPositionX: number,
  lastPointerPositionX: number
) => {
  const shouldRotate =
    (x1 >= lastPointerPositionX && x1 <= currentPointerPositionX) ||
    (x2 >= lastPointerPositionX && x2 <= currentPointerPositionX) ||
    (x1 >= currentPointerPositionX && x1 <= lastPointerPositionX) ||
    (x2 >= currentPointerPositionX && x2 <= lastPointerPositionX);

  return shouldRotate;
};

const updateVelocities = (
  velocities: MotionValue<number>[],
  newVelocity: number,
  currentPointerPositionX: number,
  lastPointerPositionX: number,
  containerDimensions: { x: number; width: number; padding: number }
) => {
  const diameter =
    (containerDimensions.width - containerDimensions.padding * 2) / 6;

  for (let i = 0; i < velocities.length; i++) {
    const circleX1 =
      containerDimensions.x + containerDimensions.padding + diameter * i;
    const circleX2 = circleX1 + diameter;
    const shouldRotate = checkRotate(
      circleX1,
      circleX2,
      currentPointerPositionX,
      lastPointerPositionX
    );

    if (shouldRotate) {
      velocities[i].set(parseFloat(newVelocity.toFixed(2)) * 3);
    }
  }
};

function SvgCircles() {
  // Getting info about container
  const containerRef = useRef<SVGSVGElement>(null);
  const [containerDimensions, setContainerDimensions] = useState({
    x: 0,
    width: 0,
    padding: 48,
  });
  const lastPointerPositionX = useRef(0);
  const lastUpdate = useRef(performance.now());

  // Generating rotate values for each circle from mouse velocity
  const velocity1 = useMotionValue(0);
  const smoothVelocity1 = useSpring(velocity1, springOptions);
  const rotate1 = useTransform(smoothVelocity1, [-50, 0, 50], [-360, 0, 360]);

  const velocity2 = useMotionValue(0);
  const smoothVelocity2 = useSpring(velocity2, springOptions);
  const rotate2 = useTransform(smoothVelocity2, [-50, 0, 50], [-360, 0, 360]);

  const velocity3 = useMotionValue(0);
  const smoothVelocity3 = useSpring(velocity3, springOptions);
  const rotate3 = useTransform(smoothVelocity3, [-50, 0, 50], [-360, 0, 360]);

  const velocity4 = useMotionValue(0);
  const smoothVelocity4 = useSpring(velocity4, springOptions);
  const rotate4 = useTransform(smoothVelocity4, [-50, 0, 50], [-360, 0, 360]);

  const velocity5 = useMotionValue(0);
  const smoothVelocity5 = useSpring(velocity5, springOptions);
  const rotate5 = useTransform(smoothVelocity5, [-50, 0, 50], [-360, 0, 360]);

  const velocity6 = useMotionValue(0);
  const smoothVelocity6 = useSpring(velocity6, springOptions);
  const rotate6 = useTransform(smoothVelocity6, [-50, 0, 50], [-360, 0, 360]);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerDimensions({
        x: rect.x,
        width: rect.width,
        padding: 48,
      });
    }
  }, []);

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const currentTime = performance.now();
    const currentPointerPositionX = e.clientX;
    const delta = currentTime - lastUpdate.current;

    const newVelocity =
      (currentPointerPositionX - lastPointerPositionX.current) / delta; // in px/ms

    updateVelocities(
      [velocity1, velocity2, velocity3, velocity4, velocity5, velocity6],
      newVelocity,
      currentPointerPositionX,
      lastPointerPositionX.current,
      containerDimensions
    );

    lastPointerPositionX.current = currentPointerPositionX;
    lastUpdate.current = currentTime;
  };

  const debouncedPointerMove = useDebounce(handlePointerMove, 75);

  return (
    <motion.svg
      ref={containerRef}
      onPointerMove={debouncedPointerMove}
      xmlns="http://www.w3.org/2000/svg"
      width="985"
      height="438"
      fill="none"
      viewBox="0 0 985 438"
      style={{ pointerEvents: "auto" }}
      className="block overflow-visible m-0 md:mx-auto md:mt-[-110px] mb-0 px-2 md:px-12 w-full md:w-[min(100%,1082px)]
"
    >
      <g clipPath="url(#hero-animation-mask)">
        <g transform="scale(1.08)">
          <motion.g
            variants={{ hidden: { opacity: 0 }, animate: { opacity: 1 } }}
            transition={{ staggerChildren: 0.05, delayChildren: 0.3 }}
          >
            {/* 1 */}
            <motion.g
              variants={generateCircleVariants(0, 220)}
              transition={svgCircleTransition}
            >
              <g transform="scale(1.5)">
                <path
                  d="M50 50L50 303"
                  stroke="#D9F7FF"
                  style={{ stroke: "color(display-p3 0.8739 0.9653 1)" }}
                  strokeWidth="100"
                  strokeLinecap="round"
                ></path>
                <mask
                  id="mask0_4272_2676"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                >
                  <circle cx="50" cy="50" r="50" fill="#D9D9D9"></circle>
                </mask>
                <g mask="url(#mask0_4272_2676)">
                  <g>
                    <motion.g
                      style={{
                        rotate: rotate1,
                        transformOrigin: "50px 50px 0px",
                      }}
                    >
                      <rect
                        width="100"
                        height="100"
                        fill="#39D1F9"
                        style={{
                          fill: "color(display-p3 0.4196 0.8078 0.9608)",
                          fillOpacity: 1,
                        }}
                      ></rect>
                      <rect
                        width="50"
                        height="100"
                        fill="#A7E9FD"
                        style={{
                          fill: "color(display-p3 0.7098 0.9059 0.9804)",
                          fillOpacity: 1,
                        }}
                      ></rect>
                      <mask
                        id="mask1_4272_2676"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="25"
                        y="25"
                        width="50"
                        height="50"
                      >
                        <circle cx="50" cy="50" r="25" fill="#D9D9D9"></circle>
                      </mask>
                      <g mask="url(#mask1_4272_2676)">
                        <rect
                          x="25"
                          y="25"
                          width="50"
                          height="50"
                          fill="#39D1F9"
                          style={{
                            fill: "color(display-p3 0.4196 0.8078 0.9608)",
                            fillOpacity: 1,
                          }}
                        ></rect>
                        <rect
                          x="50"
                          y="25"
                          width="25"
                          height="50"
                          fill="#A7E9FD"
                          style={{
                            fill: "color(display-p3 0.7098 0.9059 0.9804)",
                            fillOpacity: 1,
                          }}
                        ></rect>
                      </g>
                    </motion.g>
                  </g>
                </g>
              </g>
            </motion.g>

            {/* 2 */}
            <motion.g
              variants={generateCircleVariants(152, 210)}
              transition={svgCircleTransition}
            >
              <g transform="scale(1.5)">
                <path
                  d="M50 50L50 303"
                  stroke="#FFF7A5"
                  style={{ stroke: "color(display-p3 1 0.969 0.6842)" }}
                  strokeWidth="100"
                  strokeLinecap="round"
                ></path>
                <mask
                  id="mask0_4272_2676"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                >
                  <circle cx="50" cy="50" r="50" fill="#D9D9D9"></circle>
                </mask>
                <g mask="url(#mask0_4272_2676)">
                  <g>
                    <motion.g
                      style={{
                        rotate: rotate2,
                        transformOrigin: "50px 50px 0px",
                      }}
                    >
                      <rect
                        width="100"
                        height="100"
                        fill="#FFB000"
                        style={{
                          fill: "color(display-p3 1 0.72 0)",
                          fillOpacity: 1,
                        }}
                      ></rect>
                      <rect
                        width="50"
                        height="100"
                        fill="#FFD400"
                        style={{
                          fill: "color(display-p3 1 0.8392 0.1922)",
                          fillOpacity: 1,
                        }}
                      ></rect>
                      <mask
                        id="mask1_4272_2676"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="25"
                        y="25"
                        width="50"
                        height="50"
                      >
                        <circle cx="50" cy="50" r="25" fill="#D9D9D9"></circle>
                      </mask>
                      <g mask="url(#mask1_4272_2676)">
                        <rect
                          x="25"
                          y="25"
                          width="50"
                          height="50"
                          fill="#FFB000"
                          style={{
                            fill: "color(display-p3 1 0.72 0)",
                            fillOpacity: 1,
                          }}
                        ></rect>
                        <rect
                          x="50"
                          y="25"
                          width="25"
                          height="50"
                          fill="#FFD400"
                          style={{
                            fill: "color(display-p3 1 0.8392 0.1922)",
                            fillOpacity: 1,
                          }}
                        ></rect>
                      </g>
                    </motion.g>
                  </g>
                </g>
              </g>
            </motion.g>

            {/* 3 */}
            <motion.g
              variants={generateCircleVariants(304, 190)}
              transition={svgCircleTransition}
            >
              <g transform="scale(1.5)">
                <path
                  d="M50 50L50 303"
                  stroke="#83EEE8"
                  style={{ stroke: "color(display-p3 0.6157 0.9216 0.9059)" }}
                  strokeWidth="100"
                  strokeLinecap="round"
                ></path>
                <mask
                  id="mask0_4272_2676"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                >
                  <circle cx="50" cy="50" r="50" fill="#D9D9D9"></circle>
                </mask>
                <g mask="url(#mask0_4272_2676)">
                  <g>
                    <motion.g
                      style={{
                        rotate: rotate3,
                        transformOrigin: "50px 50px 0px",
                      }}
                    >
                      <rect
                        width="100"
                        height="100"
                        fill="#00827B"
                        style={{
                          fill: "color(display-p3 0.121 0.5025 0.4806)",
                          fillOpacity: 1,
                        }}
                      ></rect>
                      <rect
                        width="50"
                        height="100"
                        fill="#39BEB7"
                        style={{
                          fill: "color(display-p3 0.3882 0.7333 0.7137)",
                          fillOpacity: 1,
                        }}
                      ></rect>
                      <mask
                        id="mask1_4272_2676"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="25"
                        y="25"
                        width="50"
                        height="50"
                      >
                        <circle cx="50" cy="50" r="25" fill="#D9D9D9"></circle>
                      </mask>
                      <g mask="url(#mask1_4272_2676)">
                        <rect
                          x="25"
                          y="25"
                          width="50"
                          height="50"
                          fill="#00827B"
                          style={{
                            fill: "color(display-p3 0.121 0.5025 0.4806)",
                            fillOpacity: 1,
                          }}
                        ></rect>
                        <rect
                          x="50"
                          y="25"
                          width="25"
                          height="50"
                          fill="#39BEB7"
                          style={{
                            fill: "color(display-p3 0.3882 0.7333 0.7137)",
                            fillOpacity: 1,
                          }}
                        ></rect>
                      </g>
                    </motion.g>
                  </g>
                </g>
              </g>
            </motion.g>

            {/* 4 */}
            <motion.g
              variants={generateCircleVariants(456, 170)}
              transition={svgCircleTransition}
            >
              <g transform="scale(1.5)">
                <path
                  d="M50 50L50 303"
                  stroke="#96E9FF"
                  style={{ stroke: "color(display-p3 0.6628 0.906 1)" }}
                  strokeWidth="100"
                  strokeLinecap="round"
                ></path>
                <mask
                  id="mask0_4272_2676"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                >
                  <circle cx="50" cy="50" r="50" fill="#D9D9D9"></circle>
                </mask>
                <g mask="url(#mask0_4272_2676)">
                  <g>
                    <motion.g
                      style={{
                        rotate: rotate4,
                        transformOrigin: "50px 50px 0px",
                      }}
                    >
                      <rect
                        width="100"
                        height="100"
                        fill="#008AFF"
                        style={{
                          fill: "color(display-p3 0.102 0.5333 0.9725)",
                          fillOpacity: 1,
                        }}
                      ></rect>
                      <rect
                        width="50"
                        height="100"
                        fill="#00AEFF"
                        style={{
                          fill: "color(display-p3 0.2824 0.6706 1)",
                          fillOpacity: 1,
                        }}
                      ></rect>
                      <mask
                        id="mask1_4272_2676"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="25"
                        y="25"
                        width="50"
                        height="50"
                      >
                        <circle cx="50" cy="50" r="25" fill="#D9D9D9"></circle>
                      </mask>
                      <g mask="url(#mask1_4272_2676)">
                        <rect
                          x="25"
                          y="25"
                          width="50"
                          height="50"
                          fill="#008AFF"
                          style={{
                            fill: "color(display-p3 0.102 0.5333 0.9725)",
                            fillOpacity: 1,
                          }}
                        ></rect>
                        <rect
                          x="50"
                          y="25"
                          width="25"
                          height="50"
                          fill="#00AEFF"
                          style={{
                            fill: "color(display-p3 0.2824 0.6706 1)",
                            fillOpacity: 1,
                          }}
                        ></rect>
                      </g>
                    </motion.g>
                  </g>
                </g>
              </g>
            </motion.g>

            {/* 5 */}
            <motion.g
              variants={generateCircleVariants(608, 120)}
              transition={svgCircleTransition}
            >
              <g transform="scale(1.5)">
                <path
                  d="M50 50L50 303"
                  stroke="#FFC693"
                  style={{ stroke: "color(display-p3 1.0000 0.7765 0.5765)" }}
                  strokeWidth="100"
                  strokeLinecap="round"
                ></path>
                <mask
                  id="mask0_4272_2676"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                >
                  <circle cx="50" cy="50" r="50" fill="#D9D9D9"></circle>
                </mask>
                <g mask="url(#mask0_4272_2676)">
                  <g>
                    <motion.g
                      style={{
                        rotate: rotate5,
                        transformOrigin: "50px 50px 0px",
                      }}
                    >
                      <rect
                        width="100"
                        height="100"
                        fill="#F24900"
                        style={{
                          fill: "color(display-p3 0.9490 0.2863 0.0000)",
                          fillOpacity: 1,
                        }}
                      ></rect>
                      <rect
                        width="50"
                        height="100"
                        fill="#FF8947"
                        style={{
                          fill: "color(display-p3 1.0000 0.5373 0.2784)",
                          fillOpacity: 1,
                        }}
                      ></rect>
                      <mask
                        id="mask1_4272_2676"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="25"
                        y="25"
                        width="50"
                        height="50"
                      >
                        <circle cx="50" cy="50" r="25" fill="#D9D9D9"></circle>
                      </mask>
                      <g mask="url(#mask1_4272_2676)">
                        <rect
                          x="25"
                          y="25"
                          width="50"
                          height="50"
                          fill="#F24900"
                          style={{
                            fill: "color(display-p3 0.9490 0.2863 0.0000)",
                            fillOpacity: 1,
                          }}
                        ></rect>
                        <rect
                          x="50"
                          y="25"
                          width="25"
                          height="50"
                          fill="#FF8947"
                          style={{
                            fill: "color(display-p3 1.0000 0.5373 0.2784)",
                            fillOpacity: 1,
                          }}
                        ></rect>
                      </g>
                    </motion.g>
                  </g>
                </g>
              </g>
            </motion.g>

            {/* 6 */}
            <motion.g
              variants={generateCircleVariants(760, 60)}
              transition={svgCircleTransition}
            >
              <g transform="scale(1.5)">
                <path
                  d="M50 50L50 303"
                  stroke="#E2E0FF"
                  style={{ stroke: "color(display-p3 0.8863 0.8784 1)" }}
                  strokeWidth="100"
                  strokeLinecap="round"
                ></path>
                <mask
                  id="mask0_4272_2676"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                >
                  <circle cx="50" cy="50" r="50" fill="#D9D9D9"></circle>
                </mask>
                <g mask="url(#mask0_4272_2676)">
                  <g>
                    <motion.g
                      style={{
                        rotate: rotate6,
                        transformOrigin: "50px 50px 0px",
                      }}
                    >
                      <rect
                        width="100"
                        height="100"
                        fill="#9896FF"
                        style={{
                          fill: "color(display-p3 0.5951 0.587 1)",
                          fillOpacity: 1,
                        }}
                      ></rect>
                      <rect
                        width="50"
                        height="100"
                        fill="#BDBBFF"
                        style={{
                          fill: "color(display-p3 0.7391 0.7337 1)",
                          fillOpacity: 1,
                        }}
                      ></rect>
                      <mask
                        id="mask1_4272_2676"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="25"
                        y="25"
                        width="50"
                        height="50"
                      >
                        <circle cx="50" cy="50" r="25" fill="#D9D9D9"></circle>
                      </mask>
                      <g mask="url(#mask1_4272_2676)">
                        <rect
                          x="25"
                          y="25"
                          width="50"
                          height="50"
                          fill="#9896FF"
                          style={{
                            fill: "color(display-p3 0.5951 0.587 1)",
                            fillOpacity: 1,
                          }}
                        ></rect>
                        <rect
                          x="50"
                          y="25"
                          width="25"
                          height="50"
                          fill="#BDBBFF"
                          style={{
                            fill: "color(display-p3 0.7391 0.7337 1)",
                            fillOpacity: 1,
                          }}
                        ></rect>
                      </g>
                    </motion.g>
                  </g>
                </g>
              </g>
            </motion.g>
          </motion.g>
        </g>
      </g>
      <clipPath id="hero-animation-mask">
        <rect width="1185" height="1438" x="-100" y="-1000" fill="#fff"></rect>
      </clipPath>
    </motion.svg>
  );
}

export default SvgCircles;
