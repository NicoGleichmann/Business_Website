import type { APIRoute } from 'astro';
import { site } from '../config/site';

/**
 * Solange site.indexierung = false ist, tragen alle Seiten "noindex".
 * Crawlen bleibt erlaubt, damit Google dieses "noindex" auch sieht.
 * Die Sitemap wird erst angekündigt, wenn die Seite indexiert werden darf.
 */
export const GET: APIRoute = () => {
  const zeilen = ['User-agent: *', 'Allow: /'];
  if (site.indexierung) zeilen.push('', `Sitemap: ${new URL('/sitemap.xml', site.url).href}`);
  return new Response(zeilen.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
