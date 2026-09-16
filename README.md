# Affiliate Kingdom

A private operating dashboard for building and managing a 20-site affiliate portfolio.

## What it contains

- A curated 20-site portfolio ranked by strategic value
- 350 researched high-ticket product niches
- Validation, build, launch, scale, and hold gates
- A phased roadmap that keeps work in progress under control
- Editable site progress, notes, KPIs, and next actions stored in the browser
- JSON export/import for backing up dashboard state

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
