import { Avatar, AvatarFallback, AvatarImage } from "@the-church-co/ui/avatar";
import { Button } from "@the-church-co/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@the-church-co/ui/dropdown-menu";

import React from "react";

export default function user() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>My Profile</DropdownMenuItem>
        <DropdownMenuItem>Toggle Theme</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
