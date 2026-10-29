// Writes resized WebP copies of the photos listed in src/data/site.js (`images`)
// to public/images/optimized/<name>-<width>.webp. Originals are left untouched.
// Run: npm run images
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { images } from '../src/data/site.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/optimized');
await mkdir(outDir, { recursive: true });

for (const img of Object.values(images)) {
  const input = path.join(root, img.src);
  for (const width of img.widths) {
    const out = path.join(outDir, `${img.name}-${width}.webp`);
    const info = await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(out);
    console.log(`${path.relative(root, out)}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
  }
}
