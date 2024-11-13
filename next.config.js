/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/storage-website',  // Keeps paths prefixed with your desired base path
  assetPrefix: '/storage-website/',  // Corrects the asset prefix to be absolute within your base path
  output: 'export',             // Export for static build
};

module.exports = nextConfig;
