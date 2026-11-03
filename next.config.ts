import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow importing JSON from /data
  // No output: 'standalone' — Nixpacks runs `next start` with full node_modules.
  // www → apex is also enforced in src/middleware.ts. This copy covers the
  // routing layer if a request reaches it without the middleware redirect.
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "www.altswitch.xyz" }],
        destination: "https://altswitch.xyz/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.altswitch.xyz" }],
        destination: "https://altswitch.xyz/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
