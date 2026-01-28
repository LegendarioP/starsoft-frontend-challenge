import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [new URL('https://softstar.s3.amazonaws.com/items/**')],
  },
};

export default nextConfig;
