// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/storage-website',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/storage-website/' : '',
  
};

module.exports = nextConfig;
