import { useMotionValueEvent, useSpring } from "motion/react";
import { useEffect, useState } from "react";

interface NumberCounterProps {
  value: number;
  decimals?: number;
  isInView?: boolean;
  initialValue?: number;
}

function NumberCounter({
  value,
  decimals = 0,
  isInView,
  initialValue = 0,
}: NumberCounterProps) {
  const [displayValue, setDisplayValue] = useState(initialValue);
  const springValue = useSpring(initialValue, { bounce: 0, duration: 1000 });

  useMotionValueEvent(springValue, "change", (v) =>
    setDisplayValue(parseFloat(v.toFixed(decimals)))
  );

  useEffect(() => {
    if (isInView) springValue.set(value);
  }, [isInView, value]);

  return <span>{new Intl.NumberFormat("en-US").format(displayValue)}</span>;
}

export default NumberCounter;
