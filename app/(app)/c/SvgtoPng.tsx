"use client";
import { convertSvgToPng } from "@/actions/actions";
import mermaid from "mermaid";
import React from "react";

interface SvgToPngProps {
  chart: string;
  config: {};
}

const SvgToPng: React.FC<SvgToPngProps> = ({ chart, config }) => {
  const handleConvert = async () => {
    try {
      mermaid.initialize({
        startOnLoad: true,
        securityLevel: "loose",
        theme: "default",
        ...config,
      });

      if (typeof window === "undefined") {
        return;
      }

      const { svg } = await mermaid.render("mermaid-export", chart);
      console.log("SVG:", svg);
      const svgBuffer = Buffer.from(svg);
      const response = await fetch(`${window.location.origin}/api/download`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ svgBuffer: svgBuffer }),
      });

      if (response.ok) {
        const pngBlob = await response.blob();

        // Create a temporary link for downloading the PNG file
        const tempLink = document.createElement("a");
        tempLink.href = URL.createObjectURL(pngBlob);
        tempLink.download = "converted.png";
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
      } else {
        console.error("Error converting SVG to PNG:", await response.json());
      }
    } catch (error) {
      console.error("Error converting SVG to PNG:", error);
    }
  };

  return (
    <div>
      <div className="hidden ">
        <div className="w-[1024px] h-[1024px]"></div>
      </div>
      <button onClick={handleConvert}>Download PNG</button>
    </div>
  );
};

export default SvgToPng;
