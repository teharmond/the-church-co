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

export default function TeamMemberSettingsPage() {
  const [role, setRole] = useState("admin");
  const [status, setStatus] = useState("active");

  return (
    <div className="mt-6 w-full space-y-6 p-5">
      <SettingsSection>
        <SettingsHeader>
          <SettingsTitle>Team Member Settings</SettingsTitle>
          <SettingsDescription>
            Configure team member details and permissions.
          </SettingsDescription>
        </SettingsHeader>
        <SettingsContent>
          <SettingsRow larger isFirstRow>
            <SettingsRowDetails>
              <SettingsRowTitle>Full Name</SettingsRowTitle>
              <SettingsRowDescription>
                The team member's full name.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Input placeholder="Full Name" defaultValue="John Smith" />
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>Email Address</SettingsRowTitle>
              <SettingsRowDescription>
                The team member's email address for login.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Input placeholder="Email" defaultValue="john.smith@church.com" />
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>Role</SettingsRowTitle>
              <SettingsRowDescription>
                The team member's role and permission level.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>Status</SettingsRowTitle>
              <SettingsRowDescription>
                Control the team member's access status.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
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
              <SettingsRowTitle>Reset Password</SettingsRowTitle>
              <SettingsRowDescription>
                Send a password reset email to this team member.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction>
              <Button variant="outline" className="gap-2">
                Send Reset Email
              </Button>
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow>
            <SettingsRowDetails>
              <SettingsRowTitle>Remove Team Member</SettingsRowTitle>
              <SettingsRowDescription>
                Permanently remove this team member. This action cannot be undone.
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