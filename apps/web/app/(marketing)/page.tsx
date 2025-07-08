import React from "react";
import Hero from "../../components/marketing/hero/hero";
import SocialProofMarque from "../../components/marketing/social-proof/marque";
import Pricing from "../../components/marketing/pricing/pricing";

export default function page() {
  return (
    <div>
      <Hero />
      <SocialProofMarque />
      <Pricing />
    </div>
  );
}
