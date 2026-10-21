# RPT Clinic Health Library

An Astro-powered health library for RPT Clinic.

## Start locally

Requires Node.js 20.18 or later.

```powershell
npm install
npm run dev
npm run build
```

## Project guide

Read [PROJECT_MANUAL.md](./PROJECT_MANUAL.md) before adding articles or maintaining the site. It includes the article workflow and schema example, editorial guidance, build checks, and publishing verification steps.

Article Markdown files live in `src/content/articles/`; each filename determines its `/health/<slug>/` route. The schema in `src/content.config.ts` defines required and optional fields. In particular, reviewer metadata is optional, and the shared layout appends `| RPT Clinic` to the SEO title.

## Domain and publishing

This project's canonical domain is set to `https://rptclinic.com` by the `site` constant in `astro.config.mjs`. `PUBLIC_SITE_URL` does not override it.

`npm run build` creates the static site in `dist/`. A successful build is not a deployment, and a successful deployment is not proof that the intended public URL is live. Follow the manual to check the actual deployment target and verify public URLs; do not substitute a different host or workflow if the intended deployment process is unavailable.

## Editorial standard

All health content must be clinically reviewed and approved before publication. Describe treatment conservatively and do not promise diagnoses, cures, or guaranteed outcomes.
