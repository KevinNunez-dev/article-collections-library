import type { APIRoute } from 'astro';
import { getAllArticles } from '../../lib/content';

// Served under /health because rptclinic.com only proxies /health/* to this site.
export const GET: APIRoute = async ({ site }) => {
  const articles = (await getAllArticles()).filter((entry) => !entry.data?.seo?.noindex);
  const url = (path: string, lastmod?: Date) => `<url><loc>${new URL(path, site).toString()}</loc>${lastmod ? `<lastmod>${new Date(lastmod).toISOString().slice(0, 10)}</lastmod>` : ''}</url>`;
  const entries = [url('/health/'), url('/health/clinic/rpt/'), ...articles.map((entry) => url(`/health/${entry.id}/`, entry.data.updatedAt))];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
