"use client";

import Link from "next/link";
import { Facebook } from "@the-church-co/ui/icons/facebook";
import { Twitter } from "@the-church-co/ui/icons/twitter";
import { Youtube } from "@the-church-co/ui/icons/youtube";
import { Instagram } from "@the-church-co/ui/icons/instagram";
import { Search } from "@the-church-co/ui/icons/search";
import { useIsMobile } from "../../../hooks/use-mobile";
import { cn } from "@the-church-co/ui/lib/utils";

export default function SocialIcons() {
  const isMobile = useIsMobile();

  return (
    <div
      className={cn(
        "order-first flex flex-wrap justify-center gap-6 text-sm md:order-last",
        isMobile && "gap-4",
      )}
    >
      <Link
        href="http://facebook.com/thechurchco"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook
          height={isMobile ? "16" : "20"}
          width={isMobile ? "16" : "20"}
        />
      </Link>
      <Link
        href="https://x.com/thechurchco"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter
          height={isMobile ? "16" : "20"}
          width={isMobile ? "16" : "20"}
        />
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCCMpSxiFKkfaaj0JzNxFn6g/?sub_confirmation=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube
          height={isMobile ? "16" : "20"}
          width={isMobile ? "16" : "20"}
        />
      </Link>
      <Link
        href="http://instagram.com/thechurchco"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram
          height={isMobile ? "16" : "20"}
          width={isMobile ? "16" : "20"}
        />
      </Link>
      <Link
        href="https://thechurchco.com/?s="
        target="_blank"
        rel="noopener noreferrer"
      >
        <Search
          height={isMobile ? "16" : "20"}
          width={isMobile ? "16" : "20"}
        />
      </Link>
    </div>
  );
}
