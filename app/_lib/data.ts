import type { FeatureType, MenuType } from "@/_types/types";

export const navItemsData: MenuType[] = [
  {
    id: 1,
    title: "Products",
    x: -146,
    width: 376,
    height: 277.6,
    arrowX: 45.5,
  },
  {
    id: 2,
    title: "Resources",
    x: -151,
    width: 575.7,
    height: 276,
    arrowX: 150,
  },
  {
    id: 3,
    title: "Developers",
    x: -181,
    width: 615.883,
    height: 212,
    arrowX: 262.5,
  },
];

export const featureCardsData: FeatureType[] = [
  {
    id: 1,
    title: "Swap",
    description: "Swap any ERC-20, even those borrowed or supplied.",
  },
  {
    id: 2,
    title: "Stake",
    description: "Earn rewards for securing the protocol.",
  },
  {
    id: 3,
    title: "Health Factor",
    description: "Easily track the risk level of your borrow positions.",
  },
  {
    id: 4,
    title: "Multi-Network",
    description: "Deployable on any EVM compatible network.",
  },
];

export const featureRowsData: FeatureType[] = [
  {
    id: 1,
    title: "Non-Custodial",
    description:
      "Users maintain control over their own funds throughout the supplying and borrowing process.",
  },
  {
    id: 2,
    title: "Transparent",
    description:
      "The Aave Protocol is open source and transactions are visible to anyone.",
  },
  {
    id: 3,
    title: "Community Governed",
    description:
      "AAVE token holders decide which assets are listed and steer protocol development.",
  },
  {
    id: 4,
    title: "Composability",
    description:
      "Integrating Aave's liquidity pools and interest rate mechanisms enables the creation of diverse products and applications.",
  },
];
