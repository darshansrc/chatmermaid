"use client";
import React, { useState, useEffect } from "react";
import {
  BotMessage,
  SpinnerMessage,
  UserMessage,
} from "@/components/chat/message";
import { Separator } from "@/components/ui/separator";
import { useChat } from "ai/react";
import { CircleArrowRight, Send } from "lucide-react";
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
import { EmptyScreen } from "@/app/new/empty-screen";
import { ModeToggle } from "@/components/mode-toggle";
import { DropdownMenuDemo } from "../DropDownMenu";
import { Input } from "@/components/ui/input";
import { IconArrowElbow, IconPlus, IconSeparator } from "@/components/ui/icons";
import { SidebarToggle } from "@/components/sidebar/sidebar-toggle";
import { useSidebar } from "@/hooks/use-sidebar";
import { createNewDiagramWithContent } from "@/actions/actions";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  const { isSidebarOpen } = useSidebar();

  const router = useRouter();

  const onChange = (val: string) => {
    const id = createNewDiagramWithContent(val, "New Diagram");
    router.push(`/c/${id}`);
  };

  return (
    <div className="relative h-full min-h-screen dark:bg-neutral-900 w-full">
      <header
        className={` pl-0 max-h-screen overflow-hidden  duration-300 peer-[[data-state=open]]:lg:pl-[200px] peer-[[data-state=open]]:xl:pl-[220px]  dark:bg-neutral-900  `}
      >
        <div className="w-full m-auto px-4 flex h-12 items-center justify-stretch ">
          <div className=" w-full px-4 flex h-12 items-center  ">
            <div className="">
              <SidebarToggle />
            </div>

            <IconSeparator className="size-6 text-muted-foreground/50" />

            <Input
              defaultValue={"New Diagram"}
              className="text-sm  font-medium border-none dark:border-none p-1 py-0 focus-visible:ring-1 focus-visible:dark:ring-neutral-800 shadow-none dark:shadow-none"
            />
          </div>

          <div className="flex flex-row w-full gap-2 justify-end items-center">
            <ModeToggle />
            <DropdownMenuDemo />
          </div>
        </div>
      </header>

      {messages.length === 0 ? (
        <EmptyScreen />
      ) : (
        <div
          id="chatbox"
          className="pl-4  md:px-48 md:pl-64 max-h-screen relative  overflow-scroll  pb-48 max-w-full pr-4 pt-4"
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
                  onChange={onChange}
                />
              )}

              {m.id !== messages[messages.length - 1].id ? (
                <Separator className="my-4" />
              ) : (
                <div className="my-6" />
              )}
            </div>
          ))}
          <div> {isLoading && !hasResponseStarted && <SpinnerMessage />}</div>
        </div>
      )}

      {/* <div
        className={` pl-0 max-h-screen fixed bottom-0   overflow-hidden  duration-300 peer-[[data-state=open]]:lg:pl-[200px] peer-[[data-state=open]]:xl:pl-[220px]  dark:bg-neutral-900 ${
          !isSidebarOpen
            ? "w-full"
            : "w-full lg:w-[calc(100%-200px)] xl:w-[calc(100%-220px)]"
        }  `}
      >
        <form
          onSubmit={handleSubmit}
          className="w-full p-[10px] lg:px-48  rounded-lg"
          
        >
          <div className="relative flex max-h-60   grow flex-col overflow-hidden   rounded-lg   sm:border sm:px-2 bg-neutral-50 dark:bg-[rgb(16,16,16)]">
            <Textarea
              maxRows={4}
              placeholder="Describe your diagram..."
              onKeyDown={handleKeyDown}
              className="min-h-[60px] w-11/12 resize-none bg-transparent px-2 pt-4 pb-10 focus-within:outline-none sm:text-sm"
              value={input}
              onChange={handleInputChange}
            />

            <div className="absolute  right-2 bottom-2 flex flex-row gap-2   ">
              <Select value={diagramType} onValueChange={setDiagramType}>
                <SelectTrigger  className="border-none dark:border-none dark:bg-[rgb(16,16,16)] outline-none dark:outline-none shadow-none dark:shadow-none text-sm font-medium">
                  <SelectValue placeholder="Select Diagram" />
                </SelectTrigger>
                <SelectContent className="dark:bg-[rgb(16,16,16)]">
                  <SelectGroup >
                    <SelectLabel>Diagram Type</SelectLabel>
                    <SelectItem value="auto" > ✨ Auto detect</SelectItem>
                    <SelectItem value="flowchart" >Flowchart</SelectItem>
                    <SelectItem value="sequence">Sequence Diagram</SelectItem>
                    <SelectItem value="mindmap">Mindmap</SelectItem>
                    <SelectItem value="er">ER Diagram</SelectItem>
                    <SelectItem value="state">State diagram</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Button
                type="submit"
                className="flex flex-row gap-1  text-white dark:text-white "
                size={"sm"}
                disabled={input === ""}
              >
                Send
                <Send className="size-3" />
              </Button>
            </div>
          </div>
        </form>
      </div> */}

      <div
        className={`space-y-4 fixed bottom-0 overflow-hidden  md:px-64 duration-300  peer-[[data-state=open]]:lg:pl-[200px] peer-[[data-state=open]]:xl:pl-[220px]   ${
          !isSidebarOpen
            ? "w-full"
            : "w-full lg:w-[calc(100%-200px)] xl:w-[calc(100%-220px)]"
        }`}
      >
        <div className="sm:border bg-background shadow-lg sm:rounded-t-xl  md:py-4 px-4 py-2 ">
          <div className="relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background  sm:rounded-md sm:border  ">
            {/* <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-0 top-[14px] size-8 rounded-full bg-background p-0 sm:left-4"
                    onClick={() => {
                      router.push("/new");
                    }}
                  >
                    <IconPlus />
                    <span className="sr-only">New Chat</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>New Chat</TooltipContent>
              </Tooltip>
            </TooltipProvider> */}

            <Textarea
              maxRows={4}
              placeholder="Describe your diagram..."
              onKeyDown={handleKeyDown}
              className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
              value={input}
              onChange={handleInputChange}
            />
            <div className="absolute right-0 top-[13px] sm:right-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button type="submit" size="icon" disabled={input === ""}>
                      <IconArrowElbow />
                      <span className="sr-only">Send message</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Send message</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
