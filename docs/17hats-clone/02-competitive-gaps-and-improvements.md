# Competitive gaps and the improvement list

## 1. Top complaints about 17hats (ranked by number of independent sources)

| # | Complaint | Evidence |
|---|---|---|
| 1 | Price jump to single $60 plan; repeated increases | Taskip, Agency Handy, OneSuite, Capterra |
| 2 | Dated, clunky, unintuitive UI | GetApp, Capterra |
| 3 | Steep learning curve / hard setup, little hands-on help | G2, Capterra |
| 4 | Add-on fees on top of base ($5–10 each) | Agiled, Agency Handy |
| 5 | Slow product cadence vs HoneyBook | GetApp |
| 6 | Weak bookkeeping (basic, cash-only, no receipts) | Capterra |
| 7 | No group/class scheduling (now partly addressed by Groups add-on) | Capterra |
| 8 | Not photography-specific (no galleries, proofing, print sales) | Sprout Studio, Capterra |
| 9 | No contract template library | Byte Bodega, HoneyBook |
| 10 | Document caps on legacy tiers | Swell |
| 11 | Mobile app stripped down, buggy, wrong dates | GetApp, App Store, Capterra |
| 12 | Support: no phone, slow during outages | Subscribed.fyi, Capterra |
| 13 | Outgrown at scale (products + services, teams) | Capterra |
| 14 | Calendar view frustrations; single Google account; no Outlook 2-way | Capterra, help center |
| 15 | Limited customisation/design of client-facing docs | GetApp |
| 16 | No Kanban/Gantt (Pipelines only cover 5 phases, tag-driven) | Plutio, Kyle Goldie |
| 17 | Paying for bundled features you don't use | Agency Handy |
| 18 | Few integrations (16 vs HoneyBook 65); Zapier only contacts/projects | SourceForge, Zapier |
| 19 | Grandfathering resentment | Taskip, Waco3 |
| 20 | Billing/cancellation disputes; no full data export | Capterra, TaxDome |
| 21 | Email sync: IMAP polling every 30–65 min, only known contacts, silent send failures | help center, GetApp |
| 22 | QuickBooks sync duplicates payments (Undeposited Funds) | Capterra, QBO community |
| 23 | Workflows are linear: no in-workflow branching or conditions | HoneyBook, Agiled |
| 24 | Refunds and late fees unsupported | help center |
| 25 | No AI features as of 2026 apart from an editor writing assistant | all competitor sources |

## 2. What competitors do better (Sept 2026)

| Competitor | Price | Beats 17hats on |
|---|---|---|
| HoneyBook | $29/$49/$109 | AI replies in your tone, AI notetaker, AI automation builder, MCP connector for Claude, Kanban pipeline, Tap-to-Pay, contract library, 65 integrations |
| Dubsado | $20/$40 | Dubsado 3.0: AI thread summaries, send-later composer, recurring availability, redesigned calendar, branded portal, 2-way calendar sync |
| Bonsai | $17–24 | 1,000+ contract/proposal templates, proposals with pricing options, time tracking to invoice, banking + tax write-offs, native mobile |
| Studio Ninja | $21–30 | Clean UX, minutes-level support, full-feature mobile with push on client reply |
| Tave / VSCO Workspace | $22–45 | Job vs session model, deep custom fields and reporting, multi-shooter |
| Sprout Studio | $17–69 | Galleries, proofing, print-lab fulfilment, Lightroom plugin, Sprout AI |
| Iris Works | $25/$40 | Location scouting, social lead pull, simplicity |
| Moxie | $12–40 | AI assistant, universal inbox, P&L dashboard, client health |
| Zoho Bigin | free–$7/user | Multiple connected pipelines with hand-off, Zia AI, telephony/WhatsApp, custom dashboards |

Pattern: every competitor ships AI and a visual pipeline, and nearly all undercut $60/mo. 17hats' remaining edge is depth of automation (workflows, completion triggers, if/then questionnaires, 3-in-1 document) and breadth beyond photography.

## 3. Improvements we will build (the "better than 17hats" list)

Ordered by pain frequency, each tagged with the phase in `07-roadmap.md`.

| Rank | Improvement | Solves | Phase |
|---|---|---|---|
| 1 | **One flat price, no add-ons, unlimited documents, same price for everyone.** Recurring billing, scheduling, time tracking, bank feed, QBO sync all included. | #1 #4 #10 #17 #19 | Pricing decision, P0 |
| 2 | **Modern UI with command palette and a real Kanban pipeline** (unlimited phases, drag-and-drop, per-stage automations, multiple boards per brand). | #2 #15 #16 | P1 |
| 3 | **AI layer**: draft replies in user's voice, thread summaries, questionnaire and contract generation, meeting notes, natural-language reporting, and an MCP server so users can query their business from Claude. | #25 | P2–P3 |
| 4 | **Guided onboarding + template library + importers** from 17hats, HoneyBook, Dubsado CSV exports; industry starter kits. | #3 #9 | P1–P2 |
| 5 | **Workflow engine with branching**: if/else on document status, answers, tags, amounts; wait-until conditions; retries; visual builder; versioned templates that can push updates to running instances. | #23 | P1 |
| 6 | **Real-time email**: Gmail/Microsoft Graph push (not IMAP polling), shared team inbox, auto-link unknown senders with one click, delivery/open tracking, send failures surfaced. | #21 | P1 |
| 7 | **Calendar done right**: multiple Google accounts, Outlook 2-way via Graph, CalDAV, drag-to-reschedule, travel buffers, week/day/agenda views. | #14 | P1 |
| 8 | **Bookkeeping that grows**: accrual or cash toggle, receipts (photo upload + OCR), mileage, refunds, late fees, multi-currency, proper QBO/Xero two-way sync with dedupe. | #6 #13 #22 #24 | P2 |
| 9 | **Mobile parity** via one responsive PWA plus native wrappers; push on reply/sign/pay; offline drafts. | #11 | P1 (PWA), P3 (native) |
| 10 | **Group/class scheduling, waitlists, recurring availability**, included. | #7 | P2 |
| 11 | **Open API + webhooks + Zapier/Make with full event coverage** (invoice paid, contract signed, booking created, stage changed). | #18 | P2 |
| 12 | **Photography module (optional)**: gallery/proofing integrations (Pic-Time, ShootProof, Pixieset) first; native galleries later. | #8 | P3 |
| 13 | **Data portability**: one-click full export (CSV + PDFs + JSON), self-serve cancel. | #20 | P1 |
| 14 | **Support SLA + public changelog + status page.** | #5 #12 | Ops, P1 |
| 15 | **Companies/organisations as first-class objects** with many contacts; contact-level notes and timeline. | model gap | P0 |
| 16 | **Signed-document integrity**: audit trail, PDF with certificate, initials fields, draw/type signature. | #9 | P1 |

## 4. Things 17hats does well that we must match exactly (parity list)

- Contact types with automatic Lead → Client promotion on accept/sign/pay.
- Lead Capture Form → Contact + Project + tags + workflow, with per-answer routing and answer mapping.
- Project as the hub with Notes / Emails / Files / To-dos / Events / Phone log / Time log / Activity log.
- Workflow steps: To-Do, Action (auto or upon review), Pause; base-date relative timing; completion rules tied to document events.
- Quote option groups (Choose One / Choose Any), client quantities, expiry, tipping; 3-in-1 document flow.
- Contracts with tokens, required client fields, sequential signers, countersign.
- Invoices with payment schedules (≥12 installments), partial payments, auto-charge, reminders (upcoming / past-due cadence).
- Questionnaires with 13 question types, branch questions, answer mapping and pre-fill.
- Client Portal with per-contact overrides, PIN, universal link, branding.
- Online Scheduling services, availability schedules, calendar checks, approval mode, payments at booking, Zoom links.
- Time tracking timer → invoice line items.
- Bookkeeping ledger, categories, bank feed, seven reports, sales tax.
- Multi-brand, roles and per-section permissions, custom fields as tokens.
- Template sharing and a marketplace (later phase).
