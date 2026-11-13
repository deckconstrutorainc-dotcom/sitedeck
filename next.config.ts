import type { NextConfig } from "next";

// STATIC_EXPORT=1 gera a pasta out/ (HTML/CSS/JS puro) para hospedagem
// tradicional como a Locaweb. Sem essa variável, builda normalmente para
// o runtime completo do Next.js em modo "standalone" (servidor enxuto usado pelo
// Dockerfile no Coolify da VPS). Ver scripts/build-static.mjs.
const nextConfig: NextConfig = {
  output: process.env.STATIC_EXPORT === "1" ? "export" : "standalone",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
