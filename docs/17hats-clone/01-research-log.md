# 17hats Research Log — page-by-page functional notes

**Date:** 2026-09-03
**Method:** Read-only research. No 17hats account was accessed and no data was
viewed, created, edited, or deleted. This session had no Chrome connector and
the network proxy blocks 17hats.com, help.17hats.com, blog.17hats.com,
17hatsuniversity.com and every third-party review site, so every entry below
was reconstructed from web-search summaries of the 17hats Help Center, 17hats
blog, release notes, and third-party reviews. Each section lists its sources.
Items marked **[verify in-app]** could not be confirmed and should be checked
with a live account walkthrough before build.

Legend: **Screen** = what the page shows · **Data** = fields/entities ·
**Actions** = what the user can do · **Links** = how it connects to other
modules · **Pain** = documented complaints/limitations.

---

## 0. Global shell (app frame)

**Screen**
- Left "Features Tab" sidebar: Dashboard, Contacts, Leads, Projects, Calendar,
  Workflow, To Do, Documents, Bookkeeping, (Online Scheduling, Time Tracking,
  Reports live inside sub-areas). The exact ordering and labels **[verify in-app]**.
- Top toolbar: global contact search, **Timer** button (time tracking), quick
  access to the Documents & Email Templates page, Help Center, Account Settings.
- A "Quick Look" side panel lets you add to-dos/notes to a project without
  opening it.

**Sources**
- Tour of 17hats — https://help.17hats.com/en/articles/3110578-tour-of-17hats
- Staying Organized in 17hats — https://help.17hats.com/en/articles/962094-staying-organized-in-17hats
- 17hats Terminology — https://help.17hats.com/en/articles/3388927-17hats-terminology

---

## 1. Dashboard ("Overview")

**Screen** — five sections:
1. **Calendar widget**: next 3–5 days of events from the calendars enabled in the
   user's Calendar Settings.
2. **Weather widget**: current temp, high/low, date/time, sunset, based on the
   zip code in Account Settings and the brand time zone.
3. **"Let's take care of business" / action items**: a rundown of all open
   items across projects, with a **Grouping** filter: Leads, Documents, To-Dos,
   Emails. New Lead Capture Form submissions appear here.
4. **Recent Activity**: last five document events, with "See All Activity".
5. **Pending Documents**: counts by document type (quote/contract/invoice/
   questionnaire); clicking a type lists contact + project and deep-links to the
   document.

**Actions** — complete to-dos, email contacts, jump to projects and documents.

**Links** — Leads, Projects, Documents, To-Do, Calendar, Email.

**Sources**
- https://help.17hats.com/en/articles/3110596-17hats-dashboard
- https://blog.17hats.com/the-action-packed-17hats-dashboard/
- https://www.17hats.com/features/dashboard

---

## 2. Contacts

**Screen** — list of contacts with search bar (supports tag search), filter
by contact type / tag, gear menu (Import CSV, Export Contacts). Contact record
shows "Contact Details" (built-in + custom fields), linked projects, tags,
client-portal settings, notes.

**Data**
- Contact Type (color coded): **Hot Lead** (orange), **Client** (green),
  **Cold Prospect** (blue), **Other**.
- Name fields, company name, email(s), multiple phone numbers, addresses,
  website, birthday, social media, notes, tags.
- Custom Contact Fields (defined in Account Settings > Custom Fields).
- Import CSV accepts name, company, email, phones, addresses, website, notes, tags.

**Actions** — add manually, import CSV, export CSV (filtered by type/tag), edit
contact, change type, tag/untag, auto-tag via rules ("Automatically Tag Contacts
and Projects"), give client-portal access, customise portal per contact.

**Rules**
- A Lead becomes a **Client automatically** when a quote is accepted, a
  contract is signed, or an invoice payment is made. Can also be changed
  manually via Edit Contact.
- Clients live on the Contacts tab; Hot Leads and Cold Prospects live on the
  Leads tab.

**Links** — Projects (1 contact : many projects), Client Portal, Documents
(tokens pull contact fields), Zapier (new/updated contact trigger).

**Pain** — no true company/organisation object with multiple people
**[verify in-app]**; list view columns are not customisable per reviews.

**Sources**
- https://help.17hats.com/en/articles/924376-17hats-contact-types
- https://help.17hats.com/en/articles/1769360-contacts-tags
- https://help.17hats.com/en/articles/2545832-custom-fields
- https://help.17hats.com/en/articles/934801-how-do-i-import-a-csv-file-of-contacts-and-projects
- https://help.17hats.com/en/articles/843725-how-do-i-export-my-contact-list
- https://help.17hats.com/en/articles/879529-changing-a-lead-to-a-client
- https://help.17hats.com/en/articles/5910127-automatically-tag-contacts-and-projects

---

## 3. Leads & Lead Capture Forms (LCF)

### 3a. Leads page ("Lead Overview")
**Screen** — all Hot Lead / Cold Prospect contacts and lead-related activity in
one list; Lead Capture Forms are managed from here (Leads > Lead Capture Form).

**Actions** — edit lead, convert to client, archive, open project, respond.

### 3b. Lead Capture Form builder
**Data — nine settings per form**
1. Title (internal; recommended to name by placement location)
2. Project Name (the project created for each submission, e.g. "Wedding Photography")
3. Notification (dashboard notification always; optional email notification)
4. Auto-Response (email template sent the **first** time a person submits; later submissions do not re-send)
5. Questions (recommended 4–6; Name + Email always present and always mapped)
6. Workflow to start on submission (standard method)
7. Conditional workflow: a "Choose From A List" question can start a different workflow per answer
8. Appearance/branding
9. Embed code (JS embed for websites) + shareable link
Also: Answer Mapping — map answers to built-in or custom contact/project
fields when question type matches field type.

**Behaviour** — every submission creates (a) a contact of type Lead (or matches
existing by email **[verify in-app]**), (b) a **Project** named per setting 2,
(c) optionally starts a workflow, (d) records a **Lead Source** for reporting.
An **Email Lead Capture** variant creates leads from inquiry emails.

**Links** — Contacts, Projects, Workflows, Email templates (Lead Auto Responder
type), Lead Source Report.

**Sources**
- https://help.17hats.com/en/articles/3113718-lead-capture-form-details
- https://help.17hats.com/en/articles/853251-lead-capture-forms-overview
- https://help.17hats.com/lead-capture/automated-lead-workflows
- https://help.17hats.com/en/articles/1131025-lead-capture-auto-replies
- https://help.17hats.com/en/articles/2823021-email-lead-capture-form-details
- https://help.17hats.com/en/articles/2545940-answer-mapping-in-questionnaires-lead-capture-forms
- https://help.17hats.com/en/articles/7336622-lead-source-reporting-in-17hats-with-lead-capture-forms
- https://help.17hats.com/en/articles/928565-lead-overview-lead-capture-lead-overview-page
- https://debmitzelcreative.com/2024/09/18/series-how-to-set-up-a-17hats-lead-capture-form/

---

## 4. Projects

**Screen — Projects list**: filter All / Active / Leads / Archived.

**Screen — Project Overview page**
- Header "details": Project Title, Primary Email, Project Date, Phone Number,
  Contact Type, assigned Calendar (default fields; custom project fields also
  appear).
- Body: documents attached to the project (quotes, contracts, invoices,
  questionnaires), applied workflow(s) with step status.
- Bottom tabs: **Notes, Emails, Files, To-Do's, Events, Phone Log, Time Log,
  Activity Log**. Each has a "+" to add.

**Data** — project name, project date (main event), calendar assignment,
status (lead/active/archived), tags, custom project fields, main event
location/start/end (exposed as tokens).

**Actions** — create project for a contact, apply workflow, send document,
add note/file/to-do/event/phone log, start timer, archive, change calendar.

**Links** — the hub: everything (documents, emails, events, time, to-dos,
workflows) hangs off a project. Tokens read `project.*`.

**Pain** — no visual pipeline/kanban of project stages; status is only
Lead/Active/Archived; users rely on tags and calendars to fake stages.

**Sources**
- https://help.17hats.com/en/articles/3110647-project-overview
- https://help.17hats.com/en/articles/928568-how-do-i-navigate-the-project-overview-screen
- https://help.17hats.com/en/articles/3110631-17hats-projects
- https://www.17hats.com/features/project-page

---

## 5. Calendar

**Screen** — full calendar with month/week/day views showing events from all
calendars the user has enabled, including team members' calendars.

**Data / rules**
- Two calendar kinds: **17hats calendars** (internal only) and **Google
  Calendars** (two-way; events also visible outside 17hats).
- Only **one Google account** can be connected, but many calendars from it
  (e.g. Leads, Booked Clients, To-Dos). Work-around: share calendars across
  Google accounts.
- Apple Calendar / Outlook: **one-way** via a shareable iCal feed link.
- Projects are assigned to a calendar; the project's main event is its
  "Project Date".
- Workflow action can "change the calendar the project appears on" (used as a
  stage indicator, e.g. move from Leads calendar to Booked calendar).

**Actions** — add/edit/remove events, open associated project.

**Pain** — single Google account limit; no Outlook two-way; sync failures are a
recurring support topic ("Google Calendar Not Syncing").

**Sources**
- https://help.17hats.com/en/articles/894193-calendar-overview
- https://help.17hats.com/en/articles/7438269-google-calendar-sync-explained
- https://help.17hats.com/en/articles/853432-sync-google-calendars-from-multiple-google-calendar-accounts
- https://help.17hats.com/en/articles/927439-how-do-i-connect-17hats-events-to-my-apple-calendar

---

## 6. Workflows

**Concepts** — build a **Workflow Template**, then **apply** it to a project
(manually or by trigger). Applying activates the step sequence.

**Step (item) types**
1. **To-Do** — a task for you/team; completing it can trigger the next step.
2. **Action Item** — send Email / Quote / Contract / Invoice / Questionnaire;
   start another workflow; archive project; change project calendar.
   Each action runs **automatically** or **upon review** (approval queue).
3. **Pause** — halts the workflow until manually resumed.

**Timing** — each step has a due rule: "N days after the previous items are
complete", or relative to a date (project date / event date) **[verify exact
options in-app]**.

**Completion rules for send steps** (what counts as "done"):
- Send Quote: When sent / When quote accepted / When contract is signed / When
  first invoice payment made / When invoice fully paid / When all items completed.
- Send Invoice: When sent / When first payment made / When fully paid.
- Send Contract: when signed. Send Questionnaire: when submitted.

**Triggers**
- Lead Capture Form submission (whole form, or per-answer).
- Online Scheduling service booked (Advanced Scheduling).
- Product/service purchased on a quote ("Workflows for Products").
- Manual apply from project page.
- Another workflow's "start workflow" action.

**Links** — Templates (documents/emails), Projects, To-Do, Calendar.

**Pain** — no branching/conditions inside a workflow (only linear with
pauses); no "if invoice unpaid after X days" logic; steps can't be edited in
bulk once applied **[verify in-app]**.

**Sources**
- https://help.17hats.com/en/articles/1046329-workflow-overview
- https://help.17hats.com/en/articles/879587-workflows-to-dos-action-items-pauses
- https://help.17hats.com/en/articles/1037910-workflows-action-items
- https://help.17hats.com/en/articles/1828264-all-about-workflows-triggering-your-workflow
- https://help.17hats.com/en/articles/2165100-workflows-send-quote-completion-triggers
- https://help.17hats.com/en/articles/2165133-workflows-send-invoice-completion-triggers
- https://blog.17hats.com/elevate-your-automation-game-workflows-for-products/
- https://www.letnicolehelp.com/post/control-your-17hats-workflows-with-action-completed-settings

---

## 7. To-Do

**Screen** — To-Do Manager with **Due** and **Upcoming** lists; per-project
lists; items from workflows and manual entries. Also visible on Dashboard.

**Data** — title, due date + time, assigned user, project, recurring rule
(recurring to-dos exist), source (manual/workflow).

**Actions** — add from To-Do page, Project page, or Quick Look; check off
(may advance a workflow); assign to team member.

**Sources**
- https://help.17hats.com/en/articles/2841749-all-about-to-do-tasks
- https://blog.17hats.com/feature-friday-using-recurring-to-dos/

---

## 8. Documents & Email Templates (template library)

**Screen** — "Documents & Emails" page; **New Template** → choose type;
filter by type.

**Template types** — Email, Quote, Contract, Invoice, Questionnaire.

**Email Types** (drive which token set and which document link is embedded):
Regular Email, Quote Email, Contract Email, Invoice Email, Client Portal
Email, Questionnaire Email, Lead Auto Responder, Scheduling Emails.

**Tokens (merge fields)** — syntax `[% contact.first_name %]`. Families:
`contact.*` (first_name, last_name, name, company_name, address.as_string,
primary_email_address, primary_phone_number), `project.*` (name,
main_event.location_string, main_event.formatted_token_date('start'),
main_event.formatted_time('start'/'end')), `dynamic.*` (e.g.
shootproof_links), plus user/brand tokens. Full list in "Complete List of Tokens".

**Editor** — new rich-text editor (Aug 2026): bold/italic/underline/strike,
lists, links, rules, headings, quotes, code blocks, tokens, signatures, images,
attachments, **AI writing assistance**.

**Sources**
- https://help.17hats.com/en/articles/3110651-17hats-documents-emails
- https://help.17hats.com/en/articles/879803-how-to-create-manage-document-email-templates
- https://help.17hats.com/en/articles/2950670-what-are-the-different-email-types-in-17hats
- https://help.17hats.com/en/articles/1235598-complete-list-of-tokens
- https://blog.17hats.com/new-text-editor/

---

## 9. Quotes

**Data** — internal title, display title, line items (from Products &
Services or ad-hoc), quantities, taxable flags, discount, expiry, notes.
Line-item selection modes: **required**, **optional add-on**, **"Choose Any
Items"** (multi-select, none required), **choose one** package **[verify
exact labels in-app]**.

**Client flow** — client opens link, selects options/quantities, accepts;
choices flow into the attached invoice automatically.

**3-in-1 (Combined Document)** — Quote + Contract + Invoice in one client
page: select → sign → pay. Invoice displays once quote accepted.

**Links** — Contracts, Invoices, Workflows (accept triggers), Products.

**Sources**
- https://help.17hats.com/en/articles/3116500-quote-options
- https://help.17hats.com/en/articles/924358-combined-documents
- https://help.17hats.com/en/articles/1698294-quote-templates
- https://help.17hats.com/en/articles/3116928-quote-invoice-line-item-settings
- https://www.17hats.com/features/quote-contract-invoice

---

## 10. Contracts

**Data** — template body with tokens, fillable fields for client, signature
blocks: primary signer, optional secondary signer (sequential: primary must
complete first), optional **countersign** by account owner/user (name pulled
from account "full name"; other user must edit under "upon review" step).

**Client flow** — open link → complete fields → sign electronically → PDF
copy; signatures stated as legally binding.

**Sources**
- https://help.17hats.com/en/articles/2350413-contract-templates
- https://help.17hats.com/en/articles/2868505-user-and-account-owner-contract-signature-options
- https://help.17hats.com/en/articles/962028-can-i-add-more-signatures-to-my-contracts

---

## 11. Invoices

**Data** — internal title, display title, due date, PO number, notes, line
items (auto-fill from Products & Services), tax rate per taxable item,
discount (fixed or %), **Payment Schedule** (split total into installments
with own due dates + reminders, e.g. $2,000 on receipt / 50% two months prior
/ balance one week prior), **Recurring Invoice** (duplicate invoice on an
interval — separate paid add-on), **Automatic Payments** (client opts to save
card + auto-charge; needs account-level + invoice-level toggle), invoice
status (draft / sent / partially paid / paid / overdue).

**Reminders** — Account Settings > Email Settings > Email Reminders: default 1
day before due, then monthly for past-due; customisable per document type.

**Payments** — see §13. Tipping available for Online Scheduling payments
(Stripe/Square).

**Links** — Bookkeeping (income auto-posted on payment), QuickBooks sync
(non-draft invoices + payments), Workflows (payment triggers), Time Tracking
(time → line items).

**Pain** — "Recurring invoices vs payment schedules" confusion; recurring
billing is an extra fee; QuickBooks double-payment records reported.

**Sources**
- https://help.17hats.com/en/articles/3116849-invoice-settings
- https://help.17hats.com/en/articles/1072575-recurring-invoices-vs-payment-schedules
- https://help.17hats.com/en/articles/2548662-scheduled-payments
- https://help.17hats.com/en/articles/5052370-automatic-payments-for-payment-schedules
- https://help.17hats.com/en/articles/4260937-invoice-options-recurring-billing-automatic-payments
- https://help.17hats.com/en/articles/879792-how-do-i-set-automatic-invoice-reminders
- https://help.17hats.com/en/articles/2280471-email-settings-document-email-reminders

---

## 12. Questionnaires

**Data** — 13 question types incl. Short Answer, Long Answer, Yes/No, Choose
from a List, Checkboxes, Date, (others such as file upload/address **[verify
in-app]**). **Branch Questions** (if/then): base question types Yes/No, Choose
from a List, Checkboxes → show follow-up questions per answer; branches can
nest. **Answer Mapping** to contact/project fields (type must match).

**Client flow** — opens link (email or portal), completes, submits; appears
in portal even if never "sent".

**Sources**
- https://help.17hats.com/en/articles/4755373-if-then-questions-in-questionnaires
- https://help.17hats.com/en/articles/897456-questionnaire-templates
- https://help.17hats.com/en/articles/2545940-answer-mapping-in-questionnaires-lead-capture-forms

---

## 13. Payments

- Processors: **Stripe** (primary; cards Visa/MC/Discover/Amex; **ACH** US
  only at 0.8% + $1.50 capped $6.50), **Square**, **PayPal**, **Authorize.net**.
- Stripe processing fees are surfaced in Bookkeeping as expense lines.
- Card on file + auto-charge for recurring invoices and payment schedules.
- Tips on Online Scheduling payments (Stripe/Square).

**Sources**
- https://help.17hats.com/paypal-authorize-net-stripe-square
- https://help.17hats.com/en/articles/6418020-stripe-payments
- https://help.17hats.com/en/articles/843846-accept-ach-payments-through-17hats
- https://help.17hats.com/en/articles/11498904-credit-card-and-ach-processing-fees-in-17hats-bookkeeping-with-stripe
- https://help.17hats.com/en/articles/3980157-online-scheduling-payments

---

## 14. Online Scheduling

**Tiers** — **Basic** (auto confirmation + reminder emails, pre-booking
questions, custom locations, approval setting, booking limits) and
**Advanced** add-on (payment at booking, Zoom unique URLs, workflow triggers,
Group services, team members).

**Setup** — Part 1 create **Services** (Individual or Group; group = N
bookings per slot); Part 2 **Availability Schedules** (dates, hours, booking
limits, calendar conflict checks across 17hats/Google calendars, team
members); multiple services per schedule; service booking questions.

**Client flow** — booking page → pick service → pick slot → answer questions
→ (pay) → confirmation email → reminder email; creates project/event.

**Sources**
- https://help.17hats.com/en/articles/2912511-online-scheduling-start-here
- https://help.17hats.com/en/articles/2913378-online-scheduling-setup-part-1-create-your-services
- https://help.17hats.com/en/articles/2913385-online-scheduling-setup-part-2-availability-settings
- https://help.17hats.com/en/articles/9967753-online-scheduling-groups
- https://help.17hats.com/en/articles/9904365-online-scheduling-team-members
- https://help.17hats.com/en/articles/2933608-online-scheduling-workflows
- https://help.17hats.com/en/articles/6837367-online-scheduling-service-booking-questions

---

## 15. Time Tracking (add-on)

- Global **Timer** button on every page → pick project + saved rate/task.
- Time Log tab on project. Green **Invoice** button converts entries to
  invoice line items (option to include non-billable + dates); minutes become
  decimal hours (1h02m → 1.0333).

**Sources**
- https://help.17hats.com/en/articles/861657-time-tracking

---

## 16. Email

- **Incoming**: IMAP only (POP/Exchange need a Gmail relay). Connect in
  Account Settings > Email Settings. Polls ~every 30 min (up to 65 min). Only
  imports mail from senders who are saved contacts; threads attach to project.
- **Outgoing**: own SMTP or the 17hats server (better deliverability;
  recommended for multi-user).
- Emails tab on project; send from project with templates + tokens.

**Pain** — sync delay, no push/real-time, no shared inbox, only known contacts.

**Sources**
- https://help.17hats.com/en/articles/2548572-email-sync-setup-use
- https://help.17hats.com/en/articles/927448-how-does-email-correspondence-work-in-17hats
- https://help.17hats.com/en/articles/2810516-how-to-sync-incoming-mail-from-pop-and-exchange-accounts

---

## 17. Client Portal

- Enabled per contact ("Giving Contacts Access"); client logs in on the
  brand's custom **subdomain** (`yourbrand.17hats.com`-style).
- Client sees: the 100 most recent **sent** documents (drafts hidden;
  submitted questionnaires shown regardless), event date/time/location, own
  profile (editable if "allow client edits" toggled). Cannot edit events/docs.
- Global settings (Account Settings > Client Portal): cover image
  (1140×220), header logo toggle, default welcome message, background colour,
  live preview. Per-contact overrides.

**Sources**
- https://help.17hats.com/en/articles/1131267-client-portal-overview
- https://help.17hats.com/en/articles/3160018-client-portal-customizing-your-global-settings
- https://help.17hats.com/en/articles/3160024-client-portal-customizing-per-contact
- https://help.17hats.com/en/articles/3160537-client-portal-giving-contacts-access

---

## 18. Bookkeeping & Reports

**Bookkeeping tab** — income auto-posts when invoices are paid; expenses
entered manually or via **Bank Connect** add-on (bank + credit card feeds,
Smart Categorization remembers categories); pre-populated categories +
custom categories; discounts and processing fees visible on P&L.

**Reports** (Bookkeeping > Reports; print or CSV): Profit & Loss, Sales Tax,
Upcoming Receivables (0-30/30-60/60-90/90+), Aged Receivables (same buckets),
Client Sales, Product Sales, Lead Source.

**QuickBooks Online sync** — sent (non-draft) invoices and their payments
push to QBO (payments → Undeposited Funds by default); expenses do **not**
sync; US/CA/UK only; users report duplicate payment records.

**Sources**
- https://help.17hats.com/en/articles/3112838-bookkeeping-overview
- https://help.17hats.com/en/articles/924603-what-is-the-profit-and-loss-report-in-17hats
- https://help.17hats.com/en/articles/924612-how-do-i-add-custom-bookkeeping-categories
- https://help.17hats.com/en/articles/924623-sales-tax-report
- https://help.17hats.com/en/articles/924556-aged-receivables-report
- https://help.17hats.com/en/articles/924557-upcoming-receivables-report
- https://help.17hats.com/en/articles/7336856-overview-of-lead-source-reporting-in-17hats
- https://help.17hats.com/en/articles/859661-17hats-quickbooks-online-integration
- https://help.17hats.com/en/articles/861483-invoice-payments-undeposited-funds-quickbooks-online

---

## 19. Account Settings

- **My Account / Brand**: brand info, linked brands (multi-brand; each brand
  has its own users/permissions), zip + time zone (drives weather).
- **Brand Preferences**: logo, colours & fonts tab, document background.
- **Users**: Owner / Admin / Team Member; granular permissions (calendars,
  invoices, quotes, contracts, to-dos, etc.).
- **Custom Fields** (contact + project).
- **Email Settings**: incoming/outgoing connections, document email reminders.
- **Client Portal** global settings; custom subdomain.
- **Invoice / Money Matters** options: tax rates, discounts, auto-pay toggle.
- **Bookkeeping Options**: bank connections, categories.
- **Integrations**: Stripe/Square/PayPal/Authorize.net, Google Calendar,
  QuickBooks, Zapier (new contact / updated contact / new project triggers),
  Zoom, ShootProof (gallery links token), others **[verify list in-app]**.

**Sources**
- https://help.17hats.com/en/articles/3156330-account-settings-overview
- https://help.17hats.com/en/articles/840254-users-getting-started-and-setting-permissions
- https://help.17hats.com/en/articles/843598-how-do-i-add-and-use-linked-brands
- https://help.17hats.com/en/articles/3110814-brand-preferences-colors-fonts-tab
- https://help.17hats.com/en/articles/2761371-zapier-integration
- https://zapier.com/apps/17hats/integrations

---

## 20. Mobile app (iOS / Android)

- Push notifications: LCF submissions, invoice payments, questionnaire
  submissions, scheduling bookings. View project notes/files; Touch ID;
  multi-user permissions respected.
- **Pain**: widely described as a stripped-down viewer, wrong project dates,
  blank screens/login failures; a full rebuild has been promised.

**Sources**
- https://help.17hats.com/en/articles/3152558-the-17hats-mobile-app
- https://apps.apple.com/us/app/17hats/id1069498016

---

## 21. Pricing (context for positioning)

- Legacy tiers Essentials $15 / Standard $30 / Premier $45–60 per month were
  retired late 2025. New sign-ups: **one plan, $60/month** ($600/yr, $800/2yr;
  50%-off first-year promo seen) including Zapier, client portal, advanced
  workflows, if/then questionnaires.
- Add-ons still billed separately ($5–$10/mo each): Recurring Billing,
  Advanced Scheduling, Time Tracking, Bank Connect, QuickBooks sync.

**Sources**
- https://17hats.com/pricing
- https://agiled.app/blog/17hats-pricing
- https://onesuite.io/blog/17hats-pricing/
- https://taskip.net/17hats-pricing/

---

## 22. Recent product changes (2024–2026)

- Aug 2026: new rich-text editor with AI writing help across emails/documents.
- 2025: single-plan pricing; Online Scheduling **Groups** promoted from
  workaround to feature; Online Scheduling **Team Members**.
- Ongoing release notes at https://17hats.releasenotes.io/ (tags: reporting,
  calendar, project date, questionnaires, search, new feature).

---

## 23. Documented complaints (input to the improvements list)

1. Mobile app is a weak viewer; wrong dates; login/blank-screen bugs.
2. UI feels dated/clunky; low design customisation of client-facing docs.
3. Buggy web app; refresh 2–3× to make things work.
4. QuickBooks sync creates duplicate payment records.
5. Booking lacks manual scheduling and richer options vs Acuity/Calendly.
6. Bookkeeping too basic for product-based businesses; contracts basic.
7. Price creep: base plan + many add-ons.
8. Slow development pace; support slow, no phone.
9. Email sync is polling, IMAP only, only known contacts.
10. Limited integrations; recurring payment options weak.

**Sources**
- https://www.capterra.com/p/144328/17hats/reviews/
- https://www.getapp.com/collaboration-software/a/17hats/reviews/
- https://www.agencyhandy.com/17hats-reviews/
- https://www.productowl.io/crm/17hats

---
---

# Addendum A — deeper findings from the module research passes

The four module research passes surfaced additional, more specific detail.
Where it refines a section above it is grouped under the same heading.

## A1. Global / platform

- Custom Fields live in Account Settings with **Contact Fields** and **Project
  Fields** tabs; unlimited; every custom field automatically becomes a token
  and a "maps to" target for forms/questionnaires.
- **Related Contacts**: a project sidebar section attaching additional people
  (spouse, planner, vendor) to a project; related contacts can be contract
  co-signers. There is still no Company/Organisation object; "company" is a
  field + "Show as company" checkbox on the contact.
- **Notes and the Activity Log are per project, not per contact.**
- **Template Sharing** exports email/document/lead-form/scheduling/workflow
  templates account-to-account; the **17hats Marketplace**
  (marketplace.17hats.com) sells templates, workflows, scheduling services and
  downloadables that auto-install into an account.
- **SMS Texting** is a paid add-on module: scheduling confirmation/cancel/
  reminder texts, past-due document texts, manual + two-way texting, SMS inbox
  in the mobile app.
- Old tiers capped combined document sends per month (20 / 35 / unlimited);
  the single plan still reportedly carries send limits that vary by billing
  cadence **[verify in-app]**.
- Sources: https://help.17hats.com/en/articles/934803-related-contacts ·
  https://help.17hats.com/en/articles/2551565-template-sharing ·
  https://help.17hats.com/en/articles/840250-17hats-marketplace ·
  https://www.17hats.com/sms-texting

## A2. Dashboard refinements

- Section 3 is officially **Recent Client Activity**: invoices paid, contracts
  signed, quotes accepted, questionnaires completed, documents viewed.
- Section 5 "Let's Take Care of Business" contains **New Leads** (a form
  submission stays "New" until acted on, then becomes "Active" and leaves the
  dashboard), due/overdue to-dos with hover-to-**snooze** (next day/week/
  month/never), unread synced emails, and workflow **Action Items awaiting
  approval**.
- Layout is fixed; cannot be rearranged.
- Sources: https://help.17hats.com/en/articles/2679659-recent-client-activity ·
  https://help.17hats.com/en/articles/2625550-new-leads-vs-active-leads

## A3. Lead Capture Form refinements

- Nine settings (as documented): title, description, questions, auto-response,
  workflow trigger, contact tags + project tags, owner email notification,
  post-submit action (thank-you text **or redirect URL**), appearance (button
  colours, font, background, header image).
- **Install** screen: three modes — hosted link, pop-up dialog snippet, iframe
  embed.
- Question types: Short Answer, Long Answer, Yes/No, Choose from a List,
  **Lead Source**, plus layout blocks Heading and Text (8 types).
- **Lead Sources**: up to 25, with Active/Inactive/Archived states.
- **Email Lead Capture Rules** parse inbound notification emails from
  WeddingWire, The Knot and ShowIt into lead projects (no API).
- Advanced pattern: answers pre-populate quotes/invoices sent by the workflow.
- Sources: https://help.17hats.com/en/articles/2795306-installing-your-lead-capture-form ·
  https://help.17hats.com/en/articles/10167140-lead-capture-form-question-types ·
  https://help.17hats.com/en/articles/3114074-lead-capture-email-setup ·
  https://help.17hats.com/en/articles/2198457-send-automated-invoices-using-lead-capture-forms-and-workflows

## A4. Projects — Pipelines (2024 feature, corrects §4 "no pipeline")

- **Pipelines** are a Kanban-style board. Two kinds: **Lead pipelines** (up to 7
  active) and **Client pipelines** (up to 5 active). Each pipeline has up to
  **5 Phases** plus Completed.
- Phase membership is driven by **Project Tags** ("By Tag") or "By Days in
  Prior Phase" (auto-advance after N days). Workflow To-Do steps can add/remove
  tags, and tags can be bulk-applied from the Projects list, so the automation
  chain is: form answer → tag → pipeline phase → workflow.
- A "stop tag" pauses a project's workflow; a "start tag" launches one
  (Start/Stop Workflow Automation).
- Project Overview also has an **Important Documents** panel (17hats-created
  docs only; uploaded files don't show there), a **Workflows** section with a
  progress bar, and Project Tags in the sidebar.
- Sources: https://help.17hats.com/en/articles/9764837-17hats-pipelines-overview ·
  https://blog.17hats.com/tired-of-dropping-the-ball-meet-your-new-secret-weapon-pipelines/ ·
  https://help.17hats.com/en/articles/13928403-start-stop-workflow-automation ·
  https://help.17hats.com/en/articles/3760752-how-to-apply-workflows-to-projects-in-bulk

## A5. Workflow timing — Base Dates

- Every step's due rule is *N days Before / On / After the **Base Date***, or
  "after the previous step completes".
- Base Date resolution: (1) Project Date if set; (2) else the workflow
  activation date; (3) if started from a booking, the appointment date; (4) a
  user-set custom date.
- Editing a template does **not** change running instances; running steps are
  edited on the project. Workflows can be paused/resumed from the project.
- Sources: https://help.17hats.com/en/articles/925561-workflow-base-dates ·
  https://help.17hats.com/en/articles/879497-updating-workflow-templates ·
  https://help.17hats.com/en/articles/13753480-how-to-pause-and-resume-a-workflow

## A6. Calendar refinements

- Recommended calendar set: Leads, Booked/Paid Clients, To-Do & Workflow
  Items, Marketing, Personal, and a **Pending** calendar for scheduling
  approvals.
- To-dos appear on their own calendar but cannot be created from the calendar.
- Google two-way sync requires the calendar to exist in Google first.
- Online Scheduling **Calendar Checks** consult chosen calendars for conflicts.
- Sources: https://help.17hats.com/en/articles/3112379-recommended-calendar-setup ·
  https://help.17hats.com/en/articles/9904377-online-scheduling-calendar-checks

## A7. Online Scheduling — service and schedule fields

- **Service**: name, duration (min), description, image, location type (In
  Person / Phone / Zoom — Zoom needs Advanced), target calendar (required;
  booking creates Contact + Project + Event), up to 10 booking questions,
  approval mode (instant vs Pending Approval), confirmation email template,
  two automatic reminders (day before; 1–2 h before), cancellation settings,
  workflow on "requires approval" and/or "confirmed", project handling (new vs
  attach to existing).
- **Availability Schedule**: weekly hours, buffer before/after, min notice,
  max horizon, max bookings per day/week, calendar checks, team members.
- Reschedule of an approved booking does not re-trigger approval; cancel from
  Project/Bookings to free the slot.
- Scheduling tokens e.g. `[% booking.scheduled_service.name %]`.
- Sources: https://help.17hats.com/en/articles/9893949-online-scheduling-service-locations ·
  https://help.17hats.com/en/articles/9904227-online-scheduling-services-confirmation-cancellation-settings ·
  https://help.17hats.com/en/articles/9894024-online-scheduling-services-project-management ·
  https://help.17hats.com/en/articles/9904320-online-scheduling-availability-multiple-services-on-one-schedule

## A8. Quotes — options and line-item groups (refines §9)

- **Quote Options**: internal name, display title, **Valid Until** (relative on
  templates, e.g. "7 days from send"), header tax rate, discount $ or %,
  attach **Contract** (template or scratch), attach **Invoice**, tipping toggle.
- Line item: name, description, price, qty, income category, taxable + rate,
  optional photo; autocompletes from Products & Services.
- Option groups: **Choose One** (exactly one) and **Choose Any** (zero or
  more). Items can be *selected by default* and *allow client to choose
  quantity* with min/max.
- Expired quotes cannot be accepted. Accepting gates the contract/invoice.
- Sources: https://help.17hats.com/en/articles/935049-how-do-i-manage-variable-pricing-on-quotes ·
  https://help.17hats.com/en/articles/3591193-tipping

## A9. Contracts (refines §10)

- 17hats ships **no legal templates**; users paste their own text and add
  tokens + required client fields.
- Per-contract choice: send **pre-signed** by you, or **countersign** after
  the client. Primary contact signs first; related contacts unlock after.
- ESIGN/UETA-compliant e-signature; signed copy stored on the project and
  portal. Signature capture UI (draw/type) **[verify in-app]**.
- Sources: https://help.17hats.com/en/articles/927258-are-electronic-signatures-legally-binding

## A10. Invoices (refines §11)

- **Invoice Options** panel: Online Payments on/off, **Disable Partial
  Payments** (off by default, so clients can pay an "Other" amount), Tipping,
  Recurring Invoice, Enable Automatic Charging. **Record Payment** button for
  offline payments (amount, date, reference).
- **Payment Schedules**: up to **12** installments, equal or custom, each with
  its own due date and reminder; auto-charge at ~10 a.m. on due date when the
  client saved a card (Stripe/Square).
- **Refunds are not processed in 17hats** (do it in the processor, adjust
  manually). **No automatic late fees** found.
- Reminders: Upcoming (X days before, default 1), Past Due (X days after,
  repeat never/daily/weekly, end after N), Upcoming+Past Due combo; editable
  subject/body per reminder.
- Invoices tab header stats: payments this year, past-due count/amount, A/R
  due in 30/60 days and rest of year.
- Each payment creates bookkeeping transactions (sale + sales tax); cash basis.
- Sources: https://help.17hats.com/en/articles/6022653-partial-payments-on-invoices-quotes ·
  https://help.17hats.com/en/articles/924616-how-do-i-record-a-payment-manually ·
  https://help.17hats.com/en/articles/924368-how-do-i-manage-my-payments ·
  https://help.17hats.com/en/articles/897480-what-time-do-document-reminders-get-sent

## A11. Questionnaires (refines §12)

- Confirmed question types: Short Answer, Long Answer, Yes/No, Choose from a
  List, Checkboxes, Date, File Upload (13 total; remainder **[verify in-app]**).
- "Maps to" dropdown per question; if the target field already has data the
  answer is **pre-filled** for the client.

## A12. Products & Services catalog

- Account Settings > Money Matters > Products & Services: internal name,
  display name, description, price, income category, taxable + rate, photo,
  allow client quantity (min/max), selected-by-default on quotes, **start
  workflow when paid in full / on first payment**.
- No multi-currency; no tiered/volume pricing.
- Sources: https://help.17hats.com/en/articles/849333-money-matters-products-services-page ·
  https://help.17hats.com/en/articles/4120797-products-and-services-internal-and-display-names

## A13. Payments (refines §13)

- 17hats Payments = Stripe: cards, Apple Pay, Google Pay; ACH via bank list.
- Square supported (tipping, auto-pay). **Authorize.net is legacy**; PayPal
  not found as a current processor.
- Card-on-file toggle: Money Matters > Invoice Options > "Customers can save
  card data".

## A14. Bookkeeping & reports (refines §18)

- Strictly **cash basis**. Ledger filters: bank account, category, type, date,
  amount, keyword. Expenses are negative amounts.
- Bank Connect: $5/mo, Plaid, 20,000+ institutions, 90 days on connect, older
  history via import; imported items must be categorised/verified before P&L.
- Deposits can be applied to an existing invoice to avoid double counting.
  Stripe fees auto-posted as expenses since May 2025.
- No receipt images, no mileage **[likely absent]**.
- Seven reports: P&L, Sales Tax, Upcoming Receivables, Aged Receivables,
  Client Sales, Product Sales, Lead Source. All print/CSV.
- QBO: one-way push of sent invoices + payments; Undeposited Funds; requires
  "Custom Transaction Numbers"; 21-char truncation; tax-rate names must match;
  expenses don't sync; QuickBooks Desktop via .IIF export.
- Sources: https://help.17hats.com/en/articles/924615-how-do-i-connect-my-bank-account-to-17hats ·
  https://help.17hats.com/en/articles/924610-how-do-i-apply-a-bookkeeping-transaction-to-an-invoice ·
  https://help.17hats.com/en/articles/840256-quickbooks-warning-messages ·
  https://help.17hats.com/en/articles/879841-how-do-i-export-my-17hats-bookkeeping-to-quickbooks-desktop

## A15. Integrations & Zapier

- Official list: Stripe, Google Calendar, Apple Calendar, Zoom, QuickBooks
  Online, Greetabl, Zapier, Fundy, N-Vu, The Knot, WeddingWire, ProSelect,
  ShootProof, banks (Plaid). Pic-Time / Pixieset not integrated.
- Zapier surface: triggers **New Contact, Updated Contact, New Project**;
  actions **Create Contact, Update Contact**. No invoice/payment/booking
  triggers.
- Sources: https://17hats.com/integrations · https://zapier.com/apps/17hats/integrations

## A16. Settings, security, data portability

- Brand subdomain (`<name>.17hats.com`-style) only; no CNAME custom domain.
- Roles: Owner / Admin / Member with per-section permissions, set per brand.
  Premier historically included 3 users and 2 brands; extra user $5, extra
  brand $10.
- Security claim found: AES-256 database encryption; PCI delegated to Stripe;
  no SOC 2 / 2FA / GDPR statements surfaced **[verify]**.
- Export: contacts CSV only; bookkeeping .IIF; reports CSV. **No bulk
  document/PDF or full-account export** — lock-in complaint.

## A17. Add-on pricing (refines §21)

| Add-on | Monthly |
|---|---|
| Recurring Billing | $10 |
| Advanced Online Scheduling (2+ services, payments, Zoom, groups) | $10 |
| Time Tracking | $5 |
| Bank Connect | $5 |
| QuickBooks Online sync | $5–10 |
| Extra user | $5 each |
| Extra linked brand | $10 each |
| SMS Texting | unknown |

Worked example from reviewers: $60 + 10 + 10 + 5 + 5 + 5 = **$95/mo**.
