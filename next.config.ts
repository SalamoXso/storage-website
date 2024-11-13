import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Use 'export' to enable static export behavior
  output: 'export',
  basePath: '/storage-website', // Adjust to your repo name
  assetPrefix: '/storage-website/', // Adjust to your repo name
};

export default nextConfig;
