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

## Publishing

Two options:

1. **Dedicated `opengym` repo (preferred).** Run `FINISH-ON-YOUR-MAC.sh` on a
   machine where the `gh` CLI is logged in. It creates the public repo, pushes
   this build to the root of `main`, enables Pages, and polls until live.

2. **Serve straight from this branch.** In this repo: Settings → Pages →
   Branch: `claude/new-session-wv93yg`, Folder: `/ (root)` → Save.
   Asset paths are relative, so it works fine under a project subpath.
