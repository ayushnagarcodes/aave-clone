import Link from "next/link";
import ArrowRightMedium from "@/_assets/svgs/icons/arrow-right-medium.svg";

interface LinkMoreProps {
  text: string;
  className?: string;
}

function LinkMore({ text, className }: LinkMoreProps) {
  return (
    <Link href="/" className={`link-more ${className}`}>
      {text}
      <ArrowRightMedium />
    </Link>
  );
}

export default LinkMore;
