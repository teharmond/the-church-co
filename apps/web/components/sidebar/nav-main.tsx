"use client";

import { type LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import type { ComponentType } from "react";

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
    icon?: LucideIcon | ComponentType<any>;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathname = usePathname();
  const [clickedItems, setClickedItems] = useState<Set<string>>(new Set());

  // Check if a URL is active, handling exact matches and sub-routes
  const isUrlActive = (url: string) => {
    if (pathname === url) return true;
    
    // For parent routes that have subitems, only match exactly
    const parentRoute = items.find(item => item.url === url && item.items);
    if (parentRoute) return pathname === url;
    
    // For other URLs, check if pathname starts with url/
    return pathname.startsWith(`${url}/`);
  };

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

  // When navigating to a sub-item, ensure only its parent is expanded
  const getActiveParentTitle = () => {
    for (const item of items) {
      if (item.items?.some((sub) => isUrlActive(sub.url))) {
        return item.title;
      }
    }
    return null;
  };

  const activeParentTitle = getActiveParentTitle();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const hasActiveSubItem =
            item.items?.some((sub) => isUrlActive(sub.url)) ?? false;

          // Main item is active if pathname matches exactly or if any sub-item is active
          const isActive = pathname === item.url || hasActiveSubItem;

          const shouldShowSubItems =
            item.items &&
            (activeParentTitle === item.title || 
             (!activeParentTitle && clickedItems.has(item.title)));

          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                className={cn(
                  "rounded-lg text-muted-foreground hover:text-primary active:bg-secondary active:font-medium active:text-primary active:outline active:outline-primary/20",
                  isActive &&
                    "bg-secondary font-medium text-primary shadow-sm outline outline-primary/20 hover:bg-secondary",
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
                          isUrlActive(subItem.url) &&
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
