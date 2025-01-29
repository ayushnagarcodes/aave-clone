"use client";

import Header from "@/_components/header/Header";
import PageStateProvider from "@/_context/PageContext";
import Hero from "@/_components/hero/Hero";

export default function Home() {
  return (
    <>
      <PageStateProvider>
        <Header />
      </PageStateProvider>

      <main className="h-full min-h-dvh">
        <Hero />
      </main>
    </>
  );
}
