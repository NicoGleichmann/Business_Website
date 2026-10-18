/**
 * Listet alle offenen Platzhalter "[[TODO: …]]" und weitere Go-live-Punkte auf.
 * Aufruf: npm run todos
 */
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { site, istTodo } from '../src/config/site.ts';

const wurzel = new URL('..', import.meta.url).pathname;
try {
  process.loadEnvFile(join(wurzel, '.env'));
} catch {
  // keine .env-Datei vorhanden
}
const muster = /\[\[TODO:[^\]]*\]\]/g;

async function* dateien(ordner) {
  for (const eintrag of await readdir(ordner, { withFileTypes: true })) {
    const pfad = join(ordner, eintrag.name);
    if (eintrag.isDirectory()) yield* dateien(pfad);
    else if (/\.(astro|ts|mjs|md|css)$/.test(eintrag.name)) yield pfad;
  }
}

let anzahl = 0;
for await (const datei of dateien(join(wurzel, 'src'))) {
  const zeilen = (await readFile(datei, 'utf8')).split('\n');
  zeilen.forEach((zeile, i) => {
    for (const treffer of zeile.matchAll(muster)) {
      if (treffer[0] === '[[TODO: …]]') continue; // nur Erklärung in Kommentaren
      anzahl++;
      console.log(`${relative(wurzel, datei)}:${i + 1}  ${treffer[0]}`);
    }
  });
}

const hinweise = [];
if (site.url.endsWith('.example')) hinweise.push(`Domain: site.url ist noch "${site.url}" (src/config/site.ts)`);
if (!site.indexierung) hinweise.push('Indexierung: site.indexierung = false → Seite ist für Google gesperrt');
if (!process.env.PUBLIC_FORM_WEBHOOK_URL)
  hinweise.push('Webhook: PUBLIC_FORM_WEBHOOK_URL ist hier nicht gesetzt → Formular nutzt mailto (im Hosting prüfen)');
const offeneWerte = [site.kontakt.email, site.kontakt.calUrl, site.inhaber.name].filter(istTodo).length;

console.log(`\n${anzahl} Platzhalter gefunden (davon ${offeneWerte} Pflichtangaben in site.ts).`);
if (hinweise.length) console.log('\nWeitere offene Punkte vor dem Go-live:\n- ' + hinweise.join('\n- '));
