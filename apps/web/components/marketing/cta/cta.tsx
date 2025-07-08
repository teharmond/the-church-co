import React from "react";
import HeroButtons from "../hero/hero-buttons";

export default function CTA() {
  return (
    <div className="flex justify-center bg-primary py-20">
      <div className="mx-6 flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 text-white md:flex-row">
        <div className="max-w-md text-balance text-4xl font-bold md:text-5xl">
          <span className="text-blue-200">Are you ready to</span> <br /> build
          your dream website?
        </div>
        <HeroButtons invert />
      </div>
    </div>
  );
}
