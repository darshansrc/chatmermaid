import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function useMermaidTheme() {
  const [mermaidTheme, setMermaidTheme] = useState("default");
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      setMermaidTheme("dark");
    } else {
      setMermaidTheme("default");
    }
  }, [theme]);

  return { mermaidTheme, setMermaidTheme };
}
