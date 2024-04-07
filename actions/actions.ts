"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { PostgrestError } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";
import { customAlphabet, nanoid } from "nanoid";
import { kv } from "@vercel/kv";
import { Chat } from "@/lib/types";

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

// export async function getMissingKeys() {
//   const keysRequired = ["OPENAI_API_KEY"];
//   return keysRequired
//     .map((key) => (process.env[key] ? "" : key))
//     .filter((key) => key !== "");
// }

// export async function getChats(userId?: string | null) {
//   if (!userId) {
//     return [];
//   }

//   try {
//     const pipeline = kv.pipeline();
//     const chats: string[] = await kv.zrange(`user:chat:${userId}`, 0, -1, {
//       rev: true,
//     });

//     for (const chat of chats) {
//       pipeline.hgetall(chat);
//     }

//     const results = await pipeline.exec();

//     return results as Chat[];
//   } catch (error) {
//     return [];
//   }
// }

// export async function getChat(id: string, userId: string) {
//   const chat = await kv.hgetall<Chat>(`chat:${id}`);

//   if (!chat || (userId && chat.userId !== userId)) {
//     return null;
//   }

//   return chat;
// }

// export async function removeChat({ id, path }: { id: string; path: string }) {
//   const user = await getUser();

//   if (!user) {
//     return {
//       error: "Unauthorized",
//     };
//   }

//   //Convert uid to string for consistent comparison with session.user.id
//   const uid = String(await kv.hget(`chat:${id}`, "userId"));

//   if (uid !== user?.id) {
//     return {
//       error: "Unauthorized",
//     };
//   }

//   await kv.del(`chat:${id}`);
//   await kv.zrem(`user:chat:${user.id}`, `chat:${id}`);

//   revalidatePath("/");
//   return revalidatePath(path);
// }

// export async function clearChats() {
//   const user = await getUser();

//   if (!user?.id) {
//     return {
//       error: "Unauthorized",
//     };
//   }

//   const chats: string[] = await kv.zrange(`user:chat:${user.id}`, 0, -1);
//   if (!chats.length) {
//     return redirect("/");
//   }
//   const pipeline = kv.pipeline();

//   for (const chat of chats) {
//     pipeline.del(chat);
//     pipeline.zrem(`user:chat:${user.id}`, chat);
//   }

//   await pipeline.exec();

//   revalidatePath("/");
//   return redirect("/");
// }

// export async function getSharedChat(id: string) {
//   const chat = await kv.hgetall<Chat>(`chat:${id}`);

//   if (!chat || !chat.sharePath) {
//     return null;
//   }

//   return chat;
// }

// export async function shareChat(id: string) {
//   const user = await getUser();

//   if (!user?.id) {
//     return {
//       error: "Unauthorized",
//     };
//   }

//   const chat = await kv.hgetall<Chat>(`chat:${id}`);

//   if (!chat || chat.userId !== user.id) {
//     return {
//       error: "Something went wrong",
//     };
//   }

//   const payload = {
//     ...chat,
//     sharePath: `/share/${chat.id}`,
//   };

//   await kv.hmset(`chat:${chat.id}`, payload);

//   return payload;
// }

// export async function saveChat(chat: Chat) {
//   const user = await getUser();

//   if (user) {
//     const pipeline = kv.pipeline();
//     pipeline.hmset(`chat:${chat.id}`, chat);
//     pipeline.zadd(`user:chat:${chat.userId}`, {
//       score: Date.now(),
//       member: `chat:${chat.id}`,
//     });
//     await pipeline.exec();
//   } else {
//     return;
//   }
// }

// export async function refreshHistory(path: string) {
//   redirect(path);
// }
