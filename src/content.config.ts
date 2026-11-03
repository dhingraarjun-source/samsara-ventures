import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const insightCategories = [
  'M&A and Transactions',
  'Private Equity Value Creation',
  'Technology Transformation',
  'Growth and Commercial Strategy',
] as const;

/**
 * Insights articles live in src/content/insights as Markdown files.
 * The file name becomes the URL: five-red-flags.md -> /insights/five-red-flags/
 */
const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    category: z.enum(insightCategories),
    author: z.string().default('Arjun Dhingra'),
    /** Drafts are hidden from the live site, the sitemap and search engines. */
    draft: z.boolean().default(true),
    /** Required before an article goes live. Leave empty while it is a draft. */
    publishDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { insights };
