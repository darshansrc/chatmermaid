"use client";

import { Chat } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";

import { SidebarItem } from "@/components/sidebar/sidebar-item";
import { useEffect, useState } from "react";
import {
  deleteDiagram,
  getAllDiagrams,
  makeDiagramPublic,
} from "@/actions/actions";
import { SidebarActions } from "./sidebar-actions";
import useDiagramStore from "@/store/diagram-store";
import { spinner } from "../chat/spinner";

export function SidebarItems() {
  const { diagrams, fetchDiagrams } = useDiagramStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetchDiagrams();
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [fetchDiagrams]);

  if (!diagrams)
    return (
      <div className="flex items-center justify-center h-full w-full">
        <p className="text-sm text-muted-foreground">{spinner}</p>
      </div>
    );

  return (
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
