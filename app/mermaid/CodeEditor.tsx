import React, { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import { githubDarkInit, githubLightInit } from "@uiw/codemirror-theme-github";
import { useTheme } from "next-themes";
import { CodeXml, History, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useCopyToClipboard from "@/hooks/use-copy-to-clipboard";
import CopyButton from "@/components/copy-button";

interface CodeEditorProps {
  code: string;
  onChange: (val: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange }) => {
  const { theme } = useTheme();

  const appTheme = theme;
  return (
    <div className=" h-full w-full flex flex-col">
      <div className="mt-1 mx-1 h-8 overflow-hidden  rounded-t-lg flex flex-row justify-between items-center bg-neutral-100 dark:bg-neutral-800">
        <div>
          <Select>
            <SelectTrigger className="border-none outline-none w-auto focus:border-none">
              <CodeXml size={14} className="m-1" />
              <span className="text-[11px] font-semibold">Mermaid</span>
            </SelectTrigger>
            <SelectContent className="dark:bg-neutral-800">
              <SelectItem className="text-sm py-1" value="mermaid">
                Mermaid
              </SelectItem>
              <SelectItem disabled className="text-sm py-1" value="uml">
                UML (coming soon)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-row gap-2 pr-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <History size={15} className="text-neutral-400" />
              </TooltipTrigger>
              <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
                History
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <CopyButton textToCopy={code} />
              </TooltipTrigger>
              <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
                Copy
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="h-full mb-1 overflow-auto mx-1 rounded-b-lg border border-neutral-100  dark:border-neutral-800 ">
        <CodeMirror
          value={code}
          minHeight="100%"
          minWidth="100%"
          basicSetup
          className="w-full h-full rounded-b-lg active:outline-none border-none  text-[12px] rounded-xl"
          lang="mermaid"
          extensions={[langs.mermaid()]}
          onChange={onChange}
          height="100%"
          theme={
            appTheme === "dark"
              ? githubDarkInit({
                  settings: {
                    caret: "rgb(180 180 180)",
                    fontFamily: "monospace",
                    background: "rgb(24, 24, 24)",
                    gutterBackground: "rgb(24, 24, 24)",
                    lineHighlight: "rgb(40 40 40)",
                    selection: "#036dd626",
                  },
                })
              : githubLightInit({
                  settings: {
                    caret: "rgb(90 90 90)",
                    fontFamily: "monospace",
                    background: "rgb(255, 255, 255)",
                    gutterBackground: "rgb(255, 255, 255)",
                  },
                })
          }
        />
      </div>
    </div>
  );
};

export default CodeEditor;
