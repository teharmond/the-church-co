"use client";

import React, { forwardRef, useRef } from "react";
import Image from "next/image";

import { cn } from "@the-church-co/ui/lib/utils";
import { AnimatedBeam } from "@the-church-co/ui/animated-beam";
import TheChurchCoLogo from "@the-church-co/ui/icons/the-church-co";
import PcoLogo from "@the-church-co/ui/icons/pco-logo";
import { Facebook } from "@the-church-co/ui/icons/facebook";

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
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[350px] sm:h-[400px] md:h-[500px] w-full items-center justify-center overflow-hidden p-10",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-center justify-between gap-10 sm:gap-16 md:gap-20">
        <div className="flex flex-col justify-between gap-8 sm:gap-10 md:gap-12">
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
          <Circle ref={div8Ref}>
            <Image
              src="/textinchurch.png"
              alt="Text in Church"
              width={40}
              height={40}
              className="h-6 w-6 object-contain sm:h-8 sm:w-8 md:h-10 md:w-10"
            />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div4Ref} className="size-14 sm:size-20 md:size-24">
            <TheChurchCoLogo className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
          </Circle>
        </div>
        <div className="flex flex-col justify-between gap-8 sm:gap-10 md:gap-12">
          <Circle ref={div5Ref}>
            <Image
              src="/adsense.svg"
              alt="AdSense"
              width={40}
              height={40}
              className="h-6 w-6 object-contain sm:h-8 sm:w-8 md:h-10 md:w-10"
            />
          </Circle>
          <Circle ref={div6Ref}>
            <Image
              src="/analytics.webp"
              alt="Analytics"
              width={40}
              height={40}
              className="h-6 w-6 object-contain sm:h-8 sm:w-8 md:h-10 md:w-10"
            />
          </Circle>
          <Circle ref={div7Ref}>
            <Image
              src="/messenger.png"
              alt="Messenger"
              width={40}
              height={40}
              className="h-6 w-6 object-contain sm:h-8 sm:w-8 md:h-10 md:w-10"
            />
          </Circle>
          <Circle ref={div9Ref}>
            <Facebook className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" fill="#1877f2" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div9Ref}
        toRef={div4Ref}
        reverse
      />
    </div>
  );
}
