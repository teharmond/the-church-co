import React from "react";

export default function Pricing() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-2">
        <h2 className="text-center text-4xl font-bold">
          Church-Friendly Pricing
        </h2>
        <h3 className="text-center text-4xl font-bold text-muted-foreground">
          Free 14 day trial
        </h3>
        <p className="mt-2 text-pretty text-center text-lg font-medium text-muted-foreground">
          Our church-friendly pricing fits churches of all sizes. We know the
          value your church is bringing to the Kingdom of God, and we partner
          with you to reach more people without being a drain on your budget.
        </p>
        <p className="mt-2 rounded-md bg-secondary px-1 font-bold text-primary">
          We build your website for you for free when you subscribe to one of
          our plans.
        </p>
      </div>
      <div className="grid gap-2 lg:grid-cols-3">
        <PricingCard />
      </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  features,
}: {
  title: string;
  price: string;
  features: string[];
}) {
  return <div className="h-28 rounded-lg bg-secondary" />;
}
