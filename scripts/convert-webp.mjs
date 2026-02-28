/**
 * Converts all JPEG assets used in the app to WebP using sharp.
 * Run once from project root: node scripts/convert-webp.mjs
 * Then: git add src/assets/*.webp && git commit -m "assets: batch WebP conversion"
 */
import sharp from 'sharp';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = resolve(__dirname, '../src/assets');

const targets = [
  // --- Flota (done) ---
  // { input: 'yacht-motor-1.jpg',  output: 'yacht-motor-1.webp'  },
  // { input: 'yacht-sail-1.jpg',   output: 'yacht-sail-1.webp'   },

  // --- Experiencias (done) ---
  // { input: 'experience-sunset.jpg',   output: 'experience-sunset.webp'   },
  // { input: 'experience-party.jpg',    output: 'experience-party.webp'    },
  // { input: 'route-javea-coves.jpg',   output: 'route-javea-coves.webp'   },
  // { input: 'route-sunset-montgo.jpg', output: 'route-sunset-montgo.webp' },

  // --- Rutas ---
  { input: 'route-las-rotas.jpg', output: 'route-las-rotas.webp' },
];

const active = targets.filter(({ input }) =>
  existsSync(resolve(assetsDir, input))
);

if (active.length === 0) {
  console.log('Nothing to convert — all targets already processed.');
  process.exit(0);
}

let totalKb = 0;
for (const { input, output } of active) {
  const info = await sharp(resolve(assetsDir, input))
    .webp({ quality: 82, effort: 6 })
    .toFile(resolve(assetsDir, output));
  const kb = (info.size / 1024).toFixed(0);
  totalKb += info.size / 1024;
  console.log(`\u2705  ${output.padEnd(35)} \u2192  ${kb} KB`);
}

console.log(`\nTotal: ${totalKb.toFixed(0)} KB`);
console.log('Next: git add src/assets/route-las-rotas.webp && git commit -m "assets: convert route-las-rotas to WebP"');
