# openGym — personal PWA build

The **built, ready-to-serve static site** is at the root of this branch
(`index.html`, `sw.js`, `manifest.json`, `icon-*.png`, `assets/`).

Built from https://github.com/arvids-unavailable/openGym with:

- `VITE_DEMO=1` (no backend — all data stays in the browser)
- the first-launch example-workout seeding removed, so it starts empty
- exercise media pointed at the pinned jsDelivr CDN commit
  `hasaneyldrm/exercises-dataset@7455efae41b330c265e7cd4b78dfa848e7ce5ebd`,
  so the ~275 MB media set is not bundled (site is ~8.8 MB)

No source, no `data/`, and no secrets from the upstream repo are included here.

## Going live — one switch, once

Everything that can be automated already is. Turning Pages **on** for the first
time needs repository-admin rights, which neither the API token used to build
this nor the Actions `GITHUB_TOKEN` is granted, so it has to be done once by
hand:

> **Settings → Pages → Source: "Deploy from a branch" →
> Branch: `claude/new-session-wv93yg`, Folder: `/ (root)` → Save**

The site goes live 1–3 minutes later at:

    https://beansproutcoffeeco-cloud.github.io/Test-2/

Asset paths are relative, so it works correctly under the `/Test-2/` subpath.
Nothing else is required — the files are already committed.

### Alternatives

- **`.github/workflows/pages.yml`** — only needed if you set Source to
  "GitHub Actions" instead of a branch. Run it from the Actions tab. It is
  manual-dispatch-only so it does not fail on every push.
- **`FINISH-ON-YOUR-MAC.sh`** — if you would rather have a dedicated public
  `opengym` repo, run this on a machine with the `gh` CLI logged in. It creates
  the repo, pushes this build to the root of `main`, enables Pages, and polls
  until the URL returns 200.

## On the iPhone

Open the URL in **Safari** (not Chrome — Chrome has no "Add to Home Screen"),
then Share → Add to Home Screen → Add, and launch it from the icon.

## Known unknown

The exercise images/GIFs load from the jsDelivr CDN above. That host is
unreachable from the sandbox this was built in, so it could not be verified
here. Once the site is live, check:

```bash
curl -s -o /dev/null -w "%{http_code}\n" \
  "https://cdn.jsdelivr.net/gh/hasaneyldrm/exercises-dataset@7455efae41b330c265e7cd4b78dfa848e7ce5ebd/images/0001-2gPfomN.jpg"
```

If that is not `200`, the fallback is to copy `media/img` and `media/gif` from
the upstream repo into the site root and rebuild without the two `VITE_*_BASE`
variables (~275 MB, but no CDN dependency).
