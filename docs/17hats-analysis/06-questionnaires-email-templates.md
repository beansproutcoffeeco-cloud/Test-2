# 17hats Module 06: Questionnaires, Email, and Templates

Research method: WebSearch only (14 distinct searches; search budget was exhausted after the 14th, so several planned follow-up searches could not be run). No logins, no account access, no data edits. All claims are drawn from search-result snippets of help.17hats.com, 17hats.com feature pages, blog.17hats.com, 17hats release notes, 17hats University, Capterra, and third-party pricing/comparison blogs. Where a detail could not be found it is stated explicitly.

Research date: 2026-09-03.

---

## 1. Summary

- **Questionnaires** are one of 17hats' four core "documents" (Quote, Contract, Invoice, Questionnaire). They are built from templates under the Templates area, sent from a contact's Project (Important Documents > create new), and completed by the client on a branded, subdomain-hosted web page (never as an email attachment).
- The questionnaire builder offers **13 question types** per 17hats' help center; the types confirmed by name are Short Answer, Long Answer, Yes/No, Choose from a List, Checkboxes, and Date. The remaining types (e.g., file upload, rating, sections) could **not** be confirmed in this research.
- **If/Then (conditional) questions** exist: only "Base Questions" of type Yes/No, Choose from a List, or Checkboxes can spawn "Branch Questions". This was historically a Premier-plan feature; it is now included in the single $60/mo plan for new signups.
- **Answer Mapping** lets a questionnaire (or Lead Capture Form) answer be pushed into the Project's Notes so it is retrievable without opening the document. The completed questionnaire can also be opened to read raw responses.
- **Email** is a first-class module: 17hats claims to be "the only small business platform that offers two-way email sync." Outgoing server = send from your own address; incoming server = client replies are pulled into the matching Project. Sync is ~30 min, up to 65 min.
- Email sync only imports messages whose sender/recipient address matches a contact record that is attached to a Project; multiple inboxes can be synced; a 17hats mail server option exists for multi-user accounts.
- **Email features found**: read receipts ("Unread" / "Read by Client", pixel-based, Account Settings > Email Settings), scheduled send at a date/time, "BCC you on all outgoing email" checkbox, multiple named email signatures, and a deliberate no-attachments policy (documents are sent as button links for deliverability).
- **Email templates** are organized by **Email Type** (Regular, Quote, Contract, Invoice, Client Portal, Questionnaire, Lead Auto Responder, Scheduling). The type determines which tokens are offered and whether a document button is auto-appended.
- **Tokens** use the syntax `[% object.field %]` and are grouped into General (contact/project/account), Document (quote/contract/invoice/questionnaire), and Online Scheduling (service) tokens; Account Custom Fields can also be used as tokens.
- **Brand Preferences** (gear icon > Account Settings > Brand Preferences) has Account (background, sub-domain, time zone), Images (logo: jpg/png/gif, max 640x400px), and Colors & Fonts tabs. Only a 17hats **subdomain** was found; a fully custom domain (CNAME) was not found.
- **Notes and Files** live as tabs at the bottom of each Project (Notes, Emails, Files, To-do's, Events, Phone Log, Time Log, Activity Log). Project Files are **not** shown in the Client Portal and clients cannot upload files.

---

## 2. Pages / screens

### 2.1 Templates (list page)

- **Purpose**: Central library of every reusable template.
- **What the user sees**: A "new template" button; a drop-down (or picker) to choose the template type: Quote, Contract, Invoice, Questionnaire, Email, and (per the help "Templates" collection) Workflows and Lead Capture Forms. Email templates are grouped by Email Type. (Exact layout / column list of the templates grid could not be confirmed.)
- **Actions**: Create new template; open/edit existing template; (LIKELY) duplicate/delete; add an "existing email template" (help article "Adding an existing email template into 17hats" exists, content not retrieved).
- **Navigation**: Reached from the main navigation/Account area; templates are consumed from a Project (Important Documents > create new) and from Workflow action items.
- Sources: help 879803, help collection "Templates", help 897456, help 1008149.

### 2.2 Questionnaire Template editor

- **Purpose**: Build a reusable questionnaire.
- **What the user sees**:
  - "Questionnaire options" block containing: **Title** (internal use), **Display Title** (what the contact sees), **Due Date**.
  - A list of questions; 13 question types available (confirmed by name: Short Answer, Long Answer, Yes/No, Choose from a List, Checkboxes, Date; the other seven are not confirmed).
  - If/Then: a Base Question (Yes/No, Choose from a List, Checkboxes) can have Branch Questions that only appear depending on the answer.
  - Answer Mapping setting per question (map the answer to Project Notes; the help article title indicates the same mechanism exists on Lead Capture Forms).
  - **Save** button at top right.
- **Actions**: Add/edit/remove questions; set type; add branch questions; set mapping; save.
- **Navigation**: Templates > new template > Questionnaire. From here the template is used from a Project.
- **Not found**: required-field toggle, sections/headers, file-upload question, rating question, placeholder/help text, question reordering UI, per-question images. These are UNVERIFIED (see section 7).
- Sources: help 897456, help 4755373, blog "Dig Deep With If/Then Questions", help 2545940, blog "How to Map 17hats Questionnaire Answers".

### 2.3 Project > Important Documents > New Questionnaire (send flow)

- **Purpose**: Create a questionnaire instance for a specific contact/project from a template and send it.
- **What the user sees**: In the contact's Project, an "Important Documents" section with a **create new** button and a drop-down of document types (Quote, Contract, Invoice, Questionnaire). After choosing Questionnaire and a template, a **"Send Questionnaire"** button opens an email composer pre-set to the *Questionnaire Email* type, which auto-adds a button link to the questionnaire at the bottom of the email.
- **Actions**: Pick template; edit questions for this instance (LIKELY); send; (LIKELY) copy link / view as client; questionnaire can also be sent automatically as a Workflow action item.
- **Navigation**: Contacts > Contact > Project > Important Documents. Completed responses reopen from the same document card.
- Sources: help 3250522, help 1037910, Facebook 17hats User Q&A group thread "How to send a questionnaire in 17hats to a client?".

### 2.4 Client-facing questionnaire page

- **Purpose**: Client answers questions.
- **What the client sees**: A web page hosted on the account's chosen subdomain (subdomain appears in links for Quotes, Contracts, Invoices, Questionnaires, Client Portal and Online Scheduling); account logo automatically at the top; brand colors and fonts applied (buttons, accent fonts, button fonts); the Display Title; the questions; branch questions appear when the base answer matches.
- **Not found**: save-and-resume behavior, confirmation message, whether the client can edit after submitting, mobile layout specifics. Questionnaires are also reachable inside the Client Portal (LIKELY, since the portal exposes "project documents").
- Sources: help 849312, features/fonts-and-colors, features/subdomain, help 1131267.

### 2.5 Completed questionnaire / where answers show up

- **Purpose**: Review responses.
- **What the user sees**: Open the document in the Project to read responses. If Answer Mapping was configured, the mapped answers appear in the Project's **Notes** tab.
- **Not found**: whether answers can be merged as tokens into other documents (a "questionnaire token" group exists in the Complete List of Tokens, but its contents were not retrieved), whether answers map into contact custom fields (the University article on Account Custom Fields suggests custom-field tokens exist, but the mapping target was not confirmed).
- Sources: blog "How to Map 17hats Questionnaire Answers", help 2545940, help 1235598.

### 2.6 Account Settings > Email Settings

- **Purpose**: Configure how 17hats sends and receives email.
- **What the user sees (confirmed elements)**:
  - **Change Outgoing Settings** button > outgoing mail server form (SMTP-style host/credentials; specific field labels not retrieved).
  - Incoming server connection for email sync (help "Email Sync Setup & Use").
  - Ability to sync **multiple email addresses**.
  - **BCC you on all outgoing email** checkbox.
  - **Email read receipt** toggle.
  - **Email Signatures** tab: "Add New Signature" link, name + body per signature; manage existing signatures.
  - Multi-user accounts: per-user email settings, option to use the **17hats mail server** instead of the user's own SMTP.
- **Actions**: connect/disconnect outgoing; connect incoming; add signature; toggle BCC/read receipts.
- **Not found**: whether Gmail/Microsoft 365 connect via OAuth buttons versus manual IMAP/SMTP fields; whether app passwords are required. An "Email Providers" integration page (17hats.com/integration/email) exists. UNVERIFIED specifics.
- Sources: help 2548572, help 927630, help 840404, help 1063708, help 1063723, help 2478209, help collection "Email", help "Recommended Steps for Successful Email Delivery".

### 2.7 Email composer (inside a Project)

- **Purpose**: Write and send an email to the project's contact(s).
- **What the user sees**: To/CC (CC'd addresses are not tracked for read receipts, implying a CC field exists), Subject (tokens allowed by pasting the italicized token), body with rich text, template picker filtered by Email Type, signature, document button (for document email types), schedule option (send at a specific date/time).
- **Actions**: Send now; schedule; insert template; insert token; (LIKELY) attach file — note 17hats deliberately does *not* attach documents; whether arbitrary file attachments are allowed was not confirmed.
- **After sending**: The email appears in the Project's Emails tab with "Unread" / "Read by Client" status; hovering "Read by Client" shows first-open timestamp.
- **Navigation**: Project > Emails tab, or the Send button on any document.
- Sources: help 2478209, help 927448, help 3110879, features/email-read-receipts, blog "2 Ways 17hats Email Types Simplify Sending Emails".

### 2.8 Project > Emails tab (conversation view)

- **Purpose**: Show the two-way email thread for this project.
- **What the user sees**: Outgoing emails sent from 17hats and incoming emails pulled in by sync (only those whose address matches a contact attached to the project). Sync interval ~30 min (up to 65 min).
- **Actions**: Reply from within 17hats (always sends from the Outgoing Mail Server address).
- Sources: help 2548572, help "Syncing Multiple Email Addresses into 17hats", help 948677.

### 2.9 Email Template editor

- **Purpose**: Create reusable emails.
- **What the user sees**: Name; **Email Type** selector (Regular, Quote, Contract, Invoice, Client Portal, Questionnaire, Lead Auto Responder, Scheduling); subject; body editor; token list filtered by type. A document button is auto-appended at send time for document types.
- **Not found**: whether images can be embedded in the body, whether templates support categories/folders beyond Email Type, whether a shared "template marketplace" exists.
- Sources: help 2950670, help 879821, blog "Five things you need to know about 17hats email templates", features/email-templates.

### 2.10 Account Settings > Brand Preferences

- **Purpose**: Global look-and-feel for client-facing surfaces.
- **Tabs (confirmed)**:
  - **Account**: Background, Sub-Domain, Time Zone.
  - **Images**: logo upload (jpg/png/gif; recommended max 640px wide x 400px high); logo automatically placed at top of every Quote, Contract, Invoice, Questionnaire.
  - **Colors & Fonts**: brand colors applied to Invoices, Quotes, Contracts, Questionnaires, Client Portals, Online Scheduling, Lead Capture Forms; font choice from a list; customization of button, accent fonts, button fonts on documents *and emails*.
- **Navigation**: gear icon (top right) > Account Settings > Brand Preferences.
- **Not found**: email header/footer image slots, a fully custom domain, per-template brand overrides.
- Sources: help 2108661, help 3110675, help 3110791, help 3110802, help 3110814, help 849312, help 927442, features/subdomain, features/brand-customization.

### 2.11 Project > Notes tab and Files tab

- **Purpose**: Free-form internal notes and file storage per project.
- **What the user sees**: Tabs at the bottom of the Project screen: Notes, Emails, Files, To-do's, Events, Phone Log, Time Log, Activity Log. Files tab accepts outside documents such as PDFs and JPEGs. Notes tab holds pasted text and mapped questionnaire answers.
- **Limitations**: Files are not surfaced in the Client Portal; clients cannot upload to the portal; workaround is hosting files elsewhere and linking from the portal Welcome Message.
- Sources: help 3110647, help 9363325, help 1131267, help 3160018.

---

## 3. Data & fields observed

### 3.1 Questionnaire template

| Field | Type | Notes | Confidence |
|---|---|---|---|
| Title | text | Internal name | VERIFIED |
| Display Title | text | Shown to contact | VERIFIED |
| Due Date | date / relative | Set in "questionnaire options" | VERIFIED |
| Questions[] | list | 13 types available | VERIFIED (count) |
| Question.type | enum | Short Answer, Long Answer, Yes/No, Choose from a List, Checkboxes, Date confirmed; 7 others unknown | PARTIAL |
| Question.options[] | list | For Choose from a List / Checkboxes | VERIFIED |
| Question.branch_questions[] | list | Only on Yes/No, Choose from a List, Checkboxes base questions | VERIFIED |
| Question.answer_mapping | target | Maps to Project Notes | VERIFIED |
| Question.required | bool | Not found | UNVERIFIED |
| Section / header | block | Not found | UNVERIFIED |

### 3.2 Email settings

| Field | Notes | Confidence |
|---|---|---|
| Outgoing mail server (host, port, user, password/auth) | "Change Outgoing Settings" | VERIFIED (exists) / field labels UNVERIFIED |
| Incoming mail server(s) | multiple addresses supported | VERIFIED |
| Use 17hats mail server (multi-user) | alternative to own SMTP | VERIFIED |
| BCC you on all outgoing email | checkbox | VERIFIED |
| Email read receipts | toggle | VERIFIED |
| Email signatures[] (name, body) | multiple | VERIFIED |
| Default signature | not found | UNVERIFIED |

### 3.3 Email message

| Field | Notes | Confidence |
|---|---|---|
| To, CC | CC exists (not tracked) | VERIFIED |
| Subject (tokens allowed) | paste italicized token | VERIFIED |
| Body (rich text) | | VERIFIED |
| Email Type | one of 8 | VERIFIED |
| Document button link | auto for document types | VERIFIED |
| Scheduled send datetime | | VERIFIED |
| Read status: Unread / Read by Client + first-open timestamp | | VERIFIED |
| Attachments | policy discourages; capability for arbitrary files unconfirmed | UNVERIFIED |

### 3.4 Email Types

Regular Email, Quote Email, Contract Email, Invoice Email, Client Portal Email, Questionnaire Email, Lead Auto Responder, Scheduling. (VERIFIED)

### 3.5 Tokens (merge fields) — complete list as found

Syntax: `[% ... %]`. Groups: General, Document, Online Scheduling.

**Contact tokens (VERIFIED, exact syntax)**

| Token | Meaning |
|---|---|
| `[% contact.first_name %]` | Contact first name |
| `[% contact.last_name %]` | Contact last name |
| `[% contact.name %]` | Contact full name |
| `[% contact.company_name %]` | Contact company |
| `[% contact.address.as_string %]` | Contact address |
| `[% contact.primary_email_address %]` | Contact email |
| `[% contact.primary_phone_number %]` | Contact phone |

**Project tokens (VERIFIED, exact syntax)**

| Token | Meaning |
|---|---|
| `[% project.name %]` | Project name |
| `[% project.main_event.location_string %]` | Project location |
| `[% project.main_event.formatted_token_date('start') %]` | Project date |
| `[% project.main_event.formatted_time('start') %]` | Project start time |
| `[% project.main_event.formatted_time('end') %]` | Project end time |

**Account tokens (VERIFIED existence; exact syntax not retrieved)**: your first name, last name, full name, company name. Account Custom Fields are also usable as tokens (17hats University).

**Document tokens (VERIFIED existence; exact syntax not retrieved)**
- Contract tokens (Contract Email type): contract name, due date, creation date.
- Invoice tokens: exist (fields not retrieved).
- Questionnaire tokens: exist (fields not retrieved).
- Quote tokens: LIKELY (Quote Email type exists) — not retrieved.
- Document link/button: added automatically by Email Type rather than as an inline token (VERIFIED behavior).

**Online Scheduling / Service tokens (VERIFIED existence; exact syntax not retrieved)**: service name, location name, address, booking date, times, duration.

**Not found**: invoice link token, contract link token, client portal link token, payment amount tokens, appointment cancel/reschedule link tokens. These may exist in the "Complete List of Tokens" article but were not surfaced by search snippets.

### 3.6 Brand preferences

| Field | Notes | Confidence |
|---|---|---|
| Logo (jpg/png/gif, max 640x400) | Images tab | VERIFIED |
| Background | Account tab | VERIFIED |
| Sub-Domain | Account tab; used in all client links | VERIFIED |
| Time Zone | Account tab | VERIFIED |
| Brand colors (button, accent) | Colors & Fonts | VERIFIED |
| Fonts (from list): accent font, button font | Colors & Fonts | VERIFIED |
| Email header/footer image | not found | UNVERIFIED |
| Custom root domain | not found | UNVERIFIED |

### 3.7 Project tabs

Notes, Emails, Files, To-do's, Events, Phone Log, Time Log, Activity Log. (VERIFIED)

---

## 4. Plan gating

- **Current pricing (new signups)**: single plan at ~$60/mo that includes Zapier, Client Portal, advanced Workflows, and **If/Then questionnaire logic** by default. (VERIFIED via third-party 2026 pricing write-up; verify at 17hats.com/pricing.)
- **Legacy tiers (existing customers)**: Essentials ($15/mo), Standard ($30/mo), Premier ($45-60/mo).
  - Document caps per month (quotes+contracts+invoices+questionnaires combined): Essentials 20, Standard 35, Premier unlimited. (VERIFIED via third-party write-ups)
  - If/Then questionnaire logic: Premier only. (LIKELY, from pricing write-up)
  - Client Portal, Zapier, advanced Workflows: Premier. (LIKELY)
  - Support: Essentials 1-day basic, Standard 4-hour priority, Premier 1-hour VIP. (VERIFIED via third-party)
- **Email sync, read receipts, scheduled send, signatures, BCC**: no plan gating found in snippets; UNVERIFIED whether any tier restricted them.
- **Multi-user email / 17hats mail server**: tied to multi-user accounts (add-on users); gating specifics UNVERIFIED.

---

## 5. User complaints, gaps, and confusion points

1. **Email sync latency**: help center itself states sync runs ~every 30 minutes and can take up to 65 minutes; users expecting real-time inbox behavior will be confused. (VERIFIED)
2. **Sync scope**: incoming email is only imported when the address matches a contact that is on a Project; emails from unknown addresses or contacts without a project never appear. Dedicated "Incoming Email Not Syncing" troubleshooting article exists, signalling recurring support load. (VERIFIED)
3. **Read receipts are unreliable**: pixel-based, blocked by privacy tools / images-off; only "To" recipients tracked, not CC. (VERIFIED)
4. **No attachments on document emails**: by design for deliverability, but users coming from Gmail expect PDFs; documents arrive as buttons/links. (VERIFIED policy)
5. **Files not visible in Client Portal and clients cannot upload**: workaround is external hosting + link in Welcome Message. Frequently cited gap. (VERIFIED)
6. **Question type limits**: only three question types support branching; no evidence of file-upload or rating questions. (PARTIAL)
7. **Discoverability of "send questionnaire"**: community Q&A threads ask how to send a questionnaire, because it is created from inside a Project rather than from the template. (LIKELY)
8. **Setup burden**: Capterra reviewers report days or 30+ hours setting up templates and questionnaires; the tool is powerful but not intuitive. (VERIFIED)
9. **Bugs / performance**: reviewers cite needing to refresh 2-3 times and clicks taking up to 6 seconds. (VERIFIED)
10. **Token usability**: tokens must be copied/pasted as literal `[% %]` strings into subject lines; wrong Email Type hides needed tokens. (VERIFIED)
11. **Limited integrations** (HubSpot/Salesforce requested). (VERIFIED)
12. **Document caps on legacy plans** (20/35 per month) counted questionnaires against the quota. (VERIFIED)

---

## 6. Improvement opportunities for a clone

- **Real-time email sync** via Gmail/Microsoft Graph push notifications or IMAP IDLE instead of 30-65 min polling; OAuth-first connection with a manual IMAP/SMTP fallback.
- **Smarter thread matching**: match on thread IDs and any contact email (not only project-attached contacts), with a triage inbox for unmatched mail and one-click "attach to project / create lead".
- **Richer question types**: file upload, star rating, number, address, signature, image choice, section headers, required flag, help text, and conditional logic on every type (not just three).
- **Answer mapping to structured fields**: map answers to contact/project custom fields (not just Notes) and expose them as tokens in later documents and workflows.
- **Save-and-resume + edit-after-submit** for clients, with a visible completion status and reminder automation.
- **Attachments and shared files**: allow real attachments (with size limits) and a Client Portal file exchange (upload and download), which is the most-cited gap.
- **Token picker UI**: searchable insert-token menu in both subject and body with live preview, rather than copy/pasting raw `[% %]` strings; include link tokens (invoice link, portal link, reschedule link).
- **Template library UX**: categories/folders, tags, search, duplicate, version history, and a starter library per industry; import from other tools.
- **Brand**: custom root domain (CNAME), email header/footer images, per-template brand overrides, live preview of documents and emails.
- **Reliable read tracking**: combine pixel with link-click tracking and document-view events (which are server-side and therefore reliable) for a truthful "viewed" state.
- **Scheduled send** with timezone awareness and edit/cancel queue view.
- **Performance and stability** as a differentiator: reviewers explicitly penalize 17hats for slowness and glitches.

---

## 7. Confidence notes

| Claim | Status |
|---|---|
| 13 question types available in questionnaires | VERIFIED (help 897456 snippet) |
| Named types: Short Answer, Long Answer, Yes/No, Choose from a List, Checkboxes, Date | VERIFIED (help 10167140 lead-capture types and help 4755373) — note Short/Long/Yes-No/List names came from the Lead Capture Form article; LIKELY identical in questionnaires |
| File upload, rating, section, required toggle in questionnaires | UNVERIFIED (not found) |
| If/Then: base questions limited to Yes/No, List, Checkboxes | VERIFIED |
| Questionnaire options: Title, Display Title, Due Date; Save top right | VERIFIED |
| Send from Project > Important Documents > create new > Send Questionnaire | VERIFIED |
| Answer mapping to Project Notes | VERIFIED |
| Answers merge into other documents as tokens | UNVERIFIED (questionnaire tokens exist; contents unknown) |
| Two-way email sync; outgoing/incoming servers | VERIFIED |
| Sync interval ~30 min, up to 65 min | VERIFIED |
| Only project-matched contact emails imported | VERIFIED |
| Multiple inboxes syncable | VERIFIED |
| 17hats mail server option for multi-user | VERIFIED (article exists) |
| OAuth Gmail/M365 connect flow details | UNVERIFIED |
| BCC checkbox in Email Settings | VERIFIED |
| Multiple named signatures | VERIFIED |
| Read receipts + limitations | VERIFIED |
| Scheduled send | VERIFIED |
| No document attachments (links instead) | VERIFIED |
| Arbitrary file attachments allowed | UNVERIFIED |
| 8 Email Types list | VERIFIED |
| Contact and project token syntax | VERIFIED |
| Account, contract, invoice, questionnaire, service token groups exist | VERIFIED (exact syntax UNVERIFIED) |
| Account Custom Fields as tokens | LIKELY (17hats University title) |
| Brand Preferences tabs and fields | VERIFIED |
| Logo formats and size | VERIFIED |
| Subdomain in all client links | VERIFIED |
| Custom root domain | UNVERIFIED (not found) |
| Email header/footer images | UNVERIFIED (not found) |
| Project tabs list (Notes, Emails, Files, ...) | VERIFIED |
| Files not in Client Portal; clients cannot upload | VERIFIED |
| Unified $60/mo plan includes If/Then logic | VERIFIED (third-party 2026 article) |
| Legacy tier document caps | VERIFIED (third-party) |
| Capterra complaints | VERIFIED |

---

## 8. Sources

Help center (help.17hats.com)
- [Questionnaire Templates](https://help.17hats.com/en/articles/897456-questionnaire-templates)
- [If/Then Questions in Questionnaires](https://help.17hats.com/en/articles/4755373-if-then-questions-in-questionnaires)
- [Answer Mapping in Questionnaires & Lead Capture Forms](https://help.17hats.com/en/articles/2545940-answer-mapping-in-questionnaires-lead-capture-forms)
- [Lead Capture Form Question Types](https://help.17hats.com/en/articles/10167140-lead-capture-form-question-types)
- [17hats Documents & Emails](https://help.17hats.com/en/articles/3110651-17hats-documents-emails)
- [How to Send a Document](https://help.17hats.com/en/articles/3250522-how-to-send-a-document)
- [How to Create & Manage Document & Email Templates](https://help.17hats.com/en/articles/879803-how-to-create-manage-document-email-templates)
- [How Do I Create Custom Email Templates?](https://help.17hats.com/en/articles/879821-how-do-i-create-custom-email-templates)
- [Adding an existing email template into 17hats](https://help.17hats.com/en/articles/1008149-adding-an-existing-email-template-into-17hats)
- [What are the Different Email Types in 17hats?](https://help.17hats.com/en/articles/2950670-what-are-the-different-email-types-in-17hats)
- [Complete List of Tokens](https://help.17hats.com/en/articles/1235598-complete-list-of-tokens)
- [Email Sync Setup & Use](https://help.17hats.com/en/articles/2548572-email-sync-setup-use)
- [How does email correspondence work in 17hats?](https://help.17hats.com/en/articles/927448-how-does-email-correspondence-work-in-17hats)
- [Syncing Multiple Email Addresses into 17hats](https://help.17hats.com/email/syncing-multiple-email-addresses-into-17hats)
- [Incoming Email Not Syncing](https://help.17hats.com/en/articles/948677-incoming-email-not-syncing)
- [Multi User Email Settings: Using the 17hats Mail Server](https://help.17hats.com/en/articles/1063708-multi-user-email-settings-using-the-17hats-mail-server)
- [Multi User Email Settings](https://help.17hats.com/en/articles/1063723-multi-user-email-settings)
- [Can I send one email to multiple clients/leads?](https://help.17hats.com/en/articles/1042105-can-i-send-one-email-to-multiple-clients-leads)
- [Email Read Receipts](https://help.17hats.com/en/articles/2478209-email-read-receipts)
- [Email Communication FAQs](https://help.17hats.com/en/articles/3110879-email-communication-faqs)
- [What is BCC email?](https://help.17hats.com/en/articles/927630-what-is-bcc-email)
- [Email Settings - Email Signature Tab](https://help.17hats.com/en/articles/840404-email-settings-email-signature-tab)
- [Recommended Steps for Successful Email Delivery in 17hats](https://help.17hats.com/en/articles/1691196-recommended-steps-for-successful-email-delivery-in-17hats)
- [17hats Customization Options for Emails, Contracts, and Email Signatures](https://help.17hats.com/en/articles/839258-17hats-customization-options-for-emails-contracts-and-email-signatures)
- [Email collection](https://help.17hats.com/en/collections/550554-email)
- [Outgoing Email collection](https://help.17hats.com/en/collections/1841967-outgoing-email)
- [Templates collection](https://help.17hats.com/en/collections/550622-templates)
- [Documents collection](https://help.17hats.com/en/collections/550651-documents)
- [Combined Documents](https://help.17hats.com/en/articles/924358-combined-documents)
- [Contract Templates](https://help.17hats.com/en/articles/2350413-contract-templates)
- [Quote Templates](https://help.17hats.com/en/articles/1698294-quote-templates)
- [Workflows: Action Items](https://help.17hats.com/en/articles/1037910-workflows-action-items)
- [Account Settings - Brand Preference Page Overview](https://help.17hats.com/en/articles/2108661-account-settings-brand-preference-page-overview)
- [Brand Preference Page Overview](https://help.17hats.com/en/articles/3110675-brand-preference-page-overview)
- [Brand Preferences - Account Tab](https://help.17hats.com/en/articles/3110791-brand-preferences-account-tab)
- [Brand Preferences - Images Tab](https://help.17hats.com/en/articles/3110802-brand-preferences-images-tab)
- [Brand Preferences - Colors & Fonts Tab](https://help.17hats.com/en/articles/3110814-brand-preferences-colors-fonts-tab)
- [Where do I upload my logo?](https://help.17hats.com/en/articles/849312-where-do-i-upload-my-logo)
- [Domain Setting](https://help.17hats.com/en/articles/927442-domain-setting)
- [Project Overview](https://help.17hats.com/en/articles/3110647-project-overview)
- [Client Portal Overview](https://help.17hats.com/en/articles/1131267-client-portal-overview)
- [Client Portal - Customizing Your Global Settings](https://help.17hats.com/en/articles/3160018-client-portal-customizing-your-global-settings)
- [Switching From Sprout Studio to 17hats](https://help.17hats.com/en/articles/9363325-switching-from-sprout-studio-to-17hats)

17hats marketing and blog
- [Questionnaires Feature](https://www.17hats.com/features/questionnaires)
- [Email Templates Feature](https://www.17hats.com/features/email-templates)
- [Outgoing Email Feature](https://www.17hats.com/features/email)
- [Email Read Receipts Feature](https://www.17hats.com/features/email-read-receipts)
- [Email Providers Integration](https://www.17hats.com/integration/email)
- [Fonts and Colors Feature](https://www.17hats.com/features/fonts-and-colors)
- [Subdomain Feature](https://www.17hats.com/features/subdomain)
- [Brand Customization Feature](https://www.17hats.com/features/brand-customization)
- [Document Templates Feature](https://www.17hats.com/features/document-templates)
- [3-in-1 Document Feature](https://www.17hats.com/features/quote-contract-invoice)
- [Pricing](https://17hats.com/pricing)
- [Blog: Dig Deep With If/Then Questions In Questionnaires](https://blog.17hats.com/dig-deep-with-if-then-questions-in-questionnaires/)
- [Blog: How to Map 17hats Questionnaire Answers to Keep Your Notes Organized](https://blog.17hats.com/how-to-map-17hats-questionnaire-answers-to-keep-your-notes-organized/)
- [Blog: Why you should send a Questionnaire to every new client](https://blog.17hats.com/2022/02/04/why-you-should-send-a-questionnaire-to-every-new-client//)
- [Blog: 2 Ways 17hats Email Types Simplify Sending Emails](https://blog.17hats.com/2-ways-17hats-email-types-simplify-sending-emails/)
- [Blog: Five things you need to know about 17hats email templates](https://blog.17hats.com/2022/03/14/five-things-you-need-to-know-about-17hats-email-templates/)
- [Blog: Feature Spotlight: Using Tokens in 17hats Email Templates](https://blog.17hats.com/feature-spotlight-using-in-tokens-in-17hats-email-templates/)
- [Blog: Five Ways To Showcase Your Branding With 17hats](https://blog.17hats.com/five-ways-to-showcase-your-branding-with-17hats/)
- [Blog: Brand Customization](https://blog.17hats.com/brand-customization/)
- [Release Notes: questionnaires tag](https://17hats.releasenotes.io/tag/questionnaires)
- [Release Notes: Email Read Receipts](https://17hats.releasenotes.io/release/7iXhM-email-read-receipts)
- [Release Notes: Client Portal](https://17hats.releasenotes.io/release/P8478-client-portal)

Video / community / third party
- [YouTube: 17hats Tutorial - How To Use Tokens In 17hats](https://www.youtube.com/watch?v=ddtOFUSH4r0)
- [YouTube: Use Email Tokens in 17hats (Tutorial)](https://www.youtube.com/watch?v=InpcBleciuU)
- [17hats University: How To Use Account Custom Fields in 17hats](https://www.17hatsuniversity.com/17hats-quick-tips/how-to-use-account-custom-fields-in-17hats)
- [Facebook 17hats User Q&A: How to send a questionnaire](https://www.facebook.com/groups/17HatsUserQA/posts/4370751299878001/)
- [Capterra: 17hats Reviews](https://www.capterra.com/p/144328/17hats/reviews/)
- [Spruce Rd: 17Hats review](https://sprucerd.com/blog/17hats/)
- [Agiled: 17hats Pricing 2026](https://agiled.app/blog/17hats-pricing)
- [OneSuite: 17hats Pricing Guide (2026)](https://onesuite.io/blog/17hats-pricing/)
- [Zendo: Evaluating 17Hats Pricing And Plans](https://getzendo.io/blog/17hats-pricing/)
- [Swell System: HoneyBook vs 17Hats](https://swellsystem.com/honeybook-vs-17hats/)
