import { easeSwift } from "@/_lib/utils";
import { motion } from "motion/react";
import { useMemo } from "react";

interface AnimatedHeadingProps {
  text: string;
  level: 1 | 2 | 3;
  delay?: number;
}

const headingClasses = {
  h1: "mb-4 text-[2.5rem] md:text-5xl font-semibold leading-[3rem] md:leading-[55px] tracking-[-.075rem] md:tracking-[-1.44px]",
  h2: "text-center md:text-[40px] font-semibold md:leading-[135%] md:tracking-[-0.8px] text-[2.5rem] font-semibold leading-[3.4375rem] tracking-[-0.075rem]",
};

const headingChildVariants = {
  hidden: { opacity: 0, y: "50%", rotateX: -45 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 1.5, ease: easeSwift },
  },
};

function AnimatedHeading({ text, level, delay }: AnimatedHeadingProps) {
  const wordArray = text.split(" ");
  const Component = motion[`h${level}` as const];

  const headingVariants = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.06, delayChildren: delay ?? 0 },
      },
    }),
    [delay]
  );

  return (
    <Component
      variants={headingVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={headingClasses[`h${level}`]}
    >
      <span>
        {wordArray.map((word, index) => (
          <motion.span
            variants={headingChildVariants}
            className="inline-block"
            key={index}
          >
            {word}
            {index !== wordArray.length - 1 && "\u00A0"}
          </motion.span>
        ))}
      </span>
    </Component>
  );
}

export default AnimatedHeading;
