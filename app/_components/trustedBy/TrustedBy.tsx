import AnimatedText from "@/_components/AnimatedText";
import TrustedByLogoContainer from "@/_components/trustedBy/TrustedByLogoContainer";

function TrustedBy() {
  return (
    <section className="section-styles">
      <div className="section-inner">
        <div className="md:px-6">
          <h2>
            <AnimatedText text="Trusted by the best." delay={0.4} />
          </h2>
          <p className="mt-3 text-lg md:text-xl font-medium leading-[135%] tracking-[-0.33px] text-[--fg-2]">
            Aave Protocol has been trusted by leading institutions and
            companies.
          </p>
        </div>

        <div className="trusted-by relative overflow-hidden">
          <div className="relative overflow-hidden pt-20 w-[400%] md:w-[200%]">
            <div className="flex flex-nowrap animate-slide">
              <TrustedByLogoContainer />
              <TrustedByLogoContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
