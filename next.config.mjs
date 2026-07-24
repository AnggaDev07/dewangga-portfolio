/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  // Telling Next.js to ignore ESLint errors during the build process
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;