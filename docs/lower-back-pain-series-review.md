# Lower-back-pain series: research and review record

**Draft status:** Five articles remain unpublished. The article frontmatter uses `draft: true` and `seo.noindex: true`; the shared article reader excludes drafts by default. The article route opts into drafts only under Astro development mode. The public library, static production routes, and `/health/sitemap.xml` use the default reader and therefore exclude these files. Do not remove either flag or deploy draft previews before editorial and clinical approval.

**Local preview:** From the repository root, run `npm ci`, then `npm run dev -- --host 127.0.0.1`. Visit the appropriate local route:

- `/health/lower-back-pain-treatment-michigan-troy`
- `/health/nonsurgical-lower-back-pain-treatment-metro-detroit`
- `/health/physical-therapy-vs-robotic-precision-therapy-lower-back-pain`
- `/health/lower-back-pain-treatment-costs-michigan`
- `/health/choose-lower-back-pain-provider-troy-michigan`

The dev server renders the drafts with a noindex directive; no production static path is generated for them. The draft links between these pages are for the eventual reviewed cluster and local preview. Production availability requires a deliberate review and publication change.

## Research retrieval and pricing

**Attempt date:** October 9, 2026. All requested live pages below failed DNS name resolution from the coding environment (`No address associated with hostname`). A failed fetch is not a source review. The article links are preserved so an editor can open and verify them later. No current website terms, competitor content, or current price was claimed as independently verified.

| Source                               | URL                                                                                                                            | Retrieval result and use                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| RPT booking                          | https://rptclinic.com/booking/                                                                                                 | DNS failure; booking, payment, and appointment terms not verified |
| RPT FAQs                             | https://rptclinic.com/faqs/                                                                                                    | DNS failure; FAQs and policies not verified                       |
| RPT intake                           | https://rptclinic.com/intake-form/                                                                                             | DNS failure; duration and intake details not verified             |
| RPT intake 2                         | https://rptclinic.com/intake-form-2/                                                                                           | DNS failure; not independently compared                           |
| RPT packages                         | https://rptclinic.com/rpt-packages/                                                                                            | DNS failure; package inclusions and policies not verified         |
| RPT back pain                        | https://rptclinic.com/backpain/                                                                                                | DNS failure; provider claims not verified                         |
| RX2600                               | https://rx2600.com/                                                                                                            | DNS failure; manufacturer description not verified                |
| ACP guideline summary                | https://www.acponline.org/acp-newsroom/american-college-of-physicians-issues-guideline-for-treating-nonradicular-low-back-pain | DNS failure; no fresh source review                               |
| JOSPT guideline                      | https://www.jospt.org/doi/10.2519/jospt.2021.0508                                                                              | DNS failure; no fresh source review                               |
| HealthCare.gov total costs           | https://www.healthcare.gov/choose-a-plan/your-total-costs/                                                                     | DNS failure; no fresh source review                               |
| HealthCare.gov coinsurance           | https://www.healthcare.gov/glossary/co-insurance/                                                                              | DNS failure; no fresh source review                               |
| HealthCare.gov copayment             | https://www.healthcare.gov/glossary/co-payment/                                                                                | DNS failure; no fresh source review                               |
| HealthCare.gov out-of-pocket maximum | https://www.healthcare.gov/glossary/out-of-pocket-maximum-limit/                                                               | DNS failure; no fresh source review                               |

The pricing figures in these drafts are the values expressly supplied in the approved task brief, not a claim of live-site verification: $225 initial assessment plus treatment (1.5 hours); $150 per follow-up treatment hour; standard arithmetic $225 + $150 × (_n_ − 1), _n_ ≥ 1; Advanced $1,500 for 11 follow-ups and $1,725 with the separate initial visit (12 appointments); Premium $2,250 for 17 follow-ups and $2,475 with the separate initial (18 appointments). The brief also reports that intake pages describe follow-ups as 50–60 minutes. **Resolve the hourly-rate/visit-duration detail in current clinic materials before publication.** Confirm current price, appointment length, package inclusions, payment methods, referral/authorization, expiration, cancellation, and refund terms; those policies are unknown here and have not been invented.

No Michigan surgery average is stated. Any later surgery estimate must identify the specific procedure and distinguish facility charges, professional fees, cash estimates, full episode scope, allowed amounts, and the insured patient’s responsibility. The optional Sidecar Health spinal-fusion page was not used because its current figure and exclusions could not be verified.

## Competitor keyword audit

The requested five competitor URLs were attempted on October 9, 2026, and all failed DNS resolution. **Retrieved pages: 0/5.** Consequently there are no actual retrieved-main-text word counts, phrase counts, densities, or heading placements to report. These results are **unavailable**, not zero; no rank, search volume, or competitor-page text has been invented.

| Page                          | URL                                                                              | Retrieved main-text word count | Phrase counts/density and visible heading placement |
| ----------------------------- | -------------------------------------------------------------------------------- | ------------------------------ | --------------------------------------------------- |
| Corewell Health               | https://corewellhealth.org/care-and-specialties/orthopedics/back-neck-spine-care | Unavailable—DNS failure        | Unavailable—page not retrieved                      |
| Nerve Disc Institute          | https://nervediscinstitute.com/                                                  | Unavailable—DNS failure        | Unavailable—page not retrieved                      |
| University of Michigan Health | https://www.uofmhealth.org/our-care/specialties-services/back-pain               | Unavailable—DNS failure        | Unavailable—page not retrieved                      |
| U.S. News directory           | https://health.usnews.com/doctors/lower-back-pain/michigan                       | Unavailable—DNS failure        | Unavailable—page not retrieved                      |
| Spine Michigan                | https://spinemi.com/                                                             | Unavailable—DNS failure        | Unavailable—page not retrieved                      |

To reproduce when access is available, run `python3 scripts/audit_competitor_keywords.py`. The dependency-free script fetches only the five allowlisted URLs, records a UTC retrieval timestamp and final URL, extracts visible text from the first `<main>` or `<article>` (falling back to visible body text if absent), excludes script/style/navigation/header/footer/aside/form text, and reports word counts, exact case-insensitive phrase counts, occurrences per 1,000 words, and visible heading matches. It prints counts and headings only, not page text. Extraction boundaries may differ from a publisher’s rendered view; retain the retrieval date and review results before using them. Re-run from an environment with access and replace this table only with actually retrieved, dated results.

## Search intent and interlink plan

| Draft                                                                                | Primary intent                                                      | Cluster links                                                  |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------- | -------------------------------------------------------------- |
| Best Lower Back Pain Treatment in Michigan: Comparing Your Options Near Troy         | Compare treatment options; statewide discovery with Troy conversion | Non-surgical Metro Detroit; PT vs. RPT; costs; provider choice |
| Non-Surgical Lower Back Pain Treatment in Metro Detroit: Where to Start              | Local conservative-care discovery and next step                     | Options near Troy; PT vs. RPT; provider choice; costs          |
| Physical Therapy vs. Robotic Precision Therapy for Lower Back Pain                   | Branded/unbranded comparison and evidence distinction               | Options near Troy; non-surgical care; costs                    |
| Lower Back Pain Treatment Costs in Michigan: PT, Surgery, and Out-of-Pocket Expenses | Cost/insurance research                                             | Options near Troy; PT vs. RPT; non-surgical care               |
| How to Choose a Lower Back Pain Treatment Provider in Troy, Michigan                 | Local provider evaluation and conversion                            | Options near Troy; costs; non-surgical care                    |

Existing published links point only to existing library articles. Draft-to-draft links are intentionally usable in local preview but cannot be reached in the public build before publication. Do not add links from live older articles to hidden routes before the cluster is approved and published.

## Clinical and policy review checklist

- [ ] A qualified clinician reviews all medical statements, red-flag language, evidence summaries, and referral guidance.
- [ ] Confirm guideline scope, publication details, and current interpretation directly from ACP and JOSPT; neither is presented as endorsing RX2600.
- [ ] Confirm the RX2600 is accurately distinguished from robotic spine surgery and remove any claim of superiority, equivalent outcomes, guaranteed relief, or unsupported success rates.
- [ ] Verify RPT’s current initial price, follow-up hourly rate, 50–60-minute follow-up duration, and the apparent rate/duration ambiguity.
- [ ] Verify Advanced and Premium package follow-up counts, separate initial-visit charge, inclusions, payment timing, expiration, cancellation, and refund policies.
- [ ] Confirm local clinic locations, appointment access, service descriptions, contact/booking CTA, and any referral/authorization statements.
- [ ] Recheck every HealthCare.gov definition and ensure insurance examples remain qualified and do not imply benefit determination.
- [ ] Obtain current itemized surgery quote sources if cost figures are later considered; otherwise retain the no-average limitation.
- [ ] Retrieve competitor pages, rerun the keyword report, verify extracted main-text boundaries and visible headings, and date the results; do not infer rank or volume.
- [ ] Review every FAQ across the five intent pages for accuracy, accessibility, uniqueness, and alignment with the article text.
- [ ] Confirm original SVG accessibility alternatives, mobile rendering, and no external/unlicensed images.
- [ ] Keep all five `draft: true` and `seo.noindex: true` until review is complete and publication is explicitly authorized.
- [ ] Before any later publication, set each article’s actual publication date and obtain explicit editorial/clinical approval.

## Implementation validation status

- Calculator tests: `npm run test:calculator` passed, including 30 × $40 copays = $1,200, 30 × $8 transportation = $240, 30 × (45 + 40 + 15) minutes = 50 hours, and 30 × 1 unpaid hour × $25 = $750 shown separately.
- Package and insurance-boundary calculations are covered by the same tests.
- `npm ci` installed the lockfile; npm reported 20 dependency audit findings (6 moderate, 12 high, 2 critical) in the existing dependency tree. No dependency was added or updated for this work.
- `npm run build` passed: Astro reported 0 errors and 107 hints (existing deprecation/unused-code hints), then generated 159 production pages. A separate assertion confirmed that all five draft routes are absent from the production health-library listing and sitemap.
- Focused Prettier checks passed for the new components, article drafts, calculator module/tests, and this report. The repository-wide `npm run lint` does not pass: it reports formatting warnings across existing files and syntax errors in the pre-existing `testimonials-archived.json` files under `src/landing/page_data/clinic/{default,rpt}`. Those unrelated files were not changed.
- The competitor script’s parser smoke test passed; all five live fetches remain unavailable due DNS failures.
- Live source retrieval and competitor audit are unavailable for the DNS reason above.
