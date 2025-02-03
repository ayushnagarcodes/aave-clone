import NumberCounter from "@/_components/NumberCounter";

interface GhoCardProps {
  cardRef: React.RefObject<HTMLDivElement | null>;
  isCardInView: boolean;
  title: string;
  duration: string;
  value: number;
  initialValue: number;
  valueSymbol: string;
  children: React.ReactElement;
}

function GhoCard({
  cardRef,
  isCardInView,
  title,
  duration,
  value,
  initialValue,
  valueSymbol,
  children,
}: GhoCardProps) {
  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-2xl bg-[--bg-5] p-8"
    >
      <p
        className={`${
          isCardInView ? "visible" : "invisible"
        } mb-2 font-brand text-2xl font-semibold leading-[105%] tracking-[-.48px] text-[--fg-1] whitespace-nowrap`}
      >
        <span className="inline-flex justify-end">
          {valueSymbol === "+" && "+"}
          <NumberCounter
            value={value}
            initialValue={initialValue}
            isInView={isCardInView}
          />
          {valueSymbol === "%" && "%"}
        </span>
      </p>
      <p className="leading-[135%] tracking-[-.09px]">
        <span className="text-[--fg-2]">{title}</span>
        <span className="inline-block mx-[0.375em] align-[0.25em] h-[3px] w-[3px] rounded-full bg-[--fg-4]"></span>
        <span className="text-[--fg-3]">{duration}</span>
      </p>
      {children}
    </div>
  );
}

export default GhoCard;
