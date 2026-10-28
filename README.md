# Vesper Polymers concept sample

Public preview: https://orionaster.github.io/b2b-export-sample/en/

Fictional industrial B2B website for discussion. Vesper Polymers is an invented brand, the illustration is AI-generated, and all model references and dimensions are illustrative placeholders. No manufacturer affiliation, verified engineering data, certifications or commercial track record is claimed. Do not use the values for engineering or purchasing.

## Run

Node 24+, npm. On PowerShell:

```powershell
npm ci
$env:ASTRO_TELEMETRY_DISABLED='1'
npm run build
npm run preview
```

The site uses Astro static generation. `astro.config.mjs` sets the GitHub Pages project base. Five HTML pages are generated: a root language entry, English/Chinese homepages and English/Chinese product pages. Every page has localized metadata, canonical and matching hreflang links. `noindex,nofollow` is intentional for fictional content.

## Behavior

- Language links preserve the current home/product page.
- Product dimensions are real HTML table elements generated from `src/data/copy.ts`.
- Filtering matches reference or outer diameter, with an empty state and reset.
- CSV exports only visible rows and explicitly labels the data illustrative.
- Inquiry dialog generates a text file locally. No network submission, storage, contact collection or supplier communication occurs.
- Responsive layouts, horizontal table region, native keyboard-accessible dialog/details, reduced motion and system dark mode.

Only EN/ZH are implemented. Fifteen languages, Arabic RTL, CMS, Excel import, real product validation, server operations and training are outside this sample. Adding a locale requires translated copy and adding its code to `languages`, not just pressing a CMS button.

## Visual provenance

`public/images/polymer-concept.webp` is an AI-created concept generated for this sample on 2026-10-28, compressed to WebP (1200px wide). It is not a photo of real merchandise. System sans-serif fonts and native CSS; no third-party customer assets, logos, photography or paid assets used. The layout is authored for this concept rather than copying another manufacturer.

## Deployment

The dedicated public repository contains this source and a `docs/` build. GitHub Pages serves `main:/docs`. To update it: run the build, replace `docs/` with `dist/`, add `docs/.nojekyll`, commit and push. Do not copy unrelated workspace or business files into the public repository.

## Checks

Run `npm run build` then `node scripts/check-build.mjs`. Browser and performance evidence is maintained in the business repository report, separately from source checks. Browser emulation is not a physical-phone test, and local Lighthouse is not a Google PageSpeed Insights run.
