# Affiliate Kingdom

A private operating dashboard for building and managing a 20-site affiliate portfolio.

## What it contains

- A curated 20-site portfolio ranked by strategic value
- 350 researched high-ticket product niches
- Dedicated Coffeedant migration and standardization dashboard
- Dedicated JustDaddit research, build plan, 30-page launch map, and risk register
- Validation, build, launch, scale, and hold gates
- A phased roadmap that keeps work in progress under control
- Editable workstreams, decisions, content statuses, notes, KPIs, and next actions stored in the browser
- JSON export/import for backing up dashboard state

## Active properties

- **Coffeedant:** 194 known URLs, a benchmark review standard, batch progress, commerce integration tasks, and pre-cutover QA.
- **JustDaddit:** family-gear positioning, competitive research, name-risk controls, affiliate paths, testing rules, phased build plan, and a 30-page evidence-led content pipeline.

## Run locally

Open `index.html`, or serve the folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Rebuild the niche catalog

The source research export is intentionally excluded from Git. To regenerate the normalized dataset locally:

```bash
node scripts/build-catalog.mjs
```

## GitHub Pages

The project is intentionally build-free. Publish the repository root from the `main` branch with GitHub Pages.
