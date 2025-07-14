"use client";

import { cn } from "@the-church-co/ui/lib/utils";
import {
  SettingsContent,
  SettingsDescription,
  SettingsHeader,
  SettingsRow,
  SettingsRowAction,
  SettingsRowDescription,
  SettingsRowDetails,
  SettingsRowTitle,
  SettingsSection,
  SettingsTitle,
} from "@the-church-co/ui/settings-sections";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import NewPageDialog from "./new-page-dialog";
import { Input } from "@the-church-co/ui/input";
import { Button } from "@the-church-co/ui/button";

const pages = [
  {
    title: "About Us",
    description: "/about",
    path: "/website/pages/1",
  },
  {
    title: "Contact",
    description: "/contact",
    path: "/website/pages/2",
  },
];

export default function page() {
  const router = useRouter();
  return (
    <div className="mt-6 w-full space-y-6 p-5">
      <SettingsSection>
        <div className="flex justify-between">
          <SettingsHeader>
            <SettingsTitle>Pages</SettingsTitle>
            <SettingsDescription>Manage your website pages.</SettingsDescription>
          </SettingsHeader>
          <NewPageDialog />
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Search pages" className="h-10 w-full" />
          <Button className="h-10 rounded-md" variant="outline">
            View Archived
          </Button>
        </div>
        <SettingsContent>
          {pages.map((page, index) => {
            return (
              <SettingsRow
                key={page.path}
                larger
                isFirstRow={index === 0}
                onClick={() => router.push(page.path)}
                className={cn(
                  "group cursor-pointer hover:bg-accent",
                  index === 0 && "rounded-t-md",
                  index === pages.length - 1 && "rounded-b-md",
                )}
              >
                <SettingsRowDetails>
                  <SettingsRowTitle className="flex items-center gap-2">
                    {page.title}
                  </SettingsRowTitle>
                  <SettingsRowDescription>
                    {page.description}
                  </SettingsRowDescription>
                </SettingsRowDetails>
                <SettingsRowAction larger>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </SettingsRowAction>
              </SettingsRow>
            );
          })}
        </SettingsContent>
      </SettingsSection>
    </div>
  );
}
