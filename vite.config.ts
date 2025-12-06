import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 8080,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        secure: false,
        cookieDomainRewrite: 'localhost',
        configure: (proxy, _options) => {
          proxy.on('proxyRes', function (proxyRes, req, res) {
            proxyRes.headers['Access-Control-Allow-Origin'] = 'http://localhost:8080';
            proxyRes.headers['Access-Control-Allow-Credentials'] = 'true';
          });
        },
      },
      '/locales': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './frontend'),
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
})
