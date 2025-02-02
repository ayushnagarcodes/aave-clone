import { motion } from "motion/react";

const transition = {
  duration: 1,
  delay: 6.35,
  repeat: Infinity,
  repeatDelay: 6.35,
};

function IconGoverned() {
  return (
    <motion.svg
      variants={{ animate: {} }}
      animate="animate"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      {/* Roof */}
      <motion.path
        variants={{
          animate: { y: [0, 2, -2, -4, 0, 2, 0] },
        }}
        initial={false}
        transition={transition}
        d="M13.551 4.24983C14.823 3.4813 16.4161 3.4813 17.6881 4.24983L26.56 9.61025C28.7267 10.9194 27.7986 14.25 25.2671 14.25H5.97197C3.44046 14.25 2.51241 10.9194 4.67912 9.61025L13.551 4.24983Z"
        fill="color(display-p3 0.1098 0.2824 0.5255)"
        style={{
          transformOrigin: "15.6195px 8.96172px 0px",
        }}
      ></motion.path>

      {/* Left pillar */}
      <motion.rect
        variants={{
          animate: {
            height: [11, 9, 13, 11, 11, 9, 11],
            y: [0, 2, -2, 0, 0, 2, 0],
          },
        }}
        initial={false}
        transition={transition}
        x="5"
        y="17"
        width="5"
        rx="2"
        fill="color(display-p3 0.3804 0.5333 0.7529)"
        style={{ transformOrigin: "7.5px 22.5px 0px" }}
      ></motion.rect>

      {/* Center pillar */}
      <motion.rect
        variants={{
          animate: {
            height: [11, 9, 13, 11, 11, 9, 11],
            y: [0, 2, -2, 0, 0, 2, 0],
          },
        }}
        initial={false}
        transition={transition}
        x="13"
        y="17"
        width="5"
        rx="2"
        fill="color(display-p3 0.3804 0.5333 0.7529)"
        style={{ transformOrigin: "15.5px 22.5px 0px" }}
      ></motion.rect>

      {/* Right pillar */}
      <motion.rect
        variants={{
          animate: {
            height: [11, 9, 13, 11, 11, 9, 11],
            y: [0, 2, -2, 0, 0, 2, 0],
          },
        }}
        initial={false}
        transition={transition}
        x="21"
        y="17"
        width="5"
        rx="2"
        fill="color(display-p3 0.3804 0.5333 0.7529)"
        style={{ transformOrigin: "23.5px 22.5px 0px" }}
      ></motion.rect>
    </motion.svg>
  );
}

export default IconGoverned;
