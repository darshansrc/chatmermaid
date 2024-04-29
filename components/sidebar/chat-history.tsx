"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SidebarList } from "@/components/sidebar/sidebar-list";
import { buttonVariants } from "@/components/ui/button";
import { IconPlus } from "@/components/ui/icons";
import { createNewDiagram } from "@/actions/actions";
import { useRouter } from "next/navigation";
import { GanttChart, SquarePen } from "lucide-react";
import { siteConfig } from "@/config/site";
import { spinner } from "../chat/spinner";
import useDiagramStore from "@/store/diagram-store";
import Image from "next/image";
import MermaidLogo from "@/lib/assets/logo";
import { useMediaQuery } from "@/hooks/use-media-query";

interface ChatHistoryProps {
  userId?: string;
}

interface diagram {
  id: string;
  diagram_name: string;
  user_id: string;
  code: string;
  created_at: string;
  last_updated_at: string;
  is_public: boolean;
}
export function ChatHistory() {
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { fetchDiagrams } = useDiagramStore();
  const handleNewDiagram = async () => {
    try {
      // const uuid = await createNewDiagram();
      router.push(`/c/new`);
      fetchDiagrams();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col h-full">
      {/* <div className="flex items-center justify-between px-4 py-6">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <Image
            src="/mermaid.png"
            alt="logo"
            className="bg-white m-[2px] rounded-full"
            width={30}
            height={30}
          />
          <span className="hidden font-urban text-lg font-semibold sm:inline-block">
            chatmermaid
          </span>
        </Link>
      </div> */}
      <div className={`${!isDesktop && "mt-6"}  px-2`}>
        <div
          onClick={handleNewDiagram}
          className={cn(
            // buttonVariants({ variant: "outline" }),
            "h-10 w-full my-4 flex rounded-lg justify-between items-center cursor-pointer   px-2 shadow-none transition-colors hover:bg-zinc-200/40  dark:hover:bg-zinc-300/10"
          )}
        >
          <div className="flex flex-row gap-2 items-center">
            <div className="rounded-full p-[2px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
              <MermaidLogo size={24} />
            </div>
            <p className="text-[12px] font-bold"> New Diagram</p>
          </div>
          <SquarePen size={16} />
          {/* <IconPlus className="-translate-x-2 stroke-2" /> */}
        </div>
      </div>
      {/* <React.Suspense
        fallback={
          <div className="flex items-center justify-center h-full w-full">
            <p className="text-sm text-muted-foreground">{spinner}</p>
          </div>
        }
      > */}
      {/* @ts-ignore */}
      <SidebarList />
      {/* </React.Suspense> */}
    </div>
  );
}
