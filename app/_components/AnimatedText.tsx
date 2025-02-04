import { easeSwift } from "@/_lib/utils";
import { motion } from "motion/react";
import { useMemo } from "react";

interface AnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const textChildVariants = {
  hidden: { opacity: 0, y: "50%", rotateX: -45 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 1.5, ease: easeSwift },
  },
};

function AnimatedText({ text, delay = 0.75, className }: AnimatedTextProps) {
  const wordArray = text.split(" ");

  const textVariants = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.06, delayChildren: delay ?? 0 },
      },
    }),
    [delay]
  );

  return (
    <motion.span
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {wordArray.map((word, index) => (
        <motion.span
          variants={textChildVariants}
          className="inline-block"
          key={index}
        >
          {word}
          {index !== wordArray.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default AnimatedText;
