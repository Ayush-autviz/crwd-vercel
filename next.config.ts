import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static site generation
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Optional: Configure base path if deploying to a subdirectory
  // basePath: '/your-subdirectory',
  
  // Optional: Configure asset prefix for CDN
  // assetPrefix: 'https://your-cdn.com',
  
  // Disable server-side features that don't work with static export
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Optional: Configure trailing slash behavior
  trailingSlash: true,
};

export default nextConfig;
