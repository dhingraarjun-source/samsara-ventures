/**
 * Client and colleague testimonials.
 *
 * Only entries with `approved: true` appear on the website. Set it to true once the
 * person has agreed to the exact wording and attribution shown.
 *
 * context:
 *   'samsara' = about work delivered by Samsara Ventures
 *   'prior'   = about work Arjun led at a previous firm (shown with a small label)
 *
 * Example:
 * {
 *   quote: 'Arjun ran our carve-out with a level of detail and calm that kept the business running through Day 1.',
 *   name: 'Jane Smith',                      // optional; leave out to attribute by role only
 *   role: 'Operating Partner',
 *   organization: 'Mid-market private equity firm',
 *   context: 'samsara',
 *   approved: true,
 * },
 */

export type Testimonial = {
  quote: string;
  name?: string;
  role: string;
  organization: string;
  context: 'samsara' | 'prior';
  approved: boolean;
};

export const testimonials: Testimonial[] = [];

export const approvedTestimonials = testimonials.filter((t) => t.approved);
