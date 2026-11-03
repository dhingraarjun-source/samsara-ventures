/**
 * Central site settings. Edit this file to change contact details,
 * the booking link, the contact form endpoint or the navigation.
 *
 * Values that start with import.meta.env can also be set as environment
 * variables (see .env.example). Nothing here is secret: a Formspree form
 * endpoint and a Calendly link are both public by design.
 */

const env = import.meta.env;

export const site = {
  name: 'Samsara Ventures',
  legalName: 'Samsara Ventures',
  url: 'https://www.thesamsaraventures.com',
  tagline: 'Senior M&A Advisory. From Strategy to Execution.',
  description:
    'Samsara Ventures is a boutique, senior-led advisory firm supporting private equity firms and corporate leaders with M&A transactions, value creation, business transformation and growth strategy.',
  email: 'info@thesamsaraventures.com',
  location: 'New York, NY',
  serviceArea: 'North America',

  /** Calendly (or similar) scheduling link. */
  bookingUrl: env.PUBLIC_BOOKING_URL || 'https://calendly.com/samsaraventures/30min',

  /** Formspree endpoint for the contact form. Set PUBLIC_FORM_ENDPOINT=none to hide the form and show the email address instead. */
  formEndpoint:
    env.PUBLIC_FORM_ENDPOINT === 'none' ? '' : env.PUBLIC_FORM_ENDPOINT || 'https://formspree.io/f/mbggzona',

  /** Founder details used on the About page. */
  founder: {
    name: 'Arjun Dhingra',
    title: 'Founder & Managing Partner',
    /** Full LinkedIn profile URL. */
    linkedinUrl: env.PUBLIC_FOUNDER_LINKEDIN || 'https://www.linkedin.com/in/arjundhingra/',
    /** Portrait photo in /public (640 x 800). */
    photo: '/img/founder.jpg',
  },

  /** Default social sharing image (1200 x 630) in /public. */
  ogImage: '/img/og-image.jpg',

  /**
   * When true, draft articles and placeholder markers are shown.
   * Keep this off in production. Set PUBLIC_SHOW_DRAFTS=true locally to review drafts.
   */
  showDrafts: env.PUBLIC_SHOW_DRAFTS === 'true',
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: 'Services', href: '/services/' },
  { label: 'Experience', href: '/experience/' },
  { label: 'About', href: '/about/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'Contact', href: '/contact/' },
];
