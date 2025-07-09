import { IconProps } from "@the-church-co/ui/icons/types";
import React from "react";

export default function AndMoreCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.FC<IconProps>;
}) {
  return (
    <div className="rounded-lg border bg-card p-4 py-6 shadow-md">
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-primary">
          <Icon height={38} width={38} />
        </span>
        <div className="flex flex-col items-center">
          <h2 className="text-center text-lg font-bold">{title}</h2>
          <p className="text-center text-sm font-medium text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
