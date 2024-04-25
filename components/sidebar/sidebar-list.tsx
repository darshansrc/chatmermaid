"use client";
import { SidebarItems } from "@/components/sidebar/sidebar-items";
import { cache } from "react";
import { ModeToggle } from "../mode-toggle";
import { getAllDiagrams } from "@/actions/actions";
import UserCard from "../user-card";

interface SidebarListProps {
  userId?: string;
  children?: React.ReactNode;
}

// const loadChats = cache(async () => {
//   return await getAllDiagrams();
// });

export function SidebarList() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex-1 overflow-auto">
        <div className="space-y-2 px-2">
          <SidebarItems />
        </div>
      </div>
      <div className="flex items-center justify-between p-4">
        <UserCard />
        {/* <ClearHistory clearChats={clearChats} isEnabled={chats?.length > 0} /> */}
      </div>
    </div>
  );
}
