import { Button } from "@/components/ui/button";
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

import { cn } from "@/lib/utils";
import { useReactFlow } from "reactflow";
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

interface ZoomControlsProps {
  panZoom: boolean;
  setPanZoom: (value: boolean) => void;
  setFullScreenModalOpen: (value: boolean) => void;
  mermaidTheme: string;
  onMermaidThemeChange: (value: string) => void;
  backgroundVariant: BackgroundVariant | string;
  setBackgroundVariant: (value: BackgroundVariant | string) => void;
}

const ZoomControls = ({
  panZoom,
  setPanZoom,
  setFullScreenModalOpen,
  mermaidTheme,
  onMermaidThemeChange,
  backgroundVariant,
  setBackgroundVariant,
}) => {
  const ZoomControls = () => {
    const reactFlowInstance = useReactFlow();

    // reactFlowInstance.fitView();

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
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>
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
      </TooltipProvider>
    );
  };

  return (
    <div className="absolute z-40 flex bg-neutral-50 dark:bg-neutral-900 border dark:border-neutral-700 rounded-md flex-row gap-2 left-[50%] translate-x-[-50%]  bottom-4">
      <TooltipProvider delayDuration={0}>
        {panZoom ? (
          <ZoomControls />
        ) : (
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
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
          </TooltipProvider>
        )}

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
                <DropdownMenuRadioItem value="dark">dark</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="neutral">
                  neutral
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="forest">
                  forest
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="base">base</DropdownMenuRadioItem>
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
                <Button variant="ghost" size={"icon"} disabled={!panZoom}>
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

export default ZoomControls;
