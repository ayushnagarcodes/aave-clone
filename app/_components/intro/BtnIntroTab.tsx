import { easeSwift } from "@/_lib/utils";
import type { IntroTabType } from "@/_types/types";
import { motion } from "motion/react";

interface BtnIntroTabProps {
  currentActiveTab: IntroTabType;
  setActiveIntroTab: (value: IntroTabType) => void;
  activeState: IntroTabType;
  description: string;
}

function BtnIntroTab({
  currentActiveTab,
  setActiveIntroTab,
  activeState,
  description,
}: BtnIntroTabProps) {
  const isActive = currentActiveTab === activeState;

  return (
    <button
      className={`${
        isActive ? "text-[#008aff]" : "text-[--fg-3]"
      } flex flex-col gap-4 h-fit cursor-pointer transition-colors duration-200 ease-in-out text-start`}
      onClick={() => setActiveIntroTab(activeState)}
    >
      <span
        className={`block rounded-[3px] w-full h-[3px] ${
          isActive ? "bg-current" : "bg-[--border-1]"
        } transition-colors duration-200 ease-in-out`}
      ></span>

      <span className="block text-2xl font-semibold leading-[135%] tracking-[-0.47px] text-inherit">
        {activeState}
      </span>

      <motion.span
        initial={false}
        animate={
          isActive
            ? {
                opacity: 1,
                y: 0,
                display: "block",
                transition: { delay: 0.6, duration: 0.5, ease: easeSwift },
              }
            : {
                opacity: 0,
                y: -6,
                display: "none",
                transition: { duration: 0 },
              }
        }
        className="leading-[150%] tracking-[-0.18px] text-[--fg-2]"
      >
        {description}
      </motion.span>
    </button>
  );
}

export default BtnIntroTab;
