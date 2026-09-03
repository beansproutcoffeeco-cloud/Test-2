# 10 — Market, Competitors, Sentiment, and Improvement Opportunities

> **Provenance warning.** The session-wide web-search budget was exhausted before
> this module could run any searches, so this file is written from the analyst's
> prior product knowledge (training data through mid-2026) and from sentiment
> already surfaced in modules 04, 07, 08, and 09. Every claim here is
> **UNVERIFIED** unless it cites one of those sibling files. Prices are
> approximate and must be re-checked before they are used in any pricing decision.
> Treat this as a hypothesis sheet to confirm, not a source.

## 1. Summary

- 17hats' core promise is "one place for the small solo business": lead capture → quote/contract/invoice bundle → project → automated follow-up, priced as a single all-in plan (~$60/mo per module 04/07 findings).
- Its strongest assets are the 3-in-1 document bundle, the workflow "checklist with actions" model, and a photographer-centric template ecosystem.
- Its most-cited weaknesses are dated UI, a hard multi-day setup, no branching automation, weak mobile, thin reporting, no public API/webhooks, and coarse multi-user support.
- The competitive set splits into (a) creative-CRM peers (HoneyBook, Dubsado, Studio Ninja, Tave, Sprout Studio, Pixifi, Iris Works, Bloom), (b) freelancer suites (Bonsai, Moxie, Indy), and (c) horizontal SMB tools (Jobber, HubSpot, Zoho).
- The most differentiated clone would keep 17hats' bundle + workflow loop and add: conditional automations with preview, a modern mobile-first UI, a real client portal with messaging, a public API/webhooks, honest data export, and better reporting.

## 2. 17hats company & product timeline (UNVERIFIED — confirm)

| Year | Milestone |
|---|---|
| 2014 | Founded in Southern California; launched as an all-in-one for solopreneurs, initially strong with photographers. |
| 2016–2019 | Added Online Scheduling, Client Portal, Lead Capture Forms, Bookkeeping w/ bank feeds, QuickBooks sync, Zapier. |
| ~2020–2021 | Moved to Essentials / Standard / Premier tiering; "Basic vs Advanced" workflows and scheduling gated by tier (module 07/08). |
| 2023–2025 | Marketplace for templates (module 07); brand/portal refresh; continued Zoom + Google integrations. |
| 2026 | Single ~$60/mo plan for new signups (module 04/07); March 2026 "Start/Stop Workflow by Project Tag" automation (module 07). |

## 3. Sentiment (ranked; synthesized from sibling modules + prior knowledge)

**Top praises**
1. All-in-one: quotes, contracts, invoices, scheduling, bookkeeping in one login.
2. 3-in-1 document flow closes bookings in one client session (module 04).
3. Workflows remove repetitive follow-up once configured (module 07).
4. Lead capture forms + auto-responders.
5. Support and "17hats University" onboarding content.

**Top complaints**
1. Setup takes days; templates must be built from scratch (module 07).
2. Interface feels dated/clunky; navigation depth (module 04).
3. Workflows can't branch; template edits don't propagate to running workflows (module 07).
4. Mobile app is limited compared to web.
5. Reporting/analytics are shallow.
6. Google-only calendar sync, one Google account per 17hats account (module 08).
7. No public API/webhooks; Zapier is the only escape hatch (module 09).
8. Coarse multi-user permissions; not built for teams (module 09).
9. Bookkeeping is "good enough for solos", not a QuickBooks replacement.
10. Editing a sent bundle forces the client to re-accept and re-sign (module 04).

## 4. Competitor matrix (UNVERIFIED — approximate pricing)

| Product | Approx. price | Standout features | Weaknesses | Best for |
|---|---|---|---|---|
| HoneyBook | ~$29–$109/mo | Polished UI, proposals w/ smart files, client messaging, AI assist, pipeline board | US/CA only historically, pricing climbs, less flexible automations | Creatives/wedding pros wanting polish |
| Dubsado | ~$20–$40/mo | Highly flexible workflows w/ conditions, forms, custom-mapped fields, unlimited clients | Steep learning curve, dated UI, slow development cadence | Power users who love configuration |
| Bonsai | ~$25–$80/mo | Proposals, contracts, time tracking, tax estimates, banking | Less photography-specific, workflow automation lighter | Freelancers/consultants |
| Tave | ~$25–$50/mo | Deep photography studio mgmt, robust automations, reporting | Old UI, complex | Established photo studios |
| Studio Ninja | ~$20–$30/mo | Simple, photographer-focused, clean UI, good mobile | Fewer automations, limited beyond photography | Solo photographers |
| Sprout Studio | ~$30–$80/mo | Galleries + CRM + scheduling in one, proofing | Higher price; broad but shallow in places | Photographers wanting galleries integrated |
| Pixifi | ~$25–$50/mo | Questionnaires, contracts, automations, multi-brand | Aging UI | Multi-brand photo businesses |
| Iris Works | ~$25–$40/mo | Simplicity, scheduling, workflows | Fewer integrations | Newer photographers |
| Bloom.io | ~$10–$40/mo | Modern UI, booking, invoices, galleries lite | Younger product, gaps | Creators starting out |
| Moxie | ~$15–$30/mo | Modern freelancer suite: proposals, tickets, time, client portal | Not photography-specific | Freelancers |
| Jobber | ~$40–$200/mo | Field-service scheduling, dispatch, quotes, payments | Not for creatives | Home services |
| HubSpot (free CRM) | Free–$$$ | Pipeline, email tracking, forms | No contracts/invoicing loop out of the box | Sales-led teams |
| Zoho (Bigin/Books) | ~$10–$50/mo | Cheap, broad suite | Fragmented across apps | Cost-driven SMBs |

## 5. Feature gaps: 17hats vs competitors

| Gap | Who has it | Evidence |
|---|---|---|
| Conditional / branching automations | Dubsado, HoneyBook (partial) | module 07 (no branching in 17hats) |
| Visual pipeline / kanban board for projects | HoneyBook, HubSpot | 17hats "Lifecycles" are stage-based but not a board (module 07) |
| Client messaging / chat inside portal | HoneyBook, Moxie | module 09 (portal is document-centric) |
| Interactive proposals with live pricing & upsells | HoneyBook, Bonsai | 17hats has Choose One/Any items but no proposal narrative pages (module 04) |
| Multi-calendar-provider sync (Outlook, Apple) | Most modern tools | module 08 (Google only) |
| Public API + webhooks | HubSpot, Zoho, Jobber, Bonsai (partial) | module 09 |
| E-sign audit certificate (IP/timestamp) | HoneyBook, Bonsai, DocuSign-class tools | module 04 (not found in 17hats) |
| AI assist (email drafting, summaries) | HoneyBook, Bonsai | not found in 17hats |
| Granular roles / team assignment | Tave, Jobber | module 09 |
| Full-account export | Varies | module 09 |
| Template versioning with propagation | None do this well | module 07 — open opportunity |

## 6. Ranked improvement opportunities for the clone

| # | Opportunity | Rationale | Effort |
|---|---|---|---|
| 1 | Conditional automations with **dry-run preview** and per-step "why is this waiting" | #1 power-user complaint; no incumbent does preview well | L |
| 2 | **Template versioning + propagate to running workflows** (opt-in per run) | Direct fix for a documented 17hats pain (module 07) | M |
| 3 | **Mobile-first PWA** with the full feature set (not a cut-down app) | Mobile app weakness is a recurring complaint | M (if built responsive from day one) |
| 4 | **Starter kits by vertical** (photographer, coffee/catering, coach, home services): pre-built forms, templates, workflows | Removes the multi-day setup barrier | M |
| 5 | **E-signature audit certificate** (hash, IP, UA, timestamps, emailed PDF) | Trust/legal gap in 17hats (module 04) | S |
| 6 | **Client portal with threaded messaging + notifications** | Portal today is a document list (module 09) | M |
| 7 | **Public REST API + webhooks + Zapier/Make** from launch | Technical users leave for lack of it (module 09) | M |
| 8 | **Edit-after-send without forced re-sign** when only non-material fields change; explicit "requires re-sign" diff | module 04 friction | M |
| 9 | Multi-provider calendar sync (Google, Microsoft, ICS feed) and multiple accounts | module 08 limits | M |
| 10 | **Reporting**: revenue by type/source, pipeline value, AR aging, lead conversion funnel | "shallow reporting" complaint | M |
| 11 | Honest **data export** (CSV + JSON + PDFs zip) on every plan | Portability complaint; also a marketing point | S |
| 12 | Team roles (owner/admin/member/limited) with per-project assignment | module 09 | M |
| 13 | AI assists: draft email from thread, summarize project, suggest next step | Competitors shipping this | M |
| 14 | Sub-day timing and send windows in workflows (e.g. "next business day 9am, client's timezone") | module 07 (whole-day only) | S |
| 15 | Proposal "pages" (cover, about, packages, FAQ) wrapping the quote bundle | HoneyBook-style win rate lever | M |

## 7. Confidence notes

- Everything in §2, §4 and the non-cited rows of §3/§5 is **UNVERIFIED** (prior knowledge). Re-verify prices and dates via search or the vendors' pricing pages when budget allows.
- Rows citing module 04/07/08/09 inherit those files' VERIFIED/LIKELY tags.

## 8. Sources

- No new web sources could be retrieved in this session. See sibling files for their source lists:
  `04-quotes-and-contracts.md`, `07-workflows-automations.md`, `08-calendar-scheduling-time-todos.md`, `09-client-portal-integrations-team-security.md`.
- Follow-up targets once search is available: Capterra and G2 review pages for 17hats; each competitor's `/pricing` page; 17hats blog "What's New" posts 2024–2026.
