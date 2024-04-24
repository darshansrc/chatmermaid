"use client";
import React, { useEffect } from "react";
import mermaid from "mermaid";
import { useTheme } from "next-themes";

const MermaidPreviewMD = ({ chart }) => {
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
    <div className="mt-6 flex items-start rounded-md border px-4 py-3">
      <div className="mermaid">{chart}</div>
    </div>
  );
};

export default MermaidPreviewMD;
