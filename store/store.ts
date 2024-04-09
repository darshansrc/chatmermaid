import { create } from "zustand";

interface Diagram {
  id: string;
  diagram_name: string;
  user_id: string;
  code: string;
  created_at: string;
  last_updated_at: string;
  is_public: boolean;
  diagram_theme: string;
}

// create table
//   public.diagrams (
//     id text not null,
//     diagram_name text null,
//     user_id uuid not null default auth.uid (),
//     code text null,
//     created_at timestamp with time zone not null default now(),
//     last_updated_at timestamp with time zone null default now(),
//     is_public boolean null default false,
//     diagram_theme text null,
//     constraint diagrams_pkey primary key (id)
//   ) tablespace pg_default;
