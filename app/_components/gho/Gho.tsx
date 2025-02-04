import AnimatedText from "@/_components/AnimatedText";
import LinkMore from "@/_components/LinkMore";
import SvgGho from "@/_components/gho/svgs/SvgGho";
import SvgGaugeMeter from "@/_components/gho/svgs/SvgGaugeMeter";
import SvgGrowthCurve from "@/_components/gho/svgs/SvgGrowthCurve";
import GhoCard from "@/_components/gho/GhoCard";
import { useRef } from "react";
import { useInView } from "motion/react";

const viewportOptions = { amount: 1, once: true };

function Gho() {
  const cardGhoRef = useRef<HTMLDivElement>(null);
  const cardCollateralRef = useRef<HTMLDivElement>(null);
  const cardMintedRef = useRef<HTMLDivElement>(null);

  const isCardGhoInView = useInView(cardGhoRef, { amount: 0.5, once: true });
  const isCardCollateralInView = useInView(cardCollateralRef, viewportOptions);
  const isCardMintedInView = useInView(cardMintedRef, viewportOptions);

  return (
    <section className="section-styles">
      <div className="section-inner">
        <div className="md:px-6">
          <h2>
            <AnimatedText text="GHO" delay={0.4} />
          </h2>
          <p className="mt-3 max-w-[24em] text-lg md:text-xl font-medium leading-[135%] tracking-[-0.33px] text-[--fg-2]">
            GHO is the only decentralised, overcollateralised stablecoin native
            to the Aave Protocol.
          </p>
          <LinkMore text="Learn More" />
        </div>

        <div className="mt-[4.5rem] grid md:grid-cols-[10fr_6fr] md:grid-rows-2 gap-6">
          <div
            ref={cardGhoRef}
            className="row-span-2 relative overflow-hidden rounded-2xl bg-[--bg-5]"
          >
            <SvgGho isInView={isCardGhoInView} />
          </div>

          <GhoCard
            cardRef={cardCollateralRef}
            isCardInView={isCardCollateralInView}
            title="Collateralisation"
            duration="30 Day Avg"
            value={245}
            initialValue={50}
            valueSymbol="%"
          >
            <SvgGaugeMeter isInView={isCardCollateralInView} />
          </GhoCard>

          <GhoCard
            cardRef={cardMintedRef}
            isCardInView={isCardMintedInView}
            title="GHO Minted"
            duration="1 Yr"
            value={139_956_260}
            initialValue={40_000_000}
            valueSymbol="+"
          >
            <SvgGrowthCurve isInView={isCardMintedInView} />
          </GhoCard>
        </div>
      </div>
    </section>
  );
}

export default Gho;
