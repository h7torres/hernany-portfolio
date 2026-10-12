import type { NextConfig } from "next";

// The live site lives at h7torres.github.io/hernany-portfolio, so it needs this prefix.
// Locally (npm run dev) it's left empty so the site runs at plain localhost:3000.
const basePath = process.env.NODE_ENV === "production" ? "/hernany-portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
  trailingSlash: true,
  devIndicators: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;