// Processa as fotos selecionadas da obra "EEEF Judith Leão Castello Ribeiro"
// para o case de portfólio dedicado, convertendo para WebP em três resoluções.
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";

const SRC_DIR = path.resolve(
  "..",
  "imagens",
  "FOTOS ESCOLA JUDITH LEÃO CASTELO",
);
const OUT_DIR = path.resolve("public", "images", "obras", "obra-judith");

const ARQUIVOS = [
  { src: "JUDITH 2.jpeg", out: "capa" },
  { src: "JUDITH 3.jpeg", out: "quadra-estrutura" },
  { src: "JUDITH 26.jpeg", out: "quadra-arquibancada" },
  { src: "JUDITH 25.jpeg", out: "quadra-lateral" },
  { src: "JUDITH 7.jpeg", out: "implantacao-aerea" },
  { src: "JUDITH 46.jpeg", out: "fachada-grafite" },
  { src: "JUDITH 17.jpeg", out: "fachada-gradil" },
  { src: "JUDITH 32.jpeg", out: "area-convivio" },
  { src: "JUDITH 29.jpeg", out: "area-bancos" },
  { src: "JUDITH 34.jpeg", out: "sala-aula" },
  { src: "JUDITH 44.jpeg", out: "refeitorio" },
  { src: "JUDITH 37.jpeg", out: "sala-apoio" },
  { src: "JUDITH 39.jpeg", out: "corredor-interno" },
  { src: "JUDITH 12.jpeg", out: "acesso-blocos" },
  { src: "JUDITH 42.jpeg", out: "corredor-externo" },
  { src: "JUDITH 28.jpeg", out: "castelo-dagua" },
  { src: "JUDITH 33.jpeg", out: "quadro-eletrico" },
  { src: "JUDITH 24.jpeg", out: "subestacao" },
];

const TAMANHOS = [
  { suffix: "thumb", width: 480 },
  { suffix: "medium", width: 1200 },
  { suffix: "full", width: 2000 },
];

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  for (const { src, out } of ARQUIVOS) {
    const srcPath = path.join(SRC_DIR, src);
    for (const { suffix, width } of TAMANHOS) {
      const outPath = path.join(OUT_DIR, `${out}-${suffix}.webp`);
      await sharp(srcPath)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(outPath);
      console.log(`[ok] ${out}-${suffix}.webp`);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
