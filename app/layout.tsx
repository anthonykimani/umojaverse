import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UmojaVerse",
  description: "Platform for tech builders in Web3, Blockchain, Metaverse, and AI",
};

const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Extralight.otf",
      weight: "200",
    },
    {
      path: "../public/fonts/ClashDisplay-Light.otf",
      weight: "300",
    },
    {
      path: "../public/fonts/ClashDisplay-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/ClashDisplay-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/ClashDisplay-Semibold.otf",
      weight: "600",
    },
    {
      path: "../public/fonts/ClashDisplay-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-clashDisplay",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${clashDisplay.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
