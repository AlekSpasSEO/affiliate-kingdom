const PORTFOLIO = [
  {
    id: 'coffeedant', rank: 1, name: 'Coffeedant', wave: 0, score: 92, confidence: 88, priority: 'Flagship',
    tagline: 'The proving ground for the entire publishing system.',
    thesis: 'Help ordinary buyers choose espresso machines and grinders through clear use-case guidance, real ownership context, and product-level depth.',
    buyer: 'Home coffee buyers moving from capsules or basic machines into a better setup.',
    clusters: ['Espresso machines', 'Grinders', 'Small kitchens', 'One-touch coffee', 'Accessories'],
    why: 'Existing traffic, existing revenue, a known audience, and a live migration make this the cheapest place to prove templates, product data, internal linking, and conversion modules.',
    risk: 'Traffic growth without stronger commercial intent will produce attention but weak revenue.',
    gate: 'Migration complete, reusable review template live, product data workflow stable, and revenue per 1,000 visits measured.',
    defaultStage: 'Build', defaultProgress: 42, defaultPages: 194, defaultVisits: 4000, defaultClicks: 0, defaultRevenue: 100,
    nextAction: 'Freeze the benchmark checklist and upgrade the next ten commercial reviews.'
  },
  {
    id: 'smart-yard', rank: 3, name: 'Smart Yard', wave: 1, score: 89, confidence: 67, priority: 'Core bet',
    tagline: 'High-ticket machines for a lower-effort yard.',
    thesis: 'Own the transition from manual yard work to battery-powered, robotic, and smarter outdoor equipment.',
    buyer: 'Homeowners with lawns, storage space, and the budget to pay for convenience.',
    clusters: ['Robot mowers', 'Cordless mowers', 'Pressure washers', 'Leaf blowers', 'Battery chainsaws'],
    why: 'Strong purchase prices, clear comparison intent, rapidly evolving products, and a large accessory ecosystem.',
    risk: 'Seasonality, manufacturer-led results, and testing requirements can raise content costs.',
    gate: 'Confirm weak SERPs across 30 commercial queries and identify five products that can be tested or sourced.',
    defaultStage: 'Build', defaultProgress: 58, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Score 30 commercial SERPs and map the robot-mower purchase journey.'
  },
  {
    id: 'cleaning-machines', rank: 4, name: 'Cleaning Machines', wave: 1, score: 88, confidence: 70, priority: 'Core bet',
    tagline: 'The machines that replace hours of household work.',
    thesis: 'Build the buyer guide for automated and deep-cleaning equipment, from robot vacuums to extractors.',
    buyer: 'Busy homeowners, pet owners, families, and people willing to spend for time savings.',
    clusters: ['Robot vacuums', 'Stick vacuums', 'Carpet cleaners', 'Steam cleaners', 'Shop vacs'],
    why: 'Large underlying demand, repeat replacements, visible feature differences, and strong problem-led content opportunities.',
    risk: 'Crowded flagship terms require narrow use cases, testing, and comparison data.',
    gate: 'Find three defensible audience wedges and prove at least one cluster can rank without a giant-publisher profile.',
    defaultStage: 'Validate', defaultProgress: 10, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Choose the opening wedge: pets, hard floors, or deep cleaning.'
  },
  {
    id: 'rv-systems', rank: 5, name: 'RV Systems', wave: 2, score: 88, confidence: 63, priority: 'Core bet',
    tagline: 'Power, comfort, connectivity, and upgrades for life on the road.',
    thesis: 'Guide RV owners through expensive, interconnected upgrade decisions rather than generic camping gear.',
    buyer: 'RV owners and retired couples upgrading a vehicle over many years.',
    clusters: ['Lithium banks', 'Solar kits', 'Generators', 'Refrigeration', 'Connectivity'],
    why: 'A single owner can buy an entire system of high-ticket upgrades, replacements, and accessories.',
    risk: 'Electrical safety, installation complexity, and model compatibility demand expert review.',
    gate: 'Recruit or partner with one credible RV owner and validate three complete system journeys.',
    defaultStage: 'Validate', defaultProgress: 7, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Map the complete RV power stack and its compatibility decisions.'
  },
  {
    id: 'serious-woodworking', rank: 6, name: 'Serious Woodworking', wave: 2, score: 87, confidence: 62, priority: 'Core bet',
    tagline: 'A workshop grows one machine, jig, and upgrade at a time.',
    thesis: 'Serve committed hobbyists building capable home workshops, with machines as entry points and accessories as the long game.',
    buyer: 'Experienced DIYers and 50+ hobbyists investing in a serious workshop.',
    clusters: ['Track saws', 'CNC routers', 'Router tables', 'Dust extraction', 'Precision tools'],
    why: 'No practical ceiling to equipment ownership and an unusually deep accessory graph.',
    risk: 'Credibility requires real use, safety rigor, and strong technical editors.',
    gate: 'Secure hands-on expertise and identify an underserved workshop size or skill-level angle.',
    defaultStage: 'Backlog', defaultProgress: 2, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Interview five serious home woodworkers about their upgrade path.'
  },
  {
    id: 'car-tech', rank: 7, name: 'Car Tech', wave: 2, score: 86, confidence: 72, priority: 'Core bet',
    tagline: 'Modern upgrades for the car people already own.',
    thesis: 'Help drivers add safety, diagnostics, connectivity, and convenience without replacing the car.',
    buyer: 'Drivers who research upgrades carefully and install some equipment themselves.',
    clusters: ['Dash cams', 'CarPlay units', 'Diagnostics', 'Jump starters', 'Inflators'],
    why: 'Commercial intent is direct, products are demonstrable, and automotive economics are attractive.',
    risk: 'Compatibility matrices can become a maintenance burden.',
    gate: 'Prove a scalable vehicle-compatibility model and test the first five core products.',
    defaultStage: 'Backlog', defaultProgress: 2, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Design the compatibility data model before writing content.'
  },
  {
    id: 'justdaddit', rank: 2, name: 'JustDaddit', wave: 1, score: 90, confidence: 61, priority: 'Selected next',
    tagline: 'Research-backed gear for family adventures, projects, travel, and outdoor play.',
    thesis: 'Help parents choose expensive family gear through transparent evidence, realistic starting cost, repairability, compatibility, and clear best-for and skip-if guidance.',
    buyer: 'US parents and grandparents buying durable gear for children roughly 4-12 across RC, ride-ons, backyard play, camping, and road trips.',
    clusters: ['RC cars', 'Ride-ons', 'Backyard play', 'Family camping', 'Roof cargo'],
    why: 'The domain is owned, the 69-page launch map is approved, and the founder identity plus transparent Research Review model give the brand a credible starting point.',
    risk: 'The Daddit name is strongly associated with Reddit’s fatherhood community, while an overly broad launch would collapse into generic parenting content.',
    gate: 'Publish and visually approve the six-page prototype, clear the name, structure the first ten product records, and validate the benchmark batch before scaling.',
    defaultStage: 'Validate', defaultProgress: 12, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Create the empty public justdaddit repository, then publish and visually QA the six-page prototype.'
  },
  {
    id: 'creator-studio', rank: 8, name: 'Creator Studio', wave: 2, score: 83, confidence: 61, priority: 'High',
    tagline: 'Professional production gear for small teams and serious creators.',
    thesis: 'Translate complex production equipment into complete working setups for solo creators, podcasters, and compact studios.',
    buyer: 'Revenue-generating creators upgrading from consumer gear to dependable professional systems.',
    clusters: ['Cinema cameras', 'Audio', 'Lighting', 'Monitoring', 'Studio systems'],
    why: 'High tickets, constant product releases, and strong setup-level content beyond simple reviews.',
    risk: 'Competition is intense and expertise decays quickly as products change.',
    gate: 'Choose one creator type and prove access to credible testing or professional contributors.',
    defaultStage: 'Backlog', defaultProgress: 1, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Select one wedge: podcast studio, solo video, or livestream production.'
  },
  {
    id: 'classic-garage', rank: 9, name: 'Classic Garage', wave: 3, score: 83, confidence: 55, priority: 'High',
    tagline: 'Build the home garage a restoration deserves.',
    thesis: 'Cover the equipment around classic-car ownership rather than the cars themselves.',
    buyer: 'Affluent restorers who invest in lifts, air, diagnostics, detailing, paint, and storage.',
    clusters: ['Vehicle lifts', 'Compressors', 'Diagnostics', 'Detailing', 'Garage storage'],
    why: 'The restoration is emotional, long-term, and equipment-intensive.',
    risk: 'Large products may convert off Amazon and require direct manufacturer relationships.',
    gate: 'Secure three direct programs and validate that equipment queries are not dominated by retailers.',
    defaultStage: 'Backlog', defaultProgress: 1, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Build the 12-month home-garage upgrade ladder.'
  },
  {
    id: 'serious-cycling', rank: 10, name: 'Serious Cycling', wave: 3, score: 82, confidence: 61, priority: 'High',
    tagline: 'Training, upgrades, and comfort for riders who keep going.',
    thesis: 'Serve committed adult cyclists with connected training gear, transport, measurement, recovery, and premium accessories.',
    buyer: '40+ cyclists with disposable income and a constant appetite for measurable improvement.',
    clusters: ['Smart trainers', 'Bike computers', 'Power meters', 'Bike racks', 'Recovery'],
    why: 'A strong upgrade culture and frequent research across hardware, software, and accessories.',
    risk: 'Expert audiences reject shallow content quickly.',
    gate: 'Recruit a credible rider and validate non-bike product clusters first.',
    defaultStage: 'Backlog', defaultProgress: 1, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Audit smart-trainer and power-meter SERPs for weak specialist coverage.'
  },
  {
    id: 'birding-wildlife', rank: 11, name: 'Birding & Wildlife', wave: 3, score: 81, confidence: 58, priority: 'High',
    tagline: 'Optics, observation, and photography for a lifelong hobby.',
    thesis: 'Own the equipment progression from a first good pair of binoculars into scopes, cameras, feeders, and field systems.',
    buyer: 'Birders and wildlife observers with time, patience, and an appetite for better optics.',
    clusters: ['Binoculars', 'Spotting scopes', 'Feeder cameras', 'Trail cameras', 'Thermal optics'],
    why: 'Accessible entry point, deep upgrade ladder, and a natural crossover into photography.',
    risk: 'Premium optics demand first-hand comparisons and technical credibility.',
    gate: 'Define a test protocol and validate a birding-to-photography content path.',
    defaultStage: 'Backlog', defaultProgress: 1, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Design the binocular and spotting-scope testing scorecard.'
  },
  {
    id: 'backyard-cooking', rank: 12, name: 'Backyard Cooking', wave: 3, score: 80, confidence: 66, priority: 'High',
    tagline: 'The outdoor kitchen, built decision by decision.',
    thesis: 'Guide buyers through complete outdoor cooking setups, not isolated grill reviews.',
    buyer: 'Homeowners turning patios into durable entertaining spaces.',
    clusters: ['Pellet grills', 'Pizza ovens', 'Griddles', 'Kamados', 'Outdoor cooling'],
    why: 'High intent, visual content, enthusiast communities, and a strong add-on ecosystem.',
    risk: 'Strong incumbents and seasonal traffic require distinct setup and use-case angles.',
    gate: 'Find a narrow opening wedge and secure original cooking evidence.',
    defaultStage: 'Backlog', defaultProgress: 1, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Compare the economics of pizza ovens, pellet grills, and outdoor kitchens.'
  },
  {
    id: 'home-climate', rank: 13, name: 'Home Climate', wave: 4, score: 79, confidence: 64, priority: 'High',
    tagline: 'Make uncomfortable rooms livable again.',
    thesis: 'Solve specific heat, humidity, air-quality, and water problems with decision tools built around rooms and climates.',
    buyer: 'Homeowners and renters with an urgent comfort problem and a measurable desired outcome.',
    clusters: ['Portable AC', 'Dehumidifiers', 'Air purifiers', 'Humidifiers', 'Water systems'],
    why: 'Strong problem-led searches and products buyers compare immediately before purchasing.',
    risk: 'Seasonality and health-adjacent claims require careful editorial standards.',
    gate: 'Choose one climate problem and verify year-round content depth beyond “best” lists.',
    defaultStage: 'Backlog', defaultProgress: 0, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Validate dehumidification as the opening problem cluster.'
  },
  {
    id: 'boat-systems', rank: 14, name: 'Boat Systems', wave: 4, score: 79, confidence: 48, priority: 'High',
    tagline: 'Electronics and power for owners who upgrade every season.',
    thesis: 'Make marine electronics, power, navigation, and fishing systems understandable as compatible stacks.',
    buyer: 'Boat owners investing in reliability, navigation, fishing performance, and onboard comfort.',
    clusters: ['Chartplotters', 'Marine radar', 'Autopilot', 'Trolling motors', 'Battery systems'],
    why: 'Very high tickets and owners who expect to keep improving a costly asset.',
    risk: 'Compatibility, installation, and safety create a high expertise threshold.',
    gate: 'Secure marine expertise and prove access to offers outside a single marketplace.',
    defaultStage: 'Backlog', defaultProgress: 0, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Map one complete small-boat electronics stack.'
  },
  {
    id: 'serious-gardening', rank: 15, name: 'Serious Gardening', wave: 4, score: 79, confidence: 56, priority: 'High',
    tagline: 'Infrastructure and machines for gardeners who outgrow hand tools.',
    thesis: 'Serve ambitious gardeners moving into greenhouses, powered equipment, irrigation, and controlled growing.',
    buyer: 'Homeowners with land, time, and plans larger than a few raised beds.',
    clusters: ['Greenhouses', 'Tillers', 'Chippers', 'Hydroponics', 'Irrigation'],
    why: 'The hobby expands into systems and infrastructure with strong visual and educational content.',
    risk: 'Seasonal demand and broad topic scope can dilute commercial focus.',
    gate: 'Choose infrastructure or powered equipment as the entry lane, not both.',
    defaultStage: 'Backlog', defaultProgress: 0, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Validate greenhouse systems as the first commercial cluster.'
  },
  {
    id: 'audiophile', rank: 16, name: 'System Audio', wave: 4, score: 78, confidence: 54, priority: 'High',
    tagline: 'Build a better listening system without buying nonsense.',
    thesis: 'Guide system-level audio decisions where component matching matters more than isolated specifications.',
    buyer: 'Music lovers upgrading speakers, amplification, sources, headphones, and room setup.',
    clusters: ['Speakers', 'Amplifiers', 'Turntables', 'Headphones', 'Room systems'],
    why: 'Obsessive comparison behavior, expensive components, and endless upgrade paths.',
    risk: 'Trust is difficult in a niche crowded with opinion, jargon, and questionable claims.',
    gate: 'Create a transparent listening protocol and identify a credible editorial voice.',
    defaultStage: 'Backlog', defaultProgress: 0, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Identify the first system budget and room-size wedge.'
  },
  {
    id: 'golf-tech', rank: 17, name: 'Golf Tech', wave: 5, score: 77, confidence: 58, priority: 'Experiment',
    tagline: 'Measurement and practice equipment for golfers chasing progress.',
    thesis: 'Focus on technology and at-home improvement rather than generic clubs and apparel.',
    buyer: 'Golfers who spend on feedback, practice convenience, and small performance gains.',
    clusters: ['Launch monitors', 'Simulators', 'Rangefinders', 'Push carts', 'Training systems'],
    why: 'High willingness to pay and strong research behavior around measurable improvement.',
    risk: 'Major golf publishers and YouTube reviewers own many obvious queries.',
    gate: 'Find a home-practice or space-constrained angle that large golf sites handle poorly.',
    defaultStage: 'Backlog', defaultProgress: 0, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Audit compact home golf-simulator queries.'
  },
  {
    id: 'sewing-studio', rank: 18, name: 'Sewing Studio', wave: 5, score: 76, confidence: 49, priority: 'Experiment',
    tagline: 'Machines and workflow for serious sewing and quilting.',
    thesis: 'Cover the equipment progression from capable home machines to complete quilting and embroidery studios.',
    buyer: 'Experienced makers whose hobby or small business justifies better machines and workflow tools.',
    clusters: ['Sewing machines', 'Sergers', 'Quilting', 'Embroidery', 'Cutting systems'],
    why: 'High machine prices, repeat accessories, and communities that value deep guidance.',
    risk: 'Brand loyalty and dealer networks may limit marketplace conversion.',
    gate: 'Verify direct affiliate programs and recruit an experienced operator.',
    defaultStage: 'Backlog', defaultProgress: 0, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Research direct programs and the dealer-versus-online purchase split.'
  },
  {
    id: 'model-railway', rank: 19, name: 'Model Railway Lab', wave: 5, score: 75, confidence: 45, priority: 'Experiment',
    tagline: 'A lifetime hobby where technology meets collecting.',
    thesis: 'Own the modern model railway workshop across control, scenery, electronics, fabrication, and collecting.',
    buyer: 'Technically inclined hobbyists who build and upgrade layouts over decades.',
    clusters: ['Train sets', 'Digital control', 'Locomotives', 'Airbrushing', 'Laser cutting'],
    why: 'Deep collector economics and adjacent spending on tools, electronics, cameras, and fabrication.',
    risk: 'Demand may be smaller than the product depth makes it appear.',
    gate: 'Measure actual commercial query volume and community purchase frequency before branding.',
    defaultStage: 'Backlog', defaultProgress: 0, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Quantify the reachable audience and top five equipment categories.'
  },
  {
    id: 'radio-bench', rank: 20, name: 'Radio Bench', wave: 5, score: 74, confidence: 44, priority: 'Experiment',
    tagline: 'Technical radio systems explained for buyers who enjoy the details.',
    thesis: 'Serve ham-radio operators with setup-led comparisons across radios, receivers, antennas, tuners, and test equipment.',
    buyer: 'Technical hobbyists who read deeply and invest repeatedly in a station.',
    clusters: ['HF radios', 'Scanners', 'SDR systems', 'Analyzers', 'Tuners'],
    why: 'Comparison-heavy behavior, long-form tolerance, and a strong accessory ladder.',
    risk: 'Smaller audience and high credibility expectations limit shallow scale.',
    gate: 'Secure expert review and validate non-obvious keyword depth.',
    defaultStage: 'Backlog', defaultProgress: 0, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Map the beginner-to-serious station upgrade path.'
  }
];

const WAVES = [
  { id: 0, label: 'Foundation', timing: 'Now', title: 'Prove the operating system', sites: ['coffeedant'], gate: 'Templates, data, distribution, tracking, and revenue measurement all work.' },
  { id: 1, label: 'Wave 1', timing: 'Next', title: 'Validate the first repeatable bets', sites: ['justdaddit', 'smart-yard', 'cleaning-machines'], gate: 'Each site passes demand, competition, offer, and evidence checks.' },
  { id: 2, label: 'Wave 2', timing: 'After proof', title: 'Repeat the system across four models', sites: ['rv-systems', 'serious-woodworking', 'car-tech', 'creator-studio'], gate: 'At least two active properties show rankings, affiliate clicks, or revenue.' },
  { id: 3, label: 'Wave 3', timing: 'Expansion', title: 'Add enthusiast audiences', sites: ['classic-garage', 'serious-cycling', 'birding-wildlife', 'backyard-cooking'], gate: 'Editorial expertise is secured and shared production remains below capacity.' },
  { id: 4, label: 'Wave 4', timing: 'Scale', title: 'Move into complex infrastructure', sites: ['home-climate', 'boat-systems', 'serious-gardening', 'audiophile'], gate: 'Direct programs, compatibility data, and specialist contributors are ready.' },
  { id: 5, label: 'Wave 5', timing: 'Options', title: 'Exercise the long-tail options', sites: ['golf-tech', 'sewing-studio', 'model-railway', 'radio-bench'], gate: 'Research proves these can beat the next investment in an existing winner.' }
];

const STAGES = ['Backlog', 'Validate', 'Build', 'Active', 'Scale', 'Hold'];
const STORAGE_KEY = 'affiliate-kingdom-state-v1';
const STATE_VERSION = 4;
const OPERATIONS = window.SITE_OPERATIONS || {};
const niches = (window.AFFILIATE_NICHES || []).map((item) => item.siteFit === 'family-upgrade' ? { ...item, siteFit: 'justdaddit' } : item);
const defaultState = {
  version: STATE_VERSION,
  sites: Object.fromEntries(PORTFOLIO.map((site) => [site.id, {
    stage: site.defaultStage,
    progress: site.defaultProgress,
    pages: site.defaultPages,
    visits: site.defaultVisits,
    clicks: site.defaultClicks,
    revenue: site.defaultRevenue,
    nextAction: site.nextAction,
    notes: '',
  }])),
  shortlist: [],
  operations: Object.fromEntries(Object.entries(OPERATIONS).map(([id, operation]) => [id, {
    completedActions: operation.actions.filter((action) => action.defaultComplete).map((action) => action.id),
    workstreamProgress: Object.fromEntries(operation.workstreams.map((workstream) => [workstream.id, workstream.progress])),
    contentStatus: Object.fromEntries(operation.content.map((item) => [item.id, item.status])),
    decisionStatus: Object.fromEntries(operation.decisions.map((decision) => [decision.id, decision.status])),
    notes: '',
    updatedAt: null,
  }])),
};

let state = loadState();
let activeView = 'overview';
let nicheLimit = 50;
const activeSiteTabs = { coffeedant: 'control', justdaddit: 'control' };

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (!saved) return structuredClone(defaultState);
    const merged = structuredClone(defaultState);
    for (const site of PORTFOLIO) merged.sites[site.id] = { ...merged.sites[site.id], ...(saved.sites?.[site.id] || {}) };
    merged.shortlist = Array.isArray(saved.shortlist) ? saved.shortlist : [];
    for (const id of Object.keys(OPERATIONS)) {
      merged.operations[id] = {
        ...merged.operations[id],
        ...(saved.operations?.[id] || {}),
        completedActions: Array.isArray(saved.operations?.[id]?.completedActions) ? saved.operations[id].completedActions : merged.operations[id].completedActions,
        workstreamProgress: { ...merged.operations[id].workstreamProgress, ...(saved.operations?.[id]?.workstreamProgress || {}) },
        contentStatus: { ...merged.operations[id].contentStatus, ...(saved.operations?.[id]?.contentStatus || {}) },
        decisionStatus: { ...merged.operations[id].decisionStatus, ...(saved.operations?.[id]?.decisionStatus || {}) },
      };
    }
    if (Number(saved.version || 0) < STATE_VERSION) {
      const justDaddit = merged.operations.justdaddit;
      if (justDaddit) {
        justDaddit.completedActions = [...new Set([
          ...justDaddit.completedActions,
          'domain-selected',
          'market',
          'hubs-approved',
          'identity-approved',
          'brand-system',
          'prototype',
        ])];
        justDaddit.decisionStatus = {
          ...justDaddit.decisionStatus,
          market: 'Approved',
          audience: 'Approved',
          wedge: 'Approved',
          identity: 'Approved',
          'evidence-model': 'Approved',
          'brand-breadth': 'Approved',
        };
        justDaddit.workstreamProgress = {
          ...justDaddit.workstreamProgress,
          research: 82,
          positioning: 90,
          architecture: 68,
          evidence: 72,
          build: 28,
          monetization: 8,
        };
        justDaddit.updatedAt = '2026-09-17T21:39:00.000Z';
      }
    }
    merged.version = STATE_VERSION;
    return merged;
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  const label = document.querySelector('.sync-state span');
  if (label) {
    label.textContent = 'Saved';
    setTimeout(() => { label.textContent = 'Saved locally'; }, 900);
  }
}

function escapeHTML(value = '') {
  return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

function siteById(id) { return PORTFOLIO.find((site) => site.id === id); }
function stateFor(id) { return state.sites[id]; }
function operationStateFor(id) { return state.operations?.[id]; }
function stageClass(stage) { return stage.toLowerCase().replaceAll(' ', '-'); }
function money(value) { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Number(value) || 0); }

function siteProgress(id) {
  const operation = OPERATIONS[id];
  const operationState = operationStateFor(id);
  if (!operation || !operationState) return Number(stateFor(id).progress || 0);
  const totalWeight = operation.workstreams.reduce((sum, stream) => sum + Number(stream.weight || 1), 0);
  const weighted = operation.workstreams.reduce((sum, stream) => sum + Number(operationState.workstreamProgress[stream.id] ?? stream.progress) * Number(stream.weight || 1), 0);
  return Math.round(weighted / totalWeight);
}

function operationNextAction(id) {
  const operation = OPERATIONS[id];
  const operationState = operationStateFor(id);
  if (!operation || !operationState) return stateFor(id).nextAction;
  return operation.actions.find((action) => !operationState.completedActions.includes(action.id))?.title || 'Review performance and define the next gate.';
}

function goToView(view) {
  activeView = view;
  document.querySelectorAll('[data-view-panel]').forEach((panel) => panel.classList.toggle('is-visible', panel.dataset.viewPanel === view));
  document.querySelectorAll('.nav-item').forEach((button) => button.classList.toggle('is-active', button.dataset.view === view));
  const titles = {
    overview: ['Portfolio control', 'Overview'],
    coffeedant: ['Active property', 'Coffeedant'],
    justdaddit: ['Active property', 'JustDaddit'],
    portfolio: ['Portfolio map', '20-site portfolio'],
    vault: ['Research database', 'Niche vault'],
    roadmap: ['Release system', 'Roadmap'],
    command: ['Performance ledger', 'Command center'],
  };
  document.getElementById('viewEyebrow').textContent = titles[view][0];
  document.getElementById('viewTitle').textContent = titles[view][1];
  document.querySelector('.sidebar').classList.remove('is-open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderOverview() {
  const fiveStars = niches.filter((item) => item.potential === 5).length;
  const active = Object.keys(OPERATIONS).length;
  const avgProgress = Math.round(PORTFOLIO.reduce((sum, site) => sum + siteProgress(site.id), 0) / PORTFOLIO.length);
  document.getElementById('readinessScore').textContent = avgProgress;
  const degrees = Math.max(10, avgProgress * 3.6);
  document.getElementById('readinessRing').style.background = `conic-gradient(var(--acid) ${degrees}deg, transparent ${degrees}deg)`;

  const metrics = [
    ['20', 'sites in the portfolio', '◆'],
    [niches.length, 'researched product niches', '⌕'],
    [fiveStars, 'five-star opportunities', '★'],
    [`${active}/3`, 'active build slots used', '↗'],
  ];
  document.getElementById('overviewMetrics').innerHTML = metrics.map(([value, label, icon]) => `
    <article class="metric-card"><div class="metric-top"><span class="eyebrow">Portfolio</span><span class="metric-icon">${icon}</span></div><strong>${value}</strong><p>${label}</p></article>
  `).join('');

  const top = [...PORTFOLIO].sort((a, b) => b.score - a.score).slice(0, 6);
  document.getElementById('topSites').innerHTML = `<div class="ranking-list">${top.map((site, index) => `
    <button class="ranking-row text-button" ${OPERATIONS[site.id] ? `data-jump="${site.id}"` : `data-site-open="${site.id}"`} style="width:100%;text-align:left">
      <span class="rank-num">0${index + 1}</span>
      <span><strong>${escapeHTML(site.name)}</strong><small>${escapeHTML(site.priority)} · Wave ${site.wave}</small></span>
      <span class="mini-bar"><i style="width:${site.score}%"></i></span>
      <span class="ranking-score">${site.score}</span>
    </button>`).join('')}</div>`;

  const ordered = getActionQueue().slice(0, 5);
  document.getElementById('nextActions').innerHTML = ordered.map(({ site, data }) => `<li><strong>${escapeHTML(data.nextAction)}</strong><span>${escapeHTML(site.name)} · ${escapeHTML(data.stage)}</span></li>`).join('');

  document.getElementById('waveStrip').innerHTML = WAVES.map((wave) => `
    <article class="wave-block ${wave.id === currentWave() ? 'is-current' : ''}">
      <span>${escapeHTML(wave.label)} · ${escapeHTML(wave.timing)}</span><h4>${escapeHTML(wave.title)}</h4>
      <p>${wave.sites.map((id) => siteById(id).name).join(', ')}</p><b>${String(wave.sites.length).padStart(2, '0')}</b>
    </article>`).join('');
}

function getActionQueue() {
  const order = { Active: 0, Build: 1, Validate: 2, Scale: 3, Backlog: 4, Hold: 5 };
  return PORTFOLIO.map((site) => ({ site, data: { ...stateFor(site.id), nextAction: operationNextAction(site.id) } })).sort((a, b) => {
    const stageDiff = order[a.data.stage] - order[b.data.stage];
    return stageDiff || a.site.wave - b.site.wave || b.site.score - a.site.score;
  });
}

function currentWave() {
  const incomplete = WAVES.find((wave) => wave.sites.some((id) => siteProgress(id) < 100));
  return incomplete?.id ?? 5;
}

function populateFilters() {
  const waveFilter = document.getElementById('siteWaveFilter');
  waveFilter.innerHTML = '<option value="all">All waves</option>' + WAVES.map((wave) => `<option value="${wave.id}">${escapeHTML(wave.label)}</option>`).join('');
  document.getElementById('siteStageFilter').innerHTML = '<option value="all">All stages</option>' + STAGES.map((stage) => `<option value="${stage}">${stage}</option>`).join('');
  const categories = [...new Set(niches.map((item) => item.category))].sort();
  document.getElementById('categoryFilter').innerHTML = '<option value="all">All categories</option>' + categories.map((category) => `<option value="${escapeHTML(category)}">${escapeHTML(category)}</option>`).join('');
  document.getElementById('fitFilter').innerHTML = '<option value="all">All site fits</option><option value="unassigned">Unassigned ideas</option>' + PORTFOLIO.map((site) => `<option value="${site.id}">${escapeHTML(site.name)}</option>`).join('');
}

function renderPortfolio() {
  const query = document.getElementById('siteSearch').value.toLowerCase().trim();
  const wave = document.getElementById('siteWaveFilter').value;
  const stage = document.getElementById('siteStageFilter').value;
  const sort = document.getElementById('siteSort').value;
  let list = PORTFOLIO.filter((site) => {
    const haystack = `${site.name} ${site.tagline} ${site.clusters.join(' ')}`.toLowerCase();
    return (!query || haystack.includes(query)) && (wave === 'all' || String(site.wave) === wave) && (stage === 'all' || stateFor(site.id).stage === stage);
  });
  list.sort((a, b) => sort === 'wave' ? a.wave - b.wave || a.rank - b.rank : sort === 'progress' ? siteProgress(b.id) - siteProgress(a.id) : b.score - a.score);
  document.getElementById('portfolioGrid').innerHTML = list.length ? list.map(siteCard).join('') : '<div class="empty-state">No sites match these filters.</div>';
}

function siteCard(site) {
  const data = stateFor(site.id);
  const progress = siteProgress(site.id);
  const matched = niches.filter((item) => item.siteFit === site.id).length;
  return `<article class="site-card" data-rank="${String(site.rank).padStart(2, '0')}">
    <div class="site-top"><span class="stage-badge ${stageClass(data.stage)}">${escapeHTML(data.stage)}</span><span class="site-score"><strong>${site.score}</strong><span>/100</span></span></div>
    <h3>${escapeHTML(site.name)}</h3><p class="site-tagline">${escapeHTML(site.tagline)}</p>
    <div class="cluster-tags">${site.clusters.slice(0, 4).map((cluster) => `<span>${escapeHTML(cluster)}</span>`).join('')}</div>
    <div class="site-progress"><div class="progress-meta"><span>Build progress</span><span>${progress}%</span></div><div class="progress-track"><i style="width:${progress}%"></i></div></div>
    <div class="site-card-footer"><span>Wave ${site.wave} · ${matched} mapped niches</span><button class="site-open" ${OPERATIONS[site.id] ? `data-jump="${site.id}"` : `data-site-open="${site.id}"`} aria-label="Open ${escapeHTML(site.name)}">↗</button></div>
  </article>`;
}

function renderVaultSummary() {
  const mapped = niches.filter((item) => item.siteFit !== 'unassigned').length;
  const highTicket = niches.filter((item) => item.priceMax >= 2000).length;
  const categories = new Set(niches.map((item) => item.category)).size;
  const shortlisted = state.shortlist.length;
  const values = [[niches.length, 'Total niches'], [categories, 'Categories'], [highTicket, '$2k+ opportunities'], [shortlisted, 'Shortlisted']];
  document.getElementById('vaultSummary').innerHTML = values.map(([value, label]) => `<div class="vault-pill"><strong>${value}</strong><span>${label}</span></div>`).join('');
  document.getElementById('vaultSummary').dataset.mapped = mapped;
}

function getFilteredNiches() {
  const query = document.getElementById('nicheSearch').value.toLowerCase().trim();
  const category = document.getElementById('categoryFilter').value;
  const potential = document.getElementById('potentialFilter').value;
  const fit = document.getElementById('fitFilter').value;
  const sort = document.getElementById('nicheSort').value;
  const list = niches.filter((item) => {
    const haystack = `${item.category} ${item.product} ${item.sourceBatch}`.toLowerCase();
    const potentialMatch = potential === 'all' || item.potential >= Number(potential);
    return (!query || haystack.includes(query)) && (category === 'all' || item.category === category) && potentialMatch && (fit === 'all' || item.siteFit === fit);
  });
  list.sort((a, b) => {
    if (sort === 'ticket') return b.priceMax - a.priceMax || b.potential - a.potential;
    if (sort === 'category') return a.category.localeCompare(b.category) || b.potential - a.potential;
    if (sort === 'id') return a.id - b.id;
    return b.potential - a.potential || b.priceMax - a.priceMax;
  });
  return list;
}

function renderNiches(resetLimit = false) {
  if (resetLimit) nicheLimit = 50;
  const list = getFilteredNiches();
  const visible = list.slice(0, nicheLimit);
  document.getElementById('nicheTableBody').innerHTML = visible.map((item) => {
    const fit = siteById(item.siteFit);
    const saved = state.shortlist.includes(item.id);
    return `<tr>
      <td class="row-id">${String(item.id).padStart(3, '0')}</td><td>${escapeHTML(item.category)}</td><td class="product-cell">${escapeHTML(item.product)}</td>
      <td>${escapeHTML(item.priceLabel)}</td><td><span class="stars">${'★'.repeat(item.potential)}${'☆'.repeat(Math.max(0, 5 - item.potential))}</span></td>
      <td><span class="fit-chip ${fit ? '' : 'unassigned'}">${fit ? escapeHTML(fit.name) : 'Idea bank'}</span></td>
      <td><button class="shortlist-button ${saved ? 'is-saved' : ''}" data-shortlist="${item.id}" aria-label="${saved ? 'Remove from' : 'Add to'} shortlist">${saved ? '★' : '+'}</button></td>
    </tr>`;
  }).join('');
  document.getElementById('nicheCount').textContent = `Showing ${Math.min(nicheLimit, list.length)} of ${list.length} matching niches`;
  document.getElementById('loadMoreNiches').hidden = nicheLimit >= list.length;
}

function renderRoadmap() {
  document.getElementById('roadmapRail').innerHTML = WAVES.map((wave) => `
    <article class="roadmap-wave ${wave.id === currentWave() ? 'is-current' : ''}">
      <div class="wave-index"><strong>${String(wave.id).padStart(2, '0')}</strong><span>${escapeHTML(wave.timing)}</span></div>
      <div><h3>${escapeHTML(wave.title)}</h3><p>${wave.sites.length} ${wave.sites.length === 1 ? 'property' : 'properties'} in this release stage</p><div class="wave-sites">${wave.sites.map((id) => `<span>${escapeHTML(siteById(id).name)}</span>`).join('')}</div></div>
      <div class="wave-gate"><span>Unlock condition</span><strong>${escapeHTML(wave.gate)}</strong></div>
    </article>`).join('');
}

function safeHref(value = '') {
  try {
    const url = new URL(value, window.location.href);
    return ['http:', 'https:'].includes(url.protocol) ? url.href : '#';
  } catch {
    return '#';
  }
}

function renderSiteDashboard(id) {
  const operation = OPERATIONS[id];
  const operationState = operationStateFor(id);
  const target = document.getElementById(`${id}Dashboard`);
  if (!operation || !operationState || !target) return;

  const progress = siteProgress(id);
  const completedActions = operationState.completedActions.length;
  const published = operation.content.filter((item) => operationState.contentStatus[item.id] === 'Published').length;
  const tab = activeSiteTabs[id] || 'control';
  const tabs = [
    ['control', 'Control'],
    ['research', 'Research'],
    ['plan', 'Build plan'],
    ['content', `Content (${operation.content.length})`],
  ];
  const operationLinks = operation.links.map((link) => `<a href="${safeHref(link.href)}" target="_blank" rel="noreferrer">${escapeHTML(link.label)} <span>↗</span></a>`).join('');

  target.innerHTML = `
    <header class="ops-hero ops-hero-${id}">
      <div class="ops-hero-main">
        <div class="ops-status-line"><span class="stage-badge ${stageClass(operation.statusTone)}">${escapeHTML(operation.stage)}</span><span>Verified ${escapeHTML(operation.lastVerified)}</span></div>
        <span class="eyebrow light">${escapeHTML(operation.dashboardLabel)}</span>
        <h2>${escapeHTML(operation.name)}</h2>
        <p>${escapeHTML(operation.summary)}</p>
        <div class="ops-link-row">${operationLinks}</div>
      </div>
      <div class="ops-hero-side">
        <span class="eyebrow light">Weighted readiness</span>
        <strong>${progress}<small>%</small></strong>
        <div class="ops-hero-track"><i style="width:${progress}%"></i></div>
        <p>${completedActions}/${operation.actions.length} actions complete · ${published}/${operation.content.length} pipeline items published</p>
      </div>
    </header>

    <section class="ops-objective"><span class="eyebrow">Current objective</span><p>${escapeHTML(operation.objective)}</p></section>

    <div class="ops-metrics">${operation.metrics.map((metric) => `
      <article><strong>${escapeHTML(metric.value)}</strong><span>${escapeHTML(metric.label)}</span><small>${escapeHTML(metric.note)}</small></article>
    `).join('')}</div>

    <nav class="ops-tabs" aria-label="${escapeHTML(operation.name)} dashboard sections">
      ${tabs.map(([value, label]) => `<button class="${tab === value ? 'is-active' : ''}" data-site-tab="${value}" data-site="${id}">${escapeHTML(label)}</button>`).join('')}
    </nav>

    <div class="ops-tab-panel ${tab === 'control' ? 'is-active' : ''}" data-ops-tab-panel="control">
      <div class="ops-control-grid">
        <section class="panel ops-workstreams">
          <div class="panel-heading"><div><span class="eyebrow">Progress tracker</span><h3>Workstreams</h3></div><span class="tiny-badge">Editable</span></div>
          <div class="workstream-list">${operation.workstreams.map((stream) => {
            const value = Number(operationState.workstreamProgress[stream.id] ?? stream.progress);
            return `<article class="workstream-row">
              <div class="workstream-heading"><div><strong>${escapeHTML(stream.title)}</strong><span>${escapeHTML(stream.outcome)}</span></div><b>${value}%</b></div>
              <input type="range" min="0" max="100" step="1" value="${value}" data-workstream-progress data-site="${id}" data-workstream="${stream.id}" aria-label="${escapeHTML(stream.title)} progress">
              <p><em>Next:</em> ${escapeHTML(stream.next)}</p>
            </article>`;
          }).join('')}</div>
        </section>

        <section class="panel ops-actions">
          <div class="panel-heading"><div><span class="eyebrow">Execution queue</span><h3>Next actions</h3></div><span class="ops-count">${completedActions}/${operation.actions.length}</span></div>
          <div class="action-checklist">${operation.actions.map((action) => {
            const done = operationState.completedActions.includes(action.id);
            return `<label class="action-row ${done ? 'is-done' : ''}">
              <input type="checkbox" data-action-toggle data-site="${id}" data-action="${action.id}" ${done ? 'checked' : ''}>
              <span class="action-check" aria-hidden="true">${done ? '✓' : ''}</span>
              <span class="action-copy"><span><b>${escapeHTML(action.priority)}</b><em>${escapeHTML(action.timing)}</em></span><strong>${escapeHTML(action.title)}</strong><small>${escapeHTML(action.detail)}</small><i>${escapeHTML(action.owner)}</i></span>
            </label>`;
          }).join('')}</div>
        </section>
      </div>

      <section class="ops-blocker-section">
        <div class="panel-heading"><div><span class="eyebrow">Risk register</span><h3>Blockers and constraints</h3></div></div>
        <div class="blocker-grid">${operation.blockers.map((blocker) => `<article><span class="risk-level risk-${blocker.level.toLowerCase()}">${escapeHTML(blocker.level)}</span><h4>${escapeHTML(blocker.title)}</h4><p>${escapeHTML(blocker.detail)}</p></article>`).join('')}</div>
      </section>

      <div class="ops-control-grid lower-grid">
        <section class="panel ops-decisions">
          <div class="panel-heading"><div><span class="eyebrow">Decision log</span><h3>Choices that change the plan</h3></div></div>
          <div class="decision-list">${operation.decisions.map((decision) => `<article>
            <div><strong>${escapeHTML(decision.title)}</strong><p>${escapeHTML(decision.recommendation)}</p><small>${escapeHTML(decision.impact)}</small></div>
            <select data-decision-status data-site="${id}" data-decision="${decision.id}" aria-label="${escapeHTML(decision.title)} status">
              ${['Open', 'Recommended', 'Required', 'Blocked', 'Approved', 'Rejected'].map((status) => `<option ${status === operationState.decisionStatus[decision.id] ? 'selected' : ''}>${status}</option>`).join('')}
            </select>
          </article>`).join('')}</div>
        </section>
        <section class="panel ops-notes">
          <span class="eyebrow">Operator notes</span><h3>What changed?</h3>
          <p>Record decisions, blockers, owners, and evidence. These notes are included in dashboard export.</p>
          <textarea data-operation-notes data-site="${id}" placeholder="Add an operating note...">${escapeHTML(operationState.notes || '')}</textarea>
          <div><span>${operationState.updatedAt ? `Updated ${escapeHTML(new Date(operationState.updatedAt).toLocaleString())}` : 'No manual update yet'}</span><button class="secondary-button" data-save-notes data-site="${id}">Save note</button></div>
        </section>
      </div>
    </div>

    <div class="ops-tab-panel ${tab === 'research' ? 'is-active' : ''}" data-ops-tab-panel="research">
      <section class="research-verdict"><span class="eyebrow light">Strategic verdict</span><p>${escapeHTML(operation.research.verdict)}</p></section>
      <div class="research-columns">
        <section class="panel"><span class="eyebrow">Why this can work</span><h3>Opportunity</h3><ul class="numbered-insights">${operation.research.opportunity.map((item, index) => `<li><b>${String(index + 1).padStart(2, '0')}</b><span>${escapeHTML(item)}</span></li>`).join('')}</ul></section>
        <section class="panel"><span class="eyebrow">How it should win</span><h3>Strategy</h3><ul class="numbered-insights">${operation.research.strategy.map((item, index) => `<li><b>${String(index + 1).padStart(2, '0')}</b><span>${escapeHTML(item)}</span></li>`).join('')}</ul></section>
      </div>
      ${operation.competitors ? `<section class="panel research-table-panel"><div class="panel-heading"><div><span class="eyebrow">Competitive map</span><h3>Who already serves this buyer?</h3></div><p class="panel-note">The opening is a sharper job, not a claim that competition is weak.</p></div><div class="table-wrap"><table class="data-table research-table"><thead><tr><th>Competitor</th><th>Focus</th><th>Strength</th><th>Opening</th></tr></thead><tbody>${operation.competitors.map((competitor) => `<tr><td class="product-cell"><a href="${safeHref(competitor.href)}" target="_blank" rel="noreferrer">${escapeHTML(competitor.name)} ↗</a></td><td>${escapeHTML(competitor.focus)}</td><td>${escapeHTML(competitor.strength)}</td><td>${escapeHTML(competitor.gap)}</td></tr>`).join('')}</tbody></table></div></section>` : ''}
      ${operation.monetization ? `<section class="panel research-table-panel"><div class="panel-heading"><div><span class="eyebrow">Revenue design</span><h3>Monetization paths</h3></div><p class="panel-note">Programs change. Reconfirm terms immediately before applying.</p></div><div class="table-wrap"><table class="data-table research-table"><thead><tr><th>Channel</th><th>Role</th><th>Current signal</th><th>Action</th></tr></thead><tbody>${operation.monetization.map((item) => `<tr><td class="product-cell"><a href="${safeHref(item.href)}" target="_blank" rel="noreferrer">${escapeHTML(item.channel)} ↗</a></td><td>${escapeHTML(item.role)}</td><td>${escapeHTML(item.economics)}</td><td>${escapeHTML(item.action)}</td></tr>`).join('')}</tbody></table></div></section>` : ''}
      <section class="panel sources-panel"><div class="panel-heading"><div><span class="eyebrow">Research trail</span><h3>Sources and verification</h3></div><p class="panel-note">Live terms and counts should be rechecked before decisions.</p></div><div class="source-grid">${operation.sources.map((source) => `<a href="${safeHref(source.href)}" target="_blank" rel="noreferrer"><strong>${escapeHTML(source.label)} <span>↗</span></strong><small>${escapeHTML(source.note)}</small></a>`).join('')}</div></section>
    </div>

    <div class="ops-tab-panel ${tab === 'plan' ? 'is-active' : ''}" data-ops-tab-panel="plan">
      <div class="plan-layout">
        <section class="phase-list">${operation.phases.map((phase, index) => `<article class="phase-card"><div class="phase-index">${String(index).padStart(2, '0')}</div><div class="phase-main"><span class="eyebrow">${escapeHTML(phase.label)} · ${escapeHTML(phase.timing)}</span><h3>${escapeHTML(phase.title)}</h3><div class="deliverable-tags">${phase.deliverables.map((item) => `<span>${escapeHTML(item)}</span>`).join('')}</div></div><div class="phase-gate"><span>Exit gate</span><strong>${escapeHTML(phase.gate)}</strong></div></article>`).join('')}</section>
        <aside class="panel standards-panel"><span class="eyebrow">Non-negotiables</span><h3>Editorial and build standard</h3><ol>${operation.standards.map((item) => `<li>${escapeHTML(item)}</li>`).join('')}</ol></aside>
      </div>
    </div>

    <div class="ops-tab-panel ${tab === 'content' ? 'is-active' : ''}" data-ops-tab-panel="content">
      <section class="pipeline-summary"><div><span class="eyebrow">Production map</span><h3>${operation.content.length} priority pages</h3></div><p>Status is editable and saved locally. A page count is not progress unless the evidence and commercial job are clear.</p></section>
      <div class="table-wrap"><table class="data-table content-pipeline"><thead><tr><th>#</th><th>Cluster</th><th>Page</th><th>Type</th><th>Intent</th><th>Evidence requirement</th><th>Status</th></tr></thead><tbody>${operation.content.map((item, index) => `<tr><td class="row-id">${String(index + 1).padStart(2, '0')}</td><td><span class="fit-chip">${escapeHTML(item.cluster)}</span></td><td class="product-cell">${escapeHTML(item.title)}</td><td>${escapeHTML(item.type)}</td><td>${escapeHTML(item.intent)}</td><td>${escapeHTML(item.evidence)}</td><td><select class="pipeline-select" data-content-status data-site="${id}" data-content="${item.id}">${['Idea', 'Research', 'Brief', 'Next', 'Queued', 'Drafting', 'Review', 'Published', 'Hold'].map((status) => `<option ${status === operationState.contentStatus[item.id] ? 'selected' : ''}>${status}</option>`).join('')}</select></td></tr>`).join('')}</tbody></table></div>
    </div>`;
}

function renderCommand() {
  const queue = getActionQueue().slice(0, 6);
  document.getElementById('criticalPath').innerHTML = queue.map(({ site, data }, index) => `<div class="critical-row"><b>0${index + 1}</b><span><strong>${escapeHTML(data.nextAction)}</strong><span>${escapeHTML(site.name)}</span></span><em>${escapeHTML(data.stage)}</em></div>`).join('');
  document.getElementById('kpiTableBody').innerHTML = PORTFOLIO.map((site) => {
    const data = stateFor(site.id);
    const rpm = data.visits > 0 ? Math.round((data.revenue / data.visits) * 1000) : 0;
    return `<tr data-kpi-row="${site.id}">
      <td class="product-cell"><button class="text-button" ${OPERATIONS[site.id] ? `data-jump="${site.id}"` : `data-site-open="${site.id}"`}>${escapeHTML(site.name)}</button></td>
      <td><span class="stage-badge ${stageClass(data.stage)}">${escapeHTML(data.stage)}</span></td>
      <td><input class="editable-input" type="number" min="0" data-kpi="pages" data-site="${site.id}" value="${Number(data.pages)}"></td>
      <td><input class="editable-input" type="number" min="0" data-kpi="visits" data-site="${site.id}" value="${Number(data.visits)}"></td>
      <td><input class="editable-input" type="number" min="0" data-kpi="clicks" data-site="${site.id}" value="${Number(data.clicks)}"></td>
      <td><input class="editable-input" type="number" min="0" step="1" data-kpi="revenue" data-site="${site.id}" value="${Number(data.revenue)}"></td>
      <td data-rpm="${site.id}">${money(rpm)}</td>
      <td>${OPERATIONS[site.id] ? `<button class="text-button action-link" data-jump="${site.id}">${escapeHTML(operationNextAction(site.id))} ↗</button>` : `<input class="editable-input action-input" data-kpi="nextAction" data-site="${site.id}" value="${escapeHTML(data.nextAction)}">`}</td>
    </tr>`;
  }).join('');
}

function openSiteDrawer(id) {
  const site = siteById(id);
  if (!site) return;
  const data = stateFor(id);
  const matched = niches.filter((item) => item.siteFit === id);
  const fiveStar = matched.filter((item) => item.potential === 5).length;
  document.getElementById('drawerContent').innerHTML = `
    <span class="eyebrow">Site ${String(site.rank).padStart(2, '0')} · Wave ${site.wave}</span><div class="drawer-rank">${String(site.rank).padStart(2, '0')}</div>
    <h2>${escapeHTML(site.name)}</h2><p class="drawer-lede">${escapeHTML(site.tagline)}</p>
    <div class="drawer-score-grid"><div><strong>${site.score}</strong><span>Portfolio score</span></div><div><strong>${site.confidence}%</strong><span>Confidence</span></div><div><strong>${matched.length}</strong><span>Mapped niches</span></div></div>
    <section class="drawer-section"><h3>Strategic thesis</h3><p>${escapeHTML(site.thesis)}</p></section>
    <section class="drawer-section"><h3>Core buyer</h3><p>${escapeHTML(site.buyer)}</p></section>
    <section class="drawer-section"><h3>Opening money clusters</h3><div class="cluster-tags">${site.clusters.map((cluster) => `<span>${escapeHTML(cluster)}</span>`).join('')}</div></section>
    <section class="drawer-section"><h3>Why it can win</h3><p>${escapeHTML(site.why)}</p></section>
    <section class="drawer-section"><h3>Main risk</h3><p>${escapeHTML(site.risk)}</p></section>
    <section class="drawer-section"><h3>Gate before investment</h3><p>${escapeHTML(site.gate)}</p></section>
    <section class="drawer-section"><h3>Research depth</h3><p>${matched.length} mapped opportunities, including ${fiveStar} five-star candidates. Use the Niche Vault to inspect and shortlist them.</p></section>
    <section class="drawer-section"><h3>Update this property</h3>
      <div class="drawer-form">
        <label>Stage<select id="drawerStage">${STAGES.map((stage) => `<option ${stage === data.stage ? 'selected' : ''}>${stage}</option>`).join('')}</select></label>
        <label>Progress %<input id="drawerProgress" type="number" min="0" max="100" value="${Number(data.progress)}"></label>
        <label class="full">Next action<input id="drawerAction" value="${escapeHTML(data.nextAction)}"></label>
        <label class="full">Notes<textarea id="drawerNotes" placeholder="Decisions, blockers, owner, deadline...">${escapeHTML(data.notes)}</textarea></label>
      </div>
      <button class="primary-button" id="saveSiteUpdate" data-site-save="${id}" style="margin-top:12px">Save update</button>
    </section>`;
  document.getElementById('siteDrawer').classList.add('is-open');
  document.getElementById('siteDrawer').setAttribute('aria-hidden', 'false');
  document.getElementById('drawerBackdrop').classList.add('is-open');
}

function closeDrawer() {
  document.getElementById('siteDrawer').classList.remove('is-open');
  document.getElementById('siteDrawer').setAttribute('aria-hidden', 'true');
  document.getElementById('drawerBackdrop').classList.remove('is-open');
}

function saveDrawerUpdate(id) {
  state.sites[id].stage = document.getElementById('drawerStage').value;
  state.sites[id].progress = Math.max(0, Math.min(100, Number(document.getElementById('drawerProgress').value) || 0));
  state.sites[id].nextAction = document.getElementById('drawerAction').value.trim();
  state.sites[id].notes = document.getElementById('drawerNotes').value.trim();
  saveState();
  closeDrawer();
  renderAll();
}

function toggleShortlist(id) {
  const numericId = Number(id);
  state.shortlist = state.shortlist.includes(numericId) ? state.shortlist.filter((item) => item !== numericId) : [...state.shortlist, numericId];
  saveState();
  renderVaultSummary();
  renderNiches();
}

function exportState() {
  const payload = { exportedAt: new Date().toISOString(), ...state, version: STATE_VERSION };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `affiliate-kingdom-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function importState(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const incoming = JSON.parse(reader.result);
      if (!incoming.sites || !Array.isArray(incoming.shortlist)) throw new Error('Invalid dashboard file');
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: Number(incoming.version || 0), sites: incoming.sites, shortlist: incoming.shortlist, operations: incoming.operations || {} }));
      state = loadState();
      renderAll();
    } catch (error) {
      alert(`Could not import this file: ${error.message}`);
    }
  };
  reader.readAsText(file);
}

function renderAll() {
  renderOverview();
  renderSiteDashboard('coffeedant');
  renderSiteDashboard('justdaddit');
  renderPortfolio();
  renderVaultSummary();
  renderNiches();
  renderRoadmap();
  renderCommand();
}

function bindEvents() {
  document.querySelectorAll('.nav-item').forEach((button) => button.addEventListener('click', () => goToView(button.dataset.view)));
  document.addEventListener('click', (event) => {
    const jump = event.target.closest('[data-jump]');
    if (jump) goToView(jump.dataset.jump);
    const siteOpen = event.target.closest('[data-site-open]');
    if (siteOpen) openSiteDrawer(siteOpen.dataset.siteOpen);
    const shortlist = event.target.closest('[data-shortlist]');
    if (shortlist) toggleShortlist(shortlist.dataset.shortlist);
    const save = event.target.closest('[data-site-save]');
    if (save) saveDrawerUpdate(save.dataset.siteSave);
    const siteTab = event.target.closest('[data-site-tab]');
    if (siteTab) {
      activeSiteTabs[siteTab.dataset.site] = siteTab.dataset.siteTab;
      renderSiteDashboard(siteTab.dataset.site);
    }
    const saveNotes = event.target.closest('[data-save-notes]');
    if (saveNotes) {
      const id = saveNotes.dataset.site;
      const notes = document.querySelector(`[data-operation-notes][data-site="${id}"]`);
      state.operations[id].notes = notes?.value.trim() || '';
      state.operations[id].updatedAt = new Date().toISOString();
      saveState();
      renderSiteDashboard(id);
    }
  });
  ['siteSearch', 'siteWaveFilter', 'siteStageFilter', 'siteSort'].forEach((id) => document.getElementById(id).addEventListener(id === 'siteSearch' ? 'input' : 'change', renderPortfolio));
  ['nicheSearch', 'categoryFilter', 'potentialFilter', 'fitFilter', 'nicheSort'].forEach((id) => document.getElementById(id).addEventListener(id === 'nicheSearch' ? 'input' : 'change', () => renderNiches(true)));
  document.getElementById('loadMoreNiches').addEventListener('click', () => { nicheLimit += 50; renderNiches(); });
  document.getElementById('drawerClose').addEventListener('click', closeDrawer);
  document.getElementById('drawerBackdrop').addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeDrawer(); });
  document.getElementById('mobileMenu').addEventListener('click', () => document.querySelector('.sidebar').classList.toggle('is-open'));
  document.getElementById('quickUpdate').addEventListener('click', () => {
    if (OPERATIONS[activeView]) {
      activeSiteTabs[activeView] = 'control';
      renderSiteDashboard(activeView);
      document.querySelector(`#${activeView}Dashboard .ops-actions`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    goToView('command');
  });
  document.getElementById('exportButton').addEventListener('click', exportState);
  document.getElementById('importInput').addEventListener('change', (event) => event.target.files[0] && importState(event.target.files[0]));
  const resetDialog = document.getElementById('resetDialog');
  document.getElementById('resetButton').addEventListener('click', () => resetDialog.showModal());
  resetDialog.addEventListener('close', () => {
    if (resetDialog.returnValue === 'confirm') {
      localStorage.removeItem(STORAGE_KEY);
      state = structuredClone(defaultState);
      renderAll();
    }
  });
  document.addEventListener('input', (event) => {
    const range = event.target.closest('[data-workstream-progress]');
    if (!range) return;
    const label = range.closest('.workstream-row')?.querySelector('.workstream-heading b');
    if (label) label.textContent = `${range.value}%`;
  });
  document.addEventListener('change', (event) => {
    const action = event.target.closest('[data-action-toggle]');
    if (action) {
      const { site, action: actionId } = action.dataset;
      const completed = new Set(state.operations[site].completedActions);
      action.checked ? completed.add(actionId) : completed.delete(actionId);
      state.operations[site].completedActions = [...completed];
      state.operations[site].updatedAt = new Date().toISOString();
      saveState();
      renderAll();
      return;
    }
    const workstream = event.target.closest('[data-workstream-progress]');
    if (workstream) {
      const { site, workstream: workstreamId } = workstream.dataset;
      state.operations[site].workstreamProgress[workstreamId] = Number(workstream.value);
      state.operations[site].updatedAt = new Date().toISOString();
      saveState();
      renderAll();
      return;
    }
    const decision = event.target.closest('[data-decision-status]');
    if (decision) {
      const { site, decision: decisionId } = decision.dataset;
      state.operations[site].decisionStatus[decisionId] = decision.value;
      state.operations[site].updatedAt = new Date().toISOString();
      saveState();
      return;
    }
    const content = event.target.closest('[data-content-status]');
    if (content) {
      const { site, content: contentId } = content.dataset;
      state.operations[site].contentStatus[contentId] = content.value;
      state.operations[site].updatedAt = new Date().toISOString();
      saveState();
      renderSiteDashboard(site);
    }
  });
  document.getElementById('kpiTableBody').addEventListener('change', (event) => {
    const input = event.target.closest('[data-kpi]');
    if (!input) return;
    const { site, kpi } = input.dataset;
    state.sites[site][kpi] = input.type === 'number' ? Number(input.value) || 0 : input.value.trim();
    saveState();
    if (kpi === 'visits' || kpi === 'revenue') {
      const data = stateFor(site);
      document.querySelector(`[data-rpm="${site}"]`).textContent = money(data.visits > 0 ? Math.round((data.revenue / data.visits) * 1000) : 0);
    }
    renderOverview();
  });
}

populateFilters();
bindEvents();
renderAll();
