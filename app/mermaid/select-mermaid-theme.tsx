import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MermaidSelect = ({
  defaultValue,
  onValueChange,
}: {
  defaultValue: string;
  onValueChange: any;
}) => {
  return (
    <Select defaultValue={defaultValue} onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="default">Default</SelectItem>
        <SelectItem value="neutral">Neutral </SelectItem>
        <SelectItem value="dark">dark</SelectItem>
        <SelectItem value="forest">forest</SelectItem>
        <SelectItem value="base">base</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default MermaidSelect;
