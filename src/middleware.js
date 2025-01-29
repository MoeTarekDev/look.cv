// import { auth } from "./app/_lib/auth";
// export const middleware = auth;
// export const config = {
//   matcher: ["/:userName"],
// };

// middleware.ts
import { auth } from "./app/_lib/auth";
import { NextResponse } from "next/server";

export default auth(async function middleware(req) {
  const pathname = req.nextUrl.pathname;
  const session = req.auth;

  if (
    session?.user?.isComplete &&
    pathname === "/login/complete-registration"
  ) {
    return NextResponse.redirect(new URL(`/${session.user.userName}`, req.url));
  }
  // Handle /login
  if (pathname === "/login") {
    if (session?.user) {
      const redirectPath = session.user.isComplete
        ? `/${session.user.userName}`
        : "/login/complete-registration";
      return NextResponse.redirect(new URL(redirectPath, req.url));
    }
    return NextResponse.next();
  }

  // Handle /login/complete-registration
  if (pathname === "/login/complete-registration") {
    if (!session?.user) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    if (session.user.isComplete) {
      return NextResponse.redirect(
        new URL(`/${session.user.userName}`, req.url)
      );
    }
    return NextResponse.next();
  }

  // Protect all other routes
  if (!session?.user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Redirect if registration isn't complete
  if (!session.user.isComplete) {
    return NextResponse.redirect(
      new URL("/login/complete-registration", req.url)
    );
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
