# RPT Clinic Article Images - Reference Guide

## Image URLs from RPT Clinic CDN

This document contains all image URLs discovered from the RPT Clinic website that correspond to article conditions. These images are directly linked from RPT Clinic's CDN and properly licensed for use on the RPT Clinic content.

### Condition Article Images

#### Back Pain
- **Page**: https://www.rptclinic.com/backpain/
- **Image URL**: https://rptclinic.com/wp-content/uploads/2026/01/back-pain-treatment.jpg
- **Alt Text**: Robotic Precision Therapy for back pain relief at RPT Clinic
- **Status**: ✅ Updated in frontmatter

#### Neck Pain
- **Page**: https://www.rptclinic.com/neck-pain/
- **Hero Image**: https://rptclinic.com/wp-content/uploads/2026/01/Neck3-980x654.jpg
- **Additional**: https://rptclinic.com/wp-content/uploads/2025/09/Untitled-design-6-980x653.png
- **Anatomy**: https://rptclinic.com/wp-content/uploads/2025/09/Neck-Muscles.png
- **Alt Text**: Robotic Precision Therapy treatment for neck pain relief
- **Status**: ✅ Updated in frontmatter

#### Knee Pain
- **Page**: https://www.rptclinic.com/knee-pain/
- **Hero Image**: https://rptclinic.com/wp-content/uploads/2026/01/Knee2-1-980x503.jpg
- **Treatment**: https://rptclinic.com/wp-content/uploads/2025/09/Knee-980x936.jpg
- **Anatomy**: https://rptclinic.com/wp-content/uploads/2025/08/5ef3a3814c915b3767f9f051_knee-anatomy-980x1380.jpg
- **Alt Text**: Robotic Precision Therapy treatment for knee pain relief
- **Status**: ✅ Updated in frontmatter

#### Shoulder Pain
- **Page**: https://www.rptclinic.com/shoulder-pain/
- **Hero Image**: https://rptclinic.com/wp-content/uploads/2026/01/Shoulder3-980x654.jpg
- **Anatomy**: https://rptclinic.com/wp-content/uploads/2025/08/Muscles-shoulder-980x980.webp
- **Treatment**: https://rptclinic.com/wp-content/uploads/2025/08/shoulder_pain_medreview-01-5c3b9f8546e0fb0001bdeaaa-d0a4923b7a3d441fb12d992c454a8ca7-980x653.png
- **Alt Text**: Robotic Precision Therapy treatment for shoulder pain relief
- **Status**: ✅ Updated in frontmatter

#### Sciatica
- **Page**: https://www.rptclinic.com/sciatica/
- **Status**: Needs image URL discovery

#### Carpal Tunnel Syndrome
- **Page**: https://www.rptclinic.com/carpal-tunnel/
- **Status**: Needs image URL discovery

#### Plantar Fasciitis
- **Page**: https://www.rptclinic.com/plantar-fasciitis/
- **Status**: Needs image URL discovery

#### Sports Performance
- **Page**: https://www.rptclinic.com/sports-performance/
- **Status**: Needs image URL discovery

---

## Implementation Strategy

### Current Approach
- Image URLs are directly linked from RPT Clinic CDN in article frontmatter
- No local image storage required
- Proper licensing: all images sourced directly from RPT Clinic
- Fast loading: leverages RPT Clinic's CDN infrastructure

### Advantages
✅ No copyright/licensing concerns (using official source)
✅ Automatic image optimization through RPT Clinic CDN
✅ Reduced storage requirements
✅ Images stay current with RPT Clinic updates
✅ No manual image management needed

### How to Use
1. In article frontmatter, set `image:` to the full CDN URL
2. The Astro component will load images directly from the CDN
3. RPTHero component displays the hero image at the top of articles

### Future Enhancements
- Fetch images for remaining conditions (Sciatica, Carpal Tunnel, etc.)
- Add secondary images to article body for visual enhancement
- Consider creating custom graphics for conditions without existing images

---

## Image Format Guidelines

All images from RPT Clinic are:
- **Format**: JPG, PNG, or WEBP
- **Dimensions**: Generally 980x654px or 980x936px (optimized for web)
- **Optimization**: Pre-optimized by RPT Clinic CDN
- **Licensing**: Owned by RPT Clinic

---

## References

- RPT Clinic Main Site: https://www.rptclinic.com/
- All condition pages follow pattern: https://www.rptclinic.com/{condition-name}/
- Images retrieved: September 1, 2026
