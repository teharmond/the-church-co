import React from "react";
import AndMoreCard from "./and-more-card";
import { moreFeatures } from "./more-features";

export default function Features() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-10">
      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full flex-col gap-2">
          <h3 className="text-lg font-bold text-primary">Features</h3>
          <h2 className="text-4xl font-bold">Custom website builder</h2>
          <p className="text-pretty text-lg font-medium text-muted-foreground">
            Our easy to use drag and drop builder helps you create the perfect
            site for your church. We guide you along the way with best practices
            to make sure you have the information you need and reach the people
            you want to reach.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full flex-col gap-2">
          <h2 className="text-4xl font-bold">Branded mobile app</h2>
          <p className="text-pretty text-lg font-medium text-muted-foreground">
            Websites bring new people into your church. Apps keep them
            connected. A fully branded app with your name and logo in the app
            stores and all the same powerful features as our websites. Plus,
            your website and app stays in sync.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full flex-col gap-2">
          <h2 className="text-4xl font-bold">...and so much more</h2>
          <p className="text-pretty text-lg font-medium text-muted-foreground">
            Bringing your church's digital footprint to one place helps you
            reach new people with clear communication and engage your members
            with centralized content.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {moreFeatures.map((feature) => (
            <AndMoreCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
