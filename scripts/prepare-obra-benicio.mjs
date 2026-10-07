// Processa as fotos selecionadas da obra "EEEFM Benício Gonçalves" para o case
// de portfólio dedicado, convertendo para WebP em três resoluções.
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";

const SRC_DIR = path.resolve("..", "imagens", "FOTOS PORTFOLIO OBRA BENICIO GONÇALVES");
const OUT_DIR = path.resolve("public", "images", "obras", "benicio-goncalves");

const ARQUIVOS = [
  { src: "20230808_143501.jpg", out: "capa" },
  { src: "b85a8b5e-e932-4bc2-b04c-5a96d8ed686c.jpg", out: "quadra" },
  { src: "199f0e6e-fd4f-4538-a8d2-28e640a6c0cc.jpg", out: "quadra-cobertura" },
  { src: "fce8d0ec-1a8c-4aa6-9066-1de9f37ada4d.jpg", out: "quadra-alambrado" },
  { src: "36ed6b32-0123-4d18-9fda-55efd85b6503.jpg", out: "estrutura-chapa" },
  { src: "3898d0cb-4931-4b9e-a0e6-4d13598685ed.jpg", out: "estrutura-porticos" },
  { src: "1ea0bd52-c5c9-4b95-95ff-48daf6b46cc5.jpg", out: "estrutura-telhado" },
  { src: "08dcffca-c953-4b55-b5c3-bfd43096c649.jpg", out: "fachada-acesso" },
  { src: "26e416ea-98b6-40c6-8356-3c7a60e39058.jpg", out: "fachada-brise" },
  { src: "20230808_143823.jpg", out: "entorno-quadra" },
  { src: "20230808_143502.jpg", out: "entorno-lateral" },
  { src: "20230804_104928.jpg", out: "entorno-alambrado" },
  { src: "20230808_143522.jpg", out: "entorno-circulacao" },
  { src: "232f8068-bf37-4370-930d-8751589b5f86.jpg", out: "tabela-basquete" },
  { src: "9e7a156b-2e4c-4032-9a43-9ae8bc367914.jpg", out: "tabela-vidro" },
];

const TAMANHOS = [
  { suffix: "thumb", width: 480 },
  { suffix: "medium", width: 1200 },
  { suffix: "full", width: 2000 },
];

await fs.mkdir(OUT_DIR, { recursive: true });
for (const { src, out } of ARQUIVOS) {
  for (const { suffix, width } of TAMANHOS) {
    await sharp(path.join(SRC_DIR, src))
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(path.join(OUT_DIR, `${out}-${suffix}.webp`));
  }
  console.log(`[ok] ${out}`);
}
