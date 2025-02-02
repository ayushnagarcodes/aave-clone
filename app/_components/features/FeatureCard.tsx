import type { FeatureType } from "@/_types/types";
import { Ref } from "react";

interface FeatureCardProps {
  data: FeatureType;
  children: React.ReactElement;
  ref: Ref<HTMLDivElement>;
}

function FeatureCard({ data, children, ref }: FeatureCardProps) {
  return (
    <div
      ref={ref}
      key={data.id}
      className="flex flex-col justify-end relative z-0 overflow-hidden rounded-2xl px-6 md:px-10 py-8 bg-[--bg-5]"
    >
      <h3 className="mb-4 font-brand text-2xl font-semibold leading-[135%] tracking-[-0.48px] text-[--fg-1]">
        {data.title}
      </h3>
      <p className="leading-[150%] tracking-[-0.18px] text-[--fg-2]">
        {data.description}
      </p>
      {children}
    </div>
  );
}

export default FeatureCard;
