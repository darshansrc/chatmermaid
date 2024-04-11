"use client";
import React, { useState, useEffect } from "react";
import {
  BotMessage,
  SpinnerMessage,
  UserMessage,
} from "@/components/chat/message";
import { Separator } from "@/components/ui/separator";
import { useChat } from "ai/react";
import { ArrowUp, CirclePlus, Forward, TextCursor } from "lucide-react";
import { toast } from "sonner";
import { spinner } from "@/components/chat/spinner";
import { getChats, updateChats } from "@/actions/actions";
import { Message } from "ai";
import useChatStore from "@/store/chat-store";

type ChatBoxProps = {
  diagramId: string;
  code: string;
  onChange: (val: string) => void;
};

export default function ChatBox({ diagramId, code, onChange }: ChatBoxProps) {
  const [prompt, setPrompt] = useState<string>("");
  const [initialChats, setInitialChats] = useState<Message[]>([]);
  const [hasResponseStarted, setHasResponseStarted] = useState(false);
  const { chat, fetchChat } = useChatStore();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setInitialChats(chat);
      console.log("chat", chat);
      scrollDown();
    };
    fetchData();
  }, [chat, diagramId]);

  const { messages, input, data, isLoading, handleInputChange, handleSubmit } =
    useChat({
      initialMessages: initialChats,
      onResponse: () => setHasResponseStarted(true),
      onFinish: () => {
        setHasResponseStarted(false);
        fetchChat(diagramId);
      },
      onError: (error) =>
        toast.error("Unknown error occured. Please try again after some time."),
      body: { diagramId, prompt },
    });

  useEffect(() => {
    setPrompt(input);
  }, [input]);

  useEffect(() => {
    scrollDown();
  }, [messages]);

  // useEffect(() => {
  //   const updateData = async () => {
  //     if (messages[0]) {
  //       const data = await updateChats(diagramId, messages);
  //       if (data) toast.success("Chat saved successfully");
  //     }
  //   };
  //   if (!isLoading) updateData();
  // }, [messages, diagramId, isLoading]);

  function scrollDown() {
    var myDiv = document.getElementById("chatbox");
    if (myDiv) {
      myDiv.scrollTop = myDiv.scrollHeight;
    }
  }

  useEffect(() => {
    if (isLoading) scrollDown();
  });

  return (
    <>
      <div className="relative h-full  pb-20">
        <div
          id="chatbox"
          className="relative h-full overflow-scroll max-w-full  pl-16 pr-4 pt-4"
        >
          {messages.map((m) => (
            <div key={m.id}>
              {m.role === "user" ? (
                <UserMessage>{m.content}</UserMessage>
              ) : (
                <BotMessage
                  text={m.content}
                  isLoading={isLoading}
                  code={code}
                  onChange={onChange}
                />
              )}
              <Separator className="my-4" />
            </div>
          ))}
          {isLoading && !hasResponseStarted && <SpinnerMessage />}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="absolute  flex justify-center border-t border-neutral-200 dark:border-neutral-800 items-center bottom-8 w-full   ">
            <CirclePlus
              size={25}
              className="absolute left-[4%] dark:text-neutral-200 rounded-full ml-4 z-50 p-1"
            />
            <input
              value={input}
              className="h-10 mx-4  w-11/12 py-4 px-12 rounded-lg focus:ring-0 bg-neutral-200/50 dark:bg-neutral-700/50 backdrop-blur-md dark:bg-transparent/6 "
              placeholder="Ask AI "
              onChange={handleInputChange}
            ></input>
            <button
              type="submit"
              className="absolute right-[4%] text-white rounded-full mr-4 bg-blue-600 "
            >
              <ArrowUp size={24} className="p-1" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
