# In-app walkthrough checklist (for a Claude in Chrome session)

> **STATUS: run on 2026-09-03.** Passes 1 through 11 were completed read-only
> against a live account. Results are in `01-research-log.md` (inline
> **Verified in-app** notes, plus the full record in **Addendum B**),
> corrections and remaining gaps in `08-open-questions.md`, and screenshots in
> `screens/` rather than `screenshots/`. Pass 12 (mobile) was not attempted.
> Items deliberately skipped, because completing them would have written to a
> live record: the client-facing document UI and signature capture, the
> dashboard snooze menu, the dashboard Grouping sort, and global search (which
> needs typing).

**Why this exists.** The cloud session that produced these docs had no
Chrome connection and the network blocked 17hats.com, so the research log was
built from help-center summaries. This checklist is the script for a
**read-only** pass through a real 17hats account using Claude in Chrome, to
confirm every item flagged for in-app checking and to capture screenshots.

**How to run it.** Open Claude Code on your own machine (desktop app or CLI)
with the Claude in Chrome extension installed and connected, log in to 17hats
yourself in Chrome, then start Claude Code in this repo and paste:

> Use Claude in Chrome. Walk through my 17hats account page by page following
> `docs/17hats-clone/00-in-app-walkthrough-checklist.md`. READ ONLY: never
> click Save, Send, Delete, Archive, Pay, Sign, Accept, or any toggle; never
> type into fields; cancel any dialog you open. Record what each page shows in
> `docs/17hats-clone/01-research-log.md` under the matching section, replace
> every [verify in-app] marker with what you actually saw, and save
> screenshots to `docs/17hats-clone/screenshots/`. Do not record client
> names, emails, phone numbers, payment details, or amounts — describe the
> screens structurally.

**Hard rules for the browsing session**
- Read only. No edits, no sends, no deletes, no toggles, no test records.
- Do not capture personal data of clients or payment details in notes or
  screenshots (blur or crop if a screenshot is needed).
- Do not open Account Settings > Password, payment-processor credentials, or
  bank connection screens beyond the landing page.
- Stay inside the 17hats app and its help center.

---

## Pass 1 — shell and navigation
- [ ] Record the exact left-nav items, order, icons, and any sub-menus.
- [ ] Record top toolbar items (search, timer, templates, help, settings, user menu).
- [ ] Open the Quick Look side panel: what can be added from it?
- [ ] Note global search behaviour (what entity types appear in results).

## Pass 2 — Dashboard
- [ ] Confirm the five sections, their order, and what each card links to.
- [ ] Note the Grouping filter options and the snooze options on to-dos.
- [ ] Note how many days the calendar strip shows at your screen width.

## Pass 3 — Contacts and Leads
- [ ] Contacts list: columns, sort, filters, letter index, gear-menu items.
- [ ] Open one contact: every section and field name (no values), tabs, buttons.
- [ ] Contact-level notes: do they exist independent of projects?
- [ ] Leads page: columns, Hot/Cold indicators, lead source column, actions.
- [ ] Lead Capture Forms list and the form editor: list every setting label,
      question type in the dropdown, mapping options, Install-screen modes.
- [ ] Lead Sources settings page: fields and states.
- [ ] Email Lead Capture rules page: supported senders and field mappings.

## Pass 4 — Projects and Pipelines
- [ ] Projects list: filters (All/Active/Leads/Archived), columns, bulk actions.
- [ ] Project Overview: header fields, sidebar sections, Important Documents
      panel, Workflows panel, all bottom tabs, "+" menus.
- [ ] Pipelines: types, phase editor fields (By Tag / By Days), board layout,
      card contents, drag-and-drop behaviour (observe only).

## Pass 5 — Calendar
- [ ] Views available (month/week/day/agenda), calendar list, colour picker.
- [ ] Event editor fields (open via an existing event, then cancel).
- [ ] Calendar Settings: Google connection options, iCal feed link location.

## Pass 6 — Workflows and To-Do
- [ ] Workflow templates list; Active Workflows view.
- [ ] Template editor: step types, the exact due-rule wording (before/on/after
      base date; after previous step), the automatic vs "upon review" toggle
      label, completion-rule dropdown options per action type, tag add/remove.
- [ ] To-Do page: lists, filters, repeat options, assignee picker.

## Pass 7 — Documents & Email Templates
- [ ] Templates page: type filter, email-type list, editor toolbar, token
      picker categories and the exact token strings.
- [ ] Quote template editor: Quote Options panel labels, line-item columns,
      option-group types, per-item settings.
- [ ] Contract template editor: signature settings, required-field types,
      countersign options.
- [ ] Invoice template editor: Invoice Options panel labels, payment schedule
      builder, reminder settings.
- [ ] Questionnaire editor: the full list of 13 question types, branch
      question UI, "Maps to" dropdown contents.
- [ ] Open a sent document's client-facing preview (view only): accept /
      sign / pay UI, partial-payment "Other" field, tip control.

## Pass 8 — Online Scheduling
- [ ] Services list; service editor fields; group-service settings.
- [ ] Availability schedule editor: hours, buffers, limits, calendar checks,
      team members.
- [ ] Bookings tab; the public booking page (open in a new tab; do not book).

## Pass 9 — Bookkeeping and Reports
- [ ] Ledger columns and filters; gear menu items; categories page.
- [ ] Reports menu: list every report and its filter controls.
- [ ] Invoices tab header stats.
- [ ] Bookkeeping Options landing page only (do not open bank credentials).

## Pass 10 — Client Portal
- [ ] Account Settings > Client Portal: every global setting.
- [ ] A contact's portal settings panel; the "E-mail Link" button (do not send).
- [ ] Open the portal preview: sections, document cards, event list, profile.

## Pass 11 — Account Settings
- [ ] Every settings tab name and its sub-tabs.
- [ ] Users page: roles and the full permission checklist.
- [ ] Brand Preferences: logo/colour/font controls; subdomain field.
- [ ] Money Matters: Tax Settings, Invoice Options, Products & Services
      fields.
- [ ] Email Settings: incoming/outgoing panels, signature, reminders tab.
- [ ] Plan Information / Add Modules: list modules and prices shown.
- [ ] Integrations page: list every integration tile.

## Pass 12 — Mobile app (optional, on phone)
- [ ] Screens available; what can be created vs only viewed.

## Output
- Update `01-research-log.md` in place.
- Add screenshots under `docs/17hats-clone/screenshots/<pass>-<page>.png`.
- List anything that contradicts the log in `08-open-questions.md`.
