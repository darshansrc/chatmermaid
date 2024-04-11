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
import Textarea from "react-textarea-autosize";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { IconArrowElbow, IconPlus } from "@/components/ui/icons";
import ReactTextareaAutosize from "react-textarea-autosize";

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
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
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

        <form
          onSubmit={handleSubmit}
          className="w-full relative flex items-center justify-center"
        >
          <div className="relative flex max-h-60 mx-4  w-11/12 grow flex-col overflow-hidden  px-8 sm:rounded-lg sm:border sm:px-12 bg-neutral-950">
            {/* <CirclePlus
              size={25}
              className="absolute left-[4%] dark:text-neutral-200 rounded-full ml-4 z-50 p-1"
            /> */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-0 top-[50%] translate-y-[-50%] size-8 rounded-full  p-0 sm:left-4"
                  >
                    <IconPlus />
                    <span className="sr-only">New Chat</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>New Chat</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <ReactTextareaAutosize
              tabIndex={0}
              placeholder="Send a message."
              className="min-h-[30px] w-11/12 resize-none bg-transparent px-2 py-4 focus-within:outline-none sm:text-sm"
              autoFocus
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              name="message"
              rows={1}
              value={input}
              onChange={handleInputChange}
            />

            {/* <input
              value={input}
              className="h-10 mx-4  w-11/12 py-4 px-12 rounded-lg focus:ring-0 bg-neutral-200/50 dark:bg-neutral-700/50 backdrop-blur-md dark:bg-transparent/6 "
              placeholder="Ask AI "
              onChange={handleInputChange}
            ></input> */}
            <div className="absolute right-0 top-[50%] translate-y-[-50%]  sm:right-4 ">
              <Button type="submit" size="icon" disabled={input === ""}>
                <IconArrowElbow />
              </Button>

              {/* <button
                type="submit"
                className="absolute right-0 top-[50%] translate-y-[-50%] text-white rounded-full   bg-blue-600 "
              >
                <ArrowUp size={24} className="p-1" />
              </button> */}
            </div>
            {/* <button
              type="submit"
              className="absolute right-[4%] text-white rounded-full  mr-4 bg-blue-600 "
            >
              <ArrowUp size={24} className="p-1" />
            </button> */}
          </div>
        </form>
      </div>
    </>
  );
}
