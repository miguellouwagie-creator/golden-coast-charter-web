import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import compression from "vite-plugin-compression";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    react(),

    // Build-time image compression via sharp.
    // Runs ONLY during `vite build`, never during `vite dev`.
    // Zero changes to component code or import paths.
    ViteImageOptimizer({
      // Target all raster + SVG assets bundled by Rollup
      test: /\.(jpe?g|png|gif|webp|avif|svg)$/i,
      // Also process images in /public (FondoFlota.jpg, etc.)
      includePublicDir: true,
      logStats: true,

      // JPEG compression (yacht card images: yacht-motor-1.jpg, yacht-sail-1.jpg)
      // 80 quality = visually lossless at ~40-50% smaller file size
      jpg:  { quality: 80 },
      jpeg: { quality: 80 },

      // PNG compression (icon assets: Timón.png, Medalla.png, Escudo.png)
      png: {
        quality: 82,
        compressionLevel: 9,
      },

      // WebP optimisation (homepage assets already in .webp)
      // force: false → do NOT convert other formats to WebP (would change URLs)
      webp: {
        lossless: false,
        quality: 82,
        alphaQuality: 90,
        force: false,
      },

      // AVIF optimisation if any .avif assets are added in future
      avif: {
        lossless: false,
        quality: 50,
        effort: 7,
        force: false,
      },

      // SVG: remove redundant metadata and attributes
      svg: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                // Keep viewBox — removing it breaks responsive SVG scaling
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),

    compression({
      algorithm: "gzip",
      ext: ".gz",
    }),
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    headers: {
      "X-Frame-Options": "SAMEORIGIN",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    },
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["lucide-react"],
        },
      },
    },
  },
});
