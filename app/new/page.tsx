"use client";
import React, { useState, useEffect } from "react";
import {
  BotMessage,
  SpinnerMessage,
  UserMessage,
} from "@/components/chat/message";
import { Separator } from "@/components/ui/separator";
import { useChat } from "ai/react";
import { CircleArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Message } from "ai";
import useChatStore from "@/store/chat-store";
import Textarea from "react-textarea-autosize";

import { Button } from "@/components/ui/button";

import { useTheme } from "next-themes";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EmptyScreen } from "./empty-screen";
import { ModeToggle } from "@/components/mode-toggle";

type ChatBoxProps = {
  diagramId: string;
  code: string;
  onChange: (val: string) => void;
};

export default function ChatBox() {
  const [prompt, setPrompt] = useState<string>("");
  const [initialChats, setInitialChats] = useState<Message[]>([]);
  const [hasResponseStarted, setHasResponseStarted] = useState(false);
  const [diagramType, setDiagramType] = useState<string>("auto");
  const { chat, fetchChat } = useChatStore();
  useEffect(() => {
    const fetchData = async () => {
      setInitialChats(chat);
      console.log("chat", chat);
      scrollDown();
    };
    fetchData();
  }, [chat]);

  const { messages, input, isLoading, handleInputChange, handleSubmit } =
    useChat({
      initialMessages: initialChats,
      onResponse: () => setHasResponseStarted(true),
      onFinish: () => {
        setHasResponseStarted(false);
      },
      onError: (error) =>
        toast.error(
          error.message || "An error occurred. Please try again later."
        ),
    });

  useEffect(() => {
    setPrompt(input);
  }, [input]);

  useEffect(() => {
    scrollDown();
  }, [messages]);

  function scrollDown() {
    var myDiv = document.getElementById("chatbox");
    if (myDiv) {
      myDiv.scrollTop = myDiv.scrollHeight;
    }
  }

  useEffect(() => {
    if (isLoading) scrollDown();
  });

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === "Return") && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  const { theme } = useTheme();

  return (
    <div className="relative h-full min-h-screen dark:bg-neutral-900 w-full">
      <div
        id="chatbox"
        className="relative max-h-screen overflow-scroll pb-32  max-w-full pl-2 md:pl-16 pr-4 pt-4"
      >
        {messages.map((m) => (
          <div key={m.id}>
            {m.role === "user" ? (
              <UserMessage>{m.content}</UserMessage>
            ) : (
              <BotMessage
                text={m.content}
                isLoading={isLoading}
                theme={theme}
              />
            )}

            {m.id !== messages[messages.length - 1].id ||
            isLoading ||
            hasResponseStarted ? (
              <Separator className="my-4" />
            ) : (
              <div className="my-4" />
            )}
          </div>
        ))}
        <div> {isLoading && !hasResponseStarted && <SpinnerMessage />}</div>
      </div>

      {!(messages.length > 1) && <EmptyScreen />}

      <div className="absolute  bottom-0 left-0 w-full border-t md:px-24 lg:px-28  dark:bg-neutral-900 bg-white  flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-full p-[8px] rounded-sm">
          <div className="relative flex max-h-60   grow flex-col overflow-hidden   rounded-md  sm:border sm:px-2 bg-neutral-50 dark:bg-[rgb(16,16,16)]">
            <Textarea
              maxRows={4}
              aria-label="maximum height"
              placeholder="Describe your diagram..."
              onKeyDown={handleKeyDown}
              className="min-h-[30px] w-11/12 resize-none bg-transparent px-2 pt-4 pb-10 focus-within:outline-none sm:text-sm"
              value={input}
              onChange={handleInputChange}
            />

            <div className="absolute  right-2 bottom-2 flex flex-row gap-2   ">
              <ModeToggle />
              <Select value={diagramType} onValueChange={setDiagramType}>
                <SelectTrigger className="border-none dark:border-none dark:bg-neutral-800 outline-none dark:outline-none">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent className="dark:bg-neutral-800">
                  <SelectGroup>
                    <SelectLabel>Diagram Type</SelectLabel>
                    <SelectItem value="auto"> ✨ Auto detect</SelectItem>
                    <SelectItem value="flowchart">Flowchart</SelectItem>
                    <SelectItem value="sequence">Sequence Diagram</SelectItem>
                    <SelectItem value="mindmap">Mindmap</SelectItem>
                    <SelectItem value="er">ER Diagram</SelectItem>
                    <SelectItem value="state">State diagram</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Button
                type="submit"
                className="flex flex-row gap-1"
                size={"sm"}
                disabled={input === ""}
              >
                Send
                <CircleArrowRight className="size-3" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
