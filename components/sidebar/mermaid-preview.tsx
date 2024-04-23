"use client";
import React, { useEffect } from "react";
import mermaid from "mermaid";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CalendarIcon } from "lucide-react";
import timesago from "timesago";

interface MermaidPreviewProps {
  chart: string | undefined;
  lastUpdatedAt: string;
}

const MermaidPreview = ({ chart, lastUpdatedAt }: MermaidPreviewProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: theme === "dark" ? "dark" : "default",
      securityLevel: "loose",
    });

    mermaid.contentLoaded();
  }, [theme]);

  return (
    <div className="flex flex-col items-center  ">
      <div className="mermaid">{chart}</div>
      <div className="flex items-center text-left justify-start pt-4  flex-row w-full ">
        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
        <span className="text-xs text-muted-foreground">
          Last edited {timesago(lastUpdatedAt)}
        </span>
      </div>
    </div>
  );
};

export default MermaidPreview;
