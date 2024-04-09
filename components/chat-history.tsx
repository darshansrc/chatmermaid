"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SidebarList } from "@/components/sidebar-list";
import { buttonVariants } from "@/components/ui/button";
import { IconPlus } from "@/components/ui/icons";
import { createNewDiagram } from "@/actions/actions";
import { useRouter } from "next/navigation";
import { GanttChart } from "lucide-react";
import { siteConfig } from "@/config/site";
import { spinner } from "./chat/spinner";
import useDiagramStore from "@/store/diagram-store";

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
  const { fetchDiagrams } = useDiagramStore();
  const handleNewDiagram = async () => {
    try {
      const uuid = await createNewDiagram();
      router.push(`/mermaid/${uuid}`);
      fetchDiagrams();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-6">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <GanttChart
            strokeWidth={3}
            className="text-blue-500 font-extrabold"
          />
          <span className="hidden font-urban text-xl font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>
      </div>
      <div className="mb-2 px-2">
        <div
          onClick={handleNewDiagram}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-10 w-full justify-start cursor-pointer bg-zinc-50 px-4 shadow-none transition-colors hover:bg-zinc-200/40 dark:bg-zinc-900 dark:hover:bg-zinc-300/10"
          )}
        >
          <IconPlus className="-translate-x-2 stroke-2" />
          New Diagram
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
