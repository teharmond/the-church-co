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

export default function NewTeamMemberDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Team Member</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Team Member</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Add a new team member to your admin team.
        </DialogDescription>

        <Input placeholder="Full Name" />
        <Input placeholder="Email Address" />

        <DialogFooter>
          <Button>Add Member</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}