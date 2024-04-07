"use client";

import { BotMessage, UserMessage } from "@/components/chat/message";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <>
      <div className="relative mx-auto mt-4 mb-48 max-w-2xl px-4">
        {messages.map((m) => (
          <div key={m.id}>
            {m.role === "user" ? (
              <UserMessage>{m.content}</UserMessage>
            ) : (
              <BotMessage text={m.content} />
            )}
            <Separator className="my-4" />
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          className="w-full fixed bottom-0 p-4 border-none bg-neutral-900 text-neutral-100"
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
      <div className="fixed top-4 right-4 p-2">
        <ModeToggle />
      </div>
    </>
  );
}
