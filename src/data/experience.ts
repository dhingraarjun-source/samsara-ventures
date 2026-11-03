/**
 * Anonymized experience examples for the Experience page.
 *
 * context:
 *   'samsara' = work contracted through Samsara Ventures
 *   'prior'   = work the founder led at a previous firm (labelled as such on the page)
 *
 * confirm: a note shown only in draft preview mode (PUBLIC_SHOW_DRAFTS=true)
 * listing what needs your confirmation before the example is relied on publicly.
 * Remove the note once confirmed. No figures or results are published.
 */

export type ExperienceItem = {
  context: 'samsara' | 'prior';
  industry: string;
  title: string;
  challenge: string;
  support: string;
  capabilities: string[];
  confirm?: string;
};

export type ExperienceGroup = { id: string; title: string; intro: string; items: ExperienceItem[] };

export const experienceGroups: ExperienceGroup[] = [
  {
    id: 'value-creation',
    title: 'Value creation and transformation',
    intro: 'Turning an investment thesis into a set of prioritized initiatives and helping to deliver them.',
    items: [
      {
        context: 'samsara',
        industry: 'Workforce solutions',
        title: 'Enterprise transformation and value creation planning for a large North American staffing organization',
        challenge:
          'A private equity-backed staffing business operating under market pressure needed a clear view of where to improve profitability across a large, complex cost base.',
        support:
          'Led value creation work spanning technology, vendors and the operating model. Built standalone and synergy cost models, assessed a broad portfolio of transformation initiatives, and prioritized them by EBITDA impact and execution complexity.',
        capabilities: ['Value creation planning', 'Cost structure analysis', 'Initiative prioritization', 'Operating model review'],
        confirm: 'Confirm the client description is cleared for publication under your engagement terms.',
      },
    ],
  },
  {
    id: 'growth',
    title: 'Growth and commercialization',
    intro: 'Helping companies bring new products to market and prepare their sales teams to sell them.',
    items: [
      {
        context: 'samsara',
        industry: 'Healthcare',
        title: 'Commercialization and go-to-market enablement for digital healthcare and AI-enabled solutions',
        challenge:
          'A large healthcare organization was preparing to launch a set of AI-enabled products and needed a go-to-market approach across payer and provider segments.',
        support:
          'Led go-to-market strategy and commercialization, defining positioning, target buyers and launch strategy, and developed sales enablement and market activation plans with product and sales teams.',
        capabilities: ['Go-to-market strategy', 'Product commercialization', 'Sales enablement', 'Launch planning'],
        confirm: 'Confirm the client description is cleared for publication.',
      },
    ],
  },
  {
    id: 'diligence',
    title: 'Due diligence',
    intro: 'Independent views of a target’s operations and technology before a deal is signed.',
    items: [
      {
        context: 'prior',
        industry: 'Healthcare technology',
        title: 'Operational and IT due diligence on a healthcare technology company for a private equity buyer',
        challenge:
          'A private equity firm evaluating the acquisition of a healthcare technology business needed an independent view of how the company operated and whether its technology could support the investment plan.',
        support:
          'Assessed the target’s operations and technology, including its platform, infrastructure, key dependencies and IT organization, and identified the risks and investment needs to reflect in the deal and the first 100 days.',
        capabilities: ['Operational due diligence', 'IT due diligence', 'Risk assessment', '100-day priorities'],
        confirm: 'Prior-firm example (PwC). Confirm the scope description matches the engagement.',
      },
    ],
  },
  {
    id: 'integration',
    title: 'Integration',
    intro: 'Planning and managing the combination of two organizations.',
    items: [
      {
        context: 'prior',
        industry: 'Testing, inspection and certification',
        title: 'Operational integration planning and synergy analysis in industrial testing and certification',
        challenge:
          'The combination of two significant companies in the testing and certification sector required a coordinated integration across functions while protecting service quality.',
        support:
          'Led an integration management office, tracked synergies against the deal case, advised executive leadership on integration priorities, and drove organizational readiness and change management.',
        capabilities: ['Integration management office', 'Synergy tracking', 'Organizational readiness', 'Change management'],
        confirm: 'Prior-firm example. Confirm you are comfortable describing it at this level of detail.',
      },
      {
        context: 'prior',
        industry: 'Life sciences',
        title: 'Technology integration planning for an acquired drug development business',
        challenge:
          'A global life sciences company acquiring a drug development business needed an integration plan for applications, infrastructure and business systems.',
        support:
          'Led IT integration planning and developed the Day 1 to Day 100 integration roadmap, and directed strategic integration initiatives for the acquirer.',
        capabilities: ['IT integration planning', 'Day 1 readiness', '100-day roadmap'],
        confirm: 'Prior-firm example. Confirm you are comfortable describing it at this level of detail.',
      },
    ],
  },
  {
    id: 'separation',
    title: 'Separations and carve-outs',
    intro: 'Separating a business from its parent while keeping operations running.',
    items: [
      {
        context: 'prior',
        industry: 'Pharmaceuticals',
        title: 'Carve-out of a pharmaceutical gene therapy division for sale',
        challenge:
          'A pharmaceutical company divesting a specialized division needed to separate clinical, technology and people operations without disrupting ongoing work.',
        support:
          'Led end-to-end carve-out execution, including transition service agreements, Day 1 readiness and standalone entity setup, supported by detailed separation workplans and readiness assessments.',
        capabilities: ['Carve-out execution', 'Transition service agreements', 'Day 1 readiness', 'Standalone setup'],
        confirm: 'Prior-firm example. Confirm you are comfortable describing it at this level of detail.',
      },
      {
        context: 'prior',
        industry: 'Industrials and aerospace',
        title: 'Separation of a global industrial company into independent public companies',
        challenge:
          'A large industrial company was completing two simultaneous spin-offs alongside a major aerospace merger, requiring coordination across finance, legal, operations and technology.',
        support:
          'Led cross-functional separation execution and established post-separation governance and KPIs to track standalone performance.',
        capabilities: ['Separation management', 'Cross-functional governance', 'Standalone KPIs'],
        confirm: 'Prior-firm example. Confirm you are comfortable describing it at this level of detail.',
      },
    ],
  },
];

export const industries = [
  'Healthcare and life sciences',
  'Financial services',
  'Industrials and manufacturing',
  'Aerospace and defense',
  'Business services',
  'Technology',
];
