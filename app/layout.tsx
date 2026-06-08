import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { DemoModalProvider } from "@/components/DemoModal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bloom Management — Short-term rentals, beautifully run.",
  description:
    "Owner-operated short-term rental management. Cleanings, listings, pricing, and the 2 a.m. stuff — handled.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body>
        <DemoModalProvider>{children}</DemoModalProvider>
      </body>
    </html>
  );
}
