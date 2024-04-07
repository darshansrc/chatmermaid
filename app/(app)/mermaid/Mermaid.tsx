/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import mermaid from "mermaid";
import Image from "next/image";

interface MermaidProps {
  chart: string;
  config: any;
  theme: string | undefined;
}

const Mermaid: React.FC<MermaidProps> = ({ chart, config = {}, theme }) => {
  const [svgUrl, setSvgUrl] = useState<string | null>(null);

  useEffect(() => {
    mermaid.initialize({
      ...config,
      startOnLoad: true,
      securityLevel: "loose",
      darkMode: theme === "dark" ? true : false,
    });

    const renderChart = async () => {
      try {
        const { svg } = await mermaid.render("graphDiv", chart);
        const blob = new Blob([svg], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        setSvgUrl(url);
      } catch (error: any) {
        console.error("Error rendering chart:", error.message);
      }
    };

    renderChart();
  }, [chart, config, theme]);

  // Render the SVG as an <img> element
  return svgUrl ? (
    <div className="w-full h-full">
      <img src={svgUrl} className="h-[50vh] w-full" alt="Mermaid Chart" />
    </div>
  ) : null;
};

export default Mermaid;
