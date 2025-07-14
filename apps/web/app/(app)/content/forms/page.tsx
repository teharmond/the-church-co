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
import NewFormDialog from "./new-form-dialog";
import { Input } from "@the-church-co/ui/input";
import { Button } from "@the-church-co/ui/button";

const forms = [
  {
    title: "Contact Form",
    description: "General contact form for visitors",
    path: "/content/forms/1",
  },
  {
    title: "Registration Form",
    description: "Event registration and sign-up form",
    path: "/content/forms/2",
  },
];

export default function page() {
  const router = useRouter();
  return (
    <div className="mt-6 w-full space-y-6 p-5">
      <SettingsSection>
        <div className="flex justify-between">
          <SettingsHeader>
            <SettingsTitle>Forms</SettingsTitle>
            <SettingsDescription>Manage your forms.</SettingsDescription>
          </SettingsHeader>
          <NewFormDialog />
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Search forms" className="h-10 w-full" />
          <Button className="h-10 rounded-md" variant="outline">
            View Archived
          </Button>
        </div>
        <SettingsContent>
          {forms.map((setting, index) => {
            return (
              <SettingsRow
                key={setting.path}
                larger
                isFirstRow={index === 0}
                onClick={() => router.push(setting.path)}
                className={cn(
                  "group cursor-pointer hover:bg-accent",
                  index === 0 && "rounded-t-md",
                  index === forms.length - 1 && "rounded-b-md",
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
