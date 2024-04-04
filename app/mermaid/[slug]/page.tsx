"use client";
import React, { useEffect, useState, useCallback } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/resizeable";
import CodeEditor from "../CodeEditor";
import FlowDiagram from "../FlowDiagram";
import { getDiagram, updateDiagram } from "@/actions/actions";
import Header from "../Header";

const Page: React.FC = ({ params }: { params: { slug: string } }) => {
  const [code, setCode] = useState<string>("");
  const [diagramName, setDiagramName] = useState<string>("");
  const [diagram, setDiagram] = useState<any>(null);
  const [diagramId, setDiagramId] = useState<string>("");
  const [diagramTheme, setDiagramTheme] = useState<string>("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDiagram(params.slug);
        if (data) {
          setDiagram(data);
          setCode(data.code);
          setDiagramName(data.diagram_name);
          setDiagramId(data.id);
          setDiagramTheme(data.diagram_theme);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [params.slug]);

  const onChange = useCallback(
    (val: string) => {
      setCode(val);

      const saveDiagram = async (val: string) => {
        try {
          await updateDiagram(params.slug, val);
        } catch (error) {
          console.error(error);
        }
      };

      saveDiagram(val);
    },
    [params?.slug]
  );

  return (
    <>
      <Header diagramName={diagramName} diagramId={diagramId} />
      <div className="h-[calc(100vh-48px)]">
        <ResizablePanelGroup
          direction={window.innerWidth < 768 ? "vertical" : "horizontal"}
        >
          <ResizablePanel>
            <CodeEditor code={code} onChange={onChange} />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <FlowDiagram
              code={code}
              diagramTheme={diagramTheme}
              diagramId={diagramId}
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default Page;
