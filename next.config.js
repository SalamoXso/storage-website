/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: process.env.ASSET_PREFIX,
  basePath: process.env.BASE_PATH,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  
 
};


module.exports = nextConfig;