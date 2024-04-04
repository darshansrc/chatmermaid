"use client";
import React, { useCallback, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/resizeable";
import CodeEditor from "./CodeEditor";
import FlowDiagram from "./FlowDiagram";
import Header from "./Header";

const Page: React.FC = () => {
  const [code, setCode] = useState("");

  const onChange = useCallback((val: string) => {
    setCode(val);
  }, []);

  return (
    <>
      <Header diagramName="Mermaid Diagram" diagramId="null" />
      <div className=" h-[calc(100vh-48px)]">
        <ResizablePanelGroup
          direction={window.innerWidth < 768 ? "vertical" : "horizontal"}
        >
          <ResizablePanel>
            <CodeEditor code={code} onChange={onChange} />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <FlowDiagram code={code} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default Page;
