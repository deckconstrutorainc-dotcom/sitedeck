// Prepara as fotos da sede (seção "Nossa Estrutura") para uso no site:
// converte de PNG para WebP otimizado, em duas resoluções (full/medium).
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";

const SRC_DIR = path.resolve(
  "..",
  "imagens",
  "FOTOS SEDE DECK",
  "FOTOS SEDE DECK - Hasselblad X2D 100C",
);
const OUT_DIR = path.resolve("public", "images", "sede");

const ARQUIVOS = [
  { src: "dji_fly_20251002_123614_0096_1759419536143_photo_Hasselblad.png", out: "fachada" },
  { src: "dji_fly_20251002_123322_0088_1759419537442_photo_Hasselblad.png", out: "aerea" },
  { src: "dji_fly_20251002_123348_0090_1759419536820_photo_Hasselblad.png", out: "solar" },
  { src: "IMG_4921_Hasselblad.png", out: "recepcao" },
  { src: "IMG_4930_Hasselblad.png", out: "patio" },
];

const TAMANHOS = [
  { suffix: "full", width: 1800 },
  { suffix: "medium", width: 1000 },
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
