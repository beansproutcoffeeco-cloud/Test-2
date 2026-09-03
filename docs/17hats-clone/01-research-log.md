# 17hats Research Log — page-by-page functional notes

**Date:** 2026-09-03
**Method:** Read-only research. No 17hats account was accessed and no data was
viewed, created, edited, or deleted. This session had no Chrome connector and
the network proxy blocks 17hats.com, help.17hats.com, blog.17hats.com,
17hatsuniversity.com and every third-party review site, so every entry below
was reconstructed from web-search summaries of the 17hats Help Center, 17hats
blog, release notes, and third-party reviews. Each section lists its sources.
**In-app verification pass: 2026-09-03.** A read-only Claude in Chrome
walkthrough of a live 17hats account (admin.17hats.com) has since been run
against `00-in-app-walkthrough-checklist.md`. Every item that had been flagged
for in-app checking is resolved inline below under a **Verified in-app** note, and
corrections are collected in `08-open-questions.md`. No record was created,
edited, sent or deleted, and no client names, contact details, payment data or
amounts are reproduced here.

Legend: **Screen** = what the page shows · **Data** = fields/entities ·
**Actions** = what the user can do · **Links** = how it connects to other
modules · **Pain** = documented complaints/limitations.

---

## 0. Global shell (app frame)

**Screen**
- **Verified in-app.** The app lives at **admin.17hats.com**
  (www.17hats.com/loginredirect points there; app.17hats.com/portal is the
  separate client-facing portal login). The left rail order is exactly:
  **DASHBOARD, CONTACTS, LEADS, PROJECTS, CALENDAR, PIPELINES, BOOKINGS,
  TO DO, DOCUMENTS, WORKFLOW, BOOKKEEPING**, with a **REFER A FRIEND** button
  pinned at the bottom. The guess above was close but missed **PIPELINES** and
  **BOOKINGS**, which are now top-level, and placed Workflow too high.
  Routes: /app/dashboard, /app/contacts, /app/leads/overview, /app/projects,
  /app/schedule, /app/pipeline, /app/scheduling/bookings, /app/tasks,
  /app/invoices (Documents points at the invoices route),
  /app/workflows/overview, /app/accounting.
- **LEADS is the only expandable item.** Its disclosure arrow opens three
  children in place, not as a hover flyout: **ALL LEADS, CAPTURE FORMS,
  REPORTING**. Clicking the label itself goes to /app/leads/overview.
- Top toolbar, left to right: a "Search Contacts..." input, then five circular
  icon buttons whose accessible names are **Timer**, **Documents & Emails**,
  **Help & Support**, **Notifications** (with a red count badge) and
  **Account Settings**; the brand logo sits at the far right. The
  "Documents & Emails" button is not a quick-add panel; it jumps straight to
  Account Settings > Account Templates > Documents & Emails.
- **No "Quick Look" side panel exists** in the current UI. Nothing in the shell
  matches that description. The closest equivalents are the CREATE NEW
  dropdowns inside a project. Treat the Quick Look reference as stale.
- Global search behaviour was **not** exercised: it requires typing into a
  field, which the read-only session rules forbade.

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

**Pain** — no true company/organisation object with multiple people.
**Verified in-app.** The contact record is deliberately thin: expanding
CONTACT DETAILS on a contact page reveals only **Name, Company, Primary @
(email), Primary # (phone), Referred By**. "Company" is a plain text field on
the contact, not a linked organisation object, and several people at one
company cannot be grouped under it. The nearest mechanism is the
**RELATED CONTACTS** panel, which hangs additional named people, each with a
role, off a **project** rather than off a company. Everything else, including
project date, type, calendar, tags, lead source and every custom field, lives
on the **Project**, not the contact.
Also confirmed: the contacts list shows only **Name, Email, Phone** with no
column chooser, so list columns are indeed not customisable. The list is
navigated by an A-Z letter index, with letters that have no contacts greyed
out, and filtered by the pill group
**ALL | CLIENTS | LEADS | OTHER | ARCHIVED**. The gear menu holds exactly two
items, **Import Contacts** and **Export Contacts**.

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

**Behaviour** — every submission creates (a) a contact of type Lead, (b) a
**Project** named per setting 2,
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
pauses); no "if invoice unpaid after X days" logic.
**Verified in-app** on the bulk question: a workflow **can** be applied to many
projects at once. Ticking any row on /app/projects reveals a **BULK ACTIONS**
dropdown containing exactly **Archive Project, Add Tags, Remove Tags,
Add a Workflow, Delete Project**. What is still impossible is editing the
*steps* of workflows already running across many projects; the bulk menu only
attaches a workflow, it does not retro-edit in-flight ones.
Two further findings soften the "no conditions" claim. Each workflow carries
**START WORKFLOW TAGS** and **STOP WORKFLOW TAGS**, including a special
**END WORKFLOW** chip, behind a **START / STOP AUTOMATION** switch, and every
Action step can add and remove project tags **twice**: once when it fires and
again when its completion condition is met. Chaining tags this way is how
accounts build branching in practice. It is tag-driven rather than an explicit
condition builder, which is precisely the gap a clone should close.

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
- Old tiers capped combined document sends per month (20 / 35 / unlimited).
  **Verified in-app: no send limit is surfaced anywhere in the current
  product.** Plan Information and the Add Modules page show only the plan and
  one add-on, and nothing mentions document send caps. Treat the send limit as
  historical.
  The reminder engine was confirmed instead (Account Settings > Reminders):
  four groups, **QUESTIONNAIRE, QUOTE, CONTRACT, INVOICE**, each with a master
  switch plus **Email: Upcoming Reminder** and **Email: Past Due Reminder**,
  and invoices additionally carrying
  **"Email: Upcoming Reminder and Past Due"**. A rule reads as an offset, a
  cadence and a stop condition, for example "1 day before due date" or
  "1 day after due date; Repeat monthly; End after 12 occurrences". Reminders
  never fire if the document has no due date.
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
  portal.
  **Partially verified in-app.** The business side of signing is configured on
  the contract template by a **My Signature** dropdown with exactly three
  options: **Not required**, **Sign upon creation**, **Counter-sign after
  client(s)**, which confirms the countersign model described above.
  Client-fillable fields come from an **INSERT FORM** dropdown offering exactly
  seven types: **Checkbox (optional), Checkbox (required), Initials (required),
  Long text input (optional), Long text input (required), Short text input
  (optional), Short text input (required)**. Initials exists only in a required
  variant, and the client signature block is implicit in the document type
  rather than an insertable field.
  **Still unverified: the client-side draw-versus-type signature capture UI.**
  Reaching it means opening a live client-facing document, which would record a
  "viewed" event against a real client, a write the read-only rules forbade.
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

- **Verified in-app: there are 12 question types, not 13.** The ADD QUESTION
  menu in the questionnaire template editor holds exactly these, with the
  product's own descriptions:
  **Short Answer** (single line), **Long Answer** (multiple lines),
  **Yes/No**, **Choose from a List** (one answer), **Checkboxes** (multiple
  answers), **Date**, **Heading**, **Text** (intros and directions),
  **Related Contact** ("Get info about related contacts"), **Image**
  (jpg/png), **File Uploader** (client upload up to 10 MB) and
  **Project Details** ("Collect project-related information").
  The Lead Capture Form editor shares the same engine but exposes **10** types:
  it drops Related Contact, Image and Project Details and adds a **Lead
  Source** type ("Allow leads to select how they heard about you").
  No branching or conditional-question UI exists in either editor.
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

---

# Addendum B — live in-app walkthrough, 2026-09-03

Read-only pass through a production 17hats account using Claude in
Chrome, following `00-in-app-walkthrough-checklist.md`. Nothing was
saved, sent, deleted, archived, paid, signed or accepted; every editor
and dialog opened was closed with Cancel or Escape. Screens are described
structurally: no client names, emails, phone numbers, addresses, payment
details or amounts are recorded. Screenshots live in `screens/`.

App domain: **admin.17hats.com** (www.17hats.com/loginredirect points here).
app.17hats.com/portal/#/login is the separate CLIENT portal login.

## Pass 1 — shell and navigation

Left nav, exact order top to bottom:
DASHBOARD, CONTACTS, LEADS (expandable), PROJECTS, CALENDAR, PIPELINES,
BOOKINGS, TO DO, DOCUMENTS, WORKFLOW, BOOKKEEPING.
Pinned at the bottom of the rail: REFER A FRIEND button.

LEADS is the only nav item with a disclosure arrow. Clicking the arrow expands
three children in place (not a hover flyout): ALL LEADS, CAPTURE FORMS, REPORTING.
Clicking the LEADS label itself navigates to /app/leads/overview.

Nav routes:
- DASHBOARD    /app/dashboard
- PROJECTS     /app/projects
- CALENDAR     /app/schedule
- PIPELINES    /app/pipeline
- BOOKINGS     /app/scheduling/bookings
- TO DO        /app/tasks
- DOCUMENTS    /app/invoices   <-- note: Documents nav points at the invoices route
- WORKFLOW     /app/workflows/overview
- BOOKKEEPING  /app/accounting
- LEADS        /app/leads/overview

Top toolbar, left to right: "Search Contacts..." text input with magnifier icon,
then five circular icon buttons with these accessible names:
Timer, Documents & Emails, Help & Support, Notifications, Account Settings.
Far right: the account's brand logo (acts as the account/user menu).
Notifications carries a red count badge.

"Documents & Emails" in the toolbar is NOT a quick-add panel. It jumps to
Account Settings > Account Templates > Documents & Emails
(/app/account/templates/my-templates).

NOT VERIFIED: global search result behaviour. The search box needs typing and the
session rule forbids typing into fields.

## Account Settings menu (full, from the settings sidebar)

Settings:        My Account, Brand Preferences, Email Settings, Calendars,
                 Client Portal, Online Scheduling
Admin:           Users, Change My Login, Referrals, Plan Information, Integrations
Account Templates: Documents & Emails, Reminders, Custom Fields, Workflows,
                 Lead Capture Forms, Tag Management, Marketplace
Money Matters:   Invoice Options, Tax Settings, Bookkeeping Options,
                 Products & Services, Time Tracking
Restore:         Reset

## Templates library (/app/account/templates/my-templates)

Tabs: My Templates | Archived | Purchases | Sharing
Controls: IMPORT button, NEW TEMPLATE dropdown, "FILTER: NONE" dropdown,
"Find a template..." search box, VISIT MARKETPLACE button.

Sections rendered in this order, each its own table:
EMAILS (columns: TEMPLATE NAME, TYPE)
INVOICES (columns: TEMPLATE NAME, RECURRING - values Yes/No)
QUOTES (column: TEMPLATE NAME)
CONTRACTS (column: TEMPLATE NAME)
QUESTIONNAIRES (column: TEMPLATE NAME)

Email template TYPE taxonomy observed in the live account (this is the full
transactional email event list, valuable for the data model):
regular email, lead_send, scheduling, portal_send,
quote_send, quote_upcoming_send, quote_due_send, quote_confirmation,
contract_send, contract_upcoming_send, contract_due_send, contract_confirmation,
invoice_send, invoice_upcoming_send, invoice_due_send,
invoice_due_and_upcoming_send, invoice_confirmation, invoice_refund_send,
invoice_autobill_upcoming_send, invoice_autobill_confirmation,
questionnaire_send, questionnaire_upcoming_send, questionnaire_due_send,
questionnaire_confirmation

Each email row has a per-row dropdown caret at the right edge.

## Pass 2 — Dashboard (/app/dashboard)

Two-column layout. Left column wide, right column a narrow rail.

Left column, in order:
1. **Calendar strip.** Card headed with month and year ("September 2026") which
   links to /app/schedule/month/<date>, plus a gear icon top-right.
   At a 1920px-wide viewport it renders **5 day columns**: Today, Tomorrow,
   then the next three named weekdays. Each column header carries a weather
   glyph. Each column lists up to 3 event chips then a "Show (n) more"
   expander. Each day header links to /app/schedule/week/<date>.
2. **"Let's Take Care of Business".** Header right side reads
   `Sort: Priority | Grouping` - two selectable sort modes, Priority active by
   default. Beneath it a stack of colour-coded alert rows.

Right column, in order:
3. **Weather widget** (AccuWeather attribution, current temp, high/low, city,
   weekday and date, clock, sunset time) with its own gear icon.
4. **Recent Client Activity**, with a "See All Activity" link to
   /app/client-activity. Rows read: relative day, contact - project, then the
   event: "Viewed - Quote", "Sent - Questionnaire", "Viewed - Invoice",
   "Paid <amount> - Invoice #<n>", "Viewed - Contract".
5. **Pending Items.** Count-badge rows, each with a right chevron:
   Quotes, Contracts, Invoices, Questionnaires. Counts cap at "50+".

That is the five-section layout the log predicted.

Alert row types seen in "Let's Take Care of Business", with colour bands:
- red:   "You have N new Lead"
- red:   "You have N Contracts requiring your signature" (expands an inline list)
- red:   "You have N Contracts past due"
- red:   "You have N Invoices past due"
- red:   "You have N Workflow Items to approve"
- gold:  "You have N Quotes past due"
- gold:  "You have N To Do Items"
- gold:  "You have N Emails to reply to"
- green: "You have N Questionnaire past due"
Band colour encodes urgency (red > gold > green), not entity type.

Inline list rows under an alert show: date, contact - project, document
template name. Hovering a row reveals a "Snooze >" link at the right edge and a
dark tooltip repeating the row summary. The alert row itself also gets a
"Snooze >" on hover.

NOT VERIFIED (read-only rule): the snooze duration menu. "Snooze >" carries a
submenu caret but does not open on hover, and clicking risks snoozing a live
record. Same for switching Sort to Grouping - the options behind it were not
exercised.

## Pass 3a — Contacts (/app/contacts, routes to /app/contacts/<letter>)

Header: "Contacts" title + "+ ADD CONTACT" button.
Right of header: "Search Tags..." input with a tag icon, then a segmented filter
pill group - **ALL | CLIENTS | LEADS | OTHER | ARCHIVED** - then a gear dropdown.
The pill labels are colour-coded (CLIENTS green, LEADS orange).

Gear menu contains exactly two items: **Import Contacts**, **Export Contacts**.

Body is two columns. Narrow left column headed "RECENT CONTACTS" listing recent
contacts with initial-avatars. Main column starts with an **A-Z letter index
plus "#"**; letters with no contacts are greyed out and not clickable. Picking a
letter changes the route to /app/contacts/<letter>.

List columns: **Name, Email, Phone**, plus a right-facing chevron per row.
Each row has a coloured left border and a coloured initial-avatar; the colour
encodes contact type, matching the filter pill colours. No column chooser was
present, consistent with the log's note that list columns are not customisable.

## Pass 3b — Contact detail (/app/contact/<id>, redirects to /app/contact/<id>/project/<id>)

Opening a contact always lands you inside one of its projects. The route gains a
project id automatically.

Header row: initial-avatar with an edit pencil, the contact name. Top right:
`Project:` label, a **project switcher dropdown**, **NEW PROJECT** button,
**CONTACT DETAILS** toggle, **EDIT** dropdown. Under that a
"Visible in Client Portal" switch.

Project switcher contents: a "Filter" search box, a group header **Active**,
that contact's projects, then **+ Add a new project**.

**CONTACT DETAILS** expands an inline panel. The contact-level fields are only:
**Name, Company, Primary @ (email), Primary # (phone), Referred By.**
Everything else is project-level. This is the important data-model finding:
17hats keeps the contact record deliberately thin and hangs date, type,
calendar, tags, lead source and every custom field off the **project**.

**CLIENT PORTAL bar**: an on/off switch, then **COPY LINK**, **VIEW CLIENT
PORTAL**, **EMAIL LINK** buttons, and a caret to expand more portal settings.

Left column panels:
- **WHAT'S COMING UP IN THE NEXT 7 DAYS** with a CREATE NEW dropdown. Rows show
  a date chip, a completion checkbox, "Workflow: <name>" and a step subtitle.
- **IMPORTANT DOCUMENTS** with a CREATE NEW dropdown. Row types observed:
  Lead Capture Form (with completed timestamp), "Quote: #NNNN" + ACCEPTED badge,
  a collapsed group row "N Contracts" carrying green/red status count chips,
  "Invoice: #NNN - $amount" + PAST DUE badge and due date,
  "Questionnaire: <name>" + COMPLETED badge. Badges seen: DRAFT, ACCEPTED,
  COMPLETED, PAST DUE.
- **Bottom tab strip**, exact order:
  **NOTES, EMAILS, TEXTS, FILES, TO DO, EVENTS, BOOKINGS, PHONE LOG, TIME LOG,
  ACTIVITY.** NOTES is the default tab and offers "+ Add a new note"; each note
  renders as a date chip, body text and a timestamp.

**Answer to "do contact-level notes exist independent of projects?" — NO.**
Verified by switching the project switcher between two projects on the same
contact: the NOTES tab content changed completely. Notes are project-scoped.
The whole bottom tab strip is inside project context.

Right sidebar, in order:
- **PROJECT: <name>** with an edit pencil, then label/value rows:
  Primary Email, Project Date, Primary #, Type, (Lead Source, when the project
  originated from a lead), Calendar, Tags (chips).
  Project Date supports a range, rendered "Thu <date> <time> - <date> <time>".
- Then the account's **custom fields**, rendered in the same label/value list
  with no visual separator from the built-ins. In this account they include
  free text, yes/no and multi-select style values.
- **WORKFLOWS** with a "+" button, an "Active Workflows:" caption, each workflow
  as a link with a horizontal **progress bar** beside it.
- **FINANCIALS** - empty state reads "No invoices paid or expenses created for
  this project yet."
- **RELATED CONTACTS** with a "+" button; each entry shows name, a role in
  parentheses, a caret, and the email beneath.

## Pass 3c — Leads

**Overview (/app/leads/overview).** Header "Leads" + "+ ADD LEAD". Right side:
"Search Tags..." input with tag icon, an **OVERVIEW | ALL** segmented toggle, a
gear dropdown, and a **LEAD CAPTURE FORMS** button.
Body left: a **NEW LEADS** card, then an **ACTIVE LEADS** card carrying a
"SORT BY: LEAD CAPTURE DATE: NEWEST FIRST" dropdown. Lead rows show an
initial-avatar, "Contact > Project", a red "Project Date Conflict: <date>" line
when the project date clashes, and a status line ("Form: <form name>",
"Project Created: today", "viewed today", "Quote #NNNNNN sent 3 days ago").
Body right: a **Recent Leads Activity** card.

The red **Project Date Conflict** warning is a real, undocumented behaviour worth
copying: 17hats surfaces double-booking risk directly on the lead row.

**All view (/app/leads/all/<letter>).** Same A-Z letter index as Contacts, plus a
right-aligned segmented filter **ALL | HOT LEADS | COLD PROSPECTS**.
Columns are only **NAME, EMAIL, PHONE**. There is no lead-source column in this
list; lead source lives on the project record and in Lead Reporting.

Contact type taxonomy, consistent across screens:
**Clients / Leads / Prospects / Other**, plus **Archived** as a separate state.
"Hot Leads" = Leads, "Cold Prospects" = Prospects.

## Pass 3d — Lead Capture (/app/leads/capture)

One screen headed "Lead Capture" with a **Done** button. Left rail
"LEAD CAPTURE METHODS" + **+ ADD METHOD** dropdown listing exactly two types:
- **Lead Capture Form** - "Create a Contact Form to embed on your site"
- **Lead Capture Email** - "Specify rule for incoming Lead emails"
Both types live in the same list, distinguished by icon (form vs envelope).

**Form editor** (/app/leads/capture/form/<id>/edit).
Tabs **EDIT FORM | PREVIEW**. Buttons **INSTALL FORM** (dropdown) and
**VIEW FORM**, each with its own "?" help bubble.

FORM DETAILS block (with its own EDIT dropdown), exact field labels:
Title, Project Name, Notification, Auto-response, Calendar, Workflow,
After Submitting, Contact Tag(s), Project Tag(s), Enable ReCaptcha,
Transparency, Meta Pixel ID, Google Tracking.
"After Submitting" renders as a mode plus its payload, e.g.
"Display a message" followed by the message text.

FORM BRANDING block: Colors with three hex swatch inputs -
**Button, Accent Font, Background** - and a **Header Image** slot
("There is no Header Image selected.").

**Lead Form Questions** block with **+ ADD QUESTION** dropdown. Question rows
show the label, an "(OPTIONAL)" tag, the mapping line, a per-row caret and a
drag handle. Mapping renders either as "Maps to: <field>" for a single field, or
as "Updates: <group>" plus "Fields: <a, b, c>" for a composite question.
Observed: "Maps to: Lead name", "Maps to: Lead email", and a composite
"Updates: Project date, time, and location /
Fields: Project Date, Start Time, End Date / Time, Location".

**ADD QUESTION menu - 10 types**, in two columns:
| Short Answer   | Space for clients to enter a single line of text |
| Long Answer    | Space for clients to enter a multiple lines of text |
| Yes/No         | Choose a simple yes or no |
| Heading        | Add a Heading anywhere in your questionnaire |
| Lead Source    | Allow leads to select how they heard about you. |
| Choose from a List | Choose one answer from a list of options |
| Checkboxes     | Choose multiple answers from a list of options |
| Date           | Choose a date |
| Text           | Add some text for things such as instructions |
| File Uploader  | Allow your lead to upload a file up to 10 MB |
The descriptions say "questionnaire", so lead forms and questionnaires share one
question engine. Questionnaires are documented as having 13 types, so the
questionnaire editor adds 3 on top of these 10.

**INSTALL FORM dropdown - 4 modes**:
- Link to 17hats Form - "Add link to open 17hats hosted form"
- Link to Dialog Window - "Add link to popup the dialog form"
- Insert Form on Website - "Embed form on a website page"
- Facebook - "Add form to your Facebook page"

**Email rule editor** (/app/leads/capture/rule/<id>). Three blocks only:
- **Email Account** - the connected mailbox the rule watches
- **Email Rule** - a single condition, rendered `If From field contains "<string>"`
- **Options** - **Auto-response** (an email template) and **Calendar**
There is no per-vendor parser or field-mapping table. It is a generic
From-contains rule on a connected mailbox. This corrects the log's assumption
that there is a list of supported senders with field mappings.

## Pass 3e — Lead Reporting / Lead Sources (/app/leads/reporting)

Lead Sources are NOT in Account Settings. They live here.

Page header "Lead Reporting" with a **Learn Mode** switch, a date-range picker
("Date: <from> - <to>") and a **QUICK SELECT** dropdown.
Tabs: **Lead Source** and **Referral List**.

Lead Source tab. Left panel with **+ ADD SOURCE** and three state groups:
**Active Lead Sources**, **Inactive Lead Sources**, **Archived Lead Sources**
(empty state "No Archived Lead Sources"). Each source row carries a drag handle,
a state glyph (green tick = active, dark dot = inactive), the name, and an edit
pencil. So a lead source has three states and a user-defined sort order.
Right panel: sub-filter **Active Sources | Inactive Sources | Active + Inactive**
over a bar chart titled "Acquisitions by source".

Referral List tab. Columns:
**REFERRER NAME, TOTAL, CLIENTS, LEADS, PROSPECTS, OTHER, CONTACT NAME**,
plus a per-row expand chevron. Headers are colour-coded to the contact types.

## Pass 4a — Projects (/app/projects)

Header "Projects", a "Search Projects by name or tag..." box with a tag icon,
a **grid / list view toggle** (two icons), then filter pills
**ACTIVE | CLIENTS | LEADS | ARCHIVED** and a **SORT BY** dropdown.
Note the pills are ACTIVE/CLIENTS/LEADS/ARCHIVED, not the
"All/Active/Leads/Archived" the log guessed.

Pagination is numbered pages with prev/next arrows (this account showed 11
pages), not infinite scroll.

Columns: row checkbox, **PROJECT NAME** (with an initial-avatar), **CLIENT**,
**PROJECT TAGS**, **PROJECT DATE**. A header checkbox selects the page.

**SORT BY options (6):** Project Name: A-Z, Project Name: Z-A,
Client Name: A-Z, Client Name: Z-A, Project Date: Oldest First,
Project Date: Newest First.

Ticking any row checkbox reveals a **BULK ACTIONS** dropdown containing exactly:
**Archive Project, Add Tags, Remove Tags, Add a Workflow, Delete Project.**
This settles the log's open question at line 246: a workflow CAN be applied to
many projects at once, from this bulk menu.

## Pass 4b — Pipelines (/app/pipeline)

Board view header: "Pipelines" + **+ CREATE NEW**, and on the right an **EDIT**
button plus a **LEAD PIPELINE | CLIENT PIPELINE** segmented toggle. So there are
exactly **two pipeline types**, and you view one type at a time.
Under the header the active pipeline's name renders as a link.

Two stat tiles above the board: **LAST 24 HOURS** (count) and
**ACTIVE PROJECTS** (count).

Board is a horizontally scrolling kanban. Each column header is filled with the
phase colour and shows the phase name plus its rule, rendered either as
"Tag: <tag name>" or "Days: <n>", then a large count. Cards show an
initial-avatar, "Contact - Project", and the latest document event as a second
line ("Sent - Quote - Quote", "Paid <amount> - Invoice - #NNN"). Each column
ends with a **Show All** button, so columns are capped and paged, not infinite.

**Phase editor** (EDIT button; same /app/pipeline route).
Left rail lists every pipeline as a draggable row labelled
"<Pipeline Type> - <Pipeline Name>". Right pane "Build Your Pipeline" with an
**OPTIONS** dropdown.

Fields, in order:
- **Pipeline Type**: dropdown (Client Pipeline / Lead Pipeline)
- **Pipeline Name**: text
- Explanatory panel "Creating Your Pipeline Phases", verbatim:
  "Your Pipeline is created with up to 5 Phases, each representing a different
  step in your process. The Phases will correlate with a specific Project Tag.
  Create your Phases by typing a new tag or selecting an existing tag."
- **Phase One Name** (character counter, max **20** chars) + **Project Tag** +
  **Color** (hex swatch). Phase One is always tag-driven; it has no By Tag /
  By Days switch.
- **Phase Two** through **Phase Five**, each with a
  **By Tag | By Days in Prior Phase** switch pair. Selecting By Days swaps the
  Project Tag input for a **Number of Days** input. Each phase also has
  **Name** (max 20 chars) and **Color**.
- **Completed State**: a read-only label "Completed" paired with its own
  **Project Tag** input.
- Footer: **Cancel** and **Save**.

So the model is: pipeline = type + name + up to 5 ordered phases + a terminal
Completed state, where every phase resolves either to a project tag or to an
elapsed-days rule relative to the prior phase, and each phase carries its own
colour. Left the editor via Cancel; nothing was saved.

## Pass 5 — Calendar (/app/schedule)

Toolbar left: first/prev/next/last arrows and a **TODAY** button.
Centre: the period title ("September 2026").
Right: view toggle **DAY | WEEK | MONTH** and a **CALENDARS** dropdown.
Under the title a caption shows the current calendar filter ("ALL CALENDARS").

**There is no agenda or list view.** Only Day, Week and Month. This corrects the
checklist's assumption of a four-view set.

**CALENDARS dropdown** structure:
- "All Calendars" at the top with a tick
- group **My Calendars** - each row is a coloured circular tick plus the
  calendar name. Alongside user-created calendars this account shows three
  system calendars: **Lead Calendar**, **To Do Calendar**, **Workflow
  Calendar**, and the connected Google account address as its own entry.
- group **Team Calendars** - other users' calendars, named
  "<User> - Default Calendar" and "<User> - <calendar name>".
Colour is carried per calendar and is what tints the events in the grid.

Month grid renders events as coloured chips. Timed events are prefixed with a
compact time ("12a", "10a", "6:30a"); all-day events have no prefix.
Clicking a day opens a **"Schedule on <date>"** side popover listing that day's
entries, each tagged "ALL DAY EVENT" where applicable.

**Edit Event modal** (opened from an existing event, then cancelled).
Fields in order:
- **Event Name** - text
- **Description** - rich text editor. Toolbar: paragraph style, Bold, Italic,
  Underline, Strikethrough, bulleted list, numbered list, link, source/code
- **All Day** - checkbox
- **Date/time** - date picker + time picker
- **End date/time** - date picker + time picker
- **Location** - text, marked "(optional)"
- **Repeats** - dropdown, default "No"
- **Calendar** - dropdown
- **Project** - autocomplete, "Search by project or client name"
Footer buttons: **Delete | Cancel | Save**. Left via Cancel.

Note the event links to a **Project**, not to a contact directly.

## Pass 5b — Calendar settings (/app/account/calendar_sync)

Reached from Account Settings > Settings > **Calendars**.

An "ABOUT CALENDAR" panel explains the model: you can create 17hats Calendars,
connect Google Calendars, or both. It states 17hats calendars can be shared out
to Apple Calendar and other apps for viewing, via a help-center link - that is
where the iCal feed lives, it is not an inline field on this page.
Google is described as two-way: you can access, add to and change Google events
inside 17hats, and Google-side changes flow back.

Two tables:
- **17hats CALENDARS** with an **ADD NEW CALENDAR** button.
  Columns: DEFAULT (radio), CALENDAR NAME, STATUS, DEFAULT.
  Every calendar is named "<Owner> - <Calendar Name>", so calendars are owned
  per user. The Lead / To Do / Workflow calendars are ordinary rows here, owned
  by the account owner, not hidden system objects.
- **GOOGLE CALENDARS** with a **GOOGLE CAL SETTINGS** button.
  Columns: DEFAULT, CALENDAR NAME, STATUS, DEFAULT, SYNC.
  The row shows the connected Google address, Active, a Default marker,
  "Last Sync: <date and time>", and a **REQUEST SYNC** button for a manual pull.

## Pass 6 — Workflows

**List (/app/workflows/templates).** Header "Workflows" + **+ CREATE TEMPLATE**,
a "Find a workflow..." search, and tabs
**OVERVIEW | ACTIVE | PAUSED | TEMPLATES**.
So "Active Workflows" and "Paused" are peer views alongside Templates, and
**Paused is a first-class workflow state**, which the log did not have.

Templates table columns:
**TEMPLATE NAME, WORKFLOW ITEMS (TOTAL NUMBER)** (a count badge),
**CALENDAR NAME, START/STOP** (value "Both"),
**DATE ADDED OR UPDATED (IF AVAILABLE)**.

**Template editor (/app/workflow/<id>/edit).**
Header: workflow name, "Back to Workflows", an **EDIT** dropdown.
Left pane is grouped into **phases** ("Phase 1"), each phase with its own
**ADD** dropdown and collapse caret. So workflow steps are grouped into phases,
same vocabulary as pipelines but a separate concept.

Each step row shows an icon by type, the step title, a
**"When: <rule>"** line, and an **"Assigned to: <user>"** line, plus a caret menu
(**Edit / Delete**) and a drag handle.
Rendered "When" strings observed:
"Immediately after activating this workflow (auto)",
"Immediately after activating this workflow (approve)",
"Immediately after all previous items are complete".
The trailing **(auto)** / **(approve)** is how the send mode surfaces in the list.

Right pane **ABOUT THIS WORKFLOW**: Name, Calendar. Then
**START / STOP AUTOMATION** with an on/off switch, and two tag pickers:
**START WORKFLOW TAGS** and **STOP WORKFLOW TAGS**, each a chip field with
"Add a Tag (optional)". The stop list can contain a special **END WORKFLOW**
chip. This is the automation backbone: **workflows are started and stopped by
project tags**, which is how the account chains one workflow into the next.

**ADD menu - exactly 3 step types:**
- **To Do** - "You'll check these items off as you get them done"
- **Action** - "Automatically send emails, questionnaires, and more"
- **Pause** - "Pauses the Workflow until you click to continue"

**Edit Action Item modal** - fields in order:
- **Action** dropdown
- **Template** dropdown, with contextual helper text under it
  (e.g. "This template has both a contract and an invoice included.")
- **Email** dropdown (which email template carries the document)
- **Prompt** dropdown
- **When**: a numeric **days** input, a help bubble, and a base-date dropdown
- **Add Tags** / **Remove Tags** chip fields ("Add a Project Tag (optional)")
- an **Action Completed:** panel with its own **Add Tags** and **Remove Tags**
  chip fields plus a **Completed** dropdown
- **Assigned To** dropdown
- **Notes** textarea, "(optional)"
- **Cancel / Save**

**Action dropdown - 10 options, in order:**
Send an Email, Send a Questionnaire, Send a Quote, Send a Contract,
Send an Invoice, Start a Workflow, Change Calendar, Confirm the Booking,
Archive the Project, Add/Remove Tags.

**Prompt dropdown - exactly 2 options:**
**"Approve before sending"** and **"Send automatically"**.
These are the exact labels for what the log called the automatic vs
"upon review" toggle.

**When base-date dropdown - exactly 5 options, verbatim:**
after activating this Workflow
before the Base Date
on the Base Date
after the Base Date
after all previous items are complete

**Completed dropdown - exactly 6 options, verbatim:**
When sent
When quote is accepted
When contract is signed
When the first invoice payment is made
When invoice is fully paid
When all items have been completed

The tag add/remove pairs appear TWICE per action: once fired when the step runs,
once fired when the step's completion condition is met. That two-stage tagging is
the mechanism behind the account's chained "Start Workflow X" / "Stop Workflow X"
tags. Left the modal via Cancel; nothing was saved.

## Pass 6b — To-Do (/app/tasks, routes to /app/tasks/list/<id>)

Header "To-Do Lists" + **+ ADD TO-DO**. Top right a **SHOW FOR: ALL** dropdown
whose options are **All**, **Unassigned**, then one entry per team member.

Left rail **MY LISTS** with a **+ CREATE LIST** button. The first entry is a
built-in smart list, **Due & Upcoming**, carrying two count badges - red for
overdue and amber for due-soon. Below it come the account's own numbered lists,
and then auto-created per-project lists named "<Project> <Client>".
Lists therefore come in three flavours: the built-in smart list, user lists, and
project-bound lists.

Main pane header repeats the list name ("Due & Upcoming Week") with its own
**+ ADD TO-DO**. Columns: completion checkbox, **TO-DO**, **ASSIGNED TO**,
**WHEN**. The TO-DO cell is two lines: the task title, then a breadcrumb
"<Contact> - <Project> - <Workflow>" when the item came from a workflow.
The WHEN cell is a date chip, red once overdue, and can carry a time
("JUL 13TH AT 8:00AM").

**Add To-Do modal** fields, in order:
**Name**, **List** (dropdown, placeholder "Select Reminder List"),
**Due On** (a date picker plus a separate time picker),
**Repeats** (dropdown), **Assigned To** (dropdown),
**Calendar** (dropdown), **Notes** (textarea). Cancel / Save.

**Repeats options - exactly 4: None, Weekly, Monthly, Yearly.**
There is no Daily and no custom interval. Left via Cancel.

Note the internal name for a to-do list is "Reminder List", visible in the
List placeholder - useful vocabulary for the data model.

## Pass 7a — Template library controls

**FILTER dropdown - exactly 6 entries:**
View all, Email, Invoices, Quotes, Contracts, Questionnaires.
Choosing one collapses the page to that single section
(the label becomes "FILTER: QUESTIONNAIRES" etc.).
Alongside it: **IMPORT**, **NEW TEMPLATE** (dropdown), a
"Find a template..." search, and **VISIT MARKETPLACE**.

## Pass 7b — Questionnaire template editor

Reached by clicking a template name. Page title "Questionnaire Template",
with **Cancel** and **Save** in the header.

**Questionnaire Options** panel, subtitled "Enter a title and due date for the
questionnaire". Three fields only: **Title**, **Display Title**, **Due Date**
(date picker). Title is the internal name, Display Title is what the client sees.

Then an **ADD QUESTION** dropdown and a **SORT QUESTIONS** button. An ADD
QUESTION button is repeated between every question block, so you insert at a
position rather than only appending.

Each question block renders: a type icon, the question text, the type name
underneath, a **REQUIRED** badge when required, a "Maps to: <field>" line, and
edit-pencil plus delete-X controls on the right.

### Question types - there are 12, not 13
The log's "13 total" is wrong. The ADD QUESTION menu holds exactly twelve,
in two columns:

| Short Answer   | Space for clients to enter a single line |
| Long Answer    | Space for clients to enter multiple lines |
| Yes/No         | Choose a simple yes or no |
| Choose from a List | Choose an answer from a list |
| Checkboxes     | Choose multiple answers from a list |
| Date           | Choose a date |
| Heading        | Text for things such as headings and titles |
| Text           | Text for things such as intros and directions |
| Related Contact| Get info about related contacts |
| Image          | Add an image (jpg/png) |
| File Uploader  | Allow your contact to upload a file up to 10 MB |
| Project Details| Collect project-related information |

Compared with the Lead Capture Form's 10 types: questionnaires drop
**Lead Source** and add **Related Contact**, **Image** and **Project Details**.

### Question editor modal
Titled with the question type ("Short Answer"). Fields:
- **Question** - rich text, toolbar B / I / U / strikethrough / link, plus an
  **INSERT TOKEN** dropdown
- **Maps To** - searchable dropdown with a "Filter" box
- **Required** - a single checkbox labelled "This is a required question"
- **Cancel / OK**

**Maps To list** begins with **Nothing**, then built-in contact fields:
Contact name, Contact title, Company name, Email, Phone number, Website,
Address line 1, Address line 2, Address country, Address city, Address zip code,
Person referred by, Facebook Username, LinkedIn Username, Twitter Username,
Instagram Username. Then project built-ins including Project Notes and
Client Billing Address, then **every account custom field** by its own name.
So mapping targets are: contact fields + project fields + custom fields.

### INSERT TOKEN picker
A searchable list with a "Filter" box. Every token is rendered as a bracketed
category followed by a label. **Six categories** appear, in this order:
**[contact]**, **[project]**, **[project-dates]**, **[client-portal]**,
**[account]**, **[scheduling]**.
Examples verbatim:
[contact] First Name, [contact] Last Name, [contact] Full Name,
[contact] Company Name, [contact] Address, [contact] Email Address,
[contact] Phone Number, [contact] Account Number,
[project] Project Name, [project] Project Location, [project] Project Date,
[project] Project Lead Source, [project] Vital Notes,
[project-dates] Project End Date, [project-dates] Project Start Time,
[project-dates] Project End Time,
[client-portal] Client Portal URL, [client-portal] Client Portal Password,
[client-portal] Password Protected,
[account] First Name,
[scheduling] Location Name, [scheduling] Location Address,
[scheduling] Location Notes, [scheduling] Booking Date,
[scheduling] Booking Start Time, [scheduling] Booking End Time,
[scheduling] Service Duration.
Account custom fields also appear as **[project] <field name>** tokens, so a
custom field is simultaneously a Maps To target and a merge token.

Left the editor via Cancel; nothing saved.

## Pass 7c — Quote template editor

Page title "Quote Template" with Cancel / Save.

**Quote Options** panel, subtitled "Set the due date, tax rate, discount, and
other invoice options". Left column: **Name**, **Display Title**,
**Valid Until** (date, marked Optional), **Tax:** (a "+" button to add a rate,
then a checkbox list of the account's tax rates each shown as
"<name> (<percent>%)"), **Discount:** (a unit dropdown, e.g. Percent, plus an
amount field).

Right column, three checkboxes that decide what the quote bundles:
- **Contract** - "Include a contract with your quote that clients can digitally sign"
- **Invoice** - "Automatically display an invoice upon signing of this quote"
- **Payment Schedule** - "Include a payment schedule defining when payments are due"

Ticking those adds matching blocks below, each with a summary line and
pencil/delete controls:
- **Contract** - summary is the contract template name
- **Invoice** - summary lists its switches, e.g. "Accept Online Payments. Accept Tips."
- **Payment Schedule** - summary reads like
  "50.00% on receipt. Remainder on 3 days before project start date."
Then an **ADD** dropdown for adding more blocks.

So a Quote in 17hats is a **packet**: quote + contract + invoice + payment
schedule in one client-facing document. That is the core structural idea to copy.

### Line-item sections - exactly three kinds
- **Standard Quote Items** - "These items are shown as-is, with no choices for
  the client". Columns: ITEM / DESCRIPTION, QUANTITY, PRICE, TAXABLE.
- **"Choose One" Options** - "Clients must pick one (and only one) of these
  options". Column: ITEM / DESCRIPTION (price shown per row).
- **"Choose Any" Options** - "Clients may pick any (or none) of these options".
  Columns: ITEM / DESCRIPTION, DEFAULT, QUANTITY, PRICE, TAXABLE.
Each section has its own **ADD ITEM** button. Rows carry a drag handle, an
optional photo thumbnail, rich HTML description, and a taxable tick, pencil and
delete X. The section footer shows Subtotal, a line per applied tax rate named
after the rate, and Total.

Rows can also display a grey automation line, verbatim:
"Workflow <name> will start when invoice receives its first payment."

### Per-item editor (modal titled with the section kind, e.g. "Choose Any" Option)
Fields in order:
- **Internal Name** (with an "Insert Token" link beneath)
- **Display Name**
- **Description** - rich text; toolbar B / I / U / strikethrough / bulleted list /
  numbered list / link / horizontal rule / image, plus **INSERT TOKEN**
- **Quantity**
- **Price** with a **Taxable** checkbox beside it
- **Tax:** checkbox list of the account's tax rates
- **Income Category:** dropdown (e.g. Service Income) - this is what wires a line
  item to bookkeeping
- **Options:** "Make this item selected by default" checkbox, and
  "Allow clients to choose a quantity from [min] to [max]" checkbox with two
  numeric inputs
- **Start Workflow:** dropdown
- **Start When:** dropdown - options **"When First Payment is Received"** and
  **"When Invoice Paid in Full"**
- **Photo:** image preview with **RESET** and **CROP** buttons
- **Options:** "Save this item for use later" checkbox (promotes the line into
  Products & Services)
- Cancel / Save

The per-item workflow trigger is the most interesting find here: choosing an
add-on on a quote can kick off its own workflow once money arrives.

## Pass 7d — Contract template editor

A modal titled "Contract". Fields:
- **Title**
- **Display Title**
- **My Signature:** dropdown - exactly three options:
  **Not required**, **Sign upon creation**, **Counter-sign after client(s)**.
  That is the countersign control the checklist asked about.
- Body: rich text. Toolbar: paragraph style, B, I, U, strikethrough, bulleted
  list, numbered list, link, image, horizontal rule, source view, then
  **INSERT TOKEN** and **INSERT FORM**.
- **Due Date:** date picker
- Cancel / Save

**INSERT FORM dropdown - exactly 7 client-fillable field types:**
Checkbox (optional)
Checkbox (required)
Initials (required)
Long text input (optional)
Long text input (required)
Short text input (optional)
Short text input (required)
Note **Initials exists only in a required variant**; every other type comes as an
optional/required pair. The client signature itself is not in this list - it is
implied by the document type, with only the business side's signature configured
via My Signature.

## NOT COVERED in Pass 7
- Invoice template editor's Invoice Options panel, payment schedule builder and
  reminder settings. The account's only two invoice templates are throwaways
  named "DELETE ...", and the template-type filter proved flaky. The
  account-level equivalents live under Account Settings > Money Matters >
  Invoice Options and > Reminders.
- The client-facing preview of a sent document (accept / sign / pay UI, the
  partial-payment "Other" field, the tip control) and the signature capture
  draw-vs-type UI. Opening a live client-facing document risks recording a
  client "viewed" event, which the read-only rule forbids.

## Pass 11a — Users and roles (/app/account/users)

Header "Users" + **Add User**. Two tables:
- **TEAM (n)** - preceded by "You are an **Owner** of <Brand>." and
  "Manage your team's roles and permissions below."
  Columns: **Name, Login, Type**. Clicking a row expands it to reveal an
  **EDIT** button and a **Delete User** link.
- **ALL TEAM MEMBERS (n)** - Columns: **Name, Login, Brands**.
  The Brands column confirms 17hats supports **multiple brands per account**,
  with users assigned per brand.

**Edit User modal** fields: **Name**, **Email**, **Email From**, and **Role**.
The Role dropdown has exactly three entries:
**Select Role / Team Member / Admin** (Owner is the account holder and is not
selectable). Cancel / Update.

**There is no granular permission checklist.** The checklist item asking for
"the full permission checklist" has no counterpart in the product - access is a
three-level role, nothing more. That is a real simplification worth noting, and
an obvious place a clone could do better.

Seat pricing notice, verbatim: "You have reached the current limit of 3 users.
Additional users can be added at 5.00/Month. If the same user is added to
multiple brands, it will only count as one user."

## Pass 11b — Invoice Options (/app/account/payment)

**GLOBAL INVOICE SETTINGS** with an **EDIT INVOICE OPTIONS** button and an
inline pointer: "Invoice Reminders can be set up under Account Settings >
Email Settings > Reminders".
Settings shown as label/value:
**Currency** (e.g. US Dollar (USD)), **Invoice Footer** (free text),
**Tips** ("Tips are enabled, billed to category: <bookkeeping category>"),
**Saving Card Data** (enabled/disabled),
**Automatic Payments** ("Auto Payments for Recurring Billing and Payment Plans
are disabled").

**ABOUT PAYMENT OPTIONS** - the merchant section. **Stripe is the only
processor offered.** Buttons when connected: **Manage Account**,
**Stripe Dashboard**, **Disconnect**. Marketing copy states all major card
networks, digital wallets, payouts in as little as 2 business days, and
"17hats does not add additional fees on top of Stripe's fees."
Payment method **Settings** checkboxes:
- Accept digital wallets (Apple Pay and Google Pay)
- Accept Link
- Accept ACH payments (eChecks) (U.S. only).
- Disable Credit Card payments

## Pass 11c — Reminders (/app/account/reminders)

ABOUT REMINDERS, verbatim: "Send automatic reminders for your upcoming and past
due documents. Document reminders will follow your set rules and do not need to
be included in the workflow." and "Reminder will not send if no due date is set
on the document."

**Four reminder groups**, each with a master on/off switch:
**QUESTIONNAIRE, QUOTE, CONTRACT, INVOICE**.
Each group contains **Email: Upcoming Reminder** and **Email: Past Due
Reminder**, each with its own switch, a plain-English rule summary and an
**Edit** link. Invoices carry a **third** entry,
**"Email: Upcoming Reminder and Past Due"**, described as
"Applies rules from Upcoming and Past Due individual settings."

Rule grammar observed, verbatim:
- "1 day before due date" / "3 days before due date"
- "1 day after due date; Repeat monthly; End after 12 occurrences"
- "1 day after due date; Repeat weekly; End after 1 occurrence"
- "1 day after due date; Repeat weekly; End after 2 occurrences"
So a reminder rule is: offset (n days before/after due date) + repeat cadence
(weekly / monthly) + a stop condition (end after n occurrences).
This answers the log's open question about reminder cadence.

## Pass 11d — Plan Information (/app/account/subscription)

Sections: **CURRENT PLAN AND RECEIPTS** (with a CHANGE PLAN button), then
receipt groups **Template purchases**, **Add-on purchases** and
**Subscription payments**, each line with a **PRINT** link; then
**MODIFY YOUR PLAN** (ADD MODULES / Change Plan), **CREDIT CARD**
(with CHANGE CARD), **PAUSE ACCOUNT**, and **CANCEL ACCOUNT**.
(Account-specific amounts, dates and card details deliberately not recorded.)

**Pause Account** is a genuine product feature worth copying: for a small
monthly fee the account freezes - no new clients, documents or workflows - but
existing documents stay live, clients can still pay invoices, complete
documents, use Online Scheduling and the Client Portal, and Lead Capture Forms
plus their attached workflows keep running.

**Plan and module pricing, from the live Add Modules page:**
Plans: **17hats Free CRM** and **17hats Subscription**.
Subscription lengths: **Monthly $60/month**, **Yearly $600/year** (Save
$120/year), **Bi-Yearly $800/biyearly** (Save $400).
**Only one add-on module is offered: Bank Connections - $5/month**, described as
connecting one or more bank accounts so expenses flow automatically into 17hats
Bookkeeping. Modules are billed monthly to the card on file.
Texting appears not as a module but as a one-off "Texting Setup" add-on purchase.
This corrects the log's add-on pricing section, which assumed a larger module
catalogue.

## Pass 11e — Integrations (/app/account/integrations)

Nine integration tiles, each with a state badge and a feature list:
1. **ZOOM** - add a Zoom meeting to Online Scheduling bookings
2. **QUICKBOOKS** - new invoices and payments sync to QuickBooks Online; can
   import existing 17hats invoices. US, Canada and UK only. Warns you must
   enable QuickBooks Tax Settings or invoice amounts will be wrong.
   Buttons when connected: SETTINGS, IMPORT INVOICES, DISCONNECT
3. **ZAPIER** (BETA) - create an API key to authenticate Zapier to 17hats;
   features limited to exporting and importing contacts
4. **N-VU** (BETA) - orders and galleries onto projects, generating invoices and
   bookkeeping entries
5. **FUNDY** - import orders, generating invoices and bookkeeping entries
6. **PROSELECT** - same shape as Fundy
7. **SHOOTPROOF** - orders and galleries onto projects
8. **DISRUPTOR MARKETING** - syncs tagged contacts; a contact tagged 'Client'
   creates a 17hats Contact and Project, details stay in sync both ways, and the
   contact source feeds Lead Source Reporting
9. **CLICKBOOK** - new Clickbook leads create a 17hats Contact and Project

State labels used: ENABLED, CONNECTED, NOT ENABLED, NOT CONNECTED, plus a BETA
badge. Note how photography-industry-specific the catalogue is (N-Vu, Fundy,
ProSelect, ShootProof) - a strong signal about 17hats' core market.

## Pass 11f — Brand Preferences (/app/account/preferences)

Four tabs: **Account | Images | Color & Fonts | Text**.

**Account tab**: **BACKGROUNDS** (a swatch plus a "Change Background" button),
**SUBDOMAIN** - "Your current 17hats subdomain: https://<name>.17hats.com/ is
the url your Contacts see when viewing documents and pages", an editable
subdomain field with a fixed ".17hats.com" suffix and RESET / SAVE - and
**TIME ZONE**, with the warning that the computer, Google Calendar and 17hats
time zones must match. Each block has its own RESET / SAVE pair.

**Color & Fonts tab** (/app/account/preferences/colors-and-fonts). Scope
statement, verbatim: "Colors and font customization will be displayed in all
client facing materials including: All Documents (Questionnaires, Quotes,
Contracts and Invoices), Lead Capture Forms, Client Portal and Emails."
**COLORS - four settings**: Button Color ("Change the color of all client facing
buttons"), Accent Font Color ("...special interest areas. We recommend a dark
color as choosing a lighter color will affect readability"), Highlight Color
("...highlight color of selectable items"), Background Color.
**FONTS - two settings**: Accent Font, Email Button Font.
**PREVIEW** panel with two sub-tabs, **Brand Preview** and
**Email Button Preview**, rendering a live sample document complete with a
"Select One" option group and a Sample Button.

So brand theming is deliberately narrow: 4 colours + 2 fonts + background +
logo, applied across every client-facing surface.

## Pass 10 — Client Portal (/app/account/client_portal)

**GENERAL SETTINGS.** Description, verbatim: "Client Portal is a secure location
where your Clients can Accept Quotes, Sign Contracts, Complete Questionnaires,
Pay Invoices and View Event details. A portal is created for each Contact and
will display all active Projects for that Contact."
- **Client Portal Enabled** switch. Note: "Disabling Client Portal will not
  affect any contact/project information within your account."
- **Universal Client Portal Link** - `https://<subdomain>.17hats.com/portal/`
  with **COPY LINK** and **VIEW PORTAL** buttons. Important nuance stated on the
  page: the universal link only works for clients who have **password
  protection** enabled, and that password setting lives per contact, inside the
  project page's Client Portal settings. Without password protection a client
  must use the personalised link from their project page.

**GLOBAL DESIGN CUSTOMIZATION SETTINGS.**
- **Cover Image** with an **UPLOAD** button and the guidance
  "For best results upload image in 1140x220px."
- **Header Logo** switch ("Logo will display in Client Portal.")
- **Default Welcome Message** - a rich text editor with its own INSERT TOKEN
  dropdown and a **SAVE MESSAGE** button.

**PREVIEW PORTAL** - a live in-page preview, captioned "See what your changes
look like below in real time. Font and colors can be adjusted in your Brand
Preferences."

**The portal itself**, as rendered in the preview:
- Top tabs: **Documents | Event Details | My Information**
- Header summary figures: **PAST DUE** and **BALANCE**
- Document filter pills: **ALL DOCUMENTS | INVOICES | QUOTES | QUESTIONNAIRES**
  (note: contracts are not a filter option)
- Document table columns: document type, project name, **Amount**, **Status**.
  Sample status values: Open, Sent.

Per-contact portal controls, seen earlier on the contact page: a CLIENT PORTAL
switch, **COPY LINK**, **VIEW CLIENT PORTAL** and **EMAIL LINK** buttons, plus a
caret revealing that contact's password protection settings. The EMAIL LINK
button was deliberately not clicked.

## Pass 8 — Online Scheduling (/app/scheduling/overview)

Page header "Online Scheduling" with a **Turn Off/On Online Scheduling for
Brand** master switch. Four tabs: **Services | Availability | Settings | Help**.

**Services tab.** "SERVICES - Set which types of services you provide" with an
**ADD SERVICE** button. Columns: SERVICE NAME, DURATION, plus a per-row caret.

**Service Settings editor** - a full page with a **Learn Mode** switch and
Cancel / Save, organised into **12 numbered sections**:
1. **SERVICE DETAILS** - **Service Type** (**Individual** or **Group**),
   Name of Your Service (Required), Service Description (Required) as rich text
   carrying an **AI OPTIONS** dropdown. 17hats has AI copy assistance here.
2. **SERVICE TIME FRAME** - Service Duration (Required, minutes),
   Time Buffer Before Appointments (minutes), Time Buffer After Appointments
   (minutes), and **Service Start Time** with four choices:
   **On the hour / Every 15 minutes / Every 30 minutes / Continuous**
3. **SERVICE QUESTIONS** (Optional)
4. **ONLINE PAYMENTS** (Optional)
5. **SERVICE LOCATION** (Optional)
6. **BOOKING MESSAGING** (Optional)
7. **PROJECT MANAGEMENT** (Optional)
8. **APPROVAL SETTINGS** (Optional)
9. **CONFIRMATION SETTINGS** - **Calendar** (Required), **Workflow**
   ("Choose a workflow to start" / "Do not start a workflow" / the template
   list), and **Automatic Email: Confirmation Email** whose dropdown offers
   "Select a Confirmation Email", "Create New Email", "Do not send an email",
   then the scheduling email templates, with Edit / Delete beside it
10. **CANCELLATION SETTINGS** - Automatic Email: Cancellation Email (same
    dropdown shape), plus **Add Project Tags upon cancellation** and
    **Remove Project Tags upon cancellation**
11. **REMINDER SETTINGS** (Optional)
12. **TRACKING KEYS** (Optional) **BETA**

**Availability tab.** "SCHEDULES - Set availability for your services" with
**ADD SCHEDULE**. Each row shows the schedule name and its public **Link** of the
form `https://<subdomain>.17hats.com/p#/scheduling/<token>`, with **copy** and
**view** actions.

**Schedule Settings editor** - Learn Mode switch, Cancel / Save,
**6 numbered sections**:
1. **NAME & SERVICES** - Availability Schedule Name; **Public Link & Embed
   Script** with **Copy / Embed / View**; **Services Available on This Schedule**
   (add from a picker; each attached service shows its duration and its own
   **Direct Link** with copy/view, so a single service can be linked directly)
2. **SCHEDULING HEADER IMAGE** - **UPLOAD IMAGE** / **ADD FROM GALLERY**
3. **TEAM MEMBERS** - "Select Team Members That Offer Service(s)"
4. **CALENDAR CHECKS** - "Choose Calendar(s) to cross-check" (multi-select over
   every 17hats and Google calendar), and
   **"Override The Following Availability Schedules"** (pick other schedules this
   one takes precedence over)
5. **BOOKING LIMITATIONS** - three rules:
   "Prevent Clients from Scheduling a New Appointment **less than N hours in
   advance** / **more than N days in the future**";
   "Limit the Number of Time Slots Booked **Daily** (n per day) /
   **Weekly** (n per week)";
   "Prevent Cancelling or Changing Appointments **less than N hours in advance**"
6. **CALENDAR AVAILABILITY RULES** - an **ADD RULE** button over a table with
   columns **FREQUENCY, SELECTED DAYS, DATE START, DATE END, TIME START,
   TIME END** and an Edit link, beneath a live Day/Week/Month calendar preview
   showing the resulting open hours.

**Bookings (/app/scheduling/bookings).** Header "Bookings" with a **SETTINGS**
button and three tabs: **To Confirm | Upcoming | Past Bookings**.
Empty state reads "No Bookings to Confirm".

**Public booking page** (opened read-only, nothing booked). Branded with the
account logo and a three-step tab strip **DATE & TIME | CONTACT INFO |
CONFIRMATION**. Left is a month calendar with unavailable dates greyed out;
right shows the service name and description, a **Select Your Time Zone**
dropdown, and the instruction "Please select a date on the calendar with
available times. Dates with availability will appear in black." Footer carries
the business name, email, phone and website.

## Pass 9 — Bookkeeping and Reports (/app/accounting/transactions/all)

Header "Bookkeeping" with buttons **REFRESH ACCOUNT**, **NEW INCOME**,
**NEW EXPENSE**, a **REPORTS** dropdown and a gear dropdown.
Tabs: **All Transactions | To Be Categorized (count badge) | Categorized**.

Filter row: **All accounts**, **All Categories**, **All Types**, **From** date,
**To** date, **Amount**, **Keywords ...**, then **Search** and **Reset**.
Bulk-action controls sit above it: **CATEGORIZE** (dropdown), **VERIFY**,
**DELETE**, **ASSIGN TO PROJECT**.

Ledger columns: row checkbox, **DATE** (sortable), **DESCRIPTION** (with a
receipt-attachment icon), **RECEIPT**, **CATEGORY**, **AMOUNT**, per-row caret.

Structurally important: **one invoice payment explodes into several ledger
rows**, generated automatically and named predictably:
"Payment for invoice #N - <client>" (category Service Income),
"Sales tax for invoice #N" (category is the named tax rate),
"Stripe processing fees (for invoice #N)" (category Merchant Fees), and
"Tip for invoice #N - <client>" (category Tips).
Expense amounts render red and negative, income green.

**REPORTS dropdown - exactly 6 reports:**
Profit & Loss, Sales Tax, Upcoming Receivables, Aged Receivables,
Client Sales, Product Sales.

**Gear dropdown - exactly 5 items:**
Add Manual Account, Manage My Accounts, Manage My Categories,
Import Transactions, Export Transactions.

## Pass 9b — Documents / Invoices (/app/invoices/invoices/all)

The left-nav "DOCUMENTS" item lands on the invoices route. Header "Documents"
with an **+ ADD DOCUMENT** dropdown and tabs
**INVOICES | QUOTES | CONTRACTS | QUESTIONNAIRES** plus a search box.

**Five header stat tiles**, each showing a count and a total, in this order:
**PAYMENTS THIS YEAR** (green), **PAST DUE** (red), **NEXT 30 DAYS** (blue),
**NEXT 60 DAYS** (blue), **REMAINDER OF YEAR** (blue).

Below them two sub-navigation rows. Left:
**Single Invoices | Recurring Invoices | Payments | Outstanding Payments**.
Right: **Settings | Sales Tax Report | Client Report | Templates** and a
**+ NEW INVOICE** button. Then a "Filter - All" dropdown.

Invoice table columns: **INVOICE #** (sortable), **STATUS**, **CLIENT**,
**PROJECT**, **CREATED DATE**, **DUE DATE**, **AMOUNT**, **BALANCE**.
Status values observed: Open, Paid.
