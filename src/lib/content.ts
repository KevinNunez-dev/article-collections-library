import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const CONTENT_DIR = path.resolve('./src/content');

const topicLinks = [
  ['lower back pain', 'lower-back-pain'],
  ['upper back pain', 'upper-back-pain'],
  ['right-side back pain', 'right-side-back-pain'],
  ['left-side back pain', 'left-side-back-pain'],
  ['shoulder blade pain', 'shoulder-blade-pain'],
  ['base of the neck', 'base-of-neck-pain'],
  ['sacroiliac joint pain', 'sacroiliac-joint-pain'],
  ['carpal tunnel syndrome', 'carpal-tunnel-syndrome'],
  ['Achilles tendon pain', 'achilles-tendon-pain'],
  ['plantar fasciitis', 'plantar-fasciitis'],
  ['limited range of motion', 'limited-range-of-motion'],
  ['muscle weakness', 'muscle-weakness'],
  ['muscle stiffness', 'muscle-stiffness'],
  ['muscle tightness', 'muscle-tightness'],
  ['muscle spasms', 'muscle-spasms'],
  ['muscle strain', 'muscle-strain'],
  ['outer knee pain', 'outer-knee-pain'],
  ['inner knee pain', 'inner-knee-pain'],
  ['runner\'s knee', 'runners-knee'],
  ['shoulder pain', 'shoulder-pain'],
  ['shoulder', 'shoulder-pain'],
  ['neck pain', 'neck-pain'],
  ['sciatica', 'sciatica'],
  ['hip pain', 'hip-pain'],
  ['glute pain', 'glute-pain'],
  ['groin pain', 'groin-pain'],
  ['elbow pain', 'elbow-pain'],
  ['wrist pain', 'wrist-pain'],
  ['hand pain', 'hand-pain'],
  ['forearm pain', 'forearm-pain'],
  ['calf pain', 'calf-pain'],
  ['heel pain', 'heel-pain'],
  ['foot pain', 'foot-pain'],
  ['ankle pain', 'ankle-pain'],
  ['knee pain', 'knee-pain'],
  ['back pain', 'back-pain'],
  ['migraines', 'migraines'],
  ['TMJ', 'tmj'],
] as const;

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function addContextualTopicLinks(html: string, sourceId: string, limit = 3) {
  const candidates = topicLinks
    .filter(([, destination]) => destination !== sourceId)
    .sort(([first], [second]) => second.length - first.length);
  const excludedTags = new Set(['a', 'code', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'pre']);
  const tokens = html.split(/(<[^>]+>)/g);
  let excludedDepth = 0;
  let linksAdded = 0;
  const linkedDestinations = new Set<string>();

  return tokens.map((token) => {
    const tag = token.match(/^<\/?([a-z0-9]+)/i);
    if (tag) {
      const tagName = tag[1].toLowerCase();
      if (excludedTags.has(tagName)) {
        if (token.startsWith('</')) excludedDepth = Math.max(0, excludedDepth - 1);
        else if (!token.endsWith('/>')) excludedDepth += 1;
      }
      return token;
    }

    if (excludedDepth || linksAdded >= limit) return token;
    let linkedText = token;
    for (const [term, destination] of candidates) {
      if (linksAdded >= limit || linkedDestinations.has(destination)) continue;
      const expression = new RegExp(`\\b${escapeRegExp(term)}\\b`, 'i');
      if (!expression.test(linkedText)) continue;
      linkedText = linkedText.replace(expression, `<a href="/health/${destination}">$&</a>`);
      linkedDestinations.add(destination);
      linksAdded += 1;
    }
    return linkedText;
  }).join('');
}

function normalizeArticleData<T>(data: T): T {
  const normalizeValue = (value: unknown): unknown => {
    if (typeof value === 'string') return value.replace(/\bRX2600\b(?!\s+Therapeutic Robot)/g, 'RX2600 Therapeutic Robot');
    if (Array.isArray(value)) return value.map(normalizeValue);
    if (value && typeof value === 'object' && !(value instanceof Date)) {
      return Object.fromEntries(Object.entries(value).map(([key, nestedValue]) => [key, normalizeValue(nestedValue)]));
    }
    return value;
  };

  return normalizeValue(data) as T;
}

export function addBrandLinks(html: string, limitPerDomain = 2) {
  const existingRptLinks = (html.match(/href=["'][^"']*rptclinic\.com/gi) || []).length;
  const existingRxLinks = (html.match(/href=["'][^"']*rx2600\.com/gi) || []).length;
  const excludedTags = new Set(['a', 'code', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'pre']);
  const tokens = html.split(/(<[^>]+>)/g);
  let excludedDepth = 0;
  let rptLinksAdded = existingRptLinks;
  let rxLinksAdded = existingRxLinks;

  return tokens.map((token) => {
    const tag = token.match(/^<\/?([a-z0-9]+)/i);
    if (tag) {
      const tagName = tag[1].toLowerCase();
      if (excludedTags.has(tagName)) {
        if (token.startsWith('</')) excludedDepth = Math.max(0, excludedDepth - 1);
        else if (!token.endsWith('/>')) excludedDepth += 1;
      }
      return token;
    }

    if (excludedDepth) return token;
    let linkedText = token.replace(/\bRX2600\b(?!\s+Therapeutic Robot)/g, 'RX2600 Therapeutic Robot');
    if (rxLinksAdded < limitPerDomain) {
      linkedText = linkedText.replace(/\bRX2600 Therapeutic Robot\b/, (match) => {
        rxLinksAdded += 1;
        return `<a href="https://rx2600.com/">${match}</a>`;
      });
    }
    if (rptLinksAdded < limitPerDomain) {
      linkedText = linkedText.replace(/\bRPT\s*Clinic\b/i, (match) => {
        rptLinksAdded += 1;
        return `<a href="https://rptclinic.com/">${match}</a>`;
      });
    }
    return linkedText;
  }).join('');
}

function readDirFiles(dir: string) {
  const full = path.join(CONTENT_DIR, dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full).filter((f) => f.endsWith('.md'));
}

function fileSlug(filename: string) {
  return filename.replace(/\.[^.]+$/, '');
}

function parseFrontmatter(filePath: string) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);
  return { data: parsed.data || {}, content: parsed.content || '' };
}

export async function getAllArticles() {
  const files = readDirFiles('articles');
  return files.map((file) => {
    const slug = fileSlug(file);
    const filePath = path.join(CONTENT_DIR, 'articles', file);
    const { data, content } = parseFrontmatter(filePath);
    const html = marked.parse(content) as string;
    return { id: slug, data: normalizeArticleData(data), html };
  });
}

export async function getAllCategories() {
  const files = readDirFiles('categories');
  return files.map((file) => {
    const slug = fileSlug(file);
    const filePath = path.join(CONTENT_DIR, 'categories', file);
    const { data } = parseFrontmatter(filePath);
    return { id: slug, data: { ...data } };
  });
}

export async function getArticleBySlug(slug: string) {
  const filePath = path.join(CONTENT_DIR, 'articles', `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const { data, content } = parseFrontmatter(filePath);
  const html = marked.parse(content) as string;
  return { id: slug, data: normalizeArticleData(data), html };
}

export async function getCategoryBySlug(slug: string) {
  const filePath = path.join(CONTENT_DIR, 'categories', `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const { data } = parseFrontmatter(filePath);
  return { id: slug, data: { ...data } };
}
