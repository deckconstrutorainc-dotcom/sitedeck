// Processa as fotos selecionadas da obra "EEEFM Profª Maria Olinda de Oliveira Menezes"
// para o case de portfólio dedicado, convertendo para WebP em três resoluções.
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";

const SRC_DIR = path.resolve("..", "imagens", "FOTOS ESCOLA MARIA OLINDA");
const OUT_DIR = path.resolve("public", "images", "obras", "obra-maria-olinda");

const ARQUIVOS = [
  { src: "dji_fly_20251002_090550_0020_1759407840583_photo.JPG", out: "capa" },
  { src: "dji_fly_20251002_090520_0018_1759407840899_photo.JPG", out: "implantacao-aerea" },
  { src: "dji_fly_20251002_090532_0019_1759407840633_photo.JPG", out: "bloco-escada" },
  { src: "dji_fly_20251002_091730_0052_1759407825655_photo.JPG", out: "bloco-fachada" },
  { src: "dji_fly_20251002_091810_0055_1759407826064_photo.JPG", out: "bloco-lateral" },
  { src: "dji_fly_20251002_091906_0059_1759407819437_photo.JPG", out: "bloco-acesso" },
  { src: "dji_fly_20251002_091200_0041_1759407830481_photo.JPG", out: "quadra" },
  { src: "dji_fly_20251002_091222_0044_1759407830227_photo.JPG", out: "quadra-estrutura" },
  { src: "dji_fly_20251002_091228_0045_1759407830219_photo.JPG", out: "quadra-cobertura" },
  { src: "dji_fly_20251002_090954_0034_1759407834674_photo.JPG", out: "quadra-arquibancada" },
  { src: "dji_fly_20251002_091234_0046_1759407830177_photo.JPG", out: "quadra-fechamento" },
  { src: "dji_fly_20251002_090720_0024_1759407836053_photo.JPG", out: "mini-quadras" },
  { src: "dji_fly_20251002_090744_0026_1759407835606_photo.JPG", out: "mini-quadras-quadra" },
  { src: "dji_fly_20251002_090840_0029_1759407835041_photo.JPG", out: "patio-pergolados" },
  { src: "dji_fly_20251002_090856_0030_1759407834897_photo.JPG", out: "patio-quadra" },
  { src: "dji_fly_20251002_091052_0039_1759407830835_photo.JPG", out: "patio-amplo" },
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
