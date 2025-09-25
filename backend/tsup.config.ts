import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/server.ts'],
  format: ['esm'],
  target: 'es2023',
  clean: true,
  outDir: 'dist',
  sourcemap: true,
})
