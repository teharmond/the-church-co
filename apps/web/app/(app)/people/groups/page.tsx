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
import NewGroupDialog from "./new-group-dialog";
import { Input } from "@the-church-co/ui/input";
import { Button } from "@the-church-co/ui/button";

const groups = [
  {
    title: "Young Adults",
    description: "Ages 18-30 fellowship group",
    path: "/people/groups/1",
  },
  {
    title: "Bible Study Group",
    description: "Weekly scripture study",
    path: "/people/groups/2",
  },
];

export default function page() {
  const router = useRouter();
  return (
    <div className="mt-6 w-full space-y-6 p-5">
      <SettingsSection>
        <div className="flex justify-between">
          <SettingsHeader>
            <SettingsTitle>Groups</SettingsTitle>
            <SettingsDescription>Manage your community groups.</SettingsDescription>
          </SettingsHeader>
          <NewGroupDialog />
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Search groups" className="h-10 w-full" />
          <Button className="h-10 rounded-md" variant="outline">
            View Archived
          </Button>
        </div>
        <SettingsContent>
          {groups.map((group, index) => {
            return (
              <SettingsRow
                key={group.path}
                larger
                isFirstRow={index === 0}
                onClick={() => router.push(group.path)}
                className={cn(
                  "group cursor-pointer hover:bg-accent",
                  index === 0 && "rounded-t-md",
                  index === groups.length - 1 && "rounded-b-md",
                )}
              >
                <SettingsRowDetails>
                  <SettingsRowTitle className="flex items-center gap-2">
                    {group.title}
                  </SettingsRowTitle>
                  <SettingsRowDescription>
                    {group.description}
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
