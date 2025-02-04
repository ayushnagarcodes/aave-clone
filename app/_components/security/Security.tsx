import AnimatedText from "@/_components/AnimatedText";
import SecurityCard from "@/_components/security/SecurityCard";
import { useInView } from "motion/react";
import { useRef } from "react";
import SvgAudits from "./svgs/SvgAudits";
import SvgBounty from "./svgs/SvgBounty";
import SvgShortfall from "./svgs/SvgShortfall";
import Svg5Years from "./svgs/Svg5Years";
import { securityCardsData } from "@/_lib/data";

const viewportOptions = { amount: 1, once: true };

function Security() {
  const cardAuditsRef = useRef<HTMLDivElement | null>(null);
  const cardBountyRef = useRef<HTMLDivElement | null>(null);
  const cardShortfallRef = useRef<HTMLDivElement | null>(null);
  const card5YearsRef = useRef<HTMLDivElement | null>(null);

  const isCardAuditsInView = useInView(cardAuditsRef, viewportOptions);
  const isCardBountyInView = useInView(cardBountyRef, viewportOptions);
  const isCardShortfallInView = useInView(cardShortfallRef, viewportOptions);
  const isCard5YearsInView = useInView(card5YearsRef, viewportOptions);

  return (
    <section className="section-styles">
      <div className="section-inner">
        <div className="md:px-6">
          <h2>
            <AnimatedText text="Serious security." delay={0.4} />
          </h2>
          <p className="mt-3 max-w-[24em] text-lg md:text-xl font-medium leading-[135%] tracking-[-0.33px] text-[--fg-2]">
            Peace of mind by design.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:gap-y-[4.5rem] mt-[4.5rem]">
          <SecurityCard cardRef={cardAuditsRef} data={securityCardsData[0]}>
            <SvgAudits isInView={isCardAuditsInView} />
          </SecurityCard>

          <SecurityCard cardRef={cardBountyRef} data={securityCardsData[1]}>
            <SvgBounty isInView={isCardBountyInView} />
          </SecurityCard>

          <SecurityCard cardRef={cardShortfallRef} data={securityCardsData[2]}>
            <SvgShortfall isInView={isCardShortfallInView} />
          </SecurityCard>

          <SecurityCard cardRef={card5YearsRef} data={securityCardsData[3]}>
            <Svg5Years isInView={isCard5YearsInView} />
          </SecurityCard>
        </div>
      </div>
    </section>
  );
}

export default Security;
