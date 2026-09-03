// Extrai as imagens embutidas de páginas específicas do PDF de portfólio
// (obras que não têm pasta de fotos própria) e as otimiza para public/images/obras/<slug>/.
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import path from "node:path";
import fs from "node:fs/promises";
import { pathToFileURL } from "node:url";
import sharp from "sharp";

pdfjsLib.GlobalWorkerOptions.workerSrc = pathToFileURL(
  path.resolve("node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs"),
).href;

const siteDir = path.resolve("..");
const files = await fs.readdir(siteDir);
const pdfName = files.find((f) => f.toLowerCase().endsWith(".pdf"));
const pdfPath = path.join(siteDir, pdfName);
const data = new Uint8Array(await fs.readFile(pdfPath));
const doc = await pdfjsLib.getDocument({ data, useSystemFonts: true }).promise;

// páginas -> obra (definidas via inspect-pdf.mjs)
const PAGE_MAP = [
  { page: 12, slug: "estadio-kleber-andrade", limit: 12 },
  { page: 13, slug: "estadio-kleber-andrade", limit: 8, append: true },
  { page: 15, slug: "escola-gomes-cardim", limit: 10 },
  { page: 16, slug: "cat-bombeiros", limit: 12 },
  { page: 18, slug: "cond-morada-do-vale", limit: 10 },
  { page: 19, slug: "cond-vista-do-mar", limit: 14 },
];

const OUT_ROOT = path.resolve("public", "images", "obras");
const SIZES = [
  { suffix: "thumb", width: 480 },
  { suffix: "medium", width: 1200 },
  { suffix: "full", width: 2000 },
];

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

function imageDataToPngBuffer(imgData) {
  // imgData: {width, height, data(Uint8ClampedArray RGBA or RGB), kind}
  const { width, height, data: pixels } = imgData;
  const channels = pixels.length / (width * height);
  return sharp(Buffer.from(pixels), {
    raw: { width, height, channels },
  })
    .png()
    .toBuffer();
}

async function extractPageImages(pageNum) {
  const page = await doc.getPage(pageNum);
  const ops = await page.getOperatorList();
  const names = [];
  for (let i = 0; i < ops.fnArray.length; i++) {
    const fn = ops.fnArray[i];
    if (fn === pdfjsLib.OPS.paintImageXObject || fn === pdfjsLib.OPS.paintJpegXObject) {
      names.push(ops.argsArray[i][0]);
    }
  }

  const buffers = [];
  for (const name of names) {
    try {
      const img = await new Promise((resolve, reject) => {
        page.objs.get(name, (obj) => resolve(obj));
        setTimeout(() => reject(new Error("timeout")), 15000);
      });
      if (!img) continue;
      if (img.width * img.height < 40000) continue; // pula ícones/decoração pequenos
      const png = await imageDataToPngBuffer(img);
      buffers.push({ name, buf: png, width: img.width, height: img.height });
    } catch (err) {
      console.warn(`  [warn] falha ao extrair ${name} na pág ${pageNum}: ${err.message}`);
    }
  }
  return buffers;
}

async function main() {
  const grouped = new Map();

  for (const entry of PAGE_MAP) {
    console.log(`Extraindo página ${entry.page} -> ${entry.slug}...`);
    const imgs = await extractPageImages(entry.page);
    // ordena por área decrescente (imagens maiores = fotos reais, não ícones)
    imgs.sort((a, b) => b.width * b.height - a.width * a.height);
    const selected = imgs.slice(0, entry.limit);
    const list = grouped.get(entry.slug) ?? [];
    list.push(...selected.map((s) => s.buf));
    grouped.set(entry.slug, list);
    console.log(`  encontradas ${imgs.length}, selecionadas ${selected.length}`);
  }

  const manifestPath = path.join(OUT_ROOT, "manifest.json");
  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf-8").catch(() => "{}"));

  for (const [slug, buffers] of grouped) {
    const outDir = path.join(OUT_ROOT, slug);
    await ensureDir(outDir);
    const names = [];
    let index = 0;
    for (const buf of buffers) {
      index += 1;
      const baseName = `foto-${String(index).padStart(2, "0")}`;
      for (const size of SIZES) {
        await sharp(buf)
          .resize({ width: size.width, withoutEnlargement: true })
          .webp({ quality: 82 })
          .toFile(path.join(outDir, `${baseName}-${size.suffix}.webp`));
      }
      names.push(baseName);
    }
    manifest[slug] = names;
    console.log(`[ok] ${slug}: ${names.length} fotos salvas`);
  }

  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  console.log("\nManifesto atualizado.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
