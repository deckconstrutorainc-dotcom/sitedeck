// Gera o pacote estático completo para hospedagem tradicional (Locaweb/IIS):
// 1. Roda `next build` com STATIC_EXPORT=1 (gera pasta out/)
// 2. Reescreve links internos para incluir .html (fix-static-links.mjs)
// 3. Compacta out/ em deckconstrutora-site.zip, um nível acima do projeto
//
// Uso: node scripts/build-static.mjs
import { execSync } from "node:child_process";
import path from "node:path";

const root = path.resolve(".");

console.log("1/3 — build com STATIC_EXPORT=1...");
execSync("npm run build", {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, STATIC_EXPORT: "1" },
});

console.log("\n2/3 — corrigindo links internos para .html...");
execSync("node scripts/fix-static-links.mjs", { cwd: root, stdio: "inherit" });

console.log("\n3/3 — compactando pacote final...");
execSync(
  `powershell -Command "Compress-Archive -Path 'out\\*' -DestinationPath '..\\deckconstrutora-site.zip' -Force"`,
  { cwd: root, stdio: "inherit" },
);

console.log(
  "\nPronto! Pacote gerado em: " +
    path.resolve(root, "..", "deckconstrutora-site.zip"),
);
