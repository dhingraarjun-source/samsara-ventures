// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Production domain. Used for canonical URLs, Open Graph tags and the sitemap.
const SITE = 'https://www.thesamsaraventures.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // Keep utility pages out of the sitemap.
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
