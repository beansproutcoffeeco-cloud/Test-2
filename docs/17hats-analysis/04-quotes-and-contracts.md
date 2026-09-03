# 17hats — Module 04: Quotes & Contracts (Documents, part 1)

Research method: web search only (20 distinct searches; help.17hats.com article snippets, 17hats.com feature pages, 17hats blog, 17hats University, review sites, a user blog review). No login, no account access, no data touched. WebFetch/curl were not available, so every claim below comes from search-result snippets; details that only exist deeper inside an article body are flagged as not found. Confidence tags: **VERIFIED** (stated directly in a 17hats help/feature/blog snippet), **LIKELY** (strongly implied by 17hats material or corroborated by third parties), **UNVERIFIED** (not found; inferred or unknown).

Date of research: 2026-09-03.

---

## 1. Summary

- 17hats quotes are built from three line-item types: **Standard** (required), **Choose One** (client must pick exactly one of a list), and **Choose Any** (optional multi-select up-sells such as prints, framing, insurance). Choose Any items can have a **client-editable or locked quantity**. (VERIFIED)
- A quote's "Quote Options" hold: internal document name, client-facing display title, **Valid Until** (expiration) date, **discount** (fixed $ or % of total), and a **tax rate** applied to line items flagged taxable. Templates store the valid-until date as a *relative* offset (e.g. "7 days from send"). (VERIFIED)
- The flagship pattern is the **3-in-1 / Combined Document** (Quote → Contract → Invoice): one link, the client selects options, then the Contract tab unlocks, they sign, then a "View Invoice" button appears and they pay — all in one window. Two-part (Quote+Contract, Quote+Invoice) and stand-alone Quote are also supported. Client choices flow automatically onto the invoice. (VERIFIED)
- Contracts are rich-text templates with **Tokens** (`[% contact.first_name %]` syntax) for merge data, plus interactive **Forms** elements (required initials, checkboxes for specific approvals, text inputs). Multiple signers (primary + related contacts) are supported. The business-side signee is whoever created/last saved the contract (Account Owner when sent by Workflow). (VERIFIED)
- 17hats states e-signatures are **legally binding** (with a "consult a lawyer" caveat). Signed contracts show the client signature and signed date in the footer, and the client is auto-emailed a copy on completion. **No evidence found** of a formal audit certificate, IP-address logging, or a signature certificate page. (Legal-binding claim VERIFIED; audit details UNVERIFIED)
- **Document activity** is tracked per document: Quotes log created / sent / viewed / edited / accepted; Contracts log created / sent / viewed / signed / edited. The history appears top-right above the document inside the Project. (VERIFIED)
- Documents can be **edited after sending**; if the client had already finalized, they must re-accept / re-sign. Editing a contract or invoice inside an accepted combined document forces re-acceptance of the quote *and* re-signing of the contract. Documents can be **voided**; voiding an invoice does not remove recorded payments. (VERIFIED)
- **Document Email Reminders** (Account Settings → Email Settings → Reminders) send upcoming and past-due emails with a button link to the document; past-due default is 1 day after due date, repeating monthly up to 12 times; templates are token-customizable. (VERIFIED — though these snippets are invoice-centric; applicability to quotes/contracts is LIKELY)
- **Products & Services** catalog (Account Settings → Money Matters) stores Internal Name, client-facing Display Name, Description, price, and an Income Category (from Bookkeeping Options); a line item can be saved to the catalog from within a quote/invoice via an "Options" checkbox. Third-party reviewers note no tiered pricing or multi-currency. (VERIFIED)
- **Branding**: logo auto-applies to Quotes/Contracts/Invoices/Questionnaires/Portal/Scheduling/Lead forms (max 640×400 px); HEX background/accent colors, accent font, and document-button colors; a **Global Header Image** for all documents via Brand Preferences → Images. Colors/fonts were historically gated to Level Two / Level Three (now everything is on the single $60/mo plan). (VERIFIED)
- **Numbering**: invoices auto-number starting at 1, +1 each save, editable only before first save, never reused even after deletion. **Quote numbering was not found** in any snippet. (Invoice VERIFIED; quote UNVERIFIED)

---

## 2. Pages / screens

Navigation labels below (Account Settings, Templates, Projects, Documents) are as used in 17hats help-article titles. Exact menu paths beyond those quoted are LIKELY, not verified.

### 2.1 Quote editor (inside a Project)

- **Purpose:** Build a price proposal a client can select from and accept online.
- **What the user sees (VERIFIED unless noted):**
  - A list of line items, each with **name, description, price, quantity, category** (Quote & Invoice Line Item Settings article).
  - Each line item has a **type**: Standard (required), Choose One (client must pick one from the group), Choose Any (optional multi-select).
  - For Choose Any items: a toggle making **quantity locked vs. editable by the client** (example given: tickets).
  - An **"Options" checkbox** on a line item that saves it (name, description, pricing, "all other settings") to Products & Services for reuse.
  - **Quote Options** panel: internal document name, client-facing display title, **Valid Until** date, **tax** selection (applied to line items marked taxable), **discount** (fixed amount or percentage of total).
  - Option to **attach a Contract and/or Invoice** to the quote (making it a combined document).
  - A "How Do I Manage Variable Pricing on Quotes?" help article exists (LIKELY covers Choose One/Choose Any as the mechanism for variable pricing; body not seen).
- **Actions available:** add/edit/remove line items, set item type, save item to catalog, set options (expiry, tax, discount), attach contract/invoice, save, send (see 2.7), later edit/void (see 2.8). Deposit / payment-schedule settings live on the attached *invoice* (17hats has "Scheduled Payments"), not on the quote itself — LIKELY.
- **Not found:** explicit "Notes" or "Terms" free-text fields on the quote; a per-quote number field; image/rich-text descriptions on line items (UNVERIFIED).
- **Navigation:** created from within a contact's **Project**; can also be created from a Quote Template (2.2) or sent automatically by a **Workflow** step.

### 2.2 Quote Templates (Templates area → Documents & Emails)

- **Purpose:** Reusable quotes with pre-built packages and à la carte items.
- **What the user sees:** same builder as 2.1. The **Valid Until date is relative** in templates ("valid for seven days from today" re-computes each use). (VERIFIED)
- **Actions:** create, edit, apply to a project; templates can be referenced by Workflow "Send Quote" steps (VERIFIED via "Workflows: Send Quote Completion Triggers" article title).
- **Navigation:** Templates → Documents & Emails (help article "How to Create & Manage Document & Email Templates"). Path label LIKELY.

### 2.3 Client-facing Quote page (public document link)

- **Purpose:** Where the client reviews options and accepts.
- **What the client sees (VERIFIED):** the quote first; if a contract is attached, a **"Contract" tab at the top** which is visible but **cannot be signed until the quote is accepted**. After acceptance, the **date of acceptance and a "view contract" button appear in the quote footer**. After signing, the footer shows the **client's signature, date signed, and a "view invoice" button**.
- **Client actions:** pick Choose One option, tick Choose Any items, adjust editable quantities, accept. Whether a client-side **"Decline"** action exists was **not found** (UNVERIFIED).
- **Branding:** logo, global header image, brand colors/fonts, button colors (VERIFIED, see 2.11).

### 2.4 Combined Document (3-in-1 Quote → Contract → Invoice)

- **Purpose:** Close the sale in one session: select, sign, pay.
- **Flow (VERIFIED):** Quote accepted → Contract tab unlocks → signed → Invoice button appears → pay. Client selections automatically update the invoice. Supported bundles: Quote+Contract+Invoice, Quote+Contract, Quote+Invoice, or Quote alone.
- **Editing rules (VERIFIED):** editing after send is allowed; if the client already finalized, they finalize again. If the quote was accepted and the attached contract/invoice is edited, the client must **re-accept the quote and re-sign the contract**.
- **Related:** "Sending Multiple 17hats Documents in One Email" article exists — a separate mechanism for attaching several documents to one email (distinct from the combined document; body not seen — LIKELY).
- **Workflow triggers (VERIFIED title only):** "Send Quote Completion Triggers" — a workflow can advance when the quote is completed; exact trigger names (accepted / signed / paid) not seen in snippets.

### 2.5 Contract editor (inside a Project)

- **Purpose:** Write/sign a legally binding agreement.
- **What the user sees:**
  - Rich-text body (17hats shipped a "new text editor" — blog post exists; formatting specifics not captured — LIKELY).
  - **Tokens** inserted as placeholders; three token families: General, Document, Online Scheduling. Contact tokens include `[% contact.first_name %]`, `[% contact.last_name %]`, full name, company, address, email, phone; project tokens include Project Date and Project Location. (VERIFIED)
  - **Forms** elements: require **initials** on sections, **checkboxes** for specific approvals, **text inputs** for additional info. (VERIFIED)
  - **Signature section**: business-side signee name = the user who created or last saved the contract; Account Owner always when sent by Workflow; to have another user sign via workflow, set that step to trigger "upon review" so they can edit/re-save. (VERIFIED)
  - **Multiple client signatures**: primary and related contacts can both sign (help article "Can I add more signatures to my contracts?"). (VERIFIED)
- **Actions:** compose, insert token, insert form element, save, send, edit-after-send (forces re-sign), void.
- **Not found:** a dedicated countersign step (business signs *after* client), explicit date-field elements, attachment upload to a contract, drag-and-drop signature-block placement (UNVERIFIED).

### 2.6 Contract Templates / template library

- **Purpose:** Reusable contract bodies.
- **Facts:** "Contract Templates" and "Adding Contract Templates to 17hats" help articles exist; the latter LIKELY describes pasting an existing contract (e.g., from a lawyer) into a template. Templates are customized with Tokens. 17hats University has a "Creating a Contract Template" quick tip. (VERIFIED existence)
- **Legal template library:** **No evidence found** that 17hats ships attorney-drafted contract templates or integrates with The Contract Shop / TheLawTog / Creative Law Shop. A 17hats User Community (Facebook group) post surfaced in the same search, suggesting users source contracts externally, but content was not visible. (UNVERIFIED)

### 2.7 Send Document screen / email

- **Purpose:** Deliver a document to the client.
- **Facts:** "How to Send a Document" help article exists (body not seen). Reminder emails deliver a **button link** at the end of the email that opens the document. Document/email templates use Tokens. Document Confirmation feature: on completion the system automatically thanks the client and emails an electronic copy. (VERIFIED)
- **Not found:** whether a copyable share link exists independent of email, whether the client portal lists documents (portal exists as a feature; document listing LIKELY), "resend" button behavior (UNVERIFIED).

### 2.8 Document view (internal) — activity, edit, void

- **Purpose:** Manage a sent document.
- **What the user sees (VERIFIED):** the document with an **activity history in the top-right** above it. Quote events: created, sent, viewed, edited, accepted. Contract events: created, sent, viewed, signed, edited.
- **Actions:** edit (re-finalization rules in 2.4), **void** (help article "How to void a document"; voiding an invoice keeps payments and their income-category attribution, and payments cannot be removed after voiding), save/print to PDF (a "saving/printing to PDF" capability is referenced in help results, details thin — LIKELY).
- **Statuses:** created/sent/viewed/edited/accepted/signed appear as *events*; whether 17hats also exposes a single status badge with **Declined** and **Expired** values was **not found**. Expiration exists via Valid Until (VERIFIED); a "Declined" status is UNVERIFIED.

### 2.9 Document Email Reminders (Account Settings → Email Settings → Reminders)

- **Purpose:** Automated nudges for outstanding documents.
- **Facts (VERIFIED):** "Upcoming" reminders send an email with document link before the due date; past-due default is 1 day after due, repeats monthly, stops after 12 sends; "Repeat" controls cadence and stop condition; templates editable here or in Documents & Emails templates; token-customizable.
- **Scope caveat:** snippets speak of "due date," which fits invoices; applicability to unsigned contracts / unaccepted quotes is LIKELY (feature page is titled "Document Reminders") but not explicitly confirmed.

### 2.10 Products & Services (Account Settings → Money Matters)

- **Purpose:** Catalog of sellable items.
- **Fields (VERIFIED):** Internal Name (alphabetized in-app), Display Name (client-facing), Description (client-facing), price, Income Category (defined under Account Settings → Bookkeeping Options).
- **Actions:** add/edit items; items are pulled into quotes/invoices; items can be created from within a document via the "Options" save checkbox.
- **Not found:** explicit per-item taxable flag on the catalog (line items *can* be marked taxable — VERIFIED — so a catalog-level flag is LIKELY), categories beyond Income Category, units, cost/COGS, images, tiered pricing (reviewer says none), multi-currency (reviewer says none). (UNVERIFIED / third-party)

### 2.11 Brand Preferences (Account Settings → Brand Preferences)

- **Tabs seen in article titles:** "Colors & Fonts", "Images". (VERIFIED)
- **Facts (VERIFIED):** logo upload (≤640 px wide, ≤400 px high) auto-shown on Invoices, Quotes, Contracts, Questionnaires, Client Portal, Online Scheduling, Lead Capture Forms; HEX **background** and **accent** colors, **accent font** (updates document titles/headings), **document button** color; **Global Header Image** for documents uploaded to an image gallery under Images; custom subdomain and background also mentioned in blog.
- **Not found:** per-document header/footer text blocks, custom footer, per-template color overrides (UNVERIFIED).

### 2.12 Invoice Settings (Account Settings) — numbering

- **Facts (VERIFIED):** auto-number starts at 1 for the first invoice; +1 per saved invoice; the Invoice # field can be overwritten (e.g., to a prefix/starting number) only until first save; the sequence continues from a custom value; numbers are unique and never reused even after deletion; cannot change after save.
- **Quote/contract numbering:** not found (UNVERIFIED).

---

## 3. Data & fields observed

| Entity | Field | Type / values | Notes | Confidence |
|---|---|---|---|---|
| Quote | Internal name | text | Internal label | VERIFIED |
| Quote | Display title | text | Client-facing | VERIFIED |
| Quote | Valid Until | date (absolute); relative offset in templates | Expiration | VERIFIED |
| Quote | Tax | reference to tax rate | Applies to taxable line items only | VERIFIED |
| Quote | Discount | fixed amount OR percentage of total | | VERIFIED |
| Quote | Attached contract | optional ref | Makes combined doc | VERIFIED |
| Quote | Attached invoice | optional ref | Makes combined doc | VERIFIED |
| Quote | Notes / Terms text | text | Not found in snippets | UNVERIFIED |
| Quote | Quote number | — | Not found | UNVERIFIED |
| Quote | Activity events | created, sent, viewed, edited, accepted (+ timestamps) | Shown top-right of doc | VERIFIED |
| Quote | Accepted date | datetime | Shown in client-facing footer | VERIFIED |
| Line item | Name | text | | VERIFIED |
| Line item | Description | text | | VERIFIED |
| Line item | Price | currency | | VERIFIED |
| Line item | Quantity | number | | VERIFIED |
| Line item | Category | ref (Income Category) | | VERIFIED |
| Line item | Type | Standard / Choose One / Choose Any | | VERIFIED |
| Line item | Client-editable quantity | boolean | Choose Any only | VERIFIED |
| Line item | Taxable | boolean | "line item marked as taxable" | VERIFIED |
| Line item | Save to Products & Services | boolean ("Options" checkbox) | | VERIFIED |
| Line item | Group/section label for Choose One lists | — | Implied by "list" of options | LIKELY |
| Contract | Body | rich text with tokens | | VERIFIED |
| Contract | Tokens | `[% contact.first_name %]`, `[% contact.last_name %]`, full name, company, address, email, phone, project date, project location, + Document and Online Scheduling token families | | VERIFIED |
| Contract | Form elements | initials, checkbox, text input | | VERIFIED |
| Contract | Business signee | user who created/last saved; Account Owner via Workflow | | VERIFIED |
| Contract | Client signers | primary contact + related contacts | | VERIFIED |
| Contract | Signature, signed date | shown in footer post-sign | | VERIFIED |
| Contract | Signer IP / user agent / certificate | — | Not found | UNVERIFIED |
| Contract | Activity events | created, sent, viewed, signed, edited | | VERIFIED |
| Document (any) | Voided flag | boolean | Void article exists; invoice payments persist | VERIFIED |
| Document (any) | PDF export | — | "saving/printing to PDF" referenced; details thin | LIKELY |
| Reminder | Upcoming on/off, Past-due offset (default 1 day), Repeat cadence (default monthly), Max sends (12) | | | VERIFIED |
| Product/Service | Internal Name, Display Name, Description, Price, Income Category | | | VERIFIED |
| Product/Service | Taxable, unit, cost, image | — | Not found | UNVERIFIED |
| Brand | Logo (≤640×400 px), background HEX, accent HEX, accent font, document button color, global header image, subdomain | | | VERIFIED |
| Invoice | Invoice # | auto-increment from 1; editable pre-save; unique forever | | VERIFIED |

---

## 4. Plan gating

- **Current (2025→):** 17hats moved to a **single all-inclusive plan** — $60/month, $600/year, $800 for two years; 7-day free trial. Quotes, contracts, e-signature, brand colors/fonts, client portal, Zapier, advanced workflows are all included. (VERIFIED via 17hats pricing page snippet + multiple third-party pricing write-ups)
- **Legacy tiers (no longer sold; still referenced in help articles):** Essentials (~$15/mo), Standard (~$30/mo), Premier (~$45–60/mo). Third-party sources report document caps on legacy tiers: Essentials **20 documents/month** (quotes+contracts+invoices+questionnaires combined), Standard **35/month**, Premier unlimited. (LIKELY — third-party; 17hats help still says brand colors/fonts require "Level Two or Level Three membership", which corroborates tiering of branding.)
- **Feature-level gating within Quotes/Contracts:** none found on the current plan. Brand Preferences colors/fonts were gated to Level Two/Three historically (VERIFIED help text).

---

## 5. User complaints, gaps, and confusion points

Sourced from Capterra reviews snippets, Improve Photography review, Staged4more review, Spruce Rd. review, product-comparison blogs. Individual quotes are paraphrased from snippets.

- **Setup difficulty / learning curve:** "really hard to set up and took days to figure out," "frustrating and not user friendly." (VERIFIED as review sentiment)
- **Clunky navigation:** transitions between features are "a bit clunky"; users "take the long route" to reach destinations; interface "could use a facelift"; "still has glitches." (VERIFIED)
- **Premature feature rollouts:** one reviewer suggested a recent release was "premature or too widespread." (VERIFIED)
- **Re-finalization friction (design gap):** any edit to an accepted combined document forces the client to re-accept the quote *and* re-sign the contract — a source of client confusion and extra emails. (VERIFIED behavior; complaint LIKELY)
- **Signee-name surprise:** the business signature shows whoever *last saved* the contract, so a team member editing a contract silently replaces the owner's name; workflow-sent contracts always show the Account Owner. (VERIFIED behavior — clearly a confusion point given a dedicated help article exists)
- **Invoice numbers immutable after save & never reused:** users cannot fix a mistyped number post-save. (VERIFIED)
- **Catalog limitations:** reviewer notes no tiered pricing and no multi-currency. (third-party — LIKELY)
- **No visible audit certificate:** no evidence of a signature certificate / IP log that legal-minded users often expect (competitors like HoneyBook/Dubsado and generic e-sign tools advertise it). (UNVERIFIED gap — absence of evidence)
- **Client-side decline path:** not found; if absent, businesses cannot learn *why* a quote was not accepted. (UNVERIFIED)
- **Quote numbering:** not documented; likely absent. (UNVERIFIED)
- **Reminders appear invoice/due-date-centric;** unclear whether unsigned contracts get automatic nudges. (UNVERIFIED)
- **Legacy document caps** (20/35 per month) were a frequent pricing complaint before the 2025 single-plan switch. (LIKELY, third-party)

---

## 6. Improvement opportunities for a clone

1. **Keep the 3-in-1 flow** (select → sign → pay in one URL) — it is the most praised feature — but add a **progress stepper** and allow the business to choose ordering (e.g., sign before select for retainers).
2. **Granular re-finalization:** re-request only the affected step (e.g., edited invoice → re-confirm invoice only), with a change diff shown to the client, instead of forcing re-accept + re-sign.
3. **Explicit status machine** for quotes and contracts (Draft, Sent, Viewed, Accepted, Declined w/ reason, Expired, Voided, Superseded) surfaced as a badge and filterable list — 17hats exposes events but no clear decline/expire status.
4. **Client "Decline" with reason + counter-request** to capture lost-deal data.
5. **Full e-signature audit trail**: signer email, IP, user agent, server timestamps, document hash, tamper-evident signed PDF with certificate page, and per-signer consent to e-sign (ESIGN/UETA language). 17hats shows only signature + date.
6. **Explicit countersign step** and per-contract signee selection (choose which team member signs) instead of "whoever saved last."
7. **Quote/contract numbering** with configurable prefixes/sequences; allow editing numbers with uniqueness validation instead of permanent locks.
8. **Richer line items**: images, per-item taxable/tax-class, units, min/max quantity, tiered/volume pricing, multi-currency, package "included items" sub-lists, optional-item defaults (pre-checked).
9. **Notes/Terms blocks** on quotes with template defaults.
10. **Versioning**: keep each sent version and show which version the client accepted.
11. **Contract builder ergonomics**: drag-in blocks (signature, initials, date, checkbox, text field), required-field validation before signing, attachments (PDF exhibits), and a starter library of industry templates with clear "not legal advice" labeling (17hats appears to ship none).
12. **Reminders for every document type** (unviewed quote, unsigned contract) with per-document override and stop-on-completion.
13. **Share link + portal listing** in addition to email, with view-count and last-viewed shown inline.
14. **Per-template branding overrides** (header/footer text, colors) on top of global brand settings.
15. **Better first-run setup** (guided template wizard) to address the strongest recurring complaint (setup difficulty).

---

## 7. Confidence notes

| Claim | Status |
|---|---|
| Three line-item types: Standard / Choose One / Choose Any | VERIFIED |
| Choose Any quantity lockable or client-editable | VERIFIED |
| Line item fields: name, description, price, quantity, category | VERIFIED |
| "Options" checkbox saves line item to Products & Services | VERIFIED |
| Quote Options: internal name, display title, valid-until, tax, discount ($ or %) | VERIFIED |
| Template valid-until is relative | VERIFIED |
| Tax applies only to items marked taxable | VERIFIED |
| Quote can attach contract and/or invoice | VERIFIED |
| Combined doc: contract tab locked until quote accepted; footer shows acceptance date, then signature + signed date, then "view invoice" | VERIFIED |
| Client selections auto-update invoice | VERIFIED |
| Bundles: 3-in-1, Quote+Contract, Quote+Invoice, Quote alone | VERIFIED |
| Edit after send allowed; client re-finalizes; accepted combined doc → re-accept + re-sign | VERIFIED |
| Activity events for quotes and contracts; shown top-right of document | VERIFIED |
| Void document article exists; voided invoice retains payments | VERIFIED |
| PDF save/print exists | LIKELY |
| Tokens: three families; `[% contact.first_name %]` syntax; contact/project tokens | VERIFIED |
| Contract Forms: initials, checkboxes, text inputs | VERIFIED |
| Multiple signers (primary + related contacts) | VERIFIED |
| Business signee = creator/last saver; Account Owner via Workflow; "upon review" trick | VERIFIED |
| E-signatures legally binding (per 17hats) | VERIFIED |
| Auto thank-you + electronic copy on completion | VERIFIED |
| IP/timestamp audit certificate | UNVERIFIED (not found) |
| Explicit countersign, date fields, attachments in contracts | UNVERIFIED |
| Attorney-drafted template library in 17hats | UNVERIFIED (no evidence) |
| Document Email Reminders settings and defaults | VERIFIED (invoice-centric); applies to quotes/contracts | LIKELY |
| Send-document methods beyond email (copy link) | UNVERIFIED |
| Client "Decline" action / Declined status | UNVERIFIED |
| Expired state via Valid Until | VERIFIED (date) / status label UNVERIFIED |
| Products & Services fields (Internal/Display name, Description, Income Category) | VERIFIED |
| Catalog taxable flag, units, images | UNVERIFIED |
| No tiered pricing / no multi-currency | LIKELY (third-party) |
| Branding: logo dims, HEX colors, accent font, button color, global header image | VERIFIED |
| Colors/fonts historically Level Two/Three only | VERIFIED |
| Invoice numbering rules | VERIFIED |
| Quote/contract numbering | UNVERIFIED (not found) |
| Single $60/mo plan since 2025; legacy tier document caps 20/35/unlimited | VERIFIED (plan) / LIKELY (caps, third-party) |
| Review complaints (setup, clunky nav, glitches) | VERIFIED as sentiment |

---

## 8. Sources

17hats official (help center, feature pages, blog, University):
- [Quote Options | 17hats Help Center](https://help.17hats.com/en/articles/3116500-quote-options)
- [Quote & Invoice Line Item Settings | 17hats Help Center](https://help.17hats.com/en/articles/3116928-quote-invoice-line-item-settings)
- [Quote Templates | 17hats Help Center](https://help.17hats.com/en/articles/1698294-quote-templates)
- [How Do I Manage Variable Pricing on Quotes? | 17hats Help Center](https://help.17hats.com/en/articles/935049-how-do-i-manage-variable-pricing-on-quotes)
- [Combined Documents | 17hats Help Center](https://help.17hats.com/en/articles/924358-combined-documents)
- [Viewing Document Activity | 17hats Help Center](https://help.17hats.com/en/articles/849328-viewing-document-activity)
- [How to void a document | 17hats Help Center](https://help.17hats.com/en/articles/3967282-how-to-void-a-document)
- [How to Send a Document | 17hats Help Center](https://help.17hats.com/en/articles/3250522-how-to-send-a-document)
- [Sending Multiple 17hats Documents in One Email | 17hats Help Center](https://help.17hats.com/en/articles/1052657-sending-multiple-17hats-documents-in-one-email)
- [Workflows: Send Quote Completion Triggers | 17hats Help Center](https://help.17hats.com/en/articles/2165100-workflows-send-quote-completion-triggers)
- [Email Settings - Document Email Reminders | 17hats Help Center](https://help.17hats.com/en/articles/2280471-email-settings-document-email-reminders)
- [How to Create & Manage Document & Email Templates | 17hats Help Center](https://help.17hats.com/en/articles/879803-how-to-create-manage-document-email-templates)
- [Contract Templates | 17hats Help Center](https://help.17hats.com/en/articles/2350413-contract-templates)
- [Adding Contract Templates to 17hats | 17hats Help Center](https://help.17hats.com/en/articles/879490-adding-contract-templates-to-17hats)
- [Complete List of Tokens | 17hats Help Center](https://help.17hats.com/en/articles/1235598-complete-list-of-tokens)
- [User and Account Owner Contract Signature Options | 17hats Help Center](https://help.17hats.com/en/articles/2868505-user-and-account-owner-contract-signature-options)
- [Can I add more signatures to my contracts? | 17hats Help Center](https://help.17hats.com/en/articles/962028-can-i-add-more-signatures-to-my-contracts)
- [Video: Writing and Signing Contracts | 17hats Help Center](https://help.17hats.com/en/articles/982447-video-writing-and-signing-contracts)
- [17hats Customization Options for Emails, Contracts, and Email Signatures | 17hats Help Center](https://help.17hats.com/en/articles/839258-17hats-customization-options-for-emails-contracts-and-email-signatures)
- [Contracts collection | 17hats Help Center](https://help.17hats.com/en/collections/550682-contracts)
- [Documents collection | 17hats Help Center](https://help.17hats.com/en/collections/550651-documents)
- [Money Matters - Products & Services | 17hats Help Center](https://help.17hats.com/en/articles/849333-money-matters-products-services)
- [Brand Preferences - Colors & Fonts Tab | 17hats Help Center](https://help.17hats.com/en/articles/3110814-brand-preferences-colors-fonts-tab)
- [Global Header Image on Documents | 17hats Help Center](https://help.17hats.com/en/articles/6698903-global-header-image-on-documents)
- [Invoice Settings | 17hats Help Center](https://help.17hats.com/en/articles/3116849-invoice-settings)
- [How to Change an Invoice Number | 17hats Help Center](https://help.17hats.com/en/articles/3149673-how-to-change-an-invoice-number)
- [Scheduled Payments | 17hats Help Center](https://help.17hats.com/en/articles/2548662-scheduled-payments)
- [17hats – Quotes Feature](https://www.17hats.com/features/quotes)
- [17hats – 3-in-1 Document Feature](https://www.17hats.com/features/quote-contract-invoice)
- [17hats – Contracts Feature](https://www.17hats.com/features/contract)
- [17hats – Document Templates Feature](https://www.17hats.com/features/document-templates)
- [17hats – Document Reminders Feature](https://www.17hats.com/features/document-reminders)
- [17hats – Document Confirmation Feature](https://www.17hats.com/features/document-confirmation)
- [17hats – Brand Customization Feature](https://www.17hats.com/features/brand-customization)
- [17hats – Custom Logo Feature](https://www.17hats.com/features/custom-logo)
- [17hats Pricing](https://17hats.com/pricing)
- [17hats vs. Dubsado Full Feature Comparison – 17hats Blog](https://blog.17hats.com/17hats-vs-dubsado-full-feature-comparison/)
- [Five Ways To Showcase Your Branding With 17hats – 17hats Blog](https://blog.17hats.com/five-ways-to-showcase-your-branding-with-17hats/)
- [Meet the New 17hats Text Editor – 17hats Blog](https://blog.17hats.com/new-text-editor/)
- [Feature Spotlight: Using Tokens in 17hats Email Templates – 17hats Blog](https://blog.17hats.com/feature-spotlight-using-in-tokens-in-17hats-email-templates/)
- [Book Clients Faster: Quote, Contract, & Invoice – 17hats University](https://www.17hatsuniversity.com/17hats-webinar-edu/book-clients-faster-quote-contract-invoice)
- [Creating a Contract Template – 17hats University](https://www.17hatsuniversity.com/17hats-quick-tips/creating-a-contract-template)

Third-party / reviews / video:
- [How I Automated my Web Design Quote, Contract & Invoice using 17hats – YouTube](https://www.youtube.com/watch?v=aP1W7C0CR9A)
- [17hats Tutorial | How To Use Tokens In 17hats – YouTube](https://www.youtube.com/watch?v=ddtOFUSH4r0)
- [17Hats review (client on-boarding software) – Spruce Rd.](https://sprucerd.com/blog/17hats/)
- [How we handle: Sending proposals – Spruce Rd.](https://sprucerd.com/blog/how-we-handle-sending-proposals/)
- [17hats | Contracts, Invoices & Quotes – Hannah Marie](https://hannahmarie.ca/17hats-contracts-invoices-quotes/)
- [17Hats - Setting Up Your Templates – Thrive Business Management](http://www.thrivebusinessmanagement.com/blog/2016/01/06/17hats-setting-up-your-templates-virtual-assistant-for-photographers)
- [17hats Reviews – Capterra](https://www.capterra.com/p/144328/17hats/reviews/)
- [17hats Software Pricing, Alternatives – Capterra](https://www.capterra.com/p/144328/17hats/)
- [17hats In-depth Review – Improve Photography](https://improvephotography.com/52314/how-to-manage-your-photography-business-17hats-in-depth-review/)
- [Our Review of 17hats – Staged4more](https://www.staged4more.com/blog/review-17hats)
- [17hats Review 2026 – Product Owl](https://www.productowl.io/crm/17hats)
- [17hats Pricing 2026: True Cost After Add-Ons – Agiled](https://agiled.app/blog/17hats-pricing)
- [17hats Pricing: Plans and Costs – OneSuite](https://onesuite.io/blog/17hats-pricing/)
- [Evaluating 17Hats Pricing And Plans – Zendo](https://getzendo.io/blog/17hats-pricing/)
- [17hats Pricing: Should You Pay $60/Month? – Agency Handy](https://www.agencyhandy.com/client-portal/17hats-pricing/)
- [HoneyBook vs 17Hats (2026) – Swell System](https://swellsystem.com/honeybook-vs-17hats/)
- [17Hats User Community (Facebook group post, April 2020)](https://www.facebook.com/groups/17HatsUserQA/posts/2734592280160586/)
