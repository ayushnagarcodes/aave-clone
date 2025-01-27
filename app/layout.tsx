import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const ftRegolaNeue = localFont({
  src: [
    {
      path: "./_assets/fonts/FTRegolaNeueTrial-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_assets/fonts/FTRegolaNeueTrial-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./_assets/fonts/FTRegolaNeueTrial-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./_assets/fonts/FTRegolaNeueTrial-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-brand",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Aave",
  description:
    "Aave is an Open Source Protocol to create Non-Custodial Liquidity Markets to earn interest on supplying and borrowing assets with a variable interest rate. The protocol is designed for easy integration into your products and services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ftRegolaNeue.variable} ${inter.variable} relative mx-auto max-w-[1082px] font-sans antialiased text-[--fg-1] bg-[--bg-1] has-[header[data-hamburger-open="true"]]:overflow-clip`}
      >
        {children}
      </body>
    </html>
  );
}
