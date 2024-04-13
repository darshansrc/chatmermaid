import mermaid from "mermaid";
import React, { useRef, useEffect, useState } from "react";

interface SvgToPngProps {
  chart: string;
  config: {};
}

const generateMermaidSvg = async (code: string, config: {}) => {
  const url = new URL("https://mermaid-ssr.vercel.app/render");
  url.searchParams.set(
    "code",
    `
      graph TD;
      A[Square Rect] -- Link text --> B((Circle))
      A --> C(Round Rect)
      B --> D{Rhombus}
      C --> D
    `
  );

  // const config = {
  //   theme: "base",
  //   themeVariables: {
  //     darkMode: true,
  //     background: "transparent",
  //     fontSize: "16px",
  //     primaryColor: "#333",
  //     secondaryColor: "#0006",
  //     lineColor: "#555"
  //   }
  // };
  url.searchParams.set("cfg", JSON.stringify(config));

  const response = await fetch(url);
  const result = await response.json();
  return result.svg;
};

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
          const str = await mermaid.render("mermaid-export", chart);
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
      <div className="hidden ">
        <div className="w-[1024px] h-[1024px]">
          <canvas ref={canvasRef} />
        </div>
      </div>
      {pngDataUrl && <button onClick={downloadPng}>Download PNG</button>}
    </div>
  );
};

export default SvgToPng;
