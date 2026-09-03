#!/usr/bin/env node
/**
 * Read-only 17hats page capture.
 *
 * Attaches to YOUR already-running, already-logged-in Chrome over the DevTools
 * Protocol and records the structure of each page in URLS below. It only
 * navigates (GET). It never clicks, types, submits, or changes anything.
 *
 * Usage:
 *   1. Quit Chrome fully, then relaunch it with remote debugging enabled:
 *        macOS:   /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
 *        Windows: "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222
 *        Linux:   google-chrome --remote-debugging-port=9222
 *   2. Log in to https://app.17hats.com in that Chrome window.
 *   3. npm install (inside tools/capture), then: node capture-17hats.mjs
 *   4. Review ./capture/** before committing — screenshots may show client names.
 *
 * Output: ./capture/<n>-<slug>/ { screenshot.png, structure.json, structure.md }
 */
import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const CDP_URL = process.env.CDP_URL || 'http://localhost:9222';
const BASE = process.env.SEVENTEENHATS_BASE || 'https://app.17hats.com';

// Navigation-only targets. Add/remove as you discover the real routes.
// Unknown routes are fine — a 404 is recorded and skipped.
const URLS = [
  '/',                       // dashboard
  '/dashboard',
  '/contacts',
  '/contacts/leads',
  '/projects',
  '/calendar',
  '/todos',
  '/bookkeeping',
  '/bookkeeping/invoices',
  '/bookkeeping/transactions',
  '/bookkeeping/reports',
  '/documents',
  '/templates',
  '/templates/emails',
  '/templates/quotes',
  '/templates/contracts',
  '/templates/invoices',
  '/templates/questionnaires',
  '/templates/workflows',
  '/templates/lead_capture_forms',
  '/templates/projects',
  '/products',
  '/online_scheduling',
  '/time_tracking',
  '/settings',
  '/settings/account',
  '/settings/brand',
  '/settings/users',
  '/settings/email',
  '/settings/payments',
  '/settings/integrations',
  '/settings/subscription',
  '/reports',
];

// Attribute values we NEVER record (avoid leaking any user/client data).
const FORBIDDEN_SELECTORS = ['input[type=password]', 'input[name*=card]', 'input[name*=cvv]', 'input[name*=account]', 'input[name*=routing]'];

const slug = (u) => (u.replace(/^\//, '') || 'root').replace(/[^a-z0-9]+/gi, '-').toLowerCase();

async function main() {
  const browser = await chromium.connectOverCDP(CDP_URL);
  const context = browser.contexts()[0];
  if (!context) throw new Error('No browser context found. Is Chrome running with --remote-debugging-port=9222?');
  const page = await context.newPage();

  mkdirSync('capture', { recursive: true });
  const index = [];

  for (let i = 0; i < URLS.length; i++) {
    const path = URLS[i];
    const url = BASE + path;
    const dir = join('capture', `${String(i + 1).padStart(2, '0')}-${slug(path)}`);
    mkdirSync(dir, { recursive: true });
    let status = 'ok';
    try {
      const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
      if (resp && resp.status() >= 400) status = `http-${resp.status()}`;
    } catch (e) {
      status = `error: ${e.message.split('\n')[0]}`;
    }
    await page.waitForTimeout(1500);

    const structure = await page.evaluate((forbidden) => {
      const text = (el) => (el.innerText || el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 120);
      const uniq = (arr) => [...new Set(arr.filter(Boolean))];
      const isForbidden = (el) => forbidden.some((sel) => el.matches?.(sel));
      const nav = uniq([...document.querySelectorAll('nav a, aside a, header a, [role=navigation] a, [class*=nav] a, [class*=sidebar] a, [class*=menu] a')]
        .map((a) => `${text(a)} -> ${a.getAttribute('href')}`));
      const headings = uniq([...document.querySelectorAll('h1,h2,h3,h4')].map(text));
      const tabs = uniq([...document.querySelectorAll('[role=tab], .tab, .tabs a, .tabs li, [class*=tab] a')].map(text));
      const buttons = uniq([...document.querySelectorAll('button, [role=button], a.btn, a[class*=button], input[type=submit]')].map(text));
      const tableHeaders = uniq([...document.querySelectorAll('th, [role=columnheader]')].map(text));
      const fieldLabels = uniq([...document.querySelectorAll('input, select, textarea')]
        .filter((el) => !isForbidden(el))
        .map((el) => {
          const id = el.id;
          const lab = id ? document.querySelector(`label[for="${CSS.escape(id)}"]`) : el.closest('label');
          const name = lab ? text(lab) : (el.getAttribute('placeholder') || el.getAttribute('aria-label') || el.getAttribute('name') || '');
          return name ? `${name} [${el.tagName.toLowerCase()}${el.type ? ':' + el.type : ''}]` : '';
        }));
      const links = uniq([...document.querySelectorAll('main a, [role=main] a, .content a')].map((a) => a.getAttribute('href')))
        .filter((h) => h && h.startsWith('/')).slice(0, 200);
      return {
        title: document.title,
        finalUrl: location.href,
        nav, headings, tabs, buttons, tableHeaders, fieldLabels, internalLinks: links,
      };
    }, FORBIDDEN_SELECTORS);

    structure.requestedPath = path;
    structure.status = status;
    structure.capturedAt = new Date().toISOString();

    try { await page.screenshot({ path: join(dir, 'screenshot.png'), fullPage: true }); } catch {}
    writeFileSync(join(dir, 'structure.json'), JSON.stringify(structure, null, 2));
    writeFileSync(join(dir, 'structure.md'), toMarkdown(structure));
    index.push({ path, status, finalUrl: structure.finalUrl, title: structure.title, dir });
    console.log(`[${i + 1}/${URLS.length}] ${path} -> ${status} (${structure.title})`);
  }

  writeFileSync(join('capture', 'INDEX.md'), '# Capture index\n\n| # | Requested | Status | Final URL | Title |\n|---|---|---|---|---|\n' +
    index.map((r, i) => `| ${i + 1} | \`${r.path}\` | ${r.status} | ${r.finalUrl} | ${r.title} |`).join('\n') + '\n');
  await page.close();
  await browser.close(); // disconnects from CDP; does not quit your Chrome
}

function toMarkdown(s) {
  const list = (title, arr) => arr.length ? `\n## ${title}\n` + arr.map((x) => `- ${x}`).join('\n') + '\n' : '';
  return `# ${s.title || s.requestedPath}\n\n- Requested: \`${s.requestedPath}\`\n- Final URL: ${s.finalUrl}\n- Status: ${s.status}\n- Captured: ${s.capturedAt}\n` +
    list('Navigation', s.nav) + list('Headings', s.headings) + list('Tabs', s.tabs) + list('Buttons (labels only)', s.buttons) +
    list('Table columns', s.tableHeaders) + list('Form fields (labels only)', s.fieldLabels) + list('Internal links', s.internalLinks);
}

main().catch((e) => { console.error(e); process.exit(1); });
