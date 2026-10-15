/**
 * TEXTE DER STARTSEITE
 * ====================
 * Alle sichtbaren Texte der Abschnitte stehen hier – in der Reihenfolge der Seite.
 * Ändern Sie nur den Text zwischen den Anführungszeichen ('…').
 * Ein Apostroph im Text braucht einen Backslash davor: 'So läuft\'s ab'.
 *
 * Platzhalter "[[TODO: …]]" werden auf der Seite gelb markiert angezeigt.
 * Name, Slogan, Kontaktdaten und Region stehen NICHT hier, sondern in src/config/site.ts.
 */

import { site } from '../config/site';

export const hero = {
  eyebrow: `KI-Automatisierung für kleine Betriebe in ${site.region.bundesland}`,
  titel: 'Ihr Betrieb bleibt erreichbar – auch wenn Sie gerade keine Hand frei haben.',
  text: `Ich richte Automatisierungen und KI-Assistenten ein, die Anfragen beantworten, an Termine erinnern und Belege sortieren. Persönlich, verständlich und aus der Region ${site.region.stadt}.`,
  cta: 'Kostenloses Erstgespräch',
  ctaHinweis: 'Kostenlos und unverbindlich: Wir schauen gemeinsam, wo Ihr Betrieb Zeit verliert.',
  sekundaer: 'So läuft es ab',
  branchenTitel: 'Für',
  branchen: ['Handwerk', 'Friseure', 'Makler', 'Studios', 'Coaches', 'Online-Shops'],
};

export const problem = {
  eyebrow: 'Kennen Sie das?',
  titel: 'Die Arbeit hinter der Arbeit frisst Ihre Zeit',
  text: 'Ihr eigentliches Handwerk beherrschen Sie. Doch Telefon, Postfach und Papierkram funken ständig dazwischen – und kosten Zeit, die Ihnen niemand bezahlt.',
  punkte: [
    {
      icon: 'inbox',
      titel: 'Anfragen bleiben liegen',
      text: 'Das Telefon klingelt, während Sie beim Kunden sind. Die E-Mail von gestern Abend ist noch offen. Bis Sie zurückrufen, hat der Interessent schon woanders angefragt.',
    },
    {
      icon: 'calendarX',
      titel: 'Termine platzen',
      text: 'Kunden vergessen ihren Termin oder sagen kurzfristig ab. Der Platz bleibt leer, weil niemand Zeit hatte, vorher zu erinnern oder nachzubesetzen.',
    },
    {
      icon: 'receipt',
      titel: 'Belege stapeln sich',
      text: 'Rechnungen im Postfach, Quittungen im Auto, Lieferscheine auf dem Schreibtisch. Am Monatsende wird sortiert, abgetippt und für den Steuerberater zusammengesucht.',
    },
    {
      icon: 'mail',
      titel: 'Das Postfach läuft über',
      text: 'Immer wieder dieselben Fragen: Haben Sie noch Termine frei? Was kostet das? Wann haben Sie geöffnet? Jede Antwort ist schnell geschrieben – alle zusammen kosten Stunden.',
    },
  ],
};

export const leistungen = {
  eyebrow: 'Leistungen',
  titel: 'Zwei Werkzeuge, ein Ziel: weniger Routinearbeit',
  text: 'Je nach Aufgabe setze ich auf feste Abläufe oder auf KI-Assistenten, die mitdenken – oft auf beides zusammen. Welches Werkzeug passt, klären wir gemeinsam.',
  spalten: [
    {
      icon: 'workflow',
      titel: 'Automatisierungen',
      untertitel: 'Feste Abläufe, die zuverlässig im Hintergrund laufen.',
      text: 'Immer wenn A passiert, passiert automatisch B – ohne Vergessen, ohne Abtippen. Umgesetzt mit bewährten Werkzeugen wie n8n oder Make.',
      beispiele: [
        {
          titel: 'Terminerinnerungen',
          text: 'Ihre Kunden bekommen vor dem Termin automatisch eine Erinnerung per E-Mail oder SMS – mit Link zum Verschieben, falls etwas dazwischenkommt.',
        },
        {
          titel: 'Belege sortieren',
          text: 'Rechnungen aus Ihrem Postfach landen automatisch richtig benannt im passenden Ordner – fertig für den Steuerberater.',
        },
        {
          titel: 'Anfragen sammeln',
          text: 'Anfragen per Website, E-Mail oder Formular landen an einer Stelle. Der Kunde bekommt sofort eine Eingangsbestätigung.',
        },
      ],
    },
    {
      icon: 'bot',
      titel: 'KI-Agents',
      untertitel: 'Digitale Assistenten, die eigenständig mitdenken.',
      text: 'Ein Agent versteht Anfragen in normaler Sprache, sucht sich die nötigen Informationen zusammen und erledigt die nächsten Schritte. Bei wichtigen Entscheidungen fragt er Sie vorher.',
      beispiele: [
        {
          titel: 'E-Mails vorsortieren',
          text: 'Der Agent liest eingehende Anfragen, erkennt, worum es geht, und legt Ihnen einen passenden Antwortentwurf zur Freigabe hin.',
        },
        {
          titel: 'Kundenfragen beantworten',
          text: 'Fragen zu Öffnungszeiten, Leistungen oder freien Terminen beantwortet der Agent per Chat oder E-Mail – auf Grundlage Ihrer eigenen Angaben.',
        },
        {
          titel: 'Interessenten vorqualifizieren',
          text: 'Bei einer Anfrage, etwa zu einer Immobilie, fragt der Agent die wichtigsten Eckdaten ab und schickt Ihnen eine kurze Zusammenfassung.',
        },
      ],
    },
  ],
  unterschiedTitel: 'Der Unterschied in einem Satz',
  unterschied:
    'Eine Automatisierung folgt einem festen Plan. Ein Agent entscheidet im Rahmen Ihrer Vorgaben selbst, was als Nächstes zu tun ist.',
};

export const ablauf = {
  eyebrow: 'Ablauf',
  titel: 'So arbeiten wir zusammen',
  text: 'Vier klare Schritte. Nach jedem entscheiden Sie, ob es weitergeht.',
  schritte: [
    {
      titel: 'Prozess-Analyse',
      text: 'Im kostenlosen Erstgespräch schauen wir auf Ihren Arbeitsalltag: Wo verlieren Sie Zeit? Was nervt am meisten? Sie bekommen eine ehrliche Einschätzung, was sich lohnt – und was nicht.',
    },
    {
      titel: 'Demo',
      text: 'Ich zeige Ihnen an einem Beispiel aus Ihrem Betrieb, wie die Lösung aussehen würde. So wissen Sie vorher, was Sie bekommen.',
    },
    {
      titel: 'Umsetzung',
      text: 'Ich richte alles ein, verbinde es mit Ihren bestehenden Programmen und teste es gründlich. Sie und Ihr Team bekommen eine kurze, verständliche Einweisung.',
    },
    {
      titel: 'Wartung',
      text: 'Ich behalte die Abläufe im Blick, kümmere mich um Updates und passe sie an, wenn sich in Ihrem Betrieb etwas ändert.',
    },
  ],
};

export const demo = {
  eyebrow: 'Demo',
  titel: 'Sehen Sie selbst, wie das aussieht',
  text: 'Ein kurzes Beispiel zeigt, wie eine Automatisierung im Alltag arbeitet.',
  /**
   * Video einbinden: MP4-Datei nach public/video/ legen und hier den Pfad eintragen,
   * z. B. '/video/demo.mp4'. Optional ein Vorschaubild (poster) und Untertitel (.vtt).
   * Leer lassen = Platzhalter wird angezeigt.
   */
  video: '',
  poster: '',
  untertitel: '',
  platzhalter: '[[TODO: Demo-Video einbinden – Anleitung im README, Abschnitt „Demo-Video“]]',
};

export const ueberMich = {
  eyebrow: 'Über mich',
  titel: 'Ihr Ansprechpartner aus der Region',
  absaetze: [
    `Ich bin ${site.inhaber.name} und arbeite von ${site.region.stadt} aus für Betriebe im ${site.region.landkreis} und in ganz ${site.region.bundesland}.`,
    '[[TODO: 2–3 Sätze zu Ihrem Werdegang: Was haben Sie vorher gemacht? Warum machen Sie das heute? Persönlich, ohne Fachbegriffe.]]',
    'Mir ist wichtig, dass Sie verstehen, was ich baue – und dass es Ihnen wirklich Arbeit abnimmt, statt neue zu machen.',
  ],
  fotoPlatzhalter: '[[TODO: Foto von Ihnen, quadratisch, mind. 800 × 800 px]]',
};

export const faq = {
  eyebrow: 'Häufige Fragen',
  titel: 'Was Inhaber vorher wissen wollen',
  fragen: [
    {
      frage: 'Was kostet das?',
      antwort: [
        'Das Erstgespräch ist kostenlos und unverbindlich. Was eine Lösung danach kostet, hängt von ihrem Umfang ab. Sie bekommen vorher ein schriftliches Angebot und entscheiden erst dann.',
        '[[TODO: Preismodell kurz erklären, z. B. einmalige Einrichtung plus monatliche Wartung]]',
      ],
    },
    {
      frage: 'Was passiert mit meinen Daten und den Daten meiner Kunden?',
      antwort: [
        'Datenschutz plane ich von Anfang an mit ein. Wir klären gemeinsam, welche Daten verarbeitet werden, wo sie gespeichert sind und wer Zugriff hat. Wo es möglich ist, nutze ich Dienste mit Servern in der EU.',
        '[[TODO: prüfen und ergänzen, z. B. Hosting-Standort von n8n, Auftragsverarbeitungsvertrag (AVV)]]',
      ],
    },
    {
      frage: 'Wie viel Aufwand habe ich damit?',
      antwort: [
        'Wenig. Für die Analyse brauche ich vor allem Ihre Erfahrung: wie die Abläufe heute laufen und wo es hakt. Die Einrichtung übernehme ich. Von Ihnen brauche ich die Zugänge zu den Programmen, die angebunden werden sollen, und kurze Rückmeldungen beim Testen.',
      ],
    },
    {
      frage: 'Ich bin nicht technikaffin. Ist das ein Problem?',
      antwort: [
        'Nein. Sie müssen nichts programmieren und keine Fachbegriffe lernen. Ich erkläre alles in Alltagssprache. Wo immer es geht, arbeiten die Lösungen mit den Programmen, die Sie schon nutzen – etwa E-Mail, Kalender oder Ihrer Buchhaltungssoftware.',
      ],
    },
    {
      frage: 'Was passiert, wenn die KI einen Fehler macht?',
      antwort: [
        'Sie bestimmen, wie viel ein Assistent selbst erledigen darf. Zum Start macht er nur Vorschläge, und Sie geben frei. Erst wenn Sie den Ergebnissen vertrauen, bekommt er mehr Freiraum. Bei allem, was nach außen geht oder Geld kostet, bleibt die letzte Entscheidung bei Ihnen.',
      ],
    },
  ],
};

export const kontakt = {
  eyebrow: 'Kontakt',
  titel: 'Kostenloses Erstgespräch vereinbaren',
  text: 'Erzählen Sie mir kurz, wo es bei Ihnen hakt. Ich melde mich persönlich bei Ihnen zurück.',
  /** Nur auf dem Handy sichtbar: Sprung am Formular vorbei zum Kalender. */
  kalenderSprung: 'Lieber gleich einen Termin im Kalender wählen',
  formular: {
    name: 'Name',
    email: 'E-Mail',
    betrieb: 'Betrieb',
    betriebHinweis: 'z. B. Friseursalon, Elektrobetrieb, Maklerbüro',
    zeit: 'Was kostet Sie am meisten Zeit?',
    zeitHinweis: 'z. B. Rückrufe, Terminabsagen, Rechnungen sortieren',
    optional: '(optional)',
    datenschutzVor: 'Ich habe die',
    datenschutzLink: 'Datenschutzerklärung',
    datenschutzNach: 'gelesen.',
    senden: 'Anfrage senden',
    sendet: 'Wird gesendet …',
    erfolg: 'Danke! Ihre Nachricht ist angekommen. Ich melde mich persönlich bei Ihnen.',
    fehler: 'Das hat leider nicht geklappt. Bitte versuchen Sie es noch einmal oder schreiben Sie mir direkt eine E-Mail.',
    mailto: 'Ihr E-Mail-Programm öffnet sich mit einer vorbereiteten Nachricht. Bitte dort noch auf „Senden“ tippen.',
    mailtoBetreff: 'Anfrage Erstgespräch',
    emailFehlt: 'Die E-Mail-Adresse ist noch nicht hinterlegt. Bitte nutzen Sie vorerst den Kalender-Link.',
    fehlerName: 'Bitte geben Sie Ihren Namen an.',
    fehlerEmailLeer: 'Bitte geben Sie Ihre E-Mail-Adresse an, damit ich antworten kann.',
    fehlerEmailFormat: 'Bitte prüfen Sie die E-Mail-Adresse, z. B. name@beispiel.de.',
    fehlerDatenschutz: 'Bitte bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben.',
    titel: 'Schreiben Sie mir',
  },
  kalender: {
    titel: 'Lieber direkt einen Termin wählen?',
    text: 'Suchen Sie sich in meinem Kalender einen passenden Termin für das Erstgespräch aus.',
    button: 'Termin bei Cal.com wählen',
    hinweis: 'Sie werden zur Buchungsseite von Cal.com weitergeleitet.',
  },
  direkt: 'Oder direkt:',
};

export const footer = {
  beschreibung: `Automatisierungen und KI-Agents für kleine Betriebe in ${site.region.stadt}, im ${site.region.landkreis} und in ${site.region.bundesland}.`,
};
