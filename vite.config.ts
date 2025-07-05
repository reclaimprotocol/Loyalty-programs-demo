import react from '@vitejs/plugin-react';
import tailwind from 'tailwindcss';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    proxy: {
      '/api/slack': {
        target: 'https://bot.questbook.xyz',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/slack/, '/send-message'),
        secure: false, // if you're having SSL issues
      },
    },
  },
});
