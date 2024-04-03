"use client";
import React, { useEffect, useState, CSSProperties } from "react";
import {
  useNodesState,
  Background,
  MiniMap,
  ReactFlow,
  useReactFlow,
} from "reactflow";
import mermaid from "mermaid";
import Mermaid from "./Mermaid";
import ZoomControls from "./zoom-controls";
import useMermaidTheme from "./useMermaidTheme";
import { useTheme } from "next-themes";
import "reactflow/dist/style.css";
import {
  CodeXml,
  History,
  SwatchBook,
  Copy,
  Minimize2,
  Fullscreen,
  Maximize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import CopyButton from "@/components/copy-button";
import MermaidSelect from "./select-mermaid-theme";
import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TransitionProps } from "@mui/material/transitions";
import Fade from "@mui/material/Fade";

interface FlowDiagramProps {
  code: any;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FlowDiagram: React.FC<FlowDiagramProps> = ({ code }) => {
  const { mermaidTheme, setMermaidTheme } = useMermaidTheme();
  const { theme } = useTheme();
  const [panZoom, setPanZoom] = useState<boolean>(true);
  const [fullScreenModalOpen, setFullScreenModalOpen] =
    useState<boolean>(false);

  const MermaidNode = () => {
    const id = "mermaid";

    useEffect(() => {
      mermaid.initialize({
        startOnLoad: true,
        securityLevel: "loose",
        theme: mermaidTheme || "default",
      });
    }, [id]);

    const config = {
      theme: mermaidTheme,
    };

    return <Mermaid chart={code} config={config} />;
  };

  const initialNodes = [
    {
      id: "1",
      type: "svgNode",
      width: 1200,
      height: 1200,
      position: { x: 0, y: 0 },
      data: { label: "Mermaid" },
    },
  ];

  const [nodes] = useNodesState(initialNodes);

  const nodeTypes = {
    svgNode: MermaidNode,
  };

  useEffect(() => {
    if (fullScreenModalOpen) {
      setPanZoom(true);
    }
  }, [fullScreenModalOpen]);
  const config = {
    theme: mermaidTheme,
  };

  return (
    <>
      <div className=" h-full w-full flex flex-col">
        <div className="mt-1 mx-1 h-8 overflow-hidden   rounded-t-lg flex flex-row justify-between items-center bg-neutral-100 dark:bg-neutral-800">
          <div>
            <MermaidSelect
              defaultValue={mermaidTheme}
              onValueChange={setMermaidTheme}
            />
          </div>
          <div className="flex flex-row items-center gap-2 mr-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    variant={"ghost"}
                    onClick={() => setPanZoom(!panZoom)}
                  >
                    {panZoom ? (
                      <Fullscreen className="h-4 w-4 text-neutral-800  dark:text-white " />
                    ) : (
                      <Fullscreen className="h-4 w-4 text-neutral-400 dark:text-neutral-600" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
                  Pan and Zoom
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Maximize2
                    className="h-4 w-4"
                    onClick={() => {
                      setFullScreenModalOpen(true);
                      // document.documentElement.requestFullscreen();
                    }}
                  />
                </TooltipTrigger>
                <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
                  Full Screen
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div
          className={cn(
            "h-full w-full mb-1 overflow-auto mx-1 rounded-b-lg border border-neutral-100 dark:border-neutral-800 ",
            mermaidTheme !== "dark" ? "bg-white" : "bg-neutral-900",
            panZoom ? "pan-zoom-active" : ""
          )}
        >
          {panZoom ? (
            <ReactFlow
              nodes={nodes}
              nodeTypes={nodeTypes}
              fitView
              snapToGrid
              selectionOnDrag={false}
              nodesDraggable={false}
            >
              <Background
                color={
                  mermaidTheme === "dark" ? "rgb(60,60,60)" : "rgb(200,200,200)"
                }
              />
              <ZoomControls />
            </ReactFlow>
          ) : (
            <div className="w-full h-full mt-10">
              <Mermaid chart={code} config={config} />
            </div>
          )}
        </div>
      </div>
      <Dialog
        fullScreen
        // TransitionComponent={Transition}
        open={fullScreenModalOpen}
        onClose={() => {
          setFullScreenModalOpen(false);
          // document.exitFullscreen();
        }}
      >
        <div
          className={cn(
            "h-full  w-full ",
            mermaidTheme !== "dark" ? "bg-white" : "bg-neutral-900",
            panZoom ? "pan-zoom-active" : ""
          )}
        >
          <Button
            className="absolute top-4 right-4 z-50 "
            size="icon"
            variant={"ghost"}
          >
            <Minimize2
              className="text-neutral-700 dark:text-neutral-200"
              onClick={() => {
                setFullScreenModalOpen(false);
                // document.exitFullscreen();
              }}
            />
          </Button>
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
                backgroundColor: theme === "dark" ? "" : "",
                borderRadius: "4px",
              }}
              zoomable
              pannable
            />
            <Background
              color={
                mermaidTheme === "dark" ? "rgb(60,60,60)" : "rgb(200,200,200)"
              }
            />
            <ZoomControls />
          </ReactFlow>
        </div>
      </Dialog>
    </>
  );
};

export default FlowDiagram;
