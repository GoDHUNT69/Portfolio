import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin tracing root to this project to avoid picking parent lockfiles.
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
