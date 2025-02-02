import { useRef } from "react";
import { useInView } from "motion/react";
import { featureCardsData, featureRowsData } from "@/_lib/data";
import AnimatedHeading from "@/_components/AnimatedHeading";
import FeatureCard from "@/_components/features/FeatureCard";
import SvgSwap from "@/_components/features/svgs/SvgSwap";
import SvgStake from "@/_components/features/svgs/SvgStake";
import SvgHealthFactor from "@/_components/features/svgs/SvgHealthFactor";
import SvgMultiNetwork from "@/_components/features/svgs/SvgMultiNetwork";
import FeatureRow from "@/_components/features/FeatureRow";
import IconNonCustodial from "@/_components/features/svgs/IconNonCustodial";
import IconTransparent from "@/_components/features/svgs/IconTransparent";
import IconGoverned from "@/_components/features/svgs/IconGoverned";
import IconComposability from "@/_components/features/svgs/IconComposability";

const viewportOptions = { amount: 1, once: true };

function Features() {
  const swapCardRef = useRef(null);
  const stakeCardRef = useRef(null);
  const healthFactorCardRef = useRef(null);
  const multiNetworkCardRef = useRef(null);

  const isSwapCardInView = useInView(swapCardRef, viewportOptions);
  const isStakeCardInView = useInView(stakeCardRef, viewportOptions);
  const isHealthFactorCardInView = useInView(
    healthFactorCardRef,
    viewportOptions
  );
  const isMultiNetworkCardInView = useInView(
    multiNetworkCardRef,
    viewportOptions
  );

  return (
    <section className="section-styles section-border-b">
      <div className="section-inner">
        <AnimatedHeading
          text="DeFi, unlocked."
          level={2}
          delay={0.4}
          className="md:px-6"
        />

        <div className="grid grid-cols-1 grid-rows-[repeat(4,18.75rem)] md:grid-cols-2 md:grid-rows-[18.75rem_18.75rem] gap-y-12 gap-x-10 mt-12">
          <FeatureCard ref={swapCardRef} data={featureCardsData[0]}>
            <SvgSwap isInView={isSwapCardInView} />
          </FeatureCard>

          <FeatureCard ref={stakeCardRef} data={featureCardsData[1]}>
            <SvgStake isInView={isStakeCardInView} />
          </FeatureCard>

          <FeatureCard ref={healthFactorCardRef} data={featureCardsData[2]}>
            <SvgHealthFactor isInView={isHealthFactorCardInView} />
          </FeatureCard>

          <FeatureCard ref={multiNetworkCardRef} data={featureCardsData[3]}>
            <SvgMultiNetwork isInView={isMultiNetworkCardInView} />
          </FeatureCard>
        </div>

        <div className="mt-12 md:block flex flex-col gap-4">
          <FeatureRow data={featureRowsData[0]}>
            <IconNonCustodial />
          </FeatureRow>

          <FeatureRow data={featureRowsData[1]}>
            <IconTransparent />
          </FeatureRow>

          <FeatureRow data={featureRowsData[2]}>
            <IconGoverned />
          </FeatureRow>

          <FeatureRow data={featureRowsData[3]}>
            <IconComposability />
          </FeatureRow>
        </div>
      </div>
    </section>
  );
}

export default Features;
