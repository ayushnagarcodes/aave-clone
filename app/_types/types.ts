export interface MenuType {
  id: number;
  title: "Products" | "Resources" | "Developers";
  x: number;
  width: number;
  height: number;
  arrowX: number;
}

export type ResourcesLinkType =
  | "Brand"
  | "FAQ"
  | "Help & Support"
  | "Governance";

export type DevelopersLinkType = "Documentation" | "Security" | "Bug Bounty";

export type IntroTabType = "Supply" | "Borrow";

export interface FeatureType {
  id: number;
  title: string;
  description: string;
}

export interface BuilderType {
  id: number;
  name: string;
  Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  row: number;
}

export interface SecurityType {
  id: number;
  title: string;
  description: string;
}

export interface FaqType {
  id: number;
  question: string;
  answer: string;
}

export interface FooterType {
  id: number;
  title: string;
  subLinks: string[];
}
