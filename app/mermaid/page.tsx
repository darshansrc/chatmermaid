"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  useNodesState,
  Background,
  MiniMap,
  ReactFlow,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/resizeable";
import { ModeToggle } from "@/components/mode-toggle";
import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import { andromeda } from "@uiw/codemirror-theme-andromeda";
import { createTheme } from "@uiw/codemirror-themes";
import { githubDark, githubDarkInit } from "@uiw/codemirror-theme-github";
import mermaid from "mermaid";
import ZoomControls from "./zoom-controls";
import Mermaid from "./Mermaid";
import useMermaidTheme from "./useMermaidTheme";
import MermaidSelect from "./select-mermaid-theme"; // Import the new component
import { useTheme } from "next-themes";
import { tags as t } from "@lezer/highlight";
import { tokyoNight, tokyoNightInit } from "@uiw/codemirror-theme-tokyo-night";

const Page = () => {
  const myTheme = createTheme({
    theme: "light",
    settings: {
      background: "#ffffff",
      backgroundImage: "",
      foreground: "#75baff",
      caret: "#5d00ff",
      selection: "#036dd626",
      selectionMatch: "#036dd626",
      lineHighlight: "#8a91991a",
      gutterBorder: "1px solid #ffffff10",
      gutterBackground: "#fff",
      gutterForeground: "#8a919966",
    },
    styles: [
      { tag: t.comment, color: "#787b8099" },
      { tag: t.variableName, color: "#0080ff" },
      { tag: [t.string, t.special(t.brace)], color: "#5c6166" },
      { tag: t.number, color: "#5c6166" },
      { tag: t.bool, color: "#5c6166" },
      { tag: t.null, color: "#5c6166" },
      { tag: t.keyword, color: "#5c6166" },
      { tag: t.operator, color: "#5c6166" },
      { tag: t.className, color: "#5c6166" },
      { tag: t.definition(t.typeName), color: "#5c6166" },
      { tag: t.typeName, color: "#5c6166" },
      { tag: t.angleBracket, color: "#5c6166" },
      { tag: t.tagName, color: "#5c6166" },
      { tag: t.attributeName, color: "#5c6166" },
    ],
  });

  const [code, setCode] = useState("");
  const { mermaidTheme, setMermaidTheme } = useMermaidTheme();
  const { theme } = useTheme();

  const onChange = useCallback((val: any) => {
    setCode(val);
  }, []);

  const SVGNode = () => {
    const id = "mermaid";
    const chart = code;
    const reactFlowInstance = useReactFlow();

    useEffect(() => {
      reactFlowInstance.fitView();
    }, [chart, reactFlowInstance]);

    useEffect(() => {
      mermaid.initialize({
        startOnLoad: true,
        securityLevel: "loose",
        theme: mermaidTheme || "default",
      });
      document.getElementById(id)?.removeAttribute("data-processed");
      console.log(chart);
      mermaid.contentLoaded();
    }, [chart, id]);

    const config = {
      theme: mermaidTheme,
    };

    return <Mermaid chart={chart} config={config} />;
  };

  const initialNodes = [
    {
      id: "1",
      type: "svgNode",
      width: 1200,
      height: 1200,
      position: { x: 0, y: 0 },
      data: { label: "SVG Node" },
    },
  ];

  const nodeTypes = {
    svgNode: SVGNode,
  };

  const [nodes] = useNodesState(initialNodes);

  return (
    <div className=" h-[calc(100vh-48px)]  ">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="flex m-2 flex-col  relative items-center justify-center">
          <div className="w-full h-full text-sm overflow-hidden rounded-xl ">
            <MermaidSelect
              defaultValue={mermaidTheme}
              onValueChange={setMermaidTheme}
            />
            <CodeMirror
              value={code}
              minHeight="100%"
              minWidth="100%"
              basicSetup
              className="w-full h-full  text-[12px] rounded-xl"
              lang="mermaid"
              extensions={[langs.mermaid()]}
              onChange={onChange}
              height="100px"
              // theme={theme === "dark" ? tokyoNight : "none"}
              theme={githubDarkInit({
                settings: {
                  caret: "rgb(42 42 42)",
                  fontFamily: "monospace",
                  background: "rgb(24, 24, 24)",
                  gutterBackground: "rgb(24, 24, 24)",
                },
              })}
            />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="flex w-full items-center relative justify-center">
          <ReactFlow
            nodes={nodes}
            nodeTypes={nodeTypes}
            fitView
            snapToGrid
            selectionOnDrag={false}
            nodesDraggable={false}
          >
            <MiniMap
              style={{
                backgroundColor: theme === "dark" ? "rgb(30,30,30)" : "",
                borderRadius: "4px",
              }}
              zoomable
              pannable
            />
            <Background color={theme === "dark" ? "rgb(50,50,50)" : ""} />
            <ZoomControls />
          </ReactFlow>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Page;
