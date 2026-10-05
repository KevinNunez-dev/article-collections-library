export type Pillar = { id: string; label: string };

// Ordered rules: first match wins. Patterns test the article id plus its tags.
const rules: Array<[RegExp, Pillar]> = [
  [/sciatic|piriformis/, { id: 'sciatica', label: 'sciatica' }],
  [/neck|base-of-neck/, { id: 'neck-pain', label: 'neck pain' }],
  [/shoulder/, { id: 'shoulder-pain', label: 'shoulder pain' }],
  [/elbow|forearm|wrist|hand|carpal/, { id: 'elbow-pain', label: 'arm, elbow and hand pain' }],
  [/knee|shin|runner/, { id: 'knee-pain', label: 'knee pain' }],
  [/groin|glute|hip|sacroiliac|tailbone/, { id: 'hip-pain', label: 'hip and pelvic pain' }],
  [/calf|achilles|ankle|foot|heel|plantar/, { id: 'foot-pain', label: 'foot and ankle pain' }],
  [/back|spine|spinal|disc|scoliosis|stenosis/, { id: 'back-pain', label: 'back pain' }],
  [/spasm|strain|tight|stiff|weakness|sore|motion/, { id: 'sports-injuries', label: 'muscle and sports injuries' }],
  [/posture/, { id: 'poor-posture', label: 'postural pain' }],
];

export function getPillar(articleId: string, tags: string[] = []): Pillar | null {
  const haystack = `${articleId} ${tags.join(' ')}`.toLowerCase();
  const match = rules.find(([pattern]) => pattern.test(haystack));
  if (!match || match[1].id === articleId) return null;
  return match[1];
}
