import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  basePath: '/lever-web', // Specify the repository name
  assetPrefix: '/lever-web/', // Set the prefix for assets
};

export default nextConfig;
