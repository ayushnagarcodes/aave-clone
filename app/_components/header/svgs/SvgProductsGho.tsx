"use client";

import { motion } from "motion/react";

const startTransition = { duration: 0.5, ease: "backOut" };
const endTransition = { duration: 0.225, ease: "easeOut" };

function SvgProductsGho() {
  return (
    <svg
      style={{ position: "absolute", top: "-27px", right: "-17px" }}
      width="138"
      height="179"
      viewBox="0 0 138 179"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        initial={{ y: 0 }}
        variants={{
          svg: {
            y: -10,
            transition: { ...startTransition, delay: 0.08 },
          },
        }}
        transition={{ ...endTransition, delay: 0 }}
        cx="15"
        cy="76"
        r="15"
        fill="#28D358"
        style={{
          fill: "color(display-p3 0.1585 0.8276 0.3459)",
        }}
        className="origin-[15px_76px]"
      />

      <motion.circle
        initial={{ y: 0 }}
        variants={{
          svg: { y: -14, transition: { ...startTransition, delay: 0.04 } },
        }}
        transition={endTransition}
        cx="107"
        cy="31"
        r="31"
        fill="#44DD6F"
        style={{
          fill: "color(display-p3 0.2655 0.8673 0.434)",
        }}
        className="origin-[107px_31px]"
      />

      <motion.circle
        initial={{ y: 0 }}
        variants={{
          svg: { y: -16, transition: startTransition },
        }}
        transition={endTransition}
        cx="89"
        cy="130"
        r="49"
        fill="#62E687"
        style={{
          fill: "color(display-p3 0.3832 0.9005 0.528)",
        }}
        className={"origin-[89px_130px]"}
      />
    </svg>
  );
}

export default SvgProductsGho;
