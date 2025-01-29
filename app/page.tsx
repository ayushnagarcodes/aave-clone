"use client";

import Header from "@/_components/header/Header";
import PageStateProvider from "@/_context/PageContext";
import Hero from "@/_components/hero/Hero";
import Intro from "@/_components/intro/Intro";
import { motion } from "motion/react";

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
      </motion.main>
    </>
  );
}
