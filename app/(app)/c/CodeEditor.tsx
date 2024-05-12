import React, { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import { githubDarkInit, githubLightInit } from "@uiw/codemirror-theme-github";
import { useTheme } from "next-themes";
import {
  CodeXml,
  History,
  Copy,
  Forward,
  CirclePlus,
  Bug,
  RocketIcon,
  SearchCheck,
  Info,
  ArrowDown,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { syntaxTree } from "@codemirror/language";
import { linter, Diagnostic } from "@codemirror/lint";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import CopyButton from "@/components/copy-button";
import mermaid from "mermaid";
import { toast } from "sonner";

interface CodeEditorProps {
  code: string;
  onChange: (val: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange }) => {
  const { theme } = useTheme();
  const [error, setError] = useState<string | null>(null);
  const [errorToolbarOpen, setErrorToolbarOpen] = useState(false);

  const appTheme = theme;

  useEffect(() => {
    const checkErrors = async () => {
      if (code) {
        try {
          await mermaid.parse(code);
          setError(null);
          console.log(typeof error);
          console.log(error);
          setErrorToolbarOpen(false);
        } catch (error) {
          setError(error);
          setErrorToolbarOpen(true);
        }
      }
    };
    checkErrors();
  }, [code]);

  const resetErrorToolbarOpen = () => {
    setTimeout(() => {
      setErrorToolbarOpen(false);
    }, 4000);
  };

  useEffect(() => {
    resetErrorToolbarOpen();
  }, [errorToolbarOpen]);

  return (
    <div className=" h-full w-full flex relative flex-col">
      <div className="absolute z-40 flex bg-neutral-50 dark:bg-neutral-900 border dark:border-neutral-700 rounded-md flex-row  left-[50%] translate-x-[-50%] bottom-4">
        {/* <div>
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
                plantuml (coming soon)
              </SelectItem>
            </SelectContent>
          </Select>
        </div> */}
        <div className="flex flex-row ">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <Button variant={"ghost"} size={"icon"}>
                  <History className="size-4 text-neutral-400" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
                History
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Button variant={"ghost"} size={"icon"}>
                  <CopyButton textToCopy={code} />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="dark:bg-neutral-800 p-1 px-2 text-[12px]">
                Copy
              </TooltipContent>
            </Tooltip>

            {/* <HoverCard openDelay={0}>
              <HoverCardTrigger>
                <Tooltip open={errorToolbarOpen}>
                  <TooltipTrigger>
                    <Button variant={"ghost"} size={"icon"}>
                      <Bug
                        className={
                          error
                            ? "size-4 text-red-700"
                            : "size-4 text-neutral-400"
                        }
                      />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="p-1 dark:bg-red-500 flex flex-row items-center gap-1 text-red-100 px-2 text-[12px]">
                    <Info className="size-3" /> 1 Error{" "}
                    <ArrowDown className="size-2" />
                  </TooltipContent>
                </Tooltip>
              </HoverCardTrigger>
              <HoverCardContent
                className={`p-0 border-none dark:bg-neutral-800  ${
                  error && "w-[400px]"
                } `}
              >
                <Alert className="dark:bg-neutral-800">
                  {error ? (
                    <>
                      <Bug className="size-4 text-red-700" />
                      <AlertTitle className="text-red-700">Error!</AlertTitle>
                      <AlertDescription className="flex flex-col gap-2">
                        {error.toString()}
                        <Button
                          variant={"default"}
                          className="flex flex-row items-center gap-2"
                          onClick={() => {
                            toast("Error Copied to Clipboard");
                            navigator.clipboard.writeText(error.toString());
                          }}
                        >
                          <Bot className="size-4" /> Fix with AI
                        </Button>
                      </AlertDescription>
                    </>
                  ) : (
                    <>
                      <SearchCheck className="size-4" />
                      <AlertTitle>No Error!</AlertTitle>
                      <AlertDescription>No Error Found</AlertDescription>
                    </>
                  )}
                </Alert>
              </HoverCardContent>
            </HoverCard> */}
          </TooltipProvider>
        </div>
      </div>

      {error && (
        <div className="absolute z-30 p-4 pb-20  flex bg-neutral-50 dark:bg-neutral-900 border-t dark:border-neutral-700  flex-row  left-0  bottom-4">
          <Bug className="size-4 text-red-700" />
          <AlertTitle className="text-red-700">Error!</AlertTitle>
          <AlertDescription className="flex flex-col gap-2">
            {error.toString()}
            <Button
              variant={"default"}
              className="flex flex-row items-center gap-2"
              onClick={() => {
                toast("Error Copied to Clipboard");
                navigator.clipboard.writeText(error.toString());
              }}
            >
              <Bot className="size-4" /> Fix with AI
            </Button>
          </AlertDescription>
        </div>
      )}

      <div className="h-full  relative overflow-auto ">
        <CodeMirror
          value={code}
          minHeight="100%"
          minWidth="100%"
          className="w-full h-full border-none rounded-b-lg active:outline-none   text-[12px] rounded-xl"
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
                    background: "rgb(23, 23, 23)",
                    gutterBackground: "rgb(23, 23, 23)",
                    lineHighlight: "#28282850",
                    selection: "#036dd626",
                  },
                })
              : githubLightInit({
                  settings: {
                    caret: "rgb(90 90 90)",
                    fontFamily: "monospace",
                    background: "rgb(255, 255, 255)",
                    gutterBackground: "rgb(255, 255, 255)",
                    lineHighlight: "#e8e8e850",
                    selection: "#036dd626",
                    gutterBorder: "#ffffff01",
                  },
                })
          }
        />
      </div>
    </div>
  );
};

export default CodeEditor;
