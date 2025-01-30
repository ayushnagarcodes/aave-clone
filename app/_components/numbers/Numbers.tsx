import AnimatedHeading from "@/_components/AnimatedHeading";
import NumberCardText from "@/_components/numbers/NumberCardText";
import SvgNetDeposits from "@/_components/numbers/svgs/SvgNetDeposits";
import SvgVolume from "@/_components/numbers/svgs/SvgVolume";
import SvgAvgSupply from "@/_components/numbers/svgs/SvgAvgSupply";
import SvgAvgBorrow from "@/_components/numbers/svgs/SvgAvgBorrow";

function Numbers() {
  return (
    <section className="section-styles section-border">
      <div className="section-inner grid grid-cols-1 md:grid-cols-2 gap-x-[4.5rem]">
        <div className="relative top-0 m-0 pb-12 md:sticky md:top-[9.375rem] self-start md:pb-[17px] md:ml-6">
          <AnimatedHeading level={2} text="Aave by the numbers." />
          <p className="mt-3 text-lg md:text-xl font-medium !leading-[135%] tracking-[-0.33px] text-[--fg-2]">
            Aave is one of the largest DeFi protocols with billions of dollars
            in weekly volume across Ethereum and 12+ networks.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          <div>
            <SvgNetDeposits />
            <NumberCardText
              value="34.51B"
              valueType="$"
              description="Net deposits supplied across 13 networks."
            />
          </div>

          <div>
            <SvgVolume />
            <NumberCardText
              value="160.02B"
              valueType="$"
              description="Volume, past 30 days."
            />
          </div>

          <div>
            <SvgAvgSupply />
            <NumberCardText
              value="7.13"
              valueType="%"
              description="Average stablecoin supply APY Ethereum network, past year."
            />
          </div>

          <div>
            <SvgAvgBorrow />
            <NumberCardText
              value="9.93"
              valueType="%"
              description="Average stablecoin borrow APR Ethereum network, past year."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Numbers;
