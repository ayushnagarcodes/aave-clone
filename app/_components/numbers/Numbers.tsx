import AnimatedText from "@/_components/AnimatedText";
import NumberCardText from "@/_components/numbers/NumberCardText";
import SvgNetDeposits from "@/_components/numbers/svgs/SvgNetDeposits";
import SvgVolume from "@/_components/numbers/svgs/SvgVolume";
import SvgAvgSupply from "@/_components/numbers/svgs/SvgAvgSupply";
import SvgAvgBorrow from "@/_components/numbers/svgs/SvgAvgBorrow";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const viewportOptions = { amount: 1, once: true };

function Numbers() {
  const svgNetDepositsRef = useRef(null);
  const svgVolumeRef = useRef(null);
  const svgAvgSupplyRef = useRef(null);
  const svgAvgBorrowRef = useRef(null);

  const isSvgNetDepositsInView = useInView(svgNetDepositsRef, viewportOptions);
  const isSvgVolumeInView = useInView(svgVolumeRef, viewportOptions);
  const isSvgAvgSupplyInView = useInView(svgAvgSupplyRef, viewportOptions);
  const isSvgAvgBorrowInView = useInView(svgAvgBorrowRef, viewportOptions);

  return (
    <section className="section-styles section-border-b">
      <div className="section-inner grid grid-cols-1 md:grid-cols-2 gap-x-[4.5rem]">
        <div className="relative top-0 m-0 pb-12 md:sticky md:top-[9.375rem] self-start md:pb-[17px] md:ml-6">
          <h2>
            <AnimatedText text="Aave by the numbers." delay={0.4} />
          </h2>
          <p className="mt-3 text-lg md:text-xl font-medium !leading-[135%] tracking-[-0.33px] text-[--fg-2]">
            Aave is one of the largest DeFi protocols with billions of dollars
            in weekly volume across Ethereum and 12+ networks.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Net Deposits */}
          <div>
            <motion.div ref={svgNetDepositsRef}>
              <SvgNetDeposits />
            </motion.div>

            <NumberCardText
              value={34.51}
              valueType="$"
              description="Net deposits supplied across 13 networks."
              isSvgInView={isSvgNetDepositsInView}
            />
          </div>

          {/* Volume */}
          <div>
            <motion.div
              ref={svgVolumeRef}
              variants={{
                hidden: {},
                visible: {},
                animate: {},
              }}
              initial="hidden"
              animate={isSvgVolumeInView ? "animate" : "hidden"}
              whileInView="visible"
              viewport={viewportOptions}
            >
              <SvgVolume />
            </motion.div>

            <NumberCardText
              value={160.02}
              valueType="$"
              description="Volume, past 30 days."
              isSvgInView={isSvgVolumeInView}
            />
          </div>

          {/* Avg Supply */}
          <div>
            <motion.div
              ref={svgAvgSupplyRef}
              variants={{
                hidden: {},
                visible: {},
                animate: {},
              }}
              initial={["hidden", "initial"]}
              animate={[
                "revealAnimate",
                isSvgAvgSupplyInView ? "animate" : "initial",
              ]}
              whileInView="visible"
              viewport={viewportOptions}
            >
              <SvgAvgSupply />
            </motion.div>

            <NumberCardText
              value={7.13}
              valueType="%"
              description="Average stablecoin supply APY Ethereum network, past year."
              isSvgInView={isSvgAvgSupplyInView}
            />
          </div>

          {/* Avg Borrow */}
          <div>
            <motion.div
              ref={svgAvgBorrowRef}
              variants={{
                hidden: {},
                visible: {},
                animate: {},
              }}
              initial={["hidden", "initial"]}
              animate={[
                "revealAnimate",
                isSvgAvgBorrowInView ? "animate" : "initial",
              ]}
              whileInView="visible"
              viewport={viewportOptions}
            >
              <SvgAvgBorrow />
            </motion.div>

            <NumberCardText
              value={9.93}
              valueType="%"
              description="Average stablecoin borrow APR Ethereum network, past year."
              isSvgInView={isSvgAvgBorrowInView}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Numbers;
