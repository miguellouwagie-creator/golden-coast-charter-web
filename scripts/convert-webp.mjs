/**
 * Converts all JPEG/PNG assets used in the app to WebP using sharp.
 * Run once from project root: node scripts/convert-webp.mjs
 * Then commit the generated .webp files and delete the original source files
 * for those you no longer need (keep .jpg/.png for HeroSection fondo images
 * until those pages are updated too).
 */
import sharp from 'sharp';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = resolve(__dirname, '../src/assets');

const targets = [
  // Yacht catalog images (Flota.tsx) — already done, kept for reference
  // { input: 'yacht-motor-1.jpg', output: 'yacht-motor-1.webp' },
  // { input: 'yacht-sail-1.jpg',  output: 'yacht-sail-1.webp'  },

  // Experience card images (Experiencias.tsx)
  { input: 'experience-sunset.jpg',    output: 'experience-sunset.webp'    },
  { input: 'experience-party.jpg',     output: 'experience-party.webp'     },
  { input: 'route-javea-coves.jpg',    output: 'route-javea-coves.webp'    },
  { input: 'route-sunset-montgo.jpg',  output: 'route-sunset-montgo.webp'  },
];

let totalSaved = 0;

for (const { input, output } of targets) {
  const inputPath  = resolve(assetsDir, input);
  const outputPath = resolve(assetsDir, output);

  const info = await sharp(inputPath)
    .webp({ quality: 82, effort: 6 })
    .toFile(outputPath);

  const kb = (info.size / 1024).toFixed(0);
  console.log(`\u2705  ${output.padEnd(35)} \u2192  ${kb} KB`);
  totalSaved += info.size;
}

console.log(`\nDone. Total WebP output: ${(totalSaved / 1024).toFixed(0)} KB`);
console.log('Next: git add src/assets/*.webp && git commit -m "assets: convert experience images to WebP"');
