# Candor Living — Content Portal

Private, password-gated content portal built by **TaskFloVA** for **Candor Living Home Care Service** (Houston, TX).

A NeuronWriter-style workspace where the client reviews the website content we've written for each page, with live SEO scoring, real top-3 competitors, and keyword targets baked from **Semrush** research (US database, Houston market).

## What's inside
- **Login gate** — TaskFloVA-branded, client-named. Access via the key provided in the welcome email.
- **Left nav** — Branding (Logo, Color Palette, Typography, Sitemap, SEO Strategy) + Pages (Home, About, Services + 5 service sub-pages, Blog, Careers, Contact).
- **Center editor** — each page's content as editable, drag-reorderable **section blocks** (Hero, Intro, Services, CTA…), plus editable SEO Title and Meta Description.
- **Right rail** — live Content Score gauge + sub-metrics (Title / Headings / Terms / Words), Top 3 Competitors (Semrush), and Basic/Extended keyword lists that light up as terms are used. Hover a keyword to highlight it in the content.

## Tech
Static site, vanilla HTML/CSS/JS, no build step. Content + SEO data live in `assets/js/data.js`; the app engine is `assets/js/portal.js`. Scoring and keyword matching run entirely client-side (proximity-tolerant, like NeuronWriter/writer.adnika).

Edits are saved to the browser's local storage (per device). "Reset" restores a page to its original content.

---
Crafted & managed by TaskFloVA.
