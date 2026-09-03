# 17hats Clone — Research Methodology & Access Log

**Date:** 2026-09-03
**Branch:** `claude/17hats-clone-analysis-1ny6k1`
**Mode:** Read-only research. No data in any account was created, edited, or deleted.

## What was requested

Build a copy of 17hats with improvements. Step one: use a Chrome connection to
walk 17hats page by page, log how each page works, pull public information
online, and produce a project-manager-style plan to duplicate it.

## What was actually possible from this environment

| Channel | Status | Notes |
|---|---|---|
| Chrome connector (live browser session) | **Not available** | No browser/Chrome MCP connector is attached to this session (`ListConnectors` returned none). |
| Headless Chromium + Playwright (local) | Installed, **but no egress** | The sandbox network policy answers `403` to every outbound `CONNECT`, including `app.17hats.com`, `help.17hats.com`, `www.17hats.com`, and third-party review sites. |
| WebFetch (page fetch) | **Blocked** for every domain tried | `EGRESS_BLOCKED` for 17hats.com, help.17hats.com, Capterra, GetApp, SoftwareAdvice, Product Owl, Agency Handy; web.archive.org unsupported. |
| WebSearch | **Working** | Only working research channel. Returns search-engine snippets and summaries with source URLs. |

Consequence: the page-by-page notes in `01`–`10` are built from **search-engine
snippets of 17hats help-center articles, feature pages, videos, reviews, and
forums**, not from a live crawl. Every claim is tagged VERIFIED / LIKELY /
UNVERIFIED in each file. Treat UNVERIFIED items as hypotheses to confirm during
the live capture described below.

The session also has a hard cap of 200 web searches. Ten research agents ran in
parallel and shared that cap, so the later modules got few or no searches:

| Module | Searches completed | Evidence basis |
|---|---|---|
| 01 Shell/Dashboard/Settings/Pricing | 38 | search snippets (112 sources) |
| 02 Contacts & Leads | 41 | search snippets |
| 03 Projects | 41 | search snippets |
| 04 Quotes & Contracts | 20 | search snippets (60 sources) |
| 05 Invoices/Payments/Bookkeeping | 26 | search snippets |
| 06 Questionnaires/Email/Templates | 14 | search snippets |
| 07 Workflows | 16 | search snippets |
| 08 Calendar/Scheduling | 4 | search snippets (thin); rest UNVERIFIED |
| 09 Portal/Integrations/Team/Security | 0 | **prior knowledge only** |
| 10 Market/Competitors | 0 | **prior knowledge only** |

Modules 08, 09, and 10 should be re-run when search budget is available, and
all modules should be reconciled against the live capture.

## How to do the live page-by-page capture (on your own machine)

A read-only Playwright script is provided at `tools/capture/`. It attaches to
**your already-logged-in Chrome** over the DevTools Protocol, visits a list of
17hats URLs by navigation only, and records per page:

- a full-page screenshot,
- the navigation links (menu structure),
- headings, tab labels, button labels, table column headers, and form field
  labels (labels only — **never input values**),
- the URL pattern.

It never clicks Save/Send/Delete, never submits a form, and never types into a
field. See `tools/capture/README.md`. Commit the resulting `capture/` folder
output *only after* reviewing it for client data you do not want in git.

## File map

| File | Module |
|---|---|
| `01-shell-dashboard-settings-pricing.md` | App shell, navigation, Dashboard, Settings, Pricing, Mobile |
| `02-contacts-and-leads.md` | Contacts, Lead Capture Forms, Lead management |
| `03-projects.md` | Projects, Project Templates, To-Dos, Notes |
| `04-quotes-and-contracts.md` | Quotes, Contracts, e-signature, Products & Services |
| `05-invoices-payments-bookkeeping.md` | Invoices, Payments, Payment schedules, Bookkeeping, Reports |
| `06-questionnaires-email-templates.md` | Questionnaires, Email sync, Email templates, Brand |
| `07-workflows-automations.md` | Workflows, triggers, actions, timing |
| `08-calendar-scheduling-time-todos.md` | Calendar, Online Scheduling, Time tracking |
| `09-client-portal-integrations-team-security.md` | Client Portal, Integrations, API, Team, Security |
| `10-market-competitors-sentiment.md` | Reviews, competitors, gaps, opportunities |

The synthesized plan lives in `docs/plan/`.
