/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    env: {
      // Vercel sets VERCEL=1 at build time; used to load Vercel-only scripts
      NEXT_PUBLIC_IS_VERCEL: process.env.VERCEL ? "1" : "",
    },
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // Chrome DevTools probes this URL on localhost; answer it instead of logging a 404
    nextConfig.rewrites = async () => [
      {
        source: "/.well-known/appspecific/com.chrome.devtools.json",
        destination: "/api/devtools-workspace",
      },
    ];
  }

  return nextConfig;
};
