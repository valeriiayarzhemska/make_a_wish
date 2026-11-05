import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// GitHub Pages serves the site from /<repo-name>/, so the build needs that base path.
// Locally VITE_BASE is unset and the app is served from "/".
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
  resolve: {
    // Mirrors "paths" in tsconfig.app.json: '@/components/X' → src/components/X
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
});
