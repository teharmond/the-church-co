import { Button } from "@the-church-co/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const testimonials = [
  { src: "/social-testinmony-005-1.jpg", alt: "Social Testimony 005" },
  { src: "/social-testinmony-006-1.jpg", alt: "Social Testimony 006" },
  { src: "/social-testinmony-007-1.jpg", alt: "Social Testimony 007" },
  { src: "/social-testinmony-008-1.jpg", alt: "Social Testimony 008" },
  { src: "/social-testinmony-009-1.jpg", alt: "Social Testimony 009" },
  { src: "/social-testinmony-010-1.jpg", alt: "Social Testimony 010" },
  { src: "/social-testinmony-011-1.jpg", alt: "Social Testimony 011" },
  { src: "/social-testinmony-012-1.jpg", alt: "Social Testimony 012" },
  { src: "/social-testinmony-013-1.jpg", alt: "Social Testimony 013" },
  { src: "/social-testinmony-014-1.jpg", alt: "Social Testimony 014" },
  { src: "/social-testinmony-015-1.jpg", alt: "Social Testimony 015" },
];

export default function FbMarque() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 overflow-hidden px-4 pb-10">
      <div className="mb-2 flex flex-col items-center gap-2">
        <h2 className="text-balance text-center text-3xl font-bold">
          Here's what people like you are saying
        </h2>
        <p className="text-center text-muted-foreground">
          Customer success is our passion.
        </p>
        <Link href="https://thechurchco.com/meet">
          <Button className="mt-4">Talk to one of our team</Button>
        </Link>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 z-50 h-full w-20 bg-gradient-to-r from-accent to-transparent" />
        <div className="absolute right-0 top-0 z-50 h-full w-20 bg-gradient-to-l from-accent to-transparent" />

        {/* Scrolling marquee */}
        <div className="flex overflow-hidden pb-10">
          <div className="animate-marquee-slow flex whitespace-nowrap">
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div key={index} className="mx-4 flex items-center">
                <Image
                  src={testimonial.src}
                  alt={testimonial.alt}
                  width={800}
                  height={800}
                  className="h-52 w-auto max-w-96 rounded-lg object-contain shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
