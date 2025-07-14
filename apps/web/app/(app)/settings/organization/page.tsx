"use client";

import {
  SettingsSection,
  SettingsHeader,
  SettingsTitle,
  SettingsContent,
  SettingsRowTitle,
  SettingsRow,
  SettingsRowDescription,
  SettingsRowDetails,
  SettingsRowAction,
  SettingsDescription,
} from "@the-church-co/ui/settings-sections";
import { Input } from "@the-church-co/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@the-church-co/ui/select";
import { Button } from "@the-church-co/ui/button";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import CreditCard from "@the-church-co/ui/icons/credit-card";
import Users from "@the-church-co/ui/icons/users";
import Integrations from "@the-church-co/ui/icons/integrations";
import Campuses from "@the-church-co/ui/icons/campuses";
import Blocked from "@the-church-co/ui/icons/blocked";
import ColorPalette from "@the-church-co/ui/icons/color-palette";
import { cn } from "@the-church-co/ui/lib/utils";

const tabs = [
  {
    label: "General",
    value: "general",
  },
  {
    label: "Admin Team",
    value: "admin-team",
  },
  {
    label: "Campuses",
    value: "campuses",
  },
];

const globalAccountSettings = [
  {
    title: "Billing",
    description: "Manage your plan and billing information.",
    path: "/settings/billing",
    icon: CreditCard,
  },
  {
    title: "Admin Team",
    description: "Manage administrators and their permissions.",
    path: "/settings/admin-team",
    icon: Users,
  },
  {
    title: "Branding",
    description: "Customize your organization's visual identity.",
    path: "/settings/branding",
    icon: ColorPalette,
  },
  {
    title: "Block List",
    description: "Manage blocked users and content filters.",
    path: "/settings/block-list",
    icon: Blocked,
  },
  {
    title: "Campuses",
    description: "Configure and manage multiple campus locations.",
    path: "/settings/campuses",
    icon: Campuses,
  },
  {
    title: "Integrations",
    description: "Connect third-party services and APIs.",
    path: "/settings/integrations",
    icon: Integrations,
  },
];

export default function OrganizationSettingsPage() {
  const router = useRouter();
  return (
    <div className="mt-6 w-full space-y-6 p-5">
      <SettingsSection>
        <SettingsHeader>
          <SettingsTitle>Organization Settings</SettingsTitle>
          <SettingsDescription>
            Manage your organization's settings.
          </SettingsDescription>
        </SettingsHeader>
        <SettingsContent>
          <SettingsRow larger isFirstRow>
            <SettingsRowDetails>
              <SettingsRowTitle>Organization Name</SettingsRowTitle>
              <SettingsRowDescription>
                The name of your church or organization.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Input
                placeholder="Organization Name"
                defaultValue="The Church Co"
              />
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>Organization ID</SettingsRowTitle>
              <SettingsRowDescription>
                We use this for things like webpage previews.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Input
                placeholder="Organization ID"
                defaultValue="the-church-co"
              />
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>Timezone</SettingsRowTitle>
              <SettingsRowDescription>
                This helps us show events on your website in the correct
                timezone.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Select defaultValue="America/New_York">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="America/New_York">
                    America/New York
                  </SelectItem>
                  <SelectItem value="America/Los_Angeles">
                    America/Los Angeles
                  </SelectItem>
                  <SelectItem value="America/Chicago">
                    America/Chicago
                  </SelectItem>
                </SelectContent>
              </Select>
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>Language</SettingsRowTitle>
              <SettingsRowDescription>
                What language should we use for your website?
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Select defaultValue="en">
                <SelectTrigger className="w-full" defaultValue="en">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                  <SelectItem value="it">Italiano</SelectItem>
                  <SelectItem value="ja">日本語</SelectItem>
                  <SelectItem value="ko">한국어</SelectItem>
                  <SelectItem value="pt">Português</SelectItem>
                  <SelectItem value="ru">Русский</SelectItem>
                  <SelectItem value="zh">中文</SelectItem>
                </SelectContent>
              </Select>
            </SettingsRowAction>
          </SettingsRow>
        </SettingsContent>
        <div className="mt-2 flex justify-end">
          <Button>Save</Button>
        </div>
      </SettingsSection>
      <SettingsSection>
        <SettingsHeader>
          <SettingsTitle>Global Account Settings</SettingsTitle>
        </SettingsHeader>
        <SettingsContent>
          {globalAccountSettings.map((setting, index) => {
            const Icon = setting.icon;
            return (
              <SettingsRow
                key={setting.path}
                larger
                isFirstRow={index === 0}
                onClick={() => router.push(setting.path)}
                className={cn(
                  "group cursor-pointer hover:bg-accent",
                  index === 0 && "rounded-t-md",
                  index === globalAccountSettings.length - 1 && "rounded-b-md",
                )}
              >
                <SettingsRowDetails>
                  <SettingsRowTitle className="flex items-center gap-2">
                    {Icon && (
                      <span className="text-primary">
                        <Icon height={20} width={20} />
                      </span>
                    )}
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
