window.SITE_OPERATIONS = {
  coffeedant: {
    id: 'coffeedant',
    name: 'Coffeedant',
    domain: 'coffeedant.com',
    dashboardLabel: 'Migration control',
    stage: 'Build',
    status: 'Migration and standardization in progress',
    statusTone: 'build',
    lastVerified: 'September 17, 2026',
    summary: 'Coffeedant is the proof engine for the portfolio. The site structure is migrated to a fast static build, but page-level editorial standardization, product data, conversion tracking, and final domain cutover are not finished.',
    objective: 'Move all 194 known URLs into one credible editorial and commerce system, then cut over the domain without losing rankings, links, or revenue tracking.',
    links: [
      { label: 'Live preview', href: 'https://alekspasseo.github.io/coffeedant/' },
      { label: 'Sitemap', href: 'https://alekspasseo.github.io/coffeedant/sitemap.xml' },
      { label: 'Benchmark review', href: 'https://alekspasseo.github.io/coffeedant/espresso-machine/breville-barista-express-bes870xl/' },
      { label: 'GitHub', href: 'https://github.com/AlekSpasSEO/coffeedant' },
    ],
    metrics: [
      { value: '194', label: 'Known URLs', note: 'Current GitHub Pages sitemap' },
      { value: '31', label: 'Modern product reviews', note: 'Updated September 15 or later' },
      { value: '10', label: 'Latest completed batch', note: 'Published September 17' },
      { value: '3k-5k', label: 'Visits per month', note: 'Current operating baseline' },
      { value: '$50-$150', label: 'Revenue per month', note: 'Current affiliate baseline' },
    ],
    workstreams: [
      { id: 'inventory', title: 'URL inventory and route migration', progress: 100, weight: 15, outcome: 'All 194 known URLs appear in the generated sitemap.', next: 'Keep the sitemap as the page ledger and flag every route removed or redirected.' },
      { id: 'template', title: 'Benchmark review system', progress: 100, weight: 15, outcome: 'The Barista Express page defines the current review standard.', next: 'Turn the benchmark into a binary acceptance checklist before the next batch.' },
      { id: 'reviews', title: 'Review standardization', progress: 19, weight: 30, outcome: '31 of roughly 160 product review routes are in the modern review system.', next: 'Upgrade the next ten commercially important reviews, then repeat.' },
      { id: 'hubs', title: 'Hubs, brands, and editorial pages', progress: 22, weight: 12, outcome: 'Core hubs exist, but depth and recommendation logic vary.', next: 'Audit every non-review page against its own intent rather than forcing the review template onto it.' },
      { id: 'commerce', title: 'Product data and commerce layer', progress: 20, weight: 15, outcome: 'Canonical product data exists; live retailer data and click tracking are incomplete.', next: 'Connect the Amazon Creators API through a reachable endpoint and log outbound clicks.' },
      { id: 'cutover', title: 'Pre-cutover SEO and analytics QA', progress: 30, weight: 13, outcome: 'GitHub preview is live. Redirects, canonicals, analytics, and domain cutover still need a signed checklist.', next: 'Do not move coffeedant.com until crawl, redirects, events, and rollback are verified.' },
    ],
    actions: [
      { id: 'inventory-live', priority: 'Done', title: 'Publish the complete 194-URL sitemap', detail: 'The current GitHub Pages sitemap is the migration ledger.', owner: 'System', timing: 'Complete', defaultComplete: true },
      { id: 'benchmark-live', priority: 'Done', title: 'Establish the Barista Express benchmark', detail: 'Use its content depth, components, and visual hierarchy as the review baseline.', owner: 'Ace + Codex', timing: 'Complete', defaultComplete: true },
      { id: 'acceptance-checklist', priority: 'P0', title: 'Freeze the review acceptance checklist', detail: 'A page is not finished until every mandatory component, evidence label, link, image, and schema check passes.', owner: 'Ace', timing: 'Before next batch' },
      { id: 'next-ten', priority: 'P0', title: 'Upgrade the next ten high-value reviews', detail: 'Prioritize commercial demand and internal-link importance, not alphabetical order.', owner: 'Codex', timing: 'Current sprint' },
      { id: 'api', priority: 'P0', title: 'Connect the Amazon commerce data endpoint', detail: 'Prices, availability, images, and links need a compliant update path. Never hard-code volatile values as permanent facts.', owner: 'Ace + Codex', timing: 'Current sprint' },
      { id: 'non-review-audit', priority: 'P1', title: 'Audit all hubs, brand pages, and blog posts', detail: 'Give each page a purpose, conversion path, internal-link role, and editorial standard.', owner: 'Codex', timing: 'After review batch' },
      { id: 'redirect-map', priority: 'P1', title: 'Approve the redirect and canonical map', detail: 'Compare WordPress URLs with the final static routes. Resolve duplicates and generations before cutover.', owner: 'Ace', timing: 'Before domain move' },
      { id: 'analytics-qa', priority: 'P1', title: 'Verify analytics and affiliate events', detail: 'Track article views, comparison interactions, retailer clicks, and revenue by page.', owner: 'Codex', timing: 'Before domain move' },
      { id: 'cutover', priority: 'Gate', title: 'Move the domain only after a clean crawl', detail: 'Require zero broken priority routes, tested redirects, correct canonicals, and a rollback plan.', owner: 'Ace', timing: 'Launch gate' },
    ],
    blockers: [
      { level: 'Critical', title: 'The commerce endpoint is not yet reachable', detail: 'The Amazon credential file alone does not create a live integration. A secure public endpoint and secrets handling are still required.' },
      { level: 'High', title: 'Most product reviews still use legacy depth', detail: '31 modern product reviews means the majority of the product catalog has not yet reached the benchmark.' },
      { level: 'High', title: 'Domain cutover evidence is incomplete', detail: 'A working preview is not proof that redirects, analytics, canonicals, and rollback are ready.' },
      { level: 'Medium', title: 'Editorial evidence varies by product', detail: 'Official images, retailer media, owner reports, and hands-on testing must remain clearly distinguished.' },
    ],
    decisions: [
      { id: 'cutover-date', title: 'Cutover date', recommendation: 'Leave unset until the pre-cutover checklist is green.', status: 'Blocked', impact: 'Prevents an avoidable traffic and tracking loss.' },
      { id: 'remaining-order', title: 'Remaining review order', recommendation: 'Sort by traffic, revenue potential, and internal-link value.', status: 'Recommended', impact: 'Moves business outcomes sooner than alphabetical batching.' },
      { id: 'legacy-content', title: 'Legacy content treatment', recommendation: 'Rewrite pages with demand; redirect or consolidate pages with no distinct job.', status: 'Open', impact: 'Avoids spending weeks polishing pages that should not exist.' },
    ],
    research: {
      verdict: 'The migration foundation is credible. The risk is declaring victory when routing is complete but editorial and commercial systems are only partially complete.',
      opportunity: [
        'The existing 3,000-5,000 monthly visits and revenue give immediate feedback that a new domain cannot provide.',
        'A consistent review data model can power comparison tables, recommendation modules, filters, and future retailer integrations.',
        'The 194-page inventory creates internal-link and long-tail coverage that would be expensive to rebuild from zero.',
      ],
      strategy: [
        'Treat the Barista Express review as a QA contract, not simply a visual reference.',
        'Separate migration completeness from content completeness in every report.',
        'Measure revenue per 1,000 visits and retailer click-through rate by template and page type.',
        'Use batch production only after the first page in each new format passes manual QA.',
      ],
    },
    standards: [
      'Compact top summary with image, current price handling, where-to-buy links, verdict, pros, and cons.',
      'Visible author box with published date, updated date, portrait, and an honest evidence note.',
      'Overall rating plus separate espresso quality, milk performance, workflow, build, features, and value analysis where relevant.',
      'Simple comparison table plus an accessible details view with dimensions, boiler or heating system, grinder, reservoir, warranty, and other decision data.',
      'Internal links to every product in comparison tables when a Coffeedant review exists.',
      'Up to three useful images per article, each credited and labeled by source type.',
      'Static FAQs, never hidden accordions that bury the answer.',
      'Community evidence summarized inside the page with source links and no fabricated owner quotes.',
      'At least one relevant video with creator, date, purpose, and evidence limitation.',
      'No claim of hands-on testing unless Coffeedant actually tested the unit.',
    ],
    phases: [
      { id: 'c1', label: 'Phase 1', timing: 'Complete', title: 'Inventory and static foundation', deliverables: ['194-route sitemap', 'Reusable Astro layouts', 'GitHub Pages preview', 'Canonical product IDs and route families'], gate: 'Every known legacy route is represented or deliberately redirected.' },
      { id: 'c2', label: 'Phase 2', timing: 'In progress', title: 'Editorial standardization', deliverables: ['Benchmark checklist', 'Ten-review batches', 'Evidence labels', 'Image and source QA'], gate: 'Every priority review matches the benchmark without invented testing.' },
      { id: 'c3', label: 'Phase 3', timing: 'Next', title: 'Commerce and decision tools', deliverables: ['Retailer data endpoint', 'Click tracking', 'Comparison tools', 'Recommendation modules'], gate: 'Volatile data updates safely and every outbound click is attributable.' },
      { id: 'c4', label: 'Phase 4', timing: 'Before launch', title: 'Migration QA and cutover', deliverables: ['Redirect map', 'Canonical crawl', 'Analytics QA', 'Rollback plan'], gate: 'No unresolved critical errors on revenue or traffic routes.' },
      { id: 'c5', label: 'Phase 5', timing: 'Post-launch', title: 'Measure and improve', deliverables: ['Weekly indexation check', 'Revenue by page', 'CTR experiments', 'Content refresh queue'], gate: 'Scale only the page types that improve rankings, clicks, or revenue.' },
    ],
    content: [
      { id: 'cd-01', cluster: 'Espresso machine', title: 'Gaggia Classic Evo Pro', type: 'Review upgrade', intent: 'High commercial', evidence: 'Official + owner + independent', status: 'Next' },
      { id: 'cd-02', cluster: 'Espresso machine', title: 'Lelit Mara X', type: 'Review upgrade', intent: 'High commercial', evidence: 'Official + owner + independent', status: 'Next' },
      { id: 'cd-03', cluster: 'Espresso machine', title: 'Profitec GO', type: 'Review upgrade', intent: 'High commercial', evidence: 'Official + owner + independent', status: 'Next' },
      { id: 'cd-04', cluster: 'Espresso machine', title: 'Breville Oracle Jet BES985', type: 'Review upgrade', intent: 'High commercial', evidence: 'Official + owner + independent', status: 'Next' },
      { id: 'cd-05', cluster: 'Espresso machine', title: 'DeLonghi Dinamica Plus', type: 'Review upgrade', intent: 'High commercial', evidence: 'Official + owner + independent', status: 'Queued' },
      { id: 'cd-06', cluster: 'Espresso machine', title: 'Jura E8', type: 'Review upgrade', intent: 'High commercial', evidence: 'Official + owner + independent', status: 'Queued' },
      { id: 'cd-07', cluster: 'Espresso machine', title: 'Rancilio Silvia Pro X', type: 'Review upgrade', intent: 'High commercial', evidence: 'Official + owner + independent', status: 'Queued' },
      { id: 'cd-08', cluster: 'Manual espresso', title: 'Flair 58', type: 'Review upgrade', intent: 'Commercial', evidence: 'Official + owner + independent', status: 'Queued' },
      { id: 'cd-09', cluster: 'Espresso machine', title: 'ECM Synchronika', type: 'Review upgrade', intent: 'High commercial', evidence: 'Official + owner + independent', status: 'Queued' },
      { id: 'cd-10', cluster: 'Espresso machine', title: 'Gaggia Classic GT', type: 'Review upgrade', intent: 'Commercial', evidence: 'Official + owner + independent', status: 'Queued' },
    ],
    sources: [
      { label: 'Live Coffeedant sitemap', href: 'https://alekspasseo.github.io/coffeedant/sitemap.xml', note: '194 current routes and update dates.' },
      { label: 'Benchmark Barista Express review', href: 'https://alekspasseo.github.io/coffeedant/espresso-machine/breville-barista-express-bes870xl/', note: 'Required editorial and design reference.' },
      { label: 'Google guidance for high-quality reviews', href: 'https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews', note: 'Evidence, measurements, comparisons, benefits, drawbacks, and original research.' },
      { label: 'FTC disclosure guidance', href: 'https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers', note: 'Clear disclosure of affiliate, free-product, and paid relationships.' },
      { label: 'Amazon Associates operating agreement', href: 'https://affiliate-program.amazon.com/help/operating/agreement', note: 'Program and link compliance reference.' },
    ],
  },

  justdaddit: {
    id: 'justdaddit',
    name: 'JustDaddit',
    domain: 'justdaddit.com',
    dashboardLabel: 'Build and launch control',
    stage: 'Build',
    status: 'Prototype built; repository needed for publication',
    statusTone: 'validate',
    lastVerified: 'September 17, 2026',
    summary: 'A candid, research-backed buying brand for family adventures, projects, travel, and outdoor play. Every page labels its evidence, calculates the first-weekend cost, and names who should skip the product.',
    objective: 'Publish the approved 69-page US-first launch system: one homepage, five hubs, five comparisons, 50 research reviews, and eight trust or legal pages. Add hands-on evidence later without inventing it now.',
    links: [
      { label: 'Owned domain', href: 'https://justdaddit.com/' },
      { label: 'Name-risk reference', href: 'https://www.reddit.com/r/daddit/' },
      { label: 'Affiliate Kingdom', href: 'https://alekspasseo.github.io/affiliate-kingdom/' },
    ],
    metrics: [
      { value: '69', label: 'Approved launch pages', note: '61 commercial and navigation pages plus eight trust and legal pages' },
      { value: '6', label: 'Prototype pages built', note: 'Homepage, RC hub, benchmark review, comparison, About, and methodology' },
      { value: '5', label: 'Approved launch hubs', note: 'RC, ride-ons, backyard play, camping, and roof cargo' },
      { value: '4,004', label: 'Benchmark review words', note: 'Useful rendered depth, excluding code and hidden material' },
      { value: '0', label: 'Pages published', note: 'Awaiting the empty justdaddit GitHub repository' },
    ],
    workstreams: [
      { id: 'research', title: 'Market and competitor research', progress: 82, weight: 15, outcome: 'The US audience, five launch categories, model list, risks, and monetization routes are mapped.', next: 'Complete exact-product source ledgers for the remaining nine benchmark-batch products.' },
      { id: 'positioning', title: 'Voice, brand, and founder identity', progress: 90, weight: 15, outcome: 'Voice, tone, vocabulary, evidence labels, founder identity, privacy boundary, and non-affiliation language are approved.', next: 'Run formal trademark clearance before paid identity work.' },
      { id: 'architecture', title: 'Site and product architecture', progress: 68, weight: 15, outcome: 'The 69-page launch map, routes, components, metadata, sitemap, and internal-link pattern are defined.', next: 'Move product facts into structured records before batch production.' },
      { id: 'evidence', title: 'Evidence and scoring system', progress: 72, weight: 20, outcome: 'Research Review, Owner-Verified, Hands-On, and Long-Term labels plus six scoring dimensions are documented.', next: 'Create the per-product source and claim ledger for the next nine reviews.' },
      { id: 'build', title: 'Website and content production', progress: 28, weight: 25, outcome: 'Six-page Astro prototype builds and validates locally, including a 4,004-word benchmark review.', next: 'Create the empty GitHub repository, publish the prototype, and run desktop and mobile visual QA.' },
      { id: 'monetization', title: 'Affiliate and measurement setup', progress: 8, weight: 10, outcome: 'US-first retailer strategy is mapped; no affiliate links or analytics are active in the prototype.', next: 'Add measurement events and apply only after credible seed content is public.' },
    ],
    actions: [
      { id: 'domain-selected', priority: 'Done', title: 'Select JustDaddit as site number two', detail: 'The domain and portfolio position are approved.', owner: 'Ace', timing: 'Complete', defaultComplete: true },
      { id: 'market', priority: 'Done', title: 'Lock the launch market', detail: 'US-first English, USD, Amazon US, and direct US programs.', owner: 'Ace', timing: 'Complete', defaultComplete: true },
      { id: 'hubs-approved', priority: 'Done', title: 'Approve the five launch hubs', detail: 'RC cars, ride-ons, backyard play, family camping, and roof cargo.', owner: 'Ace', timing: 'Complete', defaultComplete: true },
      { id: 'identity-approved', priority: 'Done', title: 'Approve public founder identity', detail: 'Use Aleksandar Spasevski, portrait, and father/founder biography while keeping children private.', owner: 'Ace', timing: 'Complete', defaultComplete: true },
      { id: 'brand-system', priority: 'Done', title: 'Create the brand and editorial system', detail: 'Voice, tone, vocabulary, evidence labels, scoring, images, affiliate rules, and page structures are documented.', owner: 'Codex', timing: 'Complete', defaultComplete: true },
      { id: 'prototype', priority: 'Done', title: 'Build the six-page prototype', detail: 'Homepage, RC hub, benchmark review, comparison, About, and methodology pass deterministic validation.', owner: 'Codex', timing: 'Complete', defaultComplete: true },
      { id: 'repository', priority: 'P0', title: 'Create the empty public justdaddit repository', detail: 'The connected GitHub app can populate repositories but cannot create a new one.', owner: 'Ace', timing: 'Now' },
      { id: 'publish-qa', priority: 'P0', title: 'Publish and visually QA the prototype', detail: 'Push the Astro project, enable GitHub Pages, inspect desktop and mobile, and fix render issues.', owner: 'Codex', timing: 'After repository exists' },
      { id: 'clearance', priority: 'P0', title: 'Run formal name and trademark clearance', detail: 'Keep the Reddit non-affiliation statement and clear the name before significant brand spend.', owner: 'Ace', timing: 'Before logo spend' },
      { id: 'product-data', priority: 'P1', title: 'Create structured records for the first ten products', detail: 'Exact model, generation, region, specs, claims, manuals, parts, recalls, images, and retailer records.', owner: 'Codex', timing: 'Next batch' },
      { id: 'first-ten', priority: 'P1', title: 'Build the first ten reviews and five comparisons', detail: 'Use the approved benchmark structure, then audit before producing the remaining forty reviews.', owner: 'Codex', timing: 'After prototype approval' },
    ],
    blockers: [
      { level: 'Critical', title: 'The GitHub repository does not exist', detail: 'Create one empty public repository named justdaddit. The completed local prototype cannot be published until the remote exists.' },
      { level: 'High', title: 'Name confusion has not been formally cleared', detail: 'Daddit is closely associated with Reddit fatherhood. The prototype states non-affiliation, but legal clearance is still required before significant brand spend.' },
      { level: 'Medium', title: 'Visual browser QA is incomplete', detail: 'The production build and deterministic checks pass, but the managed render session stalled. Complete desktop and mobile visual inspection after publication.' },
    ],
    decisions: [
      { id: 'market', title: 'Primary market', recommendation: 'US-first English, USD pricing, Amazon US, and direct US affiliate programs.', status: 'Approved', impact: 'Controls currency, products, retailers, compliance, and research.' },
      { id: 'audience', title: 'Starting family stage', recommendation: 'US families with children roughly 4-12.', status: 'Approved', impact: 'Avoids a baby-heavy launch and matches the selected activities.' },
      { id: 'wedge', title: 'Five launch hubs', recommendation: 'RC cars, go-karts and ride-ons, backyard play, family camping tents, and roof cargo boxes.', status: 'Approved', impact: 'Defines all 61 requested commercial and navigation pages.' },
      { id: 'identity', title: 'Public founder identity', recommendation: 'Use real name, portrait, and father/founder biography while keeping children private.', status: 'Approved', impact: 'Controls author schema, About copy, photography, and trust.' },
      { id: 'evidence-model', title: 'Initial evidence model', recommendation: 'Publish clearly labeled Research Reviews now; never imply hands-on testing.', status: 'Approved', impact: 'Allows launch without owning products while preserving credibility.' },
      { id: 'brand-breadth', title: 'Broader brand story', recommendation: 'Keep family-life and dadpreneur stories as a later journal layer.', status: 'Approved', impact: 'Preserves founder depth without diluting launch focus.' },
      { id: 'reddit', title: 'Reddit relationship', recommendation: 'State non-affiliation and never use r/daddit for promotion.', status: 'Required', impact: 'Reduces naming and reputation risk.' },
    ],
    research: {
      verdict: 'Proceed with validation. The concept has commercial depth and authentic founder fit, but the name needs clearance and the site needs a narrower opening than “everything dads buy.”',
      opportunity: [
        'The existing vault already maps 57 family-related niches, including 38 high-potential candidates and eight with price ceilings above $2,000.',
        'Your children are in the ideal range for real coverage of outdoor play, RC, cameras, creative technology, travel, bikes, scooters, and family systems.',
        'Direct programs can improve the economics beyond Amazon. Yoto publicly lists 20% on players and a 30-day window, although its current page conflicts between 12% and 15% for cards and accessories.',
        'Family products create natural repeat purchases as children age, interests change, and households upgrade equipment.',
      ],
      strategy: [
        'Promise useful decisions: what fits this family, child age, home, car, trip, budget, and tolerance for maintenance.',
        'Build around connected systems. A stroller wagon leads to accessories, travel, storage, beach use, and vehicle-fit decisions.',
        'Publish evidence labels on every review: owned and tested, borrowed and tested, retailer demo, expert contribution, or research-only.',
        'Use real family stories as the lead, then support them with measurements, product documents, safety sources, and owner patterns.',
        'Keep children private where desired. Hands, use context, measurements, wear, setup, and outcomes can prove real use without publishing faces.',
        'Retain the original family-journey and dadpreneur themes as an editorial journal after the commercial clusters establish traction. They should deepen the founder story, not compete with launch architecture.',
      ],
    },
    competitors: [
      { name: 'Fathercraft', focus: 'Baby gear, new-dad education, and owned products', strength: 'Clear dad angle and deep baby purchase guides', gap: 'Heavily concentrated on pregnancy, infancy, and baby gear', href: 'https://fathercraft.com/' },
      { name: 'Dad Gear Review', focus: 'Outdoor family gear', strength: 'Strong testing promise and credible outdoor identity', gap: 'Narrower outdoor lens leaves family technology, creative gear, and home systems open', href: 'https://www.dadgearreview.com/about' },
      { name: 'Fatherly', focus: 'Large parenting media brand with commerce content', strength: 'Authority, reach, and broad editorial coverage', gap: 'Generalist scale makes a tighter family decision system possible', href: 'https://www.fatherly.com/' },
      { name: 'Parents', focus: 'Large parent-focused testing and advice publisher', strength: 'Testing resources and high editorial trust', gap: 'Not built around a dad operator voice or connected dad-and-kid projects', href: 'https://www.parents.com/' },
      { name: 'Forbes Vetted', focus: 'General product recommendations', strength: 'Large-domain authority and structured buying guides', gap: 'Limited family continuity and little founder-family context', href: 'https://www.forbes.com/vetted/' },
      { name: 'r/daddit', focus: 'Peer support and fatherhood discussion', strength: '482,000-member community and highly authentic language', gap: 'Not a commercial review publisher; rules prohibit promotion and AI posts', href: 'https://www.reddit.com/r/daddit/' },
    ],
    monetization: [
      { channel: 'Amazon Associates', role: 'Fallback retailer coverage', economics: 'Category-dependent, generally low single-digit rates for relevant physical products', action: 'Use for availability and basket conversion, not as the only revenue plan.', href: 'https://affiliate-program.amazon.com/' },
      { channel: 'Yoto', role: 'High-fit family technology', economics: '20% on players and a 30-day window; the current page conflicts between 12% and 15% for cards and accessories', action: 'Reconfirm the accessory rate before applying, then target only after an evidence-led screen-light audio cluster exists.', href: 'https://us.yotoplay.com/yoto-affiliate-program' },
      { channel: 'REI', role: 'Family outdoor and travel gear', economics: 'Competitive sales commission and $160+ average order value listed publicly', action: 'Use for camping, carriers, trailers, racks, and family adventure equipment.', href: 'https://www.rei.com/help?a=Affiliate-Program---id--SnToxfZRRI-o6A7lkasoWA' },
      { channel: 'Radio Flyer', role: 'Wagons, ride-ons, bikes, and go-karts', economics: '3-5% commission, 30-day cookie, and high average order value listed publicly', action: 'Prioritize if ride-and-haul becomes the first wedge.', href: 'https://www.radioflyer.com/pages/affiliate-program' },
      { channel: 'Veer', role: 'Premium stroller wagons and family gear', economics: 'Official influencer and affiliate path; terms require validation', action: 'Pursue after publishing a rigorous wagon decision framework.', href: 'https://goveer.com/pages/influencers' },
      { channel: 'Lovevery and KiwiCo', role: 'Play systems and recurring kits', economics: 'Official partner programs exist; approval and current terms vary', action: 'Useful later for age-led comparison and recurring-revenue clusters.', href: 'https://lovevery.com/pages/affiliate-partnerships' },
    ],
    standards: [
      'State who used the product, for how long, with children in what age range, and whether the product was purchased, borrowed, or supplied.',
      'Never claim a product was tested when the article is based on documents, expert input, or owner synthesis.',
      'Check CPSC recalls and safety notices before publication and during scheduled updates for covered US products.',
      'Put affiliate and supplied-product disclosures where readers will actually see them.',
      'Score products by family decision factors: fit, setup, transport, cleanup, durability, repairability, storage, child independence, and long-term value.',
      'Show dimensions in real family contexts: trunk fit, doorway fit, storage footprint, child fit, carrying weight, and setup time.',
      'Offer multiple retailers where useful and separate current price snapshots from permanent editorial facts.',
      'Do not promote inside r/daddit or imply that JustDaddit is connected to Reddit or its community.',
      'Use AI for structure, research organization, data checks, and editing. The lived observations must come from real people.',
      'Every “best” claim must name the use case and the evidence that makes it the best for that use case.',
    ],
    phases: [
      { id: 'j0', label: 'Phase 0', timing: 'Days 1-3', title: 'Clear the ground', deliverables: ['US-first market locked', 'Name and trademark screen', 'Non-affiliation language', 'Owned gear inventory'], gate: 'No unresolved name conflict and at least ten testable products or credible contributor paths.' },
      { id: 'j1', label: 'Phase 1', timing: 'Days 4-7', title: 'Validate the wedge', deliverables: ['30 commercial SERP reviews', 'Competitor gap matrix', 'Retailer and affiliate map', 'First ten article briefs'], gate: 'At least 25 viable commercial queries, three monetization paths, and a credible evidence plan.' },
      { id: 'j2', label: 'Phase 2', timing: 'Week 2', title: 'Build the operating system', deliverables: ['Design system', 'Product data model', 'Review and comparison templates', 'Analytics and affiliate events'], gate: 'One benchmark review and one comparison page pass manual editorial, mobile, and performance QA.' },
      { id: 'j3', label: 'Phase 3', timing: 'Weeks 3-4', title: 'Publish the evidence MVP', deliverables: ['Ten excellent pages', 'About and methodology', 'Disclosure and corrections pages', 'First email capture'], gate: 'Every recommendation is traceable to evidence and every commercial action is measured.' },
      { id: 'j4', label: 'Phase 4', timing: 'Days 30-90', title: 'Complete the 30-page launch', deliverables: ['Four connected clusters', 'Original photos and video', 'Internal-link graph', 'Direct-program applications'], gate: 'Impressions, top-50 movement, affiliate clicks, email growth, or community references justify more production.' },
      { id: 'j5', label: 'Phase 5', timing: 'Day 90 review', title: 'Scale, narrow, or hold', deliverables: ['Performance review', 'Winning cluster expansion', 'Weak-page consolidation', 'Next 30-page decision'], gate: 'Do not scale a weak thesis simply because the publishing system is fast.' },
    ],
    content: [
          {
                "id": "jd-home",
                "cluster": "Site",
                "title": "JustDaddit homepage",
                "type": "Homepage",
                "intent": "Navigation",
                "evidence": "Brand and decision system",
                "status": "Built"
          },
          {
                "id": "jd-hub-1",
                "cluster": "RC",
                "title": "RC Cars for Parents and Kids",
                "type": "Hub",
                "intent": "Commercial",
                "evidence": "Category research and decision framework",
                "status": "Built"
          },
          {
                "id": "jd-hub-2",
                "cluster": "Go-Karts",
                "title": "Go-Karts and Ride-Ons",
                "type": "Hub",
                "intent": "Commercial",
                "evidence": "Category research and decision framework",
                "status": "Planned"
          },
          {
                "id": "jd-hub-3",
                "cluster": "Backyard",
                "title": "Backyard Play Systems",
                "type": "Hub",
                "intent": "Commercial",
                "evidence": "Category research and decision framework",
                "status": "Planned"
          },
          {
                "id": "jd-hub-4",
                "cluster": "Family",
                "title": "Family Camping Tents",
                "type": "Hub",
                "intent": "Commercial",
                "evidence": "Category research and decision framework",
                "status": "Planned"
          },
          {
                "id": "jd-hub-5",
                "cluster": "Roof",
                "title": "Roof Cargo Boxes for Family Trips",
                "type": "Hub",
                "intent": "Commercial",
                "evidence": "Category research and decision framework",
                "status": "Planned"
          },
          {
                "id": "jd-compare-1",
                "cluster": "RC cars",
                "title": "Traxxas Slash 4X4 VXL vs ARRMA Senton 223S BLX",
                "type": "Comparison",
                "intent": "High commercial",
                "evidence": "Research comparison, exact models, dated claims",
                "status": "Built"
          },
          {
                "id": "jd-compare-2",
                "cluster": "Ride-ons",
                "title": "Razor Crazy Cart XL vs Crazy Cart Sport",
                "type": "Comparison",
                "intent": "High commercial",
                "evidence": "Research comparison, exact models, dated claims",
                "status": "Planned"
          },
          {
                "id": "jd-compare-3",
                "cluster": "Backyard play",
                "title": "ACON 16 HD Pro vs Springfree Large Oval",
                "type": "Comparison",
                "intent": "High commercial",
                "evidence": "Research comparison, exact models, dated claims",
                "status": "Planned"
          },
          {
                "id": "jd-compare-4",
                "cluster": "Family camping",
                "title": "Gazelle T4 Plus vs CORE 9-Person Instant Cabin",
                "type": "Comparison",
                "intent": "High commercial",
                "evidence": "Research comparison, exact models, dated claims",
                "status": "Planned"
          },
          {
                "id": "jd-compare-5",
                "cluster": "Roof cargo",
                "title": "Thule Motion 3 XL vs Yakima SkyBox NX XL",
                "type": "Comparison",
                "intent": "High commercial",
                "evidence": "Research comparison, exact models, dated claims",
                "status": "Planned"
          },
          {
                "id": "jd-review-01",
                "cluster": "RC cars",
                "title": "Traxxas Slash 4X4 VXL review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Built"
          },
          {
                "id": "jd-review-02",
                "cluster": "RC cars",
                "title": "Traxxas Rustler 4X4 VXL review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-03",
                "cluster": "RC cars",
                "title": "Traxxas Mini Maxx review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-04",
                "cluster": "RC cars",
                "title": "Traxxas TRX-4 Sport review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-05",
                "cluster": "RC cars",
                "title": "ARRMA Senton 223S BLX 4X4 review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-06",
                "cluster": "RC cars",
                "title": "ARRMA Granite 223S BLX 4X4 review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-07",
                "cluster": "RC cars",
                "title": "ARRMA Typhon Grom 4X4 RTR review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-08",
                "cluster": "RC cars",
                "title": "Losi Mini-T 2.0 Brushless review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-09",
                "cluster": "RC cars",
                "title": "Axial SCX24 Jeep Wrangler JLU review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-10",
                "cluster": "RC cars",
                "title": "Redcat Ascent-18 review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-11",
                "cluster": "Go-karts and ride-ons",
                "title": "Segway GoKart Pro 2 review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-12",
                "cluster": "Go-karts and ride-ons",
                "title": "Razor Crazy Cart XL review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-13",
                "cluster": "Go-karts and ride-ons",
                "title": "Razor Crazy Cart Sport review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-14",
                "cluster": "Go-karts and ride-ons",
                "title": "Razor Crazy Cart Shift review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-15",
                "cluster": "Go-karts and ride-ons",
                "title": "Razor Ground Force Elite review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-16",
                "cluster": "Go-karts and ride-ons",
                "title": "Razor Dune Buggy review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-17",
                "cluster": "Go-karts and ride-ons",
                "title": "Radio Flyer Ultimate Go-Kart for 2 review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-18",
                "cluster": "Go-karts and ride-ons",
                "title": "Radio Flyer Extreme Drift Go-Kart review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-19",
                "cluster": "Go-karts and ride-ons",
                "title": "BERG Buddy B-Orange review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-20",
                "cluster": "Go-karts and ride-ons",
                "title": "BERG Rally APX Red 3 Gears review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-21",
                "cluster": "Backyard play",
                "title": "Springfree Medium Oval review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-22",
                "cluster": "Backyard play",
                "title": "Springfree Large Oval review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-23",
                "cluster": "Backyard play",
                "title": "ACON Air 15 ft Gen 2 review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-24",
                "cluster": "Backyard play",
                "title": "ACON 16 HD Pro review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-25",
                "cluster": "Backyard play",
                "title": "Vuly Thunder 2 Pro review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-26",
                "cluster": "Backyard play",
                "title": "Backyard Discovery Skyfort II review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-27",
                "cluster": "Backyard play",
                "title": "Backyard Discovery Skyfort III review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-28",
                "cluster": "Backyard play",
                "title": "Backyard Discovery Canyon Creek review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-29",
                "cluster": "Backyard play",
                "title": "Gorilla Playsets Chateau Tower review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-30",
                "cluster": "Backyard play",
                "title": "Lifetime Adventure Castle review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-31",
                "cluster": "Family camping",
                "title": "Gazelle T4 Hub review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-32",
                "cluster": "Family camping",
                "title": "Gazelle T4 Plus review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-33",
                "cluster": "Family camping",
                "title": "The North Face Wawona 6 review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-34",
                "cluster": "Family camping",
                "title": "REI Co-op Base Camp 6 review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-35",
                "cluster": "Family camping",
                "title": "REI Co-op Westward 6 review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-36",
                "cluster": "Family camping",
                "title": "Big Agnes Bunk House 6 review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-37",
                "cluster": "Family camping",
                "title": "NEMO Aurora Highrise 6P review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-38",
                "cluster": "Family camping",
                "title": "CORE 9-Person Lighted Instant Cabin review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-39",
                "cluster": "Family camping",
                "title": "Coleman Skydome XL 8-Person review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-40",
                "cluster": "Family camping",
                "title": "Marmot Limestone 6P review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-41",
                "cluster": "Roof cargo",
                "title": "Thule Motion 3 XL review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-42",
                "cluster": "Roof cargo",
                "title": "Thule Motion 3 XL Low review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-43",
                "cluster": "Roof cargo",
                "title": "Thule Force 3 XL review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-44",
                "cluster": "Roof cargo",
                "title": "Yakima SkyBox NX XL review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-45",
                "cluster": "Roof cargo",
                "title": "Yakima SkyBox 16 Carbonite review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-46",
                "cluster": "Roof cargo",
                "title": "Yakima GrandTour 18 review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-47",
                "cluster": "Roof cargo",
                "title": "Yakima CBX 16 review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-48",
                "cluster": "Roof cargo",
                "title": "INNO Wedge 660 review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-49",
                "cluster": "Roof cargo",
                "title": "Rhino-Rack MasterFit 530L review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-review-50",
                "cluster": "Roof cargo",
                "title": "SportRack Vista XL review",
                "type": "Product review",
                "intent": "Commercial",
                "evidence": "Research Review until hands-on evidence exists",
                "status": "Planned"
          },
          {
                "id": "jd-about",
                "cluster": "Trust",
                "title": "About Aleksandar and JustDaddit",
                "type": "Trust",
                "intent": "Brand",
                "evidence": "Approved founder identity",
                "status": "Built"
          },
          {
                "id": "jd-method",
                "cluster": "Trust",
                "title": "How we research and score gear",
                "type": "Trust",
                "intent": "Methodology",
                "evidence": "Versioned editorial standard",
                "status": "Built"
          },
          {
                "id": "jd-scoring",
                "cluster": "Trust",
                "title": "Review scoring policy",
                "type": "Trust",
                "intent": "Methodology",
                "evidence": "Scoring rules",
                "status": "Planned"
          },
          {
                "id": "jd-disclosure",
                "cluster": "Trust",
                "title": "Affiliate disclosure",
                "type": "Legal",
                "intent": "Compliance",
                "evidence": "FTC and program rules",
                "status": "Planned"
          },
          {
                "id": "jd-corrections",
                "cluster": "Trust",
                "title": "Corrections policy",
                "type": "Trust",
                "intent": "Policy",
                "evidence": "Version and correction log",
                "status": "Planned"
          },
          {
                "id": "jd-contact",
                "cluster": "Trust",
                "title": "Contact",
                "type": "Utility",
                "intent": "Contact",
                "evidence": "Founder contact route",
                "status": "Planned"
          },
          {
                "id": "jd-privacy",
                "cluster": "Trust",
                "title": "Privacy policy",
                "type": "Legal",
                "intent": "Compliance",
                "evidence": "US-first policy",
                "status": "Planned"
          },
          {
                "id": "jd-terms",
                "cluster": "Trust",
                "title": "Terms of use",
                "type": "Legal",
                "intent": "Compliance",
                "evidence": "US-first policy",
                "status": "Planned"
          }
    ],
    sources: [
      { label: 'r/daddit community and rules', href: 'https://www.reddit.com/r/daddit/', note: '482,000 members shown September 17, 2026; no self-promotion and no AI posts.' },
      { label: 'Fathercraft', href: 'https://fathercraft.com/', note: 'Dad-led baby gear and new-father education competitor.' },
      { label: 'Dad Gear Review', href: 'https://www.dadgearreview.com/about', note: 'Outdoor family gear competitor with a strong testing promise.' },
      { label: 'Google guidance for high-quality reviews', href: 'https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews', note: 'Primary editorial standard for evidence-led review content.' },
      { label: 'FTC endorsement disclosure guide', href: 'https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking', note: 'Affiliate, sponsorship, free-product, and truthful-experience requirements.' },
      { label: 'CPSC recalls', href: 'https://www.cpsc.gov/Recalls', note: 'US product safety and recall checks.' },
      { label: 'Amazon Associates', href: 'https://affiliate-program.amazon.com/', note: 'Fallback retailer and current category commission schedule.' },
      { label: 'Yoto affiliate program', href: 'https://us.yotoplay.com/yoto-affiliate-program', note: 'Publicly listed commission rates and 30-day window; accessory-rate copy is internally inconsistent and needs confirmation.' },
      { label: 'REI affiliate program', href: 'https://www.rei.com/help?a=Affiliate-Program---id--SnToxfZRRI-o6A7lkasoWA', note: 'Family outdoor retailer with a publicly listed $160+ average order value.' },
      { label: 'Radio Flyer affiliate program', href: 'https://www.radioflyer.com/pages/affiliate-program', note: 'Relevant direct program for wagons, bikes, and ride-ons.' },
      { label: 'Veer partner program', href: 'https://goveer.com/pages/influencers', note: 'Relevant premium family gear partnership path.' },
      { label: 'Lovevery partner program', href: 'https://lovevery.com/pages/affiliate-partnerships', note: 'Potential recurring play-system monetization.' },
      { label: 'KiwiCo affiliate program', href: 'https://www.kiwico.com/affiliate-program', note: 'Potential recurring creative-project monetization.' },
    ],
  },
};
