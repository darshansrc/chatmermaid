"use client";

import { createClient } from "@/utils/supabase/client";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { Spinner } from "@geist-ui/core";
import { spinner } from "../chat/spinner";

export default function GoogleSignInButton(props: { nextUrl?: string }) {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/oauth/callback?next=${
          props.nextUrl || ""
        }`,
      },
    });
    setLoading(false);
  };

  return (
    <Button
      variant="outline"
      className="w-full flex flex-row gap-2 items-center justify-center"
      onClick={handleLogin}
    >
      {loading ? (
        <>
          {spinner} <p>Please wait...</p>
        </>
      ) : (
        <>
          <FcGoogle />
          <p>Continue with Google</p>
        </>
      )}
    </Button>
  );
}
