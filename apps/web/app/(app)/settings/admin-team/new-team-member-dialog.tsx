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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@the-church-co/ui/select";

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
          Add a new member to your admin team.
        </DialogDescription>

        <div className="space-y-4">
          <Input placeholder="Full Name" />
          <Input placeholder="Email" type="email" />
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="owner">Owner</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="editor">Editor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <DialogFooter>
          <Button>Add Member</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
