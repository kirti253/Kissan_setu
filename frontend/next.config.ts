import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.resolve(process.cwd(), ".."),
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
