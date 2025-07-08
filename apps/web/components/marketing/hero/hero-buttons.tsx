import { Button } from "@the-church-co/ui/button";
import { Click } from "@the-church-co/ui/icons/click";
import React from "react";
import { cn } from "@the-church-co/ui/lib/utils";
import Link from "next/link";

export default function HeroButtons({ invert }: { invert?: boolean }) {
  return (
    <div className={cn("mt-2 flex gap-4", invert && "flex-row-reverse")}>
      <Link href="https://thechurchco.com/meet">
        <Button
          variant={invert ? "secondary" : "default"}
          className={cn(
            "h-12 gap-2 pl-4 pr-5 text-base font-semibold [&_svg:not([class*='size-'])]:size-5",
            invert && "text-primary",
          )}
        >
          <span className="shrink-0 -translate-y-[2px]">
            <Click />
          </span>
          Book a Demo
        </Button>
      </Link>
      <Link href="https://thechurchco.com/signup">
        <Button
          variant={invert ? "outline" : "secondary"}
          className={cn(
            "h-12 px-6 text-base font-semibold text-primary",
            invert && "bg-primary text-white",
          )}
        >
          Get started
        </Button>
      </Link>
    </div>
  );
}
