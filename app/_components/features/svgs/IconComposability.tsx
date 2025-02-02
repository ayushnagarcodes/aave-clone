import { motion } from "motion/react";

const transition = {
  ease: "easeInOut",
  duration: 1,
  delay: 7.85,
  repeat: Infinity,
  repeatDelay: 6.35,
};

function IconComposability() {
  return (
    <motion.svg
      variants={{ initial: {}, animate: {} }}
      initial="initial"
      animate="animate"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      {/* Left square */}
      <motion.rect
        variants={{
          initial: {
            height: 18,
            width: 18,
            rotate: 45,
            x: 0,
            opacity: 1,
          },
          animate: {
            height: [18, 14],
            width: [18, 14],
            rotate: [45, 135],
            x: [0, -14],
            opacity: [1, 0],
          },
        }}
        transition={transition}
        x="3"
        y="7"
        rx="4"
        fill="#1F807B"
        fillOpacity="0.4"
        style={{
          fill: "color(display-p3 0.121 0.5025 0.4806)",
          transformOrigin: "12px 16px 0px",
        }}
      ></motion.rect>

      {/* Center square - outline */}
      <motion.rect
        variants={{
          initial: {
            height: 20,
            width: 20,
            rotate: 45,
            x: 0,
            fillOpacity: 1,
          },
          animate: {
            height: [20, 24],
            width: [20, 24],
            rotate: [45, 135],
            x: [0, -8],
            fillOpacity: [1, 0.4],
          },
        }}
        transition={transition}
        x="13"
        y="6"
        rx="5"
        fill="#F7F6F6"
        style={{
          fill: "color(display-p3 0.99 0.99 0.99)",
          transformOrigin: "23px 16px 0px",
        }}
      ></motion.rect>

      {/* Center square */}
      <motion.rect
        variants={{
          initial: {
            height: 14,
            width: 14,
            rotate: 45,
            x: 0,
            fillOpacity: 1,
            rx: 3,
          },
          animate: {
            height: [14, 18],
            width: [14, 18],
            rotate: [45, 135],
            x: [0, -8],
            fillOpacity: [1, 0.4],
            rx: [3, 4],
          },
        }}
        transition={transition}
        x="16"
        y="9"
        fill="#1F807B"
        style={{
          fill: "color(display-p3 0.121 0.5025 0.4806)",
          transformOrigin: "23px 16px 0px",
        }}
      ></motion.rect>

      {/* Right square - outline */}
      <motion.rect
        variants={{
          initial: { scale: 0, rotate: 45, x: 14 },
          animate: {
            scale: [0, 1],
            rotate: [45, 135],
            x: [14, 0],
          },
        }}
        transition={transition}
        x="13"
        y="6"
        width="20"
        height="20"
        rx="5"
        fill="#F7F6F6"
        style={{
          fill: "color(display-p3 0.99 0.99 0.99)",
          transformOrigin: "23px 16px 0px",
        }}
      ></motion.rect>

      {/* Right square */}
      <motion.rect
        variants={{
          initial: { scale: 0, rotate: 45, x: 14 },
          animate: {
            scale: [0, 1],
            rotate: [45, 135],
            x: [14, 0],
          },
        }}
        transition={transition}
        x="16"
        y="9"
        width="14"
        height="14"
        rx="3"
        fill="#1F807B"
        style={{
          fill: "color(display-p3 0.121 0.5025 0.4806)",
          transformOrigin: "23px 16px 0px",
        }}
      ></motion.rect>
    </motion.svg>
  );
}

export default IconComposability;
