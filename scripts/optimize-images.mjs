import fg from "fast-glob";
import sharp from "sharp";
import { dirname, resolve, basename } from "path";
import { fileURLToPath } from "url";
import { mkdirSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(__dirname, "../public/images");
const OUT = resolve(__dirname, "../public/images/optimized");
mkdirSync(OUT, { recursive: true });

const files = await fg(["**/*.{jpg,jpeg,png,webp}"], { cwd: SRC });
const widths = [800, 1200, 1600];

for (const f of files) {
  const base = basename(f).replace(/\.(jpg|jpeg|png|webp)$/i, "");
  const input = resolve(SRC, f);
  for (const w of widths) {
    const out = resolve(OUT, `${base}-${w}.webp`);
    await sharp(input).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
    console.log("→", out);
  }
}
console.log("DONE: generated -800/-1200/-1600.webp variants.");
