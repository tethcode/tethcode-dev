import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables the React Compiler (Next.js default for modern apps)
  reactCompiler: true,
  
  // Explicitly enables the dedicated build worker for memory-efficient builds
  experimental: {
    webpackBuildWorker: true,
  },
};

export default nextConfig;
