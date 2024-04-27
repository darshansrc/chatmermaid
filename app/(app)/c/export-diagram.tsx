import * as React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";

import { ImageDown, Share } from "lucide-react";

import SvgToPng from "./SvgtoPng";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ExportDiagramProps {
  code: string;
  config: any;
}

export function ExportDiagram({ code, config }: ExportDiagramProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="flex flex-row gap-1 dark:bg-neutral-900 items-center"
          >
            <Share className="size-4" />
            Export
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] dark:bg-neutral-900">
          <DialogHeader>
            <DialogTitle>Export Diagram</DialogTitle>
          </DialogHeader>
          <Separator />
          <DownloadForm code={code} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size={"icon"}
          className="flex flex-row gap-1 items-center"
        >
          <Share className="size-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="dark:bg-neutral-900">
        <DrawerHeader className="text-left">
          <DrawerTitle>Export Diagram</DrawerTitle>
        </DrawerHeader>
        <DownloadForm code={code} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline" className="dark:bg-neutral-900">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function DownloadForm({ code }: { code: string }) {
  const [exportType, setExportType] = React.useState("png");
  const [exportResolution, setExportResolution] = React.useState([4096]);
  const [mermaidTheme, setMermaidTheme] = React.useState("default");
  return (
    <div className="flex flex-col gap-4 px-4 md:px-0 ">
      <div>
        <Label className="mx-2">File Type</Label>
        <Select onValueChange={setExportType} value={exportType}>
          <SelectTrigger className="  relative flex flex-row items-center ">
            <div className="flex flex-row gap-2 items-center">
              <ImageDown className="size-4" /> <p>{exportType.toUpperCase()}</p>
            </div>
            {exportType === "png" && (
              <Badge className="absolute right-[15%] top-[50%] translate-y-[-50%] bg-blue-600 dark:bg-blue-600 dark:text-white hover:bg-blue-600 dark:hover:bg-blue-600  text-white">
                Suggested
              </Badge>
            )}
          </SelectTrigger>
          <SelectContent className="dark:bg-neutral-900">
            <SelectItem
              value="png"
              className="flex relative flex-row items-center gap-12"
            >
              PNG
              <Badge className="absolute right-[15%] top-[50%] translate-y-[-50%] bg-blue-600 dark:bg-blue-600 dark:text-white hover:bg-blue-600 dark:hover:bg-blue-600  text-white">
                Suggested
              </Badge>
            </SelectItem>
            <SelectItem value="svg">SVG</SelectItem>
            <SelectItem value="jpeg">JPEG</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="">Theme</Label>
        <Select onValueChange={setMermaidTheme} value={mermaidTheme}>
          <SelectTrigger className="  relative flex flex-row items-center ">
            <div className="flex flex-row gap-2 items-center">
              <ImageDown className="size-4" />
              <p>{mermaidTheme.toUpperCase()}</p>
            </div>
          </SelectTrigger>
          <SelectContent className="dark:bg-neutral-900">
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="forest">Forest</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="neutral">Neutral</SelectItem>
            <SelectItem value="base">Base</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="">Resolution</Label>
        <Slider
          defaultValue={exportResolution}
          className=" "
          max={4096}
          step={1024}
          min={1024}
          disabled={exportType === "svg"}
          onValueChange={setExportResolution}
        />
        <p className=" mt-1 text-[12px]">
          {exportResolution} x {exportResolution} px
        </p>
      </div>

      <div>
        <Button className="w-full  mt-2 bg-blue-600 dark:bg-blue-600 dark:text-white hover:dark:bg-blue-700 hover:bg-blue-700 text-white">
          <SvgToPng
            chart={code}
            config={{ theme: mermaidTheme }}
            width={exportResolution[0]}
            height={exportResolution[0]}
            type={exportType}
          />
        </Button>
      </div>
    </div>
  );
}
