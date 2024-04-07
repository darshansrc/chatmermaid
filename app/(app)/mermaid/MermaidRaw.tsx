"use client";
import React, { useEffect } from "react";
import mermaid from "mermaid";
import { useTheme } from "next-themes";

const MermaidRaw = ({ chart, isLoading }) => {
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

  return <div className="mermaid">{chart}</div>;
};

export default MermaidRaw;
