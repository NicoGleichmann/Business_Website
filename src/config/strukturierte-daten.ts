/**
 * Strukturierte Daten (JSON-LD) für Google – werden automatisch aus site.ts erzeugt.
 * Platzhalter bleiben sichtbar, bis sie in site.ts ausgefüllt sind.
 */
import { site } from './site';

export function unternehmensDaten() {
  const { kontakt, adresse, region, inhaber } = site;
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${site.url}/#unternehmen`,
    name: site.name,
    slogan: site.slogan,
    description: site.seo.beschreibung,
    url: `${site.url}/`,
    image: new URL(site.seo.bild, site.url).href,
    logo: new URL('/apple-touch-icon.png', site.url).href,
    email: kontakt.email,
    ...(kontakt.telefon ? { telephone: kontakt.telefon } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: adresse.strasse,
      postalCode: adresse.plz,
      addressLocality: adresse.ort,
      addressRegion: region.bundesland,
      addressCountry: 'DE',
    },
    areaServed: region.einzugsgebiet.map((name) => ({ '@type': 'AdministrativeArea', name })),
    founder: { '@type': 'Person', name: inhaber.name },
    knowsAbout: ['Prozessautomatisierung', 'KI-Agenten', 'Workflow-Automatisierung', 'n8n', 'Make'],
    inLanguage: 'de-DE',
  };
}
