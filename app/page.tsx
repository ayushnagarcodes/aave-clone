import Header from "@/_components/header/Header";
import PageStateProvider from "@/_context/PageContext";

export default function Home() {
  return (
    <>
      <PageStateProvider>
        <Header />
      </PageStateProvider>
      <main className="h-full min-h-dvh md:px-12 px-5">
        <h1></h1>
      </main>
    </>
  );
}
