# Product Requirements — "Hatless" (17hats clone with improvements)

## 1. Problem

Solo and micro service businesses (photographers, wedding vendors, coaches,
caterers/coffee carts, home-service pros) juggle five tools to go from an
inquiry to a paid, scheduled, delivered job. 17hats packaged that loop in one
product in 2014 and still owns a loyal base, but its users consistently report
(see `../17hats-analysis/*` §5):

- days of setup before the product is useful,
- a dated, tab-heavy UI and a mobile app that is a subset of the web app,
- linear-only automations that cannot branch, with template edits that do not
  reach running workflows,
- lead/contact/project confusion (a lead is just a contact type; every form
  submission creates a new project; no merge, no dedupe),
- Google-only calendar sync, one account,
- shallow reporting and bookkeeping, add-on pricing creep,
- no public API or webhooks, coarse team permissions, weak data export.

## 2. Goal

Ship a product that reproduces 17hats' end-to-end loop with equal or better
behaviour on every page (`06-feature-parity-matrix.md`), and that is
measurably better on the ten complaints above (`02-improvements-backlog.md`).

## 3. Target users & personas

| Persona | Jobs to be done | Success metric |
|---|---|---|
| **Solo photographer "Maya"** | Capture inquiries from her site, send a package quote + contract + retainer invoice in one link, automate reminders around the shoot date | Books a client without leaving the app; first booking within 1 day of signup |
| **Two-person events/catering business "Bean & Co."** | Shared calendar, team to-dos, quotes with add-ons, deposits and balance schedules, tips, QuickBooks export | Both users work the same project without stepping on each other |
| **Coach/consultant "Dev"** | Online booking with intake questions, recurring invoices with auto-pay, session notes | Recurring revenue runs itself |
| **Client of any of the above** | Accept, sign, pay, answer, book on a phone in under 3 minutes, without creating an account | Completion rate of sent bundles > 80% |

## 4. Scope

### 4.1 v1 (parity + core improvements) — MUST

**Shell & account**
- Left nav: Dashboard, Contacts, Leads, Projects, Calendar, Documents, Workflows, Bookkeeping, Scheduling, Reports, Settings. Top bar: global search (contacts, projects, documents, emails), timer, "+" quick-add, notification bell, brand switcher, help.
- Dashboard: today/5-day agenda, pending documents, recent client activity, to-dos due/overdue, new leads, revenue snapshot; widgets toggleable (improvement).
- Settings: My Account, Brand (logo ≤ 640×400, colours, fonts, rename document labels e.g. Quote→Proposal), Users & roles, Email (OAuth Gmail/Microsoft + SMTP/IMAP fallback, signatures, BCC-me, reminders), Money (currency, processors, tips, save-card, auto-pay, tax rates, products & services, invoice numbering), Calendars, Integrations, Custom Fields, Tags, Billing, Data export.
- Onboarding: in-app checklist with Now/Later, sample data, CSV import wizard with mapping (17hats, Dubsado, Táve, HoneyBook layouts).

**Contacts & Leads**
- Contact types: Lead, Client, Vendor, Other (17hats: Hot Lead / Cold Prospect / Client / Other). Reversible.
- Contact list with configurable columns, filters (type, tag, owner, last activity), saved views, bulk actions, import/export.
- Contact record: fields (name, company, emails, phones, addresses, custom fields), tags, unified timeline across projects, related contacts with roles.
- Companies as a first-class entity (improvement).
- Lead Capture Forms: question types (heading, short/long text, yes/no, list, checkboxes, date, file upload, project details), map answers to contact/project/custom fields, settings (notify users, auto-response template, calendar, workflow incl. branch-by-answer, tags, lead source, redirect/thank-you, colours), embed as link/popup/iframe/JS, built-in spam protection (improvement), dedupe on email/phone with "attach to existing contact" (improvement).
- Lead inbox with status pipeline (New → Contacted → Qualified → Proposal sent → Won/Lost), auto-Won on quote accept/contract sign/payment, lead source & referral reporting, lead owner assignment.
- Email-to-lead parsing rules (The Knot, WeddingWire, generic regex) (parity, lower priority).

**Projects**
- Project list: grid/list, filters All/Leads/Clients/Archived + status/tag/type/date/owner, sort, search, bulk actions (tag, archive, delete, apply workflow), export.
- Project overview: header (name, date/time/location, status, type, owner), details block with custom fields, documents, workflows with progress, related contacts, financial summary (quoted/invoiced/paid/outstanding/expenses/hours), and a **unified timeline** with filter chips for Notes / Emails / Files / To-dos / Events / Calls / Time / Activity (17hats uses eight tabs).
- First-class **status** (Lead, Booked, In progress, Delivered, Completed, On hold, Cancelled, Lost) editable per account; tag-based **pipelines/boards** with drag-and-drop.
- **Project Types/Templates** bundling default name pattern, calendar, tags, custom fields, workflows, document templates, to-do checklist.
- Create/edit/move/duplicate/archive/complete/delete with audit entries. Auto project numbers.
- To-dos: due date/time, assignee, recurrence, reminders (improvement), sub-tasks, "my tasks" view.

**Documents (Quotes, Contracts, Invoices, Questionnaires)**
- Templates library with categories, search, duplicate, version history.
- Quote builder: Standard / Choose One / Choose Any items, client-editable or locked quantities, packages, per-line and total discounts, tax rates (stackable), valid-until (relative in templates), notes/terms, numbering.
- Contract builder: rich text, tokens `[% object.field %]` with a searchable picker, form elements (required initials, checkboxes, text inputs), multiple signers, business countersign, attachments.
- **3-in-1 bundle**: quote → contract unlocks → invoice unlocks, one link, selections flow to invoice; also 2-part and single documents.
- E-signature with full audit trail (hash, IP, user agent, timestamps, certificate PDF emailed) — improvement over 17hats.
- Invoice builder: line items, PO number, notes, due date (relative in templates), payment schedules (equal/custom installments, due-on rules), recurring billing, auto-pay with saved cards, tips, manual payments (cash/check), full/partial refunds, void, receipts, PDF.
- Reminders: pre-due and past-due ladder, late fees (improvement).
- Questionnaires: 13+ question types incl. file upload/rating/number/address, required flag, sections, conditional logic on all types, answer mapping to structured fields and notes, save-and-resume.
- Document activity log: created / sent / viewed (server-side) / edited / accepted / signed / paid. Edit-after-send with an explicit "requires re-accept / re-sign" diff.
- Products & Services catalog: internal name, display name, description, price, unit, taxable, income category, image; save line item to catalog from a document.

**Workflows & automation**
- Step kinds: To-do, Action (send email / quote / contract / invoice / questionnaire, start workflow, set status, add/remove tag, archive, change calendar, assign, notify, webhook), Wait/Pause.
- Timing: N days before/after project date or previous step, **plus** time-of-day, business-day, and client-timezone options (improvement).
- Approval per step: automatic or "review before sending"; global approvals inbox.
- Completion triggers per document step (sent / first payment / paid / signed / accepted / completed).
- Start triggers: manual (single or bulk), lead form (default or branch-by-answer), booking, other workflow, tag applied/removed, status change, document events, date reached.
- **Conditional branches** (if/then on contact/project/document fields), **dry-run preview**, **template versioning with opt-in propagation**, per-step "why is this waiting" (improvements).
- Multiple concurrent workflows per project; pause/resume/skip/reschedule steps.
- Marketplace-style starter library per vertical (import/export workflows as JSON).

**Calendar & Scheduling**
- Day/week/month/agenda views, unlimited colour-coded calendars, single-calendar filter, to-do calendar, event ↔ project linking, reminders.
- Sync: Google (multiple accounts, create calendars from the app), Microsoft 365, ICS feed; opt-in to-do sync; sync-eligibility badge on events.
- Online Scheduling: services (duration, buffers, increments, price, location type In-person/Phone/Zoom/Google Meet/Teams), availability schedules (dates, times, min notice, max per day, rolling window, team members), booking page + embed, intake questions, payment/deposit at booking, confirmation/reminder emails with tokens, reschedule/cancel links, timezone handling, auto-create lead + project + start workflow, optional approval gating.
- Time tracking: timer in top bar, manual entries, billable rate, convert to invoice lines.

**Email**
- OAuth Gmail / Microsoft with push-based sync (minutes, not 30–65), IMAP/SMTP fallback, multiple inboxes, named signatures, scheduled send, read receipts (pixel + click + document views), BCC-me, unmatched-mail triage inbox.
- Email templates by type (Regular, Quote, Contract, Invoice, Portal, Questionnaire, Lead auto-responder, Scheduling); document emails carry a button link, never raw attachments (parity), with optional true attachments (improvement).

**Client portal & client pages**
- Passwordless magic-link portal per contact: projects, documents to act on, invoices/receipts, questionnaires, appointments, files (upload + download), threaded messages.
- Standalone document pages branded per account; mobile-first; PDF download.
- Custom subdomain in v1; custom root domain (CNAME) in v1.1.

**Bookkeeping & reports**
- Bank feed (Plaid), .qbo/.ofx import, categories with auto-suggest, manual income/expenses with receipts, transaction ↔ invoice matching, processor fee auto-posting, per-project P&L.
- Reports: P&L, Sales Tax collected, Aged Receivables, Lead Source (count + revenue), revenue by project type/product/month, pipeline value, cash forecast from schedules. CSV export on all.
- QuickBooks Online sync (invoices, payments, expenses, tips) with numbering controls.

**Team & platform**
- Roles: Owner, Admin, Member, Limited; permission toggles for Calendars, Bookkeeping, Settings; per-project assignment and "see only assigned" mode; audit log.
- Security: 2FA (TOTP/passkeys), session management, rate limiting, signed webhooks.
- Public REST API, webhooks, Zapier app (triggers: new lead, contact updated, quote accepted, contract signed, invoice paid, booking created, status changed; actions: create/update contact, create project, start workflow).
- Full data export (CSV + JSON + PDF zip) on every plan; read-only grace mode after cancellation.
- PWA with full parity; push notifications for leads, payments, questionnaires, bookings.

### 4.2 v1.1 / later — SHOULD / COULD
- Proposal pages (cover, about, packages, FAQ) wrapping the bundle.
- SMS reminders; client chat notifications via SMS.
- AI assist: draft reply from thread, summarize project, suggest next step.
- Multi-currency per invoice; tax-inclusive pricing; stacked taxes.
- Gallery partner integrations (Pic-Time, ShootProof, Pixieset, Fundy); Facebook/Instagram lead forms native.
- Round-robin and group bookings.
- Credit notes / client credit balance; mileage; 1099 vendor tagging; Xero.
- Native mobile wrappers (Capacitor) if PWA push proves insufficient on iOS.

### 4.3 Out of scope for v1
- Payroll, inventory, full double-entry accounting, gallery hosting, website builder, marketing email campaigns (link to Mailchimp instead).

## 5. Pricing hypothesis (to validate)

17hats now sells one ~$60/mo plan with document caps by billing cadence, 3 users, 2 brands, and paid add-ons (extra users, bank connect, time tracking, recurring billing, extra brand). Our hypothesis: two plans, no document caps, no add-on sprawl.

| Plan | Price (hypothesis) | Includes |
|---|---|---|
| Solo | ~$29/mo | 1 user, everything except team features and API |
| Studio | ~$59/mo | 3 users (+$8/user), API/webhooks, roles, multi-brand, QBO sync |
| Free CRM | $0 | contacts, projects, 3 invoices/mo, no automation |

## 6. Success metrics

- Time-to-first-sent-bundle < 30 minutes for a new account using a vertical starter kit.
- Bundle completion rate (accepted+signed+paid) > 80% within 7 days of send.
- Workflow steps executed within 60 s of due time; zero duplicate sends.
- Client action pages: LCP < 1.5 s on mobile.
- Support tickets per 100 accounts per month below industry benchmark once measured.

## 7. Non-goals & principles

- Do not replicate 17hats' contact-type-as-lead-status model; keep leads first-class.
- Do not force a project before a note/email can exist; allow contact-level notes and emails.
- Never make a client create an account to act.
- Never lock data in: export is a feature on the free plan.
