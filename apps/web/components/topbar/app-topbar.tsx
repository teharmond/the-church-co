"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "@the-church-co/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@the-church-co/ui/breadcrumb";
import { getBreadcrumbPaths } from "./breadcrumb-paths";
import TopbarUser from "./topbar-user";
import TopbarTools from "./topbar-tools";

export default function AppTopbar() {
  const pathname = usePathname();
  const breadcrumbPaths = getBreadcrumbPaths(pathname);

  return (
    <header className="flex h-12 w-full items-center justify-between border-b pl-2 pr-3">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <div className="h-4 w-[1px] bg-border" />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbPaths.map((path, index) => (
              <React.Fragment key={path.href}>
                <BreadcrumbItem>
                  {index === breadcrumbPaths.length - 1 ? (
                    <BreadcrumbPage>{path.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={path.href}>
                      {path.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbPaths.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-2">
        <TopbarTools />
        <TopbarUser />
      </div>
    </header>
  );
}
