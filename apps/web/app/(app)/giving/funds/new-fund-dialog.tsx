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

export default function NewFundDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Fund</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Fund</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Create a new fund for your organization.
        </DialogDescription>

        <Input placeholder="Fund Name" />

        <DialogFooter>
          <Button>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}