# 17hats Analysis — Module 02: Contacts and Leads

Research date: 2026-09-03. Method: WebSearch only (41 distinct searches; no logins, no account access, no data edits). Sources are help.17hats.com article snippets, 17hats.com feature pages, blog.17hats.com, 17hats.releasenotes.io, 17hatsuniversity.com, third-party tutorial blogs, Zapier listings, and review sites (Capterra, G2, Trustpilot). Where a detail could not be found it is stated explicitly.

Confidence key used throughout: **VERIFIED** = stated directly in an official 17hats source snippet (help center, feature page, blog, release notes). **LIKELY** = stated by a reputable third-party tutorial/review or strongly implied by multiple official snippets. **UNVERIFIED** = inferred, or not found in any source.

---

## 1. Summary

- 17hats is a **contact-centric** CRM: a Contact is "anyone you communicate with," and every Contact has one or more **Projects** (the unit of work). Nearly all lead activity, documents, emails, and lead-source data hang off the Project, not the Contact. (VERIFIED)
- There are exactly **four Contact Types**, color-coded: **Hot Lead** (orange), **Client** (green), **Cold Prospect** (blue), **Other** (grey — vendors, family, etc.). "Lead" is not a separate object; it is a Contact Type. Hot Leads and Cold Prospects appear in the **Leads** tab. (VERIFIED)
- **Lead → Client conversion is automatic** when a quote is accepted, a contract is signed, or an invoice payment is made; it can also be changed manually. (VERIFIED)
- **Lead Capture Forms (LCFs)** are the primary intake mechanism: a hosted form builder with 7–8 question types, field mapping to Contact/Project/Custom fields, per-form settings (title, notification, auto-response, calendar, workflow, tags, lead source, post-submit action), and three install modes (link, dialog/popup, iframe embed). Each submission creates/updates a Contact **and** creates a new Project. (VERIFIED)
- Additional lead intake: **Lead Capture Email rules** (parse The Knot / WeddingWire / ShowitFast notification emails into leads), **Online Scheduling** bookings, **Zapier** (two-way contact sync; Facebook Lead Ads, Wix, Leadpages, etc. via Zapier), and **CSV import** (contacts + optional auto-created project per contact, with tags). (VERIFIED)
- **Lead Source** is a **Project field**, auto-populated by LCFs/scheduling, and rolled up under **Leads → Reporting**. A separate **Referral Source** report exists based on the Contact "Referred By" field. (VERIFIED / LIKELY)
- Organization is via **Tags** (unlimited; separate Contact Tags and Project Tags), plus **Custom Fields** (unlimited; Contact-level and Project-level; usable as tokens and as LCF mapping targets). There are no "Contact Groups" or "Companies" as first-class objects — only a Company text field with a "Show as company" checkbox. (VERIFIED)
- **Pipelines** (2024+) provide a phased lead/client board: up to 7 active Lead Pipelines and 5 Client Pipelines, each with ≤5 Phases driven by Project Tags or elapsed time. (VERIFIED)
- **Notable gaps**: no native merge-duplicates feature found (workaround is "Move Project" between contact records); new-lead email notifications go only to the account owner unless routed via Zapier; no native CAPTCHA/spam control found; only Owners/Admins can edit LCFs; no per-team-member lead assignment. (VERIFIED for workaround/notification/admin; UNVERIFIED for spam)
- **Pricing**: historically Essentials/Standard/Premier with LCF limits of 1/3/20 forms; as of 2025 17hats moved to a single ~$60/mo plan including Zapier, client portal, and advanced workflows. (LIKELY — third-party pricing summaries)

---

## 2. Pages / screens

### 2.1 Contacts list page (`Contacts` tab in left nav)

**Purpose**: master directory of all Contacts of every type.

**What the user sees**
- Contacts listed **alphabetically by first name**, grouped under **letter headers** used to jump through the list. (VERIFIED)
- Contact Type color coding (orange/green/blue/grey). (VERIFIED)
- **Filter buttons at the top of the page** — filter by Contact Type and by Contact Tag. (VERIFIED)
- A **"Search Contacts" box** with type-ahead dropdown; searches first name, last name, **company name, phone number, or email**. (VERIFIED)
- A **gear icon (top right)** exposing Import and Export. (VERIFIED)
- Explicit list column names were **not found** in any source; the list appears to be a name-first alphabetical roster rather than a configurable column grid. (UNVERIFIED)

**Actions available**
- Add contact manually (form with Contact Type selector). (VERIFIED)
- **Import CSV** (Contacts, optionally with Projects and Tags). (VERIFIED)
- **Export CSV** — filter by type or tag first, then export ("e.g. a list of all Booked Clients"). (VERIFIED)
- Filter by type / tag; search. (VERIFIED)
- **Bulk actions on Contacts**: 17hats documents bulk Archive / Add-Remove Tags / Add Workflows / Delete on the **Projects** page via checkboxes and a "Bulk Actions" drop-down. A "How to Add/Remove Tags in Bulk" article exists; whether bulk tagging is available on the Contacts list itself (vs. Projects list) was **not confirmed**. (VERIFIED for Projects; UNVERIFIED for Contacts list)

**Navigation**: left-rail `Contacts` → list → click contact → Contact detail. Gear → Import page (`Contact Import`) / Export.

---

### 2.2 Contact detail page (Contact profile / "Contact Details")

**Purpose**: single record for a person or company, plus the container for their Projects.

**What the user sees (fields)**
- Name parts: first, last, middle, suffix, title (from CSV field list). (VERIFIED)
- Company (optional) and a **"Show as company"** checkbox that makes the company name appear in the contact list instead of the person's name. (VERIFIED)
- Contact Type (Hot Lead / Client / Cold Prospect / Other) — set on creation, editable any time. (VERIFIED)
- Email; phone(s) (CSV requires `888-888-8888` style formatting). (VERIFIED)
- Address, Address 2, City, State, Zip (CSV supports `business`/`home`/`other` prefixed address sets and Country). (VERIFIED)
- Website, **Notes**, **Birthday**, **Referred By**, and social IDs: Facebook, LinkedIn, Twitter, Instagram, Pinterest. (VERIFIED)
- **Custom Contact Fields** appear in the "Contact Details" section once populated. (VERIFIED)
- **Tags** (Contact Tags). (VERIFIED)
- **Client Portal** per-contact customization / access toggle (a separate help article "Client Portal – Customizing per Contact"). (VERIFIED that it exists; details out of scope)
- Linked **Projects** list — each contact has one or more Projects. (VERIFIED)
- **Related Contacts** are attached at the Project level (e.g., bride + groom), added via "+" next to "Related Contacts"; existing or new contacts can be linked; a **"Hide from client list"** checkbox exists to avoid creating duplicate contact records for related persons. (VERIFIED)

**Activity / documents / emails**
- Documents (Questionnaires, Contracts, Invoices, Quotes), Emails, Notes, Files, To-dos, Events, Phone Log, Time Log and Activity Log are displayed on the **Project Overview** page, in bottom tabs, not on the Contact page directly. (VERIFIED)
- A global **Recent Client Activity** page (`/app/client-activity`) shows document activity filterable by contact, project, activity type, tag(s), and date, with a snapshot of questionnaires completed / quotes accepted / contracts signed / invoices paid. (VERIFIED)
- Incoming email from any saved contact's email (From or CC) is pulled into 17hats and attached to the contact/project. (VERIFIED)

**Actions**
- Edit fields, change type, add tags, add project, archive contact, delete contact (deleted contacts/projects are restorable — a "Restore recently deleted Contacts and Projects" article exists; retention window not confirmed). (VERIFIED existence / UNVERIFIED window)
- **Move Project** between contact records (Edit → Move Project) — carries Notes, Emails, Documents, Time-Logs, Activity; reversible. This is the documented remedy for accidental duplicates. (VERIFIED)

**Navigation**: from Contacts list, Leads page, dashboard search, Project page header, or Recent Client Activity.

---

### 2.3 Project Overview page (as it relates to contacts/leads)

**Purpose**: the working record for a lead or job under a Contact; where lead-capture data lands.

**What the user sees**
- Project Information: Project Title, Primary Email, Project Date, Phone Number, Contact Type, assigned Calendar (default fields). (VERIFIED)
- **Project Details** incl. **Lead Source** and Custom Project Fields. (VERIFIED)
- Important Documents (17hats-created only), Files tab for uploads. (VERIFIED)
- Related Contacts, Workflows with progress bar, Finances mini-P&L. (VERIFIED)
- Bottom tabs: Notes, Emails, Files, To-do's, Events, Phone Log, Time Log, Activity Log. (VERIFIED)

**Actions**: Edit → Archive / Unarchive / Move Project / Delete; "+" next to Workflows to assign manually; add tags. (VERIFIED)

---

### 2.4 Leads page ("Lead Overview", left-rail `Leads`)

**Purpose**: list of all Hot Leads and Cold Prospects and their lead-related activity "in one spot." (VERIFIED)

**What the user sees**
- Default overview shows **new leads (needing a response)** and **active Hot Leads**; an **"All" view** lists leads alphabetically. (VERIFIED)
- Sub-areas reachable from the Leads tab: **Lead Capture Forms** button (top right) and **Reporting** (lead source counts per timeframe). (VERIFIED)
- Exact columns of the lead list were **not found**. (UNVERIFIED)

**Actions**
- Per-lead **action item**: start a workflow, **archive the project**, or change the project's calendar. (VERIFIED)
- Assign Hot vs. Cold status (i.e., change Contact Type). (VERIFIED)
- 17hats' recommended lead-management ending: either start a Booking Process workflow or **archive the contact and project** — there is no distinct "decline"/"lost" status, archiving serves that role. (VERIFIED)

**Navigation**: `Leads` → lead → Project page; `Leads` → `Lead Capture Forms`; `Leads` → `Reporting`.

---

### 2.5 Lead Capture Forms list (Leads → Lead Capture Forms)

**Purpose**: template list of all LCFs and Lead Capture Email rules.

**What the user sees / actions**
- List of forms; **(+)** button to add a new Lead Capture Form or a new **Lead Capture Email Rule**. (VERIFIED)
- Per-form: **Install Form** button (top right), Form Details arrow → Edit. (VERIFIED)
- Only account **Owners and Admins** can update LCFs. (VERIFIED)
- Marketplace offers free prebuilt items such as "Lead Capture Form + Auto Send Questionnaire Pipeline." (VERIFIED)

---

### 2.6 Lead Capture Form builder / Form Details

**Purpose**: define one form, its questions, mapping, styling, automation, and post-submit behavior. 17hats recommends one LCF per placement (website, Facebook, etc.) and 4–6 questions. (VERIFIED)

**Form Details settings** (help article says "nine settings"; the eight below were confirmed, the ninth is likely Tags or Lead Source):
1. **Title** (recommend naming by placement). (VERIFIED)
2. **Notification** — dashboard notification in "Let's Take Care of Business…" plus optional email notification. (VERIFIED)
3. **Auto-Response** — email sent immediately, **only to brand-new contacts** (not to contacts already in 17hats); supports links, attachments, images. (VERIFIED)
4. **Calendar** — which calendar the project/event lands on (tip: create a "Leads" calendar). (VERIFIED)
5. **Workflow** — auto-start a workflow on every submission, or branch by a "Choose from a List" answer. (VERIFIED)
6. **Contact Tags / Project Tags** auto-applied. (VERIFIED)
7. **Lead Source** — a Lead Source question auto-maps to the Project field; each Lead Source option can carry its own Contact/Project tags. (VERIFIED)
8. **After submit**: redirect to a URL, show a customizable message, or do nothing (form refresh). (VERIFIED)
9. **Branding**: brand colors and optional header image. (VERIFIED)

**Question types** (Standard/Premier: 8; Essentials: 7 — under old tiers):
- Heading and Text (non-input). (VERIFIED)
- Short Answer, Long Answer, Yes/No, Choose from a List, **Checkboxes** (used for consent), **Date**, **File Upload** (< 9.4 MB), **Project Details** (date + time + location in one step). (VERIFIED)
- Name and Email are always present and always mapped to the Contact name/email fields. (VERIFIED)
- Any question can be **mapped** to a Contact field, Project field, or Custom field (type must match, e.g., Date→Date field) and flagged **required**. (VERIFIED)
- Texting opt-in question available when the SMS add-on is enabled; LCFs can auto-send a personalized text. (VERIFIED)

**Install options**: "Link To 17hats Form" (hosted URL), "Link to Dialog Window" (popup), "Insert Form on Website" (iframe code; Squarespace Code Block, WordPress widget). Also usable on a Facebook Page / Messenger via link. (VERIFIED)

**Spam protection**: **no CAPTCHA/honeypot documentation was found.** (UNVERIFIED — treat as absent)

**Where leads land**: Contact created (or updated if the email already exists — LIKELY) as **Hot Lead**; **a new Project is always created** per submission; dashboard notification; email from `leads-<uniqueid>@17hats.com`. (VERIFIED)

---

### 2.7 Lead Capture Email rule

**Purpose**: turn third-party inquiry-notification emails into leads.
- Sources: **The Knot, WeddingWire, ShowitFast**. (VERIFIED)
- Requires the notification mailbox to be connected under Incoming Email. (VERIFIED)
- Settings (five/six): source, monitored email address, auto-response on/off, plus (LIKELY) calendar/workflow/tags. (VERIFIED partial)
- Test leads take **20–30 minutes** to appear. (VERIFIED)

---

### 2.8 Leads → Reporting (Lead Source and Referral Source)

- Counts leads per Lead Source over a selected timeframe. Sources are fed by LCFs and Online Scheduling; Lead Source is a Project field so a contact with two projects may have two sources. (VERIFIED)
- A separate **Referral Source Reporting** article exists (based on the "Referred By" contact field). (VERIFIED existence)

---

### 2.9 Pipelines (Leads/Clients board)

- Two pipeline types: **Lead** and **Client**; max **7 active Lead** and **5 active Client** pipelines; **≤5 Phases** each. Phases are defined by a Project Tag or a time period; projects move by tagging (manual or via Workflow automation); a "Completed State" tag removes the project from the pipeline. (VERIFIED)

---

### 2.10 Contact Import page (Contacts → gear → Import)

- Upload CSV; accepted headers: first/last/middle name, suffix, title, company, email, phones, `business|home|other` address sets (street, address 2, city, state, zip, country), website, **tags** (comma-separated), and an option to **auto-create a Project per Contact**. (VERIFIED)

---

### 2.11 Settings → Custom Fields; Settings → Tag Management

- Custom Fields: unlimited; Contact vs. Project scope; types include at least Short Answer/Text and Date (others UNVERIFIED); usable as tokens in emails, contracts, client-portal welcome messages, and as LCF/Questionnaire mapping targets. (VERIFIED)
- Tag Management page for renaming/deleting tags; unlimited tags; auto-tagging via Advanced Workflows. (VERIFIED)

---

## 3. Data & fields observed

| Entity | Field | Type / notes | Source confidence |
|---|---|---|---|
| Contact | First name, Last name | text (required: name) | VERIFIED |
| Contact | Middle name, Suffix, Title | text | VERIFIED (CSV) |
| Contact | Company | text; "Show as company" boolean | VERIFIED |
| Contact | Contact Type | enum: Hot Lead / Client / Cold Prospect / Other | VERIFIED |
| Contact | Email | email (required for LCF) | VERIFIED |
| Contact | Phone(s) | text; CSV format 888-888-8888 | VERIFIED |
| Contact | Address, Address 2, City, State, Zip, Country | up to 3 sets: business/home/other | VERIFIED |
| Contact | Website | URL | VERIFIED |
| Contact | Birthday | date | VERIFIED |
| Contact | Referred By | text/contact ref; feeds Referral Source report | VERIFIED |
| Contact | Notes | long text (also used as consent-checkbox landing field) | VERIFIED |
| Contact | Facebook, LinkedIn, Twitter, Instagram, Pinterest | text handles | VERIFIED |
| Contact | Contact Tags | multi-value, unlimited | VERIFIED |
| Contact | Custom Contact Fields | user-defined; types incl. text, date | VERIFIED |
| Contact | Client Portal access/customization | per-contact | VERIFIED |
| Contact | Archived flag; deleted-restorable | boolean | VERIFIED |
| Project | Title, Project Date, Primary Email, Phone, Contact Type (inherited), Calendar | | VERIFIED |
| Project | Lead Source | enum (user-defined options), auto-set by LCF/scheduling | VERIFIED |
| Project | Project Tags | multi-value | VERIFIED |
| Project | Custom Project Fields | user-defined | VERIFIED |
| Project | Workflow(s) with progress | | VERIFIED |
| Project | Related Contacts | many-to-many links to Contacts; "Hide from client list" | VERIFIED |
| Project | Notes, Emails, Files, To-dos, Events, Phone Log, Time Log, Activity Log | child collections | VERIFIED |
| LCF | Title, Notification (dashboard/email), Auto-Response, Calendar, Workflow, Contact Tags, Project Tags, Lead Source options, After-submit action (URL/message/none), Brand colors, Header image | | VERIFIED |
| LCF Question | Type (Heading, Text, Short, Long, Yes/No, List, Checkboxes, Date, File Upload, Project Details), label, required, maps-to (Contact/Project/Custom field), per-choice workflow/tags | | VERIFIED |
| LCF Install | mode: link / dialog / iframe embed | | VERIFIED |
| Lead Capture Email rule | Source (Knot/WeddingWire/ShowitFast), monitored address, auto-response | | VERIFIED |
| Pipeline | Type (Lead/Client), ≤5 Phases (tag- or time-defined), completed tag | | VERIFIED |
| Zapier | Triggers: New Contact, Updated Contact; Actions: Create Contact, Update Contact (also "create new project" mentioned in Wix listing) | | VERIFIED / LIKELY |

Not found: field-level list columns on Contacts list; a lead "status" beyond Hot/Cold/Client; a lead "owner/assignee" field; consent timestamp storage (consent is stored as text in Notes or a mapped field). (UNVERIFIED / absent)

---

## 4. Plan gating

| Capability | Legacy tiers (Essentials / Standard / Premier) | Current (single plan, 2025+) | Confidence |
|---|---|---|---|
| Lead Capture Forms count | 1 / 3 / 20 | Included (limit not confirmed; third parties say LCFs "and auto-responders" included) | LIKELY |
| LCF question types | 7 / 8 / 8 | 8 | VERIFIED (legacy) / LIKELY (current) |
| Zapier integration | Premier / "new subscription plan" only | Included | VERIFIED (legacy) / LIKELY (current) |
| Advanced Workflows (auto-tagging), if/then logic | Premier | Included | LIKELY |
| Client Portal | Premier | Included | LIKELY |
| Contacts / Projects | Unlimited on all | Unlimited | VERIFIED |
| Custom Fields | Unlimited | Unlimited | VERIFIED |
| SMS texting (LCF text auto-reply, opt-in question) | Add-on from $10/100 texts + number lease | Add-on | VERIFIED |
| Online Scheduling (lead source feed) | Add-on ($5–10/mo) | Add-on | LIKELY |
| Editing LCFs | Owner/Admin roles only | same | VERIFIED |
| Pricing | $13–15 / $25–30 / $50–60 per mo | ~$60/mo, $600/yr, $800/2yr | LIKELY |

---

## 5. User complaints, gaps, and confusion points

1. **Contact vs. Project confusion** — 17hats maintains a dedicated "Projects Vs. Contacts" article and a "Staying Organized" article because new users routinely misunderstand that documents, emails, lead source and workflows attach to Projects, not Contacts. (VERIFIED)
2. **Every form submission creates a new Project** — repeat inquiries from the same person produce multiple projects; auto-responses stop after the first submission, which surprises users. (VERIFIED behavior; complaint LIKELY)
3. **No merge-duplicates feature** — the only documented remedy is moving projects between contact records one at a time, and using "Hide from client list" to avoid duplicates from Related Contacts. (VERIFIED)
4. **Lead notifications only to the account owner** — extra recipients require Zapier. (VERIFIED)
5. **Notification emails landing in spam** — 17hats changed sender to `leads-*@17hats.com` and advises a wildcard filter. (VERIFIED)
6. **No team lead routing** — Capterra reviewer: "not a good system to be able to organize leads to different team members and what they can view." (VERIFIED quote)
7. **Lead dashboard weak / no back-and-forth status** — Capterra reviewer wants to move clients "from leads, to active client and back to lead again when they come back." (VERIFIED quote)
8. **General usability**: "kinda a messy program," "not user friendly," buggy needing refreshes, steep learning curve; support responses of "nothing we can do" / 2,700 feature requests per year. (VERIFIED quotes)
9. **LCF edits restricted to Owner/Admin**; team members must ask. (VERIFIED)
10. **Lead Capture Email rules limited to three sources** and 20–30 minute latency. (VERIFIED)
11. **No CAPTCHA / spam control documented** for LCFs. (UNVERIFIED as a complaint; absent from docs)
12. **Limited integrations** ("so limited") — most third-party lead feeds require Zapier. (VERIFIED quote / LIKELY)
13. **GDPR handling is DIY** — consent is a checkbox mapped to the Notes field; no consent log, timestamp, or versioning. (VERIFIED approach)
14. Pipelines capped at 7 lead / 5 client pipelines and 5 phases, and driven by tags, which several tutorials describe as needing careful setup. (VERIFIED limits; friction LIKELY)

---

## 6. Improvement opportunities for a clone

- **First-class Lead object with a status pipeline** (New → Contacted → Qualified → Proposal → Won/Lost) and reversible transitions, decoupled from Contact Type; keep automatic Won on quote-accept/contract-sign/payment.
- **Deduplication**: match on email/phone at form submit and import time; "existing contact submitted again" attaches an inquiry to the existing contact with an option to create or reuse a project; native **Merge Contacts** UI with field-level conflict resolution.
- **Lead owner/assignment** with round-robin or rule-based routing and per-user notification recipients (multiple emails, SMS, push) without Zapier.
- **Spam protection built in**: invisible CAPTCHA/Turnstile, honeypot, rate limiting, and a "Spam" bucket for review.
- **Consent as data**: dedicated consent fields with timestamp, IP, form version, and privacy-policy link; export for DSAR; erase-contact flow.
- **Real Companies/Organizations** entity with many contacts, roles, and a company timeline; keep "show as company" shorthand for solo vendors.
- **Configurable list grid** for Contacts and Leads: columns (type, tags, last activity, lead source, owner, value), saved views, multi-select bulk actions (tag, type change, archive, export, assign, start workflow) directly on the Contacts page.
- **Unified activity timeline on the Contact** aggregating all projects' emails, docs, notes, calls, and form submissions.
- **Form builder upgrades**: conditional logic, multi-step, native Facebook Lead Ads / Instagram / Google Forms connectors, JS embed (not just iframe) with theming, per-form spam stats, A/B thank-you pages, UTM capture into lead source automatically.
- **Lead source analytics** by conversion and revenue (not just counts), with UTM/referrer auto-detection.
- **Role-based editing** of forms and fields with granular permissions instead of Owner/Admin only.
- **Faster email-to-lead parsing** (minutes, not 20–30) with generic parsing rules beyond three vendors.
- **Unlimited pipelines/phases** with a true kanban drag-and-drop that writes back tags/status.

---

## 7. Confidence notes

| Claim | Status |
|---|---|
| Four contact types (Hot Lead orange, Client green, Cold Prospect blue, Other grey) | VERIFIED |
| Hot Leads and Cold Prospects appear on Leads page; "All" view alphabetical | VERIFIED |
| Auto-conversion to Client on quote accept / contract sign / invoice payment | VERIFIED |
| Contacts list alphabetical by first name with letter headers and type/tag filter buttons | VERIFIED |
| Search by first/last name, company, phone, email | VERIFIED |
| Import CSV via Contacts → gear; supported fields; tags comma-separated; auto-create project | VERIFIED |
| Export filtered by type/tag to CSV | VERIFIED |
| Bulk actions (archive/tags/workflows/delete) via checkboxes on Projects page | VERIFIED |
| Bulk actions available on the Contacts list itself | UNVERIFIED |
| Contacts list column set | UNVERIFIED (not found) |
| Contact profile fields (website, notes, birthday, address, referred by, social handles) | VERIFIED |
| Company field + "Show as company" checkbox | VERIFIED |
| Related Contacts on projects; "Hide from client list" | VERIFIED |
| Project Overview tabs and sections | VERIFIED |
| Move Project between contact records (reversible) | VERIFIED |
| No native merge-duplicates feature | VERIFIED (absence across help center, release notes, and search results) |
| Restore recently deleted contacts/projects exists | VERIFIED (article title) — retention window UNVERIFIED |
| LCF settings list (title, notification, auto-response, calendar, workflow, tags, lead source, after-submit, branding) | VERIFIED |
| Auto-response only for new contacts | VERIFIED |
| Question types incl. Checkboxes, Date, File Upload (<9.4 MB), Project Details | VERIFIED |
| Name & Email always required and mapped | VERIFIED |
| Install modes: link / dialog / iframe | VERIFIED |
| Only Owners/Admins edit LCFs | VERIFIED |
| Each submission creates a Contact (or updates) + new Project | VERIFIED (create); update-if-existing LIKELY |
| Lead Source is a Project field; Leads → Reporting counts by source | VERIFIED |
| Referral Source Reporting exists | VERIFIED (title) |
| Lead Capture Email rules for The Knot / WeddingWire / ShowitFast; 20–30 min lag | VERIFIED |
| New-lead email notifications only to owner; Zapier for extra recipients | VERIFIED |
| Notification sender leads-*@17hats.com | VERIFIED |
| Dashboard notification in "Let's Take Care of Business" | VERIFIED |
| SMS add-on: LCF text auto-reply and opt-in question; mobile push for texts | VERIFIED |
| Zapier triggers/actions: New Contact, Updated Contact, Create Contact, Update Contact | VERIFIED |
| Facebook Lead Ads → 17hats via Zapier only | VERIFIED (Zapier listing) |
| Consent checkbox approach (map to Notes) | VERIFIED |
| No CAPTCHA/spam protection | UNVERIFIED (absent from all sources) |
| Pipelines: Lead/Client, 7/5 active, ≤5 phases, tag-driven | VERIFIED |
| Legacy LCF limits 1/3/20 by tier; question types 7 vs 8 | VERIFIED (help center for question types) / LIKELY (limits from third-party) |
| Single ~$60/mo plan since 2025 including Zapier, portal, advanced workflows | LIKELY |
| Custom fields unlimited, Contact vs Project scope, Date type, token use | VERIFIED |
| Tags unlimited, Contact vs Project tags, auto-tag via Advanced Workflows | VERIFIED |
| Recent Client Activity page with filters | VERIFIED |
| Team-member visibility toggle for contacts/projects; no lead assignment | VERIFIED (permissions) / LIKELY (no assignment) |
| Reviewer complaints quoted (messy, buggy, lead dashboard, team routing) | VERIFIED (Capterra snippets) |
| Reddit-specific complaints | UNVERIFIED (no Reddit threads surfaced) |

---

## 8. Sources

### Official 17hats help center
- [Contacts collection](https://help.17hats.com/en/collections/550535-contacts)
- [17hats Contact Types](https://help.17hats.com/en/articles/924376-17hats-contact-types)
- [Contact Types](https://help.17hats.com/en/articles/3110603-contact-types)
- [Changing a Lead to a Client](https://help.17hats.com/en/articles/879529-changing-a-lead-to-a-client)
- [Adding Contacts to 17hats](https://help.17hats.com/en/articles/3110621-adding-contacts-to-17hats)
- [How do I manually add a contact?](https://help.17hats.com/en/articles/924374-how-do-i-manually-add-a-contact)
- [How do I import a CSV file of Contacts and Projects?](https://help.17hats.com/en/articles/934801-how-do-i-import-a-csv-file-of-contacts-and-projects)
- [Importing & Exporting Contacts collection](https://help.17hats.com/en/collections/1670635-importing-exporting-contacts)
- [How do I export my contact list?](https://help.17hats.com/en/articles/843725-how-do-i-export-my-contact-list)
- [Onboarding Step 2: Moving your Clients to 17hats](https://help.17hats.com/en/articles/10450504-onboarding-step-2-moving-your-clients-to-17hats)
- [Contacts Tags](https://help.17hats.com/en/articles/1769360-contacts-tags)
- [Tag Feature Overview](https://help.17hats.com/en/articles/3196308-tag-feature-overview)
- [Tag Management in 17hats](https://help.17hats.com/en/articles/6236261-tag-management-in-17hats)
- [Automatically Tag Contacts and Projects](https://help.17hats.com/en/articles/5910127-automatically-tag-contacts-and-projects)
- [How to Add/Remove Tags in Bulk](https://help.17hats.com/en/articles/3760729-how-to-add-remove-tags-in-bulk)
- [Custom Fields](https://help.17hats.com/en/articles/2545832-custom-fields)
- [Answer Mapping in Questionnaires & Lead Capture Forms](https://help.17hats.com/en/articles/2545940-answer-mapping-in-questionnaires-lead-capture-forms)
- [Complete List of Tokens](https://help.17hats.com/en/articles/1235598-complete-list-of-tokens)
- [Related Contacts](https://help.17hats.com/en/articles/934803-related-contacts)
- [How do I allow my clients to add related contacts through questionnaires?](https://help.17hats.com/en/articles/924366-how-do-i-allow-my-clients-to-add-related-contacts-through-questionnaires)
- [Move Projects between Contact Records](https://help.17hats.com/en/articles/2813332-move-projects-between-contact-records)
- [Restore recently deleted Contacts and Projects](https://help.17hats.com/en/articles/9015398-restore-recently-deleted-contacts-and-projects)
- [How do I archive a Project or Contact in 17hats?](https://help.17hats.com/en/articles/879747-how-do-i-archive-a-project-or-contact-in-17hats)
- [How to Delete or Archive Projects in Bulk](https://help.17hats.com/en/articles/2965836-how-to-delete-or-archive-projects-in-bulk)
- [How to Archive Projects in Bulk](https://help.17hats.com/en/articles/6891071-how-to-archive-projects-in-bulk)
- [Projects Vs. Contacts](https://help.17hats.com/en/articles/879690-projects-vs-contacts)
- [Project Overview](https://help.17hats.com/en/articles/3110647-project-overview)
- [How do I navigate the "Project Overview" screen?](https://help.17hats.com/en/articles/928568-how-do-i-navigate-the-project-overview-screen)
- [Staying Organized in 17hats](https://help.17hats.com/en/articles/962094-staying-organized-in-17hats)
- [Recent Client Activity](https://help.17hats.com/en/articles/2679659-recent-client-activity)
- [Client Portal – Customizing per Contact](https://help.17hats.com/en/articles/3160024-client-portal-customizing-per-contact)
- [Lead Capture collection](https://help.17hats.com/en/collections/550563-lead-capture)
- [Lead Overview: Lead Capture, Lead Overview Page](https://help.17hats.com/en/articles/928565-lead-overview-lead-capture-lead-overview-page)
- [Video: Lead Overview](https://help.17hats.com/en/articles/1031239-video-lead-overview)
- [Lead Management Process Overview](https://help.17hats.com/en/articles/3113059-lead-management-process-overview)
- [Lead Capture Forms Overview](https://help.17hats.com/en/articles/853251-lead-capture-forms-overview)
- [Lead Capture Forms – Building your First LCF](https://help.17hats.com/en/articles/3113231-lead-capture-forms-building-your-first-lcf)
- [Lead Capture Form Details](https://help.17hats.com/en/articles/3113718-lead-capture-form-details)
- [Lead Capture Form Question Types](https://help.17hats.com/en/articles/10167140-lead-capture-form-question-types)
- [Installing Your Lead Capture Form](https://help.17hats.com/en/articles/2795306-installing-your-lead-capture-form)
- [How to embed Lead Capture Forms to Squarespace](https://help.17hats.com/en/articles/1698392-how-to-embed-lead-capture-forms-to-squarespace)
- [Lead Capture Auto-Replies](https://help.17hats.com/en/articles/1131025-lead-capture-auto-replies)
- [Adding a Consent Checkbox](https://help.17hats.com/en/articles/1944251-adding-a-consent-checkbox)
- [Lead Capture Email Setup](https://help.17hats.com/en/articles/3114074-lead-capture-email-setup)
- [Email Lead Capture Form Details](https://help.17hats.com/en/articles/2823021-email-lead-capture-form-details)
- [Video: Email Lead Capture Set Up](https://help.17hats.com/en/articles/1031270-video-email-lead-capture-set-up)
- [ShowitFast Lead Capture Form Fields](https://help.17hats.com/en/articles/839837-showitfast-lead-capture-form-fields)
- [Overview of Lead Source Reporting in 17hats](https://help.17hats.com/en/articles/7336856-overview-of-lead-source-reporting-in-17hats)
- [Lead Source Reporting with Lead Capture Forms](https://help.17hats.com/en/articles/7336622-lead-source-reporting-in-17hats-with-lead-capture-forms)
- [Lead Source Reporting with Online Scheduling](https://help.17hats.com/en/articles/7336815-lead-source-reporting-in-17hats-with-online-scheduling)
- [Referral Source Reporting in 17hats](https://help.17hats.com/en/articles/8178404-referral-source-reporting-in-17hats)
- [Sending New Lead Email Notifications to Additional Email Addresses](https://help.17hats.com/en/articles/2978670-sending-new-lead-email-notifications-to-additional-email-addresses)
- [All About Workflows – Triggering Your Workflow](https://help.17hats.com/en/articles/1828264-all-about-workflows-triggering-your-workflow)
- [17hats Pipelines Overview](https://help.17hats.com/en/articles/9764837-17hats-pipelines-overview)
- [Zapier Integration](https://help.17hats.com/en/articles/2761371-zapier-integration)
- [Zapier – 17hats and MailChimp](https://help.17hats.com/en/articles/2978508-zapier-17hats-and-mailchimp)
- [Syncing Multiple Email Addresses into 17hats](https://help.17hats.com/en/articles/847666-syncing-multiple-email-addresses-into-17hats)
- [How does email correspondence work in 17hats?](https://help.17hats.com/en/articles/927448-how-does-email-correspondence-work-in-17hats)
- [Users – Getting Started and Setting Permissions](https://help.17hats.com/en/articles/840254-users-getting-started-and-setting-permissions)
- [Working with Users in 17hats](https://help.17hats.com/en/articles/2968814-working-with-users-in-17hats)
- [Account Settings Overview](https://help.17hats.com/en/articles/3156330-account-settings-overview)
- [17hats Dashboard](https://help.17hats.com/en/articles/3110596-17hats-dashboard)

### 17hats marketing, blog, release notes, university
- [Lead Capture Form feature page](https://www.17hats.com/features/lead-capture-form)
- [Lead Management feature page](https://www.17hats.com/features/lead-management)
- [Lead Source Reporting feature page](https://www.17hats.com/features/lead-source-reporting)
- [Auto-Responder feature page](https://www.17hats.com/features/auto-responder)
- [Tags feature page](https://www.17hats.com/features/tags)
- [Custom Fields feature page](https://www.17hats.com/features/custom-fields)
- [Related Contacts feature page](https://www.17hats.com/features/related-contacts)
- [Pipelines feature page](https://www.17hats.com/features/pipelines)
- [Project Page feature page](https://www.17hats.com/features/project-page)
- [SMS Texting](https://www.17hats.com/sms-texting)
- [Pricing](https://17hats.com/pricing)
- [Privacy Policy](https://www.17hats.com/privacy-policy)
- [Blog: The Mighty Power of Lead Capture Forms](https://blog.17hats.com/the-mighty-power-of-lead-capture-forms-in-17hats/)
- [Blog: How to Win More Work With a Lead Capture Form](https://blog.17hats.com/how-to-win-more-work-by-doing-less-work-with-a-lead-capture-form/)
- [Blog: Tackling 17hats Tags](https://blog.17hats.com/tackling-17hats-tags-for-optimized-organization/)
- [Blog: 17 Ways To Use Tags](https://blog.17hats.com/17-ways-to-use-tags-in-17hats/)
- [Blog: Automate tagging](https://blog.17hats.com/automate-tagging-for-optimal-business-organization/)
- [Blog: The Power of Adding Related Contacts to a Project](https://blog.17hats.com/the-power-of-adding-related-contacts-to-a-project/)
- [Blog: Meet Your New Secret Weapon: Pipelines](https://blog.17hats.com/tired-of-dropping-the-ball-meet-your-new-secret-weapon-pipelines/)
- [Blog: Templates from the 17hats Marketplace](https://blog.17hats.com/4-ways-to-level-up-your-business-this-summer-with-templates-from-the-17hats-marketplace/)
- [Blog: Easy Navigation Within 17hats](https://blog.17hats.com/easy-navigation-within-17hats/)
- [Release notes: contacts tag](https://17hats.releasenotes.io/tag/contacts)
- [Release notes: Email Notifications leads-*@17hats.com](https://17hats.releasenotes.io/release/e2XYK-email-notifications-leads-at-17hatscom)
- [Release notes: Recent Client Activity](https://17hats.releasenotes.io/release/8XaJK-recent-client-activity)
- [Release notes: Zapier Integration Beta](https://17hats.releasenotes.io/release/wwErL-zapier-integration-beta)
- [Release notes: Custom Fields](https://17hats.releasenotes.io/release/70WRd-custom-fields)
- [Release notes: Move Projects Between Contacts](https://17hats.releasenotes.io/release/hbgWl-move-projects-between-contacts)
- [17hats University: Import Contacts with Tags from CSV](https://www.17hatsuniversity.com/17hats-quick-tips/how-to-import-contacts-with-tags-from-csv-file)
- [17hats University: How to Use Custom Fields](https://www.17hatsuniversity.com/17hats-quick-tips/how-to-use-custom-fields-in-17hats)
- [17hats University: Project Details Question Type in LCFs](https://www.17hatsuniversity.com/17hats-quick-tips/using-the-project-details-question-type-in-lead-capture-forms)
- [17hats University: How to Add Other Contacts](https://www.17hatsuniversity.com/17hats-quick-tips/how-to-add-other-contacts-in-17hats)
- [17hats University: Pipelines Walkthrough](https://www.17hatsuniversity.com/17hats-quick-tips/pipelines-walkthrough)
- [17hats University: How To Set Up Your Lead Capture Form](https://www.17hatsuniversity.com/17hats-quick-tips/how-to-set-up-your-lead-capture-form)
- [YouTube: How To Import Contacts With Tags From A CSV File](https://www.youtube.com/watch?v=NVawcTYSvmU)
- [YouTube: How to Add "Other" Contacts in 17hats](https://www.youtube.com/watch?v=v7WFWTO9zF8)

### Third-party tutorials, integrations, reviews
- [Zapier: 17hats integrations](https://zapier.com/apps/17hats/integrations)
- [Zapier: 17hats + Facebook Lead Ads](https://zapier.com/apps/17hats/integrations/facebook-lead-ads-beta)
- [Zapier: Wix + 17hats](https://zapier.com/apps/wix/integrations/17hats)
- [Zapier: Leadpages + 17hats](https://zapier.com/apps/leadpages/integrations/17hats)
- [Zapier Community: 17hats to Constant Contact issue](https://community.zapier.com/troubleshooting-99/issue-17hats-to-zapier-to-constant-contact-integration-45107)
- [SaveMyLeads: Facebook Leads to 17hats](https://savemyleads.com/facebook-lead-ads/17hats)
- [debmitzelcreative: Series – Set Up a 17hats Lead Capture Form](https://debmitzelcreative.com/2024/09/18/series-how-to-set-up-a-17hats-lead-capture-form/)
- [debmitzelcreative: 17hats Bulk Actions](https://debmitzelcreative.com/2024/10/09/17hats-bulk-actions-why-you-should-be-using-them/)
- [debmitzelcreative: Custom Fields to Personalize](https://debmitzelcreative.com/2025/09/03/17hats-custom-fields-personalize-client-experience/)
- [jebbgraff: How To Make A Lead Capture Form In 17hats](https://jebbgraff.com/2023/03/how-to-make-a-lead-capture-form-in-17hats/)
- [Julieanne Walker: Importing Your Contacts into 17hats](https://www.julieannewalker.com/blog/importing-your-contacts-into-17hats)
- [TaxDome: How to Import From 17hats](https://help.taxdome.com/article/242-how-to-import-from-17hats)
- [Capterra: 17hats reviews](https://www.capterra.com/p/144328/17hats/reviews/)
- [G2: 17hats reviews](https://www.g2.com/products/17hats/reviews)
- [Trustpilot: 17hats](https://www.trustpilot.com/review/www.17hats.com)
- [Improve Photography: 17hats In-depth Review](https://improvephotography.com/52314/how-to-manage-your-photography-business-17hats-in-depth-review/)
- [Casara Photo: 17hats Review](https://casaraphoto.com/2024/10/09/17hats-review/)
- [Agiled: 17hats Pricing 2026](https://agiled.app/blog/17hats-pricing)
- [Agency Handy: 17hats Pricing](https://www.agencyhandy.com/client-portal/17hats-pricing/)
- [OneSuite: 17hats Pricing Guide](https://onesuite.io/blog/17hats-pricing/)
- [Taskip: 17hats Pricing 2026](https://taskip.net/17hats-pricing/)
- [Zendo: Evaluating 17hats Pricing](https://getzendo.io/blog/17hats-pricing/)
- [Swell System: Dubsado vs 17hats](https://swellsystem.com/dubsado-vs-17hats/)
- [Product Owl: 17hats Review 2026](https://www.productowl.io/crm/17hats)
