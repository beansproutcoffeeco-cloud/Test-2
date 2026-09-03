# Feature Parity Matrix (page by page)

Legend — 17hats column: ✅ has it (VERIFIED), 🟡 has it (LIKELY), ❌ not found / absent, ❓ unverified.
Ours: **P** parity (copy), **P+** parity with improvement, **N** new, **—** skip. Phase per `05-roadmap.md`.
Source = research file in `../17hats-analysis/`.

## Shell, Dashboard, Settings (01)

| Page / behaviour | 17hats | Ours | Phase | Notes |
|---|---|---|---|---|
| Left nav: Dashboard, Contacts, Projects, Calendar, Documents, Workflows, Bookkeeping | ✅ | P+ | 1 | add Leads, Scheduling, Reports as top-level |
| Top bar: contact search, timer, templates shortcut, help, settings gear, avatar/brand switcher | ✅ | P | 1 | |
| Global search across all entities | ❓ | N | 1 | |
| "+" quick-add | ❓ | N | 1 | |
| Notification bell / inbox | ❓ | N | 1 | |
| Dashboard: 5-day calendar, weather, recent client activity, pending documents, to-dos due/overdue, new leads | ✅ | P+ | 1 | toggleable widgets, revenue snapshot |
| Dashboard customization | ❌ | N | 2 | |
| Settings: My Account, Brand (Account/Logo/Colors & Fonts/Text), Users, Email, Invoice Options, Calendars, Integrations, Referrals, Billing | ✅ | P+ | 1 | + Custom Fields, Tags, Data export |
| Rename document labels (Quote→Proposal) | ✅ | P | 1 | |
| Users: Owner/Admin/Team Member; Calendars & Bookkeeping toggles | ✅ | P+ | 2 | + Limited role, per-project assignment |
| Multi-brand (2 included) with switcher | ✅ | P | 2 | |
| Onboarding: help-center steps, weekly workshop, University | ✅ | P+ | 1 | in-app checklist + starter kits |
| Pricing: one ~$60/mo plan, doc caps by cadence, add-ons | ✅ | P+ | — | no caps, no add-ons (hypothesis) |
| Free CRM tier | ✅ | P | 2 | |
| Referral program | ✅ | P | 3 | |
| Mobile app (subset of web) | ✅ | P+ | 1 | full-parity PWA |

## Contacts & Leads (02)

| Page / behaviour | 17hats | Ours | Phase | Notes |
|---|---|---|---|---|
| Contact types Hot Lead / Cold Prospect / Client / Other | ✅ | P+ | 1 | Lead/Client/Vendor/Other + separate lead status |
| Auto-convert lead→client on accept/sign/pay | ✅ | P | 1 | |
| Lost/declined status | ❌ | N | 1 | |
| Contacts list: alpha index, type/tag filters, search, import/export | ✅ | P+ | 1 | columns, saved views, bulk actions |
| Contact detail: fields, tags, custom fields, projects | ✅ | P+ | 1 | unified timeline |
| Companies entity | ❌ (text field) | N | 1 | |
| Related contacts per project | ✅ | P+ | 1 | roles |
| Merge contacts / dedupe | ❌ | N | 1 | |
| Lead Capture Form builder: 8+ question types, field mapping, settings, embed link/popup/iframe | ✅ | P+ | 1 | + JS embed, conditional logic |
| Branch to workflow by list answer | ✅ | P | 1 | |
| Every submission creates a new project | ✅ | P+ | 1 | attach-to-existing option |
| Spam protection | ❌ | N | 1 | |
| Consent log | ❌ | N | 1 | |
| Lead notifications to owner only | ✅ | P+ | 1 | multiple recipients, push |
| Lead assignment / routing | ❌ | N | 2 | |
| Lead Capture Email rules (Knot/WeddingWire/Showit) | ✅ | P | 2 | + generic parser |
| Lead source & referral reporting | ✅ | P+ | 2 | revenue, UTM auto-capture |
| Pipelines board (≤7 lead / ≤5 client, ≤5 phases) | ✅ | P+ | 1 | unlimited, drag-drop |
| Zapier contact triggers/actions | 🟡 | P+ | 2 | + API/webhooks |

## Projects (03)

| Page / behaviour | 17hats | Ours | Phase | Notes |
|---|---|---|---|---|
| Projects list: grid/list, All/Clients/Leads/Archived, sort, tag search, bulk actions | ✅ | P+ | 1 | status/type/owner filters, export |
| Project overview: header, details, documents, workflows w/ progress, related contacts, mini P&L | ✅ | P+ | 1 | |
| Tabs: Notes / Emails / Files / To-do's / Events / Phone Log / Time Log / Activity Log | ✅ | P+ | 1 | unified timeline w/ chips |
| Project status field | ❌ | N | 1 | |
| Project Types / Templates | ❌ | N | 1 | |
| Duplicate project | ❌ | N | 1 | |
| Project numbering | ❌ | N | 1 | |
| Move project between contacts | ✅ | P+ | 1 | no restriction, audited |
| Archive semantics (hides to-dos/events, keeps completed docs) | ✅ | P+ | 1 | separate Complete vs Archive |
| Custom project fields | ✅ | P | 1 | |
| To-dos: due, assignee, recurrence, to-do calendar | ✅ | P+ | 1 | reminders, sub-tasks |
| Kanban / Gantt | ❌ | N (kanban) | 1 | |
| Per-project permissions | ❌ | N | 2 | |

## Quotes & Contracts (04)

| Page / behaviour | 17hats | Ours | Phase | Notes |
|---|---|---|---|---|
| Standard / Choose One / Choose Any items; editable/locked qty | ✅ | P | 1 | |
| Quote options: internal/display name, valid-until (relative), tax, discount $/% | ✅ | P+ | 1 | per-line discount, stacked tax |
| Quote notes/terms, quote number | ❓ | N | 1 | |
| 3-in-1 bundle, 2-part, single | ✅ | P | 1 | |
| Contract rich text + tokens + form elements + multi-signer | ✅ | P | 1 | |
| Business countersign step | ❓ | N | 1 | |
| E-sign audit certificate (IP/hash/timestamps) | ❌ | N | 1 | |
| Document activity log | ✅ | P | 1 | |
| Edit after send → forced re-accept & re-sign | ✅ | P+ | 2 | material-change diff |
| Void document | ✅ | P | 1 | |
| PDF export | 🟡 | P | 1 | |
| Products & Services catalog | ✅ | P+ | 1 | units, images, packages |
| Branding: logo, colours, font, button colour, global header image | ✅ | P | 1 | |
| Invoice numbering auto from 1, never reused | ✅ | P+ | 1 | prefix/per-brand |
| Document reminders (past-due, monthly ×12) | ✅ | P+ | 2 | ladder, pre-due |

## Invoices, Payments, Bookkeeping (05)

| Page / behaviour | 17hats | Ours | Phase | Notes |
|---|---|---|---|---|
| Invoice builder: titles, due (relative), PO, notes, tax, discount, line items | ✅ | P | 1 | |
| Payment schedules (equal/custom; on receipt/project date/final/custom) | ✅ | P | 1 | |
| Recurring invoices (weekly/monthly/yearly, end rule) | ✅ (add-on) | P | 2 | unified billing plan |
| Auto-pay with saved card (Stripe/Square) | ✅ | P+ | 1 | one-toggle setup |
| Processors: 17hats Payments (Stripe), Square, PayPal, Authorize.net | ✅ | P | 1 (Stripe), 2 (Square), 3 (PayPal) | |
| ACH, Apple/Google Pay | ✅ | P | 1 | |
| Tips: none/10/18/20/custom | ✅ | P | 1 | |
| Refunds full/partial; manual payments w/ reference | ✅ | P | 1 | |
| Past-due reminders only | ✅ | P+ | 2 | pre-due + late fees |
| Fee pass-through / surcharge | ❌ | N | 2 | where legal |
| Credit notes | ❌ | N | 2 | |
| Bank feed (read-only), .qbo/.ofx import, categories, manual expenses, receipts, matching | ✅ (Bank Connect add-on) | P | 2 | included in plan |
| Reports: P&L, Sales Tax, Aged Receivables CSV, Lead Source | ✅ | P+ | 2 | + revenue by type/product, pipeline, forecast |
| QBO sync (invoices, payments, tips) | ✅ (add-on) | P+ | 2 | + expenses |
| Single currency per account | ✅ | P+ | 3 | per-invoice currency |
| Mileage, 1099, balance sheet | ❌ | — / 3 | 3 | |

## Questionnaires, Email, Templates (06)

| Page / behaviour | 17hats | Ours | Phase | Notes |
|---|---|---|---|---|
| Questionnaire builder: 13 types (6 confirmed) | ✅ | P+ | 1 | file/rating/number/address/signature |
| If/Then logic on 3 base types | ✅ | P+ | 1 | all types |
| Send from project only | ✅ | P+ | 1 | also from contact/portal |
| Answer mapping → Project Notes | ✅ | P+ | 1 | → structured fields + tokens |
| Two-way email sync, ~30–65 min polling, project-attached contacts only | ✅ | P+ | 1 | push sync, triage inbox |
| Read receipts (pixel), scheduled send, BCC-me, multiple signatures, multi-inbox | ✅ | P+ | 1 | + click + doc-view tracking |
| Email Types (8) filtering tokens; button links not attachments | ✅ | P+ | 1 | optional attachments |
| Token syntax `[% object.field %]` | ✅ | P+ | 1 | picker UI |
| Brand: 17hats subdomain only; no email header/footer | ✅ | P+ | 1 / 3 | subdomain v1, custom domain v3 |
| Project Files not visible in portal; clients can't upload | ✅ | P+ | 2 | portal files both ways |

## Workflows (07)

| Page / behaviour | 17hats | Ours | Phase | Notes |
|---|---|---|---|---|
| Step kinds: To-Do, Action Item, Pause | ✅ | P+ | 1 | + Wait-until, Branch, Webhook |
| Actions: send email/quote/contract/invoice/questionnaire, start workflow, archive, change calendar, tags, assign | ✅ | P | 1 | |
| Automatic vs "upon your review" | ✅ | P+ | 1 | approvals inbox |
| Timing: whole days before/after base date or previous step | ✅ | P+ | 2 | time-of-day, business days, timezone |
| Completion triggers per document step | ✅ | P | 1 | |
| Start: manual, bulk, lead form (branch by answer), booking (approval gating), other workflow, tag applied/removed (Mar 2026) | ✅ | P+ | 1 | + status change, document events, date reached |
| Multiple concurrent workflows | ✅ | P | 1 | |
| Pause/resume | ✅ | P+ | 1 | + skip/reschedule step |
| Template edits don't propagate | ✅ (gap) | P+ | 2 | versioning + propagation |
| Branching / loops | ❌ | N | 2 | |
| Dry-run preview | ❌ | N | 2 | |
| Lifecycles/Pipelines (stage-based) | ✅ | P+ | 1 | status + boards |
| Marketplace of templates | ✅ | P+ | 2 | starter kits + JSON import/export |

## Calendar, Scheduling, Time (08)

| Page / behaviour | 17hats | Ours | Phase | Notes |
|---|---|---|---|---|
| Day/week/month views, unlimited colour calendars, single-calendar filter | ✅ | P+ | 1 | + agenda |
| Native vs Google calendar types; one Google account; calendars created in Google; events only | ✅ | P+ | 2 | multi-account, create from app, to-do sync |
| Outlook/365, iCloud, ICS feed | ❌ | N | 2 | |
| Scheduling services: duration, buffers, increments | ✅ | P | 2 | |
| Availability schedules incl. "booking limitations", team members | ✅ | P+ | 2 | explicit min-notice/max-per-day/rolling window |
| Location types In Person / Phone / Zoom (advanced) | ✅ | P+ | 2 | + Meet/Teams, not gated |
| Zoom auto-link in emails via token | ✅ | P | 2 | |
| Embeddable booking calendar | ✅ | P | 2 | |
| Intake questions, deposit at booking, auto lead+project+workflow | ❓ | N/P | 2 | |
| Round-robin / group | ❌ | N | 3 | |
| Time tracking (add-on) | 🟡 | P+ | 2 | timer + convert to invoice |

## Client Portal, Integrations, Team, Security (09 — knowledge-only, verify in Phase 0)

| Page / behaviour | 17hats | Ours | Phase | Notes |
|---|---|---|---|---|
| Client portal login (model unknown) | 🟡 | P+ | 2 | magic link |
| Standalone branded document pages | 🟡 | P | 1 | |
| Portal messaging / file exchange | ❌ | N | 2 | |
| Zapier app | 🟡 | P+ | 2 | |
| Public API / webhooks | ❌ | N | 2 | |
| Integrations: Google Cal, Gmail/Outlook mail, QBO, Stripe/Square/PayPal/Authorize.net, Zoom, ShootProof, Fundy, ProSelect | 🟡 | P (subset) | 1–3 | |
| 2FA / SSO / SOC 2 | ❓ | N | 1 (2FA) / 3 | |
| Data export (CSV contacts, some reports, PDFs) | 🟡 | P+ | 1 | full export |
