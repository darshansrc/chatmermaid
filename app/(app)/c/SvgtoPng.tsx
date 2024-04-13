import mermaid from "mermaid";
import React, { useRef, useEffect, useState } from "react";

interface SvgToPngProps {
  chart: string;
  config: {};
  width?: number;
  height?: number;
}

const SvgToPng: React.FC<SvgToPngProps> = ({
  chart,
  config,
  width = 16384,
  height = 16384,
}) => {
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

          const str = await mermaid.render("mermaid-image", chart);
          const img = new Image();
          img.src = `data:image/svg+xml;base64,${btoa(str.svg)}`;

          await new Promise((resolve) => {
            img.onload = resolve;
          });

          canvas.width = width;
          canvas.height = height;

          const scaleFactor = Math.min(width / img.width, height / img.height);
          const drawWidth = img.width * scaleFactor;
          const drawHeight = img.height * scaleFactor;
          const drawX = (width - drawWidth) / 2;
          const drawY = (height - drawHeight) / 2;

          ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
          const newPngDataUrl = canvas.toDataURL("image/png");
          setPngDataUrl(newPngDataUrl);
        }
      }
    };

    convertSvgToPng();
  }, [chart, config, width, height]);

  const downloadPng = () => {
    if (pngDataUrl) {
      const a = document.createElement("a");
      a.href = pngDataUrl;
      a.download = "image.png";
      a.click();
    }
  };

  return (
    <div>
      <div className="hidden">
        <canvas ref={canvasRef} />
      </div>
      <button onClick={downloadPng}>Download PNG</button>
    </div>
  );
};

export default SvgToPng;
