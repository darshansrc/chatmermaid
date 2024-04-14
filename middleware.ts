import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { createNewDiagram } from "./actions/actions";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    }
  );

  const { data: userData } = await supabase.auth.getUser();

  if (request.nextUrl.pathname === "/c" && userData?.user?.email) {
    const uuid = await createNewDiagram();
    return NextResponse.redirect(new URL(`/c/${uuid}`, request.url));
  } else if (request.nextUrl.pathname === "/c" && !userData?.user?.email) {
    return NextResponse.redirect(new URL(`/login`, request.url));
  }

  if (request.nextUrl.pathname === "/" && userData?.user?.email) {
    return NextResponse.redirect(new URL("/c", request.url));
  }

  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/signup", request.url));
  }

  return NextResponse.next({
    request: {
      headers: request.headers,
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
