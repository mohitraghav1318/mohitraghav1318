// Writes resized WebP copies of the images listed in src/data/site.js. Originals are left untouched.
//  - `images` (photos)       -> public/images/optimized/<name>-<width>.webp
//  - project screenshots     -> public/images/optimized/projects/<file>-<width>.webp
//    (project.img and project.screenshots[].src; animated GIFs stay animated)
//    plus a manifest at src/data/shots.json that <Shot> reads for srcset and dimensions.
// Run: npm run images
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { images, projects } from '../src/data/site.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rel = (p) => path.relative(root, p);
const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

// ── photos ──
const photoDir = path.join(root, 'public/images/optimized');
await mkdir(photoDir, { recursive: true });
for (const img of Object.values(images)) {
  for (const width of img.widths) {
    const out = path.join(photoDir, `${img.name}-${width}.webp`);
    const info = await sharp(path.join(root, img.src)).resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
    console.log(`${rel(out)}  ${info.width}x${info.height}  ${kb(info.size)}`);
  }
}

// ── project screenshots ──
const shotDir = path.join(photoDir, 'projects');
await mkdir(shotDir, { recursive: true });
const sources = new Set();
for (const p of projects) {
  if (p.img) sources.add(p.img);
  (p.screenshots || []).forEach((s) => sources.add(s.src));
}

const manifest = {};
for (const src of [...sources].sort()) {
  const file = path.join(root, 'public', src);
  const base = path.basename(src, path.extname(src)).toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const animated = /\.gif$/i.test(src);
  const meta = await sharp(file, { animated }).metadata();
  const width = meta.width;
  const height = animated ? meta.pageHeight : meta.height;
  const sizes = [400, 800, 1400].filter((w) => w < width);
  sizes.push(width <= 1400 ? width : 1400);
  const unique = [...new Set(sizes)].sort((a, b) => a - b);

  for (const w of unique) {
    const out = path.join(shotDir, `${base}-${w}.webp`);
    const info = await sharp(file, { animated }).resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);
    console.log(`${rel(out)}  ${info.width}x${animated ? info.pageHeight : info.height}  ${kb(info.size)}`);
  }
  manifest[src] = { name: base, width, height, sizes: unique };
}
await writeFile(path.join(root, 'src/data/shots.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`\nsrc/data/shots.json: ${Object.keys(manifest).length} screenshots`);
