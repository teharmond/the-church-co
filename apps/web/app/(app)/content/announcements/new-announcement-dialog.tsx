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

export default function NewAnnouncementDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Announcement</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Announcement</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Create a new announcement for your organization.
        </DialogDescription>

        <Input placeholder="Announcement Title" />

        <DialogFooter>
          <Button>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}