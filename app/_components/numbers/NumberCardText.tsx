interface NumberCardTextProps {
  value: string;
  valueType: "$" | "%";
  description: string;
}

function NumberCardText({
  value,
  valueType,
  description,
}: NumberCardTextProps) {
  return (
    <p className="flex items-start md:items-baseline gap-3 mt-3 py-5">
      <span className="block max-w-[4.25em] w-full text-2xl font-semibold leading-[105%] tracking-[-0.48px] text-[#221d1d] whitespace-nowrap">
        {valueType === "$" ? "$" : ""}
        <span className="font-brand">
          {value}
          {valueType === "%" ? "%" : ""}
        </span>
      </span>

      <span className="font-sans leading-[135%] tracking-[-0.18px] text-[#221d1d] opacity-70">
        {description}
      </span>
    </p>
  );
}

export default NumberCardText;
