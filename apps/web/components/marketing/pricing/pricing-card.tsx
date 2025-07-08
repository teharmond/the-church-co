"use client";

import React from "react";
import { CircleCheck } from "@the-church-co/ui/icons/circle-check";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@the-church-co/ui/card";
import { Button } from "@the-church-co/ui/button";
import { Badge } from "@the-church-co/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@the-church-co/ui/tooltip";
import { cn } from "@the-church-co/ui/lib/utils";

type Feature = string | { name: string; tooltip?: string };

interface PricingCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  features: Feature[];
  mostPopular?: boolean;
  billingPeriod: "monthly" | "annually";
  everything_text?: string;
}

export default function PricingCard({
  name,
  price,
  originalPrice,
  features,
  mostPopular = false,
  billingPeriod,
  everything_text,
}: PricingCardProps) {
  const getFeatureName = (feature: Feature): string => {
    return typeof feature === "string" ? feature : feature.name;
  };

  const getFeatureTooltip = (feature: Feature): string | undefined => {
    return typeof feature === "string" ? undefined : feature.tooltip;
  };

  return (
    <Card
      className={cn(
        "relative flex flex-col",
        // mostPopular && "scale-105 border-primary shadow-lg",
      )}
    >
      {mostPopular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
          Most Popular
        </Badge>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <div className="mt-4">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold">${price}</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          {originalPrice && originalPrice > price && (
            <div className="mt-1 flex items-center gap-2">
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}/month
              </span>
              <Badge variant="secondary" className="text-xs">
                Save ${originalPrice - price}/mo
              </Badge>
            </div>
          )}
          {billingPeriod === "annually" && (
            <p className="mt-1 text-sm text-muted-foreground">
              Billed annually
            </p>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        {everything_text && (
          <p className="mb-3 text-sm text-muted-foreground">
            {everything_text}
          </p>
        )}
        <ul className="space-y-3">
          <TooltipProvider>
            {features.map((feature, index) => {
              const featureName = getFeatureName(feature);
              const tooltip = getFeatureTooltip(feature);

              return (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-primary">
                    <CircleCheck height="20" width="20" />
                  </span>
                  {tooltip ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="cursor-help text-sm underline decoration-dotted underline-offset-4">
                          {featureName}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>{tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    <span className="text-sm">{featureName}</span>
                  )}
                </li>
              );
            })}
          </TooltipProvider>
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={mostPopular ? "default" : "outline"}
        >
          Start Free Trial
        </Button>
      </CardFooter>
    </Card>
  );
}
