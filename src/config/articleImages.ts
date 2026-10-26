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
  'muscle-strain': '/health/images/Sports/runner-stretching.jpg',
  'muscle-tightness': '/health/images/Sports/stretch.jpg',
  'muscle-weakness': '/health/images/Sports/mobility.jpg',
  'top-5-ways-to-reduce-muscle-soreness': '/health/images/Sports/stretch.jpg',
  'when-to-see-a-doctor-for-joint-pain': '/health/images/Sports/mobility.jpg',
  'wrist-pain': '/health/images/Sports/tennis-2.jpg',
  'runners-knee': '/health/images/Sports/runner-stretching.jpg',
  'runners-knee-rpt': '/health/images/Sports/runner-stretching.jpg',
  'how-to-reduce-knee-pain-when-running': '/health/images/Sports/runner-stretching.jpg',
  'knee-pain': '/health/images/Sports/runner-stretching.jpg',
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
  'how-to-avoid-lower-back-pain-when-running': { src: '/health/images/Sports/running-man-morning-run.jpg', alt: 'Runner on a morning run' },
  'how-to-avoid-lower-back-pain-when-playing-golf': { src: '/health/images/Sports/golfer-swing.jpg', alt: 'Golfer taking a swing' },
  'how-to-avoid-lower-back-pain-when-skiing': { src: '/health/images/Sports/skiing-down-the-mountain.jpg', alt: 'Skier heading down the mountain' },
  'how-to-avoid-lower-back-pain-when-snowboarding': { src: '/health/images/Sports/snowboarding-down-the-mountain.jpg', alt: 'Snowboarder riding down the mountain' },
  'how-to-avoid-lower-back-pain-when-walking': { src: '/health/images/Sports/walking-in-the-morning.jpg', alt: 'Person walking outdoors in the morning' },
  'how-to-avoid-lower-back-pain-when-working-out': { src: '/health/images/Sports/working-out-on-the-bench-arms.jpg', alt: 'Person training at the gym' },
  ...Object.fromEntries(
    ([
      ['back-pain', 'Back/lower-back-pain-after-workout', 'Hand resting on the lower back after exercise'],
      ['back-pain-specialist-near-me-troy-mi', 'Back/pexels-yankrukov-5793794', 'Clinician assessing a patient’s lower back'],
      ['back-pain-treatment-near-detroit-rpt', 'Back/pexels-funkcines-terapijos-centras-927573878-20860598', 'Therapist working on a patient’s lower back'],
      ['best-exercises-for-sciatica', 'Back/pexels-miriam-alonso-7592445', 'Person hugging knees to chest on a mat'],
      ['chronic-sciatica-treatment', 'Back/pexels-yankrukov-5793987', 'Clinician’s hand on a patient’s hip and lower back'],
      ['choose-lower-back-pain-provider-troy-michigan', 'Back/pexels-yankrukov-5793804', 'Clinician evaluating a seated patient’s back'],
      ['bulging-disc', 'Back/pexels-kindelmedia-7298408', 'Person with hands on the lower back'],
      ['bulging-disc-rpt', 'Back/pexels-karola-g-4506113', 'Therapist hands assessing a patient’s back'],
      ['herniated-disc', 'Back/backpain', 'Person holding their lower back'],
      ['herniated-disc-treatment-near-detroit-rpt', 'Back/pexels-yankrukov-5793794', 'Clinician assessing a patient’s lower back'],
      ['how-to-fix-your-sciatica', 'Back/pexels-miriam-alonso-7592445', 'Person stretching on a mat'],
      ['how-to-relieve-back-pain-from-sitting', 'Back/pexels-miriam-alonso-7592376', 'Person stretching their arms while seated'],
      ['how-to-relieve-sciatica-pain', 'Back/sciatica-back-pain', 'Person with a hand on the hip and lower back'],
      ['how-to-tell-sciatica-from-piriformis-pain', 'Back/pexels-anastasia-shuraeva-9517935', 'Athlete holding a painful hip and leg'],
      ['left-side-back-pain', 'Back/backpain-1', 'Person holding the side of the lower back'],
      ['right-side-back-pain', 'Back/pexels-kindelmedia-7298408', 'Person with hands on the lower back'],
      ['lower-back-pain', 'Back/pexels-kindelmedia-7298408', 'Person with hands on the lower back'],
      ['lower-back-pain-treatment-costs-michigan', 'Back/pexels-karola-g-4506113', 'Therapist hands assessing a patient’s back'],
      ['lower-back-pain-treatment-michigan-troy', 'Back/pexels-funkcines-terapijos-centras-927573878-20860598', 'Therapist working on a patient’s lower back'],
      ['massage-for-chronic-back-pain-detroit', 'Back/pexels-funkcines-terapijos-centras-927573878-20860598', 'Hands-on treatment for the lower back'],
      ['nonsurgical-lower-back-pain-treatment-metro-detroit', 'Back/pexels-yankrukov-5793804', 'Clinician evaluating a seated patient’s back'],
      ['physical-therapy-vs-robotic-precision-therapy-lower-back-pain', 'Back/pexels-yankrukov-5793987', 'Clinician’s hand on a patient’s hip and lower back'],
      ['piriformis-syndrome-vs-sciatica', 'Back/sciatica-back-pain', 'Person with a hand on the hip'],
      ['sacroiliac-joint-pain', 'Back/pexels-yankrukov-5793987', 'Clinician’s hand on a patient’s hip and pelvis'],
      ['sciatic-nerve-pain-in-leg', 'Back/pexels-anastasia-shuraeva-9517935', 'Athlete holding a painful leg'],
      ['sciatica', 'Back/sciatica-back-pain', 'Person with a hand on the hip and lower back'],
      ['sciatica-from-sitting', 'Back/pexels-miriam-alonso-7592376', 'Person stretching their arms while seated'],
      ['sciatica-pain-treatment', 'Back/pexels-yankrukov-5793794', 'Clinician assessing a patient’s lower back'],
      ['sciatica-relief-near-detroit-rpt', 'Back/pexels-miriam-alonso-7592445', 'Person stretching their hips and back on a mat'],
      ['sciatica-specialist-detroit', 'Back/pexels-karola-g-4506113', 'Therapist hands assessing a patient’s back'],
      ['sciatica-treatment-without-surgery', 'Back/pexels-funkcines-terapijos-centras-927573878-20860598', 'Therapist working on a patient’s lower back'],
      ['scoliosis', 'Back/pexels-pavel-danilyuk-6443472', 'Person standing with hands clasped behind the back'],
      ['scoliosis-rpt', 'Back/pexels-karola-g-4506113', 'Therapist hands assessing a patient’s back'],
      ['spinal-stenosis', 'Back/pexels-cottonbro-5771799', 'Person arching their back on a sofa'],
      ['spinal-stenosis-rpt', 'Back/pexels-yankrukov-5793804', 'Clinician evaluating a seated patient’s back'],
      ['tailbone-pain', 'Back/pexels-kindelmedia-7298408', 'Person with hands at the base of the back'],
      ['top-5-ways-to-reduce-back-pain', 'Back/pexels-pavel-danilyuk-6443472', 'Person standing tall with arms behind the back'],
      ['understanding-lower-back-pain', 'Back/backpain-1', 'Person holding their lower back'],
      ['understanding-lower-back-pain-rpt', 'Back/pexels-yankrukov-5793794', 'Clinician assessing a patient’s lower back'],
      ['upper-back-pain', 'Back/pexels-fero-31818708', 'Woman doing a seated cable row'],
      ['what-to-do-for-sciatic-nerve-pain-flare-up', 'Back/pexels-miriam-alonso-7592445', 'Person easing tension on a mat'],
      ['when-to-see-a-doctor-for-back-pain', 'Back/pexels-yankrukov-5793794', 'Clinician assessing a patient’s lower back'],
      ['when-to-see-a-doctor-for-sciatic-nerve-pain', 'Back/pexels-yankrukov-5793987', 'Clinician’s hand on a patient’s hip and lower back'],
      ['when-to-see-doctor-sciatica', 'Back/pexels-yankrukov-5793804', 'Clinician evaluating a seated patient’s back'],
      ['why-does-my-back-pain-keep-coming-back', 'Back/lower-back-pain-after-workout', 'Hand resting on the lower back'],
    ] as const).map(([id, file, alt]) => [id, { src: `/health/images/${file}.jpg`, alt }]),
  ),
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
