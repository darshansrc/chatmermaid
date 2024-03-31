"use client";
import React, { useState } from "react";
import { MapInteractionCSS } from "react-map-interaction";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/resizeable";
import Mermaid from "./Mermaid";
import { ModeToggle } from "@/components/mode-toggle";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { langs } from "@uiw/codemirror-extensions-langs";

const Page = () => {
  const [code, setCode] = useState("");

  const handleCodeChange = (e: any) => {
    setCode(e.target.value);
  };

  const onChange = React.useCallback((val, viewUpdate) => {
    console.log("val:", val);
    setCode(val);
  }, []);

  return (
    <ResizablePanelGroup className="min-h-screen" direction="horizontal">
      <ResizablePanel className="flex m-4 flex-col relative items-center justify-center">
        <ModeToggle />
        <CodeMirror
          value={code}
          minHeight="100%"
          minWidth="100%"
          className="w-full h-full rounded-xl"
          lang="mermaid"
          extensions={[langs.mermaid()]}
          onChange={onChange}
          height="100px"
          theme={vscodeDark}
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="flex w-full items-center relative justify-center">
        <MapInteractionCSS className="flex w-full items-center relative justify-center">
          <Mermaid chart={code} id="mermaid" />
        </MapInteractionCSS>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Page;
