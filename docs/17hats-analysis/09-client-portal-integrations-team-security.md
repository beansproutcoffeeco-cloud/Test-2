# 17hats — Module 09: Client Portal, Client-Facing Experiences, Integrations, API, Team/Users, Security

> ## READ THIS FIRST — research status
>
> **No web research was performed for this module.** The session's WebSearch budget was already
> exhausted (200/200 calls consumed before this module started), and WebFetch/curl are blocked in
> this environment. All 16 planned searches were issued and every one was refused by the tool.
>
> Consequently:
>
> - **Nothing below is VERIFIED.** Every claim is drawn from the analyst's prior general knowledge
>   of 17hats and is marked **LIKELY** (widely known, high prior confidence) or **UNVERIFIED**
>   (plausible recollection, could be wrong or outdated). Treat all specifics — plan names,
>   seat counts, trigger names, URL formats — as hypotheses to confirm, not facts to build on.
> - **Section 9 (Sources) contains no retrieved sources.** It lists the candidate URLs and the
>   exact search queries that must be re-run once the search budget is raised
>   (`CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION`).
> - Where a detail could not be recalled with any confidence it is stated as **NOT FOUND**.
>
> Nothing was fabricated to fill gaps; gaps are labelled.

---

## 1. Summary

- 17hats offers a **Client Portal** where a business's clients can log in to view and act on their
  projects, documents (quotes, contracts, invoices, questionnaires) and appointments. The exact
  authentication model (password vs. magic link) was **NOT FOUND** this session — see §2.1. (UNVERIFIED)
- Most client interaction happens on **standalone, emailed document pages** rather than in the portal:
  a quote-acceptance page, contract e-signature page, invoice payment page, and questionnaire page,
  all hosted by 17hats and branded with the business's logo/colours. (LIKELY)
- **Zapier** is the primary extensibility path; 17hats has an official Zapier app. Trigger/action
  inventory could not be confirmed this session. (LIKELY that app exists; details UNVERIFIED)
- **No public REST API and no native outbound webhooks** are known to exist; this is a frequent
  complaint from technical users and a clear opportunity for a clone. (LIKELY)
- Native integrations recalled: Google Calendar (2-way), Gmail/Outlook email sync, QuickBooks Online,
  multiple payment processors (17hats Payments, Stripe, Square, PayPal, Authorize.net), Zoom /
  Google Meet for appointments, and photography-vertical partners (Fundy, ShootProof, Greetabl;
  Pic-Time uncertain). (Mix of LIKELY / UNVERIFIED)
- **Multi-user** is gated to the top tier ("Premier" in the post-2021 plan lineup); role granularity
  is believed to be coarse. (UNVERIFIED)
- **Security posture** is thin on public documentation: TLS and hosted-payment tokenisation are
  assumed; 2FA, SSO, SOC 2 and data-residency claims are all **NOT FOUND**. (UNVERIFIED)
- **Data portability** is limited to CSV exports of contacts and certain reports plus PDF download
  of documents; there is no known full-account export. (UNVERIFIED)
- A **Marketplace** for templates (email, questionnaire, workflow packs) and an ambassador/affiliate
  programme are believed to exist. (UNVERIFIED)

---

## 2. Pages / screens

Each subsection: purpose · what the user sees · actions · navigation. Confidence tag at the end
of each subsection applies to the whole subsection unless a line says otherwise.

### 2.1 Client Portal — login page

- **Purpose:** Entry point for a business's clients to reach their own projects/documents.
- **What the client sees:** Business-branded login screen (logo, brand colour). Believed to ask for
  the client's email address plus a password the client sets on first visit; an alternative
  "emailed link" flow may exist. **The exact mechanism (password vs. magic link) was NOT FOUND.**
- **Actions:** Log in; request password reset; first-time account setup.
- **Navigation to:** From a "Client Login" link the business places on their website, or from a
  link in system emails (document notifications). **Portal URL format NOT FOUND** — believed to be
  a 17hats-hosted path per account rather than a custom domain.
- **Enabling/disabling:** Believed to be an account-level toggle in Settings with per-contact
  invitation; details NOT FOUND.
- Confidence: **UNVERIFIED**

### 2.2 Client Portal — dashboard / project list

- **Purpose:** Give the client an overview of everything the business has shared with them.
- **What the client sees (recalled):** List of their projects; per project, the documents sent
  (quotes, contracts, invoices, questionnaires) with status badges (e.g. "Needs signature",
  "Paid", "Due"); upcoming appointments/events. Whether a file-sharing area or a messaging
  thread exists in the portal is **NOT FOUND**.
- **Actions:** Open a document to accept/sign/pay/complete; view appointment details;
  possibly download PDFs.
- **Navigation:** Document tiles open the same client-facing document pages described in §2.4–2.7.
- Confidence: **UNVERIFIED**

### 2.3 Client Portal — branding & settings (business side)

- **Purpose:** Let the business control what the portal looks like.
- **What the business user sees:** Logo upload, brand colour, business name/contact block (shared
  with document branding); portal on/off switch.
- **Actions:** Toggle portal; copy the login URL for their website; set which document types appear.
- Confidence: **UNVERIFIED**

### 2.4 Quote acceptance page (client-facing)

- **Purpose:** Let a prospect review pricing and accept.
- **What the client sees:** Branded header; line items with descriptions and prices; optional
  items/packages the client can select (add-ons, quantity choices); totals; expiry date; terms
  text; an "Accept" button.
- **Actions:** Select options; accept the quote; (in the combined "quote + contract + invoice"
  flow) proceed straight to signing and paying in one session.
- **Navigation:** Reached via emailed link or from the portal; on acceptance advances to the
  contract or invoice step if the business bundled them, otherwise shows a confirmation.
- Confidence: **LIKELY** (bundled 3-step flow is a well-known 17hats feature); option/selection
  detail **UNVERIFIED**

### 2.5 Contract signing page (client-facing)

- **Purpose:** Capture a legally binding e-signature.
- **What the client sees:** Full contract text with merged fields (names, dates, package, price);
  initial/signature fields; a typed or drawn signature widget; checkbox agreement.
- **Actions:** Sign; download PDF of the signed contract (believed available after signing);
  the business is notified.
- **Audit:** Signature is believed to be stamped with date/time and IP address on the PDF.
- **Navigation:** From email link, portal, or as step 2 of the bundled flow.
- Confidence: **LIKELY** for existence and e-sign; **UNVERIFIED** for audit-trail specifics.

### 2.6 Invoice payment page (client-facing)

- **Purpose:** Collect payment.
- **What the client sees:** Branded invoice with line items, tax, discounts, amount due, due date,
  payment schedule (deposit / instalments) if configured; a "Pay" button leading to a card form
  (and ACH/bank debit where the processor supports it); option to pay full or scheduled amount;
  option to save a card for auto-pay on scheduled payments (believed present for 17hats Payments).
- **Actions:** Pay; download PDF; print.
- **Navigation:** Email link, portal, or step 3 of bundled flow. After payment, a receipt email
  is sent automatically.
- Confidence: **LIKELY** for core; **UNVERIFIED** for ACH/auto-pay specifics.

### 2.7 Questionnaire page (client-facing)

- **Purpose:** Collect structured information (e.g. wedding timeline, shot list).
- **What the client sees:** Branded form with the business's custom fields (text, multi-line,
  choice, date); progress; submit button.
- **Actions:** Fill and submit; answers map to contact/project custom fields on the business side.
- Confidence: **LIKELY**

### 2.8 Online scheduling / booking page (client-facing)

- **Purpose:** Let clients self-book from availability.
- **What the client sees:** Service types, available slots, intake form, optional payment.
- **Actions:** Book; receive confirmation; Zoom/Google Meet link auto-inserted if integration enabled.
- Confidence: **LIKELY** for existence; video-link detail **UNVERIFIED**

### 2.9 Lead capture form (embedded on business website)

- **Purpose:** Convert website visitors into 17hats leads.
- **What the visitor sees:** Business-designed form; on submit, a thank-you message/redirect.
- **Embedding:** Believed to be a copy-paste JavaScript/iframe snippet that works on WordPress,
  Squarespace, Wix, Showit and similar builders (no native plugins recalled).
- **Navigation on business side:** Submission creates a contact + lead/project and can trigger a
  workflow and auto-responder email.
- Confidence: **LIKELY**

### 2.10 Mobile experience & PDF download

- Client-facing pages are believed to be responsive web pages (no client-side app).
- PDF download of quotes, contracts and invoices is believed available to both client and business.
- Confidence: **UNVERIFIED**

### 2.11 System emails sent to clients

Recalled categories: document sent (quote/contract/invoice/questionnaire), payment receipt,
payment reminder / overdue notice, appointment confirmation and reminder, questionnaire reminder,
portal invitation / password setup. Emails are sent "from" the business (via connected mailbox or
17hats sending on their behalf). Exact template list **NOT FOUND**.
Confidence: **UNVERIFIED**

### 2.12 Team / Users settings (business side)

- **Purpose:** Add staff.
- **What the owner sees:** User list with name, email, role; invite button; per-user access
  toggles (believed coarse: e.g. hide financials, restrict to assigned projects).
- **Actions:** Invite/remove user; assign users to projects/events; each user has own calendar
  colour and own connected email.
- **Activity per user:** Whether an audit log of actions per user exists is **NOT FOUND**.
- Confidence: **UNVERIFIED**

### 2.13 Integrations settings page (business side)

- Believed to be a single settings area listing connectable services with Connect/Disconnect
  buttons: email account, calendars, payment processors, QuickBooks, Zoom, Google Meet, Zapier key,
  and photography partners.
- Confidence: **UNVERIFIED**

---

## 3. Integrations table

| Integration | Direction | What syncs / does | Plan gating | Confidence |
|---|---|---|---|---|
| Zapier (official 17hats app) | Out (triggers) and In (actions) | Believed triggers around new contact/lead; believed actions to create contact/lead. Exact list **NOT FOUND**. | Believed mid/top tier | UNVERIFIED |
| Google Calendar | 2-way | Events/appointments sync both directions; multiple calendars selectable | Believed all paid plans | LIKELY |
| Gmail / Google Workspace email | 2-way mail sync | Send from 17hats via user's mailbox; incoming mail matched to contacts/projects | All paid plans | LIKELY |
| Google Contacts | Import | One-time or periodic contact import | — | UNVERIFIED |
| Microsoft 365 / Outlook email | 2-way mail sync | Same as Gmail via IMAP/SMTP or OAuth | All paid plans | LIKELY |
| Outlook / iCloud calendar | Out (subscribe) / possibly 2-way | iCal feed at minimum | — | UNVERIFIED |
| QuickBooks Online | Out (17hats → QBO) | Invoices, payments, customers pushed to QBO; category mapping | Top tier (Premier) | LIKELY |
| 17hats Payments (in-house, believed Stripe-powered) | Payment gateway | Card + ACH, saved cards, auto-pay on schedules | All paid plans | UNVERIFIED |
| Stripe | Payment gateway | Card payments on invoices | All paid plans | LIKELY |
| Square | Payment gateway | Card payments | All paid plans | LIKELY |
| PayPal | Payment gateway | PayPal checkout on invoices | All paid plans | LIKELY |
| Authorize.net | Payment gateway | Card payments | All paid plans | LIKELY |
| Fundy Designer | Partner (album sales) | Push orders/invoices from Fundy into 17hats | — | UNVERIFIED |
| ShootProof | Partner (galleries) | Link gallery/contact data; details NOT FOUND | — | UNVERIFIED |
| Pic-Time | Partner (galleries) | Existence **NOT FOUND** | — | UNVERIFIED |
| Greetabl | Partner (client gifts) | Send gift from contact/project | — | UNVERIFIED |
| Zoom | Out | Auto-create meeting link on appointments/bookings | — | UNVERIFIED |
| Google Meet | Out | Auto-create meet link on appointments/bookings | — | UNVERIFIED |
| Facebook Lead Ads | In (via Zapier only) | Lead → 17hats contact/lead | Zapier plan | UNVERIFIED |
| Website embeds (WordPress, Squarespace, Wix, Showit) | In | Lead capture form + booking page via JS/iframe snippet; no native plugins | All paid plans | LIKELY |
| Calendly | — | No native integration recalled; via Zapier only | — | UNVERIFIED |
| Mailchimp | Out (via Zapier) | No native integration recalled | — | UNVERIFIED |
| Public REST API | — | **None known** | — | LIKELY (absence) |
| Native webhooks | — | **None known** | — | LIKELY (absence) |
| CSV import | In | Contacts import with field mapping | All plans | LIKELY |
| CSV export | Out | Contacts; some reports (invoices/payments) | All plans | UNVERIFIED |

---

## 4. Data & fields observed

No screens were observed this session. Fields below are recalled entities and are **UNVERIFIED**.

- **Contact:** first/last name, email(s), phone(s), address, company, tags, custom fields, lead
  source, portal-enabled flag, portal login email.
- **Project (a.k.a. Job/Event):** name, type, date, stage/status, assigned user, linked contacts,
  linked documents, workflow instance.
- **Document (quote/contract/invoice/questionnaire):** number, title, status (draft/sent/viewed/
  accepted/signed/paid/expired), sent date, viewed date, completed date, PDF, e-sign metadata
  (signer name, timestamp, IP), payment schedule lines.
- **Payment:** amount, method, processor, transaction id, date, fee, refund status.
- **Appointment/Booking:** type, start/end, location or video link, attendee, reminder settings.
- **User (team member):** name, email, role/permission flags, calendar colour, signature block,
  connected mailbox.
- **Integration connection:** service, connected account identity, status, last sync.
- **Zapier payload (assumed):** contact fields plus lead/project identifiers.

---

## 5. Plan gating

Recalled post-2021 lineup: **Essentials → Standard → Premier** (earlier: Free/Basic/Premier).
All of the following is **UNVERIFIED**:

- Client Portal: believed Standard and up.
- Multi-user / team seats: Premier only; seat count limit NOT FOUND.
- QuickBooks Online sync: Premier.
- Zapier: Standard or Premier.
- Online scheduling: Standard and up.
- Payment processors, lead capture forms, e-signatures, email sync: all paid tiers.
- Marketplace template purchases: any plan.

---

## 6. User complaints, gaps, and confusion points

No reviews or forum posts were retrieved this session. Recalled recurring themes — all **UNVERIFIED**:

- No API/webhooks; Zapier coverage felt thin (few triggers), so automations outside 17hats are limited.
- Email sync reliability and deliverability issues (messages landing in spam when sent through
  17hats rather than the user's own mailbox).
- Client confusion about portal logins vs. direct document links — clients don't know they have
  a portal or forget passwords; many businesses simply never enable it.
- Coarse team permissions: cannot hide specific clients/financials cleanly from assistants.
- Price increases and tier reshuffles (2021 rebrand) moved formerly included features up-tier.
- UI feels dated compared with HoneyBook/Dubsado; mobile app less capable than web.
- Occasional outages/slow periods reported on social media; no formal public status page recalled
  (**NOT FOUND**).
- Data export on cancellation limited to CSV/PDF; no bulk document/file export, making migration
  painful.
- Support is ticket/email based; response speed complaints appear periodically.

---

## 7. Improvement opportunities for a clone

1. **Passwordless client portal** (magic link + optional passkey) to eliminate the login friction
   that causes portal abandonment; unify portal and direct-document-link sessions.
2. **Custom-domain portal and document pages** (e.g. `clients.yourstudio.com`) with full theming.
3. **Public REST API + outbound webhooks + OAuth apps** from day one; publish a Zapier/Make app
   with rich triggers (document viewed/signed/paid, booking created, stage changed).
4. **Granular RBAC**: per-object visibility (assigned projects only), financial redaction,
   read-only roles, and an immutable per-user activity log.
5. **First-class security**: TOTP/WebAuthn 2FA, SSO for teams, session management, documented
   data-residency options and a SOC 2 roadmap; publish a status page and incident history.
6. **Complete data portability**: one-click full export (contacts, projects, documents as PDF +
   JSON, files, emails) and an import wizard from 17hats/HoneyBook/Dubsado CSVs.
7. **Native gallery/album partner APIs** (Pic-Time, ShootProof, Pixieset, Fundy) rather than
   one-off links; native Facebook/Instagram lead forms without Zapier.
8. **Portal messaging and file sharing** so clients have one place for chat, uploads and downloads.
9. **Transparent, stable plan gating** with team seats available below the top tier.
10. **Mobile parity**: PWA/native app that supports every client-facing action offline-tolerant.

---

## 8. Confidence notes

Legend: **VERIFIED** = confirmed from a retrieved source this session (none). **LIKELY** = high
prior confidence from general knowledge. **UNVERIFIED** = recollection, may be wrong/outdated.

| Claim | Status |
|---|---|
| A Client Portal feature exists | LIKELY |
| Portal auth = email + client-set password | UNVERIFIED |
| Portal supports magic links | UNVERIFIED / NOT FOUND |
| Portal URL format / custom domain support | NOT FOUND |
| Portal shows projects, documents, invoices, questionnaires, appointments | UNVERIFIED |
| Portal has messaging / file sharing | NOT FOUND |
| Branded standalone quote / contract / invoice / questionnaire pages | LIKELY |
| Bundled quote→contract→invoice flow | LIKELY |
| E-sign audit stamp (time, IP) on PDF | UNVERIFIED |
| PDF download for clients | UNVERIFIED |
| Official Zapier app exists | LIKELY |
| Specific Zapier triggers/actions | NOT FOUND |
| Google Calendar 2-way sync | LIKELY |
| Gmail / Outlook mail sync | LIKELY |
| Google Contacts import | UNVERIFIED |
| QuickBooks Online sync, top tier | LIKELY |
| Processors: Stripe, Square, PayPal, Authorize.net | LIKELY |
| 17hats Payments in-house gateway with ACH | UNVERIFIED |
| Fundy, ShootProof, Greetabl integrations | UNVERIFIED |
| Pic-Time integration | NOT FOUND |
| Zoom / Google Meet links on bookings | UNVERIFIED |
| Facebook Lead Ads only via Zapier | UNVERIFIED |
| Embeddable lead forms via snippet | LIKELY |
| No public API / no webhooks | LIKELY |
| CSV contact import/export | LIKELY |
| Full-account export absent | UNVERIFIED |
| Multi-user gated to Premier | UNVERIFIED |
| Seat limits and role granularity | NOT FOUND |
| Per-user activity log | NOT FOUND |
| 2FA availability | NOT FOUND |
| SSO, SOC 2, data residency | NOT FOUND |
| GDPR statement exists | UNVERIFIED |
| Public status page / outage history | NOT FOUND |
| Marketplace for templates | UNVERIFIED |
| Ambassador / affiliate programme | UNVERIFIED |
| Plan names Essentials/Standard/Premier | LIKELY |

---

## 9. Sources

**No sources were retrieved this session** (search budget exhausted before the module began;
fetch tools blocked). The list below is a *to-verify* queue — candidate URLs from memory and the
exact queries that were attempted and must be re-run. None of these links has been opened or
confirmed to exist.

### Candidate URLs (unretrieved)
- https://help.17hats.com/ — search "Client Portal", "Zapier", "QuickBooks", "Users", "Two-Factor"
- https://www.17hats.com/features/ — feature pages (client portal, online scheduling, payments)
- https://www.17hats.com/integrations — integrations overview
- https://www.17hats.com/pricing — plan gating
- https://zapier.com/apps/17hats/integrations — Zapier app page (triggers/actions)
- https://www.17hats.com/marketplace — template marketplace
- https://www.17hats.com/privacy and /terms — GDPR / data-handling statements
- https://www.youtube.com/@17hats — feature walkthrough descriptions
- https://www.reddit.com/r/photography and r/WeddingPhotography — user complaints
- https://www.capterra.com/p/141143/17hats/ and https://www.g2.com/products/17hats/reviews — reviews
- https://downdetector.com/status/17hats/ (existence unknown) — outages

### Searches attempted (all refused — re-run these)
1. `17hats client portal how clients log in`
2. `help.17hats.com client portal enable branding URL`
3. `17hats Zapier integration triggers actions "new contact" "new lead"`
4. `17hats Google Calendar Gmail sync integration help`
5. `17hats QuickBooks Online integration sync invoices payments`
6. `17hats payment processors Stripe Square PayPal Authorize.net 17hats Payments`
7. `17hats integrations Fundy ShootProof Pic-Time Greetabl Zoom`
8. `17hats public API developer webhooks REST`
9. `17hats team members users permissions add user roles`
10. `17hats two-factor authentication security 2FA GDPR`
11. `17hats down outage status page complaints reddit`
12. `17hats cancel account export data contacts CSV`
13. `17hats Marketplace templates partner program affiliate`
14. `17hats lead capture form embed WordPress Squarespace Showit Wix Facebook lead ads`
15. `17hats client sign contract pay invoice online mobile PDF download client experience`
16. `17hats Outlook Microsoft 365 email calendar integration`
