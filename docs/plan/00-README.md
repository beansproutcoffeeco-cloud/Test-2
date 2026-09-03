# 17hats Clone — Project Plan (index)

This folder is the project-manager view. The research it draws on is in
`../17hats-analysis/` (one file per 17hats module, each claim tagged
VERIFIED / LIKELY / UNVERIFIED).

| Doc | What it answers |
|---|---|
| `01-prd.md` | What are we building, for whom, and what is in/out of v1 |
| `02-improvements-backlog.md` | Where we beat 17hats, ranked, with effort |
| `03-architecture.md` | How it is built |
| `04-data-model.md` | Tables and relationships |
| `05-roadmap.md` | Phases, milestones, sequencing, staffing, definition of done |
| `06-feature-parity-matrix.md` | Page-by-page checklist of 17hats behaviour vs. our plan |
| `07-risks-and-open-questions.md` | What could go wrong, what we still need to confirm |

## Status (2026-09-03)

- Research: 8 of 10 modules verified from public sources via search; 2 modules
  (`09` client portal/integrations and `10` market) are prior-knowledge only
  because the session's search budget ran out. See
  `../17hats-analysis/00-methodology-and-access-log.md`.
- Live Chrome capture: **not yet run** (no browser connector in this
  environment). Script ready at `tools/capture/`. Running it is the first
  action item in `05-roadmap.md` (Phase 0).
- No code written yet by design: this pass is discovery + planning.
