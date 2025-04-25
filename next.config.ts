import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ... existing config options ...
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // Enable this only if you understand the consequences.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // Enable this only if you understand the consequences.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
