/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // basePath: '/minicog.github.io',
  basePath: '/minicog.github.io',
  trailingSlash: true, 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
