/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, Fragment } from "react";
import {
  BotMessage,
  SpinnerMessage,
  UserMessage,
} from "@/components/chat/message";
import { Separator } from "@/components/ui/separator";
import { useChat } from "ai/react";
import { CirclePlus, Forward, TextCursor } from "lucide-react";
import { getCodeString } from "rehype-rewrite";
import { toast } from "sonner";
import { spinner } from "@/components/chat/spinner";
import { getChats, updateChats } from "@/actions/actions";
import { Message } from "ai";
import MermaidRaw from "./MermaidRaw";
import { useScrollAnchor } from "@/hooks/use-scroll-anchor";

type ChatBoxProps = {
  diagramId: string;
  code: string;
  onChange: (val: string) => void;
};

const MermaidCode = ({ code, isLoading }) => {
  return (
    <Fragment>
      <MermaidRaw chart={code} isLoading={isLoading} />
      {isLoading && <div className="w-full m-auto py-16">{spinner}</div>}
    </Fragment>
  );
};

const Code = ({ inline, children = [], className, ...props }) => {
  const isMermaid =
    className && /^language-mermaid/.test(className.toLocaleLowerCase());
  const code =
    props.node && props.node.children
      ? getCodeString(props.node.children)
      : children[0] || "";

  return isMermaid ? (
    <MermaidCode code={code} isLoading={false} />
  ) : (
    <code>{children}</code>
  );
};

export default function ChatBox({ diagramId, code, onChange }: ChatBoxProps) {
  const [initialChats, setInitialChats] = useState<Message[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getChats(diagramId);
      if (data) setInitialChats(data.messages);
    };
    fetchData();
  }, [diagramId]);

  const { messages, input, data, isLoading, handleInputChange, handleSubmit } =
    useChat({
      initialMessages: initialChats,
    });

  useEffect(() => {
    const updateData = async () => {
      if (messages[0]) {
        const data = await updateChats(diagramId, messages);
        if (data) toast.success("Chat saved successfully");
      }
    };
    if (!isLoading) updateData();
  }, [messages, diagramId, isLoading]);

  function scrollDown() {
    var myDiv = document.getElementById("chatbox");
    if (myDiv) {
      myDiv.scrollTop = myDiv.scrollHeight;
    }
  }

  useEffect(() => {
    if (isLoading) scrollDown();
  });

  useEffect(() => {
    scrollDown();
  }, [messages]);
  return (
    <>
      <div className="relative h-full  pb-20">
        <div
          id="chatbox"
          className="relative h-full overflow-scroll   pl-16 pr-4 pt-4"
        >
          {messages.map((m) => (
            <div key={m.id}>
              {m.role === "user" ? (
                <UserMessage>{m.content}</UserMessage>
              ) : (
                <div className="flex flex-row">
                  <BotMessage
                    text={m.content}
                    code={code}
                    onChange={onChange}
                  />
                  {isLoading && <TextCursor />}
                </div>
              )}

              <Separator className="my-4" />
            </div>
          ))}
          {isLoading && spinner}
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
