/**
 * Erzeugt Vorschaubild und Icons aus der Konfiguration:
 *   public/og-image.png        1200 × 630  (Link-Vorschau mit Name + Slogan)
 *   public/apple-touch-icon.png 180 × 180  (Homescreen-Icon iPhone/iPad)
 *   public/favicon.ico           32 × 32   (Fallback für ältere Browser)
 *
 * Aufruf: npm run og   – nach jeder Änderung von Name oder Slogan in src/config/site.ts.
 * Text wird in Pfade umgewandelt, das Ergebnis sieht also auf jedem Rechner gleich aus.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import opentype from 'opentype.js';
import sharp from 'sharp';
import { site } from '../src/config/site.ts';

const require = createRequire(import.meta.url);
const ladeSchrift = async (gewicht) =>
  opentype.parse(
    (await readFile(require.resolve(`@fontsource/inter/files/inter-latin-${gewicht}-normal.woff`))).buffer,
  );

const [fett, normal] = await Promise.all([ladeSchrift(700), ladeSchrift(400)]);

const farben = {
  bg: '#fafaf7',
  fg: '#14211f',
  muted: '#4b5b58',
  accent: '#0f6e6a',
  accentSoft: '#e2f0ee',
};

/** Setzt eine Zeile Glyphe für Glyphe (mit Unterschneidung) – ohne die fehleranfällige Text-Engine. */
function zeileSetzen(schrift, text, x, y, groesse) {
  const skala = groesse / schrift.unitsPerEm;
  const glyphen = Array.from(text).map((zeichen) => schrift.charToGlyph(zeichen));
  const pfad = new opentype.Path();
  let cx = x;
  glyphen.forEach((glyphe, i) => {
    pfad.extend(glyphe.getPath(cx, y, groesse));
    cx += glyphe.advanceWidth * skala;
    if (i < glyphen.length - 1) cx += schrift.getKerningValue(glyphe, glyphen[i + 1]) * skala;
  });
  return { d: pfad.toPathData(2), breite: cx - x };
}

/** Text als SVG-Pfad; bricht bei maxBreite in Zeilen um. */
function textPfad(schrift, text, { x, y, groesse, farbe, maxBreite = Infinity, zeilenhoehe = 1.2 }) {
  const zeilen = [];
  let zeile = '';
  for (const wort of text.split(/\s+/)) {
    const test = zeile ? `${zeile} ${wort}` : wort;
    if (zeile && zeileSetzen(schrift, test, 0, 0, groesse).breite > maxBreite) {
      zeilen.push(zeile);
      zeile = wort;
    } else {
      zeile = test;
    }
  }
  if (zeile) zeilen.push(zeile);
  const pfade = zeilen.map((z, i) => zeileSetzen(schrift, z, x, y + i * groesse * zeilenhoehe, groesse).d).join(' ');
  return `<path d="${pfade}" fill="${farbe}"/>`;
}

/** Bildmarke (identisch zu src/components/Logo.astro). */
const marke = (x, y, groesse, radius = 9) => {
  const s = groesse / 32;
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <rect width="32" height="32" rx="${radius}" fill="${farben.accent}"/>
    <circle cx="16" cy="16" r="10" fill="none" stroke="#fff" stroke-opacity="0.45" stroke-width="2"/>
    <circle cx="16" cy="16" r="5" fill="#fff"/>
  </g>`;
};

// ---------- OG-Bild ----------
const B = 1200;
const H = 630;
const rand = 88;
const name = textPfad(fett, site.name, { x: rand + 92, y: rand + 58, groesse: 56, farbe: farben.fg });
const slogan = textPfad(fett, site.slogan, {
  x: rand,
  y: 340,
  groesse: 66,
  farbe: farben.fg,
  maxBreite: B - rand * 2 - 40,
  zeilenhoehe: 1.1,
});
const unterzeile = textPfad(
  normal,
  `KI-Automatisierung für kleine Betriebe · ${site.region.stadt} · ${site.region.landkreis}`,
  { x: rand, y: H - rand, groesse: 30, farbe: farben.muted, maxBreite: B - rand * 2 },
);

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${B}" height="${H}" viewBox="0 0 ${B} ${H}">
  <defs>
    <radialGradient id="schein" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="${farben.accentSoft}"/>
      <stop offset="1" stop-color="${farben.accentSoft}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${B}" height="${H}" fill="${farben.bg}"/>
  <circle cx="${B - 120}" cy="80" r="420" fill="url(#schein)"/>
  <rect x="0" y="${H - 12}" width="${B}" height="12" fill="${farben.accent}"/>
  ${marke(rand, rand, 68)}
  ${name}
  ${slogan}
  ${unterzeile}
</svg>`;

await sharp(Buffer.from(ogSvg)).png({ compressionLevel: 9 }).toFile('public/og-image.png');

// ---------- Icons ----------
const iconSvg = (groesse, radius) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${groesse}" height="${groesse}" viewBox="0 0 ${groesse} ${groesse}">${marke(0, 0, groesse, radius)}</svg>`;

// iOS rundet die Ecken selbst ab → eckig, randlos
await sharp(Buffer.from(iconSvg(180, 0))).png().toFile('public/apple-touch-icon.png');

// favicon.ico = ICO-Container mit einem 32×32-PNG
const png32 = await sharp(Buffer.from(iconSvg(32, 9))).png().toBuffer();
const kopf = Buffer.alloc(22);
kopf.writeUInt16LE(0, 0); // reserviert
kopf.writeUInt16LE(1, 2); // Typ: Icon
kopf.writeUInt16LE(1, 4); // Anzahl Bilder
kopf.writeUInt8(32, 6); // Breite
kopf.writeUInt8(32, 7); // Höhe
kopf.writeUInt8(0, 8); // Farbpalette
kopf.writeUInt8(0, 9); // reserviert
kopf.writeUInt16LE(1, 10); // Farbebenen
kopf.writeUInt16LE(32, 12); // Bit pro Pixel
kopf.writeUInt32LE(png32.length, 14); // Größe
kopf.writeUInt32LE(22, 18); // Offset
await writeFile('public/favicon.ico', Buffer.concat([kopf, png32]));

console.log('✓ public/og-image.png, public/apple-touch-icon.png, public/favicon.ico erzeugt');
