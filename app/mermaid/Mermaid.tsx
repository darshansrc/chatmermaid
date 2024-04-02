import React, { useEffect } from "react";
import mermaid from "mermaid";

interface MermaidProps {
  chart: string;
  config?: Partial<typeof DEFAULT_CONFIG>;
}

const DEFAULT_CONFIG = {
  // startOnLoad: true,
  // theme: "forest",
  // logLevel: "fatal",
  // securityLevel: "loose",
  // arrowMarkerAbsolute: false,
  // flowchart: {
  //   htmlLabels: true,
  //   curve: "linear",
  // },
  // sequence: {
  //   diagramMarginX: 50,
  //   diagramMarginY: 10,
  //   actorMargin: 50,
  //   width: 500,
  //   height: 65,
  //   boxMargin: 10,
  //   boxTextMargin: 5,
  //   noteMargin: 10,
  //   messageMargin: 35,
  //   mirrorActors: true,
  //   bottomMarginAdj: 1,
  //   useMaxWidth: true,
  //   rightAngles: false,
  //   showSequenceNumbers: false,
  // },
  // gantt: {
  //   titleTopMargin: 25,
  //   barHeight: 20,
  //   barGap: 4,
  //   topPadding: 50,
  //   leftPadding: 75,
  //   gridLineStartPadding: 35,
  //   fontSize: 11,
  //   fontFamily: '"Open-Sans", "sans-serif"',
  //   numberSectionStyles: 4,
  //   axisFormat: "%Y-%m-%d",
  // },
};

const Mermaid: React.FC<MermaidProps> = ({ chart, config = {} }) => {
  // Mermaid initialize its config
  mermaid.initialize({ ...DEFAULT_CONFIG, ...config });

  useEffect(() => {
    mermaid.contentLoaded();
  }, [config]);

  if (!chart) return null;
  return (
    <div className="mermaid" id="mermaid">
      {chart}
    </div>
  );
};

export default Mermaid;
