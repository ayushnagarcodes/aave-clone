import type { SecurityType } from "@/_types/types";
import LinkMore from "@/_components/LinkMore";

interface SecurityCardProps {
  cardRef: React.RefObject<HTMLDivElement | null>;
  data: SecurityType;
  children: React.ReactElement;
}

function SecurityCard({ cardRef, data, children }: SecurityCardProps) {
  return (
    <div
      ref={cardRef}
      className="flex flex-col md:grid md:grid-cols-2 rounded-2xl bg-[#fcfcfb] overflow-hidden group"
    >
      <div className="h-full w-full bg-[--bg-4]">{children}</div>

      <div className="flex flex-col gap-y-6 p-8 md:py-10 md:px-12 md:group-even:-order-1">
        <h3 className="text-2xl font-semibold leading-[135%] tracking-[-0.48px]">
          {data.title}
        </h3>
        <div className="w-full h-px bg-[#e6e6e5]"></div>
        <p className="leading-[150%] tracking-[-.18px] text-[--fg-2]">
          {data.description}
        </p>
        <LinkMore text="Learn More" className="!my-0" />
      </div>
    </div>
  );
}

export default SecurityCard;
