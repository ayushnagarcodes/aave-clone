"use client";

import { easeSwift } from "@/_lib/utils";
import { motion } from "motion/react";

function SvgProductsApp() {
  return (
    <svg
      className={"absolute -top-16 -right-32"}
      width="256"
      height="256"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        initial={{ rotate: 0 }}
        variants={{
          svg: {
            rotate: 180,
          },
        }}
        transition={{ duration: 0.75, ease: easeSwift }}
        className="origin-[8rem_8rem]"
      >
        <circle
          mask="url(#menu1-circle-mask-2-:R1ldkm6:)"
          cx="128"
          cy="128"
          r="128"
          fill="#E2E0FF"
          style={{ fill: "color(display-p3 0.8863 0.8784 1.0000)" }}
        />
        <circle
          mask="url(#menu1-circle-mask-1-:R1ldkm6:)"
          cx="128"
          cy="128"
          r="128"
          fill="#BCBBFF"
          style={{ fill: "color(display-p3 0.7391 0.7337 1.0000)" }}
        />
      </motion.g>

      <motion.g
        initial={{ rotate: 0 }}
        variants={{
          svg: {
            rotate: -180,
          },
        }}
        transition={{ duration: 0.75, ease: easeSwift }}
        className="origin-[8rem_8rem]"
      >
        <circle
          mask="url(#menu1-circle-mask-2-:R1ldkm6:)"
          cx="128"
          cy="128"
          r="64"
          fill="#9896FF"
          style={{ fill: "color(display-p3 0.5951 0.5870 1.0000)" }}
        />
        <circle
          mask="url(#menu1-circle-mask-1-:R1ldkm6:)"
          cx="128"
          cy="128"
          r="64"
          fill="#E2E0FF"
          style={{ fill: "color(display-p3 0.8863 0.8784 1.0000)" }}
        />
      </motion.g>

      <defs>
        <mask id="menu1-circle-mask-1-:R1ldkm6:">
          <rect y="128" width="256" height="128" fill="white" />
        </mask>
        <mask id="menu1-circle-mask-2-:R1ldkm6:">
          <rect width="256" height="128" fill="white" />
        </mask>
      </defs>
    </svg>
  );
}

export default SvgProductsApp;
