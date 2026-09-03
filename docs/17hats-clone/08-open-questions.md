# Open questions and verification list

## Resolved by the in-app walkthrough (2026-09-03)

The read-only Claude in Chrome pass has been run. Full detail is in
`01-research-log.md`, Addendum B; screenshots are in `screens/`.

1. **Left-nav labels and order — resolved.** DASHBOARD, CONTACTS, LEADS,
   PROJECTS, CALENDAR, PIPELINES, BOOKINGS, TO DO, DOCUMENTS, WORKFLOW,
   BOOKKEEPING, plus a pinned REFER A FRIEND button. LEADS expands to ALL
   LEADS / CAPTURE FORMS / REPORTING. **There is no Quick Look panel** in the
   current product.
2. **Questionnaire question types — resolved, and the count was wrong.**
   There are **12**, not 13: Short Answer, Long Answer, Yes/No, Choose from a
   List, Checkboxes, Date, Heading, Text, Related Contact, Image, File
   Uploader, Project Details. Lead Capture Forms expose 10 of the same engine's
   types, dropping Related Contact / Image / Project Details and adding Lead
   Source. Mapping is a per-question "Maps To" dropdown whose targets are
   built-in contact fields, built-in project fields, and every account custom
   field.
3. **Signature — partly resolved.** The business side is a **My Signature**
   dropdown with Not required / Sign upon creation / Counter-sign after
   client(s). Client-fillable fields come from **INSERT FORM**: Checkbox
   (optional/required), Initials (required only), Long text input
   (optional/required), Short text input (optional/required). **Still open:**
   the client-side draw-versus-type capture UI and the PDF download location,
   both of which need a live client-facing document.
5. **Workflow due-rule wording and completion rules — resolved.**
   The When control is a numeric days field plus a dropdown with exactly five
   options: *after activating this Workflow, before the Base Date, on the Base
   Date, after the Base Date, after all previous items are complete.*
   The automatic-versus-review control is called **Prompt** and has exactly two
   options: **Approve before sending** and **Send automatically**; the step list
   renders these as a trailing "(approve)" or "(auto)".
   The **Completed** dropdown has six options: When sent, When quote is
   accepted, When contract is signed, When the first invoice payment is made,
   When invoice is fully paid, When all items have been completed.
   Step types are just three: To Do, Action, Pause. Actions are ten: Send an
   Email, Send a Questionnaire, Send a Quote, Send a Contract, Send an Invoice,
   Start a Workflow, Change Calendar, Confirm the Booking, Archive the Project,
   Add/Remove Tags.
6. **Contact-level notes — resolved: they do not exist.** The NOTES tab, and
   the whole EMAILS / TEXTS / FILES / TO DO / EVENTS / BOOKINGS / PHONE LOG /
   TIME LOG / ACTIVITY strip, sits inside project context. Switching the
   project switcher on one contact swapped the entire note list.
7. **Projects list columns and bulk actions — resolved.** Columns are
   PROJECT NAME, CLIENT, PROJECT TAGS, PROJECT DATE. Filters are
   ACTIVE / CLIENTS / LEADS / ARCHIVED. Bulk actions are exactly Archive
   Project, Add Tags, Remove Tags, Add a Workflow, Delete Project.
8. **Calendar views and event editor — resolved.** Only **Day, Week and
   Month**; there is no agenda or list view. The event editor holds Event Name,
   Description (rich text), All Day, Date/time, End date/time, Location,
   Repeats, Calendar and Project, with Delete / Cancel / Save. Events attach to
   a **Project**, not directly to a contact.
9. **Client portal layout — resolved.** Tabs Documents / Event Details / My
   Information, header figures PAST DUE and BALANCE, and document filter pills
   ALL DOCUMENTS / INVOICES / QUOTES / QUESTIONNAIRES. Note contracts are not a
   filter option. Table columns: document type, project, Amount, Status.
10. **Monthly document-send limits — resolved: none are surfaced.** Nothing in
    Plan Information or the Add Modules page mentions send caps. Treat the old
    tier limits as historical.
11. **Add-on prices — resolved, and smaller than assumed.** The only add-on
    module offered is **Bank Connections at $5/month**. Extra users are
    **$5/month** beyond the included three. Texting appears as a one-off
    "Texting Setup" purchase, not a module. Plans are 17hats Free CRM and
    17hats Subscription at **$60/month, $600/year or $800/bi-yearly**.
12. **Processor list — resolved: Stripe only.** The Invoice Options page offers
    Stripe and nothing else. **PayPal is gone.** Per-method switches are
    digital wallets (Apple Pay / Google Pay), Link, ACH eChecks (US only), and
    a "Disable Credit Card payments" option. The Integrations page carries nine
    tiles: Zoom, QuickBooks, Zapier (beta), N-Vu (beta), Fundy, ProSelect,
    ShootProof, Disruptor Marketing, Clickbook.

## Closed by the test-contact pass (same day)

With the owner's permission, the account's **test contact** was used to open
client-side views. Detail is in `01-research-log.md`, **Addendum C**.

- **Signature capture — resolved: type only.** The contract's client-side
  signature block prompts "To indicate your acceptance of the above, sign
  electronically below.", then gives each signatory a text input placeheld
  **"Type your name"** and a **Sign Contract** button. There is no drawing
  canvas and no upload. Signing is **sequential**: the second signatory's
  button stays disabled until the first has signed.
- **Quote packet flow — resolved.** The client sees a **step tab strip** across
  the top of the document: Quote, then the contract by name, then Invoice.
  Completed steps carry a tick; later steps are greyed out and unclickable
  until the earlier ones are done.
- **Client portal — two additions to what the settings preview showed.** Filter
  pills carry live counts and only appear for document types the contact
  actually has, and a **Project Filter** dropdown spans all of that contact's
  projects. The third column is context-sensitive: Date Signed for contracts,
  Date Accepted for quotes.
- **Archiving a project expires its client-facing document links.** The live
  view of a quote on an archived project returns "The information you are
  looking for is no longer available."

## Still open after the walkthrough

1. **Quote accept and decline controls, and the full set of quote/invoice
   status names.** The test contact's only client-visible quote is already
   Accepted, so its quote step renders read-only, and its unaccepted quotes sit
   on an archived project whose links have expired.
2. **The invoice pay screen**, and with it the partial-payment "Other" amount
   field and the tip control. 17hats only materialises the invoice after the
   quote is accepted and the contract signed, so no invoice exists on the test
   contact. Both this and item 1 need a fresh quote-plus-invoice packet sent to
   the test contact on an active project, which is a send and therefore the
   owner's call.
3. **2FA and security settings.** Not found. Account Settings has My Account,
   Brand Preferences, Email Settings, Calendars, Client Portal, Online
   Scheduling, Users, Change My Login, Referrals, Plan Information,
   Integrations, the template sections, Money Matters and a Restore/Reset
   group. Nothing resembling two-factor authentication was visible, but
   "Change My Login" was not opened because it is a credential screen.
4. **Mobile app capabilities.** Not testable from a desktop browser session.
5. **Invoice template editor internals** — the Invoice Options panel, payment
   schedule builder and per-template reminder settings. The account's only two
   invoice templates are throwaways and the template-type filter behaved
   erratically. The account-level equivalents were captured instead.
6. **Snooze durations on dashboard alerts** and the dashboard's **Grouping**
   sort mode. Both need a click that mutates state, so neither was exercised.
7. **Global search behaviour.** Requires typing into a field.

## Corrections the walkthrough forces on the rest of the docs

- Questionnaire question types: **12, not 13**.
- The navigation has two modules the log never listed as top-level:
  **PIPELINES** and **BOOKINGS**.
- **Paused** is a first-class workflow state; the Workflows page tabs are
  OVERVIEW / ACTIVE / PAUSED / TEMPLATES.
- **Pipelines exist and come in two types**, Lead Pipeline and Client Pipeline,
  each with up to five phases plus a terminal Completed state. Every phase
  resolves either to a project tag or to a "days in prior phase" rule, and
  carries its own colour. Phase names cap at 20 characters.
- **User permissions are a three-level role**, not a permission checklist:
  Owner, Admin, Team Member. There is no granular permission matrix anywhere.
- **Lead Sources are not in Account Settings.** They live under
  Leads > Reporting, with three states (Active, Inactive, Archived) and a
  user-defined sort order, alongside a Referral List report.
- **Email Lead Capture is a generic rule**, not a per-vendor parser: one
  connected mailbox plus a single `If From field contains "<string>"`
  condition, with an auto-response template and a calendar as options. There is
  no supported-sender list and no field-mapping table.
- A **Quote is a packet**: it can bundle a Contract, an Invoice and a Payment
  Schedule into one client-facing document, and its line items come in three
  section kinds (Standard Quote Items, "Choose One" Options, "Choose Any"
  Options). Individual line items can start a workflow when the invoice takes
  its first payment or is paid in full.
- **One invoice payment explodes into several bookkeeping rows** (income, sales
  tax, merchant fee, tip), generated automatically with predictable
  descriptions.
- Online Scheduling is richer than the log implies: a 12-section service editor
  including Group services and AI-assisted descriptions, and a 6-section
  availability editor with cross-calendar checks, schedule overrides and
  booking limits.

## Needs the in-app walkthrough (Claude in Chrome, read only) (original list, superseded above)
1. Exact left-nav labels and order; Quick Look panel contents.
2. Full list of the 13 questionnaire question types and which map to which field types.
3. Signature capture UI (draw vs type), initials support, PDF download location.
4. Quote decline flow and quote/invoice status names shown in the UI.
5. Exact workflow due-rule wording and the automatic vs "upon review" toggle label; completion-rule options for each action type.
6. Whether contact-level notes exist independent of projects.
7. Projects list columns and bulk actions.
8. Calendar views available and event editor fields.
9. Client portal card layout and sections in order.
10. Whether the single plan still enforces monthly document-send limits.
11. SMS add-on and Advanced Scheduling prices as shown in Plan Information.
12. Current processor list on the Integrations page (is PayPal still there?).
13. Any 2FA or security settings present.
14. What the mobile app can create vs only view (2026 rebuild).

## Product decisions for the owner
1. Product name and domain.
2. Price point and whether to offer a free tier.
3. Launch vertical: photographers first, or horizontal from day one?
4. Build native galleries later, or integrate only?
5. Which payment processor for launch besides Stripe (Square is connected in your workspace; PayPal?).
6. Whether to accept the Temporal dependency or start with BullMQ.
7. Whether QuickBooks or Xero comes first for accounting sync (QuickBooks is already connected in your workspace).

## Data-handling notes
- The original documents were produced without accessing any 17hats account
  data. The 2026-09-03 walkthrough did read a live account, strictly read-only:
  nothing was created, edited, sent, deleted, archived, paid, signed or
  accepted, and every editor or dialog opened was closed with Cancel or Escape.
- No client names, email addresses, phone numbers, postal addresses, payment
  details or amounts were written into these documents, and screenshots were
  cropped to avoid them.
- The walkthrough checklist forbids recording client PII, credentials, or payment details.
- Your QuickBooks, Gmail, Calendar, Notion, Microsoft 365 and Zapier connectors were not used for this task.
