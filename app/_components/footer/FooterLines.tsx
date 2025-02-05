import { easeSwift } from "@/_lib/utils";
import { motion } from "motion/react";

const lineClass =
  "relative h-3 max-w-full transition-opacity duration-1000 ease-in hover:opacity-100 hover:transition-opacity hover:duration-[120ms] hover:ease-in after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:rounded-[4px] after:h-1 after:animate-slideFooterLine";

const footerLineContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const footerLineVariants = {
  hidden: (i: number) => ({ scaleX: 0.25, y: -12 * i }),
  visible: {
    scaleX: 1,
    y: 0,
    transition: { duration: 1, ease: easeSwift },
  },
};

function FooterLines() {
  return (
    <motion.div
      variants={footerLineContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 1, once: true }}
      className="mx-auto"
    >
      <motion.div
        variants={footerLineVariants}
        custom={0}
        className={`footer-line ${lineClass} mx-4 md:mx-3.5`}
      ></motion.div>

      <motion.div
        variants={footerLineVariants}
        custom={1}
        className={`footer-line ${lineClass} mx-8 md:mx-16 opacity-50`}
      ></motion.div>

      <motion.div
        variants={footerLineVariants}
        custom={2}
        className={`footer-line ${lineClass} mx-12 md:mx-[7.125rem] opacity-20`}
      ></motion.div>

      <motion.div
        variants={footerLineVariants}
        custom={3}
        className={`footer-line ${lineClass} mx-16 md:mx-[10.25rem] opacity-10`}
      ></motion.div>
    </motion.div>
  );
}

export default FooterLines;
