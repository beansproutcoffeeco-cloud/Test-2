# Read-only 17hats page capture

This attaches to **your own logged-in Chrome** and records page structure for
the clone project. It is navigation-only: no clicks, no typing, no form
submissions, no data changes.

## Run it

```bash
# 1. Quit Chrome completely, then relaunch with the DevTools port open
#    macOS
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
#    Windows
"C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222

# 2. Log in to https://app.17hats.com in that window.

# 3. In this folder:
npm install
npm run capture
```

Output lands in `tools/capture/capture/` (git-ignored by default). Each page gets
`screenshot.png`, `structure.json`, and `structure.md` (nav links, headings, tabs,
button labels, table columns, form field labels). Field **values** are never
recorded; password and payment fields are skipped entirely.

## Before committing anything from `capture/`

Screenshots and link lists can include client names, project names, and
amounts. Review them, redact, and only then move what you want into
`docs/17hats-analysis/live-capture/`.

## Adjusting routes

Edit the `URLS` array in `capture-17hats.mjs`. A 404 is recorded and skipped,
so guessing routes is safe. After the first run, `capture/INDEX.md` shows the
real final URLs so you can refine the list.
