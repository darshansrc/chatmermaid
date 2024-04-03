"use client";
import { useState } from "react";

function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: any) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset to default after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return [copied, copyToClipboard];
}

export default useCopyToClipboard;
