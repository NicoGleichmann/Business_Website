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
  text: `Ich richte Automatisierungen und KI-Assistenten ein, die Anfragen beantworten, an Termine erinnern und Belege sortieren. Auf Wunsch auch eine Website für Ihren Betrieb. Persönlich, verständlich und aus der Region ${site.region.stadt}.`,
  cta: 'Kostenloses Erstgespräch',
  ctaHinweis: 'Kostenloses 15-Minuten-Gespräch: Wir schauen gemeinsam, wo Ihr Betrieb Zeit verliert.',
  sekundaer: 'So läuft es ab',
  /** Nur auf dem Handy: Anruf-Knopf (erscheint, wenn in site.ts eine Telefonnummer steht). */
  anrufen: 'Anrufen',
  /**
   * Kurzformular oben auf der Seite. Erscheint nur, wenn der n8n-Webhook eingerichtet ist
   * (PUBLIC_FORM_WEBHOOK_URL), und ersetzt dann die Knöpfe. Der Workflow muss die Bestätigung
   * sofort verschicken, sonst stimmt der Text nicht (README, Abschnitt „Kontaktformular & n8n“).
   */
  formular: {
    titel: 'Testen Sie es selbst',
    text: 'Tragen Sie Ihre E-Mail-Adresse ein: Sekunden später bekommen Sie automatisch eine Bestätigung – genau so funktioniert es später bei Ihren Kunden. Ich melde mich anschließend persönlich.',
    email: 'Ihre E-Mail-Adresse',
    senden: 'Eintragen',
    sendet: 'Wird gesendet …',
    erfolg: 'Danke! Die automatische Bestätigung ist unterwegs. Falls sie nicht im Posteingang auftaucht, schauen Sie bitte kurz im Spam-Ordner nach. Ich melde mich persönlich bei Ihnen.',
    fehler: 'Das hat leider nicht geklappt. Bitte versuchen Sie es noch einmal oder nutzen Sie das Kontaktformular unten.',
    termin: 'Lieber direkt einen Termin wählen',
  },
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
      text: 'Ein Agent versteht Anfragen in normaler Sprache, sucht sich die nötigen Informationen zusammen und erledigt die nächsten Schritte. Was er selbst erledigen darf, legen wir vorher gemeinsam fest.',
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
  website: {
    titel: 'Website und Google-Profil',
    text: 'Noch nicht online? Mit dem Online-Start bekommen Sie eine Website für Ihren Betrieb, damit Kunden Sie finden und direkt anfragen können – einzeln oder zusammen mit einem Assistenten.',
    punkte: [
      'Leistungen, Öffnungszeiten, Kontakt und Anfahrt',
      'Optimiert fürs Handy, mit eigener Domain',
      'Google-Unternehmensprofil eingerichtet',
    ],
    link: 'Zu den Preisen',
  },
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
      text: 'Ich richte Ihre Lösung ein – Website, Assistent oder beides – und verbinde alles mit Ihren bestehenden Programmen. Bevor etwas live geht, testen wir gemeinsam, und Sie geben es frei.',
    },
    {
      titel: 'Betreuung',
      text: 'Ich halte Website und Abläufe am Laufen, behebe Fehler und bin per E-Mail für Sie da. Alles ist dokumentiert, die Zugänge laufen auf Ihren Namen.',
    },
  ],
};

export const preise = {
  /** false = Abschnitt „Preise“ wird ausgeblendet (auch im Menü). */
  anzeigen: true,
  eyebrow: 'Preise',
  titel: 'Feste Preise, keine Überraschungen',
  text: 'Sie zahlen einmal für die Einrichtung und danach eine monatliche Betreuung – egal, wie viele Lösungen Sie nutzen. Den genauen Festpreis bekommen Sie nach dem Erstgespräch schriftlich.',
  /**
   * GRÜNDERPREISE
   * Nach jedem neuen Kunden „freiePlaetze“ um 1 verringern (ehrlich bleiben – die Zahl steht auf der Seite).
   * Bei 0 verschwinden der Hinweis im Hero und der Kasten über den Preisen automatisch;
   * dann bei den Paketen „einmalig“ auf den regulären Preis setzen und „einmaligHinweis“ leeren.
   * Die Zahl 5 steht zusätzlich in den Texten – bei Änderung dort mit anpassen.
   */
  einfuehrung: {
    plaetze: 5,
    freiePlaetze: 5,
    label: 'Gründerpreis',
    heroText: 'Die ersten 5 Betriebe zahlen den Gründerpreis',
    frei: 'Noch {frei} von {plaetze} Plätzen frei',
    text: 'Die ersten 5 Betriebe bekommen die Einrichtung zum Gründerpreis. Danach gelten die regulären Preise.',
    cta: 'Platz sichern',
  },
  einmaligLabel: 'Einrichtung',
  /**
   * KI-ZUSATZ: „Auf Wunsch mit KI …“ unter den Assistenten.
   * anzeigen: false blendet die Zeilen aus und benennt den Bereich in „Automatisierung“ um.
   */
  ki: {
    anzeigen: true,
    label: 'Auf Wunsch mit KI',
  },
  bereiche: [
    {
      titel: 'Online-Präsenz',
      titelOhneKi: 'Online-Präsenz',
      text: '',
      pakete: [
        {
          titel: 'Online-Start',
          art: 'Für Betriebe, die im Netz gefunden werden wollen',
          enthalten: [
            'Website für Ihren Betrieb: Leistungen, Öffnungszeiten, Kontakt und Anfahrt, optimiert fürs Handy',
            'Eigene Domain (.de) und Hosting',
            'Einrichtung oder Überarbeitung Ihres Google-Unternehmensprofils',
            'Kontaktformular: Anfragen landen direkt bei Ihnen',
            '2 Korrekturrunden, Test und kurze Einweisung',
            'Später jederzeit mit einem Assistenten erweiterbar',
          ],
          ki: '',
          einmalig: '99 €',
          einmaligHinweis: 'Gründerpreis, danach 199 €',
        },
      ],
    },
    {
      titel: 'Automatisierung & KI-Assistenten',
      titelOhneKi: 'Automatisierung',
      text: 'Digitale Helfer, die Anfragen und Termine für Sie erledigen – auch wenn Sie gerade keine Hand frei haben.',
      pakete: [
        {
          titel: 'Anfragen-Assistent',
          art: 'Die schnelle Lösung',
          enthalten: [
            'Jede Anfrage bekommt sofort eine Eingangsbestätigung in Ihrem Namen, rund um die Uhr',
            'Sie bekommen eine Nachricht aufs Handy mit allen Angaben',
            'Alle Anfragen gesammelt in einer übersichtlichen Liste – nichts geht mehr verloren',
            'Erinnerung an Sie, wenn eine Anfrage nach einem Tag noch offen ist',
            'Für Ihr Kontaktformular und Ihr E-Mail-Postfach',
            'Alternativ als Beleg-Assistent: Rechnungen aus dem Postfach landen automatisch benannt im Ordner für den Steuerberater',
          ],
          ki: 'Die KI fasst jede Anfrage zusammen, erkennt, wie dringend sie ist, und schlägt Ihnen eine Antwort vor.',
          einmalig: '99 €',
          einmaligHinweis: 'Gründerpreis, danach 199 €',
        },
        {
          titel: 'Termin-Assistent',
          art: 'Mit Online-Terminbuchung',
          enthalten: [
            'Buchungsseite mit Ihren Leistungen und freien Zeiten, abgestimmt mit Ihrem Kalender',
            'Automatische Bestätigung und Erinnerung vor jedem Termin, per E-Mail oder auf Wunsch per SMS',
            'Absagen und Verschieben per Link – der Platz wird sofort wieder frei',
            'Morgens eine Übersicht Ihrer Termine des Tages aufs Handy',
            'Nach dem Termin: Dankeschön und freundliche Bitte um eine Google-Bewertung',
          ],
          ki: 'Terminanfragen per E-Mail erkennt die KI und antwortet automatisch mit Ihrem Buchungslink.',
          einmalig: '159 €',
          einmaligHinweis: 'Gründerpreis, danach 299 €',
        },
      ],
    },
  ],
  /** Hervorgehobener Kasten unter den Paketen: Kunden zu eigenen Ideen ermuntern. */
  eigeneLoesung: {
    eyebrow: 'Ihre eigene Lösung',
    titel: 'Sie haben einen Ablauf, der in kein Paket passt?',
    text: 'Dann bauen wir ihn gemeinsam. Jeder Betrieb arbeitet anders – oft steckt die größte Zeitersparnis genau dort, wo kein Standardpaket hinkommt.',
    schritte: [
      { titel: 'Kostenloses Gespräch:', text: 'Sie erzählen, was Sie Zeit kostet.' },
      { titel: 'Konkreter Vorschlag:', text: 'Ich zeige Ihnen, wie die Lösung aussehen könnte, mit Festpreis.' },
      { titel: 'Sie entscheiden', text: '– ohne Verpflichtung.' },
    ],
    beispieleTitel: 'Zum Beispiel',
    beispiele: [
      'KI-Agent, der E-Mails vorsortiert und Antworten vorbereitet',
      'KI-Chat auf Ihrer Website, der Fragen zu Leistungen, Preisen und Öffnungszeiten beantwortet',
      'Angebote automatisch aus Ihrer Vorlage erstellen',
      'Belege direkt an Ihre Buchhaltungssoftware übergeben',
      'Interessenten vorab die wichtigsten Fragen stellen, etwa für Makler',
    ],
    preis: 'ab 499 €',
    preisHinweis: 'Festpreis nach dem Gespräch',
    cta: 'Idee besprechen',
  },
  betreuung: {
    titel: 'Betreuung',
    preis: '19 €',
    einheit: 'pro Monat und Betrieb',
    kernsatz: 'Ein Preis für alles: Wer Website und Assistent nutzt, zahlt die Betreuung trotzdem nur einmal.',
    punkte: [
      'Betrieb von Website und Assistenten rund um die Uhr, Server in Deutschland',
      'Domain und Hosting',
      'Überwachung, Updates und Fehlerbehebung',
      'Kleine Änderungen bis 30 Minuten im Monat, z. B. Öffnungszeiten, Urlaubshinweis oder Texte',
      'Support per E-Mail',
      'Mindestlaufzeit 3 Monate, danach monatlich kündbar',
    ],
  },
  /** Kleingedrucktes unter den Preisen. */
  fussnoten: [
    'Gründerpreise gelten für die ersten 5 Betriebe, im Gegenzug für ein ehrliches Feedback nach ein paar Wochen. Ob Sie als Referenz genannt werden möchten, entscheiden Sie selbst.',
    'Die Einrichtung zahlen Sie nach der gemeinsamen Abnahme, bevor die Lösung live geht. Die Betreuung zahlen Sie monatlich im Voraus.',
    'Fremdkosten wie SMS-Gebühren werden ohne Aufschlag weitergegeben. Bei eigenen Lösungen wird die Betreuung im Angebot festgelegt.',
    'Alle Preise sind Endpreise. Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.',
  ],
};

const [onlineStart] = preise.bereiche[0].pakete;
const [anfragenAssistent, terminAssistent] = preise.bereiche[1].pakete;
const { betreuung, eigeneLoesung } = preise;

export const rechner = {
  eyebrow: 'Rechnet sich das?',
  titel: 'Was liegen gebliebene Anfragen Sie kosten',
  text: 'Tragen Sie Ihre eigenen Zahlen ein. Die Rechnung zeigt, wie viel Umsatz im Monat verloren geht, wenn Anfragen zu spät oder gar nicht beantwortet werden.',
  /** Startwerte sind Beispielwerte zum Ausprobieren. */
  felder: [
    { id: 'anfragen', label: 'Anfragen pro Monat', hinweis: 'Anrufe, E-Mails und Nachrichten zusammen', wert: 20, min: 0, max: 5000, einheit: '' },
    { id: 'liegen', label: 'Davon bleiben liegen oder werden zu spät beantwortet', hinweis: 'Eine Schätzung genügt', wert: 25, min: 0, max: 100, einheit: '%' },
    { id: 'quote', label: 'Davon würden sonst zum Auftrag oder Termin', hinweis: 'Ihre übliche Abschlussquote', wert: 30, min: 0, max: 100, einheit: '%' },
    { id: 'wert', label: 'Wert eines Auftrags oder Termins', hinweis: 'Im Durchschnitt', wert: 80, min: 0, max: 100000, einheit: '€' },
  ],
  ergebnis: 'Verlorener Umsatz pro Monat',
  jahr: 'Im Jahr sind das',
  beispiel: 'Beispiel',
  vergleich: `Zum Vergleich: Die Betreuung kostet ${betreuung.preis} im Monat.`,
  hinweis: 'Beispielwerte zum Ausprobieren, keine Garantie. Eine Automatik rettet nur die Anfragen, die heute an fehlender Zeit scheitern.',
  cta: 'Zahlen im Erstgespräch durchgehen',
};

export const demo = {
  /**
   * DEMO-VIDEO oben auf der Startseite (rechts neben der Überschrift, auf dem Handy darunter).
   * MP4 nach public/video/ legen und den Pfad eintragen, z. B. '/video/demo.mp4'.
   * Empfohlen: Vorschaubild (poster, z. B. '/video/demo.jpg') und Untertitel (untertitel, .vtt).
   * Leer lassen = statt des Videos erscheint die Beispielgrafik.
   */
  video: '',
  poster: '',
  untertitel: '',
  beschriftung: 'Demo: So arbeitet eine Anfrage-Automatik.',
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
        `Sie zahlen einen Festpreis für die Einrichtung und danach ${betreuung.preis} im Monat für die Betreuung – egal, wie viele Lösungen Sie nutzen. Der ${onlineStart.titel} (Website) kostet ${onlineStart.einmalig}, der ${anfragenAssistent.titel} ${anfragenAssistent.einmalig} und der ${terminAssistent.titel} ${terminAssistent.einmalig} – jeweils zum Gründerpreis für die ersten 5 Betriebe. Eigene Lösungen starten ${eigeneLoesung.preis}.`,
        'Sie bekommen vorher ein schriftliches Angebot. Alle Preise sind Endpreise; gemäß § 19 UStG wird keine Umsatzsteuer berechnet.',
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
        'Nein. Die Assistenten funktionieren auch mit Ihrer bestehenden Seite, zum Beispiel über Ihr Kontaktformular oder Ihre E-Mail-Adresse. Sie zahlen dann nur das Paket, das Sie brauchen.',
      ],
    },
    {
      frage: 'Was ist in der Betreuung enthalten?',
      antwort: [
        'Der Betrieb Ihrer Lösungen auf einem Server in Deutschland, Domain und Hosting, Überwachung, Updates und Fehlerbehebung, kleine Änderungen wie neue Öffnungszeiten (bis 30 Minuten im Monat) und Support per E-Mail. Sie zahlen die Betreuung einmal pro Betrieb, auch wenn Sie mehrere Pakete nutzen. Größere Änderungswünsche bespreche ich vorher mit Ihnen und nenne Ihnen einen Preis.',
      ],
    },
    {
      frage: 'Geht es auch ohne Betreuung?',
      antwort: [
        'Nein. Programme und Schnittstellen ändern sich regelmäßig, deshalb läuft jede Lösung mit Betreuung. Nur so bleibt Ihr Ablauf zuverlässig.',
      ],
    },
    {
      frage: 'Wie lange bin ich gebunden?',
      antwort: ['Die Betreuung läuft mindestens 3 Monate. Danach können Sie jederzeit zum Monatsende kündigen.'],
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
        'Die Lösungen laufen auf einem Server in Deutschland. Mit jedem Kunden schließe ich einen Auftragsverarbeitungsvertrag (AVV). Gesundheitsdaten verarbeite ich nicht.',
      ],
    },
    {
      frage: 'Müssen meine Kunden erfahren, dass eine KI antwortet?',
      antwort: [
        'Ja, wenn ein Chatbot oder KI-Assistent direkt mit Ihren Kunden schreibt oder spricht. Nach der EU-KI-Verordnung muss dann erkennbar sein, dass es eine KI ist. Ich richte den Hinweis von Anfang an mit ein, zum Beispiel mit einem kurzen Satz zu Beginn des Chats.',
        'Feste Abläufe ohne KI, etwa eine Eingangsbestätigung aus einer Vorlage oder eine Terminerinnerung, sind davon nicht betroffen.',
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

/** Hinweis während einer Pause. Erscheint nur, wenn in site.ts `pause: true` steht. */
export const pause = {
  titel: 'Derzeit nehme ich keine neuen Aufträge an',
  text: 'Ich konzentriere mich gerade auf mein Abitur. Schreiben Sie mir trotzdem gern: Ich antworte, sobald ich kann, und melde mich, wenn ich wieder Aufträge annehme.',
  cta: 'Nachricht schreiben',
  /** Knopf oben rechts in der Kopfzeile. */
  header: 'Kontakt',
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
    erfolg: 'Danke! Ihre Nachricht ist angekommen, eine Bestätigung kommt gleich per E-Mail (falls nicht, bitte kurz im Spam-Ordner nachsehen). Ich melde mich persönlich bei Ihnen.',
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
  beschreibung: `Websites, Automatisierungen und KI-Agents für kleine Betriebe in ${site.region.stadt}, im ${site.region.landkreis} und in ${site.region.bundesland}.`,
};
