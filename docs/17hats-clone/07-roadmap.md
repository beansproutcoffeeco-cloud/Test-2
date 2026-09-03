# Roadmap, milestones, and risks

Assumes 2–3 full-stack engineers, 1 designer (part-time), 1 PM/founder. Weeks
are calendar weeks. Sizes reference `06-feature-inventory.md`.

## Phase 0 — Discovery and foundations (weeks 1–4)

**Goal:** verified requirements, design system, skeleton app.

- ~~Run the Claude in Chrome read-only walkthrough (`00-in-app-walkthrough-checklist.md`)~~ **Done 2026-09-03.** All eleven passes were completed read-only against a live account. Findings are in `01-research-log.md` Addendum B, corrections and the remaining gaps in `08-open-questions.md`, screenshots in `screens/`. Seven items are still open, chiefly the client-facing document UI (accept / sign / pay, tip control, signature capture), the quote decline flow, invoice template internals and the mobile app - all of which need either a sandbox account or permission to touch a live client document.
- 5–8 customer interviews with current 17hats users (photographers, coaches); validate pricing and the top-8 improvements.
- Decide name, domain, pricing.
- Design: information architecture, navigation, design tokens, core screens (dashboard, contact, project, document editor, client document page, Kanban).
- Engineering: monorepo, auth, multi-tenant Postgres with RLS, brand subdomain routing, job runner, object storage, CI, preview deploys, error tracking.
- **Exit criteria:** signed-off IA + Figma for P0 screens; empty app deploys with login, brand creation, user invite.

## Phase 1 — Core loop private beta (weeks 5–16)

**Goal:** a photographer can run inquiry → quote/contract/invoice → payment → bookkeeping end to end.

Sprint plan (2-week sprints):
1. **S1** Contacts, companies, custom fields, tags, import/export (CON-*, ACC-4/5).
2. **S2** Projects hub with tabs, calendars + events, iCal feed, to-dos (PRJ-1/2/4, CAL-1/3, TODO-1).
3. **S3** Template library, editor, tokens with 17hats syntax compat (TPL-1/2/3).
4. **S4** Quotes with option groups, products catalog, client accept page (QUO-1..4, PROD-1).
5. **S5** Contracts + e-signature + PDF (CTR-1/2); questionnaires with branching + mapping (QST-1..3).
6. **S6** Invoices, payment schedules, Stripe, reminders, offline payments, recurring (INV-*, PAY-1/4); 3-in-1 chain.
7. **S7** Lead capture forms + install modes + lead sources + leads page (LEAD-1..5,7).
8. **S8** Workflow engine v1: steps, base dates, approval queue, completion rules, triggers (WF-1..5).
9. **S9** Client portal, dashboard, notifications, email send via relay/OAuth, IMAP fallback sync (POR-1..3, DASH-1, MAIL-1/2/5, NOTIF-1).
10. **S10** Online scheduling basic, time tracking, bookkeeping ledger + reports (SCH-1..3, TIME-1, BK-1, RPT-1).
11. **S11–12** Hardening, importer presets, beta onboarding, docs.

**Exit criteria:** 10 beta accounts complete a real 3-in-1 document with payment; P0 list (63 items) done; audit log and export working.

## Phase 2 — Public launch with differentiators (weeks 17–28)

- Kanban pipelines with stage automations (PRJ-3).
- Workflow branching, versioning, new actions (WF-6/7/8).
- Real-time email via Gmail/Graph push, unknown-sender linking, shared inbox (MAIL-3/4).
- Multi-account Google + Microsoft two-way calendar, agenda view, drag reschedule (CAL-2/4).
- Advanced scheduling included: payments at booking, Zoom/Meet, groups, team (SCH-4, INT-2).
- Square payments; refunds/credit notes/late fees (PAY-2, INV-6).
- Portal v2: client uploads, messaging, saved payment methods (POR-4).
- Contract audit certificate, template library (CTR-3, TPL-6).
- Bank Connect via Plaid, apply deposit to invoice (BK-2/3).
- PWA with web push; full data export (MOB-1, DATA-1).
- Public changelog, status page, in-app chat support.

**Exit criteria:** public signup, flat pricing live, migration wizard from 17hats/HoneyBook/Dubsado, NPS ≥ 40 from beta.

## Phase 3 — Growth (weeks 29–44)

- AI layer: reply drafting in voice, thread summaries, questionnaire/contract generation, inquiry extraction, NL reports (AI-1).
- Public API, webhooks, Zapier/Make with full event catalog (API-1, INT-1).
- QuickBooks two-way with dedupe, Xero; receipts OCR, mileage, multi-currency (QBO-1, BK-4).
- SMS two-way (SMS-1); waitlists and round-robin (SCH-5).
- Reporting dashboards (RPT-2).
- Regions: CA/UK/AU tax and currency.

## Phase 4 — Ecosystem (weeks 45+)

- Native mobile wrappers, MCP server, gallery integrations (Pic-Time, ShootProof, Pixieset), template sharing and marketplace, SOC 2.

## Milestone summary

| Milestone | Week | Definition of done |
|---|---|---|
| M0 Foundations | 4 | App deploys; IA and designs approved; research log verified in-app |
| M1 Private beta | 16 | Core loop end to end for 10 accounts |
| M2 Public launch | 28 | Differentiators shipped; flat pricing; migration wizard |
| M3 AI + platform | 44 | AI features, API, accounting sync |
| M4 Ecosystem | 60+ | Native apps, marketplace, SOC 2 |

## Risks and mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Research built from summaries, not live app | Missing edge behaviours | Phase 0 in-app walkthrough; beta users validate |
| Workflow engine complexity | Schedule slip | Start with linear engine on durable jobs; branching in P2 behind flag |
| Email deliverability and sync | Churn driver | OAuth send via user mailbox; verified sender fallback; bounce handling; Gmail push before IMAP polish |
| Payments/e-sign compliance | Legal exposure | Stripe-hosted card entry; ESIGN audit trail; legal review of contract flow |
| Accounting sync duplicates (the 17hats bug) | Trust loss | Idempotency keys; reconciliation report; opt-in per transaction type |
| Scope creep from parity list | Late launch | P0 frozen at 63 items; new asks go to P2+ |
| Pricing too low to sustain integrations cost (Plaid, Twilio, AI) | Margin | Usage caps on SMS/AI; model costs before launch |
| Migration friction | Low switching | Importers with mapping preview; concierge migration for beta |
| Single-tenant-style data leaks in multi-tenant DB | Security incident | RLS enforced at DB; automated tenant isolation tests |
