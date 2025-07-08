import React from "react";
import { NavMenu } from "../../components/marketing/nav/nav-menu";
import Footer from "../../components/marketing/footer/footer";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <NavMenu />
      {children}
      <Footer />
    </div>
  );
}
