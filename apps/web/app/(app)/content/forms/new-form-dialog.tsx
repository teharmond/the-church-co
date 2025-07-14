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

export default function NewFormDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Form</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Form</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Create a new form for your organization.
        </DialogDescription>

        <Input placeholder="Form Name" />

        <DialogFooter>
          <Button>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}