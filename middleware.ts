import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { session } = await fetch(
    new URL("/api/auth/get-session", request.nextUrl.origin),
    {
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
    }
  )
    .then(async (res) => {
      const data = await res.json();

      return data ? data : { session: null };
    })
    .catch((err) => {
      console.error("MIDDLEWARE: Error fetching session:", err);
      return { session: null };
    });

  if (!session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
