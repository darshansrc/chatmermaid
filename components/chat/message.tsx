"use client";

import { IconUser } from "@/components/ui/icons";
import { spinner } from "./spinner";
import MermaidRaw from "@/app/(app)/c/MermaidRaw";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { Bot } from "lucide-react";

export function UserMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative flex items-start md:-ml-12">
      <div className="flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border bg-background shadow-sm">
        <IconUser />
      </div>
      <div className="ml-4 flex-1 space-y-2 overflow-hidden pl-2">
        {children}
      </div>
    </div>
  );
}

export function BotMessage({
  text,
  onChange,
  isLoading,
  theme,
}: {
  text: string;
  code?: string;
  onChange?: (val: string) => void;
  isLoading: boolean;
  theme: any;
}) {
  const mermaidRegex = /```mermaid\n([\s\S]*?)\n```/;
  const mermaidMatch = text.match(mermaidRegex);

  return (
    <div className="group relative flex items-start md:-ml-12">
      <div className="flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border  bg-neutral-900 dark:bg-neutral-200 shadow-sm">
        <Bot className="p-1 text-white dark:text-black" />
      </div>
      <div className="ml-4 flex-1 space-y-2 overflow-hidden pl-2">
        <div data-color-mode={theme}>
          <MarkdownPreview
            source={text}
            style={{
              backgroundColor: theme === "dark" ? "rgb(23 23 23)" : "#fff",
            }}
          />
          {mermaidMatch && (
            <MermaidRaw
              chart={mermaidMatch ? mermaidMatch[1] : ""}
              isLoading={isLoading}
              onChange={onChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export function SpinnerMessage() {
  return (
    <div className="group relative flex items-start md:-ml-12 mb-4">
      <div className="flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border  bg-neutral-900 dark:bg-neutral-200 shadow-sm">
        <Bot className="p-1 text-white dark:text-black" />
      </div>
      <div className="ml-4 h-[24px] flex flex-row items-center flex-1 space-y-2 overflow-hidden px-1">
        {spinner}
      </div>
    </div>
  );
}
