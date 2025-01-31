import NumberCounter from "@/_components/NumberCounter";

interface NumberCardTextProps {
  value: number;
  valueType: "$" | "%";
  description: string;
  isSvgInView?: boolean;
}

function NumberCardText({
  value,
  valueType,
  description,
  isSvgInView,
}: NumberCardTextProps) {
  return (
    <p className="flex items-start md:items-baseline gap-3 mt-3 py-5">
      <span
        className={`${
          isSvgInView ? "visible" : "invisible"
        } block max-w-[4.25em] w-full text-2xl font-semibold leading-[105%] tracking-[-0.48px] text-[#221d1d] whitespace-nowrap`}
      >
        {valueType === "$" ? "$" : ""}
        <span className="font-brand">
          <NumberCounter value={value} decimals={2} isInView={isSvgInView} />
          {valueType === "$" ? "B" : "%"}
        </span>
      </span>

      <span className="font-sans leading-[135%] tracking-[-0.18px] text-[#221d1d] opacity-70">
        {description}
      </span>
    </p>
  );
}

export default NumberCardText;
