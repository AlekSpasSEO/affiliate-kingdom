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
    defaultStage: 'Build', defaultProgress: 42, defaultPages: 20, defaultVisits: 4000, defaultClicks: 0, defaultRevenue: 100,
    nextAction: 'Complete the migration and standardize the first 20 upgraded reviews.'
  },
  {
    id: 'smart-yard', rank: 2, name: 'Smart Yard', wave: 1, score: 89, confidence: 67, priority: 'Core bet',
    tagline: 'High-ticket machines for a lower-effort yard.',
    thesis: 'Own the transition from manual yard work to battery-powered, robotic, and smarter outdoor equipment.',
    buyer: 'Homeowners with lawns, storage space, and the budget to pay for convenience.',
    clusters: ['Robot mowers', 'Cordless mowers', 'Pressure washers', 'Leaf blowers', 'Battery chainsaws'],
    why: 'Strong purchase prices, clear comparison intent, rapidly evolving products, and a large accessory ecosystem.',
    risk: 'Seasonality, manufacturer-led results, and testing requirements can raise content costs.',
    gate: 'Confirm weak SERPs across 30 commercial queries and identify five products that can be tested or sourced.',
    defaultStage: 'Validate', defaultProgress: 12, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Score 30 commercial SERPs and map the robot-mower purchase journey.'
  },
  {
    id: 'cleaning-machines', rank: 3, name: 'Cleaning Machines', wave: 1, score: 88, confidence: 70, priority: 'Core bet',
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
    id: 'rv-systems', rank: 4, name: 'RV Systems', wave: 1, score: 88, confidence: 63, priority: 'Core bet',
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
    id: 'serious-woodworking', rank: 5, name: 'Serious Woodworking', wave: 2, score: 87, confidence: 62, priority: 'Core bet',
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
    id: 'car-tech', rank: 6, name: 'Car Tech', wave: 2, score: 86, confidence: 72, priority: 'Core bet',
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
    id: 'family-upgrade', rank: 7, name: 'Family Upgrade', wave: 2, score: 86, confidence: 64, priority: 'Core bet',
    tagline: 'Products worth spending more on when family life gets real.',
    thesis: 'Follow the family purchase journey from a new baby through childhood, with grandparents as an important funding audience.',
    buyer: 'Parents and grandparents paying more for safety, convenience, durability, and memorable gifts.',
    clusters: ['Travel systems', 'Grandparents’ house', 'Big gifts', 'Outdoor play', 'STEM gear'],
    why: 'A fifteen-year customer lifecycle connects baby gear, household upgrades, hobbies, and milestone gifts.',
    risk: 'Broad scope can become a generic family site unless the “worth spending more” rule stays strict.',
    gate: 'Validate one entry audience, then create a lifecycle map that prevents topic drift.',
    defaultStage: 'Backlog', defaultProgress: 3, defaultPages: 0, defaultVisits: 0, defaultClicks: 0, defaultRevenue: 0,
    nextAction: 'Test Grandparents’ House against Big Gift as the opening category.'
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
  { id: 1, label: 'Wave 1', timing: 'Next', title: 'Validate the first repeatable bets', sites: ['smart-yard', 'cleaning-machines', 'rv-systems'], gate: 'Each site passes demand, competition, offer, and evidence checks.' },
  { id: 2, label: 'Wave 2', timing: 'After proof', title: 'Repeat the system across four models', sites: ['serious-woodworking', 'car-tech', 'family-upgrade', 'creator-studio'], gate: 'At least two active properties show rankings, affiliate clicks, or revenue.' },
  { id: 3, label: 'Wave 3', timing: 'Expansion', title: 'Add enthusiast audiences', sites: ['classic-garage', 'serious-cycling', 'birding-wildlife', 'backyard-cooking'], gate: 'Editorial expertise is secured and shared production remains below capacity.' },
  { id: 4, label: 'Wave 4', timing: 'Scale', title: 'Move into complex infrastructure', sites: ['home-climate', 'boat-systems', 'serious-gardening', 'audiophile'], gate: 'Direct programs, compatibility data, and specialist contributors are ready.' },
  { id: 5, label: 'Wave 5', timing: 'Options', title: 'Exercise the long-tail options', sites: ['golf-tech', 'sewing-studio', 'model-railway', 'radio-bench'], gate: 'Research proves these can beat the next investment in an existing winner.' }
];

const STAGES = ['Backlog', 'Validate', 'Build', 'Active', 'Scale', 'Hold'];
const STORAGE_KEY = 'affiliate-kingdom-state-v1';
const niches = window.AFFILIATE_NICHES || [];
const defaultState = {
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
};

let state = loadState();
let activeView = 'overview';
let nicheLimit = 50;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (!saved) return structuredClone(defaultState);
    const merged = structuredClone(defaultState);
    for (const site of PORTFOLIO) merged.sites[site.id] = { ...merged.sites[site.id], ...(saved.sites?.[site.id] || {}) };
    merged.shortlist = Array.isArray(saved.shortlist) ? saved.shortlist : [];
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
function stageClass(stage) { return stage.toLowerCase().replaceAll(' ', '-'); }
function money(value) { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Number(value) || 0); }

function goToView(view) {
  activeView = view;
  document.querySelectorAll('[data-view-panel]').forEach((panel) => panel.classList.toggle('is-visible', panel.dataset.viewPanel === view));
  document.querySelectorAll('.nav-item').forEach((button) => button.classList.toggle('is-active', button.dataset.view === view));
  const titles = { overview: ['Portfolio control', 'Overview'], portfolio: ['Portfolio map', '20-site portfolio'], vault: ['Research database', 'Niche vault'], roadmap: ['Release system', 'Roadmap'], command: ['Performance ledger', 'Command center'] };
  document.getElementById('viewEyebrow').textContent = titles[view][0];
  document.getElementById('viewTitle').textContent = titles[view][1];
  document.querySelector('.sidebar').classList.remove('is-open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderOverview() {
  const fiveStars = niches.filter((item) => item.potential === 5).length;
  const active = PORTFOLIO.filter((site) => ['Build', 'Active', 'Scale'].includes(stateFor(site.id).stage)).length;
  const launched = PORTFOLIO.filter((site) => ['Active', 'Scale'].includes(stateFor(site.id).stage)).length;
  const avgProgress = Math.round(PORTFOLIO.reduce((sum, site) => sum + Number(stateFor(site.id).progress || 0), 0) / PORTFOLIO.length);
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
    <button class="ranking-row text-button" data-site-open="${site.id}" style="width:100%;text-align:left">
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
  return PORTFOLIO.map((site) => ({ site, data: stateFor(site.id) })).sort((a, b) => {
    const stageDiff = order[a.data.stage] - order[b.data.stage];
    return stageDiff || a.site.wave - b.site.wave || b.site.score - a.site.score;
  });
}

function currentWave() {
  const incomplete = WAVES.find((wave) => wave.sites.some((id) => Number(stateFor(id).progress) < 100));
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
  list.sort((a, b) => sort === 'wave' ? a.wave - b.wave || a.rank - b.rank : sort === 'progress' ? stateFor(b.id).progress - stateFor(a.id).progress : b.score - a.score);
  document.getElementById('portfolioGrid').innerHTML = list.length ? list.map(siteCard).join('') : '<div class="empty-state">No sites match these filters.</div>';
}

function siteCard(site) {
  const data = stateFor(site.id);
  const matched = niches.filter((item) => item.siteFit === site.id).length;
  return `<article class="site-card" data-rank="${String(site.rank).padStart(2, '0')}">
    <div class="site-top"><span class="stage-badge ${stageClass(data.stage)}">${escapeHTML(data.stage)}</span><span class="site-score"><strong>${site.score}</strong><span>/100</span></span></div>
    <h3>${escapeHTML(site.name)}</h3><p class="site-tagline">${escapeHTML(site.tagline)}</p>
    <div class="cluster-tags">${site.clusters.slice(0, 4).map((cluster) => `<span>${escapeHTML(cluster)}</span>`).join('')}</div>
    <div class="site-progress"><div class="progress-meta"><span>Build progress</span><span>${Number(data.progress)}%</span></div><div class="progress-track"><i style="width:${Number(data.progress)}%"></i></div></div>
    <div class="site-card-footer"><span>Wave ${site.wave} · ${matched} mapped niches</span><button class="site-open" data-site-open="${site.id}" aria-label="Open ${escapeHTML(site.name)}">↗</button></div>
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

function renderCommand() {
  const queue = getActionQueue().slice(0, 6);
  document.getElementById('criticalPath').innerHTML = queue.map(({ site, data }, index) => `<div class="critical-row"><b>0${index + 1}</b><span><strong>${escapeHTML(data.nextAction)}</strong><span>${escapeHTML(site.name)}</span></span><em>${escapeHTML(data.stage)}</em></div>`).join('');
  document.getElementById('kpiTableBody').innerHTML = PORTFOLIO.map((site) => {
    const data = stateFor(site.id);
    const rpm = data.visits > 0 ? Math.round((data.revenue / data.visits) * 1000) : 0;
    return `<tr data-kpi-row="${site.id}">
      <td class="product-cell"><button class="text-button" data-site-open="${site.id}">${escapeHTML(site.name)}</button></td>
      <td><span class="stage-badge ${stageClass(data.stage)}">${escapeHTML(data.stage)}</span></td>
      <td><input class="editable-input" type="number" min="0" data-kpi="pages" data-site="${site.id}" value="${Number(data.pages)}"></td>
      <td><input class="editable-input" type="number" min="0" data-kpi="visits" data-site="${site.id}" value="${Number(data.visits)}"></td>
      <td><input class="editable-input" type="number" min="0" data-kpi="clicks" data-site="${site.id}" value="${Number(data.clicks)}"></td>
      <td><input class="editable-input" type="number" min="0" step="1" data-kpi="revenue" data-site="${site.id}" value="${Number(data.revenue)}"></td>
      <td data-rpm="${site.id}">${money(rpm)}</td>
      <td><input class="editable-input action-input" data-kpi="nextAction" data-site="${site.id}" value="${escapeHTML(data.nextAction)}"></td>
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
  const payload = { exportedAt: new Date().toISOString(), version: 1, ...state };
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
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ sites: incoming.sites, shortlist: incoming.shortlist }));
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
  });
  ['siteSearch', 'siteWaveFilter', 'siteStageFilter', 'siteSort'].forEach((id) => document.getElementById(id).addEventListener(id === 'siteSearch' ? 'input' : 'change', renderPortfolio));
  ['nicheSearch', 'categoryFilter', 'potentialFilter', 'fitFilter', 'nicheSort'].forEach((id) => document.getElementById(id).addEventListener(id === 'nicheSearch' ? 'input' : 'change', () => renderNiches(true)));
  document.getElementById('loadMoreNiches').addEventListener('click', () => { nicheLimit += 50; renderNiches(); });
  document.getElementById('drawerClose').addEventListener('click', closeDrawer);
  document.getElementById('drawerBackdrop').addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeDrawer(); });
  document.getElementById('mobileMenu').addEventListener('click', () => document.querySelector('.sidebar').classList.toggle('is-open'));
  document.getElementById('quickUpdate').addEventListener('click', () => goToView('command'));
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
