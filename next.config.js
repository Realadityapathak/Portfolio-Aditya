/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', '@react-three/fiber', '@react-three/drei'],
  },
};

module.exports = nextConfig;
