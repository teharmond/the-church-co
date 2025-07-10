import { Button } from "@the-church-co/ui/button";
import { Bell, LifeBuoy, Search } from "lucide-react";
import React from "react";

export default function TopbarTools() {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        className="h-8 w-44 justify-between gap-1.5 rounded-lg pl-2 pr-1 text-muted-foreground"
      >
        <div className="flex items-center gap-1.5 font-normal">
          <Search /> Search...
        </div>
        <div className="rounded-md border bg-muted px-1 py-0.5 text-xs">⌘K</div>
      </Button>
      <Button size="icon" variant="outline" className="h-8 w-8 rounded-full">
        <LifeBuoy />
      </Button>
      <Button size="icon" variant="outline" className="h-8 w-8 rounded-full">
        <Bell />
      </Button>
    </div>
  );
}
