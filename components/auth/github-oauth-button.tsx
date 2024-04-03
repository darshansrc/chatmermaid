"use client";

import { createClient } from "@/utils/supabase/client";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

export default function GithubSignInButton(props: { nextUrl?: string }) {
  const supabase = createClient();

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback?next=${
          props.nextUrl || ""
        }`,
      },
    });
  };

  return (
    <Button
      variant="outline"
      className="w-full flex flex-row gap-2 items-center justify-center"
      onClick={handleLogin}
    >
      <FaGithub size={16} /> Continue with Github
    </Button>
  );
}
