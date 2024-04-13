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
      <div className="absolute z-40 flex bg-neutral-50 dark:bg-neutral-900 border dark:border-neutral-700 rounded-md flex-row gap-2 left-[50%] translate-x-[-50%]  bottom-4">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <Button size="icon" variant="ghost" onClick={handleZoomIn}>
                <ZoomIn
                  className="h-4 w-4 text-neutral-800  dark:text-white"
                  size={15}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
              Zoom In
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Button size="icon" variant="ghost" onClick={handleZoomOut}>
                <ZoomOut
                  className="h-4 w-4 text-neutral-800  dark:text-white"
                  size={15}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
              Zoom Out
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Button size="icon" variant="ghost" onClick={handleReset}>
                <Scan
                  className="h-4 w-4 text-neutral-800  dark:text-white"
                  size={15}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
              Reset Zoom
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setPanZoom(!panZoom)}
              >
                {panZoom ? (
                  <Lock className="h-4 w-4 text-neutral-800  dark:text-white " />
                ) : (
                  <LockOpen className="h-4 w-4 text-neutral-800  dark:text-white " />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
              Pan and Zoom
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => {
                  setFullScreenModalOpen(true);
                }}
              >
                <Maximize2 className="h-4 w-4 text-neutral-800  dark:text-white" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
              Full Screen
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <DropdownMenu>
              <TooltipTrigger>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size={"icon"}>
                    <SwatchBook className=" h-4 w-4 text-neutral-800  dark:text-white" />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <DropdownMenuContent side="top" className="w-56">
                <DropdownMenuLabel>Diagram Theme</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  key={mermaidTheme}
                  value={mermaidTheme}
                  defaultValue={mermaidTheme}
                  onValueChange={onMermaidThemeChange}
                >
                  <DropdownMenuRadioItem value="default">
                    default
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="dark">
                    dark
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="neutral">
                    neutral
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="forest">
                    forest
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="base">
                    base
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
              Diagram Theme
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <DropdownMenu>
              <TooltipTrigger>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size={"icon"}>
                    <ChevronsDownUp className=" h-4 w-4 text-neutral-800  dark:text-white" />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <DropdownMenuContent side="top" className="w-56">
                <DropdownMenuLabel>Background Variant</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  key={backgroundVariant}
                  value={backgroundVariant}
                  defaultValue={backgroundVariant}
                  onValueChange={(value: BackgroundVariant | string) =>
                    setBackgroundVariant(value)
                  }
                >
                  <DropdownMenuRadioItem value={BackgroundVariant.Dots}>
                    Dots
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value={BackgroundVariant.Lines}>
                    Lines
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value={BackgroundVariant.Cross}>
                    Cross
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value={"none"}>
                    None
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
              Background Variant
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Button size="icon" variant="ghost">
                <Download className="h-4 w-4 text-neutral-800  dark:text-white" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
              Download
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  };

  const ViewControls = () => {
    return (
      <div className="absolute z-40 flex bg-neutral-50 dark:bg-neutral-900 border dark:border-neutral-700 rounded-md flex-row gap-2 left-[50%] translate-x-[-50%]  bottom-4">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <Button size="icon" variant="ghost" disabled>
                <ZoomIn
                  className="h-4 w-4 text-neutral-800  dark:text-white"
                  size={15}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
              Zoom In
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Button size="icon" variant="ghost" disabled>
                <ZoomOut
                  className="h-4 w-4 text-neutral-800  dark:text-white"
                  size={15}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
              Zoom Out
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Button size="icon" variant="ghost" disabled>
                <Scan
                  className="h-4 w-4 text-neutral-800  dark:text-white"
                  size={15}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
              Reset Zoom
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setPanZoom(!panZoom)}
              >
                {panZoom ? (
                  <Lock className="h-4 w-4 text-neutral-800  dark:text-white " />
                ) : (
                  <LockOpen className="h-4 w-4 text-neutral-800  dark:text-white " />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
              Pan and Zoom
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => {
                  setFullScreenModalOpen(true);
                }}
              >
                <Maximize2 className="h-4 w-4 text-neutral-800  dark:text-white" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
              Full Screen
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <DropdownMenu>
              <TooltipTrigger>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size={"icon"}>
                    <SwatchBook className=" h-4 w-4 text-neutral-800  dark:text-white" />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <DropdownMenuContent side="top" className="w-56">
                <DropdownMenuLabel>Diagram Theme</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  key={mermaidTheme}
                  value={mermaidTheme}
                  defaultValue={mermaidTheme}
                  onValueChange={onMermaidThemeChange}
                >
                  <DropdownMenuRadioItem value="default">
                    default
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="dark">
                    dark
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="neutral">
                    neutral
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="forest">
                    forest
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="base">
                    base
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
              Diagram Theme
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <DropdownMenu>
              <TooltipTrigger>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size={"icon"}>
                    <ChevronsDownUp className=" h-4 w-4 text-neutral-800  dark:text-white" />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <DropdownMenuContent side="top" className="w-56">
                <DropdownMenuLabel>Background Variant</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  key={backgroundVariant}
                  value={backgroundVariant}
                  defaultValue={backgroundVariant}
                  onValueChange={(value: BackgroundVariant | string) =>
                    setBackgroundVariant(value)
                  }
                >
                  <DropdownMenuRadioItem value={BackgroundVariant.Dots}>
                    Dots
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value={BackgroundVariant.Lines}>
                    Lines
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value={BackgroundVariant.Cross}>
                    Cross
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value={"none"}>
                    None
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
              Background Variant
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
              snapToGrid
              selectionOnDrag={false}
              nodesDraggable={false}
            >
              <ZoomControls />

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
                    config={config}
                    theme={mermaidTheme}
                    panZoom={panZoom}
                  />
                </div>
                <ViewControls />
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
            <ZoomControls />
            <MiniMap />
          </ReactFlow>
        </div>
      </Dialog>
    </>
  );
};

export default FlowDiagram;
