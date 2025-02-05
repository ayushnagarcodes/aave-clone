import type { FaqType } from "@/_types/types";
import SvgPlus from "@/_components/faq/svgs/SvgPlus";
import { motion } from "motion/react";
import { easeSwift } from "@/_lib/utils";

interface FaqProps {
  data: FaqType;
  activeFaq: number | null;
  onFaqClick: (id: number) => void;
}

const faqContainerVariants = {
  inactive: {
    height: 0,
  },
  active: {
    height: "auto",
    transition: { ease: easeSwift, duration: 0.35 },
  },
};

const answerVariants = {
  inactive: { opacity: 0 },
  active: { opacity: 1, transition: { delay: 0.15, duration: 0.2 } },
};

function Faq({ data, activeFaq, onFaqClick }: FaqProps) {
  return (
    <motion.div
      variants={{
        inactive: {},
        active: {},
      }}
      initial="inactive"
      animate={activeFaq === data.id ? "active" : "inactive"}
      className="rounded-xl pb-1.5 bg-[--bg-5] mb-2 last:mb-0"
      onClick={() => onFaqClick(data.id)}
    >
      <button className="flex justify-between items-center gap-2 relative p-[10px_8px_4px_24px] w-full bg-none cursor-pointer appearance-none">
        <h3 className="text-left font-sans md:text-lg font-medium leading-[135%] tracking-[-0.33px] text-[--fg-1]">
          {data.question}
        </h3>
        <SvgPlus />
      </button>

      <motion.div variants={faqContainerVariants} className="overflow-hidden">
        <motion.div
          variants={answerVariants}
          className="pr-2 pb-4 pl-6 w-[calc(100%-60px)] leading-[150%] tracking-[-0.18px] text-[--fg-2]"
        >
          {data.answer}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Faq;
