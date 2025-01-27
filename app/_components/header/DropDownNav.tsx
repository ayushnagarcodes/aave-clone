import IconSearch from "@/_assets/svgs/icons/search.svg";
import { navItemsData } from "@/_lib/data";
import type { MenuType } from "@/_types/types";
import Link from "next/link";
import { useMemo, useState } from "react";
import ProductsMenu from "@/_components/header/ProductsMenu";
import MenuArrow from "@/_components/header/MenuArrow";
import { motion, AnimatePresence } from "motion/react";
import { usePageState } from "@/_context/PageContext";
import ResourcesMenu from "@/_components/header/ResourcesMenu";
import DevelopersMenu from "@/_components/header/DevelopersMenu";
import AnimatedMenu from "@/_components/header/AnimatedMenu";

function DropDownNav() {
  const { isPageAtTop } = usePageState();
  const [activeMenu, setActiveMenu] = useState<MenuType | null>(null);

  const menuWrapperVariants = useMemo(
    () => ({
      inactive: {
        opacity: 0,
        x: activeMenu?.x,
        y: -10,
        width: activeMenu?.width,
        height: activeMenu?.height,
        transition: {
          duration: 0.25,
          ease: "easeOut",
        },
      },
      active: {
        opacity: 1,
        x: activeMenu?.x,
        y: -0.5,
        width: activeMenu?.width,
        height: activeMenu?.height,
        top: isPageAtTop ? "43px" : "56px",
        transition: {
          duration: 0.25,
          ease: "easeOut",
        },
      },
    }),
    [isPageAtTop, activeMenu]
  );

  return (
    <nav className="hidden md:flex gap-x-4 ml-auto translate-y-[0.5px]">
      <div className="flex gap-2 relative z-40 h-8">
        {navItemsData.map((item) => (
          <button
            onPointerEnter={() => setActiveMenu(item)}
            onPointerLeave={() => setActiveMenu(null)}
            key={item.id}
            className={`inline-block relative px-4 py-[9px] bg-transparent text-sm font-medium text-[var(--fg-1)] leading-[105%] transition-colors duration-150 ease-in -tracking-[0.09px] before:content-[''] before:absolute before:top-0 before:-left-1 before:rounded-full before:w-[calc(100%+9px)] before:h-full cursor-default after:content-[''] after:absolute after:top-0 after:left-0 after:w-[calc(100%+9px)] after:h-[200%] after:bg-transparent ${
              activeMenu?.id === item.id ? "before:bg-[rgba(34,29,29,.03)]" : ""
            }`}
          >
            {item.title}
          </button>
        ))}

        <AnimatePresence>
          {activeMenu && <MenuArrow activeMenu={activeMenu} />}
        </AnimatePresence>

        <AnimatePresence key={activeMenu ? "true" : "false"}>
          {activeMenu && (
            <motion.div
              onPointerEnter={() => setActiveMenu(activeMenu)}
              onPointerLeave={() => setActiveMenu(null)}
              variants={menuWrapperVariants}
              initial="inactive"
              animate="active"
              exit="inactive"
              className="z-40 absolute top-[43px] left-0 rounded-2xl p-2.5 bg-[--bg-1] shadow-[0_6px_20px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.06)] overflow-clip"
            >
              <AnimatedMenu
                menuName="Products"
                activeMenu={activeMenu}
                order={1}
              >
                <ProductsMenu />
              </AnimatedMenu>

              <AnimatedMenu
                menuName="Resources"
                activeMenu={activeMenu}
                order={2}
              >
                <ResourcesMenu />
              </AnimatedMenu>

              <AnimatedMenu
                menuName="Developers"
                activeMenu={activeMenu}
                order={3}
              >
                <DevelopersMenu />
              </AnimatedMenu>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Link
        href="/"
        className="inline-block rounded-full px-4 py-[9px] bg-[var(--fg-1)] text-sm font-medium leading-[105%] text-white transition-all duration-150 ease-in tracking-[-0.09px] hover:opacity-[.8]"
      >
        Open App
      </Link>

      <button className="cursor-pointer flex items-center justify-center gap-2 relative rounded-full h-8 w-8 bg-[#1a1a1a] font-medium text-sm tracking-[-0.13px] text-white transition-opacity duration-150 ease-in hover:opacity-[.8]">
        <IconSearch className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </button>
    </nav>
  );
}

export default DropDownNav;
