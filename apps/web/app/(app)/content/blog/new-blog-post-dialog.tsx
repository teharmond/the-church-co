import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@the-church-co/ui/dialog";
import { Button } from "@the-church-co/ui/button";
import { Input } from "@the-church-co/ui/input";

export default function NewBlogPostDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Blog Post</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Blog Post</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Create a new blog post for your website.
        </DialogDescription>

        <Input placeholder="Post Title" />
        <Input placeholder="URL Slug" />

        <DialogFooter>
          <Button>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}