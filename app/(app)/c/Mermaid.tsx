/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { toast } from "sonner";
import useSvgStore from "@/store/svg-store";

interface MermaidProps {
  chart: string;
  config: any;
  theme: string | undefined;
  panZoom: boolean;
}

const randomid = () => parseInt(String(Math.random() * 1e15), 10).toString(36);

const Mermaid: React.FC<MermaidProps> = ({
  chart,
  config = {},
  theme,
  panZoom,
}: MermaidProps) => {
  const demoid = useRef(`dome${randomid()}`);
  const [container, setContainer] = useState(null);

  const { svg: svgStore, setSvg: setSvgStore } = useSvgStore();

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      securityLevel: "loose",

      darkMode: theme === "dark" ? true : false,
      theme: config.theme,
    });

    const reRender = async () => {
      if (container) {
        try {
          const str = await mermaid.render(`mermaid`, chart);
          setSvgStore(str.svg);

          (container as HTMLElement).innerHTML = str.svg;
        } catch (error) {
          (
            container as HTMLElement
          ).innerHTML = `<div><div>${svgStore}</div></div>`;
        }
      }
    };
    reRender();
  }, [container, chart, demoid, setSvgStore, theme, config]);

  const refElement = useCallback((node) => {
    if (node !== null) {
      setContainer(node);
    }
  }, []);

  return (
    <div className="w-full h-full  align-center justify-center flex">
      <div className="w-[1200px] h-[1200px]" ref={refElement} data-name="mermaid" />
    </div>
  );
};

export default Mermaid;
