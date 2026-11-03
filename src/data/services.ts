/**
 * Service pillar content. The homepage, the Services page, the footer and the
 * three service detail pages all read from this file, so edit copy here.
 */

export type Capability = { title: string; text: string };
/** A distinct way into the service: the decision the client faces and what we produce for it. */
export type Track = { title: string; decision: string; outputs: string[] };
export type Step = { title: string; text: string };

export type Service = {
  slug: string;
  href: string;
  name: string;
  /** One-sentence summary used on the homepage and Services page. */
  summary: string;
  /** Short buying trigger: when a client typically calls about this service. */
  trigger: string;
  /** One representative deliverable, used to compare services. */
  sampleOutput: string;
  /** Short capability list used on the homepage. */
  highlights: string[];
  meta: { title: string; description: string };
  hero: { title: string; lede: string };
  context: { title: string; paragraphs: string[]; challenges: string[] };
  /** Entry points into the service, each pairing a decision with outputs from `deliverables`. */
  tracks: Track[];
  capabilities: Capability[];
  deliverables: string[];
  approach: Step[];
  situations: string[];
  /** Insights article slugs to cross-link. */
  relatedInsights: string[];
};

export const services: Service[] = [
  {
    slug: 'transaction-advisory',
    href: '/services/transaction-advisory/',
    name: 'Transaction Advisory',
    summary:
      'Diligence, integration and separation support that protects deal value from the first look at a target through the first hundred days after close.',
    trigger: 'You are evaluating a target, preparing to close, or separating a business from its parent.',
    sampleOutput: 'IT and operational due diligence findings with estimated one-time and run-rate costs',
    highlights: [
      'Operational and IT due diligence',
      'M&A integration',
      'Carve-outs and separations',
      'Day 1 and Day 100 readiness',
      'Synergy identification and execution',
    ],
    meta: {
      title: 'IT Due Diligence, M&A Integration & Carve-outs',
      description:
        'Operational and IT due diligence, M&A integration, carve-out and separation advisory, and Day 1 readiness for private equity sponsors and corporate acquirers.',
    },
    hero: {
      title: 'Due diligence, integration and separation support for buyers and sellers.',
      lede:
        'We work with private equity firms and corporate development teams before and after a deal closes, from assessing a target’s operations and technology to running the integration or separation.',
    },
    context: {
      title: 'Why operations and technology deserve more attention in a deal',
      paragraphs: [
        'Most deals are underwritten mainly on financial and commercial diligence. How the business actually runs, what it depends on, and what it will cost to separate it or combine it with another company often get less attention, usually because time is short.',
        'These issues tend to come up later as one-time costs, delayed synergies, customer disruption or transition service agreements that run longer than planned. Our transaction work aims to identify them early, estimate their impact, and manage them through close and beyond.',
      ],
      challenges: [
        'Limited visibility into the technology estate, shared services and hidden dependencies of a target',
        'Standalone and one-time costs that are under-scoped in the investment case',
        'Integration programs that lose momentum once the deal team moves on',
        'Carve-outs where the business relies on parent systems, contracts and people it will not keep',
        'Synergy targets that are agreed at signing but never translated into owned, tracked initiatives',
      ],
    },
    tracks: [
      {
        title: 'Due diligence',
        decision: 'Whether to proceed, at what price, and with which protections or first-100-day actions.',
        outputs: [
          'IT and operational due diligence findings, with risks, red flags and estimated one-time and run-rate costs',
          'Standalone and separation cost estimates',
        ],
      },
      {
        title: 'Integration',
        decision: 'How to combine the two businesses, in what order, and who decides.',
        outputs: [
          'Integration blueprint and governance model',
          'Day 1 readiness plan, checklists and command center approach',
          '100-day plan with workstream owners and milestones',
          'Synergy baseline, initiative register and tracking dashboard',
        ],
      },
      {
        title: 'Carve-out or separation',
        decision: 'What the business needs to operate on its own, and how long it will rely on the seller.',
        outputs: [
          'Separation blueprint and Day 1 readiness plan',
          'TSA schedules and TSA exit roadmap',
          'Standalone and separation cost estimates',
        ],
      },
    ],
    capabilities: [
      {
        title: 'IT due diligence',
        text: 'Assessment of applications, infrastructure, cybersecurity posture, technical debt, key vendor contracts and IT organization, with a view on the investment required to support the business plan.',
      },
      {
        title: 'Operational due diligence',
        text: 'Review of how the business operates across functions, the scalability of its processes, and the dependencies and risks that could affect the investment thesis.',
      },
      {
        title: 'Integration management',
        text: 'Integration planning, governance and an integration management office that coordinates functional workstreams, decisions and interdependencies through close and beyond.',
      },
      {
        title: 'Carve-outs and separations',
        text: 'Separation strategy, entanglement analysis, standalone operating model design, and planning for people, systems, contracts and data.',
      },
      {
        title: 'Transition service agreements',
        text: 'Scoping, pricing logic and service schedules for TSAs, together with exit plans so that temporary arrangements stay temporary.',
      },
      {
        title: 'Synergy identification and execution',
        text: 'Building a synergy case from the bottom up, assigning owners, and tracking delivery against the deal case.',
      },
    ],
    deliverables: [
      'IT and operational due diligence findings, with risks, red flags and estimated one-time and run-rate costs',
      'Standalone and separation cost estimates',
      'Integration or separation blueprint and governance model',
      'Day 1 readiness plan, checklists and command center approach',
      'TSA schedules and TSA exit roadmap',
      '100-day plan with workstream owners and milestones',
      'Synergy baseline, initiative register and tracking dashboard',
    ],
    approach: [
      { title: 'Understand', text: 'Review the deal thesis, data room and management information to understand where value and risk sit.' },
      { title: 'Strategize', text: 'Shape the integration or separation approach, governance and priorities around what matters for the deal.' },
      { title: 'Execute', text: 'Stand up and run the program office, manage interdependencies and keep decisions moving through close.' },
      { title: 'Deliver value', text: 'Track synergies and TSA exits, and hand over a business that runs cleanly on its own terms.' },
    ],
    situations: [
      'A private equity sponsor needs an independent view of a target’s technology and operations before signing',
      'A corporate is divesting a division that shares systems, people and contracts with the parent',
      'An acquirer needs to integrate a business quickly without disrupting customers',
      'A platform company is completing add-on acquisitions and needs a repeatable integration playbook',
      'An integration has stalled after close and synergies are behind plan',
    ],
    relatedInsights: ['it-due-diligence-red-flags', 'why-post-merger-integrations-fail'],
  },
  {
    slug: 'value-creation',
    href: '/services/value-creation/',
    name: 'Value Creation & Transformation',
    summary:
      'Value creation planning and hands-on transformation leadership that turn an investment thesis or strategic plan into measurable operating results.',
    trigger: 'A value creation plan needs to be built, or an existing plan needs someone to drive delivery.',
    sampleOutput: 'Value creation plan with sized, sequenced initiatives and owners',
    highlights: [
      'Private equity value creation planning',
      'Operating model transformation',
      'Cost optimization',
      'Executive PMO leadership',
      'Technology and business transformation',
      'Performance improvement',
    ],
    meta: {
      title: 'Private Equity Value Creation & Transformation',
      description:
        'Value creation plans, execution PMOs, operating model transformation and cost optimization for private equity portfolio companies and corporate leaders.',
    },
    hero: {
      title: 'Helping sponsors and management teams deliver the value creation plan.',
      lede:
        'We help define where the value is expected to come from, then work inside the business alongside management to deliver it.',
    },
    context: {
      title: 'Why value creation plans stall',
      paragraphs: [
        'Value creation plans are often put together quickly, sometimes before the investor knows the business well. After close, the plan competes with day-to-day operations for the attention of a management team that is already busy.',
        'Larger companies run into the same issue with transformation programs. The strategy may be sound, but nobody has the time to turn it into initiatives, owners and milestones and keep them moving. We can take on that role for as long as it is needed.',
      ],
      challenges: [
        'A value creation plan with ambitious targets but no clear initiatives, owners or sequencing',
        'Management teams running the business and the transformation at the same time',
        'Cost structures that have grown through acquisitions, legacy systems or fragmented operations',
        'Operating models that no longer fit the size, footprint or strategy of the business',
        'Boards and sponsors that lack reliable visibility into progress against the plan',
      ],
    },
    tracks: [
      {
        title: 'Building the plan',
        decision: 'Which initiatives to pursue, in what order, and what each should deliver.',
        outputs: [
          'Value creation plan with sized, sequenced initiatives',
          'Initiative charters with owners, milestones and financial targets',
          'Cost baseline and prioritized savings opportunities',
        ],
      },
      {
        title: 'Executing an existing plan',
        decision: 'How to keep the plan on schedule and show the board what has actually been delivered.',
        outputs: [
          'Execution PMO operating rhythm and reporting pack for management and the board',
          'KPI dashboard aligned to the investment case',
          'Benefits tracking reconciled with finance',
        ],
      },
    ],
    capabilities: [
      {
        title: 'Value creation planning',
        text: 'Translating the investment thesis into a prioritized portfolio of initiatives, sized by EBITDA impact, cost to achieve and execution complexity.',
      },
      {
        title: 'Execution PMO leadership',
        text: 'Standing up and running the program office that drives delivery: cadence, reporting, issue resolution and accountability, with direct access to the CEO and sponsor.',
      },
      {
        title: 'Operating model transformation',
        text: 'Redesigning organization structure, governance, shared services and footprint so the business is set up to execute its strategy.',
      },
      {
        title: 'Cost optimization',
        text: 'Cost structure diagnostics across branches, back office, technology and vendors, followed by implementation of the opportunities that hold up.',
      },
      {
        title: 'Technology and business transformation',
        text: 'Leading enterprise programs that change how the business works, from requirements through cutover, with business and technology stakeholders aligned.',
      },
      {
        title: 'Performance improvement',
        text: 'KPI frameworks and performance management routines that keep improvements in place after the program ends.',
      },
    ],
    deliverables: [
      'Value creation plan with sized, sequenced initiatives',
      'Initiative charters with owners, milestones and financial targets',
      'Execution PMO operating rhythm and reporting pack for management and the board',
      'Cost baseline and prioritized savings opportunities',
      'Target operating model and transition roadmap',
      'KPI dashboard aligned to the investment case',
      'Benefits tracking reconciled with finance',
    ],
    approach: [
      { title: 'Understand', text: 'Build a fact base on cost, performance and operations, and test it against the investment thesis.' },
      { title: 'Strategize', text: 'Prioritize initiatives by impact and complexity, and agree targets with management and the sponsor.' },
      { title: 'Execute', text: 'Lead the execution PMO alongside management, removing blockers and keeping the program on pace.' },
      { title: 'Deliver value', text: 'Track results against the plan and embed the routines that sustain them.' },
    ],
    situations: [
      'A sponsor has closed on a platform company and needs a 100-day plan and value creation program',
      'A portfolio company needs interim transformation leadership while the team focuses on running the business',
      'A business built through acquisitions needs to simplify its operating model and cost base',
      'A board wants an objective view of which initiatives are delivering and which are not',
      'A company is preparing for exit and needs to demonstrate a credible, well-run operating platform',
    ],
    relatedInsights: ['building-an-effective-execution-pmo', 'why-post-merger-integrations-fail'],
  },
  {
    slug: 'growth-strategy',
    href: '/services/growth-strategy/',
    name: 'Growth & Commercial Strategy',
    summary:
      'Go-to-market planning and commercialization support that turns new products, markets and channels into revenue.',
    trigger: 'You are launching a product, entering a new market or resetting how the business sells.',
    sampleOutput: 'Go-to-market strategy and launch plan, with target buyer profiles and positioning',
    highlights: [
      'Go-to-market strategy and execution',
      'Product commercialization',
      'Growth planning',
      'Commercial operating models',
      'Sales enablement and transformation',
    ],
    meta: {
      title: 'Go-to-Market Strategy & Commercialization',
      description:
        'Go-to-market strategy, product commercialization, growth planning and sales enablement for corporate leaders and private equity-backed companies.',
    },
    hero: {
      title: 'Go-to-market and commercial strategy for new products and markets.',
      lede:
        'We help leadership teams decide where to focus, how to position new offerings and how to set up sales and marketing to deliver the plan.',
    },
    context: {
      title: 'Common growth challenges',
      paragraphs: [
        'Growth is often the biggest part of an investment thesis or corporate strategy, and also the least defined. New products can reach the market without a clear target buyer, sales teams may be asked to sell offerings they do not fully understand, and pricing and channels are sometimes decided late in the process.',
        'This is especially common with AI-enabled and digital products, where the technology often develops faster than the commercial model around it. Our growth work focuses on the practical decisions that shape how a launch goes.',
      ],
      challenges: [
        'New products without a defined target buyer, value proposition or launch plan',
        'Sales teams that are not equipped to sell new or more complex offerings',
        'Growth targets that are not tied to specific segments, channels or initiatives',
        'Commercial organizations that have not kept pace with changes in the portfolio',
        'Limited visibility into which growth investments are paying off',
      ],
    },
    tracks: [
      {
        title: 'Customer and market selection',
        decision: 'Which customers and markets to prioritize, and how to position the offer to them.',
        outputs: ['Target buyer profiles, positioning and messaging framework', 'Growth plan with revenue initiatives, owners and milestones'],
      },
      {
        title: 'Launch readiness',
        decision: 'Whether the product, sales team and channels are ready to go to market, and in what sequence.',
        outputs: ['Go-to-market strategy and launch plan', 'Sales enablement materials and playbooks'],
      },
      {
        title: 'Commercial execution',
        decision: 'How to organize and measure the commercial team so the plan turns into pipeline and revenue.',
        outputs: ['Commercial operating model and coverage design', 'Launch and pipeline performance dashboard'],
      },
    ],
    capabilities: [
      {
        title: 'Go-to-market strategy',
        text: 'Segmentation, target buyers, positioning, channel strategy and launch sequencing for new products and markets.',
      },
      {
        title: 'Product commercialization',
        text: 'Bringing new products, including AI-enabled solutions, from development to market with clear positioning and a coordinated launch.',
      },
      {
        title: 'Growth planning',
        text: 'Building a growth plan that ties revenue targets to specific segments, offerings and initiatives that can be owned and tracked.',
      },
      {
        title: 'Commercial operating models',
        text: 'Designing sales coverage, roles, processes and handoffs between marketing, sales, product and customer success.',
      },
      {
        title: 'Sales enablement and transformation',
        text: 'Messaging, playbooks, training and tools that help sales teams sell new offerings with confidence.',
      },
    ],
    deliverables: [
      'Go-to-market strategy and launch plan',
      'Target buyer profiles, positioning and messaging framework',
      'Growth plan with revenue initiatives, owners and milestones',
      'Commercial operating model and coverage design',
      'Sales enablement materials and playbooks',
      'Launch and pipeline performance dashboard',
    ],
    approach: [
      { title: 'Understand', text: 'Assess the market, customers, product and current commercial performance.' },
      { title: 'Strategize', text: 'Define where to play, how to win and what the commercial engine needs to look like.' },
      { title: 'Execute', text: 'Work with product, marketing and sales teams to launch and enable the plan.' },
      { title: 'Deliver value', text: 'Track adoption and pipeline, and refine the approach based on what the market says.' },
    ],
    situations: [
      'A company is launching AI-enabled or digital products and needs a go-to-market plan',
      'A sponsor’s investment thesis depends on growth that is not yet tied to specific initiatives',
      'A sales organization needs to sell a broader or more technical portfolio',
      'A business is entering a new segment, geography or channel',
      'Leadership needs to reset the commercial model after an acquisition',
    ],
    relatedInsights: [],
  },
];

export const getService = (slug: string) => {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
};
