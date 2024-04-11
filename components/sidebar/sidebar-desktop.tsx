"use client";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Sidebar } from "@/components/sidebar/sidebar";
import { createNewDiagram, getAllDiagrams } from "@/actions/actions";
import { Button } from "../ui/button";
import { ChatHistory } from "./chat-history";

export function SidebarDesktop() {
  const router = useRouter();

  const [diagrams, setDiagrams] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllDiagrams();
        setDiagrams(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Sidebar className="peer absolute dark:bg-zinc-600 inset-y-0 z-30 hidden -translate-x-full border-r bg-muted duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[200px] xl:w-[220px]">
      <ChatHistory />
    </Sidebar>
  );
}
