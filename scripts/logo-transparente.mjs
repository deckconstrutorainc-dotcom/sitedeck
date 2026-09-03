// Gera versões da logo com fundo transparente (o original é JPEG com fundo branco)
// e uma variante clara para uso sobre fundos escuros.
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const siteDir = path.resolve("..");
const files = await fs.readdir(siteDir);
const nomeLogo = files.find((f) => /logomarca deck\.jpg/i.test(f));
if (!nomeLogo) throw new Error("logo horizontal não encontrada");

const src = path.join(siteDir, nomeLogo);
const outDir = path.resolve("public", "images", "marca");

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const px = Buffer.from(data);

// Torna transparente tudo que é quase branco; guarda a luminância para a variante clara.
for (let i = 0; i < px.length; i += channels) {
  const r = px[i];
  const g = px[i + 1];
  const b = px[i + 2];
  if (r > 235 && g > 235 && b > 235) {
    px[i + 3] = 0;
  }
}

await sharp(px, { raw: { width, height, channels } })
  .png()
  .resize({ width: 900, withoutEnlargement: true })
  .toFile(path.join(outDir, "logo-horizontal.png"));

// Variante branca (para header/footer escuros): mantém o alpha, pinta tudo de branco.
const brancoPx = Buffer.from(px);
for (let i = 0; i < brancoPx.length; i += channels) {
  if (brancoPx[i + 3] > 0) {
    brancoPx[i] = 255;
    brancoPx[i + 1] = 255;
    brancoPx[i + 2] = 255;
  }
}

await sharp(brancoPx, { raw: { width, height, channels } })
  .png()
  .resize({ width: 900, withoutEnlargement: true })
  .toFile(path.join(outDir, "logo-horizontal-branca.png"));

console.log("ok: logo-horizontal.png e logo-horizontal-branca.png");
