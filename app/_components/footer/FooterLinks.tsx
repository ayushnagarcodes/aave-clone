import type { FooterType } from "@/_types/types";
import Link from "next/link";

interface FooterLinksProps {
  data: FooterType;
}

function FooterLinks({ data }: FooterLinksProps) {
  return (
    <li className="tracking-[-.09px]">
      <p className="font-brand text-sm leading-[105%] font-medium">
        {data.title}
      </p>
      <ul className="list-none flex flex-col gap-y-3 mt-4">
        {data.subLinks.map((link) => (
          <li key={link} className="leading-[105%]">
            <Link
              className="leading-[120%] text-sm text-[--fg-3] hover:text-[--fg-1] transition-colors duration-100 ease-in"
              href="/"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default FooterLinks;
