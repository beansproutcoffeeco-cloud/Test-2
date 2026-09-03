# Product Requirements Document — working name "Hatless"

(Working name only; replace before launch.)

## 1. Vision

An all-in-one client management platform for solo service businesses and
small studios (photographers, coaches, planners, designers, consultants) that
does everything 17hats does, at one flat price with no add-ons, with a modern
interface, a branching automation engine, real-time email, and an AI layer.

## 2. Target users and personas

| Persona | Needs | 17hats pain today |
|---|---|---|
| **Solo wedding/portrait photographer** | Inquiry → quote → contract → retainer → questionnaire → session → gallery → final payment | Add-on costs, dated UI, weak mobile, no gallery link |
| **Coach / consultant** | Booking page, packages, recurring billing, session notes, time tracking | Recurring billing costs extra, scheduling costs extra |
| **Event planner / small studio (2–5 people)** | Shared inbox, assignments, multi-pipeline, permissions, multi-brand | Per-user fees, notes only on projects, no shared inbox |
| **Bookkeeper / accountant of the above** | Clean export, QBO/Xero sync without duplicates, receipts | One-way sync, duplicates, no receipts |
| **The client** (end customer) | One link to select, sign, pay, answer, book, see dates | Portal is thin, no file upload, no messaging |

## 3. Goals and non-goals

**Goals (v1)**
1. Feature parity with the 17hats core loop (lead → project → documents → payment → bookkeeping) as inventoried in `06-feature-inventory.md`.
2. Ship the top-8 improvements in `02-competitive-gaps-and-improvements.md` by end of Phase 2.
3. Migration path: import from 17hats, HoneyBook, Dubsado CSV exports in under 30 minutes.
4. Single flat subscription; unlimited documents, users capped generously (5 included).

**Non-goals (v1)**
- Native photo galleries / print fulfilment (integrate instead; revisit Phase 3).
- Full double-entry accounting (sync to QBO/Xero instead).
- Marketplace for selling templates (Phase 3).
- Payroll, inventory.

## 4. Success metrics

- Activation: % of new accounts that send a first document within 7 days (target 50%).
- Time-to-first-automation: median minutes to first workflow applied (target < 20).
- Client completion: % of 3-in-1 documents completed within 72 h of send.
- Support: first response < 1 business hour in-app chat.
- Retention: 90-day logo retention > 85%.

## 5. Epics and user stories

Priority: **P0** must-have for private beta, **P1** public launch, **P2** post-launch, **P3** later.

### E1. Accounts, brands, users, permissions (P0)
- As an owner I can create an account with one or more **brands**, each with its own logo, colours, fonts, subdomain, sender identity, tax settings, and templates.
- As an owner I can invite users with roles Owner / Admin / Member and per-module permissions per brand.
- As a user I can sign in with email + password, magic link, or Google; 2FA available.
- Custom fields (contact, company, project) with types text/long text/number/date/select/multi-select/checkbox/file; every custom field is a token.

### E2. Contacts and companies (P0)
- Contact record with type (Lead / Client / Cold Prospect / Other), automatic Lead → Client promotion on quote accept / contract sign / invoice payment.
- **Company** object with many contacts (improvement).
- Tags, custom fields, notes and activity timeline at contact level (improvement) and project level.
- Related contacts on projects (spouse, planner, vendor) with roles; related contacts can be signers.
- Import CSV with mapping preview; import from 17hats/HoneyBook/Dubsado exports; export CSV.
- Merge duplicates.

### E3. Leads and lead capture (P0)
- Lead Capture Form builder: title, description, questions (short, long, yes/no, list, checkboxes, date, lead source, heading, text, file), required flags, answer mapping, appearance, thank-you message or redirect, notification, auto-response template, tags, workflow trigger (whole-form or per-answer), lead source.
- Install options: hosted link, pop-up snippet, iframe embed, plus a **native JSON endpoint** for headless sites (improvement).
- Email lead capture rules (The Knot, WeddingWire, ShowIt, generic regex).
- Lead sources (unlimited) with active/archived states and reporting.
- Leads page with New vs Active state, hot/cold, source, last activity, quick reply.

### E4. Projects and pipelines (P0 / P1)
- Project: name, contact, related contacts, date(s), location, calendar, status (lead/active/completed/archived), tags, custom fields, lead source, pipeline stage.
- Project page: header, sidebar details, documents panel, workflow panel with progress, tabs Notes / Emails / Files / To-dos / Events / Phone log / Time log / Activity.
- **Pipelines** (P1 improvement): unlimited boards per brand, unlimited stages, drag-and-drop, stage entry/exit automations, "days in stage" auto-advance and alerts, WIP counts and value per column.
- Bulk actions on projects list: tag, apply workflow, archive, change calendar, change stage.

### E5. Calendar and events (P0 / P1)
- Multiple internal calendars with colours; event CRUD; project events; to-do calendar; booking calendar; pending calendar.
- Google Calendar two-way for **multiple accounts** (P1), Microsoft 365 two-way via Graph (P1), iCal feed out (P0), CalDAV in (P2).
- Views: month/week/day/agenda; drag to reschedule; conflict warnings.

### E6. Workflow automation engine (P0 core, P1 branching)
- Templates with steps: To-Do, Action (send email/quote/contract/invoice/questionnaire; start workflow; archive; change calendar; add/remove tag; move stage; assign user; notify; webhook), Pause.
- Timing: N days before/on/after base date; after previous step; at a fixed time of day; base date resolution identical to 17hats (project date → activation date → booking date → custom).
- Mode per action: automatic or requires approval (approval queue on dashboard).
- Completion rules per send step: sent / viewed / accepted / signed / first payment / paid in full / submitted / all complete.
- Triggers: form submitted (whole or per answer), booking created/approved, product purchased, tag added/removed, stage entered, document event, manual, bulk, another workflow, webhook/API.
- **Branching** (P1): if/else on document status, answer value, tag, amount, custom field, days since; wait-until; loops limited to reminders.
- Versioning: edit template, choose to push to running instances or not; pause/resume/cancel per project; full run log.

### E7. Documents — templates and editor (P0)
- Template library for Email, Quote, Contract, Invoice, Questionnaire, Proposal (combined). Email types as in 17hats.
- Rich-text editor with tokens (contact.*, company.*, project.*, event.*, invoice.*, quote.*, contract.*, booking.*, user.*, brand.*, portal.*, custom.*), signatures, images, attachments, AI assist.
- Brand theming for client-facing documents (logo, colours, fonts, cover images).
- Starter template library by industry (P1).

### E8. Quotes and proposals (P0)
- Line items from catalog or ad hoc; option groups Choose One / Choose Any; default-selected; client quantity with min/max; per-item tax; discount $/%; valid-until (relative on templates); tipping toggle; notes.
- Attach contract and/or invoice to make the 3-in-1; sequential gating (accept → sign → pay).
- Client view: select, see live totals, accept, or **decline with reason** (improvement); quote versions.

### E9. Contracts and e-signature (P0)
- Body with tokens and client fields (text, date, checkbox, initials, signature); required flags.
- Signers: primary, related contacts (sequential or parallel), countersign (pre-signed or after).
- Draw/type signature, timestamp, IP, email verification, audit trail, PDF with certificate page.
- Void, amend (new version), reminders.

### E10. Invoices and payments (P0)
- Invoice fields as in 17hats; statuses draft/sent/viewed/partial/paid/overdue/void.
- Payment schedules (unlimited installments), partial payments toggle, tipping, auto-charge with saved card, recurring invoices (weekly/monthly/annual/custom, count or until cancelled), late fees (improvement), refunds and credit notes (improvement), record offline payment.
- Processors: Stripe (cards, Apple/Google Pay, ACH) first; Square P1; PayPal P2.
- Reminders: upcoming / past-due cadence per brand, override per invoice.
- Invoices list with header stats (paid YTD, past due, A/R 30/60/rest of year).

### E11. Questionnaires and forms (P0)
- 13+ question types; branch questions nested; answer mapping with pre-fill; file upload; signature question; page breaks.
- Client can save progress and resume (improvement).

### E12. Client portal (P0 / P1)
- Per-contact portal on brand subdomain (custom domain via CNAME in P1); universal link; PIN/magic-link login.
- Sections: documents by type, events, bookings, profile (editable if allowed), **files shared both ways** (P1), **messages** (P1), payment methods.
- Global and per-contact settings; live preview.

### E13. Online scheduling (P0 basic, P1 advanced, P2 groups)
- Services (individual, group with capacity, waitlist), locations (in person / phone / Zoom / Google Meet), duration, buffers, questions, approval mode, payment at booking (deposit or full), confirmation/reminder/cancellation emails and SMS, reschedule/cancel policies, workflow triggers.
- Availability schedules: weekly hours, date overrides, min notice, max horizon, per-day/week caps, calendar checks across all connected calendars, team round-robin (P2).
- Public booking page, embed, and per-service links.

### E14. Email and messaging (P0 sync, P1 real-time)
- Send from brand identity via connected Gmail/Microsoft (OAuth) or platform relay with SPF/DKIM guidance.
- Inbound: Gmail push / Graph subscriptions (P1); IMAP fallback (P0). Auto-file to project by thread and sender; suggest linking unknown senders.
- Scheduled send, read receipts, templates with tokens, attachments, CC/BCC, shared team inbox (P1), SMS two-way (P2).

### E15. To-dos and time tracking (P0)
- To-dos with due date/time, assignee, project, repeat rules, snooze; dashboard and calendar surfaces.
- Global timer, manual entries, rates/tasks, billable flag, time log per project, convert to invoice line items (decimal hours).

### E16. Bookkeeping and reports (P0 basic, P2 full)
- Ledger of income (auto from payments), expenses (manual, bank feed via Plaid), categories with smart categorisation, apply deposit to invoice, processing fees auto-posted.
- Reports: P&L, Sales tax, Upcoming receivables, Aged receivables, Client sales, Product sales, Lead source, **Time vs revenue**, **Pipeline conversion**; print/CSV; date filters.
- P2: receipts with OCR, mileage, accrual toggle, multi-currency, QBO/Xero two-way with dedupe.

### E17. Products and services catalog (P0)
- Internal/display name, description, price, category, taxable/rate, photo, client quantity min/max, default selected, start workflow on first payment / paid in full, **variants and tiered pricing** (improvement).

### E18. Dashboard and notifications (P0)
- Widgets: today/upcoming events, weather, action items grouped (leads, approvals, documents, to-dos, emails), recent client activity, pending documents, revenue snapshot; user-rearrangeable (improvement).
- Notifications: in-app, email, push (PWA/native), SMS; per-event preferences.

### E19. Integrations and API (P1 / P2)
- Stripe, Square, Google (Calendar, Gmail, Meet), Microsoft 365 (Calendar, Outlook), Zoom, Plaid, QuickBooks Online, Xero, Zapier/Make with full event catalog, public REST API + webhooks, MCP server (P3).
- Photography: Pic-Time, ShootProof, Pixieset gallery links and order import (P3).

### E20. AI features (P2 / P3)
- Draft reply in the user's voice from thread context; summarise thread; generate questionnaire or contract from a description; extract event details from inquiry emails into project fields; natural-language report questions; suggest next workflow step.

### E21. Data portability and account lifecycle (P1)
- Full export (CSV, JSON, PDFs of signed documents); importers; self-serve plan change and cancel; data deletion on request.

### E22. Mobile (P1 PWA, P3 native)
- Installable PWA with push; offline read of today's schedule and contacts; camera receipt capture; native wrappers later.

## 6. Non-functional requirements

- Multi-tenant with strict brand/account isolation; row-level security.
- Client-facing pages load < 1.5 s on mobile.
- Audit log for every document, payment and permission change.
- PCI scope delegated to Stripe Elements / Square; never store PANs.
- Encryption at rest and in transit; 2FA; session management; SOC 2 readiness by Phase 3.
- Email deliverability: dedicated sending domain per brand or verified sender; bounce and complaint handling.
- Accessibility: WCAG 2.1 AA for client-facing flows.
- Regions: US first (ACH, sales tax); CA/UK/AU currency and tax in P2.

## 7. Pricing decision (product input)

Single plan, flat monthly, includes everything, 5 users, unlimited brands 2, unlimited documents; extra users at low flat rate. Exact price to be validated against competitors listed in `02-competitive-gaps-and-improvements.md`; the modelling assumption is $29–39/month.
