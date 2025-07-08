import React from "react";
import { NavMenu } from "../../components/marketing/nav/nav-menu";
import Footer from "../../components/marketing/footer/footer";
import CTA from "../../components/marketing/cta/cta";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen flex-col bg-accent">
      <NavMenu />
      {children}
      <CTA />
      <Footer />
    </div>
  );
}
