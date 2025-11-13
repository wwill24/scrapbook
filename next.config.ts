import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  outputFileTracingRoot: "/Users/williamwu/Desktop/scrapbook/love-scrapbook",
  basePath: isProd ? '/scrapbook' : '',
  assetPrefix: isProd ? '/scrapbook/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
