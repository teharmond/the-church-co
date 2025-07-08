import React from "react";
import Hero from "../../components/marketing/hero/hero";
import SocialProofMarque from "../../components/marketing/social-proof/logo-marque";
import Pricing from "../../components/marketing/pricing/pricing";
import FbMarque from "../../components/marketing/social-proof/fb-marque";
import Features from "../../components/marketing/features/features";
import Integrations from "../../components/marketing/integrations/integrations";

export default function page() {
  return (
    <div>
      <Hero />
      <SocialProofMarque />
      <Features />
      <Integrations />
      <Pricing />
      <FbMarque />
    </div>
  );
}
