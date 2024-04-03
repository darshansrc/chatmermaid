"use client";
import { Copy, CopyCheck } from "lucide-react";
import React, { useState } from "react";

// Example functional component using the custom hook
function CopyButton({ textToCopy }: { textToCopy: string }) {
  const [copied, setCopied] = useState<boolean>(false);

  setTimeout(() => {
    setCopied(false);
  }, 3000);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <button
      onClick={() => {
        copyToClipboard(textToCopy);
        setCopied(true);
      }}
      className="flex items-center justify-center"
    >
      {copied ? (
        <CopyCheck size={15} className="text-neutral-400" />
      ) : (
        <Copy size={15} className="text-neutral-400" />
      )}
    </button>
  );
}

export default CopyButton;
