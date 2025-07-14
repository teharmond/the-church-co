import { Input } from "@the-church-co/ui/input";
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
import { Button } from "@the-church-co/ui/button";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@the-church-co/ui/avatar";
import { Switch } from "@the-church-co/ui/switch";

export default function page() {
  return (
    <div className="mt-6 w-full space-y-6 p-5">
      <SettingsSection>
        <SettingsHeader>
          <SettingsTitle>Profile</SettingsTitle>
          <SettingsDescription>
            Manage your profile information.
          </SettingsDescription>
        </SettingsHeader>
        <SettingsContent>
          <SettingsRow larger isFirstRow>
            <SettingsRowDetails>
              <SettingsRowTitle>Avatar</SettingsRowTitle>
              <SettingsRowDescription>
                Update your profile picture.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>First Name</SettingsRowTitle>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Input placeholder="First Name" defaultValue="John" />
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>Last Name</SettingsRowTitle>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Input placeholder="Last Name" defaultValue="Doe" />
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>Email</SettingsRowTitle>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Input placeholder="Email" defaultValue="john.doe@example.com" />
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>Communication Preferences</SettingsRowTitle>
              <SettingsRowDescription>
                Would you like to receive occasional email updates?
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Switch defaultChecked />
            </SettingsRowAction>
          </SettingsRow>
        </SettingsContent>
        <div className="mt-2 flex justify-end">
          <Button>Save</Button>
        </div>
      </SettingsSection>
      <SettingsSection>
        <SettingsHeader>
          <SettingsTitle>Privacy</SettingsTitle>
        </SettingsHeader>
        <SettingsContent>
          <SettingsRow
            larger
            isFirstRow
            className="cursor-pointer rounded-t-md hover:bg-accent"
          >
            <SettingsRowDetails>
              <SettingsRowTitle>Request Data Deletion</SettingsRowTitle>
            </SettingsRowDetails>
          </SettingsRow>
          <SettingsRow
            larger
            className="cursor-pointer rounded-b-md hover:bg-accent"
          >
            <SettingsRowDetails>
              <SettingsRowTitle>Request Data Copy</SettingsRowTitle>
            </SettingsRowDetails>
          </SettingsRow>
        </SettingsContent>
      </SettingsSection>
    </div>
  );
}
