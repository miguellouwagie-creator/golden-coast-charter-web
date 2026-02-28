/**
 * Converts all JPEG/PNG assets used in the app to WebP using sharp.
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
  // --- Flota (original 2 boats — done) ---
  // { input: 'yacht-motor-1.jpg',  output: 'yacht-motor-1.webp'  },
  // { input: 'yacht-sail-1.jpg',   output: 'yacht-sail-1.webp'   },

  // --- Experiencias (done) ---
  // { input: 'experience-sunset.jpg',   output: 'experience-sunset.webp'   },
  // { input: 'experience-party.jpg',    output: 'experience-party.webp'    },

  // --- Rutas (done) ---
  // { input: 'route-javea-coves.jpg',   output: 'route-javea-coves.webp'   },
  // { input: 'route-sunset-montgo.jpg', output: 'route-sunset-montgo.webp' },
  // { input: 'route-las-rotas.jpg',     output: 'route-las-rotas.webp'     },

  // --- Flota (6 new AI-generated boat images — PNG source) ---
  { input: 'Primera_Flota.png',  output: 'flota-1.webp' },
  { input: 'Segunda_Flota.png',  output: 'flota-2.webp' },
  { input: 'Tercero_Flota.png',  output: 'flota-3.webp' },
  { input: 'Cuarto_Flota.png',   output: 'flota-4.webp' },
  { input: 'Quinta_Flota.png',   output: 'flota-5.webp' },
  { input: 'Sexto_Flota.png',    output: 'flota-6.webp' },
];

const active = targets.filter(({ input }) =>
  existsSync(resolve(assetsDir, input))
);

if (active.length === 0) {
  console.log('Nothing to convert — all targets already processed.');
  process.exit(0);
}

let totalInput = 0;
let totalOutput = 0;

for (const { input, output } of active) {
  const inputPath  = resolve(assetsDir, input);
  const outputPath = resolve(assetsDir, output);

  // PNG sources: quality 85 to preserve AI-render detail
  const isPng = input.endsWith('.png');
  const info = await sharp(inputPath)
    .webp({ quality: isPng ? 85 : 82, effort: 6 })
    .toFile(outputPath);

  const inputSize = (await import('fs')).statSync(inputPath).size;
  const saving = (100 - (info.size / inputSize) * 100).toFixed(0);

  totalInput  += inputSize;
  totalOutput += info.size;

  console.log(
    `\u2705  ${output.padEnd(18)}  ${(inputSize / 1024 / 1024).toFixed(1)} MB  \u2192  ${(info.size / 1024).toFixed(0)} KB  (-${saving}%)`
  );
}

console.log(`\nTotal: ${(totalInput/1024/1024).toFixed(1)} MB  \u2192  ${(totalOutput/1024).toFixed(0)} KB`);
console.log('\nNext:');
console.log('  git add src/assets/flota-*.webp');
console.log('  git commit -m "assets: convert 6 Flota images to WebP"');
console.log('  git push origin main');
