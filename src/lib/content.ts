import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const CONTENT_DIR = path.resolve('./src/content');

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
    const html = marked.parse(content);
    return { id: slug, data: { ...data }, html };
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
  const html = marked.parse(content);
  return { id: slug, data: { ...data }, html };
}

export async function getCategoryBySlug(slug: string) {
  const filePath = path.join(CONTENT_DIR, 'categories', `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const { data } = parseFrontmatter(filePath);
  return { id: slug, data: { ...data } };
}
