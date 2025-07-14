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

export default function NewContributorDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Contributor</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Contributor</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Create a new contributor for your organization.
        </DialogDescription>

        <Input placeholder="Contributor Name" />

        <DialogFooter>
          <Button>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}