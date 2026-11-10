import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'
import { config } from './src/config.ts'

// Injects the production URL into canonical / hreflang / Open Graph tags
const siteUrl = (): Plugin => ({
  name: 'site-url',
  transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', config.siteUrl),
})

export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrl()],
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        en: resolve(import.meta.dirname, 'index.html'),
        pl: resolve(import.meta.dirname, 'pl/index.html'),
      },
    },
  },
})
