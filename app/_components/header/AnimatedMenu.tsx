import type { MenuType } from "@/_types/types";
import { motion } from "motion/react";

interface AnimatedMenuProps {
  menuName: MenuType["title"];
  activeMenu: MenuType | null;
  order: number;
  children: React.ReactElement;
}

function AnimatedMenu({
  menuName,
  activeMenu,
  order,
  children,
}: AnimatedMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        x:
          !activeMenu || activeMenu.title === menuName
            ? 0
            : activeMenu.id < order
            ? 80
            : -80,
        opacity: !activeMenu || activeMenu.title === menuName ? 1 : 0,
        zIndex: !activeMenu || activeMenu.title === menuName ? 100 : -1,
        pointerEvents: (!activeMenu || activeMenu.title === menuName
          ? "auto"
          : "none") as "auto" | "none",
      }}
      transition={{
        ease: "easeOut",
        duration: 0.175,
      }}
      className="absolute"
    >
      {children}
    </motion.div>
  );
}

export default AnimatedMenu;
