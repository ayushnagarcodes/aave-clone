import IconBrand from "@/_assets/svgs/icons/brand.svg";
import IconFaq from "@/_assets/svgs/icons/faq.svg";
import IconHelp from "@/_assets/svgs/icons/help.svg";
import IconGovernance from "@/_assets/svgs/icons/governance-full.svg";
import MenuLink from "@/_components/header/MenuLink";
import { useState } from "react";
import SvgResources from "@/_components/header/svgs/SvgResources";
import type { ResourcesLinkType } from "@/_types/types";
import { usePageState } from "@/_context/PageContext";

function ResourcesMenu() {
  const { isViewportSmall } = usePageState();
  const [hoveredLink, setHoveredLink] = useState<ResourcesLinkType>("Brand");

  return (
    <div className="grid md:grid-cols-[max-content,max-content] gap-x-[.625rem]">
      <div>
        <MenuLink
          menuName="Resources"
          hoveredLink={hoveredLink}
          setHoveredLink={setHoveredLink}
          title="Brand"
          description="Assets, examples and guides."
          href="/"
          activeColor1="#bdbbff"
          activeColor2="#9896ff"
        >
          <IconBrand />
        </MenuLink>

        <MenuLink
          menuName="Resources"
          hoveredLink={hoveredLink}
          setHoveredLink={setHoveredLink}
          title="FAQ"
          description="Answers to common questions."
          href="/"
          activeColor1="#39beb7"
          activeColor2="#00827b"
        >
          <IconFaq />
        </MenuLink>

        <MenuLink
          menuName="Resources"
          hoveredLink={hoveredLink}
          setHoveredLink={setHoveredLink}
          title="Help & Support"
          description="Guides, articles and more."
          href="/"
          activeColor1="#ff8130"
          activeColor2="#FF0000"
        >
          <IconHelp />
        </MenuLink>

        <MenuLink
          menuName="Resources"
          hoveredLink={hoveredLink}
          setHoveredLink={setHoveredLink}
          title="Governance"
          description="The Aave Governance forum."
          href="/"
          activeColor1="#5589c5"
          activeColor2="#00498b"
        >
          <IconGovernance />
        </MenuLink>
      </div>

      {!isViewportSmall && <SvgResources hoveredLink={hoveredLink} />}
    </div>
  );
}

export default ResourcesMenu;
