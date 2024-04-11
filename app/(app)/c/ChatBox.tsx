"use client";
import React, { useState, useEffect } from "react";
import {
  BotMessage,
  SpinnerMessage,
  UserMessage,
} from "@/components/chat/message";
import { Separator } from "@/components/ui/separator";
import { useChat } from "ai/react";
import {
  ArrowUp,
  CircleArrowRight,
  CirclePlus,
  Forward,
  Key,
  TextCursor,
} from "lucide-react";
import { toast } from "sonner";
import { spinner } from "@/components/chat/spinner";
import { getChats, updateChats } from "@/actions/actions";
import { Message } from "ai";
import useChatStore from "@/store/chat-store";
import Textarea from "react-textarea-autosize";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { IconArrowElbow, IconPlus } from "@/components/ui/icons";
import ReactTextareaAutosize from "react-textarea-autosize";
import { Checkbox } from "@/components/ui/checkbox";

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
        toast.error(
          error.message || "An error occurred. Please try again later."
        ),
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

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === "Return") && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      <div className="relative h-full">
        <div
          id="chatbox"
          className="relative h-full overflow-scroll pb-32  max-w-full  pl-16 pr-4 pt-4"
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

              {m.id !== messages[messages.length - 1].id || isLoading ? (
                <Separator className="my-4" />
              ) : (
                <div className="my-4" />
              )}
            </div>
          ))}
          <div> {isLoading && !hasResponseStarted && <SpinnerMessage />}</div>
        </div>

        <div className="absolute bottom-0 left-0 w-full border-t  dark:bg-neutral-900 bg-white  flex justify-center items-center">
          <form onSubmit={handleSubmit} className="w-full p-[8px] rounded-sm">
            <div className="relative flex max-h-60   grow flex-col overflow-hidden   rounded-md  sm:border sm:px-2 bg-neutral-50 dark:bg-neutral-800">
              {/* <Button
                variant="outline"
                size="icon"
                className="absolute left-0  top-[50%] translate-y-[-50%] size-8 rounded-full  sm:left-4"
              >
                <IconPlus />
              </Button> */}

              <Textarea
                maxRows={4}
                aria-label="maximum height"
                placeholder="Describe your diagram..."
                onKeyDown={handleKeyDown}
                className="min-h-[30px] w-11/12 resize-none bg-transparent px-2 pt-4 pb-10 focus-within:outline-none sm:text-sm"
                value={input}
                onChange={handleInputChange}
              />

              <div className="absolute right-2 bottom-2 flex flex-row gap-2   ">
                {/* <div className="flex items-center pt-1 space-x-1">
                  <Checkbox className="size-3 p-0" id="terms2" />
                  <label
                    htmlFor="terms2"
                    className="font-medium text-[10px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    use current diagram
                  </label>
                </div> */}
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
    </>
  );
}
