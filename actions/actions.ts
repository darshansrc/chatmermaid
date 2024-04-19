"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import Anthropic from "@anthropic-ai/sdk";
import { AnthropicStream, StreamingTextResponse } from "ai";

import { createClient } from "@/utils/supabase/server";
import { PostgrestError } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";
import { customAlphabet, nanoid } from "nanoid";
import { kv } from "@vercel/kv";
import { Chat } from "@/lib/types";
import { Message } from "ai";
import { Messages } from "@anthropic-ai/sdk/resources";
import { createCanvas, loadImage } from "canvas";
import mermaid from "mermaid";

type DiagramData = {
  data: any[] | null;
  error: PostgrestError | null;
};

// export const nanoid = customAlphabet(
//   "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
//   7
// ); // 7-character random string

export async function login(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  console.log(data);

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log("error: ", error);
    return error.message;
  }

  redirect("/c");
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  console.log(formData);

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  const { error: updateError } = await supabase.auth.updateUser({
    data: {
      name: formData.get("first_name") as string,
      full_name: ((formData.get("first_name") as string) +
        " " +
        formData.get("last_name")) as string,
    },
  });

  if (error) {
    return error.message;
  }

  redirect("/c");
}

export async function getAllDiagrams() {
  const supabase = createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (user) {
    const { data, error } = await supabase
      .from("diagrams")
      .select("*")
      .eq("user_id", user.id)
      .order("last_updated_at", { ascending: false });

    // if (error) {
    //   return error.message;
    // }

    return data;
  }

  return [];
}

export async function createNewDiagram() {
  const supabase = createClient();

  const newNanoid = customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    7
  );

  const id = nanoid();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (!user) {
    return "User not found.";
  }

  const { data, error } = await supabase
    .from("diagrams")
    .insert([
      {
        id: id,
        user_id: user.id,
        diagram_name: "Untitled Diagram",
        code: "graph TD\n  A --> B",
      },
    ])
    .select();
  if (data) {
    return id;
  }

  if (error) {
    return error.message;
  }
}

export async function updateDiagram(id: string, code: string) {
  const supabase = createClient();

  await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("diagrams")
    .update({ code: code, last_updated_at: new Date() })
    .eq("id", id)
    .select();

  if (error) {
    return error.message;
  }

  return data;
}

export async function deleteDiagram(id: string) {
  const supabase = createClient();
  await supabase.auth.getUser();

  const { error } = await supabase.from("diagrams").delete().eq("id", id);

  if (error) {
    return error.message;
  }

  return true;
}

export async function getDiagram(id: string) {
  const supabase = createClient();
  await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("diagrams")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return error.message;
  }

  return data;
}

export async function makeDiagramPublic(id: string) {
  const supabase = createClient();
  await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("diagrams")
    .update({ is_public: true })
    .eq("id", id)
    .select();

  if (error) {
    return error.message;
  }

  return data;
}

export async function changeDiagramName(id: string, name: string) {
  const supabase = createClient();
  await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("diagrams")
    .update({ diagram_name: name })
    .eq("id", id)
    .select();

  if (error) {
    return error.message;
  }

  return data;
}

export async function changeDiagramTheme(id: string, theme: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("diagrams")
    .update({ diagram_theme: theme })
    .eq("id", id)
    .select();

  if (error) {
    return error.message;
  }

  return data;
}

export async function getUser() {
  const supabase = createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (user) {
    return user;
  }

  return null;
}

export async function updateChats(id: string, messages: Message[]) {
  const supabase = createClient();

  await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("chats")
    .upsert([{ id: id, messages: messages, last_updated_at: new Date() }])

    .select();

  if (error) {
    return error.message;
  }
  // console.log("data", data);

  return data;
}

export async function getChats(id: string) {
  const supabase = createClient();
  await supabase.auth.getUser();
  console.log("getting chats");
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("diagramId", id)
    .order("createdAt", { ascending: true });

  if (error) {
    return error.message;
  }

  return data;
}

export async function saveMessage(
  content: string,
  role: string,
  diagramId: string
) {
  const supabase = createClient();
  await supabase.auth.getUser();
  const id = nanoid();
  const createdAt = new Date();

  const { data, error } = await supabase
    .from("messages")
    .insert([{ content, role, diagramId, id, createdAt }])
    .select();

  if (error) {
    return error.message;
  }

  return data;
}

interface GithubProps {
  origin: string;
  nextUrl: string;
}

export const handleSignInWithGithub = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `http://localhost:3000/oauth/callback`,
    },
  });

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
};
