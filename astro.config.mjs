// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://teincomin.netlify.app', // <--- ¡Añade esto!
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});