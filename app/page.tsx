"use client";

import Header from "@/_components/header/Header";
import PageStateProvider from "@/_context/PageContext";
import Hero from "@/_components/hero/Hero";
import Intro from "@/_components/intro/Intro";
import { motion } from "motion/react";
import Numbers from "@/_components/numbers/Numbers";
import Features from "@/_components/features/Features";
import Gho from "@/_components/gho/Gho";
import Builders from "@/_components/builders/Builders";
import TrustedBy from "@/_components/trustedBy/TrustedBy";
import Forum from "@/_components/forum/Forum";
import Security from "@/_components/security/Security";
import FaqContainer from "@/_components/faq/FaqContainer";
import Cta from "@/_components/cta/Cta";

const homeVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

export default function Home() {
  return (
    <>
      <PageStateProvider>
        <Header />
      </PageStateProvider>

      <motion.main
        variants={homeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h-full min-h-dvh"
      >
        <Hero />
        <Intro />
        <Numbers />
        <Features />
        <Gho />
        <Builders />
        <TrustedBy />
        <Forum />
        <Security />
        <hr className="section-divider" />
        <FaqContainer />
        <hr className="section-divider" />
        <Cta />
      </motion.main>
    </>
  );
}
