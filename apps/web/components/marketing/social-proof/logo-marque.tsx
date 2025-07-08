import Image from "next/image";
import React from "react";

const logos = [
  { src: "/hillsong-small.avif", alt: "Hillsong" },
  { src: "/GardenChurchLogo.png", alt: "Garden Church" },
  { src: "/InfluencersChurchLogo.avif", alt: "Influencers Church" },
  { src: "/SozoChurchLogo.png", alt: "Sozo Church" },
  { src: "/the-belonging-co.png", alt: "The Belonging Co" },
  { src: "/wv.png", alt: "WV Church" },
];

export default function SocialProofMarque() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 overflow-hidden px-4 py-10">
      <h2 className="text-center text-xl font-bold text-muted-foreground">
        Trusted by over 5,000 churches
      </h2>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-accent to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-accent to-transparent" />

        {/* Scrolling marquee */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex whitespace-nowrap opacity-60">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="mx-8 flex items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={500}
                  height={500}
                  className="h-24 w-auto max-w-48 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
