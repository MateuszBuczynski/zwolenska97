import fg from "fast-glob";
import sharp from "sharp";
import { dirname, resolve, parse } from "path";
import { fileURLToPath } from "url";
import { mkdirSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Wejście / wyjście
const SRC = resolve(__dirname, "../public/images/originals");         // <-- tu masz JPG
const OUT_LARGE = resolve(__dirname, "../public/images/gallery/large");
const OUT_THUMB = resolve(__dirname, "../public/images/gallery/thumb");

// Upewnij się, że katalogi istnieją
mkdirSync(OUT_LARGE, { recursive: true });
mkdirSync(OUT_THUMB, { recursive: true });

// Rozmiary dla <img srcset> i miniatur
const LARGE_WIDTHS = [800, 1200, 1600];
const THUMB_WIDTH = 380;

// Zbierz pliki
const files = await fg(["**/*.{jpg,jpeg,png,webp}"], { cwd: SRC, dot: false });

if (!files.length) {
  console.log("Brak plików w", SRC);
  process.exit(0);
}

for (const rel of files) {
  const abs = resolve(SRC, rel);
  const { name } = parse(rel); // nazwa bez rozszerzenia

  // Large (800/1200/1600)
  for (const w of LARGE_WIDTHS) {
    const out = resolve(OUT_LARGE, `${name}-${w}.webp`);
    await sharp(abs)
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(out);
    console.log("→", out);
  }

  // Miniatura 380
  const thumbOut = resolve(OUT_THUMB, `${name}-${THUMB_WIDTH}.webp`);
  await sharp(abs)
    .rotate()
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(thumbOut);
  console.log("→", thumbOut);
}

console.log("DONE: gallery/large (-800/-1200/-1600) + gallery/thumb (-380)");
