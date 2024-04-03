"use client";

import * as React from "react";

import { useSidebar } from "@/hooks/use-sidebar";
import { Button } from "@/components/ui/button";

import { PanelLeft, PanelLeftClose, PanelLeftOpen } from "lucide-react";

export function SidebarToggle() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      size="icon"
      variant="ghost"
      className="-ml-2 hidden size-9 p-0 lg:flex"
      onClick={() => {
        toggleSidebar();
      }}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}
