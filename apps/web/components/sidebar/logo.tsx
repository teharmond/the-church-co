"use client";

import TheChurchCo from "@the-church-co/ui/icons/the-church-co";
import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@the-church-co/ui/sidebar";

export function Logo() {
  const { state } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex w-full items-center gap-2 rounded-md px-1 py-1 font-semibold leading-tight tracking-tighter transition-all duration-200 group-data-[collapsible=icon]:px-0">
          <span className="shrink-0 rounded-lg bg-black outline outline-black">
            <TheChurchCo height={31} width={31} />
          </span>
          <span className="truncate">The Church Co</span>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
