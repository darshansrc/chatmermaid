import mermaid from "mermaid";
import { nanoid } from "nanoid";
import React, { useRef, useEffect, useState } from "react";

interface SvgToPngProps {
  chart: string;
  config: {};
}

const DownloadSVG: React.FC<SvgToPngProps> = ({ chart, config }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pngDataUrl, setPngDataUrl] = useState<string | null>(null);

  useEffect(() => {
    const convertSvgToPng = async () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          mermaid.initialize({
            startOnLoad: true,
            securityLevel: "loose",
            theme: "default",
            ...config,
          });
          const str = await mermaid.render(`mermaid-image`, chart);
          setPngDataUrl(`data:image/svg+xml;base64,${btoa(str.svg)}`);
        }
      }
    };
    convertSvgToPng();
  }, [chart, config]);

  const downloadPng = () => {
    if (pngDataUrl) {
      const a = document.createElement("a");
      a.href = pngDataUrl;
      a.download = "chat-mermaid.svg";
      a.click();
    }
  };

  return (
    <div>
      <div className="hidden">
        <canvas ref={canvasRef} />
      </div>
      <button onClick={downloadPng}>SVG</button>
    </div>
  );
};

export default DownloadSVG;
