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
import { Textarea } from "@the-church-co/ui/textarea";
import { useState } from "react";
import Duplicate from "@the-church-co/ui/icons/duplicate";
import Trash from "@the-church-co/ui/icons/trash";

export default function PageSettingsPage() {
  const [status, setStatus] = useState("draft");
  const [access, setAccess] = useState("public");

  return (
    <div className="mt-6 w-full space-y-6 p-5">
      <SettingsSection>
        <SettingsHeader>
          <SettingsTitle>Page Settings</SettingsTitle>
          <SettingsDescription>
            Configure your page details and visibility.
          </SettingsDescription>
        </SettingsHeader>
        <SettingsContent>
          <SettingsRow larger isFirstRow>
            <SettingsRowDetails>
              <SettingsRowTitle>Page Title</SettingsRowTitle>
              <SettingsRowDescription>
                The display title for this page.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Input placeholder="Page Title" defaultValue="About Us" />
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>URL Slug</SettingsRowTitle>
              <SettingsRowDescription>
                The URL path for this page.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Input placeholder="URL Slug" defaultValue="about" />
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>Meta Description</SettingsRowTitle>
              <SettingsRowDescription>
                SEO description for search engines.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Textarea placeholder="Meta Description" />
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>Status</SettingsRowTitle>
              <SettingsRowDescription>
                Control whether this page is visible on your website.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectContent>
              </Select>
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>Access</SettingsRowTitle>
              <SettingsRowDescription>
                Who can view this page on your website.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Select value={access} onValueChange={setAccess}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select access level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="members">Members Only</SelectItem>
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
          <SettingsTitle>Page Actions</SettingsTitle>
          <SettingsDescription>
            Manage this page with quick actions.
          </SettingsDescription>
        </SettingsHeader>
        <SettingsContent>
          <SettingsRow isFirstRow>
            <SettingsRowDetails>
              <SettingsRowTitle>Duplicate Page</SettingsRowTitle>
              <SettingsRowDescription>
                Create a copy of this page with all its content.
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
              <SettingsRowTitle>Delete Page</SettingsRowTitle>
              <SettingsRowDescription>
                Permanently remove this page. This action cannot be undone.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction>
              <Button variant="destructive" className="gap-2">
                <Trash />
                Delete
              </Button>
            </SettingsRowAction>
          </SettingsRow>
        </SettingsContent>
      </SettingsSection>
    </div>
  );
}