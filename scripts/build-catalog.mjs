import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const sourcePath = path.join(root, 'affiliate-research-extract.json');
const outputDir = path.join(root, 'data');
const raw = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));

const clean = (value = '') => value
  .replace(/\*\*/g, '')
  .replace(/\s+/g, ' ')
  .trim();

const parsePrice = (value) => {
  const figures = [...value.matchAll(/\$?([\d,]+(?:\.\d+)?)/g)]
    .map((match) => Number(match[1].replaceAll(',', '')))
    .filter(Number.isFinite);
  return {
    min: figures[0] || 0,
    max: figures[1] || figures[0] || 0,
  };
};

const assignSite = (category, product) => {
  const text = `${category} ${product}`.toLowerCase();
  const rules = [
    ['coffeedant', /coffee|espresso|grinder/],
    ['smart-yard', /smart yard|lawn|mower|leaf blower|chainsaw|yard/],
    ['cleaning-machines', /cleaning|vacuum|carpet cleaner|steam cleaner|shop vac|pressure washer/],
    ['rv-systems', /rv |rv owners|overland|portable power|generator|off-grid|solar power/],
    ['serious-woodworking', /woodwork|track saw|router table|mortis|dust extractor/],
    ['car-tech', /car tech|dash ?cam|carplay|jump starter|tire inflator|radar detector/],
    ['justdaddit', /family|baby|grand|kids|child|nursery|stroller|car seat|playset|trampoline|ride-on|go-kart/],
    ['creator-studio', /creator|pro video|video production|camera support|studio lighting|podcast|photograph|cinema|microphone|teleprompter/],
    ['workshop-machines', /workshop|maker|metalwork|welder|plasma cutter|laser engraver|3d printer|heat press|milling machine|metal lathe/],
    ['classic-garage', /classic-car|classic car|automotive lift|garage air|detailing extractor|paint sprayer|diagnostic scanner/],
    ['serious-cycling', /cyclist|cycling|bike trainer|bike computer|power meter|bike rack|electric bicycle/],
    ['birding-wildlife', /bird|wildlife|binocular|spotting scope|trail-camera|thermal monocular/],
    ['backyard-cooking', /backyard cooking|grill|pizza oven|griddle|kamado|outdoor refrigeration|high-end dining|cookware|knife|sous vide|wine refrigerator/],
    ['home-climate', /home climate|air conditioner|dehumidifier|air purifier|evaporative cooler|humidifier|water treatment|water filtration|water softener/],
    ['boat-systems', /boater|marine|fishing|fish finder|trolling motor|chartplotter|kayak/],
    ['serious-gardening', /garden|greenhouse|hydroponic|beekeep|orchid|bonsai/],
    ['audiophile', /audiophile|audio|home theater|speaker|amplifier|turntable|headphone|projector|av receiver/],
    ['golf-tech', /golf/],
    ['sewing-studio', /sewing|quilting|embroidery|fabric-cutting|serger/],
    ['model-railway', /model railroad|train set|locomotive|command-control/],
    ['radio-bench', /ham radio|radio scanner|sdr receiver|antenna analyzer|antenna tuner/],
  ];
  return rules.find(([, expression]) => expression.test(text))?.[0] || 'unassigned';
};

const batches = {
  6366: 'High-ticket home systems',
  2710: 'Enthusiast equipment',
  2528: 'Creator and family gear',
  2267: 'High-spending audiences',
  1772: 'Serious hobbies after 50',
  1335: 'Affluent obsessive hobbies',
  799: 'Grandparent-funded childhood',
};

const catalog = raw.flatMap((section) => {
  return section.text
    .split('\n')
    .filter((line) => /^\|\s*\d+\s*\|/.test(line))
    .map((line) => {
      const cells = line.split('|').slice(1, -1).map(clean);
      const [id, category, product, priceLabel] = cells;
      const hasDemand = cells.length === 6;
      const demand = hasDemand ? cells[4] : 'Research needed';
      const ratingLabel = hasDemand ? cells[5] : cells[4];
      const potential = (ratingLabel.match(/★/g) || []).length;
      const price = parsePrice(priceLabel);
      return {
        id: Number(id),
        category,
        product,
        priceLabel,
        priceMin: price.min,
        priceMax: price.max,
        demand,
        potential,
        sourceBatch: batches[section.source_index],
        siteFit: assignSite(category, product),
      };
    });
});

catalog.sort((a, b) => a.id - b.id);
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(
  path.join(outputDir, 'catalog.js'),
  `window.AFFILIATE_NICHES = ${JSON.stringify(catalog, null, 2)};\n`,
);

const summary = {
  generatedAt: new Date().toISOString(),
  totalNiches: catalog.length,
  categories: [...new Set(catalog.map((item) => item.category))].sort(),
  fiveStarNiches: catalog.filter((item) => item.potential === 5).length,
  mappedNiches: catalog.filter((item) => item.siteFit !== 'unassigned').length,
  batches: Object.values(batches),
};

fs.writeFileSync(
  path.join(outputDir, 'research-summary.json'),
  `${JSON.stringify(summary, null, 2)}\n`,
);

console.log(`Built ${catalog.length} niche records across ${summary.categories.length} categories.`);
