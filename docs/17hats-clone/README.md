# 17hats clone — research and project plan

Read in order.

| File | What it is |
|---|---|
| `00-in-app-walkthrough-checklist.md` | Script for a read-only Claude in Chrome pass through a live 17hats account to verify the research |
| `01-research-log.md` | Page-by-page functional notes on how 17hats works (screens, data, actions, links, complaints), with sources |
| `02-competitive-gaps-and-improvements.md` | Ranked complaints, competitor comparison, and the improvement list |
| `03-product-requirements.md` | Vision, personas, goals, 22 epics with user stories, non-functional requirements |
| `04-data-model.md` | Entity diagram and table definitions |
| `05-architecture.md` | Stack, system diagram, key design decisions |
| `06-feature-inventory.md` | Every 17hats feature with parity/improve/defer decision, effort, phase |
| `07-roadmap.md` | Phases, sprint plan, milestones, risks |
| `08-open-questions.md` | What still needs verifying and deciding |

## How this was produced

Produced 2026-09-03 from a cloud Claude Code session. That session had no
Claude in Chrome connection and its network proxy blocked 17hats.com, the
help center, blog, and all review sites, so the research is reconstructed
from search-engine summaries of about 120 help-center articles, blog posts,
release notes, and third-party reviews (every entry cites its sources). No
17hats account was accessed at that stage and no data was changed.

**Updated 2026-09-03.** The verification checklist in
`00-in-app-walkthrough-checklist.md` has since been run as a read-only Claude
in Chrome pass over a live 17hats account. Every previously flagged item is
resolved inline in `01-research-log.md`, with the full page-by-page record in
its **Addendum B** and screenshots in `screens/`. Corrections the walkthrough
forces on the rest of these documents, plus the seven items still open, are
listed in `08-open-questions.md`. The walkthrough created, edited, sent and
deleted nothing, and records no client names, contact details, payment data or
amounts.
