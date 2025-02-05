import AnimatedText from "@/_components/AnimatedText";
import LinkMore from "@/_components/LinkMore";
import { faqsData } from "@/_lib/data";
import Faq from "@/_components/faq/Faq";
import { useState } from "react";

function FaqContainer() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleFaqClick = (id: number) => {
    if (activeFaq === id) {
      setActiveFaq(null);
    } else {
      setActiveFaq(id);
    }
  };

  return (
    <section className="section-styles">
      <div className="section-inner">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-x-[4.5rem]">
          <h2 className="text-[2rem] md:text-[2.5rem] md:leading-[135%] leading-[120%]">
            <AnimatedText text="FAQs" delay={0.4} />
          </h2>

          <div>
            <div>
              {faqsData.map((faq) => (
                <Faq
                  key={faq.id}
                  data={faq}
                  activeFaq={activeFaq}
                  onFaqClick={handleFaqClick}
                />
              ))}
            </div>

            <LinkMore
              text="See More"
              className="text-[#1a88f8] text-[color(display-p3_.102_.5333_.9725)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqContainer;
