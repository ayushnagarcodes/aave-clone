function SvgPulse() {
  return (
    <svg
      className="overflow-visible mb-[1px]"
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
    >
      <circle
        className="animate-pulse origin-center"
        cx="6.5"
        cy="6.5"
        r="6.5"
        fill="#E2E0FF"
      />
      <circle
        className="animate-pulseDot origin-center"
        cx="6.5"
        cy="6.5"
        r="3.5"
        fill="#9896FF"
      />
    </svg>
  );
}

export default SvgPulse;
