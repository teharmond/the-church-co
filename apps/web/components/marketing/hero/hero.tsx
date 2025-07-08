import React from "react";
import { Badge } from "@the-church-co/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@the-church-co/ui/button";
import { Click } from "@the-church-co/ui/icons/click";

const heroImage = "/hero-image.png";

export default function hero() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="mx-auto h-full w-full max-w-6xl px-4 pt-24">
        <div className="flex w-full flex-col gap-8">
          <Link href="/free-church-websites">
            <Badge className="rounded-full bg-secondary px-4 py-1 text-sm font-normal text-primary">
              We build church websites for free
            </Badge>
          </Link>
          <h1 className="text-balance text-6xl font-bold">
            Websites that connect
            <br />
            your Church community
          </h1>
          <p className="text-balance text-xl font-medium">
            The Church Co is the complete digital platform for your church
            <br />
            helping you reach new people and engage your members.
          </p>
          <div className="flex gap-4">
            <Button className="h-12 gap-2 pl-4 pr-5 text-base font-semibold [&_svg:not([class*='size-'])]:size-5">
              <span className="shrink-0 -translate-y-[2px]">
                <Click />
              </span>
              Book a Demo
            </Button>
            <Button
              variant="secondary"
              className="h-12 px-6 text-base font-semibold text-primary"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>

      <Image
        src={heroImage}
        alt="The Church Co"
        width={1000}
        height={1000}
        className="w-full max-w-7xl"
      />
    </div>
  );
}
