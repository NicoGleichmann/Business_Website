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
  text: `Ich richte Automatisierungen ein, die Anfragen sofort beantworten, an Termine erinnern und Belege sortieren. Eine Website für Ihren Betrieb ist inklusive. Persönlich, verständlich und aus der Region ${site.region.stadt}.`,
  cta: 'Kostenloses Erstgespräch',
  ctaHinweis: 'Kostenloses 15-Minuten-Gespräch: Wir schauen gemeinsam, wo Ihr Betrieb Zeit verliert.',
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
  titel: 'Zwei Bausteine, ein Ziel: weniger Routinearbeit',
  text: 'Ihre Website sorgt dafür, dass Kunden Sie finden. Die Automatik sorgt dafür, dass danach keine Anfrage und kein Termin verloren geht. Beides kommt aus einer Hand und passt zusammen.',
  spalten: [
    {
      icon: 'globe',
      titel: 'Website',
      untertitel: 'Damit Kunden Sie finden und direkt anfragen können.',
      text: 'Eine Seite mit allem, was Ihre Kunden wissen wollen: fürs Handy optimiert, unter Ihrer eigenen Adresse und verbunden mit Ihrem Google-Profil. Haben Sie schon eine Website, binde ich die Automatik dort an.',
      beispieleTitel: 'Das gehört dazu',
      beispiele: [
        {
          titel: 'Leistungen und Preise',
          text: 'Ihre Kunden sehen auf einen Blick, was Sie anbieten und was es kostet.',
        },
        {
          titel: 'Öffnungszeiten und Anfahrt',
          text: 'Die häufigsten Fragen sind beantwortet, bevor das Telefon klingelt.',
        },
        {
          titel: 'Google-Unternehmensprofil',
          text: 'Wer Ihren Betrieb bei Google oder in Google Maps sucht, findet Sie – mit Öffnungszeiten und Link zur Website.',
        },
      ],
    },
    {
      icon: 'workflow',
      titel: 'Automatisierungen',
      untertitel: 'Feste Abläufe, die zuverlässig im Hintergrund laufen.',
      text: 'Immer wenn A passiert, passiert automatisch B – ohne Vergessen, ohne Abtippen. Umgesetzt mit bewährten Werkzeugen wie n8n oder Make.',
      beispieleTitel: 'Beispiele',
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
  ],
};

export const ablauf = {
  eyebrow: 'Ablauf',
  titel: 'So arbeiten wir zusammen',
  text: 'Vier klare Schritte. Sie wissen vorher, was es kostet und was dabei herauskommt.',
  schritte: [
    {
      titel: 'Prozess-Analyse',
      text: 'Im kostenlosen 15-Minuten-Gespräch schauen wir auf Ihren Arbeitsalltag: Wo verlieren Sie Zeit? Was nervt am meisten? Lohnt es sich bei Ihnen nicht, sage ich es Ihnen.',
    },
    {
      titel: 'Demo',
      text: 'Ich zeige Ihnen in einem kurzen Video, wie die Lösung bei Ihnen aussehen würde. Danach bekommen Sie ein schriftliches Angebot zum Festpreis.',
    },
    {
      titel: 'Umsetzung',
      text: 'Ich baue Ihre Website, richte die Automatik ein und verbinde alles mit Ihren bestehenden Programmen. Bevor etwas live geht, testen wir gemeinsam, und Sie geben es frei.',
    },
    {
      titel: 'Wartung',
      text: 'Ich halte Website und Abläufe am Laufen, behebe Fehler und bin per E-Mail für Sie da. Alles ist dokumentiert, die Zugänge laufen auf Ihren Namen.',
    },
  ],
};

export const preise = {
  /** false = Abschnitt „Preise“ wird ausgeblendet (auch im Menü). */
  anzeigen: true,
  eyebrow: 'Preise',
  titel: 'Feste Preise, keine Überraschungen',
  text: 'Sie zahlen einen Festpreis für die Einrichtung und danach eine kleine monatliche Pauschale für die Betreuung. Die Website für Ihren Betrieb ist in den Paketen schon enthalten. Den genauen Festpreis bekommen Sie nach dem Erstgespräch schriftlich.',
  /**
   * EINFÜHRUNGSANGEBOT
   * Nach jedem neuen Kunden „freiePlaetze“ um 1 verringern (ehrlich bleiben – die Zahl steht auf der Seite).
   * Bei 0 verschwinden der Hinweis im Hero und der Kasten über den Preisen automatisch;
   * dann auch die Einführungspreise in den Paketen und in „ohneWebsite“ unten entfernen.
   * Die Zahl 5 steht zusätzlich in den Texten – bei Änderung dort mit anpassen.
   */
  einfuehrung: {
    plaetze: 5,
    freiePlaetze: 5,
    label: 'Einführungsangebot',
    heroText: 'Die ersten 5 Kunden zahlen weniger',
    frei: 'Noch {frei} von {plaetze} Plätzen frei',
    text: 'Die ersten 5 Kunden bekommen Website und Automatik zum Einführungspreis. Danach gelten die regulären Preise.',
    cta: 'Platz sichern',
  },
  enthaltenLabel: 'Enthalten',
  einmaligLabel: 'Einrichtung',
  monatlichLabel: 'Wartung pro Monat',
  pakete: [
    {
      titel: 'Online-Start',
      text: 'Ihr Betrieb online: Website, Google-Profil und eine Automatik nach Wahl.',
      enthalten: [
        'Website mit Leistungen, Öffnungszeiten, Kontakt und Anfahrt, optimiert fürs Handy',
        'Eigene Domain, Hosting und Einrichtung Ihres Google-Unternehmensprofils',
        'Anfragen-Automatik: sofortige Eingangsbestätigung an Ihren Kunden und Benachrichtigung aufs Handy',
        'Oder Beleg-Automatik: Rechnungen aus Ihrem Postfach landen automatisch benannt im Ordner für den Steuerberater',
        '2 Korrekturrunden, Test und kurze Einweisung',
      ],
      einmalig: '199 €',
      einmaligHinweis: 'Einführungspreis für die ersten 5 Kunden, danach 349 €',
      monatlich: '15–19 €',
      monatlichHinweis: [
        '15 €: Betrieb, Hosting und Überwachung',
        '19 €: inkl. kleiner Änderungen, z. B. Öffnungszeiten oder Urlaubshinweis',
      ],
    },
    {
      titel: 'Termin-Paket',
      text: 'Alles aus dem Online-Start, dazu eine Terminbuchung, die Ausfälle verhindert und für Bewertungen sorgt.',
      enthalten: [
        'Alles aus dem Online-Start, inklusive Website und Automatik nach Wahl',
        'Buchungsseite mit Ihren Leistungen und freien Zeiten, direkt von Ihrer Website erreichbar',
        'Bestätigung und Erinnerung an Ihre Kunden vor jedem Termin, per E-Mail oder auf Wunsch per SMS',
        'Link zum Absagen oder Verschieben',
        'Nach dem Termin: Bitte um eine Google-Bewertung',
      ],
      einmalig: '259 €',
      einmaligHinweis: 'Einführungspreis für die ersten 5 Kunden, danach 449 €',
      monatlich: '25–35 €',
      monatlichHinweis: ['25 €: Erinnerungen per E-Mail', '35 €: zusätzlich per SMS'],
    },
  ],
  /** Kasten unter den Paketen: Preise für Kunden, die schon eine Website haben. */
  ohneWebsite: {
    titel: 'Sie haben schon eine Website?',
    text: 'Dann richte ich nur die Automatik ein und verbinde sie mit Ihrer bestehenden Seite. Einrichtung und Wartung werden günstiger, weil die Website samt Domain wegfällt.',
    pakete: [
      {
        titel: 'Starter-Automatik',
        einmalig: '99 €',
        einmaligHinweis: 'Einführungspreis, danach 199 €',
        monatlich: '9–12 €',
      },
      {
        titel: 'Termin-Paket ohne Website',
        einmalig: '159 €',
        einmaligHinweis: 'Einführungspreis, danach 299 €',
        monatlich: '19–29 €',
      },
    ],
  },
  wartung: {
    titel: 'Wartung ist immer dabei',
    text: 'Website und Automatik müssen rund um die Uhr online sein, damit sie funktionieren. Und weil sich Programme und Schnittstellen regelmäßig ändern, gehört die Wartung zu jedem Paket.',
    punkte: [
      'Betrieb der Automatik rund um die Uhr auf einem Server in der EU',
      'Hosting und eigene Domain (.de) für Ihre Website',
      'Überwachung und Fehlerbehebung',
      'Support per E-Mail, Antwort innerhalb von 2 Werktagen',
      'Mindestlaufzeit 3 Monate, danach monatlich kündbar',
    ],
  },
  /** Steuer-Hinweis: Als Kleinunternehmer stattdessen „Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.“ */
  fussnote:
    'Einführungspreise gelten für die ersten 5 Kunden, im Gegenzug für ehrliches Feedback und die Erlaubnis, das Projekt als Referenz zu zeigen. Fremdkosten wie SMS-Gebühren werden ohne Aufschlag weiterberechnet. Alle Preise zzgl. gesetzlicher Umsatzsteuer.',
};

const starter = preise.pakete[0];
const nurAutomatik = preise.ohneWebsite.pakete[0];

export const demo = {
  eyebrow: 'Demo',
  titel: 'Sehen Sie selbst, wie das aussieht',
  text: 'Ein kurzes Beispiel zeigt, wie eine Automatisierung im Alltag arbeitet.',
  /**
   * Video einbinden: MP4-Datei nach public/video/ legen und hier den Pfad eintragen,
   * z. B. '/video/demo.mp4'. Optional ein Vorschaubild (poster) und Untertitel (.vtt).
   * Leer lassen = Abschnitt „Demo“ wird komplett ausgeblendet.
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
    `Ich bin ${site.inhaber.name}, 18 Jahre alt, und lebe in Dermbach im ${site.region.landkreis}. 2027 mache ich mein Abitur, Informatik ist eines meiner Prüfungsfächer. Neben der Schule habe ich mir Automatisierung und KI-Agents selbst beigebracht, mit Werkzeugen wie n8n und Make, und baue damit Demo-Systeme für kleine Betriebe.`,
    'Viele kleine Betriebe verlieren Aufträge, weil Anfragen liegen bleiben oder Termine ausfallen. Für eine passende Lösung fehlt ihnen die Zeit, und große Agenturen sprechen sie kaum an. Das möchte ich ändern: hier in der Region, einfach und zu festen Preisen.',
  ],
  werteTitel: 'Darauf können Sie sich verlassen',
  werte: [
    'Sie bekommen Ergebnisse statt Fachbegriffe: weniger liegengebliebene Anfragen.',
    'Sie wissen vorher, was es kostet und was dabei herauskommt.',
    'Alles ist dokumentiert, die Zugänge laufen auf Ihren Namen. Sie hängen nie allein von mir ab.',
    'Ihre Daten liegen auf Servern in der EU, und wir schließen einen Auftragsverarbeitungsvertrag.',
    'Lohnt es sich bei Ihnen nicht, sage ich es Ihnen.',
  ],
};

export const faq = {
  eyebrow: 'Häufige Fragen',
  titel: 'Was Inhaber vorher wissen wollen',
  fragen: [
    {
      frage: 'Was kostet das?',
      antwort: [
        `Sie zahlen einen Festpreis für die Einrichtung und danach eine kleine monatliche Pauschale für die Betreuung. Der ${starter.titel} mit Website kostet ${starter.einmalig} (${starter.einmaligHinweis}) plus ${starter.monatlich} pro Monat.`,
        `Haben Sie schon eine Website, wird es günstiger: Die ${nurAutomatik.titel} allein kostet ${nurAutomatik.einmalig} (${nurAutomatik.einmaligHinweis}) plus ${nurAutomatik.monatlich} pro Monat. Sie bekommen vorher ein schriftliches Angebot. Alle Preise zzgl. gesetzlicher Umsatzsteuer.`,
      ],
    },
    {
      frage: 'Was gehört zur Website?',
      antwort: [
        'Eine Seite mit Ihren Leistungen und Preisen, Öffnungszeiten, Kontakt und Anfahrt und einem kurzen Teil über Ihren Betrieb. Sie ist fürs Handy optimiert und läuft unter Ihrer eigenen Domain. Dazu richte ich Ihr Google-Unternehmensprofil ein. Zwei Korrekturrunden sind inklusive.',
        'Impressum und Datenschutzerklärung erstellen Sie selbst mit einem Online-Generator, zum Beispiel von eRecht24, denn für diese Angaben sind Sie als Inhaber verantwortlich. Ich baue die Texte dann ein.',
      ],
    },
    {
      frage: 'Ich habe schon eine Website. Brauche ich eine neue?',
      antwort: [
        'Nein. Dann verbinde ich die Automatik mit Ihrer bestehenden Seite, zum Beispiel über Ihr Kontaktformular oder Ihre E-Mail-Adresse. Es gelten die günstigeren Preise ohne Website.',
      ],
    },
    {
      frage: 'Was ist in der monatlichen Pauschale enthalten?',
      antwort: [
        'Überwachung, Fehlerbehebung und Support per E-Mail mit Antwort innerhalb von 2 Werktagen, bei Paketen mit Website auch Hosting und Domain. Was genau in Ihrem Tarif steckt, steht beim jeweiligen Paket. Änderungswünsche außerhalb des vereinbarten Umfangs bespreche ich vorher mit Ihnen und nenne Ihnen einen Preis.',
      ],
    },
    {
      frage: 'Geht es auch ohne monatliche Pauschale?',
      antwort: [
        'Nein. Programme und Schnittstellen ändern sich regelmäßig, deshalb läuft jede Lösung mit Wartung. Nur so bleibt Ihr Ablauf zuverlässig.',
      ],
    },
    {
      frage: 'Wie lange bin ich gebunden?',
      antwort: ['Die monatliche Pauschale läuft mindestens 3 Monate. Danach können Sie jederzeit zum Monatsende kündigen.'],
    },
    {
      frage: 'Wie läuft der Einstieg ab?',
      antwort: [
        'Sie buchen ein kostenloses 15-Minuten-Gespräch. Danach zeige ich Ihnen in einem kurzen Video, wie die Lösung bei Ihnen aussehen würde, ohne dass Sie etwas freigeben müssen.',
      ],
    },
    {
      frage: 'Muss ich meine bestehende Arbeitsweise ändern?',
      antwort: [
        'Nein. Die Automatik läuft zusätzlich, zum Beispiel an Ihrem Kontaktformular oder Ihrer E-Mail-Adresse. Bestehende Systeme werden nicht umgebaut.',
      ],
    },
    {
      frage: 'Welchen Zugriff brauchen Sie?',
      antwort: [
        'Nur auf das, was für den jeweiligen Ablauf nötig ist. Alle Konten laufen auf Ihren Namen, und Sie können Zugänge jederzeit entziehen.',
      ],
    },
    {
      frage: 'Wie sieht es mit dem Datenschutz aus?',
      antwort: [
        'Die Lösungen laufen auf einem Server in der EU. Mit jedem Kunden schließe ich einen Auftragsverarbeitungsvertrag (AVV). Gesundheitsdaten verarbeite ich nicht.',
      ],
    },
    {
      frage: 'Ich bin nicht technikaffin. Ist das ein Problem?',
      antwort: [
        'Nein. Sie müssen nichts programmieren und keine Fachbegriffe lernen. Ich erkläre alles in Alltagssprache. Wo immer es geht, arbeiten die Lösungen mit den Programmen, die Sie schon nutzen – etwa E-Mail, Kalender oder Ihrer Buchhaltungssoftware.',
      ],
    },
    {
      frage: 'Was passiert, wenn etwas nicht funktioniert?',
      antwort: [
        'Bevor etwas live geht, testen wir gemeinsam, und Sie geben es frei. Im laufenden Betrieb überwache ich die Abläufe und behebe Fehler. Das ist in der monatlichen Pauschale enthalten.',
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
    ohneJs: 'Das Formular braucht JavaScript. Schreiben Sie mir gern direkt an',
    emailFehlt: 'Die E-Mail-Adresse ist noch nicht hinterlegt. Bitte nutzen Sie vorerst den Kalender-Link.',
    fehlerName: 'Bitte geben Sie Ihren Namen an.',
    fehlerEmailLeer: 'Bitte geben Sie Ihre E-Mail-Adresse an, damit ich antworten kann.',
    fehlerEmailFormat: 'Bitte prüfen Sie die E-Mail-Adresse, z. B. name@beispiel.de.',
    fehlerDatenschutz: 'Bitte bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben.',
    titel: 'Schreiben Sie mir',
  },
  kalender: {
    titel: 'Lieber direkt einen Termin wählen?',
    text: 'Buchen Sie direkt einen Termin für das kostenlose 15-Minuten-Gespräch.',
    button: 'Termin bei Cal.com wählen',
    hinweis: 'Sie werden zur Buchungsseite von Cal.com weitergeleitet.',
  },
  direkt: 'Oder direkt:',
};

export const footer = {
  beschreibung: `Websites und Automatisierungen für kleine Betriebe in ${site.region.stadt}, im ${site.region.landkreis} und in ${site.region.bundesland}.`,
};
