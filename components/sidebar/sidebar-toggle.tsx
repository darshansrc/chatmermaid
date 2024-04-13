"use client";

import * as React from "react";

import { useSidebar } from "@/hooks/use-sidebar";
import { Button } from "@/components/ui/button";

import { PanelLeft } from "lucide-react";

export function SidebarToggle() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      size="icon"
      variant="ghost"
      className="-ml-2  size-9 p-0 flex"
      onClick={() => {
        toggleSidebar();
      }}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}
