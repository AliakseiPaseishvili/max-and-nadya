import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Prisma Compute deployments (ships .next/standalone).
  output: "standalone",
};

export default nextConfig;
