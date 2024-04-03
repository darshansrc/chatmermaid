import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SwatchBook } from "lucide-react";
import useMermaidTheme from "./useMermaidTheme";

const MermaidSelect = ({
  defaultValue,
  onValueChange,
}: {
  defaultValue: string;
  onValueChange: any;
}) => {
  return (
    <Select defaultValue={defaultValue} onValueChange={onValueChange}>
      <SelectTrigger className="border-none outline-none w-auto focus:none">
        <SwatchBook size={14} className="m-1" />
        <span className="text-[11px] font-semibold">{defaultValue}</span>
      </SelectTrigger>
      <SelectContent className="dark:bg-neutral-800">
        <SelectItem
          className="text-sm py-1 hover:dark:bg-neutral-700"
          value="default"
        >
          default
        </SelectItem>
        <SelectItem
          className="text-sm py-1 hover:dark:bg-neutral-700"
          value="dark"
        >
          dark
        </SelectItem>
        <SelectItem
          className="text-sm py-1 hover:dark:bg-neutral-700"
          value="neutral"
        >
          Neutral
        </SelectItem>
        <SelectItem
          className="text-sm py-1 hover:dark:bg-neutral-700"
          value="forest"
        >
          forest
        </SelectItem>
        <SelectItem
          className="text-sm py-1 hover:dark:bg-neutral-600"
          value="base"
        >
          base
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default MermaidSelect;
