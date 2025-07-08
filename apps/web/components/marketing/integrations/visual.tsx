"use client";

import React, { forwardRef, useRef } from "react";
import Image from "next/image";

import { cn } from "@the-church-co/ui/lib/utils";
import { AnimatedBeam } from "@the-church-co/ui/animated-beam";
import TheChurchCoLogo from "@the-church-co/ui/icons/the-church-co";
import WebsiteClick from "@the-church-co/ui/icons/website-click";
import PcoLogo from "@the-church-co/ui/icons/pco-logo";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] sm:size-16 sm:p-3 md:size-20",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function IntegrationsVisual({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[300px] w-full items-center justify-center overflow-hidden py-8 sm:h-[400px] md:h-[500px] md:p-10",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-sm flex-row items-stretch justify-between gap-4 px-4 sm:max-w-lg sm:gap-6 sm:px-0 md:max-w-2xl md:gap-10">
        <div className="flex flex-col justify-center gap-1 sm:gap-2">
          <Circle ref={div1Ref}>
            <PcoLogo
              fill="#2266F7"
              className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
            />
          </Circle>
          <Circle ref={div2Ref}>
            <Image
              src="/churchsuite.jpg"
              alt="ChurchSuite"
              width={40}
              height={40}
              className="h-6 w-6 rounded object-contain sm:h-8 sm:w-8 md:h-10 md:w-10"
            />
          </Circle>
          <Circle ref={div3Ref}>
            <Image
              src="/pushpay.png"
              alt="Pushpay"
              width={40}
              height={40}
              className="h-6 w-6 object-contain sm:h-8 sm:w-8 md:h-10 md:w-10"
            />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-14 sm:size-20 md:size-24">
            <TheChurchCoLogo className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center text-primary">
          <Circle ref={div7Ref}>
            <WebsiteClick className="h-6 w-6 sm:h-10 sm:w-10 md:h-11 md:w-11" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
      />
    </div>
  );
}
