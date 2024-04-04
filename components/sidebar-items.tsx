"use client";

import { Chat } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";

import { SidebarItem } from "@/components/sidebar-item";
import { useEffect, useState } from "react";
import {
  deleteDiagram,
  getAllDiagrams,
  makeDiagramPublic,
} from "@/actions/actions";
import { SidebarActions } from "./sidebar-actions";

interface SidebarItemsProps {
  chats?: any;
}

export function SidebarItems() {
  const [diagrams, setDiagrams] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllDiagrams();
        setDiagrams(data);
        console.log("data", data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    //  {diagrams?.map((diagram) => (
    //       <li key={diagram.id}>
    //         <Button onClick={() => router.push(`/mermaid/${diagram.id}`)}>
    //           {diagram.diagram_name}
    //         </Button>
    //       </li>
    //     ))}
    <AnimatePresence>
      {diagrams?.map(
        (diagram, index) =>
          diagram && (
            <motion.div
              key={diagram?.id}
              exit={{
                opacity: 0,
                height: 0,
              }}
            >
              <SidebarItem index={index} diagram={diagram}>
                <SidebarActions
                  chat={diagram}
                  removeChat={deleteDiagram}
                  shareChat={makeDiagramPublic}
                />
              </SidebarItem>
            </motion.div>
          )
      )}
    </AnimatePresence>
  );
}
