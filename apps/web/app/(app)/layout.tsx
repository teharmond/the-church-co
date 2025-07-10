import { SidebarInset, SidebarProvider } from "@the-church-co/ui/sidebar";
import React from "react";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
