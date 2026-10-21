# RPT Clinic Health Library Manual

This is the maintenance reference for the Astro health-library project.

## Adding an Article

Before editing:

1. Read this manual and inspect a recent, working article in `src/content/articles/`.
2. Use its Markdown and frontmatter structure as the starting point.
3. Write the article copy, metadata, FAQs, key takeaways, and relevant internal and external links.
4. Verify city, location, service-area, and treatment references against current project information. Describe RPT and the RX2600 Therapeutic Robot conservatively: they may address appropriate muscular contributors after assessment; do not promise diagnosis, cure, or guaranteed results.
5. Validate the content and run `npm run build`. Review the generated route and sitemap entry.
6. Review `git status` and `git diff`; stage and commit only the files intended for this change.
7. Check the relevant deployment workflow and its result. After deployment, request the intended public URL and verify the page there.

These are separate statuses: **committed**, **build passed**, **deployed**, and **live verified**. Report only the statuses actually confirmed. If a build or deployment tool is unavailable, say so. Do not use a different hosting workflow as a substitute or imply that a commit or successful build means the public site has been updated.

### Copy-ready article example

Create a file such as `src/content/articles/example-sciatica-guide.md`. The filename becomes the article slug. Replace the example copy, dates, image, and links before publishing.

```markdown
---
title: "Example Sciatica Guide: What to Know"
description: "A concise, plain-language summary of the article for search results."
excerpt: "A short description shown on health-library cards."
category: Pain Management
categorySlug: pain-management
tags: [sciatica, sciatic nerve pain, back pain]
bodySystems: [musculoskeletal, nervous system]
contentType: guide
publishedAt: 2026-10-21
updatedAt: 2026-10-21
author: RPT Clinic Editorial Team
readingTime: 4
image: /health/images/Back/backpain-1.jpg
imageAlt: Person managing back and leg discomfort
keyTakeaways:
  - Summarize one useful point from the article.
  - Explain when a reader should seek professional assessment.
  - State what treatment can and cannot be expected to address.
faq:
  - question: When should I seek help?
    answer: Arrange an assessment when symptoms persist, worsen, or limit daily activities. Seek urgent care for emergency warning signs.
related: [when-to-see-a-doctor-for-sciatic-nerve-pain, lower-back-pain]
seo:
  title: "Example Sciatica Guide: What to Know"
  description: "A search-focused summary that is accurate and distinct from the article description."
  image: /health/images/Back/backpain-1.jpg
  noindex: false
---

## Start with the reader's question

Answer the main question directly, then explain the useful details in clear language.

## What to consider next

Use practical lists and relevant links. Describe RPT Clinic and the RX2600 Therapeutic Robot accurately, without unsupported treatment promises.
```

The shared page layout appends `| RPT Clinic` to `seo.title`; do not add the brand suffix yourself. `reviewedBy`, `related`, and `draft` are supported optional fields. Follow the current brief for keyword requirements rather than carrying a keyword list over from another article batch.

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

The `site` constant in `astro.config.mjs` sets Astro's canonical site and sitemap domain. It is intentionally fixed to `https://rptclinic.com`; `PUBLIC_SITE_URL` does not override it. Do not change this domain or the `/health` asset prefix for an article-only task.

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

Create a filename from the desired slug, such as:

```text
src/content/articles/hamstring-pain.md
```

The URL becomes:

```text
https://rptclinic.com/health/hamstring-pain/
```

Follow the [Adding an Article workflow](#adding-an-article) above for the copy-ready frontmatter and article example. The required and optional fields are defined in `src/content.config.ts`.

Content standards:

- Read this manual and inspect a recent article before drafting; reuse the established Markdown and frontmatter conventions.
- Give the article a useful substance and a clear angle. Expand topic clusters: overlapping keywords are allowed, and similar topics are not by themselves a reason to merge or replace existing articles.
- Follow the keyword requirements in the current brief; do not assume another article's keyword list applies.
- Use direct answers, plain language, useful lists, and meaningful `tags` and `related` article IDs.
- Include a section on when urgent medical assessment is needed.
- Check location references and treatment descriptions against current project information. RPT Clinic and the RX2600 Therapeutic Robot may address appropriate muscular contributors after assessment; do not claim diagnosis, cure, or guaranteed outcomes.
- Use `https://rptclinic.com/contact/` for any appointment CTA.
- Do not add medical-review names or credentials. Articles display only the RPT Clinic Editorial Team attribution.
- `reviewedBy` is an optional schema field, not a required article field.
- The shared layout appends `| RPT Clinic` to the SEO title; do not repeat the suffix in article frontmatter.

After editing, run `npm run build` and inspect the generated article route and sitemap. Review `git diff --check`, `git status`, and the exact diff; stage only intended files.

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
2. Confirm the `site` constant in `astro.config.mjs` is the intended canonical domain (`https://rptclinic.com` for this project).
3. Visit `/robots.txt` and confirm it points to `/sitemap-index.xml`.
4. Visit `/sitemap-index.xml` and confirm URLs use `https://rptclinic.com`.
5. In Google Search Console, add and verify `rptclinic.com`, then submit the sitemap.
6. Inspect representative article, topic, and location URLs in Search Console after launch.
7. Use Google Rich Results Test on a representative article to check article FAQ and breadcrumb structured data.
8. Verify mobile layout, article thumbnails, and outbound appointment links on the deployed domain.

## Deployment

The production build command in `package.json` is:

```text
npm run build
```

The generated static site is in `dist/`. Do not manually edit `dist`; edit files in `src/` or `public/`, then rebuild. The repository also contains a GitHub Pages workflow that publishes `dist` to its configured Pages target. A successful run confirms that target received a deployment; it does not, by itself, prove that the intended public `rptclinic.com` URL is serving the change. Confirm the configured production host and verify the public URL separately. The presence of `wrangler.jsonc` is not proof that a Cloudflare deployment was performed.

Typical source-control workflow:

```powershell
npm run build
git diff --check
git status
git add src/content/articles/example-sciatica-guide.md
git commit -m "Describe the change"
git push origin main
```

Replace the example path with the exact intended files. Review `git status` before staging to ensure no raw HEIC/MOV assets or unrelated changes are included.

After pushing, inspect the relevant Actions run and its deployment result. Treat these as separate confirmations:

1. **Committed:** the intended change is in the repository.
2. **Build passed:** the production build completed successfully.
3. **Deployed:** the intended hosting workflow reports a successful deployment to its target.
4. **Live verified:** the requested public URL was fetched and the expected content was confirmed.

Report only the stages actually verified. If the relevant deployment tool or access is unavailable, state that limitation; do not substitute an unrelated host or workflow or imply the site is live.
