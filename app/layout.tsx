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

const SITE_URL = "https://bloomcleaning.org";
const SITE_NAME = "Bloom Management";
const DESCRIPTION =
  "Owner-operated short-term rental management in Los Angeles, San Francisco, and Detroit. We handle cleanings, listings, dynamic pricing, maintenance, and the 2 a.m. stuff — so you don't have to.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bloom Management — Short-term rentals, beautifully run.",
    template: "%s · Bloom Management",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "short-term rental management",
    "Airbnb management",
    "vacation rental management",
    "property management",
    "Airbnb cleaning",
    "vacation rental cleaning",
    "dynamic pricing",
    "co-hosting",
    "Vrbo management",
    "short-term rental management Los Angeles",
    "Airbnb management San Francisco",
    "vacation rental management Detroit",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Property Management",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Bloom Management — Short-term rentals, beautifully run.",
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom Management — Short-term rentals, beautifully run.",
    description: DESCRIPTION,
  },
  icons: {
    icon: "/icon.svg",
  },
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
