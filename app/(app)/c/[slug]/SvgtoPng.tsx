import mermaid from "mermaid";
import React, { useRef, useEffect, useState } from "react";

interface SvgToPngProps {
  chart: string;
  config: {};
}

const SvgToPng: React.FC<SvgToPngProps> = ({ chart, config }) => {
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
          const str = await mermaid.render("mermaid", chart);
          const img = new Image();
          img.src = `data:image/svg+xml;base64,${btoa(str.svg)}`;
          await new Promise((resolve) => {
            img.onload = resolve;
          });

          canvas.width = 1024;
          canvas.height = 1024;

          const imgWidth = img.width;
          const imgHeight = img.height;
          const scaleFactor = Math.min(1024 / imgWidth, 1024 / imgHeight);
          const drawWidth = imgWidth * scaleFactor;
          const drawHeight = imgHeight * scaleFactor;
          const drawX = (1024 - drawWidth) / 2;
          const drawY = (1024 - drawHeight) / 2;
          ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);

          const newPngDataUrl = canvas.toDataURL("image/png");
          setPngDataUrl(newPngDataUrl);
        }
      }
    };

    convertSvgToPng();
  }, [chart, config]);

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
      <canvas ref={canvasRef} />
      {pngDataUrl && <button onClick={downloadPng}>Download PNG</button>}
    </div>
  );
};

export default SvgToPng;
