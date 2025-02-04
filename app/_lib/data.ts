import type {
  BuilderType,
  FeatureType,
  MenuType,
  SecurityType,
} from "@/_types/types";
import IconAaveChanInitiative from "@/_assets/svgs/builders/aave-chan-initiative.svg";
import IconPaladin from "@/_assets/svgs/builders/paladin.svg";
import IconTokenLogic from "@/_assets/svgs/builders/token-logic.svg";
import IconTokenTerminal from "@/_assets/svgs/builders/token-terminal.svg";
import IconInstadapp from "@/_assets/svgs/builders/instadapp.svg";
import IconSkate from "@/_assets/svgs/builders/skate.svg";
import IconMessari from "@/_assets/svgs/builders/messari.svg";
import IconDune from "@/_assets/svgs/builders/dune.svg";
import IconNotional from "@/_assets/svgs/builders/notional.svg";
import IconChaosLabs from "@/_assets/svgs/builders/chaos-labs.svg";
import IconBoredGhost from "@/_assets/svgs/builders/bored-ghost-developing.svg";
import IconDefiSaver from "@/_assets/svgs/builders/defi-saver.svg";
import IconSpectra from "@/_assets/svgs/builders/spectra.svg";
import IconIdle from "@/_assets/svgs/builders/idle.svg";
import IconTheGraph from "@/_assets/svgs/builders/the-graph.svg";
import IconDefiLlama from "@/_assets/svgs/builders/defi-llama.svg";
import IconBrahma from "@/_assets/svgs/builders/brahma.svg";
import IconSymbiosis from "@/_assets/svgs/builders/symbiosis.svg";

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

export const buildersData: { group1: BuilderType[]; group2: BuilderType[] } = {
  group1: [
    {
      id: 1,
      name: "Aave Chan Initiative",
      Logo: IconAaveChanInitiative,
      row: 1,
    },
    {
      id: 2,
      name: "Paladin",
      Logo: IconPaladin,
      row: 1,
    },
    {
      id: 3,
      name: "TokenLogic",
      Logo: IconTokenLogic,
      row: 1,
    },
    {
      id: 4,
      name: "Token Terminal",
      Logo: IconTokenTerminal,
      row: 2,
    },
    {
      id: 5,
      name: "Instadapp",
      Logo: IconInstadapp,
      row: 2,
    },
    {
      id: 6,
      name: "Skate",
      Logo: IconSkate,
      row: 2,
    },
    {
      id: 7,
      name: "Messari",
      Logo: IconMessari,
      row: 3,
    },
    {
      id: 8,
      name: "Dune",
      Logo: IconDune,
      row: 3,
    },
    {
      id: 9,
      name: "Notional",
      Logo: IconNotional,
      row: 3,
    },
  ],

  group2: [
    {
      id: 1,
      name: "Chaos Labs",
      Logo: IconChaosLabs,
      row: 1,
    },
    {
      id: 2,
      name: "Bored Ghost Developing",
      Logo: IconBoredGhost,
      row: 1,
    },
    {
      id: 3,
      name: "DefiSaver",
      Logo: IconDefiSaver,
      row: 1,
    },
    {
      id: 4,
      name: "Spectra",
      Logo: IconSpectra,
      row: 2,
    },
    {
      id: 5,
      name: "Idle",
      Logo: IconIdle,
      row: 2,
    },
    {
      id: 6,
      name: "The Graph",
      Logo: IconTheGraph,
      row: 2,
    },
    {
      id: 7,
      name: "DefiLlama",
      Logo: IconDefiLlama,
      row: 3,
    },
    {
      id: 8,
      name: "Brahma",
      Logo: IconBrahma,
      row: 3,
    },
    {
      id: 9,
      name: "Symbiosis",
      Logo: IconSymbiosis,
      row: 3,
    },
  ],
};

export const securityCardsData: SecurityType[] = [
  {
    id: 1,
    title: "Extensive Audits",
    description:
      "Peace of mind supported by multiple audits by the world’s leading security firms.",
  },
  {
    id: 2,
    title: "Bug Bounty",
    description:
      "Security is a top priority. Report vulnerabilities or bugs responsibly and get rewarded.",
  },
  {
    id: 3,
    title: "Shortfall Secured",
    description:
      "The Aave Protocol is secured with a backstop against protocol insolvency.",
  },
  {
    id: 4,
    title: "5 Years Strong",
    description:
      "Aave is leading the DeFi Renaissance, committed to it’s mission of bringing global finance onchain.",
  },
];
