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

export default function NewPageDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Page</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Page</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Create a new page for your website.
        </DialogDescription>

        <Input placeholder="Page Title" />
        <Input placeholder="URL Slug" />

        <DialogFooter>
          <Button>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}