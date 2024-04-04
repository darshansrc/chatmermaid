"use client";

import * as React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { IconMessage, IconUsers } from "@/components/ui/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  index: number;
  diagram: any;
  children: React.ReactNode;
}

export function SidebarItem({ index, diagram, children }: SidebarItemProps) {
  const pathname = usePathname();

  const isActive = pathname === `/mermaid/${diagram?.id}`;
  //   const [newChatId, setNewChatId] = useLocalStorage("newChatId", null);
  const shouldAnimate = index === 0 && isActive;

  if (!diagram?.id) return null;

  return (
    <motion.div
      className="relative h-8"
      variants={{
        initial: {
          height: 0,
          opacity: 0,
        },
        animate: {
          height: "auto",
          opacity: 1,
        },
      }}
      initial={shouldAnimate ? "initial" : undefined}
      animate={shouldAnimate ? "animate" : undefined}
      transition={{
        duration: 0.25,
        ease: "easeIn",
      }}
    >
      {/* <div className="absolute left-2 top-1 flex size-6 items-center justify-center">
        {chat.sharePath ? (
          <Tooltip delayDuration={1000}>
            <TooltipTrigger
              tabIndex={-1}
              className="focus:bg-muted focus:ring-1 focus:ring-ring"
            >
              <IconUsers className="mr-2 mt-1 text-zinc-500" />
            </TooltipTrigger>
            <TooltipContent>This is a shared chat.</TooltipContent>
          </Tooltip>
        ) : (
          <IconMessage className="mr-2 mt-1 text-zinc-500" />
        )}
      </div> */}
      <div className="absolute left-2 top-1 flex size-6 items-center justify-center">
        {" "}
        <IconMessage className="mr-2 mt-1 text-blue-500" />
      </div>

      <Link
        href={`/mermaid/${diagram.id}`}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "group w-full px-8 transition-colors hover:bg-zinc-200/40 dark:hover:bg-zinc-300/10",
          isActive && "bg-zinc-200 pr-16 font-semibold dark:bg-zinc-800"
        )}
      >
        <div
          className="relative max-h-5 flex-1 select-none overflow-hidden text-ellipsis break-all"
          title={diagram.diagram_name}
        >
          <span className="whitespace-nowrap">
            {shouldAnimate ? (
              diagram.diagram_name.split("").map((character, index) => (
                <motion.span
                  key={index}
                  variants={{
                    initial: {
                      opacity: 0,
                      x: -100,
                    },
                    animate: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  initial={shouldAnimate ? "initial" : undefined}
                  animate={shouldAnimate ? "animate" : undefined}
                  transition={{
                    duration: 0.25,
                    ease: "easeIn",
                    delay: index * 0.05,
                    staggerChildren: 0.05,
                  }}
                >
                  {character}
                </motion.span>
              ))
            ) : (
              <span>{diagram.diagram_name}</span>
            )}
          </span>
        </div>
      </Link>
      {isActive && <div className="absolute right-2 top-1">{children}</div>}
    </motion.div>
  );
}
