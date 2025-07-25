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
import NewAnnouncementDialog from "./new-announcement-dialog";
import { Input } from "@the-church-co/ui/input";
import { Button } from "@the-church-co/ui/button";

const announcements = [
  {
    title: "Sunday Service Change",
    description: "Important update about this Sunday's service time",
    path: "/content/announcements/1",
  },
  {
    title: "Community Event",
    description: "Annual community outreach event announcement",
    path: "/content/announcements/2",
  },
];

export default function page() {
  const router = useRouter();
  return (
    <div className="mt-6 w-full space-y-6 p-5">
      <SettingsSection>
        <div className="flex justify-between">
          <SettingsHeader>
            <SettingsTitle>Announcements</SettingsTitle>
            <SettingsDescription>Manage your announcements.</SettingsDescription>
          </SettingsHeader>
          <NewAnnouncementDialog />
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Search announcements" className="h-10 w-full" />
          <Button className="h-10 rounded-md" variant="outline">
            View Archived
          </Button>
        </div>
        <SettingsContent>
          {announcements.map((setting, index) => {
            return (
              <SettingsRow
                key={setting.path}
                larger
                isFirstRow={index === 0}
                onClick={() => router.push(setting.path)}
                className={cn(
                  "group cursor-pointer hover:bg-accent",
                  index === 0 && "rounded-t-md",
                  index === announcements.length - 1 && "rounded-b-md",
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
