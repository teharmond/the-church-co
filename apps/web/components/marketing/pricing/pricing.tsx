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
    <div className="mx-auto my-28 flex w-full max-w-6xl flex-col gap-8 px-6">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-2">
        <h2 className="text-center text-4xl font-bold md:text-5xl">
          Church-Friendly Pricing
        </h2>
        <h3 className="text-center text-3xl font-bold text-muted-foreground md:text-4xl">
          14 day free trial
        </h3>
        <p className="mt-4 text-pretty text-center text-lg font-medium text-muted-foreground">
          Our church-friendly pricing fits churches of all sizes. We know the
          value your church is bringing to the Kingdom of God, and we partner
          with you to reach more people without being a drain on your budget.
        </p>
        <span className="mt-4 hidden rounded-md bg-secondary box-decoration-clone px-1 font-bold text-primary md:block">
          We build your website for you for free when you subscribe to one of
          our plans.
        </span>
        <span className="mt-4 block rounded-md bg-secondary box-decoration-clone px-1 text-center font-bold text-primary md:hidden">
          We build your website for you for free
          <br /> when you subscribe to one of our plans.
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
