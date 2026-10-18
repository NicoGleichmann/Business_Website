# Lumio – Website

Einseitige Website für KI-Automatisierungen und KI-Agents für kleine Betriebe (Region Bad Salzungen / Wartburgkreis).
Ziel der Seite: Inhaber buchen ein kostenloses Erstgespräch.

- **Technik:** [Astro](https://astro.build) (statische Seite) + [Tailwind CSS](https://tailwindcss.com)
- **Datenschutzfreundlich:** keine Cookies, kein Tracking, keine CDNs, Schrift lokal → kein Cookie-Banner nötig
- **Schnell & barrierefrei:** Lighthouse 100 in allen Kategorien (mobil + Desktop), axe-core ohne Befund (WCAG 2.2 AA)

---

## Inhalt

1. [Lokal starten](#1-lokal-starten)
2. [Name, Kontaktdaten und Texte ändern](#2-name-kontaktdaten-und-texte-ändern)
3. [Kontaktformular & n8n](#3-kontaktformular--n8n)
4. [Demo-Video](#4-demo-video)
5. [Impressum & Datenschutz](#5-impressum--datenschutz)
6. [Veröffentlichen (Cloudflare Pages / Netlify)](#6-veröffentlichen)
7. [Go-live-Checkliste](#7-go-live-checkliste)
8. [Projektstruktur](#8-projektstruktur)

---

## 1. Lokal starten

Voraussetzung: [Node.js](https://nodejs.org) **22.22 oder neuer** (die Version steht in `.nvmrc`).

```bash
npm install        # einmalig: Abhängigkeiten installieren
npm run dev        # Entwicklungsserver → http://localhost:4321 (Änderungen sofort sichtbar)
```

Weitere Befehle:

| Befehl            | Was passiert                                                                 |
| ----------------- | ---------------------------------------------------------------------------- |
| `npm run build`   | Fertige Website nach `dist/` bauen                                           |
| `npm run preview` | Gebaute Website lokal ansehen (wie später online)                            |
| `npm run check`   | Code auf Fehler prüfen                                                       |
| `npm run todos`   | **Alle offenen Platzhalter `[[TODO: …]]` und Go-live-Punkte auflisten**      |
| `npm run og`      | Vorschaubild (`og-image.png`) und Icons neu erzeugen – nach Namensänderung   |

> Hinweis: Die Content-Security-Policy (Sicherheitsregel für Skripte) greift nur in `build`/`preview`, nicht in `dev`.

---

## 2. Name, Kontaktdaten und Texte ändern

### Name, Slogan, Kontakt, Adresse → `src/config/site.ts`

**Eine Datei für alles, was sich am Unternehmen ändern kann.** Name, Slogan, E-Mail, Telefon, Cal.com-Link, Anschrift,
Domain, Region und SEO-Texte stehen nur hier. Startseite, Impressum, Vorschau-Daten und strukturierte Daten für Google
lesen von dort.

- Werte, die mit `[[TODO` beginnen, erscheinen auf der Seite **gelb markiert**.
- Telefon nicht gewünscht? `telefon: ''` – dann wird es überall ausgeblendet.
- **Nach einer Namens- oder Slogan-Änderung:** `npm run og` ausführen (erzeugt das Vorschaubild für WhatsApp, LinkedIn & Co. neu).

### Texte der Abschnitte → `src/content/texte.ts`

Alle sichtbaren Texte der Startseite (Hero, Probleme, Leistungen, Ablauf, Demo, Über mich, FAQ, Kontakt) in der
Reihenfolge der Seite. Nur den Text zwischen den Anführungszeichen ändern. Ein Apostroph im Text braucht einen Backslash: `'So läuft\'s ab'`.

### Einführungsangebot → `src/content/texte.ts` (`preise.einfuehrung`)

Nach jedem neuen Kunden `freiePlaetze` um 1 verringern – die Zahl steht als „Noch X von 5 Plätzen frei“ auf der Seite
und muss stimmen. Bei `0` verschwinden der Hinweis im Hero und der Kasten über den Preisen automatisch; dann auch die
Einführungspreise in den Paketen (`preise.pakete`) und im Kasten „Sie haben schon eine Website?“ (`preise.ohneWebsite`)
entfernen. Die FAQ-Antwort „Was kostet das?“ übernimmt die Preise automatisch aus den Paketen.

### Farben → `src/styles/global.css`

Ganz oben stehen die Farb-Tokens für Hell- und Dunkelmodus, benannt nach ihrer Rolle (Seite, Band, Karte, Feld …).
Die Akzentfarbe ist `--accent` (dazu `--accent-hover`, `--accent-soft`). Die Dunkel-Werte stehen zweimal
(Umschalter + Systemeinstellung) und müssen gleich bleiben. Bei Änderungen den Kontrast prüfen (z. B. mit dem [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)):
mindestens 4,5 : 1 zum Hintergrund und zur Button-Schrift. Die Farben für Icons/Vorschaubild stehen zusätzlich in
`public/favicon.svg` und `scripts/og-image.mjs`.

### Foto „Über mich“

Neues Foto unter demselben Namen nach `src/assets/nico-gleichmann.jpg` legen (quadratisch, am besten mind. 800 × 800 px). Astro verkleinert und komprimiert es beim Build automatisch.

---

## 3. Kontaktformular & n8n

Das Formular schickt die Daten per `POST` an einen Webhook. Die URL kommt aus der **Umgebungsvariable**
`PUBLIC_FORM_WEBHOOK_URL` – lokal in einer Datei `.env` (Vorlage: `.env.example`), online im Dashboard des Hosters.

| Zustand                     | Verhalten                                                                                      |
| --------------------------- | ---------------------------------------------------------------------------------------------- |
| Webhook-URL gesetzt         | Versand im Hintergrund, Bestätigung direkt im Formular                                         |
| Webhook-URL gesetzt, kein JS | Normales Absenden; n8n leitet auf `/danke/` weiter (siehe unten)                               |
| **Keine** Webhook-URL       | **mailto-Fallback:** E-Mail-Programm öffnet sich mit vorbereiteter Nachricht an `kontakt.email` |

**Wichtig:** Die Variable wird beim **Build** eingesetzt. Nach dem Ändern im Hosting-Dashboard einmal neu deployen.

### Gesendete Felder (form-urlencoded)

| Feld          | Inhalt                                                       |
| ------------- | ------------------------------------------------------------ |
| `name`        | Name (Pflicht)                                               |
| `email`       | E-Mail (Pflicht)                                             |
| `betrieb`     | Betrieb (optional)                                           |
| `zeit`        | „Was kostet Sie am meisten Zeit?“ (optional)                 |
| `datenschutz` | `gelesen` (Pflicht-Checkbox)                                 |
| `website`     | **Honeypot** – bei Menschen immer leer. Gefüllt = Spam-Bot.  |

### n8n-Workflow einrichten

1. **Webhook-Node**
   - HTTP Method: `POST`, Path z. B. `kontakt`
   - Respond: *Using „Respond to Webhook“ Node*
   - Options → *Allowed Origins (CORS)*: Ihre Domain, z. B. `https://www.ihre-domain.de`
   - Die **Production URL** (nicht die Test-URL) als `PUBLIC_FORM_WEBHOOK_URL` eintragen und den Workflow aktivieren.
2. **IF-Node „Spam?“** – Bedingung: `{{ $json.body.website }}` *is not empty* → Zweig endet (nur antworten, nichts speichern).
   Der Browser verwirft Honeypot-Einsendungen bereits, Bots schicken aber oft direkt an den Webhook – deshalb auch hier prüfen.
3. **Verarbeitung** – z. B. E-Mail an Sie, Eintrag in Tabelle/CRM, automatische Eingangsbestätigung.
4. **IF-Node „Antwortformat“** – Bedingung: `{{ $json.headers.accept }}` *contains* `application/json`
   - **true** → *Respond to Webhook*: Respond With `JSON`, Body `{ "ok": true }` (Formular zeigt die Bestätigung)
   - **false** → *Respond to Webhook*: Respond With `Redirect`, URL `https://www.ihre-domain.de/danke/` (Besucher ohne JavaScript)

Antwortet n8n mit einem Fehlerstatus (4xx/5xx) oder ist nicht erreichbar, sieht der Besucher eine Fehlermeldung, und seine Eingaben bleiben erhalten.

---

## 4. Demo-Video

Kein YouTube/Vimeo (würde Daten an Dritte senden und ein Einwilligungs-Banner nötig machen). Stattdessen selbst hosten:

1. Video als **MP4 (H.264)** exportieren, ca. 720p, möglichst **unter 20 MB** (Cloudflare Pages erlaubt max. 25 MB pro Datei).
   Komprimieren z. B. mit [HandBrake](https://handbrake.fr), Preset „Web“.
2. Datei nach `public/video/demo.mp4` legen.
3. In `src/content/texte.ts` bei `demo` eintragen: `video: '/video/demo.mp4'`.
   Optional: Vorschaubild `poster: '/video/demo.jpg'` und Untertitel `untertitel: '/video/demo.vtt'` (für Barrierefreiheit empfohlen).

Das Video lädt erst, wenn jemand auf „Abspielen“ tippt (`preload="none"`) – die Seite bleibt schnell.
Solange `video` leer ist, wird der Abschnitt „Demo“ komplett ausgeblendet.

---

## 5. Impressum & Datenschutz

`src/pages/impressum.astro` und `src/pages/datenschutz.astro` enthalten **bewusst keinen selbst formulierten Rechtstext**,
nur den Seitenrahmen und markierte Platzhalter. Text aus einem Generator (z. B. eRecht24, Dr. Schwenke) im markierten Bereich
einfügen und von IHK oder Steuerberater prüfen lassen.

### Datenschutz-Checkliste für den Generator

Diese **technischen Fakten** der Website braucht der Generator (rechtliche Bewertung macht der Generator bzw. Ihr Berater):

- **Hosting:** Cloudflare Pages *oder* Netlify (je nachdem, was Sie wählen). Der Hoster verarbeitet beim Aufruf Server-Logdaten (u. a. IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser).
- **Kontaktformular:** Felder Name, E-Mail, Betrieb, Freitext; Übermittlung an einen **n8n-Webhook** → angeben, wo n8n läuft (n8n Cloud oder eigener Server, Anbieter, Serverstandort) und was danach mit den Daten passiert (E-Mail, Tabelle, CRM …) und wie lange sie gespeichert werden.
- **Ohne Webhook (Übergang):** Kontakt per E-Mail über das E-Mail-Programm des Besuchers (mailto).
- **Terminbuchung:** **Cal.com** – nur als Link, nicht eingebunden. Daten fließen erst, wenn der Besucher auf Cal.com bucht; für Ihre Cal.com-Nutzung ggf. Auftragsverarbeitungsvertrag (DPA) abschließen.
- **Cookies:** keine.
- **Lokaler Speicher:** Nur wenn der Besucher den Hell/Dunkel-Umschalter benutzt, wird im Browser (`localStorage`) der Wert `farbschema = hell` oder `dunkel` gespeichert. Keine Übertragung an einen Server.
- **Schriftarten:** Inter, **lokal** vom eigenen Server ausgeliefert (keine Google Fonts).
- **Kein** Tracking, keine Analyse-Tools, keine Social-Media-Plugins, keine eingebetteten Videos/Karten/Dienste Dritter.
- **E-Mail-/Telefonkontakt:** direkte Kontaktaufnahme möglich.

**Wichtig:** Die Abschnitte 3–4 der Datenschutzerklärung (Hosting, Server-Logs, Kontakt, Cal.com, lokaler Speicher)
sind selbst ergänzt und beschreiben genau den heutigen Aufbau. Kommt etwas hinzu oder ändert sich (n8n-Webhook fürs
Formular, Demo-Video, anderer E-Mail-Anbieter, Analyse-Tools, Cloudflare Web Analytics …), müssen sie angepasst werden.

**Aktueller Stand der Angaben** (offene Punkte in eckigen Klammern):

- **E-Mail-Postfach:** Anfragen gehen an ein **Gmail-Postfach (Google)** → im Generator angeben. Alternative: später ein Postfach unter der eigenen Domain.
- **n8n:** eigener Server in der EU, Standort [Deutschland? bestätigen], Anbieter [?], nur für dich und deine Kunden.
- **Formular-Anfragen:** per E-Mail an dich, gespeichert in [Tabelle / Notion / CRM?], Löschung nach [2 Monaten?] ohne Auftrag.
- **Terminbuchung:** Cal.com.
- **Kunden-Projekte:** AVV mit jedem Kunden vor Projektstart, keine Gesundheitsdaten.

---

## 6. Veröffentlichen

Beide Anbieter bauen die Seite automatisch bei jedem `git push`. Die Datei `dist/_headers` (Sicherheits- und Cache-Header)
wird beim Build erzeugt und von beiden Anbietern gelesen.

### Cloudflare Pages

1. Im Cloudflare-Dashboard: **Workers & Pages → Erstellen**. Cloudflare schlägt dort zuerst „App erstellen“ (Workers) vor –
   stattdessen oben auf **„Weiter zu Pages“** klicken → **Mit Git verbinden** → dieses Repository wählen, Produktions-Branch `main`.
2. Build-Einstellungen:
   - Framework-Voreinstellung: **Astro**
   - Build-Befehl: `npm run build`
   - Ausgabeverzeichnis: `dist`
3. **Umgebungsvariablen** (Production *und* Preview):
   - `PUBLIC_FORM_WEBHOOK_URL` = Production-URL des n8n-Webhooks (leer lassen = mailto-Fallback)
   - `NODE_VERSION` = `22.22.0` (Astro braucht mindestens diese Version)
4. Speichern & deployen. Danach unter **Benutzerdefinierte Domains** die eigene Domain verbinden.

### Netlify

1. **Add new site → Import an existing project** → Repository wählen.
   Build-Befehl und Ordner liest Netlify aus `netlify.toml` (`npm run build`, `dist`).
2. **Site configuration → Environment variables:** `PUBLIC_FORM_WEBHOOK_URL` setzen.
3. Deploy auslösen, danach unter **Domain management** die eigene Domain verbinden.

> Nach jeder Änderung an Umgebungsvariablen: **neu deployen**, damit sie in die Seite übernommen werden.

> **Cloudflare-E-Mail-Verschleierung:** Cloudflare schreibt E-Mail-Adressen im HTML standardmäßig um. Die Seite ist
> dagegen mit `<!--email_off-->` geschützt (in `src/layouts/Base.astro`) – diese Markierungen bitte nicht entfernen.

---

## 7. Go-live-Checkliste

`npm run todos` zeigt den aktuellen Stand. Vor dem Veröffentlichen unter eigener Domain:

- [ ] Alle `[[TODO: …]]` ersetzt (`npm run todos` meldet 0)
- [ ] Impressum und Datenschutzerklärung eingefügt und geprüft (IHK / Steuerberater)
- [ ] `site.url` in `src/config/site.ts` auf die echte Domain gesetzt
- [ ] Name und Slogan final → `npm run og` ausgeführt
- [ ] `PUBLIC_FORM_WEBHOOK_URL` beim Hoster gesetzt, n8n-Workflow aktiv, CORS-Origin = echte Domain
- [ ] Testanfrage über das Formular geschickt (mit und ohne gefüllten Honeypot)
- [ ] Cal.com-Link getestet
- [ ] **`indexierung: true`** in `src/config/site.ts` → erst dann erscheint die Seite bei Google
- [ ] Domain in der [Google Search Console](https://search.google.com/search-console) anmelden und `https://ihre-domain.de/sitemap.xml` einreichen

Solange `indexierung: false` ist, tragen alle Seiten `noindex` – Google nimmt sie nicht auf. (Lighthouse zeigt deshalb vor dem Go-live bei SEO 66 statt 100 – das ist Absicht.)

---

## 8. Projektstruktur

```
src/
  config/site.ts               ← Name, Slogan, Kontakt, Adresse, Domain, Region, SEO  (EINE zentrale Datei)
  config/strukturierte-daten.ts← Google-Daten (JSON-LD), automatisch aus site.ts
  content/texte.ts             ← alle Texte der Startseite
  styles/global.css            ← Farben (Hell/Dunkel), Schrift, Grundstile
  layouts/Base.astro           ← HTML-Kopf: Titel, Beschreibung, Vorschau, Theme
  layouts/Rechtliches.astro    ← Rahmen für Impressum/Datenschutz
  components/                  ← Header, Footer, Formular, Icons, Platzhalter
  components/abschnitte/       ← die 8 Abschnitte der Startseite
  pages/                       ← index, impressum, datenschutz, danke, 404, sitemap.xml, robots.txt
public/
  fonts/                       ← Inter (lokal) + Lizenz
  favicon.svg, favicon.ico, apple-touch-icon.png, og-image.png
scripts/
  todos.mjs                    ← npm run todos
  og-image.mjs                 ← npm run og
astro.config.ts                ← Build, Content-Security-Policy, _headers
```

### Lizenzen Dritter

- Schrift **Inter** – SIL Open Font License 1.1 (`public/fonts/Inter-LICENSE.txt`)
- Icons von **Lucide** – ISC-Lizenz (https://lucide.dev/license)
