import { motion } from "motion/react";
import type { ResourcesLinkType } from "@/_types/types";
import { easeSwift } from "@/_lib/utils";

interface SvgResourcesProps {
  hoveredLink: ResourcesLinkType;
}

const ease = easeSwift;

const bgRectangleFill = {
  Brand: "rgba(152, 150, 255, 1)",
  FAQ: "rgba(31, 128, 123, 1)",
  "Help & Support": "rgba(242, 73, 0, 1)",
  Governance: "rgba(28, 72, 134, 1)",
};

function SvgResources({ hoveredLink }: SvgResourcesProps) {
  return (
    <svg
      className="block rounded-md overflow-clip"
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      viewBox="0 0 256 256"
    >
      {/* Background rectangle */}
      <motion.rect
        rx="8"
        width="256"
        height="256"
        animate={{
          fill: bgRectangleFill[hoveredLink],
          transition: { ease, duration: 0.5 },
        }}
      ></motion.rect>

      {/*************/}
      {/* For Brand */}
      {/*************/}
      <motion.path
        d="M128 100C49.5757 100 -13.9999 36.4244 -13.9999 -42L270 -42C270 36.4244 206.424 100 128 100Z"
        fill="#BCBBFF"
        style={{
          fill: "color(display-p3 0.7391 0.7337 1)",
          transformOrigin: "128px 29px 0px",
        }}
        initial={false}
        animate={{ y: hoveredLink === "Brand" ? 0 : -100 }}
        transition={{ ease, duration: 0.5 }}
      ></motion.path>
      <motion.path
        d="M128 29C88.7878 29 57 -2.78779 57 -42L199 -42C199 -2.78777 167.212 29 128 29Z"
        fill="#9896FF"
        style={{
          fill: "color(display-p3 0.5961 0.5882 1)",
          transformOrigin: "128px -6.5px 0px",
        }}
        initial={false}
        animate={{
          y: hoveredLink === "Brand" ? 0 : -100,
        }}
        transition={{
          delay: hoveredLink === "Brand" ? 0.1 : 0,
          ease,
          duration: 0.6,
        }}
      ></motion.path>
      <motion.path
        d="M128 156C206.424 156 270 219.576 270 298L-14 298C-14 219.576 49.5756 156 128 156Z"
        fill="#E2E0FF"
        style={{
          fill: "color(display-p3 0.8863 0.8784 1)",
          transformOrigin: "128px 227px 0px",
        }}
        initial={false}
        animate={{ y: hoveredLink === "Brand" ? 0 : 100 }}
        transition={{ ease, duration: 0.5 }}
      ></motion.path>
      <motion.path
        d="M128 227C167.212 227 199 258.788 199 298L57 298C57 258.788 88.7878 227 128 227Z"
        fill="#BCBBFF"
        style={{
          fill: "color(display-p3 0.7391 0.7337 1)",
          transformOrigin: "128px 262.5px 0px",
        }}
        initial={false}
        animate={{
          y: hoveredLink === "Brand" ? 0 : 100,
        }}
        transition={{
          delay: hoveredLink === "Brand" ? 0.1 : 0,
          ease,
          duration: 0.6,
        }}
      ></motion.path>

      {/***********/}
      {/* For FAQ */}
      {/***********/}
      <motion.g
        style={{
          transformOrigin: "240px -26px",
        }}
        initial={false}
        animate={{
          x: hoveredLink === "FAQ" ? 0 : 156,
          y: hoveredLink === "FAQ" ? 0 : -78,
        }}
        transition={{
          ease,
          duration: 0.7,
        }}
      >
        <motion.g
          style={{
            transformOrigin: "240px -26px",
          }}
          animate={{
            rotate: hoveredLink === "FAQ" ? 0 : 45,
          }}
          transition={{
            ease,
            duration: 0.7,
          }}
        >
          <path
            d="M361.244 44.0013C322.584 110.962 236.961 133.905 170 95.2448L310 -147.242C376.961 -108.582 399.904 -22.9596 361.244 44.0013Z"
            fill="#9DEBE7"
            style={{ fill: "color(display-p3 0.6157 0.9216 0.9059)" }}
          ></path>
          <path
            d="M118.756 -95.9987C157.416 -162.96 243.038 -185.902 309.999 -147.242L169.999 95.2448C103.038 56.5848 80.096 -29.0378 118.756 -95.9987Z"
            fill="#63BBB6"
            style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
          ></path>
        </motion.g>
        <motion.g
          style={{
            transformOrigin: "240px -26px 0px",
          }}
          animate={{
            rotate: hoveredLink === "FAQ" ? 0 : -90,
          }}
          transition={{
            ease,
            duration: 0.7,
          }}
        >
          <path
            d="M300.622 9.00069C281.292 42.4812 238.48 53.9524 205 34.6224L275 -86.6211C308.481 -67.2911 319.952 -24.4798 300.622 9.00069Z"
            fill="#63BBB6"
            style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
          ></path>
          <path
            d="M179.377 -60.9993C198.707 -94.4798 241.518 -105.951 274.999 -86.6211L204.999 34.6224C171.518 15.2925 160.047 -27.5189 179.377 -60.9993Z"
            fill="#9DEBE7"
            style={{ fill: "color(display-p3 0.6157 0.9216 0.9059)" }}
          ></path>
        </motion.g>
      </motion.g>
      <motion.g
        style={{
          transformOrigin: "16px 282px 0px",
        }}
        initial={false}
        animate={{
          x: hoveredLink === "FAQ" ? 0 : -156,
          y: hoveredLink === "FAQ" ? 0 : 78,
        }}
        transition={{
          ease,
          duration: 0.7,
        }}
      >
        <motion.g
          style={{
            transformOrigin: "16px 282px 0px",
          }}
          animate={{
            rotate: hoveredLink === "FAQ" ? 0 : 45,
          }}
          transition={{
            ease,
            duration: 0.7,
          }}
        >
          <path
            d="M-105.242 211.997C-143.902 278.958 -120.96 364.581 -53.9986 403.241L86.0013 160.754C19.0404 122.094 -66.5823 145.036 -105.242 211.997Z"
            fill="#9DEBE7"
            style={{ fill: "color(display-p3 0.6157 0.9216 0.9059)" }}
          ></path>
          <path
            d="M137.246 351.997C175.905 285.036 152.963 199.414 86.002 160.754L-53.998 403.241C12.963 441.901 98.5856 418.958 137.246 351.997Z"
            fill="#63BBB6"
            style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
          ></path>
        </motion.g>
        <motion.g
          style={{
            transformOrigin: "16px 282px 0px",
          }}
          animate={{
            rotate: hoveredLink === "FAQ" ? 0 : -90,
          }}
          transition={{
            ease,
            duration: 0.7,
          }}
        >
          <path
            d="M-44.6211 246.997C-63.9511 280.477 -52.4798 323.289 -18.9993 342.619L51.0007 221.375C17.5202 202.045 -25.2911 213.516 -44.6211 246.997Z"
            fill="#63BBB6"
            style={{ fill: "color(display-p3 0.3882 0.7333 0.7137)" }}
          ></path>
          <path
            d="M76.6238 316.997C95.9537 283.516 84.4824 240.705 51.002 221.375L-18.998 342.619C14.4825 361.949 57.2938 350.477 76.6238 316.997Z"
            fill="#9DEBE7"
            style={{ fill: "color(display-p3 0.6157 0.9216 0.9059)" }}
          ></path>
        </motion.g>
      </motion.g>

      {/*********************/}
      {/* For Help & Support */}
      {/*********************/}
      <motion.g
        style={{
          transformOrigin: "128px 128px 0px",
        }}
        opacity="0"
        initial={false}
        animate={{
          opacity: hoveredLink === "Help & Support" ? 1 : 0,
          scale: hoveredLink === "Help & Support" ? 1 : 0.5,
          rotate: hoveredLink === "Help & Support" ? 0 : -135,
        }}
        transition={{ duration: 0.5, ease }}
      >
        <path
          d="M128 214C80.5035 214 42 175.496 42 128L214 128C214 175.497 175.496 214 128 214Z"
          fill="#FF8947"
          style={{ fill: "color(display-p3 1.0000 0.5373 0.2784)" }}
        ></path>
        <path
          d="M128 42C80.5035 42 42 80.5035 42 128L214 128C214 80.5035 175.496 42 128 42Z"
          fill="#FFD7B3"
          style={{ fill: "color(display-p3 1.0000 0.8429 0.7023)" }}
        ></path>
      </motion.g>

      {/* For Governance */}
      <motion.g
        style={{
          transformOrigin: "127px 168px 0px",
        }}
        initial={false}
        animate={{ y: hoveredLink === "Governance" ? 0 : 216 }}
        transition={{ ease, duration: 0.5 }}
      >
        <motion.g
          style={{
            transformOrigin: "127px 104px 0px",
          }}
          animate={{ rotate: hoveredLink === "Governance" ? 0 : -180 }}
          transition={{ ease, duration: 0.5 }}
        >
          <path
            d="M127 40C91.6538 40 63 68.6538 63 104C63 139.346 91.6538 168 127 168V40Z"
            fill="#6188C0"
            style={{ fill: "color(display-p3 0.3804 0.5333 0.7529)" }}
          ></path>
          <path
            d="M127 40C162.346 40 191 68.6538 191 104C191 139.346 162.346 168 127 168V40Z"
            fill="#C6DFFF"
            style={{ fill: "color(display-p3 0.7765 0.8745 1.0000)" }}
          ></path>
        </motion.g>
        <motion.g
          style={{
            transformOrigin: "127px 232px 0px",
          }}
          animate={{ rotate: hoveredLink === "Governance" ? 0 : 180 }}
          transition={{ ease, duration: 0.6 }}
        >
          <path
            d="M127 168C162.346 168 191 196.654 191 232C191 267.346 162.346 296 127 296V168Z"
            fill="#6188C0"
            style={{ fill: "color(display-p3 0.3804 0.5333 0.7529)" }}
          ></path>
          <path
            d="M127 168C91.6538 168 63 196.654 63 232C63 267.346 91.6538 296 127 296V168Z"
            fill="#C6DFFF"
            style={{ fill: "color(display-p3 0.7765 0.8745 1.0000)" }}
          ></path>
        </motion.g>
      </motion.g>
      <motion.g
        style={{
          transformOrigin: "127.5px 191px 0px",
        }}
        initial={false}
        animate={{ y: hoveredLink === "Governance" ? 0 : 192 }}
        transition={{
          ease,
          duration: 0.6,
          delay: hoveredLink === "Governance" ? 0.1 : 0,
        }}
      >
        <circle
          cx="255"
          cy="255"
          r="64"
          fill="#C6DFFF"
          style={{ fill: "color(display-p3 0.7765 0.8745 1.0000)" }}
        ></circle>
        <circle
          cx="255"
          cy="127"
          r="64"
          fill="#6188C0"
          style={{ fill: "color(display-p3 0.3804 0.5333 0.7529)" }}
        ></circle>
        <circle
          cy="255"
          r="64"
          fill="#6188C0"
          style={{ fill: "color(display-p3 0.3804 0.5333 0.7529)" }}
        ></circle>
        <circle
          cy="127"
          r="64"
          fill="#C6DFFF"
          style={{ fill: "color(display-p3 0.7765 0.8745 1.0000)" }}
        ></circle>
      </motion.g>
    </svg>
  );
}

export default SvgResources;
