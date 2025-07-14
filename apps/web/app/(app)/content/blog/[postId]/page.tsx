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

export default function BlogPostSettingsPage() {
  const [status, setStatus] = useState("draft");
  const [visibility, setVisibility] = useState("public");

  return (
    <div className="mt-6 w-full space-y-6 p-5">
      <SettingsSection>
        <SettingsHeader>
          <SettingsTitle>Blog Post Settings</SettingsTitle>
          <SettingsDescription>
            Configure your blog post details and visibility.
          </SettingsDescription>
        </SettingsHeader>
        <SettingsContent>
          <SettingsRow larger isFirstRow>
            <SettingsRowDetails>
              <SettingsRowTitle>Post Title</SettingsRowTitle>
              <SettingsRowDescription>
                The title of your blog post.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Input placeholder="Post Title" defaultValue="Welcome to Our Church" />
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>URL Slug</SettingsRowTitle>
              <SettingsRowDescription>
                The URL path for this blog post.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Input placeholder="URL Slug" defaultValue="welcome-to-our-church" />
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>Excerpt</SettingsRowTitle>
              <SettingsRowDescription>
                A brief summary of your blog post.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Textarea placeholder="Post Excerpt" />
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>Status</SettingsRowTitle>
              <SettingsRowDescription>
                Control whether this post is published.
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
              <SettingsRowTitle>Visibility</SettingsRowTitle>
              <SettingsRowDescription>
                Who can view this blog post.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Select value={visibility} onValueChange={setVisibility}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select visibility" />
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
          <SettingsTitle>Post Actions</SettingsTitle>
          <SettingsDescription>
            Manage this blog post with quick actions.
          </SettingsDescription>
        </SettingsHeader>
        <SettingsContent>
          <SettingsRow isFirstRow>
            <SettingsRowDetails>
              <SettingsRowTitle>Duplicate Post</SettingsRowTitle>
              <SettingsRowDescription>
                Create a copy of this blog post.
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
              <SettingsRowTitle>Delete Post</SettingsRowTitle>
              <SettingsRowDescription>
                Permanently remove this blog post. This action cannot be undone.
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