import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// Vite config for the jrhodes.com React app.
// - Source lives in client/
// - Build output goes to site/dist/ so the Express server can serve it
//   alongside the untouched site/live-demos/, site/img/, site/webfonts/, etc.
// - In dev, Vite proxies static paths owned by Express (live-demos, img,
//   webfonts, uploads, favicon) so the app behaves the same as production.
export default defineConfig({
  root: __dirname,
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        // The project SCSS still uses @import; silence the Dart Sass
        // deprecation notices until we migrate to @use.
        silenceDeprecations: ['import'],
      },
    },
  },
  build: {
    outDir: path.resolve(__dirname, '../site/dist'),
    emptyOutDir: true,
    sourcemap: true,
  },
  server: {
    port: 5173,
    proxy: {
      '/live-demos': 'http://localhost:8888',
      '/img': 'http://localhost:8888',
      '/webfonts': 'http://localhost:8888',
      '/uploads': 'http://localhost:8888',
      '/favicon.png': 'http://localhost:8888',
    },
  },
});
