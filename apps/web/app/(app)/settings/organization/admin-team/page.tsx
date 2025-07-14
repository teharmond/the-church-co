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
import NewTeamMemberDialog from "./new-team-member-dialog";
import { Input } from "@the-church-co/ui/input";
import { Button } from "@the-church-co/ui/button";

const teamMembers = [
  {
    title: "John Smith",
    description: "john.smith@church.com",
    path: "/settings/organization/admin-team/1",
  },
  {
    title: "Sarah Johnson",
    description: "sarah.johnson@church.com",
    path: "/settings/organization/admin-team/2",
  },
];

export default function page() {
  const router = useRouter();
  return (
    <div className="mt-6 w-full space-y-6 p-5">
      <SettingsSection>
        <div className="flex justify-between">
          <SettingsHeader>
            <SettingsTitle>Admin Team</SettingsTitle>
            <SettingsDescription>Manage your admin team members.</SettingsDescription>
          </SettingsHeader>
          <NewTeamMemberDialog />
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Search team members" className="h-10 w-full" />
          <Button className="h-10 rounded-md" variant="outline">
            View Archived
          </Button>
        </div>
        <SettingsContent>
          {teamMembers.map((member, index) => {
            return (
              <SettingsRow
                key={member.path}
                larger
                isFirstRow={index === 0}
                onClick={() => router.push(member.path)}
                className={cn(
                  "group cursor-pointer hover:bg-accent",
                  index === 0 && "rounded-t-md",
                  index === teamMembers.length - 1 && "rounded-b-md",
                )}
              >
                <SettingsRowDetails>
                  <SettingsRowTitle className="flex items-center gap-2">
                    {member.title}
                  </SettingsRowTitle>
                  <SettingsRowDescription>
                    {member.description}
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