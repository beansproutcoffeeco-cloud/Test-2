# 17hats — Module 05: Invoices, Payments, and Bookkeeping

Research-only analysis compiled 2026-09-03 from public web search snippets (help.17hats.com, 17hats.com feature/integration pages, 17hats blog, 17hats release notes, 17hats University, review sites, Facebook user-group post titles). No accounts were accessed. 26 distinct searches were run; the session's search budget was then exhausted, so several sub-topics (listed in Section 7 as UNVERIFIED / "not found") could not be researched further.

Confidence legend used throughout: **VERIFIED** = stated in an official 17hats source snippet; **LIKELY** = stated by a third party or strongly implied; **UNVERIFIED** = not found or contradictory.

---

## 1. Summary

- **Invoices live inside Projects.** An invoice is created from a Project ("add new"), optionally from an Invoice Template, and carries: internal title, client-facing display title, due date, PO number, notes, tax rate, discount (fixed or %), line items (name, description, price, quantity, category), an "online payments" on/off switch, an optional Payment Schedule, and an optional Recurring setting. (VERIFIED)
- **Two distinct billing mechanisms:** *Payment Schedules* split one invoice total into N installments (equal or custom) with due dates keyed to "received", "project date", "final due date", or a custom date; *Recurring Invoices* clone-and-send a whole invoice weekly / monthly / yearly until an end condition. 17hats has a dedicated help article explaining the difference because users confuse them. (VERIFIED)
- **Automatic Payments** (card-on-file auto-charge of each scheduled installment) require Stripe or Square, must be enabled globally (Account Settings > Money Matters > Invoice Options: "Customers can save card data" then "Automatic Payments") *and* per invoice; the client opts in at checkout with two checkboxes (save card / auto-charge). Cards are stored at the processor, never in 17hats; the owner sees only card brand + last 4. (VERIFIED)
- **Processors:** "17hats Payments" is a white-labelled Stripe integration (cards: Visa/MC/Discover/Amex; ACH e-check US-only; Apple Pay / Google Pay). Square is also supported (tips, saved cards, auto-pay). PayPal appears to remain available only on higher plan levels; Authorize.net is legacy. Published fees: card 2.9% + $0.30 (for "Level Two, Level Three and Founding Member" plans), ACH 0.80% + $1.50 capped at $6.50. Level One card rate was not found. (VERIFIED for fees; LIKELY for PayPal/Authorize.net status)
- **Reminders:** Only *past-due* invoice reminders were documented: send X days after due date, repeat never/daily/weekly, stop after X occurrences or when paid; configured under Account Settings > Email Settings > Email Reminders. No late-fee feature and no pre-due-date reminder found. (VERIFIED for reminders; late fees UNVERIFIED / not found)
- **Tips:** client-side gratuity at checkout (No Tip / 10% / 18% / 20% / custom, capped at invoice total), enabled under Global Invoice Settings with an Income Category; requires Stripe or Square. (VERIFIED)
- **Refunds & voids:** full or partial refunds per payment (manual or Stripe/Square), from a "refund" link beside each payment at the bottom of the invoice, with options to void the invoice and email the client. Manual payments ("Record Payment") capture amount, date, reference (e.g., check #), and deposit account. No credit-note / customer-credit-balance feature was found. (VERIFIED; credit notes UNVERIFIED)
- **Bookkeeping** is cash-basis. Bank connection is a read-only feed (claims 22,000 institutions, imports 90 days on connect; provider not named — Plaid/Yodlee UNVERIFIED), with .qbo/.ofx file import fallback, auto-suggested categories, editable pre-populated category list, manual accounts, manual expenses (Description, Amount, Date, Account, Category, Project), receipt attachment to transactions, and matching bank transactions to invoices. Stripe processing fees auto-post to Bookkeeping since 31 May 2025. (VERIFIED)
- **Reports:** Profit & Loss and Sales Tax reports (Bookkeeping tab > "Reports", upper right); Aged Receivables also referenced as CSV-exportable; Lead Source Reporting (project-level Lead Source field, tracks invoice payments per source). No mileage, 1099, balance-sheet, or revenue-by-project-type report was found. (VERIFIED for P&L/Sales Tax/Lead Source; others UNVERIFIED)
- **QuickBooks Online sync:** one-way push of new invoices and their payments (payments land in Undeposited Funds by default), bulk "Import Invoices" for historical invoices, US/Canada/UK only, requires QBO "Custom Transaction Numbers" and QBO tips enabled if 17hats tips are used. Third-party pricing pages say QBO sync ($5/mo) and Bank Connect ($10/mo) are paid add-ons on top of a single ~$60/mo plan since 2025. (VERIFIED for behaviour; LIKELY for pricing)
- **Single currency per account** (default USD), changed in Account Settings > Invoice Options; changing it retroactively affects existing invoices; multi-currency requires a linked brand. (VERIFIED)

---

## 2. Pages / screens

### 2.1 Invoice builder (inside a Project)
- **Purpose:** create/edit a single invoice for a Project contact.
- **Navigation to:** Project page > "add new" > Invoice (VERIFIED). Also reachable from an accepted Quote/Contract flow and from Online Scheduling bookings (LIKELY — article "Online Scheduling Payments" exists; details not captured).
- **What the user sees (VERIFIED from "Invoice Settings" and "Invoice Templates" articles):**
  - Header / "Invoice Options" block: internal document title; client-facing display title; due date; purchase order number; notes; tax rate selector (from Tax Settings); discount (fixed $ or % of invoice total); toggle to disable online payments; "set a payment schedule"; "recurring invoice" checkbox.
  - Line-item grid: name, description, price, quantity, category (income category); per-line "taxable" flag and per-line tax rate; ability to pick from Products & Services catalog or a template.
  - Top bar (on a saved invoice): "Balance" figure with an adjacent **"Record Payment"** button; **"Live View"** button (top right) to see the client's view; **Print**; **Preview** (client view + direct URL).
  - Bottom of invoice: list of payments, each with a **"refund"** link.
- **Actions:** save, send (choose email template), record manual payment, refund, void, print, preview/live view, apply template, add payment schedule, set recurring, disable online payment (VERIFIED). Attach files to an invoice: not found (UNVERIFIED).
- **Navigation from:** back to Project; to the client-facing invoice/payment URL.

### 2.2 Invoice Templates (Account Settings > Templates > Invoice Templates)
- **Purpose:** reusable invoice definitions. Fields mirror the builder; the due date is stored *relative* ("X days/weeks/months/years" from creation) so it recalculates on use. (VERIFIED)
- **Actions:** create/edit/delete template; select template inside a new invoice — must be chosen *before* enabling recurrence settings (VERIFIED).

### 2.3 Payment Schedule editor (modal/section inside the builder)
- **Purpose:** split the invoice total into installments (VERIFIED).
- **Sees/controls:** number of payments; equal split or customizable amounts; due-date rule per installment: on receipt of document, relative to project date, relative to final due date, or custom date (VERIFIED). Percentage-based split: LIKELY (implied by "customizable") but not explicitly confirmed. Per-installment "Automatic Payment" checkbox appears when Automatic Payments is enabled globally (VERIFIED via Facebook feature post + help article).
- **Help content:** "Scheduled Payments", "Video: Scheduled Payments", "Recurring Invoices Vs. Payment Schedules".

### 2.4 Recurring Settings (inside the builder, after ticking "recurring invoice")
- **Sees/controls:** frequency (weekly / monthly / yearly); email template used for each send; end condition (when invoices stop sending). (VERIFIED)
- **Actions:** start recurrence; cancel a running recurrence later (VERIFIED). Marketed as "Recurring Billing"; release note "Recurring Billing" exists; help article "Invoice Options: Recurring Billing/Automatic Payments" pairs recurrence with auto-charge (VERIFIED). Recurring Billing is described by third parties as a paid add-on module (LIKELY).

### 2.5 Client-facing invoice / payment page
- **Purpose:** the link the client opens from the invoice email or Client Portal.
- **Sees:** invoice, "Pay Invoice" button, card entry form (Stripe or Square), optional ACH e-check (US, Stripe), Apple Pay / Google Pay buttons when enabled, optional tip selector (No Tip / 10% / 18% / 20% / custom), "save card data" checkbox and "charge automatically" checkbox when enabled, saved-card selector for returning clients (multiple cards allowed). (VERIFIED)
- **Actions:** pay full or next scheduled installment (LIKELY — schedule pays per installment), add tip, save card.
- **Owner-side variant:** "Pay Invoices on Behalf of Your Clients" article exists — owner can key a client's card in for them (VERIFIED existence; screen details not captured).

### 2.6 Invoice receipt
- After payment, a receipt can be sent/re-sent; "Preview" shows the client's view of the receipt and provides its direct URL; "Print" prints it. (VERIFIED) Whether a PDF download button exists on invoices was not confirmed (UNVERIFIED) — the help center has an "Image & PDF Viewer" article about viewing uploaded files, not invoice PDFs.

### 2.7 Document activity panel
- Shows created / sent / viewed / paid events for an invoice (VERIFIED, "Viewing Document Activity"). Exact status labels in the invoice list (e.g., Draft, Sent, Viewed, Partial, Past Due, Paid, Void) are LIKELY; confirmed terms in snippets are "Paid", "Void", "past due", "brought into good standing".

### 2.8 Account Settings > Money Matters > Invoice Options (a.k.a. "Global Invoice Settings")
- **Sees/controls (VERIFIED):** select payment merchant (17hats Payments/Stripe, Square, PayPal on eligible levels); enable Apple Pay / Google Pay in the payment-processor section; currency (single value, default USD; retroactive to all invoices); custom invoice footer; "Customers can save card data"; "Automatic Payments"; "Accept Tips" + tip Income Category; "Edit Invoice Options" button opens the form.
- Invoice numbering / prefix settings: not found (UNVERIFIED).

### 2.9 Account Settings > Money Matters > Tax Settings
- Create multiple named tax rates; rates are then selectable in Quote/Invoice headers and per line item (VERIFIED). Compound/stacked taxes on one line: not found (UNVERIFIED).

### 2.10 Account Settings > Money Matters > Products & Services
- Catalog of reusable line items with price and income category; "Quote & Invoice Line Item Settings" article governs how items appear (VERIFIED existence; field-level details beyond name/description/price/quantity/category not captured).

### 2.11 Account Settings > Email Settings > Email Reminders (Document Email Reminders)
- Past-due invoice reminder: "send X days after due date", repeat (never / daily / weekly), end after X occurrences; starts automatically when invoice goes past due; stops when paid or in good standing (VERIFIED). Email template for the reminder is customizable here (VERIFIED). Pre-due reminders and late fees: not found.

### 2.12 Account Settings > Bookkeeping Options
- "Connect account" button opens a bank-search flow (claims 22,000 institutions); read-only connection; 90 days of history on first connect; statement import (.qbo / .ofx) for unsupported banks; create manual accounts (VERIFIED). Aggregator vendor not named (UNVERIFIED).

### 2.13 Bookkeeping tab (left rail)
- **Sees:** transaction ledger per account (bank-fed + manual), "Select a category" dropdown per transaction with auto-suggestions, "Add Category" button, "New Expense" button, "Add Receipt" per transaction (view/download/delete), match/apply a transaction to an invoice, categorize invoice payments deposited into the bank, Stripe card/ACH processing fees shown as expense lines (post-May-2025), "Reports" menu top-right (Profit and Loss, Sales Tax; Aged Receivables referenced as exportable). (VERIFIED)
- **Actions:** categorize, create category, add expense, attach receipt, apply to invoice, export CSV (LIKELY), run reports.

### 2.14 Reports: Profit & Loss, Sales Tax, Aged Receivables, Lead Source
- P&L: income auto-populates from invoice payments; expenses from bank feed or manual entry; cash-basis (VERIFIED).
- Sales Tax report: only tax recorded on 17hats invoices; auto-generated (VERIFIED).
- Aged Receivables: CSV export mentioned (LIKELY).
- Lead Source Reporting: per-Project "Lead Source" field; report totals invoice payments by source; historically Standard/Premier only; integrates with Online Scheduling (VERIFIED).
- Overview/dashboard stats (revenue by project type, outstanding balances widget): not found (UNVERIFIED).

### 2.15 Account Settings > Integrations > QuickBooks Online
- "Connect to QuickBooks" OAuth button; "Import Invoices" button with select-individual / select-all + "Sync"; new invoices and their payments push automatically; payments land in "Undeposited Funds" by default (with a dedicated help article); US/CA/UK only; QBO must have Custom Transaction Numbers on and tips enabled if used (VERIFIED). Expense/bank-transaction sync to QBO: not found (UNVERIFIED — appears invoice/payment only).

---

## 3. Data & fields observed

| Entity | Field | Type / values | Notes | Confidence |
|---|---|---|---|---|
| Invoice | Internal title | text | for owner | VERIFIED |
| Invoice | Display title | text | shown to client | VERIFIED |
| Invoice | Due date | date; template stores relative offset (n days/weeks/months/years) | | VERIFIED |
| Invoice | Purchase order number | text | | VERIFIED |
| Invoice | Notes | rich/plain text | | VERIFIED |
| Invoice | Tax rate | FK to Tax Settings rate | applied to taxable lines | VERIFIED |
| Invoice | Discount | fixed amount or % of total | no per-line discount | VERIFIED |
| Invoice | Online payments enabled | boolean | | VERIFIED |
| Invoice | Payment schedule | 0..n installments | | VERIFIED |
| Invoice | Recurring | boolean + frequency (weekly/monthly/yearly) + email template + end rule | | VERIFIED |
| Invoice | Automatic payments | boolean (per invoice, requires global flag) | | VERIFIED |
| Invoice | Currency | account-level single currency | | VERIFIED |
| Invoice | Footer | account-level custom text | | VERIFIED |
| Invoice | Status | Paid / Void / past due observed; Draft/Sent/Viewed/Partial LIKELY | | LIKELY |
| Invoice | Activity log | created, sent, viewed, paid timestamps | | VERIFIED |
| Invoice | Invoice number | numeric; must match QBO "Custom Transaction Numbers" | prefix config not found | LIKELY |
| Line item | Name, Description, Price, Quantity | text / money / number | | VERIFIED |
| Line item | Category | income category | | VERIFIED |
| Line item | Taxable flag + tax rate | boolean + FK | | VERIFIED |
| Payment schedule installment | Amount | money (equal or custom) | | VERIFIED |
| Installment | Due rule | on receipt / project date ± / final due date ± / custom date | | VERIFIED |
| Installment | Auto-charge | boolean | | VERIFIED |
| Payment | Amount, Payment date | money, date | | VERIFIED |
| Payment | Reference | text (e.g., check #) | manual only | VERIFIED |
| Payment | Account | FK bookkeeping account (deposit target) | | VERIFIED |
| Payment | Method | card / ACH / Apple Pay / Google Pay / manual (cash, check) | | VERIFIED |
| Payment | Tip amount | money; ≤ invoice total; posts to tip Income Category | | VERIFIED |
| Payment | Processing fee | money; auto-recorded for Stripe since 2025-05-31 | | VERIFIED |
| Refund | Amount (full/partial), void-invoice flag, notify-client flag | | | VERIFIED |
| Saved card | Brand, last 4; token held at Stripe/Square; multiple per client | | | VERIFIED |
| Tax rate | Name, rate % | in Tax Settings | | VERIFIED |
| Bookkeeping account | Type: bank-fed or manual | | | VERIFIED |
| Transaction | Description, Amount, Date, Account, Category, Project | manual expense form | | VERIFIED |
| Transaction | Receipt attachment | file (image/PDF) | | VERIFIED |
| Transaction | Linked invoice | FK | "apply to invoice" | VERIFIED |
| Category | Name; income vs expense; pre-populated + user-created | | | VERIFIED |
| Project | Lead Source | picklist | feeds Lead Source report | VERIFIED |
| Report | P&L (date range), Sales Tax (date range), Aged Receivables | CSV export | | LIKELY (export) |
| QBO link | Invoice ↔ QBO Invoice; Payment ↔ QBO Payment (Undeposited Funds) | | | VERIFIED |

---

## 4. Plan gating

- **Current pricing (2025→):** third-party pricing guides (Agiled, OneSuite, Zendo, Taskip) state 17hats moved to a single plan at about $60/mo ($600/yr, $800/2yr) with paid add-ons: Recurring Billing module, Advanced Scheduling, Time Tracking, **Bank Connect (~$10/mo)**, **QuickBooks Online sync (~$5/mo)**. (LIKELY — not confirmed on 17hats.com in captured snippets.)
- **17hats' own help center** still refers to plan "Levels": card processing at 2.9% + $0.30 applies to "Level Two, Level Three, and Founding Member"; Level One's rate was not captured (LIKELY higher). PayPal referenced as "Level 2 and Level 3 only". (VERIFIED wording; the reconciliation of "Levels" vs. "single plan" is UNVERIFIED — the Levels may be the legacy tiers or the current tiering.)
- **Legacy tiers (pre-2025):** Essentials ($15), Standard ($30), Premier ($45–60). Recurring invoices, Client Portal and Zapier were Premier-only; Lead Source Reporting was Standard/Premier. (LIKELY / VERIFIED for Lead Source.)
- **Feature prerequisites (not plan-based):** Automatic Payments, Saved Cards and Tips require Stripe or Square; ACH requires Stripe and a US account; QBO sync requires a US/CA/UK QBO account. (VERIFIED)
- Processing fees are separate from subscription and pass through from Stripe/Square. (VERIFIED)

---

## 5. User complaints, gaps, and confusion points

- **Bookkeeping is "lite":** Capterra reviewers say it lacks real accounting depth, that expenses had to be entered manually, and that they wanted receipt photos and automated recurring expenses. (Receipt attachment and bank feeds now exist; recurring *expenses* still not found.) (VERIFIED as review sentiment)
- **Invoicing UX:** one reviewer calls invoicing "crippled by bad design and very limited options"; others cite a learning curve, a "messy" non-intuitive layout, and that the app suits 1–2 person shops but not growing teams. (VERIFIED as review sentiment)
- **Cost creep:** complaints about add-on charges for payment integrations and "rising fees"; third-party guides frame Bank Connect / QBO sync / Recurring Billing add-ons as a "hidden cost trap". (LIKELY)
- **Confusion: Recurring Invoices vs Payment Schedules** — 17hats maintains a dedicated article to disambiguate, and requires selecting a template *before* recurrence settings, which is an ordering trap. (VERIFIED)
- **Confusion: multi-step Automatic Payments enablement** — global toggle, then per-invoice toggle, then client must tick both boxes; Facebook group post "How to set up automatic payments in 17hats" indicates users struggle. (VERIFIED)
- **Stripe fee accounting** — before 31 May 2025 users had to manually record merchant fees (Facebook group post "How to account for stripe merchant fees in 17hats?"); now auto-posted for Stripe only, not Square/PayPal. (VERIFIED)
- **PayPal** — user question "Can we link PayPal transactions to 17hats?" and an old 17hats post about PayPal connection issues indicate PayPal support has been shaky. (LIKELY)
- **Currency** — changing currency retroactively rewrites all existing invoices; only one currency and one merchant per brand. (VERIFIED)
- **Discounts** — no per-line discount; workaround is a negative line item or manual price edit. (VERIFIED)
- **Sales Tax report** only covers tax collected through 17hats invoices, so off-platform sales are invisible. (VERIFIED)
- **QBO sync constraints** — must enable Custom Transaction Numbers and tips in QBO; payments default to Undeposited Funds and need a QBO-side deposit step; region-limited. (VERIFIED)
- **No late fees, no pre-due reminders, no credit notes/customer credit, no surcharge/fee pass-through, no mileage, no 1099 tracking** were found in any source. (UNVERIFIED absence — could exist undocumented, but nothing surfaced.)

---

## 6. Improvement opportunities for a clone

1. **Unify billing models:** one "Billing Plan" object with installments *and* recurrence, so users don't have to choose between Payment Schedule and Recurring Invoice up front; allow converting between them.
2. **One-click auto-pay:** a single account toggle with sensible defaults, per-invoice override, and clear client-side consent language; show a "next charge on <date> for $X" strip on the invoice.
3. **Fee pass-through / surcharge option** (where legal) and processor-agnostic fee recording (Square, PayPal, not just Stripe).
4. **Late fees and pre-due reminders:** configurable reminder ladder (e.g., -7d, -1d, +1d, +7d) and optional flat/% late fee auto-added as a line item.
5. **Credit notes and client credit balance:** handle overpayment, retainers held on account, and partial-refund-to-credit.
6. **Per-line discounts and stacked taxes** (e.g., GST + PST), plus a tax-inclusive pricing mode for non-US users.
7. **Multi-currency per invoice** (not per brand) with processor-native currency support.
8. **Invoice PDF export & branded templates** with attachments (contracts, galleries) on the invoice email.
9. **Bookkeeping depth:** recurring expenses, mileage log, 1099 vendor tagging, bank reconciliation, balance sheet, two-way QBO/Xero sync including expenses, and Square/PayPal payout-fee import.
10. **Dashboard analytics:** outstanding A/R by client, revenue by project type / product / lead source, MRR from recurring, and cash forecast from scheduled installments — 17hats exposes P&L and Sales Tax reports but no observed revenue-by-type dashboard.
11. **Invoice numbering controls** (prefix, per-brand sequences) surfaced in settings, since QBO sync depends on matching numbers.
12. **Transparent pricing:** bundle bank connect and accounting sync in the base plan to counter the "hidden add-on" complaint.

---

## 7. Confidence notes

| Claim | Confidence |
|---|---|
| Invoice option fields (titles, due date, PO, notes, tax, discount, disable online pay, schedule, recurring) | VERIFIED |
| Line item fields: name, description, price, quantity, category; per-line taxable + rate | VERIFIED |
| Discount fixed or % of total; no per-item discount | VERIFIED |
| Template due date relative offset | VERIFIED |
| Payment schedule: N installments, equal/custom, due rules (receipt / project date / final due / custom) | VERIFIED |
| Percentage-based installment split | LIKELY |
| Recurring: weekly/monthly/yearly, email template, end rule, cancel later, template before recurrence | VERIFIED |
| Automatic Payments needs Stripe/Square; global + per-invoice toggles; client checkboxes | VERIFIED |
| Saved cards stored at processor; multiple cards; owner sees brand + last 4 | VERIFIED |
| Owner can charge a saved card manually without client action | UNVERIFIED |
| 17hats Payments = Stripe; Visa/MC/Discover/Amex; ACH US-only | VERIFIED |
| Apple Pay / Google Pay via processor settings | VERIFIED |
| Card fee 2.9% + $0.30 (Level 2/3/Founding); ACH 0.80% + $1.50 capped $6.50 | VERIFIED |
| Level One card fee | UNVERIFIED (not found) |
| Square supported (tips, saved card, auto-pay) | VERIFIED |
| PayPal available on Level 2/3 only | LIKELY |
| Authorize.net legacy / removed | LIKELY |
| Surcharge / pass-through fee feature | UNVERIFIED (not found) |
| Stripe fees auto-recorded in Bookkeeping from 2025-05-31 | VERIFIED |
| Past-due reminders: X days after due, repeat never/daily/weekly, end after X | VERIFIED |
| Pre-due reminders | UNVERIFIED (not found) |
| Late fees | UNVERIFIED (not found) |
| Tips: No Tip/10/18/20/custom, ≤ invoice total, income category, Stripe/Square | VERIFIED |
| Refunds full/partial per payment; void + notify options | VERIFIED |
| Void invoice to stop it showing due | VERIFIED |
| Manual payment fields (amount, date, reference, account) | VERIFIED |
| Receipt send/preview/print; direct URL | VERIFIED |
| Invoice PDF download button | UNVERIFIED |
| Invoice attachments | UNVERIFIED (not found) |
| Status vocabulary Draft/Sent/Viewed/Partial/Past Due/Paid/Void | LIKELY (Paid/Void/past due VERIFIED) |
| Credit notes / customer credit balance | UNVERIFIED (not found) |
| Single currency per account; change is retroactive; linked brand for multi-currency | VERIFIED |
| Multiple tax rates in Tax Settings | VERIFIED |
| Compound taxes | UNVERIFIED |
| Invoice number prefix/settings | UNVERIFIED |
| Bank connect: 22,000 institutions, 90-day import, read-only; .qbo/.ofx import | VERIFIED |
| Bank aggregator = Plaid / Yodlee / MX | UNVERIFIED |
| Auto-suggest categories; pre-populated editable categories | VERIFIED |
| Manual expense fields; receipt attach; apply transaction to invoice | VERIFIED |
| Cash-basis bookkeeping | VERIFIED |
| P&L and Sales Tax reports under Bookkeeping > Reports | VERIFIED |
| Aged Receivables report + CSV export | LIKELY |
| Mileage tracking, 1099, balance sheet | UNVERIFIED (not found) |
| Lead Source Reporting (project field; payments by source) | VERIFIED |
| Revenue-by-project-type / overview dashboard stats | UNVERIFIED (not found) |
| QBO: auto-sync new invoices + payments; Import Invoices; Undeposited Funds; US/CA/UK; Custom Transaction Numbers; tips | VERIFIED |
| QBO expense sync | UNVERIFIED (appears absent) |
| Single ~$60/mo plan with Bank Connect $10 & QBO $5 add-ons | LIKELY (third-party) |
| Legacy Essentials/Standard/Premier gating of recurring invoices | LIKELY |
| Review complaints (bookkeeping shallow, invoicing design, cost, UX) | VERIFIED (as sentiment) |

---

## 8. Sources

Official 17hats help center / site / blog / release notes:
- [Invoice Settings](https://help.17hats.com/en/articles/3116849-invoice-settings)
- [Invoice Templates](https://help.17hats.com/en/articles/950108-invoice-templates)
- [Quote & Invoice Line Item Settings](https://help.17hats.com/en/articles/3116928-quote-invoice-line-item-settings)
- [17hats Invoicing & Bookkeeping](https://help.17hats.com/en/articles/849340-17hats-invoicing-bookkeeping)
- [Invoices collection](https://help.17hats.com/en/collections/550672-invoices)
- [17hats – Invoices Feature](https://www.17hats.com/features/invoices)
- [17hats Makes It Easy To Send Invoices (blog)](https://blog.17hats.com/17hats-makes-it-easy-to-send-invoices/)
- [Scheduled Payments](https://help.17hats.com/en/articles/2548662-scheduled-payments)
- [Video: Scheduled Payments](https://help.17hats.com/en/articles/1031253-video-scheduled-payments)
- [Automatic Payments for Payment Schedules](https://help.17hats.com/en/articles/5052370-automatic-payments-for-payment-schedules)
- [17hats Facebook post on Automatic Payments](https://m.facebook.com/17hatsHQ/photos/if-you-havent-already-try-our-new-automatic-payment-feature-automatic-payments-f/3988168191273229/)
- [Invoice Options: Recurring Billing/Automatic Payments](https://help.17hats.com/en/articles/4260937-invoice-options-recurring-billing-automatic-payments)
- [Invoice Options: Save Card Data](https://help.17hats.com/en/articles/4530767-invoice-options-save-card-data)
- [17hats – Saved Card Data Feature](https://www.17hats.com/features/save-card-data)
- [How To: Setting Up Recurring Invoices](https://help.17hats.com/en/articles/2508194-how-to-setting-up-recurring-invoices)
- [Video: Recurring Invoices](https://help.17hats.com/en/articles/1031263-video-recurring-invoices)
- [Recurring Invoices Vs. Payment Schedules](https://help.17hats.com/en/articles/1072575-recurring-invoices-vs-payment-schedules)
- [17hats – Recurring Invoices Feature](https://www.17hats.com/features/recurring-invoices)
- [17hats – Recurring Billing Feature](https://www.17hats.com/features/recurring-billing)
- [Release note: Recurring Billing](https://17hats.releasenotes.io/release/G90MI-recurring-billing)
- [Recurring Invoices With Automatic Payments (17hats University)](https://www.17hatsuniversity.com/17hats-quick-tips/recurring-invoices-with-automatic-payments-in-17hats)
- [Stripe Payments](https://help.17hats.com/en/articles/6418020-stripe-payments)
- [[legacy] Using Stripe for Online Payments](https://help.17hats.com/en/articles/3162740-legacy-using-stripe-for-online-payments)
- [Credit Card and ACH Processing Fees in 17hats Bookkeeping with Stripe](https://help.17hats.com/en/articles/11498904-credit-card-and-ach-processing-fees-in-17hats-bookkeeping-with-stripe)
- [Accept ACH payments through 17hats](https://help.17hats.com/en/articles/843846-accept-ach-payments-through-17hats)
- [17hats Payments integration page](https://www.17hats.com/integration/17hats-payments)
- [17hats – Online Payments Feature](https://www.17hats.com/features/online-payments)
- [Online Payment Options collection](https://help.17hats.com/en/collections/550596-online-payment-options)
- [Get Paid Even Faster! Google Pay and Apple Pay (blog)](https://blog.17hats.com/get-paid-even-faster-google-pay-and-apple-pay-through-17hats/)
- [Release notes tagged "online payments"](https://17hats.releasenotes.io/tag/online%20payments)
- [Tipping](https://help.17hats.com/en/articles/3591193-tipping)
- [How should I handle gratuities in 17hats?](https://help.17hats.com/en/articles/927440-how-should-i-handle-gratuities-in-17hats)
- [Release note: Tipping is now available on Square and Stripe](https://17hats.releasenotes.io/release/qdYrP-tipping-is-now-available-on-square-and-stripe)
- [Online Scheduling Payments](https://help.17hats.com/en/articles/3980157-online-scheduling-payments)
- [How do I set automatic invoice reminders?](https://help.17hats.com/en/articles/879792-how-do-i-set-automatic-invoice-reminders)
- [Email Settings - Document Email Reminders](https://help.17hats.com/en/articles/2280471-email-settings-document-email-reminders)
- [Simplify Invoicing with 17hats Invoice Email Reminders (blog)](https://blog.17hats.com/simplify-invoicing-with-17hats-invoice-email-reminders/)
- [How to Set Up 17hats Past Due Invoice Email Reminders (17hats University)](https://www.17hatsuniversity.com/17hats-quick-tips/how-to-set-up-17hats-past-due-invoice-email-reminders)
- [How do I record a payment manually?](https://help.17hats.com/en/articles/924616-how-do-i-record-a-payment-manually)
- [Processing Refunds inside 17hats](https://help.17hats.com/en/articles/12649453-processing-refunds-inside-17hats)
- [How do I issue a refund to my client?](https://help.17hats.com/en/articles/897500-how-do-i-issue-a-refund-to-my-client)
- [How do I manage my payments?](https://help.17hats.com/en/articles/924368-how-do-i-manage-my-payments)
- [How do I send an invoice receipt?](https://help.17hats.com/en/articles/928591-how-do-i-send-an-invoice-receipt)
- [Pay Invoices on Behalf of Your Clients](https://help.17hats.com/en/articles/1331543-pay-invoices-on-behalf-of-your-clients)
- [Viewing Document Activity](https://help.17hats.com/en/articles/849328-viewing-document-activity)
- [Image & PDF Viewer](https://help.17hats.com/en/articles/2286000-image-pdf-viewer)
- [Money Matters - Invoice Options](https://help.17hats.com/en/articles/924380-money-matters-invoice-options)
- [What currencies does 17hats support?](https://help.17hats.com/en/articles/927251-what-currencies-does-17hats-support)
- [Money Matters - Tax Settings Page](https://help.17hats.com/en/articles/2673313-money-matters-tax-settings-page)
- [Money Matters - Products & Services](https://help.17hats.com/en/articles/849333-money-matters-products-services)
- [Account Settings collection](https://help.17hats.com/en/collections/1817949-account-settings)
- [Money Matters - Connecting Your Bank Account](https://help.17hats.com/en/articles/928589-money-matters-connecting-your-bank-account)
- [Banks integration page](https://www.17hats.com/integration/banks)
- [Bookkeeping Overview](https://help.17hats.com/en/articles/3112838-bookkeeping-overview)
- [Bookkeeping collection](https://help.17hats.com/en/collections/550518-bookkeeping)
- [How do I categorize bookkeeping transactions?](https://help.17hats.com/en/articles/924611-how-do-i-categorize-bookkeeping-transactions)
- [How Do Category Auto-Suggestions Work?](https://help.17hats.com/en/articles/927616-how-do-category-auto-suggestions-work)
- [How do I categorize payments deposited into my bank?](https://help.17hats.com/en/articles/924622-how-do-i-categorize-payments-deposited-into-my-bank)
- [How do I apply a bookkeeping transaction to an invoice?](https://help.17hats.com/en/articles/924610-how-do-i-apply-a-bookkeeping-transaction-to-an-invoice)
- [How Do I Manually Record Expenses?](https://help.17hats.com/en/articles/879995-how-do-i-manually-record-expenses)
- [How To Add a Receipt in 17hats (17hats University)](https://www.17hatsuniversity.com/17hats-quick-tips/how-to-add-a-receipt-in-17hats)
- [The Bookkeeping Tab in 17hats (17hats University)](https://www.17hatsuniversity.com/17hats-quick-tips/the-bookkeeping-tab-in-17hats)
- [What is the Profit and Loss report in 17hats?](https://help.17hats.com/en/articles/924603-what-is-the-profit-and-loss-report-in-17hats)
- [17hats – Profit/Loss Report Feature](https://www.17hats.com/features/profit-loss-report)
- [Sales Tax Report](https://help.17hats.com/en/articles/924623-sales-tax-report)
- [17hats – Sales Tax Report Feature](https://www.17hats.com/features/sales-tax-reporting)
- [End-of-Year Bookkeeping Checklist (blog)](https://blog.17hats.com/end-of-year-bookkeeping-checklist-for-small-business-owners/)
- [Release notes tagged "bookkeeping"](https://17hats.releasenotes.io/tag/bookkeeping)
- [Release notes tagged "invoices"](https://17hats.releasenotes.io/tag/invoices)
- [17hats: QuickBooks Online Integration](https://help.17hats.com/en/articles/859661-17hats-quickbooks-online-integration)
- [Video: Quickbooks Online Integration](https://help.17hats.com/en/articles/1031236-video-quickbooks-online-integration)
- [Invoice Payments: Undeposited Funds (Quickbooks Online)](https://help.17hats.com/en/articles/861483-invoice-payments-undeposited-funds-quickbooks-online)
- [Quickbooks collection](https://help.17hats.com/en/collections/1522692-quickbooks)
- [Quickbooks integration page](https://www.17hats.com/integration/quickbooks)
- [17hats Integrations](https://17hats.com/integrations)
- [Overview of Lead Source Reporting in 17hats](https://help.17hats.com/en/articles/7336856-overview-of-lead-source-reporting-in-17hats)
- [Lead Source Reporting with Online Scheduling](https://help.17hats.com/en/articles/7336815-lead-source-reporting-in-17hats-with-online-scheduling)
- [17hats – Lead Source Reporting Feature](https://www.17hats.com/features/lead-source-reporting)
- [Reporting in 17hats: Your Business's Secret Weapon (blog)](https://blog.17hats.com/reporting-in-17hats-your-businesss-secret-weapon/)
- [Boost Your Business with 17hats Lead Source Reporting (blog)](https://blog.17hats.com/2023/05/boost-your-business-with-17hats-lead-source-reporting-track-your-marketing-efforts-like-never-before/)
- [17hats Pricing](https://17hats.com/pricing)
- [17hats Referral page](https://referrals.17hats.com/?r=gbxkhkwvft)

Third-party / community:
- [17hats Pricing 2026: True Cost After Add-Ons (Agiled)](https://agiled.app/blog/17hats-pricing)
- [17hats Pricing: Plans and Costs (OneSuite)](https://onesuite.io/blog/17hats-pricing/)
- [Evaluating 17Hats Pricing And Plans (Zendo)](https://getzendo.io/blog/17hats-pricing/)
- [17hats Pricing 2026: Beware the Hidden Cost Trap (Taskip)](https://taskip.net/17hats-pricing/)
- [17hats vs QuickBooks Online (Fondo)](https://fondo.com/blog/17hats-vs-quickbooks-online)
- [17hats vs HoneyBook vs Dubsado (HoneyBook)](https://www.honeybook.com/blog/17hats-vs-honeybook-vs-dubsado)
- [17hats Reviews (Capterra)](https://www.capterra.com/p/144328/17hats/reviews/)
- [17hats Reviews (G2)](https://g2.com/products/17hats/reviews)
- [17Hats review (Spruce Rd.)](https://sprucerd.com/blog/17hats/)
- [17hats Review 2026 (Product Owl)](https://www.productowl.io/crm/17hats)
- [How to Integrate Stripe with 17hats (Julieanne Walker)](https://www.julieannewalker.com/blog/integrate-stripe-with-17hats)
- [Facebook group: How to account for stripe merchant fees in 17hats?](https://www.facebook.com/groups/17HatsUserQA/posts/4527888847497578/)
- [Facebook group: How to set up automatic payments in 17hats](https://www.facebook.com/groups/17HatsUserQA/posts/2937040719915740/)
- [Facebook group: Can we link PayPal transactions to 17 hats?](https://www.facebook.com/groups/17HatsUserQA/posts/4194006597552473/)
- [17hats Facebook post re: PayPal connection](https://www.facebook.com/17hatsHQ/posts/hey-guys-quick-update-for-those-of-you-trying-to-connect-your-paypal-account-to-/696068977149850/)
- [Zapier: 17hats + QuickBooks Online](https://zapier.com/apps/17hats/integrations/quickbooks)
