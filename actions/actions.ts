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

  redirect("/mermaid");
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return error.message;
  }

  redirect("/mermaid");
}

export async function getAllDiagrams() {
  const supabase = createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (!user) {
    return;
  }

  const { data, error } = await supabase
    .from("diagrams")
    .select("*")
    .eq("user_id", user.id)
    .order("last_updated_at", { ascending: false });

  if (error) {
    return error.message;
  }

  return data;
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

  const { data, error } = await supabase
    .from("chats")
    .upsert([{ id: id, messages: messages, last_updated_at: new Date() }])

    .select();

  if (error) {
    return error.message;
  }
  console.log("data", data);

  return data;
}

export async function getChats(id: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("chats")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return error.message;
  }

  return data;
}

// Create an Anthropic API client (that's edge friendly)
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

// IMPORTANT! Set the runtime to edge
// export const runtime = "edge";

export async function getUserMessage(messages: any) {
  // Extract the `prompt` from the body of the request

  // Ask Claude for a streaming chat completion given the prompt
  const response = await anthropic.messages.create({
    messages,
    model: "claude-3-haiku-20240307",
    stream: true,
    max_tokens: 1024,
  });

  // Convert the response into a friendly text-stream
  const stream = AnthropicStream(response, {
    onStart: async () => {
      // This callback is called when the stream starts
      // You can use this to save the prompt to your database
      await getUser();
    },
    onToken: async (token: string) => {
      // This callback is called for each token in the stream
      // You can use this to debug the stream or save the tokens to your database
    },
    onCompletion: async (completion: string) => {
      // This callback is called when the completion is ready
      // You can use this to save the final completion to your database
      console.log("completion: ", completion);
      await getUser();
    },
  });

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
