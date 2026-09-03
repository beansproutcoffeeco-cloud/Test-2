# Roadmap & Delivery Plan

Assumes a core team of 1 PM/designer-ish founder + 2 full-stack engineers, with
contract help for legal (e-sign, terms) and design. Adjust dates to real staffing.

## Phase 0 — Discovery close-out (1–2 weeks)

| # | Task | Owner | Done when |
|---|---|---|---|
| 0.1 | Run `tools/capture/` against a logged-in 17hats account (read-only); redact; commit to `docs/17hats-analysis/live-capture/` | Founder | INDEX.md lists every real route with screenshot + structure |
| 0.2 | Reconcile each research file's UNVERIFIED items against the capture; update tags | PM | No UNVERIFIED item left on a v1 MUST feature |
| 0.3 | Re-run the two knowledge-only modules (09, 10) with search budget available | PM | Sources populated |
| 0.4 | 5 customer interviews (2 photographers, 1 events/catering, 1 coach, 1 home services) using `01-prd.md` §3 | Founder | Ranked pain list matches or corrects `02-improvements-backlog.md` |
| 0.5 | Decide name, domain, pricing hypothesis, stack sign-off (`03-architecture.md`) | Founder | ADR-001 committed |
| 0.6 | Legal: e-signature audit requirements (ESIGN/UETA), terms, privacy, PCI SAQ-A posture | Counsel | Checklist in `07-risks-and-open-questions.md` closed |

## Phase 1 — Foundation + booking loop MVP (8–10 weeks)

Goal: a new account can capture a lead, send a 3-in-1 bundle, get signed and paid, and see it on a project — on desktop and phone.

Sprint plan (2-week sprints):

1. **S1 Platform**: monorepo, auth (staff + 2FA), tenancy + RLS, job queue, event outbox, file storage, email provider, design system, PWA shell, Settings skeleton, audit log.
2. **S2 CRM**: Contacts, Companies, Tags, Custom fields, import wizard, Leads pipeline, Lead Capture Forms (builder, embed, spam, dedupe, mapping, auto-responder).
3. **S3 Projects**: list/grid/board, status, types/templates, overview with unified timeline, to-dos, notes, files, calendars (native) + events.
4. **S4 Documents**: catalog, templates, quote builder (Standard/Choose One/Choose Any), contract builder with tokens + forms, e-sign with audit certificate, invoice builder, payment schedules, Stripe Connect (cards, ACH, wallets, tips, save card, auto-pay), refunds, receipts, PDF, document activity, 3-in-1 bundle client pages.
5. **S5 Email + Workflows v1**: Gmail/Microsoft OAuth push sync, templates by type, token picker, scheduled send, read tracking; workflow builder (linear steps, approvals, completion triggers, day offsets), start triggers (manual, form, tag, status), run view.

Exit criteria: 10 design-partner accounts live; bundle completion tracked; p95 targets in `03-architecture.md` §7 met.

## Phase 2 — Differentiation (8 weeks)

6. **S6 Automation 2.0**: conditional branches, sub-day timing/time windows, dry-run preview, versioning + propagation, approvals inbox, webhook step.
7. **S7 Scheduling + Calendar sync**: services, availability, booking page/embed, intake + deposit, Zoom/Meet/Teams, reschedule/cancel; Google multi-account, Microsoft 365, ICS; to-do sync.
8. **S8 Portal + Money depth**: magic-link portal with messaging + files; reminder ladder, late fees, credit notes, recurring billing; QBO sync; bank feed (Plaid); reports dashboard.
9. **S9 Team + Platform**: roles/assignment, public API, webhooks, Zapier app, full export, status page.

Exit criteria: public launch; pricing live; migration wizard from 17hats/Dubsado/HoneyBook CSV.

## Phase 3 — Growth (ongoing)

Custom domains, proposal pages, AI assists, SMS, gallery partners, round-robin, multi-currency, native app wrappers if needed.

## Definition of done (every feature)

- Behaviour documented in `06-feature-parity-matrix.md` row updated to "Built".
- Unit + integration tests; Playwright e2e for the client-facing path.
- RLS test proving cross-tenant isolation.
- Event emitted for every state change (for workflows, timeline, webhooks).
- Mobile viewport verified.
- Help-center article stub written.

## Staffing & budget (rough)

| Role | Phase 0 | Phase 1 | Phase 2 |
|---|---|---|---|
| Founder/PM | 1 | 1 | 1 |
| Full-stack eng | 0 | 2 | 2–3 |
| Design (contract) | 0.2 | 0.5 | 0.3 |
| Legal (contract) | 0.1 | 0.1 | 0.1 |

Third-party costs at launch scale (hypothesis): Postgres ~$50–200/mo, hosting ~$50–150/mo, email ~$20–100/mo, Plaid per connected account, Stripe per transaction, Sentry/logs ~$50/mo.
