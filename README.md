# Article Collections Library

A reusable Astro starter for a branded, SEO-ready clinic health library. It is intentionally built as a **single-brand static deployment**: copy or clone the project for each clinic domain, configure the brand once, add vetted content, and deploy.

## Start locally

```bash
npm install
cp .env.example .env
npm run dev
npm run check
npm run build
```

Use Node 20.18 or later. Set `PUBLIC_SITE_URL` to the final production domain before building so canonicals, the sitemap and `robots.txt` use the live domain.

## Brand a duplicate

For each clinic, copy or clone this repository. Then edit:

1. `src/config/brand.ts` — name, legal name, remote logo URL, brand colors, navigation, phone and appointment link.
2. `src/config/clinic.ts` — address, hours and appointment wording.
3. `.env` — `PUBLIC_SITE_URL` for that brand's final domain.
4. `/privacy`, `/terms` and the navigation destination pages before launch.

Example:

```ts
logoUrl: 'https://cdn.exampleclinic.com/logo.svg',
primaryColor: '#006B54',
primaryDarkColor: '#004D3D',
accentColor: '#E7F6F1',
domain: 'www.exampleclinic.com',
```

## Content model

Create Markdown entries in `src/content/articles`. The filename is the public slug. Schema validation in `src/content.config.ts` requires title, unique description, category, dates, reviewer details, takeaways and SEO controls. Create categories in `src/content/categories` before using a new `categorySlug`.

The starter includes `/health`, `/topics/[topic]` and `/health/[article]`, medically reviewed metadata, FAQ and breadcrumb schema, canonical tags, Open Graph tags, a sitemap and local archive search/filtering.

## Editorial safeguards

This repository is an engineering framework, not medical advice. All content must be clinically reviewed and approved before publication. Do not mechanically deploy duplicate health content across 40+ indexable domains. Give each site legitimate clinical ownership, local care information, reviewer details, service context, original or meaningfully localized content and an intentional canonical/indexing strategy.

## Scale path

Markdown collections work well for an initial library. At high volume, retain this schema as the content contract and move entries to a headless CMS or database-backed loader. Add server/API search, pagination, editorial workflow, image optimization, redirects, accessibility checks and CI validation as volume grows.
