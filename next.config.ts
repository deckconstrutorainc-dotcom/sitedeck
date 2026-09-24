import type { NextConfig } from "next";

// STATIC_EXPORT=1 gera a pasta out/ (HTML/CSS/JS puro) para hospedagem
// tradicional como a Locaweb. Sem essa variável, builda normalmente para
// o runtime completo do Next.js (usado no Vercel). Ver scripts/build-static.mjs.
const nextConfig: NextConfig = {
  ...(process.env.STATIC_EXPORT === "1" ? { output: "export" as const } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
