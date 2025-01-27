import Link from "next/link";
import { motion } from "motion/react";
import { useMemo } from "react";
import { easeSwift } from "@/_lib/utils";
import type { MenuType } from "@/_types/types";
import { usePageState } from "@/_context/PageContext";

interface MenuLinkProps<T extends string> {
  menuName: MenuType["title"];
  hoveredLink: T;
  setHoveredLink: (link: T) => void;
  title: T;
  description: string;
  href: string;
  activeColor1: string;
  activeColor2: string;
  children: React.ReactElement;
}

const AnimatedLink = motion.create(Link);

function MenuLink<T extends string>({
  menuName,
  hoveredLink,
  setHoveredLink,
  title,
  description,
  href,
  children,
  activeColor1,
  activeColor2,
}: MenuLinkProps<T>) {
  const { isViewportSmall } = usePageState();

  const menuLinkVariants = useMemo(
    () => ({
      inactive: {
        "--color-1": isViewportSmall ? activeColor1 : "#bcbbbb",
        "--color-2": isViewportSmall ? activeColor2 : "#8f8f8f",
      },
      active: {
        "--color-1": activeColor1,
        "--color-2": activeColor2,
      },
    }),
    [activeColor1, activeColor2, isViewportSmall]
  );

  return (
    <AnimatedLink
      variants={menuLinkVariants}
      initial="inactive"
      animate={hoveredLink === title ? "active" : "inactive"}
      transition={{ ease: easeSwift }}
      onPointerEnter={() => setHoveredLink(title)}
      onPointerLeave={(e) => e.stopPropagation()}
      className="flex relative items-center gap-x-3 py-2 md:px-2 md:pr-4 w-full"
      href={href}
    >
      {children}

      <div>
        <p className="text-sm font-medium tracking-[0.1px] leading-[120%] text-[--fg-1]">
          {title}
        </p>
        <p className="text-sm tracking-[-0.09px] leading-[150%] text-[--fg-2]">
          {description}
        </p>
      </div>

      {!isViewportSmall && hoveredLink === title && (
        <motion.div
          layoutId={`link-bg-${menuName}`}
          className="absolute -z-10 inset-0 rounded-lg bg-[rgba(34,29,29,0.03)]"
          transition={{ ease: easeSwift }}
        ></motion.div>
      )}
    </AnimatedLink>
  );
}

export default MenuLink;
