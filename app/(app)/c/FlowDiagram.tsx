"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  useNodesState,
  Background,
  MiniMap,
  ReactFlow,
  useReactFlow,
} from "reactflow";
import Mermaid from "./Mermaid";
import { useTheme } from "next-themes";
import "reactflow/dist/style.css";
import { useMemo } from "react";
import {
  SwatchBook,
  Minimize2,
  Fullscreen,
  Maximize2,
  ChevronsDownUp,
  ChevronsUpDown,
  Lock,
  LockOpen,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TransitionProps } from "@mui/material/transitions";
import { changeDiagramTheme } from "@/actions/actions";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Scan, ZoomIn, ZoomOut } from "lucide-react";
import { BackgroundVariant } from "reactflow";
import ZoomControls from "./zoom-controls";

interface FlowDiagramProps {
  code: any;
  diagramTheme: string;
  diagramId: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FlowDiagram: React.FC<FlowDiagramProps> = ({
  code,
  diagramTheme,
  diagramId,
}) => {
  const { theme } = useTheme();
  const [mermaidTheme, setMermaidTheme] = useState<string>(
    theme === "dark" ? "dark" : "default"
  );
  const [fullScreenModalOpen, setFullScreenModalOpen] =
    useState<boolean>(false);

  useEffect(() => {
    if (diagramTheme) {
      setMermaidTheme(diagramTheme);
    }
  }, [diagramTheme]);
  const [panZoom, setPanZoom] = useState<boolean>(true);

  const onMermaidThemeChange = async (theme: string) => {
    setMermaidTheme(theme);
    await changeDiagramTheme(diagramId, theme);
  };

  const [backgroundVariant, setBackgroundVariant] = useState<
    BackgroundVariant | string
  >(BackgroundVariant.Dots);

  const MermaidNode = () => {
    const id = "mermaid";

    const config = {
      theme: mermaidTheme,
    };

    return (
      code && (
        <Mermaid chart={code} config={config} theme={theme} panZoom={panZoom} />
      )
    );
  };

  const initialNodes = [
    {
      id: "1",
      type: "svgNode",
      width: 100,
      height: 100,
      position: { x: 128, y: 128 },
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
        <div
          className={cn(
            "h-full w-full overflow-auto  "
            // mermaidTheme !== "dark" ? "bg-white" : "bg-neutral-900"
          )}
        >
          {panZoom ? (
            <ReactFlow
              nodes={nodes}
              nodeTypes={nodeTypes}
              snapToGrid
              selectionOnDrag={false}
              nodesDraggable={false}
            >
              <ZoomControls
                panZoom={panZoom}
                setPanZoom={setPanZoom}
                setFullScreenModalOpen={setFullScreenModalOpen}
                mermaidTheme={mermaidTheme}
                onMermaidThemeChange={onMermaidThemeChange}
                backgroundVariant={backgroundVariant}
                setBackgroundVariant={setBackgroundVariant}
              />

              {backgroundVariant != "none" && (
                <Background
                  gap={10}
                  color={
                    backgroundVariant === BackgroundVariant.Dots
                      ? theme === "dark"
                        ? "rgb(40 40 40)"
                        : "rgb(230 230 230)"
                      : theme === "dark"
                      ? "rgb(28 28 28)"
                      : "rgb(245 245 245)"
                  }
                  variant={backgroundVariant as BackgroundVariant}
                />
              )}
            </ReactFlow>
          ) : (
            <div className=" h-full w-full flex flex-col">
              <div
                className={cn(
                  "h-full w-full overflow-auto  relative "
                  // mermaidTheme !== "dark" ? "bg-white" : "bg-neutral-900"
                )}
              >
                <div className="m-auto  h-full p-5 pb-20 overflow-auto">
                  <Mermaid
                    chart={code}
                    config={{ theme: mermaidTheme }}
                    theme={theme}
                    panZoom={panZoom}
                  />
                </div>{" "}
                <ZoomControls
                  panZoom={panZoom}
                  setPanZoom={setPanZoom}
                  setFullScreenModalOpen={setFullScreenModalOpen}
                  mermaidTheme={mermaidTheme}
                  onMermaidThemeChange={onMermaidThemeChange}
                  backgroundVariant={backgroundVariant}
                  setBackgroundVariant={setBackgroundVariant}
                />{" "}
              </div>
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
        }}
      >
        <div
          className={cn(
            "h-full  w-full ",
            theme !== "dark" ? "bg-white" : "bg-neutral-900"
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
              }}
            />
          </Button>
          <ReactFlow
            nodes={nodes}
            nodeTypes={nodeTypes}
            snapToGrid
            selectionOnDrag={false}
            nodesDraggable={false}
          >
            <ZoomControls
              panZoom={panZoom}
              setPanZoom={setPanZoom}
              setFullScreenModalOpen={setFullScreenModalOpen}
              mermaidTheme={mermaidTheme}
              onMermaidThemeChange={onMermaidThemeChange}
              backgroundVariant={backgroundVariant}
              setBackgroundVariant={setBackgroundVariant}
            />
            <MiniMap />
          </ReactFlow>
        </div>
      </Dialog>
    </>
  );
};

export default FlowDiagram;
