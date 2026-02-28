/**
 * Converts yacht JPEG assets to WebP using sharp (already installed).
 * Run once from project root: node scripts/convert-webp.mjs
 * Then commit the generated .webp files and delete the original .jpg files.
 */
import sharp from 'sharp';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = resolve(__dirname, '../src/assets');

const targets = [
  { input: 'yacht-motor-1.jpg', output: 'yacht-motor-1.webp' },
  { input: 'yacht-sail-1.jpg',  output: 'yacht-sail-1.webp'  },
];

for (const { input, output } of targets) {
  const inputPath  = resolve(assetsDir, input);
  const outputPath = resolve(assetsDir, output);

  const info = await sharp(inputPath)
    .webp({ quality: 82, effort: 6 })
    .toFile(outputPath);

  const kb = (info.size / 1024).toFixed(0);
  console.log(`\u2705  ${output}  →  ${kb} KB`);
}

console.log('\nDone. Commit the .webp files, then delete the original .jpg files.');
