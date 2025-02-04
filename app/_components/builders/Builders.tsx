import { buildersData } from "@/_lib/data";
import AnimatedText from "@/_components/AnimatedText";
import SvgLogoBig from "@/_components/builders/svgs/SvgLogoBig";
import BuilderLogoContainer from "@/_components/builders/BuilderLogoContainer";
import { useRef } from "react";
import { useInView } from "motion/react";

function Builders() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isContainerInView = useInView(containerRef, {
    amount: 0.5,
    once: true,
  });

  return (
    <section className="section-styles">
      <div className="section-inner">
        <div className="md:px-6">
          <h2>
            <AnimatedText text="Aave everywhere." delay={0.4} />
          </h2>
          <p className="mt-3 text-lg md:text-xl font-medium leading-[135%] tracking-[-0.33px] text-[--fg-2]">
            Join Aave’s growing constellation of builders.
          </p>
        </div>

        <div
          ref={containerRef}
          className="mt-[4.5rem] grid xs:grid-cols-3 gap-[9px]"
        >
          <div className="grid grid-cols-3 gap-[9px]">
            {buildersData.group1.map((builder) => (
              <BuilderLogoContainer
                key={builder.id}
                builder={builder}
                isInView={isContainerInView}
              />
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl flex items-center justify-center relative bg-[#9896FF]">
            <SvgLogoBig isInView={isContainerInView} />
          </div>

          <div className="grid grid-cols-3 gap-[9px]">
            {buildersData.group2.map((builder) => (
              <BuilderLogoContainer
                key={builder.id}
                builder={builder}
                isInView={isContainerInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Builders;
