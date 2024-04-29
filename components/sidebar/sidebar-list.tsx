"use client";
import { SidebarItems } from "@/components/sidebar/sidebar-items";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import UserCard from "../user-card";
import { FolderClock, History } from "lucide-react";

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
          {/* <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-2 flex flex-row items-center">
                <History className="size-4" />
                Diagram History
              </AccordionTrigger>
              <AccordionContent> */}
          <SidebarItems />
          {/* </AccordionContent>
            </AccordionItem>
          </Accordion> */}
        </div>
      </div>
      <div className="flex items-center justify-between p-4">
        <UserCard />
      </div>
    </div>
  );
}
