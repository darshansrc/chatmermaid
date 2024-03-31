"use client";

import React, { useEffect } from "react";
import mermaid from "mermaid";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

mermaid.initialize({
  startOnLoad: true,
  securityLevel: "loose",
  theme: "default",
});

const Mermaid = ({ chart, id }: { chart: string; id: string }) => {
  useEffect(() => {
    document.getElementById(id)?.removeAttribute("data-processed");
    mermaid.contentLoaded();
  }, [chart, id]);

  return (
    <div
      className={id}
      // "flex w-full relative items-center justify-center"
      style={{
        display: "flex",

        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        minWidth: "30vw",
      }}
      id={id}
    >
      {chart}
    </div>
  );
};

export default Mermaid;
