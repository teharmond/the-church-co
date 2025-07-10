"use client";

import { type LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@the-church-co/ui/sidebar";
import { cn } from "@the-church-co/ui/lib/utils";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathname = usePathname();
  const [clickedItems, setClickedItems] = useState<Set<string>>(new Set());

  const handleItemClick = (itemTitle: string) => {
    const clickedItem = items.find((item) => item.title === itemTitle);
    if (clickedItem?.items) {
      // Open this item's subitems and close others
      setClickedItems(new Set([itemTitle]));
    } else {
      // If clicking on an item without subitems, close all subitems optimistically
      setClickedItems(new Set());
    }
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const hasActiveSubItem =
            item.items?.some((sub) => pathname === sub.url) ?? false;

          // Main item is active if pathname matches exactly or if any sub-item is active
          const isActive = pathname === item.url || hasActiveSubItem;

          const shouldShowSubItems =
            item.items &&
            (isActive || hasActiveSubItem || clickedItems.has(item.title));

          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                className={cn(
                  "rounded-lg text-muted-foreground hover:text-primary active:border active:border-primary/20 active:bg-accent active:font-medium active:text-primary",
                  isActive &&
                    "border border-primary/20 bg-secondary font-medium text-primary shadow-sm hover:bg-secondary",
                  !isActive && "hover:bg-secondary",
                )}
              >
                <Link
                  href={item.url}
                  prefetch={true}
                  scroll={false}
                  shallow={true}
                  onClick={() => handleItemClick(item.title)}
                  className={cn(isActive && "text-primary")}
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
              {shouldShowSubItems && (
                <SidebarMenuSub className="gap-0">
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        asChild
                        className={cn(
                          "py-0 text-muted-foreground hover:bg-transparent hover:text-primary",
                          pathname === subItem.url &&
                            "font-medium text-primary",
                        )}
                      >
                        <Link
                          href={subItem.url}
                          prefetch={true}
                          scroll={false}
                          shallow={true}
                        >
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              )}
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
