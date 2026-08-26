# RPT Clinic Migration — Batch 01

## Scope

This batch creates structured Astro collection articles based on the existing RPT Clinic topics below. The source pages were used as topic references; entries were rewritten into a clear, educational collection format rather than copied verbatim.

| Collection article | Original RPT page | Image status | Clinical review |
|---|---|---|---|
| `back-pain.md` | `https://rptclinic.com/backpain/` | Local path reserved: `/images/articles/back-pain-rpt-clinic.jpg` | Required before publish |
| `neck-pain.md` | `https://rptclinic.com/neck-pain/` | Local path reserved: `/images/articles/neck-pain-rpt-clinic.jpg` | Required before publish |
| `knee-pain.md` | `https://rptclinic.com/knee-pain/` | Local path reserved: `/images/articles/knee-pain-rpt-clinic.jpg` | Required before publish |
| `shoulder-pain.md` | `https://rptclinic.com/shoulder-pain/` | Local path reserved: `/images/articles/shoulder-pain-rpt-clinic.jpg` | Required before publish |
| `sciatica.md` | `https://rptclinic.com/sciatica/` | Local path reserved: `/images/articles/sciatica-rpt-clinic.jpg` | Required before publish |
| `migraines.md` | `https://rptclinic.com/migraines/` | Local path reserved: `/images/articles/migraines-rpt-clinic.jpg` | Required before publish |
| `tmj.md` | `https://rptclinic.com/tmj/` | Local path reserved: `/images/articles/tmj-rpt-clinic.jpg` | Required before publish |
| `carpal-tunnel-syndrome.md` | `https://rptclinic.com/carpal-tunnel/` | Local path reserved: `/images/articles/carpal-tunnel-rpt-clinic.jpg` | Required before publish |
| `scoliosis.md` | `https://rptclinic.com/scoliosis/` | Local path reserved: `/images/articles/scoliosis-rpt-clinic.jpg` | Required before publish |

## Image migration workflow

1. Retrieve original media URLs from WordPress or the WordPress REST media library.
2. Confirm that RPT owns or is licensed to reuse every asset.
3. Export a compressed WebP or AVIF for the web and retain the approved original in your source-asset folder.
4. Add the output to `public/images/articles/` with the exact reserved filename, or update each article's `image` frontmatter path.
5. Verify alt text reflects the actual image and does not make unsupported treatment claims.

## Required editorial review

- Replace `Clinical reviewer pending` and `Credentials pending` with the approved reviewer record.
- Validate medical statements and all service-specific claims.
- Add citations or clinic-approved source references where required by your editorial process.
- Verify original meta titles/descriptions against the new search intent.
- Confirm that RPT service language and calls to action accurately match current care offerings.
- Test the published URL, canonical, Open Graph image and structured data after deployment.
