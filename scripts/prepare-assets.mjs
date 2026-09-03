// Script utilitário: converte HEIC, redimensiona e otimiza as fotos das obras
// para public/images/obras/<slug>/, e trata logos/cartão de visita.
// Roda uma vez (ou quando novas fotos chegarem) — não faz parte do app em runtime.
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import convert from "heic-convert";

const RAW_ROOT = path.resolve(process.cwd(), "..");
const OUT_ROOT = path.resolve(process.cwd(), "public", "images");

const OBRAS = [
  { dir: "FOTOS PORTFOLIO OBRA BENICIO GONÇALVES", slug: "benicio-goncalves", limit: 14 },
  { dir: "FOTOS PORTFOLIO OBRA CIE", slug: "cie", limit: 14 },
  { dir: "FOTOS PORTFOLIO OBRA PARQUE TECNOLÓGICO", slug: "parque-tecnologico", limit: 15 },
  { dir: "FOTOS PORTFOLIO OBRA VALE ENCANTADO", slug: "vale-encantado", limit: 14 },
  { dir: "FOTOS SML PORTFOLIO", slug: "sml", limit: 14 },
];

const SIZES = [
  { suffix: "thumb", width: 480 },
  { suffix: "medium", width: 1200 },
  { suffix: "full", width: 2000 },
];

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function loadImageBuffer(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const raw = await fs.readFile(filePath);
  if (ext === ".heic") {
    const jpegBuffer = await convert({ buffer: raw, format: "JPEG", quality: 0.92 });
    return Buffer.from(jpegBuffer);
  }
  return raw;
}

async function processObra({ dir, slug, limit }) {
  const srcDir = path.join(RAW_ROOT, dir);
  const outDir = path.join(OUT_ROOT, "obras", slug);
  await ensureDir(outDir);

  let entries;
  try {
    entries = await fs.readdir(srcDir);
  } catch {
    console.warn(`[skip] pasta não encontrada: ${srcDir}`);
    return [];
  }

  const photoFiles = entries
    .filter((f) => /\.(jpe?g|heic)$/i.test(f))
    .sort();

  // Amostragem uniforme ao longo da lista (que já vem ordenada por timestamp
  // no nome do arquivo), para cobrir o início/meio/fim da obra sem usar todas.
  const step = Math.max(1, Math.floor(photoFiles.length / limit));
  const selected = [];
  for (let i = 0; i < photoFiles.length && selected.length < limit; i += step) {
    selected.push(photoFiles[i]);
  }

  const manifest = [];
  let index = 0;
  for (const file of selected) {
    index += 1;
    const srcPath = path.join(srcDir, file);
    try {
      const buf = await loadImageBuffer(srcPath);
      const baseName = `foto-${String(index).padStart(2, "0")}`;
      for (const size of SIZES) {
        const outPath = path.join(outDir, `${baseName}-${size.suffix}.webp`);
        await sharp(buf)
          .rotate()
          .resize({ width: size.width, withoutEnlargement: true })
          .webp({ quality: 82 })
          .toFile(outPath);
      }
      manifest.push(baseName);
      console.log(`[ok] ${slug}/${baseName} <- ${file}`);
    } catch (err) {
      console.error(`[erro] ${srcPath}: ${err.message}`);
    }
  }

  return manifest;
}

async function processBrand() {
  const outDir = path.join(OUT_ROOT, "marca");
  await ensureDir(outDir);
  const files = [
    { src: "Logomarca_Deck atual.jpg.jpeg", out: "logo-principal.webp", width: 800 },
    { src: "Logomarca Deck.jpg.jpeg", out: "logo-horizontal.webp", width: 800 },
    { src: "logo jpg.jpg.jpeg", out: "logo-alt.webp", width: 800 },
    { src: "cartao_visita.jpg.jpeg", out: "cartao-visita.webp", width: 1000 },
  ];
  for (const f of files) {
    const srcPath = path.join(RAW_ROOT, f.src);
    try {
      const buf = await fs.readFile(srcPath);
      await sharp(buf)
        .rotate()
        .resize({ width: f.width, withoutEnlargement: true })
        .webp({ quality: 90 })
        .toFile(path.join(outDir, f.out));
      console.log(`[ok] marca/${f.out}`);
    } catch (err) {
      console.error(`[erro] ${srcPath}: ${err.message}`);
    }
  }
}

async function main() {
  await processBrand();
  const manifest = {};
  for (const obra of OBRAS) {
    manifest[obra.slug] = await processObra(obra);
  }
  await fs.writeFile(
    path.join(OUT_ROOT, "obras", "manifest.json"),
    JSON.stringify(manifest, null, 2),
  );
  console.log("\nManifesto gerado em public/images/obras/manifest.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
