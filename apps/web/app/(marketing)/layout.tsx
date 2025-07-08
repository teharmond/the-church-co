import React from "react";
import { NavMenu } from "../../components/marketing/nav/nav-menu";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <NavMenu />
      {children}
    </div>
  );
}
