import AnimatedText from "@/_components/AnimatedText";
import IconArrowRightMedium from "@/_assets/svgs/icons/arrow-right-medium.svg";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import NumberCounter from "@/_components/NumberCounter";
import { easeSwift } from "@/_lib/utils";
import SvgCtaRings from "@/_components/cta/svgs/SvgCtaRings";

function Cta() {
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const isCtaContainerInView = useInView(ctaContainerRef, {
    amount: 0.5,
    once: true,
  });

  return (
    <section ref={ctaContainerRef} className="section-styles md:!py-[75px]">
      <div className="section-inner">
        <div className="flex justify-center items-center flex-col relative z-0 rounded-[16px] md:aspect-[986/480] w-full bg-[#00498b] bg-[color(display-p3 .1098 .2824 .5255)] text-center overflow-hidden p-12 md:py-4 md:px-16">
          <h2 className="my-4 text-[--bg-1] text-[2rem] leading-[120%] tracking-[-0.075rem] md:text-[2.5rem] md:leading-[135%] md:tracking-[-0.8px]">
            <AnimatedText text="Governed by you & " delay={0.4} />
            <motion.span
              variants={{
                hidden: { opacity: 0, y: "50%", rotateX: -45 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: { duration: 1.5, ease: easeSwift, delay: 0.64 },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                fontFeatureSettings: "tnum",
                fontVariantNumeric: "tabular-nums",
              }}
              className="text-center inline-flex justify-center text-[#b5e1ff] text-[color(display-p3_.7098_.8824_1)] w-[7.5rem] md:w-[9.5rem] tracking-wide"
            >
              <NumberCounter
                value={201_378}
                initialValue={170_000}
                isInView={isCtaContainerInView}
              />
            </motion.span>
            <AnimatedText text=" others." delay={0.7} />
          </h2>

          <p className="max-w-[26em] font-sans text-[20px] font-medium leading-[150%] tracking-[-.33px] text-[#90caff]">
            <AnimatedText
              text="AAVE token holders guide the Aave Protocol via procedures, voting, and smart contract execution."
              delay={0.4}
            />
          </p>

          <Link
            href="/"
            className="flex items-center gap-x-1.5 mt-6 rounded-full pr-[1.125rem] pl-5 py-3 bg-[--bg-1] shadow-[0_2px_2px_0_rgba(0,0,0,.02)] text-decoration-none font-medium leading-[105%] tracking-[-.18px] text-[#00498b] transition-all duration-[180ms] ease-in hover:scale-[1.02] group"
          >
            Go to the Forum
            <IconArrowRightMedium className="group-hover:translate-x-[.125rem] block transition-[inherit]" />
          </Link>

          <SvgCtaRings isInView={isCtaContainerInView} />
        </div>
      </div>
    </section>
  );
}

export default Cta;
