"use client";
import React, { useEffect } from "react";
import mermaid from "mermaid";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const MermaidRaw = ({ chart, isLoading, onChange }) => {
  const { theme } = useTheme();

  useEffect(() => {
    if (!isLoading) {
      mermaid.initialize({
        startOnLoad: true,
        theme: theme === "dark" ? "dark" : "default",
        securityLevel: "loose",
      });

      mermaid.contentLoaded();
    }
  }, [isLoading, theme]);

  const handleReplace = () => {
    onChange(chart);
    toast.success("Diagram replaced!");
  };

  if (!isLoading) {
    return (
      <div className="flex flex-col items-center border my-2 py-2 justify-center dark:bg-neutral-900 rounded-lg p-2">
        {/* <Button
          variant={"outline"}
          className="w-11/12 my-2 dark:bg-neutral-900"
          onClick={handleReplace}
        >
          Use this diagram
        </Button> */}
        <div className="mermaid">{chart}</div>
      </div>
    );
  }
};

export default MermaidRaw;
