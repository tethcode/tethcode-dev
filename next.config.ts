import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  // 1. Force Webpack only (Disable Turbopack)
  // This prevents the 'popcnt' crash on older CPUs
  bundlePagesRouterDependencies: true, 

  // 2. React 19 Compiler
  // We'll keep this on, but if the RAM usage is too high, 
  // you can change it to false to save memory.
  reactCompiler: true,

  experimental: {
    // 3. Survival Mode for 4GB RAM
    // Prevents Next.js from loading all pages into RAM at once
    preloadEntriesOnStart: false,
    
    // 4. Memory Optimizations
    // Specifically designed for low-memory environments (Next.js 15/16)
    webpackMemoryOptimizations: true,
    
    // 5. Limits the number of worker threads to 1
    // By default, Next.js uses multiple CPU cores, which eats more RAM.
    // This setting forces it to do one thing at a time.
    cpus: 1,
  },


  // 6. Custom Webpack Tuning
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Disables the heavy in-memory cache to save RAM
      config.cache = false;
      // Limits parallel tasks
      config.parallelism = 1;
    }
    return config;
  },
};

export default nextConfig;
