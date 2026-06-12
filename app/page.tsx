import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Credentials } from "@/components/Credentials";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhyBloom } from "@/components/WhyBloom";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://bloomcleaning.org/#business",
  name: "Bloom Management",
  description:
    "Owner-operated short-term rental management. Cleanings, listings, dynamic pricing, and maintenance for Airbnb, Vrbo, and Booking.com hosts.",
  url: "https://bloomcleaning.org",
  email: "pierreharbin@bloomcleaning.org",
  image: "https://bloomcleaning.org/opengraph-image",
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Los Angeles" },
    { "@type": "City", name: "San Francisco" },
    { "@type": "City", name: "Detroit" },
  ],
  serviceType: [
    "Short-term rental management",
    "Airbnb co-hosting",
    "Vacation rental cleaning",
    "Dynamic pricing",
    "Property maintenance",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <Hero />
      <Credentials />
      <WhatWeDo />
      <WhyBloom />
      <FinalCta />
      <Footer />
    </>
  );
}
