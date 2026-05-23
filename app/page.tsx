import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Credentials } from "@/components/Credentials";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhyBloom } from "@/components/WhyBloom";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
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
