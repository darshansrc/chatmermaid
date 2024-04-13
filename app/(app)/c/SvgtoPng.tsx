import { Download } from "lucide-react";
import mermaid from "mermaid";
import { nanoid } from "nanoid";
import React, { useRef, useState } from "react";

interface SvgToPngProps {
  chart: string;
  config: {};
  width: number;
  height: number;
  type: string;
}

const SvgToPng: React.FC<SvgToPngProps> = ({
  chart,
  config,
  width,
  height,
  type,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pngDataUrl, setPngDataUrl] = useState<string | null>(null);

  const convertSvgToPng = async () => {
    console.log("convertSvgToPng");
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
        const newPngDataUrl = canvas.toDataURL(`image/${type}`);
        setPngDataUrl(newPngDataUrl);

        return newPngDataUrl;
      }
    }
  };

  const downloadPng = async () => {
    const pngUrl = await convertSvgToPng();

    if (pngUrl) {
      const a = document.createElement("a");
      a.href = pngUrl;
      a.download = `chat-mermaid.${type}`;
      a.click();
    }
  };

  return (
    <div>
      <div className="hidden">
        <canvas ref={canvasRef} />
      </div>
      <button
        onClick={downloadPng}
        className="flex flex-row gap-2 items-center"
      >
        {" "}
        <Download className="size-3" /> Download
      </button>
    </div>
  );
};

export default SvgToPng;
