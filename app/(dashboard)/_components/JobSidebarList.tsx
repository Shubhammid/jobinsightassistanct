"use client";

import React from "react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MessageSquareTextIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const JobSidebarList = () => {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-white/80 mt-0">
        Job List
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu
          className="min-h-[180px] max-h-[350px] scrollbar overflow-y-auto pb-2">
              <SidebarMenuItem>
                <SidebarMenuButton
                  className={cn(`!bg-transparent !text-white hover:!bg-gray-700 transition-colors`,
                     pathname === "" && "!bg-gray-700"
                  )}
                  asChild
                >
                  <Link href="#" className="text-white">
                    <MessageSquareTextIcon className="w-4 h-4" />
                    <span>Software Developer</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default JobSidebarList