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

export default function NewGroupDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Group</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Group</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Create a new group for your community.
        </DialogDescription>

        <Input placeholder="Group Name" />
        <Input placeholder="Description" />

        <DialogFooter>
          <Button>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}