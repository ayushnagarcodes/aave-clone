import AnimatedHeading from "@/_components/AnimatedHeading";
import SvgIntro from "@/_components/intro/svgs/SvgIntro";
import type { IntroTabType } from "@/_types/types";
import { useState } from "react";
import BtnIntroTab from "@/_components/intro/BtnIntroTab";
import { motion } from "motion/react";

function Intro() {
  const [activeIntroTab, setActiveIntroTab] = useState<IntroTabType>("Supply");

  return (
    <section className="section-styles section-border-b !pt-12 md:!pt-[9.375rem]">
      <div className="section-inner">
        <AnimatedHeading level={2} text="Meet Aave." className="text-center" />

        <p className="mt-3 text-center text-lg md:text-xl font-medium !leading-[135%] tracking-[-0.33px] text-[--fg-2]">
          Earn interest and borrow assets.
        </p>

        <SvgIntro activeIntroTab={activeIntroTab} />

        <div className="overflow-clip mt-12 min-h-[92px]">
          <motion.div
            style={{
              gridTemplateColumns:
                activeIntroTab === "Supply" ? "11fr 4fr" : "4fr 11fr",
            }}
            className="grid gap-12 md:px-6 px-0 transition-[grid-template-columns] duration-300 ease-out"
          >
            <BtnIntroTab
              currentActiveTab={activeIntroTab}
              setActiveIntroTab={setActiveIntroTab}
              activeState="Supply"
              description="Earn interest by supplying assets to liquidity pools."
            />

            <BtnIntroTab
              currentActiveTab={activeIntroTab}
              setActiveIntroTab={setActiveIntroTab}
              activeState="Borrow"
              description="Borrow against your collateral from across multiple networks and assets."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
