/* eslint-disable @next/next/no-img-element */
"use client";
import React, {
  useState,
  useRef,
  useEffect,
  Fragment,
  useCallback,
} from "react";

import {
  BotMessage,
  SpinnerMessage,
  UserMessage,
} from "@/components/chat/message";
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
import { spinner } from "@/components/chat/spinner";
import { getChats, updateChats } from "@/actions/actions";
import { ChatRequestOptions, Message, RequestOptions } from "ai";

type ChatBoxProps = {
  diagramId: string;
};

export default function ChatBox({ diagramId }: ChatBoxProps) {
  const [initialChats, setInitialChats] = useState<Message[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getChats(diagramId);
      if (data) setInitialChats(data.messages);
    };
    fetchData();
  }, [diagramId]);

  const { messages, input, isLoading, handleInputChange, handleSubmit } =
    useChat({ initialMessages: initialChats, body: { diagramId } });

  useEffect(() => {
    const updateData = async () => {
      if (messages[0]) {
        const data = await updateChats(diagramId, messages);
        if (data) toast.success("Chat saved successfully");
      }
    };
    if (!isLoading) updateData();
  }, [messages, diagramId, isLoading]);

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

      if (!isLoading) {
        const renderChart = async () => {
          try {
            const { svg } = await mermaid.render("graphDiv", code);
            const blob = new Blob([svg], { type: "image/svg+xml" });
            const url = URL.createObjectURL(blob);
            setSvgUrl(url);
          } catch (error: any) {
            console.error("Error rendering chart:", error.message);
          }
        };
        renderChart();
      }
    }, [code]);

    if (isMermaid) {
      return (
        <>
          {/* <code id={demoid.current} className="hidden" /> */}
          {svgUrl && (
            <img src={svgUrl} className="h-[50vh] w-full" alt="Mermaid Chart" />
          )}

          {isLoading && <div className="w-full m-auto py-16"> {spinner}</div>}
          <code>{children}</code>
        </>
      );
    }

    return <code>{children}</code>;
  };

  const handleChatSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e, {
      options: {
        body: {
          diagramId: diagramId,
        },
      },
    });
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
          {isLoading && <SpinnerMessage />}
        </div>

        <form onSubmit={handleChatSubmit}>
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
