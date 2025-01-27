"use client";

import { motion } from "motion/react";
import Logo from "@/_components/header/Logo";
import DropDownNav from "@/_components/header/DropDownNav";
import { usePageState } from "@/_context/PageContext";
import HamburgerNav from "@/_components/header/HamburgerNav";
import { useEffect, useMemo, useState } from "react";

function Header() {
  const { isPageAtTop, isViewportSmall } = usePageState();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  useEffect(() => {
    if (!isViewportSmall) {
      setIsHamburgerOpen(false);
    }
  }, [isViewportSmall]);

  const headerVariants = useMemo(
    () => ({
      default: {
        paddingTop: isViewportSmall ? 4 : 24,
        boxShadow: "rgba(0, 0, 0, 0.06) 0px 0px 0px 0px",
      },
      shrink: {
        paddingTop: 0,
        boxShadow: "rgba(0, 0, 0, 0.06) 0px 1px 0px 0px",
      },
    }),
    [isViewportSmall]
  );

  return (
    <div className="fixed w-full top-0 z-50 mx-auto max-w-[1082px]">
      <motion.header
        data-hamburger-open={isViewportSmall && isHamburgerOpen}
        variants={headerVariants}
        initial={false}
        animate={isPageAtTop ? "default" : "shrink"}
        className="md:px-12 px-6 flex items-center justify-between md:pb-0 pb-1"
      >
        <Logo />
        <DropDownNav />
        <HamburgerNav
          isHamburgerOpen={isHamburgerOpen}
          toggleHamburger={() => setIsHamburgerOpen(!isHamburgerOpen)}
        />
      </motion.header>
    </div>
  );
}

export default Header;
