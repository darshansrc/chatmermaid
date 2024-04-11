"use client";

import { IconOpenAI, IconUser } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { spinner } from "./spinner";
import { CodeBlock } from "./codeblock";
import { MemoizedReactMarkdown } from "./markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { StreamableValue } from "ai/rsc";
import { useStreamableText } from "@/hooks/use-streamable-text";
import { AnthropicStream } from "ai";
import MermaidRaw from "@/app/(app)/c/MermaidRaw";
import ReactMarkdown from "react-markdown";
import MarkdownPreview from "@uiw/react-markdown-preview";
import Mermaid from "@/app/(app)/c/Mermaid";
import { useTheme } from "next-themes";
import { Bot } from "lucide-react";

// Different types of message bubbles.

export function UserMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative flex items-start md:-ml-12">
      <div className="flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border bg-background shadow-sm">
        <IconUser />
      </div>
      <div className="ml-4 flex-1 space-y-2 overflow-hidden pl-2">
        {children}
      </div>
    </div>
  );
}

export function BotMessage({
  text,
  code,
  onChange,
  isLoading,
}: {
  text: string;
  code: string;
  onChange: (val: string) => void;
  isLoading: boolean;
}) {
  const { theme } = useTheme();
  const mermaidRegex = /```mermaid\n([\s\S]*?)\n```/;
  const mermaidMatch = text.match(mermaidRegex);
  const nonMermaidText = mermaidMatch ? text.replace(mermaidRegex, "") : text;

  return (
    <div className="group relative flex items-start md:-ml-12">
      <div className="flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border  bg-neutral-200 dark:bg-neutral-200 shadow-sm">
        <Bot className="p-1 text-black" />
      </div>
      <div className="ml-4 flex-1 space-y-2 overflow-hidden pl-2">
        {nonMermaidText && (
          <div data-color-mode={theme}>
            <MarkdownPreview
              source={text}
              // className={theme === "dark" ? "dark:bg-neutral-900" : "bg-white"}
              style={{
                backgroundColor: theme === "dark" ? "rgb(23 23 23)" : "#fff",
              }}
            />
          </div>
        )}
        {mermaidMatch && (
          <>
            {!isLoading && (
              <MermaidRaw
                chart={mermaidMatch[1]}
                isLoading={false}
                onChange={onChange}
              />
            )}
            {/* <CodeBlock
              language="mermaid"
              value={mermaidMatch[1]}
              onChange={onChange}
            /> */}
            {/* <code>{mermaidMatch[1]}</code> */}
          </>
        )}
      </div>
    </div>
  );
}

export function BotCard({
  children,
  showAvatar = true,
}: {
  children: React.ReactNode;
  showAvatar?: boolean;
}) {
  return (
    <div className="group relative flex items-start md:-ml-12">
      <div
        className={cn(
          "flex size-[24px] shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground shadow-sm",
          !showAvatar && "invisible"
        )}
      >
        <IconOpenAI />
      </div>
      <div className="ml-4 flex-1 pl-2">{children}</div>
    </div>
  );
}

export function SystemMessage({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        "mt-2 flex items-center justify-center gap-2 text-xs text-gray-500"
      }
    >
      <div className={"max-w-[600px] flex-initial p-2"}>{children}</div>
    </div>
  );
}

export function SpinnerMessage() {
  return (
    <div className="group relative flex items-start md:-ml-12 mb-4">
      <div className="flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border  bg-neutral-200 dark:bg-neutral-200 shadow-sm">
        <Bot className="p-1 text-black" />
      </div>
      <div className="ml-4 h-[24px] flex flex-row items-center flex-1 space-y-2 overflow-hidden px-1">
        {spinner}
      </div>
    </div>
  );
}

// export function AIMessage({
//   content,
//   className,
// }: {
//   content: string | StreamableValue<string>;
//   className?: string;
// }) {
//   const text = useStreamableText(content);

//   return (
//     <div className={cn("group relative flex items-start md:-ml-12", className)}>
//       <div className="flex size-[24px] shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground shadow-sm">
//         <IconOpenAI />
//       </div>
//       <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1">
//         <MemoizedReactMarkdown
//           className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
//           remarkPlugins={[remarkGfm, remarkMath]}
//           components={{
//             p({ children }) {
//               return <p className="mb-2 last:mb-0">{children}</p>;
//             },
//             code({ node, inline, className, children, ...props }) {
//               if (children.length) {
//                 if (children[0] == "▍") {
//                   return (
//                     <span className="mt-1 animate-pulse cursor-default">▍</span>
//                   );
//                 }

//                 children[0] = (children[0] as string).replace("`▍`", "▍");
//               }

//               const match = /language-(\w+)/.exec(className || "");

//               if (inline) {
//                 return (
//                   <code className={className} {...props}>
//                     {children}
//                   </code>
//                 );
//               }

//               return (
//                 <>
//                   <CodeBlock
//                     key={Math.random()}
//                     language={(match && match[1]) || ""}
//                     value={String(children).replace(/\n$/, "")}
//                     {...props}
//                   />
//                   <MermaidRaw
//                     chart={String(children).replace(/\n$/, "")}
//                     isLoading={false}
//                   />
//                 </>
//               );
//             },
//           }}
//         >
//           {text}
//         </MemoizedReactMarkdown>
//       </div>
//     </div>
//   );
// }
