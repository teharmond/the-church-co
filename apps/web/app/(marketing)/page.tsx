import React from "react";
import Hero from "../../components/marketing/hero/hero";
import SocialProofMarque from "../../components/marketing/social-proof/logo-marque";
import Pricing from "../../components/marketing/pricing/pricing";
import FbMarque from "../../components/marketing/social-proof/fb-marque";

export default function page() {
  return (
    <div>
      <Hero />
      <SocialProofMarque />
      <Pricing />
      <FbMarque />
    </div>
  );
}
