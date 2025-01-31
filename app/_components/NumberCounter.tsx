import { useMotionValueEvent, useSpring } from "motion/react";
import { useEffect, useState } from "react";

interface NumberCounterProps {
  value: number;
  decimals?: number;
  isInView?: boolean;
}

function NumberCounter({ value, decimals = 0, isInView }: NumberCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const springValue = useSpring(0, { bounce: 0, duration: 1000 });

  useMotionValueEvent(springValue, "change", (v) =>
    setDisplayValue(parseFloat(v.toFixed(decimals)))
  );

  useEffect(() => {
    if (isInView) springValue.set(value);
  }, [isInView, value]);

  return <span>{displayValue}</span>;
}

export default NumberCounter;
