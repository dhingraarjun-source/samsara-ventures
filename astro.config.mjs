// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync } from 'node:fs';

// Production domain. Used for canonical URLs, Open Graph tags and the sitemap.
const SITE = 'https://www.thesamsaraventures.com';

/**
 * URL paths of Insights articles that are not live (draft: true or no publishDate).
 * Mirrors isLive() in src/utils/insights.ts.
 */
/** @returns {string[]} */
function unpublishedInsightPaths() {
  const dir = new URL('./src/content/insights/', import.meta.url);
  return readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .filter((f) => {
      const fm = readFileSync(new URL(f, dir), 'utf8').split('---')[1] ?? '';
      const draft = !/^draft:\s*false\s*$/m.test(fm);
      const dated = /^publishDate:\s*\S+/m.test(fm);
      return draft || !dated;
    })
    .map((f) => `/insights/${f.replace(/\.md$/, '')}/`);
}

/**
 * Wrap Markdown tables in a scrollable, keyboard-focusable region so wide tables
 * do not break the layout on narrow screens. Runs in Astro's built-in Markdown processor.
 */
/** @type {import('satteri').HastPluginDefinition} */
const wrapTables = {
  name: 'wrap-tables',
  element: {
    filter: ['table'],
    visit(node, ctx) {
      ctx.wrapNode(node, { raw: '<div class="table-wrap" tabindex="0" role="region" aria-label="Table, scrolls sideways on small screens"></div>' });
    },
  },
};

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // Keep the 404 page and unpublished articles out of the sitemap, including in draft previews.
      filter: (page) => !page.includes('/404') && !unpublishedInsightPaths().some((p) => page.endsWith(p)),
    }),
  ],
  markdown: {
    processor: satteri({ hastPlugins: [wrapTables] }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
