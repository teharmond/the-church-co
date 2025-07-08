"use client";

import React, { useState } from "react";
import PricingCard from "./pricing-card";
import { plans } from "./plans";
import { Switch } from "@the-church-co/ui/switch";
import { Label } from "@the-church-co/ui/label";
import { cn } from "@the-church-co/ui/lib/utils";

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">(
    "annually",
  );

  return (
    <div className="mx-auto my-28 flex w-full max-w-5xl flex-col gap-8 px-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-primary">Pricing</h3>
        <h2 className="text-4xl font-bold">Church-Friendly Pricing</h2>
        <h3 className="text-3xl font-bold text-muted-foreground">
          14 day free trial
        </h3>
        <p className="mt-4 text-pretty text-lg font-medium text-muted-foreground">
          Our church-friendly pricing fits churches of all sizes. We know the
          value your church is bringing to the Kingdom of God, and we partner
          with you to reach more people without being a drain on your budget.
        </p>
        <span className="mt-4 text-pretty font-bold text-primary">
          We build your website for you for free when you subscribe to one of
          our plans.
        </span>

        <div className="mt-8 flex flex-col items-center gap-3 lg:mt-16">
          <div className="ml-1 rounded bg-green-100 px-1 text-sm font-bold text-green-600">
            Get ~15% off with yearly
          </div>
          <div className="flex h-7 items-center gap-3">
            <Label
              htmlFor="billing-toggle"
              className={cn(
                "w-16 text-base",
                billingPeriod === "monthly" ? "font-bold" : "",
              )}
            >
              Monthly
            </Label>
            <Switch
              id="billing-toggle"
              checked={billingPeriod === "annually"}
              onCheckedChange={(checked) =>
                setBillingPeriod(checked ? "annually" : "monthly")
              }
            />
            <Label
              htmlFor="billing-toggle"
              className={cn(
                "w-16 text-base",
                billingPeriod === "annually" ? "font-bold" : "",
              )}
            >
              Annually
            </Label>
          </div>
        </div>
      </div>

      <div className="grid gap-16 lg:mt-12 lg:grid-cols-3 lg:gap-6">
        {plans.map((plan) => (
          <PricingCard
            key={plan.name}
            name={plan.name}
            price={
              billingPeriod === "annually"
                ? plan.price_per_month_annual_billing
                : plan.price_per_month
            }
            originalPrice={
              billingPeriod === "annually" ? plan.price_per_month : undefined
            }
            features={plan.features}
            mostPopular={plan.most_popular}
            billingPeriod={billingPeriod}
            everything_text={plan.everything_text || undefined}
          />
        ))}
      </div>
    </div>
  );
}
