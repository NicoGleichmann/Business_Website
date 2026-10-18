import type { APIRoute } from 'astro';
import { site } from '../config/site';

/** Alle Seiten, die Google finden soll. Danke- und 404-Seite gehören nicht hinein. */
const seiten = ['/', '/impressum/', '/datenschutz/'];

export const GET: APIRoute = () => {
  const heute = new Date().toISOString().slice(0, 10);
  const eintraege = seiten
    .map((pfad) => `  <url>\n    <loc>${new URL(pfad, site.url).href}</loc>\n    <lastmod>${heute}</lastmod>\n  </url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${eintraege}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
