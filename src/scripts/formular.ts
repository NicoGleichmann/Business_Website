/**
 * Formular-Logik für alle Formulare mit data-kontaktformular (Kontaktformular unten, Rückruf-Formular oben):
 * deutsche Fehlermeldungen, Honeypot, Versand an den n8n-Webhook oder mailto-Fallback.
 * Fehlertexte stehen am Feld (data-fehler-leer / data-fehler-format), Statustexte am Formular.
 */
document.querySelectorAll<HTMLFormElement>('[data-kontaktformular]').forEach((form) => {
  // Eigene, deutschsprachige Fehlermeldungen statt der Browser-Blasen.
  form.noValidate = true;

  const d = form.dataset;
  const status = form.querySelector<HTMLElement>('[data-status]')!;
  const knopf = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const knopfText = knopf.textContent ?? '';
  const pflichtFelder = Array.from(form.querySelectorAll<HTMLInputElement>('[required]'));

  const zeige = (text: string, art: 'erfolg' | 'fehler' | 'info') => {
    status.textContent = text;
    status.dataset.art = art;
    status.hidden = false;
    status.focus();
  };

  const pruefe = (feld: HTMLInputElement): boolean => {
    let meldung = '';
    if (feld.validity.valueMissing) meldung = feld.dataset.fehlerLeer ?? '';
    else if (feld.validity.typeMismatch) meldung = feld.dataset.fehlerFormat ?? '';
    feld.setAttribute('aria-invalid', meldung ? 'true' : 'false');
    const fehler = document.getElementById(`${feld.id}-fehler`);
    if (fehler) {
      fehler.textContent = meldung;
      fehler.hidden = !meldung;
    }
    return !meldung;
  };

  // Nach einem Fehler beim Tippen erneut prüfen, damit die Meldung verschwindet.
  pflichtFelder.forEach((feld) =>
    feld.addEventListener(feld.type === 'checkbox' ? 'change' : 'input', () => {
      if (feld.getAttribute('aria-invalid') === 'true') pruefe(feld);
    }),
  );

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.hidden = true;

    const ungueltig = pflichtFelder.filter((feld) => !pruefe(feld));
    if (ungueltig.length > 0) {
      ungueltig[0].focus();
      return;
    }

    const daten = new FormData(form);

    // Honeypot ausgefüllt → vermutlich ein Bot: so tun, als hätte es geklappt.
    if (String(daten.get('website') ?? '').trim() !== '') {
      form.reset();
      zeige(d.erfolg ?? '', 'erfolg');
      return;
    }

    if (d.modus === 'webhook') {
      const felder = new URLSearchParams();
      daten.forEach((wert, schluessel) => felder.append(schluessel, String(wert)));
      knopf.disabled = true;
      knopf.textContent = d.sendet ?? knopfText;
      try {
        const antwort = await fetch(form.action, {
          method: 'POST',
          body: felder,
          headers: { Accept: 'application/json' },
          redirect: 'manual',
        });
        if (!antwort.ok && antwort.type !== 'opaqueredirect') throw new Error(`HTTP ${antwort.status}`);
        form.reset();
        zeige(d.erfolg ?? '', 'erfolg');
      } catch {
        zeige(d.fehler ?? '', 'fehler');
      } finally {
        knopf.disabled = false;
        knopf.textContent = knopfText;
      }
      return;
    }

    // mailto-Fallback: E-Mail-Programm mit vorbereiteter Nachricht öffnen.
    const empfaenger = d.emailName && d.emailDomain ? `${d.emailName}@${d.emailDomain}` : '';
    if (!empfaenger) {
      zeige(d.emailFehlt ?? '', 'fehler');
      return;
    }
    const text = [
      `Name: ${daten.get('name')}`,
      `E-Mail: ${daten.get('email')}`,
      `Betrieb: ${daten.get('betrieb') || '–'}`,
      '',
      'Was kostet mich am meisten Zeit?',
      String(daten.get('zeit') || '–'),
    ].join('\r\n');
    window.location.href = `mailto:${empfaenger}?subject=${encodeURIComponent(d.betreff ?? '')}&body=${encodeURIComponent(text)}`;
    zeige(d.mailto ?? '', 'info');
  });
});
