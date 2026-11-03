import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APEX_HOST = "altswitch.xyz";
const WWW_HOST = `www.${APEX_HOST}`;

function hostnames(request: NextRequest): string[] {
  return [request.headers.get("x-forwarded-host"), request.headers.get("host")]
    .flatMap((value) => (value ? value.split(",") : []))
    .map((value) => value.trim().toLowerCase().split(":")[0])
    .filter(Boolean);
}

/**
 * www and apex both served 200s, so Search Console split the same pages
 * across hosts. Railway's edge already 301s HTTP → HTTPS and does not
 * canonicalize www, so this redirect lives in the app.
 * Do not also redirect on x-forwarded-proto: Railway health checks are plain
 * HTTP inside the network, and a second HTTPS redirect can loop.
 */
export function middleware(request: NextRequest) {
  if (!hostnames(request).includes(WWW_HOST)) {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.hostname = APEX_HOST;
  destination.protocol = "https:";
  destination.port = "";
  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: ["/", "/:path*"],
};
