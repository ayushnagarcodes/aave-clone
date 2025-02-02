import { motion } from "motion/react";

const transition = {
  duration: 2,
  delay: 2,
  repeat: Infinity,
  repeatDelay: 5.35,
};

const backRect = {
  initialPath:
    "M6 18.7981V8.95194C6 7.80477 6.78074 6.80481 7.89366 6.52659L22.8937 2.77658C24.4715 2.38212 26 3.57551 26 5.20194V15.0481C26 16.1952 25.2193 17.1952 24.1063 17.4734L9.10634 21.2234C7.52847 21.6179 6 20.4245 6 18.7981Z",
  finalPath:
    "M6 21.5V11.5C6 10.1193 7.11929 9 8.5 9L23.5 9C24.8807 9 26 10.1193 26 11.5V21.5C26 22.8807 24.8807 24 23.5 24L8.5 24C7.11929 24 6 22.8807 6 21.5",
};

const frontRect = {
  initialPath:
    "M26 25.7966V15.9505C26 14.8033 25.2193 13.8033 24.1063 13.5251L9.10634 9.77509C7.52847 9.38063 6 10.574 6 12.2004V22.0466C6 23.1937 6.78074 24.1937 7.89366 24.4719L22.8937 28.2219C24.4715 28.6164 26 27.423 26 25.7966Z",
  finalPath:
    "M26 21.5V11.5C26 10.1193 24.8807 9 23.5 9L8.5 9C7.11929 9 6 10.1193 6 11.5V21.5C6 22.8807 7.11929 24 8.5 24L23.5 24C24.8807 24 26 22.8807 26 21.5Z",
};

const mask = {
  initialPath:
    "M29 25.798V15.9519C29 13.4282 27.2824 11.2282 24.8339 10.6161L9.83395 6.86614C6.36264 5.99832 3 8.62379 3 12.2019V22.048C3 24.5718 4.71763 26.7717 7.16605 27.3838L22.1661 31.1338C25.6374 32.0017 29 29.3762 29 25.798Z",
  finalPath:
    "M29 21.5V11.5C29 8.46243 26.5376 6 23.5 6L8.5 6C5.46243 6 3 8.46243 3 11.5V21.5C3 24.5376 5.46243 27 8.5 27L23.5 27C26.5376 27 29 24.5376 29 21.5Z",
};

function IconNonCustodial() {
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
      <motion.g
        variants={{ animate: { rotate: [0, -12, 8, 0, 0, 12, -6, 0] } }}
        initial={false}
        transition={{
          ...transition,
          times: [0, 0.075, 0.15, 0.225, 0.775, 0.85, 0.925, 1],
        }}
        style={{ transformOrigin: "6px 16px 0px" }}
      >
        <rect width="32" height="32"></rect>

        {/* Back rectangle */}
        <motion.path
          variants={{
            animate: {
              d: [
                backRect.initialPath,
                backRect.finalPath,
                backRect.finalPath,
                backRect.initialPath,
              ],
            },
          }}
          initial={false}
          transition={{
            ...transition,
            times: [0.1, 0.225, 0.9, 1],
          }}
          mask="url(#noncustodial-mask)"
          fill="#6BCEF5"
          style={{ fill: "color(display-p3 0.4196 0.8078 0.9608)" }}
        ></motion.path>

        {/* Front rectangle */}
        <motion.path
          variants={{
            animate: {
              d: [
                frontRect.initialPath,
                frontRect.finalPath,
                frontRect.finalPath,
                frontRect.initialPath,
              ],
            },
          }}
          initial={false}
          transition={{
            ...transition,
            times: [0.1, 0.225, 0.9, 1],
          }}
          fill="#B5E7FA"
          style={{ fill: "color(display-p3 0.7098 0.9059 0.9804)" }}
        ></motion.path>

        <mask id="noncustodial-mask" width="32" height="32">
          <rect width="32" height="32" fill="white"></rect>
          <motion.path
            variants={{
              animate: {
                d: [mask.initialPath, mask.finalPath, mask.initialPath],
              },
            }}
            initial={false}
            transition={{
              ...transition,
              times: [0.1, 0.225, 0.9, 1],
            }}
            fillRule="evenodd"
            clipRule="evenodd"
            fill="black"
          ></motion.path>
        </mask>
      </motion.g>
    </motion.svg>
  );
}

export default IconNonCustodial;
