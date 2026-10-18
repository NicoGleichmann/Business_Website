import { writeFile } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';
import { site } from './src/config/site';

// Webhook-Ziel des Kontaktformulars (aus .env oder der Umgebungsvariable beim Hosting).
const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const webhook = (process.env.PUBLIC_FORM_WEBHOOK_URL ?? env.PUBLIC_FORM_WEBHOOK_URL ?? '').trim();
let webhookOrigin = '';
if (webhook) {
  try {
    webhookOrigin = new URL(webhook).origin;
  } catch {
    throw new Error(`PUBLIC_FORM_WEBHOOK_URL ist keine gültige URL: "${webhook}"`);
  }
}
const formZiele = ["'self'", webhookOrigin].filter(Boolean).join(' ');
const verbindungsZiele = ["'self'", webhookOrigin].filter(Boolean).join(' ');

/**
 * Schreibt nach dem Build eine `_headers`-Datei (wird von Cloudflare Pages und
 * Netlify gleichermaßen gelesen) mit Sicherheits- und Cache-Headern.
 */
const sicherheitsHeader = {
  name: 'sicherheits-header',
  hooks: {
    'astro:build:done': async ({ dir }: { dir: URL }) => {
      const headers = `/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Content-Security-Policy: frame-ancestors 'none'
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
  Cross-Origin-Opener-Policy: same-origin

/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/fonts/*
  Cache-Control: public, max-age=2592000
`;
      await writeFile(new URL('_headers', dir), headers);
    },
  },
};

export default defineConfig({
  site: site.url,
  trailingSlash: 'ignore',
  build: {
    // CSS direkt ins HTML schreiben: keine zusätzliche, blockierende Anfrage.
    inlineStylesheets: 'always',
  },
  devToolbar: { enabled: false },
  // Kein Code-Highlighting nötig (wäre mit der Content-Security-Policy nicht kompatibel).
  markdown: { syntaxHighlight: false },
  security: {
    // Content-Security-Policy als <meta>-Tag; Astro ergänzt Hashes für eigene Skripte/Styles.
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        `connect-src ${verbindungsZiele}`,
        `form-action ${formZiele}`,
        "base-uri 'self'",
        "object-src 'none'",
      ],
    },
  },
  integrations: [sicherheitsHeader],
  vite: {
    plugins: [tailwindcss()],
  },
});
