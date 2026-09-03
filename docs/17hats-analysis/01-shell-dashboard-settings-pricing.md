# 17hats — Module 01: App Shell, Navigation, Onboarding, Dashboard, Account/Settings, Pricing, Mobile

**Scope:** app shell (top toolbar + left menu), Dashboard, global search, quick-add, notifications, Account Settings pages, onboarding/getting-started, 17hats University & help, pricing/plans/gating, referral program, mobile apps.

**Method:** Research-only, WebSearch snippets only (38 distinct searches; no logins, no page fetches, no account access). Because only search-result snippets were available, exact UI labels, layout order, and pixel-level details are frequently marked LIKELY or UNVERIFIED. Anything not found is called out explicitly.

**Date of research:** 2026-09-03. 17hats changed its pricing model in 2025; older third-party sources still describe the retired Essentials/Standard/Premier tiers. Both structures are documented below and clearly labelled.

---

## 1. Summary

- 17hats is a "business platform"/CRM for solo and very small service businesses (photographers, creatives, service pros). The shell is a **top toolbar** (contact search, timer, Documents & Emails templates shortcut, Help Center, Account Settings/avatar menu with brand switcher and logout) plus a **left-hand "Features Tab" menu** (Dashboard, Contacts, Projects, Calendar, Documents, Workflows, Bookkeeping, Lead Capture, Online Scheduling, etc.). VERIFIED (help center "Tour of 17hats", blog "Easy Navigation").
- The **Dashboard** ("overview page") is explicitly **not customizable** and consists of five fixed sections: 5-Day Quick View Calendar, Weather Preview, Recent Client Activity, Pending Items (outstanding documents), and "Let's Take Care of Business" (due/overdue to-dos, new-lead notifications, emails, workflow items). VERIFIED.
- **Account Settings** is reached via a gear icon (upper right). Its sidebar includes at least: My Account, Brand (Logo / Colors & Fonts / Text tabs), Users, Email Settings (incoming sync + outgoing SMTP + signature), Invoice Options (currency, footer, payment merchant, tips/auto-pay), Calendars, Integrations, Referrals, Billing Info. VERIFIED (multiple help articles).
- **Pricing (current, 2025–2026):** a single all-inclusive plan at **$60/month, $600/year, or $800 for two years**; former Premier features (Zapier, client portal, advanced workflows, if/then questionnaire logic) are included. **Document limits scale with billing cadence** (monthly = 20 docs/mo, yearly = 35 docs/mo, bi-yearly = unlimited; a "document" = quote, contract, invoice, or questionnaire). Add-ons remain paid: extra users ($5/user/mo), Bank Connect ($5), Time Tracking ($5), Recurring Billing ($10), Advanced Scheduling, QuickBooks Online sync, extra Linked Brands ($10 each). LIKELY→VERIFIED for base price (multiple 2026 sources); add-on prices LIKELY (third-party pricing blogs).
- **Legacy tiers (pre-2025):** Essentials / Standard / Premier at roughly $13–15 / $25–30 / $45–60 per month (varying by year and billing term); Essentials = 1 user, 1 lead capture form, 1 scheduling service, 20 docs/mo; Standard = 1 user + $5/extra user, 35 docs/mo; Premier = 3 users, up to 20 lead capture forms, unlimited docs, 1 linked brand included. VERIFIED across several comparison sites, but retired.
- **Free CRM tier** exists: unlimited contacts & projects, capped at 4 invoices per quarter, no contracts/quotes/questionnaires/workflows/scheduling. Mobile app is free even for Free CRM members. LIKELY (2026 pricing blogs + 17hats mobile feature page).
- **Free trial:** 7 days, no credit card, restartable once; **30-day money-back guarantee** on purchase. VERIFIED.
- **Referral program:** referrer gets a **$50 Amazon gift card** ~120–140 days after the referred account subscribes and stays active ≥120 days (U.S. paid accounts only; non-U.S. via PayPal); referred friend gets **50% off first year/two years**. VERIFIED.
- **Onboarding** is help-center-driven: "Onboarding Step 1) Set Up Your New 17hats Account", "Step 2) Moving your Clients to 17hats", "Step 3) Moving your Templates to 17hats", with steps labelled "Now" vs "Later"; plus a weekly live "Getting Started"/"First 24 Hours" workshop and **17hats University** (free tutorials, guides, courses, webinar replays). No evidence of an in-app progress-bar checklist was found. VERIFIED for resources; UNVERIFIED for in-app checklist.
- **Mobile apps (iOS/Android)** deliver push notifications (new lead form, invoice paid, questionnaire submitted, scheduling booking), contacts/projects CRUD, to-dos, calendar/day view, universal search, document send/counter-sign, workflows assignment, multi-account and multi-user permissions, Touch ID. Reviews consistently describe the app as "very limited compared to desktop," with complaints about freezing and missing calendar/client-address info in older versions. VERIFIED.
- Top recurring complaints: dated/clunky UI, steep learning curve, glitchy loading, price increases over time, no phone support, data inaccessible right after cancellation, clunky booking, mobile app limitations.

---

## 2. Pages / Screens

### 2.1 App shell — top toolbar

**Purpose:** persistent utility bar across all authenticated pages.

**What the user sees (VERIFIED, help center "Tour of 17hats" + "How do I manually add a contact?"):**
- **Contact search bar** — type first few letters of a name; also matches last name, phone number, company name, or email address. (The mobile app markets this as "universal search"; on web the help text describes it as searching *contacts*. Whether the web search also returns projects/documents is UNVERIFIED.)
- **Timer** — "start a timer" (time-tracking; time tracking itself is a paid add-on module — LIKELY).
- **Documents & Emails Templates** shortcut — quick access to the templates page.
- **Help Center** link.
- **Account Settings** (gear icon, upper right) — "an easier way for you to get to your Account Settings."
- **Your Account / avatar menu** — go to Account Settings, access or create a separate brand/account (Multi-Brand switcher), or log out.

**Actions:** search, start timer, jump to templates, open help, open settings, switch brand, log out.

**Not found:** A dedicated global "+" quick-add menu in the toolbar could not be confirmed from any source. The only "+" buttons documented are contextual (e.g., "+" next to "Related Contacts" on a contact page to add a related contact; "Add a New Project"/"New Project" buttons on contact profiles). UNVERIFIED whether a global create menu exists. Also not found: a notification bell/inbox count in the toolbar (see 2.5).

**Multi-brand switcher behaviour (VERIFIED, "How do I add and use Linked Brands?"):** switching brand switches *all* open browser tabs; to view two brands at once you must use an incognito window or different browser. Linked Brands appear on the My Account page only for the account owner logged into the master account; a user must be Owner/Admin/Team Member on the Users page of *both* brands to switch.

### 2.2 App shell — left "Features Tab" menu

**Purpose:** primary navigation.

**Items confirmed by name in help/blog/feature pages (VERIFIED unless noted):**
- **Dashboard** (the "overview page")
- **Contacts** (types: Lead, Client, Cold Prospect, Other)
- **Projects** (tile view and list view toggle via two small icons on the Projects page — VERIFIED via "Easy Navigation" blog)
- **Calendar** ("You can access the CALENDAR in the Features Tab menu on the left-hand side")
- **Documents** ("see the status of all your Quotes, Contracts, Invoices and Questionnaires")
- **Workflows** (overview of all tasks as Workflows are activated on Projects)
- **Bookkeeping** (visibility is permission-gated per user)
- **Lead Capture** (Lead Capture Forms; Lead Overview page) — LIKELY as a left-menu item
- **Online Scheduling** — LIKELY as a left-menu item
- **Templates** (Documents & Emails templates) — reached from toolbar shortcut; whether it is also in the left menu is UNVERIFIED
- **Time Tracking / Reports / Client Portal settings** — UNVERIFIED as left-menu entries

**Exact order, icons, and collapsed/expanded behaviour:** UNVERIFIED (no screenshot-level source found).

### 2.3 Dashboard

**Purpose:** "your one location to see the items you'll need to complete or check in on each day." Gives "a preview of upcoming events for the week, the most recent document activity, new leads, emails, and tasks you need to complete for the day." (VERIFIED, help article 3110596 + feature page.)

**Sections (VERIFIED, 17hats.com/features/dashboard + blog "The Action-Packed 17hats Dashboard"):**
1. **5-Day Quick View Calendar** — see and add events for the week. Help text says it shows "the next three to five days depending on the size of your screen," pulled from the calendars connected in the user's Calendar Settings.
2. **Weather Preview** — local weather "for a quick look for your outdoor activities."
3. **Recent Client Activity** — feed of important client events (invoices paid, contracts signed).
4. **Pending Items / Pending Documents** — contacts with outstanding (unsigned/unpaid/incomplete) documents auto-filter here.
5. **"Let's Take Care of Business…"** — the daily action list: due/overdue to-dos, new-lead notifications, emails, workflow items. To-do rules: only past-due or currently-due to-dos appear; completed to-dos remain visible for 24 hours. New Lead Capture Form submissions post a notification here with a direct link to the lead's project.

**Constraints (VERIFIED, help article):** the dashboard design is **not customizable**; in multi-user accounts, each user sees only *their own* items.

**Actions:** complete to-dos, email contacts, open projects, add calendar events, open new leads.

**Navigation:** default landing after login (LIKELY); first item in left menu.

**Not found:** a distinct "Today"/"Overview" label as a widget title (the product uses "overview page" as a synonym for Dashboard), unread email counts, revenue/KPI charts, or any widget toggles.

### 2.4 Global search

- Toolbar contact search (see 2.1): matches first/last name, phone, company, email. VERIFIED.
- Mobile app advertises "universal search." VERIFIED (App Store / Google Play descriptions).
- Whether web search covers projects, invoices, or documents: UNVERIFIED.

### 2.5 Notifications / Inbox

- **Dashboard notifications**: new-lead submissions appear in "Let's Take Care of Business"; recent client activity feed. VERIFIED.
- **Email notifications**: option to email the owner when a Lead Capture Form is submitted; can send new-lead notifications to additional email addresses; system sends from `leads-*@17hats.com` addresses (release note). VERIFIED.
- **Push notifications** (mobile): lead forms, invoice payments, questionnaire submissions, online scheduling bookings. VERIFIED.
- **Email Sync**: Account Settings > Email Settings > "Connect Account" (Incoming Email section) records correspondence with leads/clients whether sent via 17hats or the user's own inbox; major providers connect by login, others via IMAP server/port. VERIFIED. Synced email appears on the Project/Contact record; a standalone "Inbox" page in the app was **not found** (UNVERIFIED).
- **Bell icon / in-app notification center**: no source found. UNVERIFIED. Reviews explicitly note there is **no built-in real-time messaging with clients** (G2). SMS texting exists as a separate feature (blog "What is 17hats SMS Texting").

### 2.6 Account Settings — overview & sidebar

**Access:** gear icon upper-right, or avatar menu. VERIFIED.

**Sidebar pages found (VERIFIED, "Account Settings Overview" + collection):**
- **My Account** — full name (populates email "From" and contract signature), business name (shows on quote/invoice "from" and on Lead Capture Forms/documents when no logo), business info used to pre-fill all documents; shows brand info and any Linked Brands (owner only).
- **Brand** (Brand Preferences) — see 2.7.
- **Users** — see 2.8.
- **Email Settings** — see 2.9.
- **Invoice Options** — see 2.10.
- **Calendars** — create/update 17hats calendars; connect/update primary Google Calendar; set default calendar. A default 17hats calendar is auto-created in every new account. Recommended setup: separate calendars for Leads, Booked/Paid Clients, and To-Dos/Workflow items. VERIFIED.
- **Integrations** — ShootProof, QuickBooks Online, Fundy, ProSelect, Zapier (and payment processors elsewhere). VERIFIED.
- **Referrals** — personal referral link/code. VERIFIED.
- **Billing Info** — current plan, card on file, cancel account. VERIFIED.
- **Time zone** — referenced as living in Brand Settings (LIKELY).

Other likely settings pages not directly confirmed: Client Portal settings, Online Scheduling settings, Lead Capture settings, Custom Fields, Document/Email Templates (UNVERIFIED as *settings* sidebar entries; they exist as features).

### 2.7 Account Settings — Brand Preferences

**Tabs (VERIFIED, help 2108661 / 3110791):**
- **Account tab** — business/brand details.
- **Logo tab** — upload logo used on client-facing documents, document emails, and the Client Portal.
- **Colors & Fonts tab** — customize button color, accent fonts, button fonts on documents/emails.
- **Text tab** — rename document types and button labels (e.g., "Quote" → "Proposal").

### 2.8 Account Settings — Users

**VERIFIED (help 840254 / 2968814, features/multi-users):**
- Path: Account Settings > Users (sidebar). Add users and manage existing team-member permissions. New users receive a welcome email.
- Roles referenced: **Owner, Admin, Team Member**.
- Permission toggles referenced: **Calendars** (checked = see and add to all calendars owned by Owner/Admin/others; unchecked = only own default calendar), **Bookkeeping** (checked = see tab, add/edit/delete transactions, run reports; unchecked = tab hidden). Mobile release notes reference multi-user permissions for calendars, invoices, quotes, contracts, and to-dos.
- Multi-user email: option to use the 17hats mail server per user ("Multi User Email Settings").
- Seat rules: current plan includes up to **3 users**; extra users **$5/user/month** (LIKELY). Legacy: Essentials 1 user (no add-ons), Standard 1 + $5/extra, Premier 3 + $5/extra (VERIFIED, retired).

### 2.9 Account Settings — Email Settings

**VERIFIED (help 844657, 966491, 2548572, 840404, 1691196):**
- **Incoming Email (Email Sync)** — "Connect Account" button; OAuth-style login for major providers; IMAP host/port/login for others.
- **Outgoing server** — "Change Outgoing Server" button; choose Gmail, Hotmail, or "Other" (SMTP server + port + credentials). Help explains benefits of using your own SMTP vs the 17hats mail server, and "Recommended Steps for Successful Email Delivery" (deliverability/SPF-style guidance).
- **Email Signature tab**.
- Provider-specific guides exist (HostGator, CrazyDomains, etc.).

### 2.10 Account Settings — Invoice Options / Payments

**VERIFIED (help 3156330, 6418020, Square marketplace, help collection "Online Payment Options"):**
- Set billing currency, invoice footer, and payment merchant.
- Supported processors: **Stripe** (branded as "17hats Payments"), **Square**, **PayPal**, **Authorize.net**. A "[legacy] Using Stripe" article implies the Stripe integration was re-platformed.
- Stripe-specific options: "Manage My Account" (update Stripe details) and "Payments Dashboard" (opens Stripe dashboard); toggles for **tips**, **save card data**, and **automatic payments**; ACH accepted; processing fees flow into Bookkeeping.
- Tipping available with Stripe or Square.
- Third-party comparisons note 17hats charges processor fees (unlike HoneyBook's marketing claim of none).

### 2.11 Account Settings — Billing / Subscription

**VERIFIED (help 925562, 925563, terms):** Billing page shows current plan and card on file; cancel from here. Cancelling before term end: takes effect immediately for renewals, no refund/proration, account stays active to end of paid term; data retained at least one month after expiry for reactivation; users told to export data before access ends. 30-day money-back guarantee on purchase. G2 reviewers complain records become inaccessible immediately after cancellation unless exported.

### 2.12 Onboarding / Getting Started

**VERIFIED:**
- Help Center collection "Getting Started with 17hats" with a three-step onboarding series:
  1. **Step 1) Set Up Your New 17hats Account** — update Account Settings first (pre-fills business info on documents); add yourself as a **test Contact**; set up Documents & Email templates; Custom Fields. Steps are tagged **"Now"** vs **"Later"**.
  2. **Step 2) Moving your Clients to 17hats** — export instructions from Dubsado, Táve, etc. and import (updated March 2025).
  3. **Step 3) Moving your Templates to 17hats**.
- "Tour of 17hats", "What is 17hats?", "17hats Terminology/Vocabulary" articles for orientation.
- Live **Getting Started Workshop** (45 min, every Wednesday 1 PM PST / 4 PM EST) and a **"First 24 Hours" workshop** page on 17hats.com.
- Third-party consultants sell setup checklists (e.g., "Let Nicole Help" 4-column checklist), suggesting native onboarding is perceived as insufficient.

**Not found:** an in-app "Getting started" checklist widget with progress bar. UNVERIFIED.

### 2.13 Help resources / 17hats University

**VERIFIED:**
- **Help Center** (help.17hats.com, Intercom-style) with collections: Getting Started, Account Settings, Email, Online Payment Options, Subscription & Cancellation, Video Tutorials & Webinar Replays, General, etc. Toolbar has a Help Center link; article "Where do I go for Help?".
- **17hats University** (17hatsuniversity.com) — "Watch. Learn. Grow." Free: Tutorials (quick walk-throughs), Guides (step-by-step), Courses (Quick Start Course, Business Makeover), all Webinars, Getting Started Workshops per feature (e.g., "Documents – Getting Started Workshop"). Announced via release notes "Welcome To 17hats University!".
- **Blog** (blog.17hats.com) and **Release Notes** (17hats.releasenotes.io, tagged e.g. "mobile", "update").
- **Facebook group** "17hats User Q&A" (community).
- **Support**: online chat/email; reviewers say **no phone number**.

### 2.14 Pricing page (17hats.com/pricing)

**VERIFIED/LIKELY (2026 sources):** one plan, three billing cadences — Monthly $60, Yearly $600, Bi-Yearly $800 — same features; document allowance differs by cadence. Promo: 50% off first year via referral (Yearly $300 / Bi-Yearly $400). 7-day free trial, no card, restartable. 30-day guarantee. Free CRM tier. Includes up to 3 users and 2 brands. Add-on modules listed separately.

### 2.15 Mobile apps (iOS & Android)

**Identifiers:** iOS App Store id1069498016; Android package `com.isomnio.seventeenhats` (developer "17hats"). VERIFIED.

**Features (VERIFIED from store listings, help 3152558, features/mobile-app):**
- Push notifications: Lead Capture Form, invoice payment, questionnaire submission, new Online Scheduling booking.
- Contacts & Projects: create, view, edit; quick access to email/phone/location; open contact address / project location in Maps.
- To-Dos: view, add, edit, to-do lists; edit/delete projects and events.
- Calendar: view/adjust calendar; view day's schedule; project dates, events, bookings, to-dos populate.
- Documents: send a document, counter-sign a contract, view completed questionnaire; send invoice receipts/reminders.
- Workflows: assign workflows to leads/clients; view workflows, leads, projects, contacts.
- Universal search; Touch ID login; login persists after close; multi-account support; multi-user permissions (calendars, invoices, quotes, contracts, to-dos); view/download project files.
- Free for all members, including Free CRM.
- Store listing states a "complete rebuild … allowing for full access to all 17hats features" (marketing claim; date UNVERIFIED).

**Limitations (VERIFIED from reviews):** "very limited compared to desktop"; older reviews say cannot create/send invoices from app; app freezes on open / sluggish / "rate your experience" pop-up; lacked calendar and client address info (since addressed per release notes). Full potential "most easily realized in the desktop version" (17hats' own wording).

---

## 3. Data & fields observed

| Entity / page | Fields observed | Source confidence |
|---|---|---|
| My Account | Full Name; Business Name; business address/contact info (pre-fills documents); Linked Brands list (owner only) | VERIFIED |
| Brand Preferences | Logo; button color; accent font; button font; document-type labels (Quote/Proposal…); button text; time zone (LIKELY) | VERIFIED/LIKELY |
| Users | Name, email (welcome email), role (Owner/Admin/Team Member), permission checkboxes: Calendars, Bookkeeping, (invoices/quotes/contracts/to-dos per mobile notes) | VERIFIED |
| Email Settings | Incoming account (OAuth or IMAP host/port/user/pass); outgoing server (Gmail/Hotmail/Other: SMTP host/port/user/pass); signature | VERIFIED |
| Invoice Options | Currency; invoice footer; payment merchant (Stripe/Square/PayPal/Authorize.net); tips on/off; save card; automatic payments | VERIFIED |
| Calendars | 17hats calendars (name, default flag); Google Calendar connection(s) | VERIFIED |
| Integrations | ShootProof, QuickBooks Online, Fundy, ProSelect, Zapier | VERIFIED |
| Referrals | Personal referral link; referral code; reward option | VERIFIED |
| Billing Info | Current plan; card on file; cancel | VERIFIED |
| Contact | Name, phone, company, email (searchable); contact type (Lead/Client/Cold Prospect/Other); related contacts; custom fields | VERIFIED |
| Dashboard items | Calendar events (3–5 days); weather (local); activity feed items (invoice paid, contract signed); pending documents by contact; to-dos (due/overdue, completed ≤24h); new lead notifications | VERIFIED |
| Document counter | Monthly document count vs cadence limit (20/35/unlimited) | LIKELY |

---

## 4. Plan gating

### 4.1 Current model (2025–2026) — single plan, cadence-based limits

| Item | Monthly ($60/mo) | Yearly ($600/yr) | Bi-Yearly ($800/2yr) | Confidence |
|---|---|---|---|---|
| Feature set | Full (incl. former Premier: Zapier, Client Portal, advanced workflows, if/then questionnaire logic) | Same | Same | LIKELY (multiple 2026 pricing blogs) |
| Documents per month | 20 | 35 | Unlimited | LIKELY |
| Users included | up to 3 | 3 | 3 | LIKELY |
| Brands included | 2 | 2 | 2 | LIKELY |
| Extra user | $5/user/mo | | | LIKELY |
| Extra Linked Brand | $10/mo each | | | LIKELY |
| Bank Connect | $5/mo | | | LIKELY |
| Time Tracking module | $5/mo | | | LIKELY |
| Recurring Billing module | $10/mo | | | LIKELY |
| Advanced Scheduling module | paid add-on (price not found) | | | UNVERIFIED |
| QuickBooks Online sync | paid add-on (price not found) | | | UNVERIFIED |
| Free CRM | Unlimited contacts/projects; 4 invoices/quarter; no contracts, quotes, questionnaires, workflows, scheduling | | | LIKELY |
| Trial | 7 days, no card, restartable | | | VERIFIED |
| Guarantee | 30-day money back | | | VERIFIED |
| Referral promo | 50% off first year/2 years ($300 / $400) | | | VERIFIED |

### 4.2 Legacy model (retired 2025) — Essentials / Standard / Premier

| Item | Essentials | Standard | Premier | Confidence |
|---|---|---|---|---|
| Price (examples cited) | $13–15/mo | $25–30/mo | $45–60/mo (annual vs monthly) | VERIFIED (varies by source/year) |
| Users | 1, no add-on seats | 1 + $5/extra | 3 + $5/extra | VERIFIED |
| Lead Capture Forms | 1 | (between) | up to 20 | VERIFIED (Standard number not found) |
| Online Scheduling | 1 service | | multiple/advanced | LIKELY |
| Documents/mo | 20 | 35 | Unlimited | VERIFIED |
| Linked Brands | – | – | 1 included (2 total); $10/extra | VERIFIED |
| Questionnaire conditional logic, Zapier, Client Portal | – | – | Premier | LIKELY |

---

## 5. User complaints, gaps, and confusion points

From Capterra (5+ pages), G2 (114 reviews, 4.6★), GetApp, App Store/Google Play, comparison blogs. No Reddit threads surfaced in search results (Reddit search returned nothing relevant — explicitly not found).

- **Dated / clunky interface**: "Good CRM with Outdated Interface"; "often glitchy and sometimes won't load at all"; "not an intuitive platform… layout not streamlined"; users wish it were "a touch more modern." (Capterra, G2)
- **Steep learning curve / overwhelming dashboard** until the navigation is learned. (Capterra, G2)
- **Setup friction**: syncing email and bank accounts is hard for first-timers; wish for more one-on-one, hands-on onboarding. (G2, Capterra)
- **Support**: no phone number; mixed reports (some "answer within minutes", one "rude"). (Capterra)
- **Pricing**: repeated complaints about price increases (e.g., $300 → $600 renewal "with no upgrades"); costs rising as features added; 2026 blogs warn of "hidden cost trap" from add-ons and cadence-based document caps. (Capterra, Agiled, Taskip)
- **Data lock-in**: records inaccessible immediately after cancellation unless exported first. (G2, help center)
- **Booking/scheduling** "a little clunky", lacks manual scheduling and schedule blocking. (Capterra)
- **Mobile app**: "very limited compared to desktop"; freezes on open; sluggish; historic inability to create/send invoices; missing calendar/client address (older versions). (Google Play, App Store)
- **Missing collaboration**: no real-time client messaging; no structured support-ticket tool. (G2)
- **Customization limits** in templates and reporting; no pre-made contract templates (vs Dubsado). (G2, HoneyBook comparison)
- **Dashboard rigidity**: not customizable; per-user view only. (help center)
- **Multi-brand awkwardness**: brand switch changes all tabs; need incognito for side-by-side. (help center)
- **Payment processor fees** on top of subscription. (comparison blogs)

---

## 6. Improvement opportunities for a clone

1. **Customizable dashboard** — draggable/toggleable widgets, per-role defaults, team-wide view option (17hats is fixed and per-user only).
2. **True global search** (contacts, projects, documents, invoices, emails) with keyboard shortcut and a **global "+" quick-add** (contact, project, invoice, event, to-do) — neither is confirmed in 17hats web.
3. **Unified notification center / inbox** (bell + activity feed + synced email) instead of scattering lead alerts into the dashboard and email.
4. **In-app onboarding checklist** with progress, "Now/Later" tagging, sample data, and guided import wizards (Dubsado/Táve/HoneyBook CSV mapping) — 17hats relies on help articles and weekly live workshops.
5. **Transparent, simple pricing** — no per-cadence document caps, no add-on sprawl; clear seat pricing; in-app usage meter if any caps exist.
6. **Modern, fast UI**; mobile-first responsive web so the native app is not a subset.
7. **Full-parity mobile app** (create/send invoices, contracts, scheduling management) plus offline caching; fix freeze/sluggishness complaints.
8. **Data portability**: one-click full export (contacts, projects, documents PDFs, bookkeeping CSV) and a read-only grace mode post-cancellation.
9. **Better multi-brand**: per-tab brand context, side-by-side switching without incognito.
10. **Support**: in-app chat plus optional phone/onboarding calls; embedded contextual help.
11. **Pre-built contract/questionnaire/workflow templates per vertical** (photographer, planner, coach).
12. **Scheduling**: manual booking, schedule blocking, multiple services baseline (currently add-on/limited).
13. **Client messaging** (real-time or threaded portal messaging) and lightweight support-request tracking.
14. **Granular RBAC** with per-feature and per-record permissions, audit log, and seat management UI.

---

## 7. Confidence notes

| Claim | Status |
|---|---|
| Toolbar contents (contact search, timer, templates shortcut, help, account settings, brand switcher/logout) | VERIFIED (help "Tour of 17hats", blog) |
| Search matches first/last name, phone, company, email | VERIFIED |
| Left menu includes Dashboard, Contacts, Projects, Calendar, Documents, Workflows, Bookkeeping | VERIFIED |
| Left menu includes Lead Capture, Online Scheduling, Templates as separate entries | LIKELY / UNVERIFIED (order and full list not found) |
| Global "+" quick-add menu in toolbar | UNVERIFIED (not found) |
| Notification bell / in-app inbox page | UNVERIFIED (not found) |
| Dashboard five sections (5-day calendar, weather, recent client activity, pending items, Let's Take Care of Business) | VERIFIED (feature page, blog, help) |
| Dashboard calendar shows 3–5 days depending on screen size | VERIFIED (help) |
| Dashboard not customizable; per-user items only | VERIFIED (help) |
| To-dos: only due/overdue shown; completed remain 24h | VERIFIED (help "All About To-Do Tasks") |
| New lead notifications appear in Let's Take Care of Business | VERIFIED |
| Account Settings via gear icon upper right | VERIFIED (referral blog + help) |
| Settings sidebar: My Account, Brand, Users, Email Settings, Invoice Options, Calendars, Integrations, Referrals, Billing Info | VERIFIED |
| Brand tabs: Account, Logo, Colors & Fonts, Text | VERIFIED |
| User roles Owner/Admin/Team Member; Calendars & Bookkeeping permission toggles | VERIFIED |
| Email sync (incoming) and SMTP outgoing options; signature tab | VERIFIED |
| Payment processors Stripe, Square, PayPal, Authorize.net; tips/save card/auto-pay with Stripe | VERIFIED |
| Integrations list (ShootProof, QBO, Fundy, ProSelect, Zapier) | VERIFIED |
| Current pricing $60/mo, $600/yr, $800/2yr | VERIFIED (17hats.com/pricing snippet + multiple 2026 sources) |
| Document caps 20/35/unlimited by cadence | LIKELY (several 2026 pricing blogs; not seen verbatim on 17hats.com snippet) |
| Add-on prices ($5 user, $5 bank, $5 time, $10 recurring, $10 brand) | LIKELY (third-party) |
| Advanced Scheduling / QBO sync prices | UNVERIFIED |
| Free CRM tier details (4 invoices/quarter) | LIKELY |
| 7-day trial, no card, restartable | VERIFIED |
| 30-day money-back guarantee | VERIFIED |
| Referral: $50 Amazon gift card, 120–140 days, 50% off for friend, U.S. only | VERIFIED |
| Legacy tier limits (users, forms, docs, brands) | VERIFIED (retired) |
| Onboarding 3-step help series; Now/Later tags; test contact | VERIFIED |
| Weekly Getting Started Workshop Wed 1 PM PST | VERIFIED (blog; may be outdated) |
| In-app getting-started checklist with progress | UNVERIFIED (not found) |
| 17hats University contents | VERIFIED |
| Mobile features list | VERIFIED (store listings + help) |
| Mobile "complete rebuild, full access" | LIKELY (store text; date unknown) |
| Mobile limitations / freezing | VERIFIED (reviews) |
| No phone support | LIKELY (single Capterra reviewer; 17hats' own statement not found) |
| Reddit sentiment | NOT FOUND |

---

## 8. Sources

**17hats official — help center**
- [17hats Dashboard](https://help.17hats.com/en/articles/3110596-17hats-dashboard)
- [Tour of 17hats](https://help.17hats.com/en/articles/3110578-tour-of-17hats)
- [What is 17hats?](https://help.17hats.com/en/articles/3110556-what-is-17hats)
- [Where do I go for Help?](https://help.17hats.com/en/articles/3149409-where-do-i-go-for-help)
- [Getting Started with 17hats (collection)](https://help.17hats.com/en/collections/1817945-getting-started-with-17hats)
- [Onboarding Step 1) Set Up Your New 17hats Account](https://help.17hats.com/en/articles/10447114-onboarding-step-1-set-up-your-new-17hats-account)
- [Onboarding Step 2) Moving your Clients to 17hats](https://help.17hats.com/en/articles/10450504-onboarding-step-2-moving-your-clients-to-17hats)
- [Account Settings Overview](https://help.17hats.com/en/articles/3156330-account-settings-overview)
- [Account Settings (collection)](https://help.17hats.com/en/collections/1817949-account-settings)
- [Account Settings (collection, alt)](https://help.17hats.com/en/collections/550587-account-settings)
- [My Account Settings](https://help.17hats.com/en/articles/3110667-my-account-settings)
- [Brand Preference Page Overview](https://help.17hats.com/en/articles/2108661-account-settings-brand-preference-page-overview)
- [Brand Preferences – Account Tab](https://help.17hats.com/en/articles/3110791-brand-preferences-account-tab)
- [How do I add and use Linked Brands?](https://help.17hats.com/en/articles/843598-how-do-i-add-and-use-linked-brands)
- [How do I delete or remove a linked brand/account?](https://help.17hats.com/en/articles/2725863-how-do-i-delete-or-remove-a-linked-brand-account)
- [Users – Getting Started and Setting Permissions](https://help.17hats.com/en/articles/840254-users-getting-started-and-setting-permissions)
- [Working with Users in 17hats](https://help.17hats.com/en/articles/2968814-working-with-users-in-17hats)
- [Multi-User Calendars](https://help.17hats.com/en/articles/2456734-multi-user-calendars)
- [Multi User Email Settings: Using the 17hats Mail Server](https://help.17hats.com/en/articles/1063708-multi-user-email-settings-using-the-17hats-mail-server)
- [Email Sync Setup & Use](https://help.17hats.com/en/articles/2548572-email-sync-setup-use)
- [SMTP Email Server Settings](https://help.17hats.com/en/articles/844657-smtp-email-server-settings)
- [Benefits of using your own outgoing server (SMTP)](https://help.17hats.com/en/articles/966491-what-are-the-benefits-of-using-my-own-outgoing-server-smtp)
- [Recommended Steps for Successful Email Delivery](https://help.17hats.com/en/articles/1691196-recommended-steps-for-successful-email-delivery-in-17hats)
- [Email Settings – Email Signature Tab](https://help.17hats.com/en/articles/840404-email-settings-email-signature-tab)
- [Email (collection)](https://help.17hats.com/en/collections/550554-email)
- [Stripe Payments](https://help.17hats.com/en/articles/6418020-stripe-payments)
- [[legacy] Using Stripe for Online Payments](https://help.17hats.com/en/articles/3162740-legacy-using-stripe-for-online-payments)
- [Accept ACH payments](https://help.17hats.com/en/articles/843846-accept-ach-payments-through-17hats)
- [Credit Card and ACH Processing Fees in Bookkeeping with Stripe](https://help.17hats.com/en/articles/11498904-credit-card-and-ach-processing-fees-in-17hats-bookkeeping-with-stripe)
- [Online Scheduling Payments](https://help.17hats.com/en/articles/3980157-online-scheduling-payments)
- [Online Payment Options (collection)](https://help.17hats.com/en/collections/550596-online-payment-options)
- [Calendar Overview](https://help.17hats.com/en/articles/894193-calendar-overview)
- [Default Calendar Setting](https://help.17hats.com/en/articles/3598112-default-calendar-setting)
- [Recommended Calendar Setup](https://help.17hats.com/en/articles/3112379-recommended-calendar-setup)
- [All About "To-Do" Tasks](https://help.17hats.com/en/articles/2841749-all-about-to-do-tasks)
- [Lead Capture Forms Overview](https://help.17hats.com/en/articles/853251-lead-capture-forms-overview)
- [Lead Capture Form Details](https://help.17hats.com/en/articles/3113718-lead-capture-form-details)
- [Sending New Lead Email Notifications to Additional Email Addresses](https://help.17hats.com/en/articles/2978670-sending-new-lead-email-notifications-to-additional-email-addresses)
- [How do I manually add a contact?](https://help.17hats.com/en/articles/924374-how-do-i-manually-add-a-contact)
- [Related Contacts](https://help.17hats.com/en/articles/934803-related-contacts)
- [17hats Projects](https://help.17hats.com/en/articles/3110631-17hats-projects)
- [Contact Types](https://help.17hats.com/en/articles/3110603-contact-types)
- [17hats Terminology](https://help.17hats.com/en/articles/3388927-17hats-terminology)
- [17hats Vocabulary](https://help.17hats.com/en/articles/3388289-17hats-vocabulary)
- [The 17hats Mobile App](https://help.17hats.com/en/articles/3152558-the-17hats-mobile-app)
- [Video Tutorials & Webinar Replays](https://help.17hats.com/en/collections/550693-video-tutorials-webinar-replays)
- [What is 17hats refund/cancellation policy?](https://help.17hats.com/en/articles/925563-what-is-17hats-refund-cancellation-policy)
- [How do I cancel my account?](https://help.17hats.com/en/articles/925562-how-do-i-cancel-my-account)
- [Subscription & Cancellation Information (collection)](https://help.17hats.com/en/collections/1821251-subscription-cancellation-information)

**17hats official — marketing, blog, release notes, university**
- [17hats Pricing](https://17hats.com/pricing)
- [17hats Features](https://17hats.com/features)
- [Dashboard Feature](https://www.17hats.com/features/dashboard)
- [Mobile App Feature](https://www.17hats.com/features/mobile-app)
- [Multi Users Feature](https://www.17hats.com/features/multi-users)
- [Multi Brands Feature](https://www.17hats.com/features/multi-brands)
- [Online Payments Feature](https://www.17hats.com/features/online-payments)
- [17hats Payments integration](https://www.17hats.com/integration/17hats-payments)
- [Outgoing Email Feature](https://www.17hats.com/features/email)
- [First 24 Hours Workshop](https://www.17hats.com/first-24-hours)
- [Terms of Service](https://www.17hats.com/terms-conditions)
- [17hats Referral Discount](https://referrals.17hats.com/)
- [Blog: The Action-Packed 17hats Dashboard](https://blog.17hats.com/the-action-packed-17hats-dashboard/)
- [Blog: Easy Navigation Within 17hats](https://blog.17hats.com/easy-navigation-within-17hats/)
- [Blog: Onboarding 101](https://blog.17hats.com/onboarding-101/)
- [Blog: Off To A Fast Start: Getting Started Workshops](https://blog.17hats.com/off-to-a-fast-start-getting-started-workshops/)
- [Blog: Mastering the basics of 17hats](https://blog.17hats.com/mastering-17hats-basics-2-2/)
- [Blog: What Are Friends for? (referrals)](https://blog.17hats.com/referrals-what-are-friends-for/)
- [Blog: Sharing Success: The Art of Referring 17hats](https://blog.17hats.com/sharing-success-the-art-of-referring-17hats/)
- [Blog: Our Android App Puts 17hats At Your Fingertips](https://blog.17hats.com/androidapp/)
- [Blog: What is 17hats SMS Texting](https://blog.17hats.com/what-is-17hats-sms-texting-and-why-it-matters/)
- [Release Notes: Welcome To 17hats University!](https://17hats.releasenotes.io/release/i0CPJ-welcome-to-17hats-university)
- [Release Notes: Email Notifications leads-*@17hats.com](https://17hats.releasenotes.io/release/e2XYK-email-notifications-leads-at-17hatscom)
- [Release Notes: New Update released to 17hats Android App](https://17hats.releasenotes.io/release/Skoqi-new-update-released-to-17hats-android-app)
- [Release Notes tagged "mobile"](https://17hats.releasenotes.io/tag/mobile)
- [17hats University](https://www.17hatsuniversity.com/)
- [17hats University – Tutorials](https://www.17hatsuniversity.com/17hats-tutorials)
- [17hats University – Guides](https://www.17hatsuniversity.com/17hats-guides)
- [17hats University – Documents Getting Started Workshop](https://www.17hatsuniversity.com/getting-started/documents-getting-started-workshop)

**App stores**
- [17hats – Apple App Store (US)](https://apps.apple.com/us/app/17hats/id1069498016)
- [17hats – Apple App Store (AU)](https://apps.apple.com/au/app/17hats/id1069498016)
- [17hats – Google Play](https://play.google.com/store/apps/details?id=com.isomnio.seventeenhats&hl=en_US)
- [Android Apps by 17hats](https://play.google.com/store/apps/developer?id=17hats&hl=en_US)

**Reviews & third-party**
- [Capterra 17hats reviews](https://www.capterra.com/p/144328/17hats/reviews/)
- [Capterra 17hats pricing](https://www.capterra.com/p/144328/17hats/pricing/)
- [G2 17hats reviews](https://www.g2.com/products/17hats/reviews)
- [G2 17hats seller page](https://www.g2.com/sellers/17hats)
- [GetApp 17hats](https://www.getapp.com/collaboration-software/a/17hats/)
- [GetApp 17hats pricing](https://www.getapp.com/collaboration-software/a/17hats/pricing/)
- [TrustRadius 17hats pricing](https://www.trustradius.com/products/17hats/pricing)
- [Software Finder 17hats](https://softwarefinder.com/crm/17hats)
- [Agiled: 17hats Pricing 2026](https://agiled.app/blog/17hats-pricing)
- [OneSuite: 17hats Pricing guide](https://onesuite.io/blog/17hats-pricing/)
- [Zendo: Evaluating 17hats pricing](https://getzendo.io/blog/17hats-pricing/)
- [AgencyHandy: 17hats pricing](https://www.agencyhandy.com/client-portal/17hats-pricing/)
- [AgencyHandy: 17hats reviews](https://www.agencyhandy.com/17hats-reviews/)
- [Taskip: 17hats pricing](https://taskip.net/17hats-pricing/)
- [SaaSworthy: 17hats pricing](https://www.saasworthy.com/product/17hats/pricing)
- [Waco3: 17hats pricing](https://waco3.io/blog/17hats-pricing/)
- [Swell: HoneyBook vs 17hats](https://swellsystem.com/honeybook-vs-17hats/)
- [Swell: Dubsado vs 17hats](https://swellsystem.com/dubsado-vs-17hats/)
- [HoneyBook: 17hats vs HoneyBook vs Dubsado](https://www.honeybook.com/blog/17hats-vs-honeybook-vs-dubsado)
- [HoneyBook vs 17hats](https://www.honeybook.com/blog/honeybook-vs-17hats)
- [Jeff & Michele Photo: HoneyBook vs Dubsado vs 17hats](https://jeffandmichelephoto.com/learn/best-crm-for-wedding-photographers)
- [Square App Marketplace: 17hats and Square](https://squareup.com/help/us/en/article/6171-17hats-and-square)
- [Julieanne Walker: Integrate Stripe with 17hats](https://www.julieannewalker.com/blog/integrate-stripe-with-17hats)
- [Clare Ashbrook: 17hats Referral Code 2026](https://www.clareashbrook.com/blogging/17hats-referral-code)
- [Becca Jean Photography: 17hats referral code](https://beccajeanphotography.com/how-to-save-time-with-17hats-plus-17hats-referral-code/)
- [Jebb Graff: 17hats Referral Code](https://jebbgraff.com/17hats-referral-code/)
- [Let Nicole Help: 17hats Setup Checklist](https://letnicolehelp.thrivecart.com/17hats-checklist/)
- [Facebook group: 17hats User Q&A](https://www.facebook.com/groups/17HatsUserQA/posts/4708949992724795/)
- [Crozdesk: 17hats Android App](https://crozdesk.com/software/17hats/android)
- [JustUseApp: 17hats reviews](https://justuseapp.com/en/app/1069498016/17hats/reviews)
