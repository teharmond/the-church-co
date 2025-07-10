import { SidebarInset, SidebarProvider } from "@the-church-co/ui/sidebar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
