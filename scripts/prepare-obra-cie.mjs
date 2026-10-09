// Processa as fotos selecionadas da obra "CIE — Centro de Iniciação ao Esporte"
// (Vila Nova de Colares, Serra) para o case de portfólio dedicado.
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";

const SRC_DIR = path.resolve("..", "imagens", "FOTOS PORTFOLIO OBRA CIE");
const OUT_DIR = path.resolve("public", "images", "obras", "cie");

const ARQUIVOS = [
  { src: "20200624_130450.jpg", out: "capa" },
  { src: "IMG-20200716-WA0130.jpg", out: "implantacao-aerea" },
  { src: "IMG-20200716-WA0129.jpg", out: "vista-aerea-ginasio" },
  { src: "20200617_101513.jpg", out: "ginasio" },
  { src: "20200617_100607.jpg", out: "ginasio-quadra" },
  { src: "20200617_100606.jpg", out: "ginasio-arquibancada" },
  { src: "20200617_103027.jpg", out: "estrutura-cobertura" },
  { src: "20200617_101505.jpg", out: "ginasio-lateral" },
  { src: "20200617_100951.jpg", out: "circulacao-superior" },
  { src: "20200617_100903.jpg", out: "piso-emborrachado" },
  { src: "20200617_101009.jpg", out: "mezanino" },
  { src: "20200624_130623.jpg", out: "pista-atletismo" },
  { src: "20200624_130602.jpg", out: "pista-salto" },
  { src: "20200624_130028.jpg", out: "estacionamento" },
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
