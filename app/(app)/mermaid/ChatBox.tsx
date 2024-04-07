/* eslint-disable @next/next/no-img-element */
"use client";
import React, {
  useState,
  useRef,
  useEffect,
  Fragment,
  useCallback,
} from "react";

import { BotMessage, UserMessage } from "@/components/chat/message";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { useChat } from "ai/react";
import { CirclePlus, Forward } from "lucide-react";
import ReactMarkdown from "react-markdown";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { getCodeString } from "rehype-rewrite";
import mermaid from "mermaid";
import Image from "next/image";
import { toast } from "sonner";

export default function ChatBox() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const randomid = () =>
    parseInt(String(Math.random() * 1e15), 10).toString(36);
  const Code = ({ inline, children = [], className, ...props }) => {
    const demoid = useRef(`dome${randomid()}`);
    const [container, setContainer] = useState(null);
    const isMermaid =
      className && /^language-mermaid/.test(className.toLocaleLowerCase());
    const code =
      props.node && props.node.children
        ? getCodeString(props.node.children)
        : children[0] || "";

    const [svgUrl, setSvgUrl] = useState<string>("");

    useEffect(() => {
      mermaid.initialize({
        startOnLoad: true,
        securityLevel: "loose",
        darkMode: true,
        theme: "dark",
      });

      const renderChart = async () => {
        try {
          const { svg } = await mermaid.render("graphDiv", code);
          const blob = new Blob([svg], { type: "image/svg+xml" });
          const url = URL.createObjectURL(blob);
          setSvgUrl(url);
        } catch (error: any) {
          console.error("Error rendering chart:", error.message);
          toast.error("Error rendering chart:", error.message);
        }
      };

      renderChart();
    }, [code]);

    if (isMermaid) {
      return (
        <>
          <code id={demoid.current} />
          <Image
            src={svgUrl}
            width={500}
            height={500}
            className="h-[50vh] w-full"
            alt="Mermaid Chart"
          />
          <code>{children}</code>
        </>
      );
    }
    return <code>{children}</code>;
  };

  return (
    <>
      <div className="relative h-full  pb-20">
        <div className="relative h-full overflow-scroll   pl-16 pr-4 pt-4">
          {messages.map((m) => (
            <div key={m.id}>
              {m.role === "user" ? (
                <UserMessage>{m.content}</UserMessage>
              ) : (
                <BotMessage>
                  <MarkdownPreview
                    className="bg-neutral-900"
                    source={m.content}
                    components={{
                      code: Code,
                    }}
                    style={{ backgroundColor: "rgb(23 23 23)" }}
                  />
                </BotMessage>
              )}
              <Separator className="my-4" />
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="absolute  flex justify-center items-center bottom-8 w-full   ">
            <CirclePlus
              size={25}
              className="absolute left-4 dark:text-neutral-200 rounded-full ml-4 z-50 p-1"
            />
            <input
              value={input}
              className="h-10 mx-4  w-11/12 py-4 px-10 rounded-lg focus:ring-0 bg-neutral-200/50 dark:bg-neutral-700/50 backdrop-blur-md dark:bg-transparent/6 "
              placeholder="Ask AI "
              onChange={handleInputChange}
            ></input>
            <Forward
              size={24}
              className="absolute right-4 text-white rounded-full mr-4 bg-blue-600 p-1"
            />
          </div>
        </form>
      </div>
    </>
  );
}
