"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { SidebarToggle } from "@/components/sidebar-toggle";
import { Button } from "@/components/ui/button";
import { IconSeparator } from "@/components/ui/icons";
import { Share } from "lucide-react";
import React, { useState } from "react";
import { DropdownMenuDemo } from "./DropDownMenu";
import { changeDiagramName, getDiagram } from "@/actions/actions";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface AppLayoutProps {
  diagramName: string;
  diagramId: string;
}

const Header = ({ diagramName, diagramId }: AppLayoutProps) => {
  const [editedName, setEditedName] = useState(diagramName);

  const handleNameChange = async () => {
    const data = await changeDiagramName(diagramId, editedName);
    if (data) {
      toast.success("Diagram name changed successfully");
    } else {
      toast.error("Failed to change diagram name");
    }
  };
  return (
    <header
      className={` pl-0  duration-300 peer-[[data-state=open]]:lg:pl-[200px] peer-[[data-state=open]]:xl:pl-[250px]  dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 `}
    >
      <div className="w-full m-auto px-4 flex h-12 items-center justify-around ">
        <SidebarToggle />
        <IconSeparator className="size-6 text-muted-foreground/50" />

        <Popover>
          <PopoverTrigger>
            <p className="text-sm flex flex-row font-medium truncate">
              {diagramName}
            </p>
          </PopoverTrigger>
          <PopoverContent className="dark:bg-neutral-800 flex flex-col gap-2 flex-end justify-end">
            <Input
              value={editedName}
              defaultValue={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            ></Input>
            <Button onClick={handleNameChange} variant={"outline"}>
              Save Changes
            </Button>
          </PopoverContent>
        </Popover>

        <div className="flex w-full gap-2 justify-end items-center ">
          <Button
            variant="outline"
            size="sm"
            className="ml-auto gap-1.5 text-sm"
          >
            <Share className="size-3.5" />
            Share
          </Button>
          <ModeToggle />
          <DropdownMenuDemo />
        </div>
      </div>
    </header>
  );
};

export default Header;
