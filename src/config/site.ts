/**
 * ZENTRALE KONFIGURATION
 * ======================
 * Name, Slogan und alle Kontaktdaten stehen NUR hier. Alle Seiten (Startseite,
 * Impressum, Datenschutz, SEO-Daten, strukturierte Daten) lesen von hier.
 *
 * Platzhalter-Regel: Werte, die mit "[[TODO" beginnen, werden auf der Website
 * als gelb markierter Hinweis angezeigt. `npm run todos` listet alle offenen auf.
 * Optionale Werte (z. B. Telefon) kann man auch auf '' setzen – dann werden sie
 * ausgeblendet.
 */

export const site = {
  /**
   * Name, unter dem das Angebot auftritt (Logo, Seitentitel, Footer, strukturierte Daten).
   * Derzeit der eigene Name: Der frühere Arbeitstitel war in den Markenklassen 9, 35 und 42 bereits belegt.
   * Vor einem Wechsel auf einen Fantasienamen im DPMA-Register und in TMview prüfen.
   */
  name: 'Nico Gleichmann',

  /** Kurze Unterzeile neben dem Namen im Logo (Kopf- und Fußzeile). */
  taetigkeit: 'KI-Automatisierung & Websites',

  /** Kurzer Slogan – im Footer, im Vorschaubild und in der Seitenbeschreibung. */
  slogan: 'Weniger Büro. Mehr Betrieb.',

  /**
   * Öffentliche Adresse der Website, OHNE Schrägstrich am Ende.
   * Wird für Canonical-Links, sitemap.xml und Vorschaubilder gebraucht.
   * Muss mit der Adresse übereinstimmen, für die Impressum und Datenschutz erstellt wurden.
   */
  url: 'https://automatisierung.nicogleichmann.de',

  /**
   * Suchmaschinen erlauben? Solange Platzhalter auf der Seite stehen: false.
   * false = <meta name="robots" content="noindex"> + robots.txt sperrt alles.
   * Beim Go-live auf true setzen.
   */
  indexierung: true,

  /** Inhaber (für Impressum, "Über mich" und strukturierte Daten). */
  inhaber: {
    name: 'Nico Gleichmann',
    rolle: 'Inhaber',
  },

  kontakt: {
    email: 'kontakt@nicogleichmann.de',
    /** Optional. '' = wird nirgends angezeigt. Format: '+49 3695 123456'. */
    telefon: '+49 176 44444856',
    /** Link zur Cal.com-Buchungsseite für das Erstgespräch. */
    calUrl: 'https://cal.com/nico-gleichmann-g2td4r/15min',
  },

  /**
   * Nur nötig, sobald das Formular über n8n läuft (PUBLIC_FORM_WEBHOOK_URL gesetzt):
   * Wer betreibt den Server? Erscheint in der Datenschutzerklärung.
   */
  formular: {
    serverAnbieter: '[[TODO: Anbieter des n8n-Servers mit Anschrift, z. B. „Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen“]]',
  },

  /** Ladungsfähige Anschrift (Pflicht im Impressum). */
  adresse: {
    strasse: 'Hofstadtstraße 5',
    plz: '36466',
    ort: 'Dermbach',
  },

  /** Region – für Texte, Suchmaschinen und strukturierte Daten. */
  region: {
    stadt: 'Bad Salzungen',
    landkreis: 'Wartburgkreis',
    bundesland: 'Thüringen',
    /** Einzugsgebiet für Google (areaServed). Weitere Orte einfach ergänzen. */
    einzugsgebiet: ['Bad Salzungen', 'Dermbach', 'Wartburgkreis', 'Thüringen'],
  },

  /** Standard-Texte für Suchmaschinen und Link-Vorschauen (WhatsApp, LinkedIn …). */
  seo: {
    /** Seitentitel der Startseite (ca. 50–60 Zeichen). */
    titel: 'KI-Automatisierung für kleine Betriebe in Thüringen',
    /** Beschreibung für Google (ca. 140–160 Zeichen). */
    beschreibung:
      'Website plus Automatisierung für Handwerk, Friseure, Makler & Co. im Wartburgkreis: weniger verpasste Anfragen, weniger Terminausfälle, weniger Büroarbeit.',
    /** Vorschaubild (1200 × 630 px) in /public. Neu erzeugen mit `npm run og`. */
    bild: '/og-image.png',
  },
} as const;

/** URL des n8n-Webhooks. Kommt aus der Umgebungsvariable, NICHT aus dieser Datei. */
export const webhookUrl: string = (import.meta.env?.PUBLIC_FORM_WEBHOOK_URL ?? '').trim();

/** true, wenn ein Wert noch ein Platzhalter ist. */
export const istTodo = (wert: string | undefined | null): boolean =>
  typeof wert === 'string' && wert.trim().startsWith('[[TODO');

/** true, wenn ein Wert ausgefüllt ist (weder leer noch Platzhalter). */
export const istGesetzt = (wert: string | undefined | null): wert is string =>
  typeof wert === 'string' && wert.trim() !== '' && !istTodo(wert);
