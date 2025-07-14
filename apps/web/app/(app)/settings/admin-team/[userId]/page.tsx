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
import { useState } from "react";
import Duplicate from "@the-church-co/ui/icons/duplicate";
import Trash from "@the-church-co/ui/icons/trash";
import { Avatar, AvatarFallback, AvatarImage } from "@the-church-co/ui/avatar";

export default function TeamMemberSettingsPage() {
  const [role, setRole] = useState("admin");

  return (
    <div className="mt-6 w-full space-y-6 p-5">
      <SettingsSection>
        <SettingsHeader>
          <SettingsTitle>Team Member Settings</SettingsTitle>
          <SettingsDescription>
            Configure this team member's details and permissions.
          </SettingsDescription>
        </SettingsHeader>
        <SettingsContent>
          <SettingsRow larger isFirstRow>
            <SettingsRowDetails>
              <SettingsRowTitle>Avatar</SettingsRowTitle>
              <SettingsRowDescription>
                Update the team member's profile picture.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>First Name</SettingsRowTitle>
              <SettingsRowDescription>
                The team member's first name.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Input placeholder="First Name" defaultValue="John" />
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>Last Name</SettingsRowTitle>
              <SettingsRowDescription>
                The team member's last name.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Input placeholder="Last Name" defaultValue="Doe" />
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>Email</SettingsRowTitle>
              <SettingsRowDescription>
                The team member's email address.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Input placeholder="Email" defaultValue="john.doe@example.com" />
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>Role</SettingsRowTitle>
              <SettingsRowDescription>
                The team member's role and permissions level.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="owner">Owner</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                </SelectContent>
              </Select>
            </SettingsRowAction>
          </SettingsRow>
        </SettingsContent>
        <div className="mt-2 flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </SettingsSection>

      <SettingsSection>
        <SettingsHeader>
          <SettingsTitle>Team Member Actions</SettingsTitle>
          <SettingsDescription>
            Manage this team member with quick actions.
          </SettingsDescription>
        </SettingsHeader>
        <SettingsContent>
          <SettingsRow isFirstRow>
            <SettingsRowDetails>
              <SettingsRowTitle>Duplicate Member</SettingsRowTitle>
              <SettingsRowDescription>
                Create a copy of this team member with all their settings.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction>
              <Button variant="outline" className="gap-2">
                <Duplicate />
                Duplicate
              </Button>
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow>
            <SettingsRowDetails>
              <SettingsRowTitle>Remove Member</SettingsRowTitle>
              <SettingsRowDescription>
                Remove this member from the admin team. This action cannot be undone.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction>
              <Button variant="destructive" className="gap-2">
                <Trash />
                Remove
              </Button>
            </SettingsRowAction>
          </SettingsRow>
        </SettingsContent>
      </SettingsSection>
    </div>
  );
}