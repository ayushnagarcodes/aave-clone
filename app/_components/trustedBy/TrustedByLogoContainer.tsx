import IconJpMorgan from "@/_assets/svgs/trusted-by/jp-morgan-chase.svg";
import IconMonetaryAuthority from "@/_assets/svgs/trusted-by/monetary-authority-of-singapore.svg";
import IconFireblocks from "@/_assets/svgs/trusted-by/fireblocks.svg";
import IconConsensys from "@/_assets/svgs/trusted-by/consensys.svg";
import IconBancoCentral from "@/_assets/svgs/trusted-by/banco-central-do-brasil.svg";
import IconCentrifuge from "@/_assets/svgs/trusted-by/centrifuge.svg";

function TrustedByLogoContainer() {
  return (
    <div className="flex flex-nowrap md:gap-12 md:pr-12 gap-6 pr-6">
      <div className="flex items-center justify-center">
        <IconJpMorgan
          className="block text-[#201d1d] align-top"
          width={243}
          height={34}
        />
      </div>
      <div className="flex items-center justify-center">
        <IconMonetaryAuthority
          className="block text-[#201d1d] align-top"
          width={191}
          height={52}
        />
      </div>
      <div className="flex items-center justify-center">
        <IconFireblocks
          className="block text-[#201d1d] align-top"
          width={166}
          height={26}
        />
      </div>
      <div className="flex items-center justify-center">
        <IconConsensys
          className="block text-[#201d1d] align-top"
          width={170}
          height={36}
        />
      </div>
      <div className="flex items-center justify-center">
        <IconBancoCentral
          className="block text-[#201d1d] align-top"
          width={116}
          height={64}
        />
      </div>
      <div className="flex items-center justify-center">
        <IconCentrifuge
          className="block text-[#201d1d] align-top"
          width={139}
          height={42}
        />
      </div>
    </div>
  );
}

export default TrustedByLogoContainer;
