# Samsara Ventures website

The source code for [www.thesamsaraventures.com](https://www.thesamsaraventures.com/).

Built with [Astro](https://astro.build), TypeScript and Tailwind CSS. Every page is pre-rendered to plain HTML at build time, so search engines can read all content without running JavaScript. The site ships very little JavaScript: only the mobile menu, the contact form, the Insights filter and the interactive deal lifecycle.

---

## Why Astro (and not Next.js or a plain React app)

- **SEO:** a client-rendered React app sends an empty page that search engines have to execute. Astro sends finished HTML for every page.
- **Hosting:** GitHub Pages only serves static files. Astro produces exactly that, with no server. Next.js can export static files too, but it ships a React runtime on every page and adds complexity this site does not need.
- **Speed:** with almost no JavaScript, pages load fast on any device.
- **Maintainability:** content lives in plain TypeScript and Markdown files, and components are reusable `.astro` files with TypeScript. React components can be added later if an interactive feature ever needs them.

---

## Project structure

```
src/
  config/site.ts          Contact email, booking link, form endpoint, founder details, navigation
  data/services.ts        All copy for the three service pillars and their pages
  data/experience.ts      Anonymized experience examples
  content/insights/       Insights articles (one Markdown file per article)
  content.config.ts       Article fields and categories
  pages/                  One file per page; the file path is the URL
  layouts/                Page shells (base layout, service page template)
  components/             Header, footer, hero, CTA band, contact form, lifecycle, wheel, SEO
  styles/global.css       Brand colors, fonts, type scale and shared styles (design tokens)
  utils/                  Structured data (schema.org) and Insights helpers
public/                   Images, robots.txt, llms.txt, CNAME (custom domain)
.github/workflows/        Automatic build and deploy to GitHub Pages
```

---

## Run it locally

You need [Node.js](https://nodejs.org) 22.23 or newer (24 is recommended).

```bash
npm install          # first time only
npm run dev          # opens a live preview at http://localhost:4321
```

To preview draft articles and placeholder markers locally:

```bash
PUBLIC_SHOW_DRAFTS=true npm run dev
```

## Build it

```bash
npm run build        # type-checks, then builds the site into dist/
npm run preview      # serves the built site locally
```

---

## Deploy from GitHub

Deployment is automatic. Every push to the `main` branch builds the site and publishes it.

### One-time setup

1. Put this project in your repository (`dhingraarjun-source/samsara-ventures`), replacing the old single-page files (`index.html`, `img/`, `404.html`, `robots.txt`, `sitemap.xml`, `llms.txt`). The easiest way is [GitHub Desktop](https://desktop.github.com): clone the repository, delete the old files, copy this project's files in, then commit and push.
   - Make sure the hidden `.github` folder is included. It contains the deploy workflow.
   - Do not upload `node_modules` or `dist`. They are ignored automatically.
2. In the repository, go to **Settings > Pages > Build and deployment** and change **Source** from "Deploy from a branch" to **GitHub Actions**.
3. Check that **Custom domain** still shows `www.thesamsaraventures.com` and **Enforce HTTPS** is ticked. The `public/CNAME` file keeps the domain set on every deploy.
4. Open the **Actions** tab to watch the first deploy. A green tick means the site is live.

Your Squarespace DNS records do not need to change.

---

## Update page content

| What to change | Where |
| --- | --- |
| Email, booking link, form endpoint, founder name and title | `src/config/site.ts` |
| Navigation menu | `mainNav` in `src/config/site.ts` |
| Service pillar copy (homepage, Services page, each service page) | `src/data/services.ts` |
| Experience examples | `src/data/experience.ts` |
| Homepage sections | `src/pages/index.astro` |
| About page and founder biography | `src/pages/about.astro` |
| Contact page | `src/pages/contact.astro` |
| Colors and fonts | `@theme` block in `src/styles/global.css` |

Edit the text between the quotes, save, and push. The site rebuilds automatically.

### Add the founder photo and LinkedIn link

1. Save a portrait photo (about 640 x 800 pixels) as `public/img/founder.jpg`.
2. In `src/config/site.ts`, set `photo: '/img/founder.jpg'`.
3. Set `linkedinUrl` to the full profile URL, or add a GitHub Actions variable named `PUBLIC_FOUNDER_LINKEDIN`.

The photo (`public/img/founder.jpg`) and LinkedIn URL are already set. If `photo` is ever left empty, the About page shows an "AD" monogram instead.

---

## Add an Insights article

1. Create a new file in `src/content/insights/`. The file name becomes the URL, so use lowercase words and hyphens, e.g. `carve-out-tsa-pitfalls.md` becomes `/insights/carve-out-tsa-pitfalls/`.
2. Start the file with this header:

   ```md
   ---
   title: "Your article title"
   description: "One or two sentences, under 170 characters. Used in search results."
   category: "M&A and Transactions"
   author: "Arjun Dhingra"
   draft: true
   ---
   ```

   `category` must be one of: `M&A and Transactions`, `Private Equity Value Creation`, `Technology Transformation`, `Growth and Commercial Strategy`.
3. Write the article below the header in Markdown. Use `##` for section headings.
4. Preview it locally with `PUBLIC_SHOW_DRAFTS=true npm run dev`.
5. **To publish:** change `draft: true` to `draft: false` and add `publishDate: 2026-11-15` (the real publication date). Both are required. Push, and the article appears on the site, in the sitemap and in search results.

Drafts never appear on the live site, in the sitemap or in search engines.

The three starter articles link to each other. If you publish only one of them, remove or update its links to the unpublished ones.

To link an article to a service page, add its file name (without `.md`) to that service's `relatedInsights` list in `src/data/services.ts`.

---

## Configure the contact form

The form sends submissions to [Formspree](https://formspree.io), which emails them to info@thesamsaraventures.com. The endpoint is set in `src/config/site.ts` (`formEndpoint`).

- **Change the endpoint:** edit `formEndpoint`, or add a GitHub Actions variable `PUBLIC_FORM_ENDPOINT` under **Settings > Secrets and variables > Actions > Variables**.
- **Turn the form off:** set `PUBLIC_FORM_ENDPOINT` to `none`. The page then shows the email address instead.
- **Spam protection:** a hidden honeypot field (`_gotcha`) that Formspree uses to discard bot submissions. For stronger protection, enable reCAPTCHA or Formspree's spam filtering in your Formspree dashboard.
- **Fields sent:** name, company, email, area of interest, message.

A Formspree endpoint is not a secret; it is visible in the page source by design.

## Update the booking link

Edit `bookingUrl` in `src/config/site.ts`, or set the GitHub Actions variable `PUBLIC_BOOKING_URL`. Every "Schedule a Conversation" button uses it.

---

## Manage SEO metadata

- **Title and description:** each page passes `title` and `description` to `BaseLayout` at the top of its file. Service pages read theirs from the `meta` field in `src/data/services.ts`. Keep titles under about 45 characters (" | Samsara Ventures" is added automatically) and descriptions under about 155.
- **Canonical URLs, Open Graph and Twitter tags:** generated automatically in `src/components/SEO.astro`.
- **Structured data:** Organization and ProfessionalService on every page; BreadcrumbList on inner pages; Service on service pages; Article on articles; Person on the About page. See `src/utils/schema.ts`.
- **Sitemap:** generated at `/sitemap-index.xml` on every build. Submit it in Google Search Console and Bing Webmaster Tools.
- **robots.txt and llms.txt:** in `public/`.
- **Social sharing image:** `public/img/og-image.jpg` (1200 x 630).

---

## Items that need your confirmation

These are marked in yellow when you preview with `PUBLIC_SHOW_DRAFTS=true`:

- **Experience examples** in `src/data/experience.ts`: confirm each client description is cleared for publication. Remove the `confirm` note once it is.
- **Three Insights articles:** review, edit and approve before publishing.
- **Founder title:** set to "Founder & Managing Partner" as requested. Your resume says "Founder & Principal Consultant"; change `founder.title` in `site.ts` if you prefer that.
