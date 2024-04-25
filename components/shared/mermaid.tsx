"use client";
import React, { useEffect } from "react";
import mermaid from "mermaid";
import { useTheme } from "next-themes";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { CodeBlock } from "../chat/codeblock";

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

  return <pre className="mermaid">{chart}</pre>;
};

export default MermaidPreviewMD;
