import { NextRequest, NextResponse } from "next/server";
import { paths } from "./paths";
import { getUrl } from "./utils/getUrl";

export default async function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token");
  const pathname = request.nextUrl.pathname;

  if (pathname === "/" && token) {
    return NextResponse.redirect(new URL(getUrl(paths.dashboard())));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
