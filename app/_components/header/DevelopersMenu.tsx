import IconDocs from "@/_assets/svgs/icons/docs.svg";
import IconSecurity from "@/_assets/svgs/icons/security.svg";
import IconBounty from "@/_assets/svgs/icons/bounty.svg";
import MenuLink from "@/_components/header/MenuLink";
import type { DevelopersLinkType } from "@/_types/types";
import { useState } from "react";
import SvgDevelopers from "@/_components/header/svgs/SvgDevelopers";
import { usePageState } from "@/_context/PageContext";

function DevelopersMenu() {
  const { isViewportSmall } = usePageState();
  const [hoveredLink, setHoveredLink] =
    useState<DevelopersLinkType>("Documentation");

  return (
    <div className="grid md:grid-cols-[max-content,max-content] gap-x-[.625rem]">
      <div>
        <MenuLink
          menuName="Developers"
          hoveredLink={hoveredLink}
          setHoveredLink={setHoveredLink}
          title="Documentation"
          description="Technical guides for developers."
          href="/"
          activeColor1="#a7e9fd"
          activeColor2="#39d1f9"
        >
          <IconDocs />
        </MenuLink>

        <MenuLink
          menuName="Developers"
          hoveredLink={hoveredLink}
          setHoveredLink={setHoveredLink}
          title="Security"
          description="Audit reports and information."
          href="/"
          activeColor1="#63bbb6"
          activeColor2="#00827b"
        >
          <IconSecurity />
        </MenuLink>

        <MenuLink
          menuName="Developers"
          hoveredLink={hoveredLink}
          setHoveredLink={setHoveredLink}
          title="Bug Bounty"
          description="Report responsibly and get rewarded."
          href="/"
          activeColor1="#ffd400"
          activeColor2="#ffb000"
        >
          <IconBounty />
        </MenuLink>
      </div>

      {!isViewportSmall && <SvgDevelopers hoveredLink={hoveredLink} />}
    </div>
  );
}

export default DevelopersMenu;
