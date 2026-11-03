import { site } from '@/config/site';

const abs = (path: string) => new URL(path, site.url).href;

/** Organization + ProfessionalService, included on every page. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': abs('/#organization'),
    name: site.name,
    url: abs('/'),
    logo: abs('/img/mark-red.png'),
    image: abs(site.ogImage),
    email: site.email,
    description: site.description,
    address: { '@type': 'PostalAddress', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Canada' },
    ],
    knowsAbout: [
      'Mergers and acquisitions',
      'IT due diligence',
      'Operational due diligence',
      'Post-merger integration',
      'Carve-outs and separations',
      'Private equity value creation',
      'Business transformation',
      'Go-to-market strategy',
    ],
  };
}

export type Crumb = { name: string; href: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.href),
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: abs(path),
    provider: { '@id': abs('/#organization') },
    areaServed: site.serviceArea,
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished?: Date;
  dateModified?: Date;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: abs(opts.path),
    mainEntityOfPage: abs(opts.path),
    image: abs(site.ogImage),
    author: { '@type': 'Person', name: opts.author },
    publisher: { '@id': abs('/#organization') },
    ...(opts.datePublished ? { datePublished: opts.datePublished.toISOString() } : {}),
    ...(opts.dateModified ? { dateModified: opts.dateModified.toISOString() } : {}),
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.founder.name,
    jobTitle: site.founder.title,
    worksFor: { '@id': abs('/#organization') },
    ...(site.founder.linkedinUrl ? { sameAs: [site.founder.linkedinUrl] } : {}),
  };
}
