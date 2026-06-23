import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    tailwindcss(),
    ...(isSsrBuild
      ? []
      : [
          ViteImageOptimizer({
            png: { quality: 80, palette: true, compressionLevel: 9, effort: 10 },
            jpeg: { quality: 78 },
            jpg: { quality: 78 },
            webp: { quality: 78 },
            svg: { multipass: true },
          }),
        ]),
  ],
  ssr: { noExternal: true },
}))
