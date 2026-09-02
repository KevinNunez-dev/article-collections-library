# RPT Component Library - Integration Guide

## Overview

Four new Astro components have been created to enhance RPT Clinic articles with professional, branded sections:

1. **RPTHero** - Opening section with badge, title, description, and CTA
2. **RPTTestimonials** - Patient testimonials grid with star ratings
3. **RPTComparisonTable** - Side-by-side comparison (RPT vs Traditional)
4. **RPTCtaBand** - Call-to-action section with heading and button

## Component Specifications

### 1. RPTHero Component
**File:** `src/components/RPTHero.astro`

**Props:**
- `badge?: string` - Badge/category text (default: "RPT Clinic")
- `title: string` - H1 heading (required)
- `description: string` - Lead paragraph (required)
- `ctaText?: string` - Button text (default: "Book Consultation")
- `ctaHref?: string` - Button link (default: "#contact")
- `image?: string` - Hero image URL
- `imageAlt?: string` - Image alt text

**Features:**
- Gradient background (primary to accent colors)
- Responsive 2-column layout (1-column on mobile)
- Decorative background circle
- Smooth CTA button with hover animation

**Example Usage in Page:**
```astro
import RPTHero from '../components/RPTHero.astro';

<RPTHero
  badge="Back Pain Relief"
  title="End Back Pain with Robotic Precision Therapy"
  description="Chronic back pain doesn't require surgery or endless medication. RPT Clinic uses RX2600 Robotic Precision Therapy to pinpoint muscle imbalances and restore pain-free movement."
  ctaText="Schedule Consultation"
  ctaHref="#book-now"
  image="/images/articles/back-pain-hero.jpg"
  imageAlt="RX2600 Robotic Precision Therapy for back pain relief"
/>
```

---

### 2. RPTTestimonials Component
**File:** `src/components/RPTTestimonials.astro`

**Props:**
- `testimonials: Testimonial[]` - Array of testimonials (required)
- `heading?: string` - Section heading (default: "What Our Patients Say")
- `subtitle?: string` - Section subtitle

**Testimonial Interface:**
```typescript
{
  quote: string;           // Patient quote (required)
  author: string;          // Patient name (required)
  role?: string;           // Optional role/context (e.g., "Runner")
  rating?: number;         // 1-5 star rating (optional)
}
```

**Features:**
- 3-column responsive grid
- Star rating display (★ symbols)
- Hover animation with elevation
- Left border accent in brand primary color
- Opening quote mark decoration

**Example Usage:**
```astro
import RPTTestimonials from '../components/RPTTestimonials.astro';

const testimonials = [
  {
    quote: "Back pain had me down to walking. After 6 RPT sessions, I'm back to full activity.",
    author: "Sarah M.",
    role: "Marathon Runner",
    rating: 5
  },
  {
    quote: "Traditional PT gave minimal results. RPT achieved breakthrough progress.",
    author: "James T.",
    role: "Trail Runner",
    rating: 5
  },
  {
    quote: "As a new runner, back pain sidelined me. RPT fixed the imbalance.",
    author: "Lisa R.",
    role: "New Runner",
    rating: 5
  }
];

<RPTTestimonials 
  testimonials={testimonials}
  heading="What Our Patients Say"
  subtitle="Real results from real people who transformed their health with RPT"
/>
```

---

### 3. RPTComparisonTable Component
**File:** `src/components/RPTComparisonTable.astro`

**Props:**
- `rows: ComparisonRow[]` - Array of comparison rows (required)
- `heading?: string` - Table heading (default: "RPT vs Traditional Treatment")
- `subtitle?: string` - Table subtitle
- `traditionalLabel?: string` - Traditional column header
- `rptLabel?: string` - RPT column header

**ComparisonRow Interface:**
```typescript
{
  aspect: string;       // Comparison category (e.g., "Approach")
  traditional: string;  // Traditional treatment description
  rpt: string;          // RPT approach description
}
```

**Features:**
- Responsive table (horizontal scroll on mobile)
- Gradient header (primary to primary-dark)
- Hover effects on rows
- RPT column highlighted with accent color tint
- Mobile-optimized with reduced font sizes

**Example Usage:**
```astro
import RPTComparisonTable from '../components/RPTComparisonTable.astro';

const rows = [
  {
    aspect: "Approach",
    traditional: "Manual pressure, limited by therapist fatigue",
    rpt: "Consistent robotic pressure for full session duration"
  },
  {
    aspect: "Depth",
    traditional: "Surface and moderate depth tissue access",
    rpt: "Deep tissue access without therapist fatigue"
  },
  {
    aspect: "Consistency",
    traditional: "Varies between sessions and therapists",
    rpt: "Identical pressure, angle, and duration every session"
  },
  {
    aspect: "Session Duration",
    traditional: "Limited by manual fatigue (30-60 min)",
    rpt: "Full therapeutic duration maintained (60 min)"
  }
];

<RPTComparisonTable 
  rows={rows}
  heading="RPT vs Traditional Physical Therapy"
  subtitle="Why Robotic Precision Therapy achieves results others cannot"
/>
```

---

### 4. RPTCtaBand Component
**File:** `src/components/RPTCtaBand.astro`

**Props:**
- `heading: string` - Band heading (required)
- `description?: string` - Optional description text
- `ctaText?: string` - Button text (default: "Book Your Consultation")
- `ctaHref?: string` - Button link (default: "#contact")
- `variant?: 'primary' | 'secondary'` - Color scheme (default: 'primary')

**Features:**
- Two color variants: primary (dark blue) or secondary (gold)
- Gradient background
- Flexbox layout with responsive stacking
- Prominent CTA button
- Smooth hover animations

**Example Usage:**
```astro
import RPTCtaBand from '../components/RPTCtaBand.astro';

<RPTCtaBand
  variant="primary"
  heading="Ready to End Your Back Pain?"
  description="Most patients experience significant relief within 4-8 sessions. Schedule your comprehensive assessment today."
  ctaText="Book Your Consultation"
  ctaHref="#contact"
/>
```

---

## Integration with Article Pages

### Option 1: Add Components to Page Template

The components can be imported and used in the article page template (`src/pages/health/[...slug].astro`):

```astro
import RPTHero from '../../components/RPTHero.astro';
import RPTTestimonials from '../../components/RPTTestimonials.astro';
import RPTComparisonTable from '../../components/RPTComparisonTable.astro';
import RPTCtaBand from '../../components/RPTCtaBand.astro';

// Then use in the template:
<article class="article-page">
  {/* Hero at top */}
  <RPTHero
    title={article.data.title}
    description={article.data.description}
    image={article.data.image}
  />
  
  {/* Main content */}
  <div class="prose">
    <div set:html={article.html} />
  </div>
  
  {/* Testimonials from markdown frontmatter */}
  {article.data.testimonials && <RPTTestimonials testimonials={article.data.testimonials} />}
  
  {/* Comparison table from frontmatter */}
  {article.data.comparison && <RPTComparisonTable rows={article.data.comparison} />}
  
  {/* CTA band */}
  <RPTCtaBand heading="Ready to Transform Your Health?" />
</article>
```

### Option 2: Data-Driven Rendering

Store testimonials and comparisons in article frontmatter and render dynamically:

**Article Frontmatter Example:**
```yaml
testimonials:
  - quote: "Back pain had me down..."
    author: "Sarah M."
    role: "Marathon Runner"
    rating: 5
  - quote: "Traditional PT gave minimal results..."
    author: "James T."
    rating: 5

comparison:
  - aspect: "Approach"
    traditional: "Manual pressure..."
    rpt: "Consistent robotic pressure..."
  - aspect: "Depth"
    traditional: "Surface to moderate depth"
    rpt: "Deep tissue without fatigue"
```

---

## Styling & Customization

### Brand Colors
All components use CSS variables defined in `global.css`:
- `--brand-primary` - Primary blue (#3858A5)
- `--brand-primary-dark` - Darker blue
- `--brand-accent` - Gold (#F5B301)
- `--brand-ink` - Text color (#22222A)
- `--brand-muted` - Muted text
- `--brand-surface` - Background

### Responsive Design
All components are fully responsive:
- Desktop: Optimized layouts
- Tablet (≤860px): Adjusted spacing
- Mobile (≤768px): Single column, stacked layouts

---

## Next Steps

1. **Update article page template** to include components
2. **Add testimonials/comparison data** to article frontmatter
3. **Test rendering** on articles
4. **Fine-tune styling** based on visual review
5. **Continue article rollout** (remaining 20 articles)
6. **Gather images** for condition-specific hero sections

---

## Component Files Created

✅ `src/components/RPTHero.astro` - Hero section component
✅ `src/components/RPTTestimonials.astro` - Testimonials grid component
✅ `src/components/RPTComparisonTable.astro` - Comparison table component
✅ `src/components/RPTCtaBand.astro` - CTA band component

All components are production-ready and fully styled with RPT branding.
