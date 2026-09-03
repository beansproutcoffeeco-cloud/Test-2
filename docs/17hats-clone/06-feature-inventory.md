# Feature inventory and backlog matrix

Every 17hats capability found in research, with the clone decision.
**Parity** = replicate as-is. **Improve** = replicate and extend.
**Defer** = later phase. **Skip** = not building. Effort is T-shirt size for a
two-to-three engineer team. Phase refers to `07-roadmap.md`.

| ID | Module | 17hats capability | Decision | Effort | Phase |
|---|---|---|---|---|---|
| ACC-1 | Account | Account + linked brands, subdomain | Improve (custom domain) | M | P0 |
| ACC-2 | Account | Users: Owner/Admin/Member, per-section permissions per brand | Parity | M | P0 |
| ACC-3 | Account | Brand preferences: logo, colours, fonts, doc background | Improve (themes for docs) | S | P0 |
| ACC-4 | Account | Custom fields (contact/project) as tokens | Improve (+company, more types) | M | P0 |
| ACC-5 | Account | Tax settings (multiple rates) | Parity | S | P0 |
| ACC-6 | Account | Plan info / add modules | Skip (flat plan) | – | – |
| ACC-7 | Account | 2FA, session mgmt | Improve (17hats unclear) | S | P1 |
| CON-1 | Contacts | Contact record fields, types, colour codes | Parity | M | P0 |
| CON-2 | Contacts | Auto Lead→Client on accept/sign/pay | Parity | S | P0 |
| CON-3 | Contacts | Tags, auto-tag rules | Parity | S | P0 |
| CON-4 | Contacts | CSV import/export | Improve (mapping wizard, 17hats/HB/Dubsado presets) | M | P0/P1 |
| CON-5 | Contacts | Related contacts on projects | Parity | S | P0 |
| CON-6 | Contacts | Company object, contact-level notes/timeline | Improve (new) | M | P0 |
| CON-7 | Contacts | Duplicate merge | Improve (new) | S | P1 |
| LEAD-1 | Leads | Lead Capture Form builder (9 settings, 8 question types, mapping) | Parity | L | P0 |
| LEAD-2 | Leads | Install modes: link / pop-up / iframe | Improve (+JSON endpoint) | S | P0 |
| LEAD-3 | Leads | Auto-response (first submission only) | Parity | S | P0 |
| LEAD-4 | Leads | Per-answer workflow + tag routing | Parity | S | P0 |
| LEAD-5 | Leads | Lead sources (25 cap) + report | Improve (unlimited, UTM capture) | S | P0 |
| LEAD-6 | Leads | Email lead capture rules (Knot/WW/ShowIt) | Parity (+generic regex) | M | P1 |
| LEAD-7 | Leads | Leads page, New vs Active | Parity | S | P0 |
| PRJ-1 | Projects | Project hub with tabs Notes/Emails/Files/To-dos/Events/Phone/Time/Activity | Parity | L | P0 |
| PRJ-2 | Projects | Projects list filters, bulk actions | Parity | S | P0 |
| PRJ-3 | Projects | Pipelines (Lead/Client, 5 phases, tag/days rules) | Improve (Kanban, unlimited, stage automations) | L | P1 |
| PRJ-4 | Projects | Archive, change calendar, project date as base date | Parity | S | P0 |
| CAL-1 | Calendar | Internal calendars, colours, event CRUD | Parity | M | P0 |
| CAL-2 | Calendar | Google 2-way (one account) | Improve (multi-account) | M | P1 |
| CAL-3 | Calendar | Apple/Outlook 1-way iCal | Improve (Microsoft 2-way via Graph) | M | P0 feed / P1 Graph |
| CAL-4 | Calendar | Views | Improve (agenda, drag reschedule) | M | P1 |
| WF-1 | Workflows | Templates; To-Do / Action / Pause steps | Parity | L | P0 |
| WF-2 | Workflows | Base-date timing rules | Parity | M | P0 |
| WF-3 | Workflows | Auto vs upon-review approval queue | Parity | M | P0 |
| WF-4 | Workflows | Completion rules (sent/accepted/signed/first payment/paid) | Parity | M | P0 |
| WF-5 | Workflows | Triggers: form, booking, product purchase, tag, manual, bulk, chained | Parity | M | P0 |
| WF-6 | Workflows | Pause/resume; template edits don't propagate | Improve (versioning with push) | M | P1 |
| WF-7 | Workflows | Branching / conditions / wait-until | Improve (new) | L | P1 |
| WF-8 | Workflows | Actions: move stage, assign, notify, webhook | Improve (new) | S | P1 |
| TODO-1 | To-Do | Due date/time, assignee, repeat, snooze, surfaces | Parity | S | P0 |
| TPL-1 | Templates | Documents & Emails page; 8 email types | Parity | M | P0 |
| TPL-2 | Templates | Token system (contact/project/document/booking/custom) | Parity (+17hats syntax compat) | M | P0 |
| TPL-3 | Templates | Rich editor with AI assist | Parity (AI in P2) | M | P0 |
| TPL-4 | Templates | Template sharing between accounts | Defer | M | P3 |
| TPL-5 | Templates | Marketplace | Defer | L | P3 |
| TPL-6 | Templates | Starter/legal template library | Improve (new) | M | P1 |
| QUO-1 | Quotes | Options panel, valid-until, tax, discount, tipping | Parity | M | P0 |
| QUO-2 | Quotes | Line items, catalog autocomplete, photos | Parity | M | P0 |
| QUO-3 | Quotes | Choose One / Choose Any groups, default selected, client qty min/max | Parity | M | P0 |
| QUO-4 | Quotes | 3-in-1 gating quote→contract→invoice | Parity | L | P0 |
| QUO-5 | Quotes | Decline with reason, versions | Improve (new) | S | P1 |
| CTR-1 | Contracts | Body + tokens + required client fields | Parity | M | P0 |
| CTR-2 | Contracts | Signers: primary, related, countersign, pre-signed | Parity | M | P0 |
| CTR-3 | Contracts | Audit trail, certificate PDF, initials, draw/type | Improve | M | P1 |
| INV-1 | Invoices | Options: online pay, partial, tipping, recurring, auto-charge | Parity | M | P0 |
| INV-2 | Invoices | Payment schedules (12) + per-installment reminders + auto-pay | Improve (unlimited) | M | P0 |
| INV-3 | Invoices | Recurring invoices (add-on) | Parity, included | M | P0 |
| INV-4 | Invoices | Reminders: upcoming/past-due cadence | Parity | S | P0 |
| INV-5 | Invoices | Record offline payment | Parity | S | P0 |
| INV-6 | Invoices | Refunds, credit notes, late fees | Improve (new) | M | P1 |
| INV-7 | Invoices | Invoices list header stats | Parity | S | P0 |
| PAY-1 | Payments | Stripe cards, wallets, ACH, saved card | Parity | L | P0 |
| PAY-2 | Payments | Square | Parity | M | P1 |
| PAY-3 | Payments | PayPal / Authorize.net | Defer / Skip | M | P2 / – |
| PAY-4 | Payments | Processing fees to bookkeeping | Parity | S | P0 |
| QST-1 | Questionnaires | 13 question types | Parity | M | P0 |
| QST-2 | Questionnaires | Branch (if/then) questions, nested | Parity | M | P0 |
| QST-3 | Questionnaires | Answer mapping + pre-fill | Parity | S | P0 |
| QST-4 | Questionnaires | Save and resume, page breaks | Improve | S | P1 |
| POR-1 | Portal | Per-contact portal, universal link, PIN | Parity | M | P0 |
| POR-2 | Portal | Global + per-contact settings, branding, preview | Parity | M | P0 |
| POR-3 | Portal | Documents (100 most recent sent), events, profile edit | Parity | M | P0 |
| POR-4 | Portal | Client file upload, messaging, payment methods | Improve (new) | M | P1 |
| SCH-1 | Scheduling | Services (individual), locations, questions, approval, emails | Parity | L | P0 |
| SCH-2 | Scheduling | Availability schedules, buffers, limits, calendar checks | Parity | M | P0 |
| SCH-3 | Scheduling | Booking page, embed, reschedule/cancel | Parity | M | P0 |
| SCH-4 | Scheduling | Advanced: payments, Zoom, workflow triggers, groups, team | Parity, included | L | P1 |
| SCH-5 | Scheduling | Waitlists, recurring availability, round-robin | Improve | M | P2 |
| TIME-1 | Time | Timer, rates, time log, invoice conversion | Parity, included | M | P0 |
| MAIL-1 | Email | IMAP/SMTP connect, 17hats relay | Parity (fallback) | M | P0 |
| MAIL-2 | Email | Send with templates/tokens, scheduled send, read receipts | Parity | M | P0 |
| MAIL-3 | Email | Auto-file inbound to project (known contacts) | Improve (push sync, unknown-sender linking) | L | P1 |
| MAIL-4 | Email | Shared team inbox | Improve (new) | M | P1 |
| MAIL-5 | Email | Document reminder emails (global settings) | Parity | S | P0 |
| SMS-1 | SMS | Two-way texting, reminders (add-on) | Parity, included | M | P2 |
| BK-1 | Bookkeeping | Ledger, categories, smart categorisation, manual entries | Parity | M | P0 |
| BK-2 | Bookkeeping | Bank Connect (Plaid), 90-day import, verify | Parity, included | M | P1 |
| BK-3 | Bookkeeping | Apply deposit to invoice | Parity | S | P1 |
| BK-4 | Bookkeeping | Receipts OCR, mileage, accrual, multi-currency | Improve (new) | L | P2 |
| RPT-1 | Reports | P&L, Sales tax, Upcoming/Aged receivables, Client/Product sales, Lead source; CSV | Parity | M | P0 |
| RPT-2 | Reports | Time vs revenue, pipeline conversion, dashboards | Improve | M | P2 |
| QBO-1 | Integrations | QuickBooks Online one-way push | Improve (two-way, dedupe, Xero) | L | P2 |
| INT-1 | Integrations | Zapier (3 triggers, 2 actions) | Improve (full event catalog + Make + webhooks) | M | P2 |
| INT-2 | Integrations | Zoom | Parity (+Meet) | S | P1 |
| INT-3 | Integrations | ShootProof / Fundy / ProSelect / N-Vu / Greetabl / Knot / WW | Defer (Pic-Time, ShootProof, Pixieset first) | M | P3 |
| API-1 | Platform | Public API + webhooks + MCP | Improve (new) | L | P2 / P3 |
| DASH-1 | Dashboard | 5 fixed sections, grouping, snooze | Improve (rearrangeable, revenue widget) | M | P0 |
| NOTIF-1 | Notifications | Email + mobile push for leads/payments/questionnaires/bookings | Parity (+web push) | M | P0/P1 |
| MOB-1 | Mobile | iOS/Android apps (limited) | Improve (PWA parity first) | L | P1 PWA / P3 native |
| PROD-1 | Catalog | Products & Services fields incl. workflow on payment | Improve (variants, tiers) | M | P0 |
| DATA-1 | Data | Contacts CSV export only | Improve (full export incl. PDFs) | M | P1 |
| AI-1 | AI | Editor writing assist (2026) | Improve (replies, summaries, generation, extraction, MCP) | L | P2/P3 |

Counts (by earliest phase): P0 = 63 items, P1 = 24, P2 = 9, P3 = 3.
