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
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import mermaid from "mermaid";
import ZoomControls from "./zoom-controls";
import Mermaid from "./Mermaid";
import useMermaidTheme from "./useMermaidTheme";
import MermaidSelect from "./select-mermaid-theme"; // Import the new component
import { useTheme } from "next-themes";

const Page = () => {
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
            <ModeToggle />
            <MermaidSelect
              defaultValue={mermaidTheme}
              onValueChange={setMermaidTheme}
            />
            <CodeMirror
              value={code}
              minHeight="100%"
              minWidth="100%"
              className="w-full h-full p-2 text-[12px] rounded-xl"
              lang="mermaid"
              extensions={[langs.mermaid()]}
              onChange={onChange}
              height="100px"
              theme={theme === "dark" ? vscodeDark : "none"}
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
            <MiniMap zoomable pannable />
            <Background color={theme === "dark" ? "rgb(50,50,50)" : ""} />
            <ZoomControls />
          </ReactFlow>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Page;
