import fg from "fast-glob";
import sharp from "sharp";
import { dirname, resolve, basename } from "path";
import { fileURLToPath } from "url";
import { mkdirSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(__dirname, "../public/images");
const OUT = resolve(__dirname, "../public/images/optimized");

mkdirSync(OUT, { recursive: true });

const files = await fg(["**/*.{jpg,jpeg,png}"], { cwd: SRC, dot: false });
for (const f of files) {
  const input = resolve(SRC, f);
  const out = resolve(OUT, basename(f).replace(/\.(jpg|jpeg|png)$/i, ".webp"));
  await sharp(input)
    .rotate() // EXIF
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(out);
  console.log("→", out);
}
console.log("DONE. Pliki w /public/images/optimized/");
