"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { PostgrestError } from "@supabase/supabase-js";

type DiagramData = {
  data: any[] | null;
  error: PostgrestError | null;
};

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

  revalidatePath("/mermaid", "layout");
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

  revalidatePath("/mermaid", "layout");
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
    .eq("user_id", user.id);

  if (error) {
    return error.message;
  }

  return data;
}

type data = {
  id: string;
  code: string;
  user_id: string;
  diagram_name: string;
};

export async function createNewDiagram() {
  const supabase = createClient();

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
        user_id: user.id,
        diagram_name: "New Diagram",
        code: "graph TD\n  A --> B",
      },
    ])
    .select();

  if (data) {
    console.log(data);
    redirect(`/mermaid/${data[0].id}`);
  }

  if (error) {
    return error.message;
  }

  return data;
}

export async function updateDiagram(id: string, code: string) {
  const supabase = createClient();

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

  const { error } = await supabase.from("diagrams").delete().eq("id", id);

  if (error) {
    return error.message;
  }

  return true;
}

export async function getDiagram(id: string) {
  const supabase = createClient();

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
