/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    // Vercel sets VERCEL=1 at build time; used to load Vercel-only scripts
    NEXT_PUBLIC_IS_VERCEL: process.env.VERCEL ? "1" : "",
  },
};

module.exports = nextConfig;
