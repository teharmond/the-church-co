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
import NewBlogPostDialog from "./new-blog-post-dialog";
import { Input } from "@the-church-co/ui/input";
import { Button } from "@the-church-co/ui/button";

const blogPosts = [
  {
    title: "Welcome to Our Church",
    description: "An introduction to our community",
    path: "/content/blog/1",
  },
  {
    title: "Sunday Service Updates",
    description: "Latest news and announcements",
    path: "/content/blog/2",
  },
];

export default function page() {
  const router = useRouter();
  return (
    <div className="mt-6 w-full space-y-6 p-5">
      <SettingsSection>
        <div className="flex justify-between">
          <SettingsHeader>
            <SettingsTitle>Blog</SettingsTitle>
            <SettingsDescription>Manage your blog posts and articles.</SettingsDescription>
          </SettingsHeader>
          <NewBlogPostDialog />
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Search blog posts" className="h-10 w-full" />
          <Button className="h-10 rounded-md" variant="outline">
            View Archived
          </Button>
        </div>
        <SettingsContent>
          {blogPosts.map((post, index) => {
            return (
              <SettingsRow
                key={post.path}
                larger
                isFirstRow={index === 0}
                onClick={() => router.push(post.path)}
                className={cn(
                  "group cursor-pointer hover:bg-accent",
                  index === 0 && "rounded-t-md",
                  index === blogPosts.length - 1 && "rounded-b-md",
                )}
              >
                <SettingsRowDetails>
                  <SettingsRowTitle className="flex items-center gap-2">
                    {post.title}
                  </SettingsRowTitle>
                  <SettingsRowDescription>
                    {post.description}
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
