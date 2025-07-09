"use client";

import { Button } from "@the-church-co/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@the-church-co/ui/popover";
import Menu from "@the-church-co/ui/icons/menu";
import Link from "next/link";
import { useState } from "react";
import CreditCard from "@the-church-co/ui/icons/credit-card";
import { Click } from "@the-church-co/ui/icons/click";

export default function MobileNavSheet() {
  const [open, setOpen] = useState(false);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        animationsOn={false}
        className="relative mt-2.5 h-[calc(100vh-4rem)] w-screen overflow-y-auto rounded-none border-none bg-background/80 p-4 backdrop-blur-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 md:hidden"
      >
        <Button className="h-12 w-full gap-3 text-base font-semibold [&_svg:not([class*='size-'])]:size-5">
          <span className="-translate-y-0.5">
            <Click height={20} width={20} />
          </span>
          Book a demo
        </Button>
        <div className="flex flex-col gap-3 p-4 text-lg font-semibold">
          <Link
            className="flex items-center gap-2 transition-colors hover:text-muted-foreground"
            href="#"
            onClick={() => setOpen(false)}
          >
            <CreditCard height={20} width={20} />
            Features
          </Link>
          <Link
            className="flex items-center gap-2 transition-colors hover:text-muted-foreground"
            href="#"
            onClick={() => setOpen(false)}
          >
            <CreditCard height={20} width={20} />
            Examples
          </Link>
        </div>
        <div className="flex flex-col gap-3 p-4 text-lg font-semibold">
          <span className="text-sm text-muted-foreground">More</span>

          <Link
            className="flex items-center gap-2 transition-colors hover:text-muted-foreground"
            href="#"
            onClick={() => setOpen(false)}
          >
            <CreditCard height={20} width={20} />
            Pricing
          </Link>
          <Link
            className="flex items-center gap-2 transition-colors hover:text-muted-foreground"
            href="https://help.churchspace.co"
            onClick={() => setOpen(false)}
            target="_blank"
          >
            Help Center
          </Link>
          <Link
            className="flex items-center gap-2 transition-colors hover:text-muted-foreground"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </Link>

          {/* <Link
            className="flex items-center gap-2 transition-colors hover:text-muted-foreground"
            href="https://help.churchspace.co/getting-started"
            onClick={() => setOpen(false)}
            target="_blank"
          >
            <Map />
            Getting Started
          </Link> */}
          {/* <Link
            className="flex items-center gap-2 transition-colors hover:text-muted-foreground"
            href="/about"
            onClick={() => setOpen(false)}
          >
            <CircleInfo />
            About
          </Link> */}
          {/* <Link
            className="flex items-center gap-2 transition-colors hover:text-muted-foreground"
            href="mailto:hello@churchspace.co?subject=Question%20about%20Church%20Space&body=NAME%3A%20%0ACHURCH%3A%20%0A%0AQUESTION%3A%20%0A"
            onClick={() => setOpen(false)}
          >
            <Megaphone />
            Contact
          </Link> */}
        </div>
      </PopoverContent>
    </Popover>
  );
}
