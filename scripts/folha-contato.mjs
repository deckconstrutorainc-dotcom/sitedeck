// Monta uma folha de contato por obra (grade numerada de thumbs) para
// escolher visualmente a melhor foto de capa.
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const OUT = String.raw`C:\Users\User2\Desktop\Solicitacoes-ref\contato`;
await fs.mkdir(OUT, { recursive: true });

const base = path.resolve("public", "images", "obras");
const obras = (await fs.readdir(base, { withFileTypes: true }))
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

const CELL = 300;
const COLS = 5;

for (const obra of obras) {
  const dir = path.join(base, obra);
  const fotos = (await fs.readdir(dir))
    .filter((f) => f.endsWith("-medium.webp"))
    .sort();

  const rows = Math.ceil(fotos.length / COLS);
  const canvas = sharp({
    create: {
      width: COLS * CELL,
      height: rows * CELL,
      channels: 3,
      background: { r: 20, g: 30, b: 35 },
    },
  });

  const composites = [];
  for (let i = 0; i < fotos.length; i++) {
    const buf = await sharp(path.join(dir, fotos[i]))
      .resize(CELL - 8, CELL - 8, { fit: "cover" })
      .toBuffer();
    composites.push({
      input: buf,
      left: (i % COLS) * CELL + 4,
      top: Math.floor(i / COLS) * CELL + 4,
    });

    // etiqueta com o número da foto
    const num = fotos[i].replace("-medium.webp", "").replace("foto-", "");
    const label = Buffer.from(
      `<svg width="60" height="30"><rect width="60" height="30" fill="black" opacity="0.75"/><text x="8" y="21" font-family="Arial" font-size="18" fill="#5fe6c4">${num}</text></svg>`,
    );
    composites.push({
      input: label,
      left: (i % COLS) * CELL + 8,
      top: Math.floor(i / COLS) * CELL + 8,
    });
  }

  await canvas.composite(composites).jpeg({ quality: 78 }).toFile(path.join(OUT, `${obra}.jpg`));
  console.log(`[ok] ${obra} (${fotos.length} fotos)`);
}
