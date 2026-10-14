const imageByArticleId: Record<string, string> = {
  'back-pain': '/health/images/Back/backpain.jpg',
  'lower-back-pain': '/health/images/Back/backpain.jpg',
  'upper-back-pain': '/health/images/Back/backpain-1.jpg',
  'left-side-back-pain': '/health/images/Back/backpain-1.jpg',
  'right-side-back-pain': '/health/images/Back/backpain.jpg',
  'how-to-relieve-back-pain-from-sitting': '/health/images/Back/backpain-1.jpg',
  'top-5-ways-to-reduce-back-pain': '/health/images/Back/backpain.jpg',
  'bulging-disc': '/health/images/Back/backpain-1.jpg',
  'bulging-disc-rpt': '/health/images/Back/backpain-1.jpg',
  'herniated-disc': '/health/images/Back/backpain.jpg',
  'sciatica': '/health/images/Back/backpain-1.jpg',
  'how-to-relieve-sciatica-pain': '/health/images/Back/backpain-1.jpg',
  'sacroiliac-joint-pain': '/health/images/Back/backpain.jpg',
  'scoliosis': '/health/images/Back/backpain-1.jpg',
  'scoliosis-rpt': '/health/images/Back/backpain-1.jpg',
  'tailbone-pain': '/health/images/Back/backpain.jpg',
  'spinal-stenosis': '/health/images/Back/backpain-1.jpg',
  'spinal-stenosis-rpt': '/health/images/Back/backpain-1.jpg',
  'neck-pain': '/health/images/Shoulder/neckpain.jpg',
  'base-of-neck-pain': '/health/images/Shoulder/lower neckpain.jpg',
  'how-to-fix-neck-pain-from-sleeping': '/health/images/Shoulder/neckpain.jpg',
  'shoulder-pain': '/health/images/Sports/tennis-sports.jpg',
  'shoulder-blade-pain': '/health/images/Sports/tennis.jpg',
  'how-to-relieve-neck-and-shoulder-tension': '/health/images/Sports/stretch.jpg',
  'tennis-elbow': '/health/images/Sports/tennis.jpg',
  'tennis-elbow-rpt': '/health/images/Sports/tennis-sports.jpg',
  'sports-injuries': '/health/images/Sports/stretch.jpg',
  'sports-injuries-rpt': '/health/images/Sports/stretch.jpg',
  'sports-performance': '/health/images/Sports/mobility.jpg',
  'golf-swing': '/health/images/Sports/mobility-2.jpg',
  'golf-swing-rpt': '/health/images/Sports/mobility-2.jpg',
  'carpal-tunnel-syndrome': '/health/images/Sports/mobility-2.jpg',
  'elbow-pain': '/health/images/Sports/tennis-2.jpg',
  'forearm-pain': '/health/images/Sports/stretch.jpg',
  'golfers-elbow': '/health/images/Sports/mobility-2.jpg',
  'golfers-elbow-rpt': '/health/images/Sports/mobility-2.jpg',
  'hand-pain': '/health/images/Sports/tennis-sports.jpg',
  'how-to-improve-posture': '/health/images/Sports/mobility.jpg',
  'limited-range-of-motion': '/health/images/Sports/mobility-2.jpg',
  'muscle-spasms': '/health/images/Sports/stretch.jpg',
  'muscle-stiffness': '/health/images/Sports/stretch.jpg',
  'muscle-strain': '/health/images/Sports/runner stretching.jpg',
  'muscle-tightness': '/health/images/Sports/stretch.jpg',
  'muscle-weakness': '/health/images/Sports/mobility.jpg',
  'top-5-ways-to-reduce-muscle-soreness': '/health/images/Sports/stretch.jpg',
  'when-to-see-a-doctor-for-joint-pain': '/health/images/Sports/mobility.jpg',
  'wrist-pain': '/health/images/Sports/tennis-2.jpg',
  'runners-knee': '/health/images/Sports/runner stretching.jpg',
  'runners-knee-rpt': '/health/images/Sports/runner stretching.jpg',
  'how-to-reduce-knee-pain-when-running': '/health/images/Sports/runner stretching.jpg',
  'knee-pain': '/health/images/Sports/runner stretching.jpg',
  'shin-splints': '/health/images/Leg/lower-leg-treatment.webp',
  'shin-splints-rpt': '/health/images/Leg/lower-leg-treatment.webp',
  'calf-pain': '/health/images/Leg/calf-treatment.webp',
  'achilles-tendon-pain': '/health/images/Leg/calf-treatment.webp',
  'plantar-fasciitis': '/health/images/Leg/calf-treatment.webp',
  'ankle-pain': '/health/images/Leg/lower-leg-treatment.webp',
  'foot-pain': '/health/images/Leg/lower-leg-treatment.webp',
  'heel-pain': '/health/images/Leg/calf-treatment.webp',
};

const arm = (n: number) => `/health/images/Arm/carpal-tunnel-${n}.jpg`;
const knee = (n: number) => `/health/images/Leg/knee-pain-${n}.jpg`;
const foot = (n: number) => `/health/images/Leg/foot-${n}.jpg`;

// Condition-specific photos, spread across matching articles.
const photoByArticleId: Record<string, { src: string; alt: string }> = {
  'carpal-tunnel-syndrome': { src: arm(1), alt: 'Person holding their wrist with an open palm, showing carpal tunnel discomfort' },
  'best-carpal-tunnel-treatment-near-detroit': { src: arm(2), alt: 'Person with hand and wrist pain from carpal tunnel syndrome' },
  'wrist-pain': { src: arm(3), alt: 'Person gripping a painful wrist' },
  'hand-pain': { src: arm(1), alt: 'Person holding a sore wrist and hand' },
  'forearm-pain': { src: arm(2), alt: 'Person with forearm and wrist discomfort' },
  'knee-pain': { src: knee(1), alt: 'Person holding their knee with both hands' },
  'knee-pain-treatment-near-detroit-rpt': { src: knee(2), alt: 'Person with knee pain during activity' },
  'runners-knee': { src: knee(3), alt: 'Runner pausing with knee pain' },
  'runners-knee-rpt': { src: knee(1), alt: 'Runner holding a painful knee' },
  'inner-knee-pain': { src: knee(2), alt: 'Person with inner knee pain' },
  'outer-knee-pain': { src: knee(3), alt: 'Person with outer knee pain' },
  'how-to-reduce-knee-pain-when-running': { src: knee(1), alt: 'Runner holding a sore knee' },
  'top-5-ways-to-reduce-knee-pain': { src: knee(2), alt: 'Person easing knee pain' },
  'foot-pain': { src: foot(1), alt: 'Person massaging the sole and toes of a sore foot' },
  'bunions': { src: foot(2), alt: 'Person with bunion and big toe pain' },
  'bunions-rpt': { src: foot(3), alt: 'Person with bunion and forefoot pain' },
  'bunion-pain-treatment-near-detroit-rpt': { src: foot(1), alt: 'Person holding a painful foot and big toe' },
  'heel-pain': { src: foot(2), alt: 'Person with heel and foot pain' },
  'plantar-fasciitis': { src: foot(3), alt: 'Person with plantar foot pain' },
  'ankle-pain': { src: foot(1), alt: 'Person with ankle and foot pain' },
};

export function getArticlePhoto(articleId: string) {
  return photoByArticleId[articleId];
}

const defaultImages = ['/health/images/rpt-clinic-treatment.jpg', '/health/images/rpt-clinic-treatment-2.jpg'];

export function getArticleThumbnail(articleId: string, _fallback?: string, title = '', category = '') {
  const searchableText = `${articleId} ${title} ${category}`.toLowerCase();

  if (photoByArticleId[articleId]) return photoByArticleId[articleId].src;
  if (imageByArticleId[articleId]) return imageByArticleId[articleId];
  if (/\bback\b|spine|sciatica|disc/.test(searchableText)) return '/health/images/Back/backpain.jpg';
  if (/\bneck\b|shoulder/.test(searchableText)) return '/health/images/Shoulder/neckpain.jpg';
  if (/\bknee\b|calf|ankle|foot|heel|shin|achilles|plantar/.test(searchableText)) return '/health/images/Leg/lower-leg-treatment.webp';
  if (/\bsport|elbow|wrist|hand|muscle|mobility|posture/.test(searchableText)) return '/health/images/Sports/mobility.jpg';

  // Alternate the two therapist shots deterministically so cards never render blank.
  let hash = 0;
  for (const char of articleId) hash = (hash + char.charCodeAt(0)) % 2;
  return defaultImages[hash];
}
