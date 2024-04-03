import { createClient } from "@/utils/supabase/actions";
import { cookies } from "next/headers";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const cookieStore = cookies();

  const code = searchParams.get("code");

  // if "next" is in param, use it in the redirect URL
  const next = searchParams.get("next") ?? "/";

  if (code) {
    console.log("code", code);
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      return NextResponse.redirect(`${origin}/login?error=${error.message}`);
    }

    if (!error) {
      return NextResponse.redirect(`${origin}/mermaid`);
    }
  }

  // TODO: Create this page
  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/login?error=unknown-error`);
}
