import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow importing JSON from /data
  // No output: 'standalone' — Nixpacks runs `next start` with full node_modules.
};

export default nextConfig;
