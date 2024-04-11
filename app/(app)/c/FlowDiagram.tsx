"use client";
import React, { useEffect, useState } from "react";
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
import {
  SwatchBook,
  Minimize2,
  Fullscreen,
  Maximize2,
  ChevronsDownUp,
  ChevronsUpDown,
  Lock,
  LockOpen,
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Scan, ZoomIn, ZoomOut } from "lucide-react";

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

  const MermaidNode = () => {
    const id = "mermaid";
    const reactFlowInstance = useReactFlow();

    reactFlowInstance.fitView();

    const config = {
      theme: mermaidTheme,
    };

    return <Mermaid chart={code} config={config} theme={theme} />;
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

  const ZoomControls = () => {
    const reactFlowInstance = useReactFlow();

    reactFlowInstance.fitView();

    const handleZoomIn = () => {
      reactFlowInstance.zoomIn();
    };

    const handleZoomOut = () => {
      reactFlowInstance.zoomOut();
    };

    const handleReset = () => {
      reactFlowInstance.fitView();
    };

    return (
      <div className="absolute z-40 flex bg-neutral-900 border border-neutral-700 rounded-md flex-row gap-2 left-[50%] translate-x-[-50%] bottom-4">
        <Button size="icon" variant="ghost" onClick={handleZoomIn}>
          <ZoomIn className="m-1" size={15} />
        </Button>
        <Button size="icon" variant="ghost" onClick={handleReset}>
          <Scan className="m-1" size={15} />
        </Button>
        <Button size="icon" variant="ghost" onClick={handleZoomOut}>
          <ZoomOut className="m-1" size={15} />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setPanZoom(!panZoom)}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {panZoom ? (
                  <Lock className="h-4 w-4 text-neutral-800  dark:text-white " />
                ) : (
                  <LockOpen className="h-4 w-4 text-neutral-800  dark:text-white " />
                )}
              </TooltipTrigger>
              <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
                Pan and Zoom
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Button>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => {
                  setFullScreenModalOpen(true);
                }}
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
              Full Screen
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="flex flex-row gap-2">
          <Select
            key={mermaidTheme}
            value={mermaidTheme}
            defaultValue={mermaidTheme}
            onValueChange={onMermaidThemeChange}
          >
            <SelectTrigger className="border-none outline-none w-auto focus:none">
              <SwatchBook size={14} className="m-1" />
              <span className="text-[11px] font-semibold">{mermaidTheme}</span>
            </SelectTrigger>
            <SelectContent
              defaultValue={mermaidTheme}
              className="dark:bg-neutral-800"
            >
              <SelectItem
                className="text-sm py-1 hover:dark:bg-neutral-700"
                value="default"
              >
                default
              </SelectItem>
              <SelectItem
                className="text-sm py-1 hover:dark:bg-neutral-700"
                value="dark"
              >
                dark
              </SelectItem>
              <SelectItem
                className="text-sm py-1 hover:dark:bg-neutral-700"
                value="neutral"
              >
                neutral
              </SelectItem>
              <SelectItem
                className="text-sm py-1 hover:dark:bg-neutral-700"
                value="forest"
              >
                forest
              </SelectItem>
              <SelectItem
                className="text-sm py-1 hover:dark:bg-neutral-600"
                value="base"
              >
                base
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    );
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
              fitView
              snapToGrid
              selectionOnDrag={false}
              nodesDraggable={false}
            >
              <ZoomControls />
            </ReactFlow>
          ) : (
            <div className="m-auto p-5 overflow-auto">
              <Mermaid chart={code} config={config} theme={mermaidTheme} />
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
            fitView
            snapToGrid
            selectionOnDrag={false}
            nodesDraggable={false}
          >
            <ZoomControls />
            <MiniMap />
          </ReactFlow>
        </div>
      </Dialog>
    </>
  );
};

export default FlowDiagram;
