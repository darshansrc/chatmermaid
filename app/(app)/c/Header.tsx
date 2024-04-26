"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { SidebarToggle } from "@/components/sidebar/sidebar-toggle";
import { Button } from "@/components/ui/button";
import { IconSeparator } from "@/components/ui/icons";
import { Share } from "lucide-react";
import React, { useState } from "react";
import { DropdownMenuDemo } from "./DropDownMenu";
import { changeDiagramName, getDiagram } from "@/actions/actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import useDiagramStore from "@/store/diagram-store";
import { SidebarMobile } from "@/components/sidebar/sidebar-mobile";
import { ChatHistory } from "@/components/sidebar/chat-history";

interface AppLayoutProps {
  diagramName: string;
  diagramId: string;
}

const Header = ({ diagramName, diagramId }: AppLayoutProps) => {
  const [editedName, setEditedName] = useState(diagramName);
  const { fetchDiagrams } = useDiagramStore();

  const handleNameChange = async () => {
    const data = await changeDiagramName(diagramId, editedName);
    if (data) {
      diagramName = editedName;
      toast.success("Diagram name changed successfully");
      fetchDiagrams();
    } else {
      toast.error("Failed to change diagram name");
    }
  };
  return (
    <header
      className={` pl-0  duration-300 peer-[[data-state=open]]:lg:pl-[200px] peer-[[data-state=open]]:xl:pl-[220px]  dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 `}
    >
      <div className="w-full m-auto px-4 flex h-12 items-center justify-stretch ">
        <div className=" w-full px-4 flex h-12 items-center  ">
          <SidebarToggle />
          <IconSeparator className="size-6 text-muted-foreground/50" />

          <form>
            <Input
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              onBlur={handleNameChange}
              className="text-lg font-semibold"
            />
          </form>
        </div>

        <div className="w-full flex pl-[210px] justify-center">
          {/* <TabsList>
            <TabsTrigger value="editor">Editor</TabsTrigger>
            <TabsTrigger value="chat">Chat</TabsTrigger>
          </TabsList> */}
          {/* <TabsContent value="editor">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent> */}
        </div>

        <div className="flex w-full gap-2  items-center ">
          <Button
            variant="outline"
            size="sm"
            className="ml-auto gap-1.5 text-sm"
          >
            <Share className="size-3.5" />
            Export
          </Button>
          <ModeToggle />
          <DropdownMenuDemo />
        </div>
      </div>
    </header>
  );
};

export default Header;
