# RPT Clinic Health Library Manual

This is the maintenance reference for the Astro health-library project.

## Local Development

Install dependencies once:

```powershell
npm install
```

Start the local site:

```powershell
npm run dev
```

Build the production site and run type checks:

```powershell
npm run build
```

The build must pass before pushing or deploying.

## Production Domain

The canonical site is configured as:

```text
https://rptclinic.com
```

The setting lives in `astro.config.mjs`. Cloudflare should provide `PUBLIC_SITE_URL=https://rptclinic.com` in production so the sitemap and canonical URLs always use the final domain.

Important indexable URLs:

```text
/health/
/health/article-slug/
/topics/topic-slug/
/locations/
/locations/location-slug/
/robots.txt
/sitemap-index.xml
```

## Add or Edit an Article

Article files are Markdown files in:

```text
src/content/articles/
```

Create a file named from the desired URL, such as:

```text
src/content/articles/hamstring-pain.md
```

The URL becomes:

```text
https://rptclinic.com/health/hamstring-pain/
```

Use this frontmatter structure:

```yaml
---
title: "Hamstring Pain: Causes, Symptoms and RPT Care"
description: "A concise Google meta description."
excerpt: "A short card description for the library."
category: Musculoskeletal
categorySlug: musculoskeletal
tags: [hamstring pain, pulled hamstring, thigh pain, muscle strain]
bodySystems: [musculoskeletal]
contentType: condition
publishedAt: 2026-09-02
updatedAt: 2026-09-02
author: RPT Clinic Editorial Team
readingTime: 6
image: /images/rpt-clinic-treatment.jpg
imageAlt: RPT Clinic treatment session
keyTakeaways:
  - Key point one.
  - Key point two.
faq:
  - question: A useful question?
    answer: A clear, conservative answer.
related: [muscle-strain, calf-pain, sports-injuries]
seo:
  title: "Hamstring Pain: Causes and Care | RPT Clinic"
  description: "A second, search-focused description."
---
```

Then write the Markdown content below the closing `---`.

Content standards:

- Use clear headings and plain language.
- Add meaningful `tags` and `related` article IDs.
- Include a section on when urgent medical assessment is needed.
- Use conservative wording: RPT may address muscular contributors after assessment. Do not claim a diagnosis, cure, or guaranteed outcome.
- Use `https://rptclinic.com/contact/` for any appointment CTA.
- Do not add medical-review names or credentials. Articles display only the RPT Clinic Editorial Team attribution.

## Internal and External Links

The project automatically adds up to three contextual internal links in article body text. It links terms such as `shoulder`, `wrist pain`, `calf pain`, and `muscle stiffness` to related library pages.

It also:

- Normalizes `RX2600` to `RX2600 Therapeutic Robot`.
- Adds up to two body links per article to `https://rx2600.com/`.
- Adds up to two body links per article to `https://rptclinic.com/`.

Those rules live in:

```text
src/lib/content.ts
```

To add a new automatic internal-link term, add a `[term, article-slug]` entry to `topicLinks` in that file.

## Article Images and Thumbnails

Public assets are served from:

```text
public/images/
```

Article-card thumbnail assignments are centralized in:

```text
src/config/articleImages.ts
```

To connect a new article to a thumbnail, add an entry such as:

```ts
'hamstring-pain': '/images/Leg/hamstring.jpg',
```

Article cards automatically crop images into a fixed compact `4:3` thumbnail.

Image rules:

- Use web-friendly JPG, PNG, WebP, or AVIF.
- Keep file names descriptive and lowercase when possible.
- Do not leave HEIC or MOV source files under `public/`; Astro copies everything in `public` into the deployed site. Store originals outside the project or outside `public`.
- The current lower-leg WebP images are in `public/images/Leg/`.

## Homepage and Library Search

The homepage is:

```text
src/pages/index.astro
```

The library archive is:

```text
src/pages/health/index.astro
```

Search behavior is in:

```text
src/components/LibrarySearch.astro
```

The archive’s left-side A-Z browsing and topic navigation is in:

```text
src/components/LibraryNavigator.astro
```

The navigator shows three articles per letter folder. `View all` links use `/health?letter=A`; sidebar searches use `/health?q=term`.

## Article Page Components

All health articles use one template:

```text
src/pages/health/[...slug].astro
```

It controls:

- Hero section and rotating article-header image
- Breadcrumbs and article metadata
- Key takeaways, article body, and FAQs
- Patient testimonials and comparison table when data exists
- Related health articles
- Recovery CTA band immediately above the footer
- The interactive question guide

Reusable article components are in:

```text
src/components/
```

The question guide is `ArticleNextStepGuide.astro`.

Desktop behavior: appears after approximately 40% scroll as a left-side panel. It can be minimized to a `?` bubble or closed for that page view. Mobile behavior: appears in the article flow after key takeaways.

## Add a Location

All RX2600 locations come from:

```text
src/config/locations.ts
```

Add a new object to the `locations` array:

```ts
{
  slug: 'clinic-name-city-state',
  name: 'Clinic Name',
  address: 'Street address, Suite',
  city: 'City',
  region: 'MI',
  postalCode: '00000',
  phone: '(000) 000-0000',
  phoneHref: '+10000000000',
  website: 'https://example.com/',
  mapUrl: 'https://maps.app.goo.gl/example',
},
```

This automatically creates a page at:

```text
/locations/clinic-name-city-state/
```

The locator landing page is `src/pages/locations/index.astro`. The shared detail-page route is `src/pages/locations/[slug].astro`.

## Branding and Footer

Shared clinic and brand data:

```text
src/config/brand.ts
src/config/clinic.ts
```

The footer is:

```text
src/components/Footer.astro
```

The footer logo comes from the official RPT Clinic URL. Shared appointment links use `brand.appointmentUrl`, which should remain:

```text
https://rptclinic.com/contact/
```

## SEO Checklist Before Deployment

1. Run `npm run build` with no errors.
2. Confirm `PUBLIC_SITE_URL` is `https://rptclinic.com`.
3. Visit `/robots.txt` and confirm it points to `/sitemap-index.xml`.
4. Visit `/sitemap-index.xml` and confirm URLs use `https://rptclinic.com`.
5. In Google Search Console, add and verify `rptclinic.com`, then submit the sitemap.
6. Inspect representative article, topic, and location URLs in Search Console after launch.
7. Use Google Rich Results Test on a representative article to check article FAQ and breadcrumb structured data.
8. Verify mobile layout, article thumbnails, and outbound appointment links on the deployed domain.

## Deployment

Cloudflare uses the build command in `package.json`:

```text
npm run build
```

The generated static site is in `dist/`. Do not manually edit `dist`; edit files in `src/` or `public/`, then rebuild.

Typical workflow:

```powershell
npm run build
git status
git add .
git commit -m "Describe the change"
git push origin main
```

Review `git status` before staging to ensure no raw HEIC/MOV assets or unintended files are included.
