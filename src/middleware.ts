import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APEX_HOST = "altswitch.xyz";

/**
 * www and apex both served 200s, so Search Console split the same pages
 * (notably /alternatives/intercom) across hosts. Comparison pages already
 * canonicalized to the apex; the host itself did not.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();
  if (host !== `www.${APEX_HOST}`) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.hostname = APEX_HOST;
  url.protocol = "https:";
  url.port = "";
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
