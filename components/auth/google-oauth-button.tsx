"use client";

import { createClient } from "@/utils/supabase/client";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

export default function GoogleSignInButton(props: { nextUrl?: string }) {
  const supabase = createClient();

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
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
      <FcGoogle /> Continue with Google
    </Button>
  );
}
