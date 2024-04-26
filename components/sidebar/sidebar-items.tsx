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
import timesago from "./timeago";

// create table
//   public.diagrams (
//     id text not null,
//     diagram_name text null,
//     user_id uuid not null,
//     code text null,
//     created_at timestamp with time zone not null default now(),
//     last_updated_at timestamp with time zone null default now(),
//     is_public boolean null default false,
//     diagram_theme text null,
//     constraint diagrams_pkey primary key (id)
//   ) tablespace pg_default;

interface Diagram {
  id: string;
  diagram_name: string;
  user_id: string;
  code: string;
  created_at: string;
  last_updated_at: string;
  is_public: boolean;
}

export function SidebarItems() {
  const { diagrams, fetchDiagrams } = useDiagramStore();
  const [isLoading, setIsLoading] = useState(true);
  const [groupedDiagrams, setGroupedDiagrams] = useState<
    Record<string, Diagram[]>
  >({});

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        fetchDiagrams();
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [fetchDiagrams]);

  useEffect(() => {
    const groupDiagrams = () => {
      const grouped = {};
      diagrams?.forEach((diagram) => {
        const timeAgo = timesago(diagram.last_updated_at);
        if (grouped[timeAgo]) {
          grouped[timeAgo].push(diagram);
        } else {
          grouped[timeAgo] = [diagram];
        }
      });
      setGroupedDiagrams(grouped);
    };
    groupDiagrams();
  }, [diagrams]);

  return (
    <>
      {!(diagrams.length > 0) ? (
        <div className="flex items-center justify-center h-[70vh] w-full">
          <p className="text-sm text-muted-foreground">{spinner}</p>
        </div>
      ) : (
        <div>
          {Object.keys(groupedDiagrams).map((timeAgo, index) => {
            return (
              <div key={index}>
                <div className="flex items-center justify-between px-2 pt-4">
                  <div className="text-xs text-muted-foreground ">
                    {timeAgo}
                  </div>
                </div>
                {groupedDiagrams[timeAgo].map((diagram) => (
                  <SidebarItem key={diagram.id} index={index} diagram={diagram}>
                    <SidebarActions
                      chat={diagram}
                      removeChat={deleteDiagram}
                      shareChat={makeDiagramPublic}
                    />
                  </SidebarItem>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
