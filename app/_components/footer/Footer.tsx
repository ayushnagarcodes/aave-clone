import AaveWordmark from "@/_assets/svgs/aave-wordmark.svg";
import { footerData } from "@/_lib/data";
import Link from "next/link";
import FooterLinks from "@/_components/footer/FooterLinks";
import IconX from "@/_assets/svgs/icons/x.svg";
import IconDiscord from "@/_assets/svgs/icons/discord.svg";
import IconHey from "@/_assets/svgs/icons/hey.svg";
import IconGithub from "@/_assets/svgs/icons/github.svg";
import IconDune from "@/_assets/svgs/icons/dune.svg";
import FooterLines from "@/_components/footer/FooterLines";

const linkClass =
  "h-[22px] fill-[--fg-3] overflow-visible transition-colors duration-100 ease-in hover:fill-[--fg-1]";

function Footer() {
  return (
    <div className="mx-auto w-[min(100%,1082px)] md:p-0 md:pb-[4.5rem] px-5 pb-12">
      <footer className="rounded-2xl bg-[--bg-4] px-6 py-10 md:p-12">
        <div className="flex flex-col md:flex-row justify-between gap-x-20 gap-y-12 md-gap-y-0">
          <div>
            <Link href="/">
              <AaveWordmark className="h-4 fill-[--fg-3]" />
            </Link>
            <p className="mt-8 max-w-[433px] text-[10px] leading-[120%] tracking-[0.1px] text-[#b6b6b6]">
              Aave.com provides information and resources about the fundamentals
              of the decentralised non-custodial liquidity protocol called the
              Aave Protocol, comprised of open-source self-executing smart
              contracts that are deployed on various permissionless public
              blockchains, such as Ethereum (the &quot;Aave Protocol&quot; or
              the &quot;Protocol&quot;). Aave Labs does not control or operate
              any version of the Aave Protocol on any blockchain network.
            </p>
          </div>

          <div className="w-[min(100%,457px)]">
            <ul className="list-none flex gap-8 md:gap-x-[4.5rem] md:justify-start xs:justify-between justify-start xs:flex-nowrap flex-wrap">
              {footerData.map((item) => (
                <FooterLinks key={item.id} data={item} />
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-x-6 mt-[6.5rem]">
          <Link href="/">
            <IconX className={linkClass} />
          </Link>
          <Link href="/">
            <IconDiscord className={linkClass} />
          </Link>
          <Link href="/">
            <IconHey className={linkClass} />
          </Link>
          <Link href="/">
            <IconGithub className={linkClass} />
          </Link>
          <Link href="/">
            <IconDune className={linkClass} />
          </Link>
        </div>
      </footer>

      <FooterLines />
    </div>
  );
}

export default Footer;
