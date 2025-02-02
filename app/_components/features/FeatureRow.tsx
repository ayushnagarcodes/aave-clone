import type { FeatureType } from "@/_types/types";

interface FeatureRowProps {
  data: FeatureType;
  children: React.ReactElement;
}

function FeatureRow({ data, children }: FeatureRowProps) {
  return (
    <div className="grid md:grid-cols-2 items-center gap-y-2 gap-x-10 rounded-2xl md:py-8 py-7 px-8 even:bg-[--bg-5]">
      <div className="flex items-center gap-x-4">
        {children}
        <h3 className="font-sans font-semibold leading-[135%] tracking-[-0.33px]">
          {data.title}
        </h3>
      </div>

      <p className="tracking-[-0.18px] leading-[150%] text-[var(--fg-2)]">
        {data.description}
      </p>
    </div>
  );
}

export default FeatureRow;
