import type { BuilderType } from "@/_types/types";
import { motion } from "motion/react";
import Link from "next/link";
import IconArrowRightBig from "@/_assets/svgs/icons/arrow-right-big.svg";
import { easeSwift } from "@/_lib/utils";

interface BuilderLogoContainerProps {
  builder: BuilderType;
  isInView: boolean;
}

const containerVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.75 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      bounce: 200,
      damping: 0,
      ease: "backOut",
      delay: 0.15 + delay * 0.075,
    },
  }),
  hover: {},
};

const transition = { ease: easeSwift };

const textContainerVariants = {
  hidden: { opacity: 0, y: 10 },
  hover: { opacity: 1, y: 0 },
};

const logoContainerVariants = {
  hidden: { scale: 1 },
  hover: { scale: 1.05 },
};

function BuilderLogoContainer({
  builder,
  isInView,
}: BuilderLogoContainerProps) {
  return (
    <motion.div
      variants={containerVariants}
      custom={builder.row - 1}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      className={`${builder.row === 3 ? "xs:block hidden" : ""}`}
    >
      <Link href="/" className="flex items-center justify-center relative">
        <motion.div
          variants={textContainerVariants}
          transition={transition}
          className="flex justify-center items-center gap-x-1.5 absolute -top-14 z-[1] py-3 px-4 border border-black rounded-full min-w-max bg-[--fg-1] shadow-[0_2px_3px_0_rgba(0,0,0,0.08),0_6px_16px_0_rgba(0,0,0,0.1)] whitespace-nowrap text-sm font-medium tracking-[-.18px] text-white pointer-events-none"
        >
          <span>{builder.name}</span>
          <IconArrowRightBig />
        </motion.div>

        <motion.div
          variants={logoContainerVariants}
          transition={transition}
          className="overflow-hidden rounded-2xl flex items-center justify-center bg-[--bg-4] w-full h-full aspect-square"
        >
          <builder.Logo className="h-full w-full" />
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default BuilderLogoContainer;
