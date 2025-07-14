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

export default function NewPersonDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Person</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Person</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Add a new person to your congregation.
        </DialogDescription>

        <Input placeholder="Full Name" />
        <Input placeholder="Email Address" />

        <DialogFooter>
          <Button>Add Person</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}