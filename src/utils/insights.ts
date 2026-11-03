import { getCollection, type CollectionEntry } from 'astro:content';
import { site } from '@/config/site';

export type Insight = CollectionEntry<'insights'>;

/** An article is live when it is not a draft and has a publish date. */
export const isLive = (a: Insight) => !a.data.draft && !!a.data.publishDate;

/**
 * Articles to build. In production only live articles are built.
 * With PUBLIC_SHOW_DRAFTS=true, drafts are built too (marked noindex).
 */
export async function getVisibleInsights(): Promise<Insight[]> {
  const all = await getCollection('insights');
  const visible = all.filter((a) => isLive(a) || site.showDrafts);
  // Suggested reading order first, then newest first.
  return visible.sort(
    (a, b) =>
      (a.data.readingOrder ?? Infinity) - (b.data.readingOrder ?? Infinity) ||
      (b.data.publishDate?.getTime() ?? 0) - (a.data.publishDate?.getTime() ?? 0),
  );
}

/** Only live articles, used for cross-links on service pages. */
export async function getPublishedInsights(): Promise<Insight[]> {
  return (await getVisibleInsights()).filter((a) => isLive(a) || site.showDrafts);
}

export function readingTime(markdown: string | undefined): string {
  const words = (markdown ?? '').trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 230))} min read`;
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
