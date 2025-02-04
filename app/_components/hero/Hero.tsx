import Link from "next/link";
import IconArrowRightSmall from "@/_assets/svgs/icons/arrow-right-small.svg";
import IconArrowRightBig from "@/_assets/svgs/icons/arrow-right-big.svg";
import { motion } from "motion/react";
import SvgPulse from "@/_components/hero/svgs/SvgPulse";
import SvgCircles from "@/_components/hero/svgs/SvgCircles";
import { easeSwift } from "@/_lib/utils";
import AnimatedText from "@/_components/AnimatedText";

const ctaBtnVariants = {
  inactive: { scaleX: 0.95, scaleY: 0.8 },
  active: {
    scaleX: [0.95, 1, 1, 0.95],
    scaleY: [0.8, 1, 1, 0.8],
    transition: { duration: 1.5 },
  },
};

const ctaBtnChildVariants = {
  inactive: { rotate: 0 },
  active: { rotate: [-180, 0, 180], transition: { duration: 1.5 } },
};

const svgBottomLineVariants = {
  inactive: { scaleX: 0 },
  active: { scaleX: 1 },
};

const svgBottomLineChildVariants = {
  inactive: { scaleX: 0.2 },
  active: { scaleX: 1 },
};

const svgBottomLineTransition = {
  duration: 0.75,
  ease: easeSwift,
  delay: 0.25,
};

const AnimatedLink = motion.create(Link);

const generateHeroChildVariants = (y: number) => ({
  hidden: { opacity: 0, y },
  animate: {
    opacity: 1,
    y: 0,
  },
});

function Hero() {
  return (
    <motion.section
      variants={{
        animate: {},
      }}
      initial="hidden"
      animate="animate"
      className="pt-24 md:pt-[9.375rem] md:px-12 px-5"
    >
      <div className="relative w-[min(100%,986px)] mx-auto z-10">
        <motion.div
          variants={generateHeroChildVariants(8)}
          transition={{ duration: 1, ease: easeSwift, delay: 2.5 }}
          className="pb-5"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 no-underline text-[var(--fg-1)] text-xs font-medium leading-[105%] tracking-[-0.00563rem] px-3 py-2 rounded-[6.1875rem] bg-[var(--bg-4)] hover:bg-[#f0f0ef] transition-all duration-100 ease-in"
          >
            Introducing Aave&apos;s new visual identity
            <div className="flex items-center gap-2 text-[var(--fg-2)] text-xs leading-[105%] tracking-[-0.00563rem] font-normal before:content-[''] before:inline-block before:w-1 before:h-1 before:rounded-full before:bg-[var(--fg-4)]">
              Read more <IconArrowRightSmall />
            </div>
          </Link>
        </motion.div>

        <h1>
          <AnimatedText text="Access the full power of DeFi." />
        </h1>

        <motion.div
          variants={generateHeroChildVariants(32)}
          transition={{ duration: 0.85, ease: easeSwift, delay: 1.6 }}
        >
          <p
            style={{ fontFeatureSettings: '"cv11" on,"ss01" on' }}
            className="max-w-[20em] text-xl not-italic font-medium leading-[150%] tracking-[-.02rem] md:tracking-[-0.47px] text-[var(--fg-2)]"
          >
            Aave is the world’s largest liquidity protocol. Supply, borrow,
            swap, stake and more.
          </p>
        </motion.div>

        <motion.div
          variants={generateHeroChildVariants(32)}
          transition={{ duration: 0.85, ease: easeSwift, delay: 1.75 }}
        >
          <AnimatedLink
            href="/"
            variants={{ inactive: {}, active: {} }}
            initial="inactive"
            whileHover="active"
            className="cursor-pointer relative inline-flex mt-7 no-underline"
          >
            <span className="z-20 relative inline-flex items-center gap-1.5 shadow-[0_0_0_1.5px_rgba(0,0,0,.06)] rounded-full pr-4 pl-5 py-[9px] bg-[var(--bg-1)] font-medium leading-[125%] tracking-[-0.18px] text-[var(--fg-1)] transition-all duration-150 ease-in-out hover:bg-[#fcfcfb] hover:shadow-[0_0_0_1.5px_rgba(0,0,0,0.1)]">
              Get Started
              <IconArrowRightBig />
            </span>
            <motion.span
              variants={ctaBtnVariants}
              className="z-10 absolute inset-[-3px] rounded-full overflow-clip"
            >
              <motion.span
                variants={ctaBtnChildVariants}
                className="absolute inset-[-200%_-25%] bg-[conic-gradient(from_0deg_at_50%_50%,var(--red)_0deg,var(--blue)_124.43deg,var(--purple)_179.13deg,var(--green)_233.53deg,var(--yellow)_308.53deg,var(--red)_364.52deg)]"
              ></motion.span>
            </motion.span>
          </AnimatedLink>
        </motion.div>

        <motion.div
          variants={generateHeroChildVariants(32)}
          transition={{ duration: 0.85, ease: easeSwift, delay: 1.9 }}
        >
          <div className="flex items-center gap-2 mt-6">
            <SvgPulse />
            <p className="text-sm leading-[135%] tracking-[-0.09px] text-[var(--fg-3)]">
              <span className="text-[var(--fg-2)] whitespace-nowrap">
                $
                <span className="inline-flex justify-end transition-[width] duration-200 [font-variant-numeric:tabular-nums] w-10">
                  35.06
                </span>{" "}
                billion&nbsp;
              </span>
              of liquidity currently supplied in Aave.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative md:pt-0 pt-16">
        <SvgCircles />
        <motion.div
          variants={svgBottomLineVariants}
          initial="inactive"
          animate="active"
          transition={svgBottomLineTransition}
          className="w-full h-[4px] flex items-center justify-center"
        >
          <motion.div
            variants={svgBottomLineChildVariants}
            transition={svgBottomLineTransition}
            className="w-full max-w-[1082px] h-1 rounded-sm bg-[linear-gradient(0deg,color(display-p3_1_1_1/.1),color(display-p3_1_1_1/.1)),linear-gradient(90deg,color(display-p3_.4196_.8078_.9608)_10.43%,color(display-p3_1_.7216_0)_27.01%,color(display-p3_.1216_.502_.4824)_44.64%,color(display-p3_.102_.5333_.9725)_56.05%,color(display-p3_.949_.2863_0)_73.58%,color(display-p3_.5951_.587_1)_90.51%)]"
          ></motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
