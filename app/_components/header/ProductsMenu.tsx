import Link from "next/link";
import IconApp from "@/_assets/svgs/icons/app.svg";
import IconGho from "@/_assets/svgs/icons/gho.svg";
import SvgProductsApp from "@/_components/header/svgs/SvgProductsApp";
import SvgProductsGho from "@/_components/header/svgs/SvgProductsGho";
import { motion } from "motion/react";
import { useState } from "react";

const AnimatedLink = motion.create(Link);

type ProductsLinkType = "app" | "gho";

const productsLinkVariants = {
  inactive: {
    opacity: 0.5,
  },
  active: {
    opacity: 1,
  },
  svg: {},
};

function ProductsMenu() {
  const [hoveredLink, setHoveredLink] = useState<ProductsLinkType | null>(null);

  return (
    <div>
      <AnimatedLink
        onPointerEnter={() => setHoveredLink("app")}
        onPointerLeave={() => setHoveredLink(null)}
        variants={productsLinkVariants}
        animate={!hoveredLink ? "active" : "inactive"}
        whileHover={["active", "svg"]}
        className="bg-[var(--purple-1)] relative block rounded-lg p-4 w-full md:w-[22.25rem] text-white overflow-clip"
        href="/"
      >
        <IconApp />
        <p className="mt-3 text-sm font-semibold leading-[120%] tracking-[0.1px]">
          App
        </p>
        <p className="relative z-2 mt-[2px] text-sm leading-[150%] tracking-[-0.09px]">
          Interact with Aave easily.
        </p>
        <SvgProductsApp />
      </AnimatedLink>

      <AnimatedLink
        onPointerEnter={() => setHoveredLink("gho")}
        onPointerLeave={() => setHoveredLink(null)}
        variants={productsLinkVariants}
        animate={!hoveredLink ? "active" : "inactive"}
        whileHover={["active", "svg"]}
        className="mt-[.625rem] bg-[#00bc20] relative block rounded-lg p-4 w-full md:w-[22.25rem] text-white overflow-clip"
        href="/"
      >
        <IconGho />
        <p className="mt-3 text-sm font-semibold leading-[120%] tracking-[0.1px]">
          GHO
        </p>
        <p className="relative z-2 mt-[2px] text-sm leading-[150%] tracking-[-0.09px]">
          The Aave-native stablecoin.
        </p>
        <SvgProductsGho />
      </AnimatedLink>
    </div>
  );
}

export default ProductsMenu;
