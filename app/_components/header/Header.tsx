import { motion } from "motion/react";
import SvgLogo from "@/_components/header/svgs/SvgLogo";
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
        paddingTop: isViewportSmall ? 4 : 0,
        boxShadow: "rgba(0, 0, 0, 0.06) 0px 1px 0px 0px",
      },
    }),
    [isViewportSmall]
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <motion.header
        data-hamburger-open={isViewportSmall && isHamburgerOpen}
        variants={headerVariants}
        initial={false}
        animate={isPageAtTop ? "default" : "shrink"}
        className="mx-auto w-full max-w-[1082px] md:px-12 px-6 flex items-center justify-between md:py-0 py-1 bg-white"
      >
        <SvgLogo />
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
