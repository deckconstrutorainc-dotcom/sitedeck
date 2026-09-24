// Pós-processa o export estático do Next.js (pasta out/) para reescrever
// links internos de página (href="/portfolio/cie") como href="/portfolio/cie.html",
// já que hospedagem Windows/IIS não faz o rewrite automático que o Next assume.
// Também remove os arquivos de RSC payload (__next.*.txt, pastas de rota vazias)
// que não servem para nada em hospedagem estática tradicional.
import fs from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.resolve("out");

// Rotas de página reais do site (raiz de cada uma vira <rota>.html)
const ROTAS_PAGINA = new Set([
  "/",
  "/sobre",
  "/servicos",
  "/portfolio",
  "/equipe",
  "/contato",
]);

const SLUGS_OBRA = [
  "sml",
  "parque-tecnologico",
  "cie",
  "estadio-kleber-andrade",
  "benicio-goncalves",
  "vale-encantado",
  "cat-bombeiros",
  "escola-gomes-cardim",
  "cond-morada-do-vale",
  "cond-vista-do-mar",
];

function toHtmlHref(href) {
  // já é absoluto de asset (imagem, vídeo, _next, etc.) — não mexe
  if (
    href.startsWith("/images/") ||
    href.startsWith("/videos/") ||
    href.startsWith("/_next/") ||
    href.startsWith("//") ||
    href.includes("://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.endsWith(".html") ||
    href.endsWith(".ico") ||
    href.endsWith(".svg")
  ) {
    return href;
  }

  const [pathname, hash] = href.split("#");
  const suffix = hash ? `#${hash}` : "";

  if (pathname === "/") return href; // raiz do domínio serve index.html automaticamente
  if (ROTAS_PAGINA.has(pathname)) return `${pathname}.html${suffix}`;

  const obraMatch = pathname.match(/^\/portfolio\/([a-z0-9-]+)$/);
  if (obraMatch && SLUGS_OBRA.includes(obraMatch[1])) {
    return `${pathname}.html${suffix}`;
  }

  return href;
}

async function processarHtml(filePath) {
  let conteudo = await fs.readFile(filePath, "utf-8");
  const antes = conteudo;

  conteudo = conteudo.replace(/href="(\/[^"]*)"/g, (match, href) => {
    const novo = toHtmlHref(href);
    return `href="${novo}"`;
  });

  if (conteudo !== antes) {
    await fs.writeFile(filePath, conteudo, "utf-8");
    return true;
  }
  return false;
}

async function encontrarHtmls(dir) {
  const entradas = await fs.readdir(dir, { withFileTypes: true });
  let arquivos = [];
  for (const entrada of entradas) {
    const full = path.join(dir, entrada.name);
    if (entrada.isDirectory()) {
      if (entrada.name === "_next") continue;
      arquivos = arquivos.concat(await encontrarHtmls(full));
    } else if (entrada.name.endsWith(".html")) {
      arquivos.push(full);
    }
  }
  return arquivos;
}

async function main() {
  const htmls = await encontrarHtmls(OUT_DIR);
  let modificados = 0;
  for (const html of htmls) {
    const mudou = await processarHtml(html);
    if (mudou) modificados++;
  }
  console.log(`Links corrigidos em ${modificados}/${htmls.length} arquivos HTML.`);
  console.log(
    "Nota: os arquivos .txt (__next.*.txt, <rota>.txt) NÃO foram removidos —" +
      " são o payload de RSC que o Next.js usa para navegação client-side" +
      " (prefetch/roteamento suave). Removê-los quebra a navegação client-side" +
      " e gera 404 no console, mesmo que o fallback de navegação completa funcione.",
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
