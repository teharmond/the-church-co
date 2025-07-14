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
import NewFundDialog from "./new-fund-dialog";
import { Input } from "@the-church-co/ui/input";
import { Button } from "@the-church-co/ui/button";

const funds = [
  {
    title: "General Fund",
    description: "General operational fund for the church",
    path: "/giving/funds/1",
  },
  {
    title: "Building Fund",
    description: "Fund for building projects and renovations",
    path: "/giving/funds/2",
  },
];

export default function page() {
  const router = useRouter();
  return (
    <div className="mt-6 w-full space-y-6 p-5">
      <SettingsSection>
        <div className="flex justify-between">
          <SettingsHeader>
            <SettingsTitle>Funds</SettingsTitle>
            <SettingsDescription>Manage your funds.</SettingsDescription>
          </SettingsHeader>
          <NewFundDialog />
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Search funds" className="h-10 w-full" />
          <Button className="h-10 rounded-md" variant="outline">
            View Archived
          </Button>
        </div>
        <SettingsContent>
          {funds.map((setting, index) => {
            return (
              <SettingsRow
                key={setting.path}
                larger
                isFirstRow={index === 0}
                onClick={() => router.push(setting.path)}
                className={cn(
                  "group cursor-pointer hover:bg-accent",
                  index === 0 && "rounded-t-md",
                  index === funds.length - 1 && "rounded-b-md",
                )}
              >
                <SettingsRowDetails>
                  <SettingsRowTitle className="flex items-center gap-2">
                    {setting.title}
                  </SettingsRowTitle>
                  <SettingsRowDescription>
                    {setting.description}
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
