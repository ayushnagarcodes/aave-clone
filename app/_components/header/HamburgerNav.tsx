import { AnimatePresence } from "motion/react";
import ProductsMenu from "@/_components/header/ProductsMenu";
import ResourcesMenu from "@/_components/header/ResourcesMenu";
import DevelopersMenu from "@/_components/header/DevelopersMenu";
import { motion } from "motion/react";
import { usePageState } from "@/_context/PageContext";

interface HamburgerNavProps {
  isHamburgerOpen: boolean;
  toggleHamburger: () => void;
}

const hamburgerMenuVariants = {
  inactive: { opacity: 0, scale: 0.9 },
  active: { opacity: 1, scale: 1 },
};

function HamburgerNav({ isHamburgerOpen, toggleHamburger }: HamburgerNavProps) {
  const { isViewportSmall } = usePageState();

  return (
    <div>
      <button
        className={`md:hidden block relative w-8 h-8 bg-none text-inherit
          before:content-[''] before:absolute before:top-[32%] before:left-[13%] before:right-[13%] before:h-[2px] before:rounded before:bg-current before:transition-all before:duration-150 before:ease-out
          after:content-[''] after:absolute after:bottom-[32%] after:left-[13%] after:right-[13%] after:h-[2px] after:rounded after:bg-current after:transition-all after:duration-150 after:ease-out
          ${
            isHamburgerOpen
              ? "before:translate-y-[6px] before:rotate-[135deg] after:translate-y-[-4px] after:rotate-45"
              : ""
          }`}
        onClick={toggleHamburger}
      ></button>

      <AnimatePresence>
        {isViewportSmall && isHamburgerOpen && (
          <motion.div
            variants={hamburgerMenuVariants}
            initial="inactive"
            animate="active"
            exit="inactive"
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed top-16 overflow-y-auto inset-0 w-full bg-white z-50 pt-6 px-3 pb-16 bg-[var(--bg-1)]"
          >
            <ProductsMenu />
            <h2 className="font-sans pt-8 pb-4 text-black text-base font-medium leading-[105%] tracking-[-0.00563rem]">
              Resources
            </h2>
            <ResourcesMenu />
            <h2 className="font-sans pt-8 pb-4 text-black text-base font-medium leading-[105%] tracking-[-0.00563rem]">
              Developers
            </h2>
            <DevelopersMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HamburgerNav;
