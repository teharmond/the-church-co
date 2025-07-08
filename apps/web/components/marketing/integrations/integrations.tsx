import React from "react";
import { IntegrationsVisual } from "./visual";

export default function Integrations() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 pb-10 pt-24">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-primary">Integrations</h3>
        <h2 className="text-balance text-4xl font-bold">
          Automatically keep your website up to date
        </h2>
      </div>
      <p className="text-lg font-medium text-muted-foreground">
        You shouldn't have to make major changes to your website for every new
        event. We connect your website to Planning Center, PushPay and
        ChurchSuite to automatically sync your events, groups, sermons, giving,
        and more.
      </p>
      <div className="mx-auto w-full max-w-5xl rounded-lg border bg-background shadow-md">
        <IntegrationsVisual />
      </div>
    </div>
  );
}
