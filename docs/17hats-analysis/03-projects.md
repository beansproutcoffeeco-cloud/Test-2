# 17hats — Module 03: Projects

Research method: web search only (help.17hats.com article snippets, 17hats.com feature pages, 17hats blog, 17hats release notes, 17hats University, review sites, competitor comparison posts). No login, no account access, no data touched. 41 distinct searches were run; the session search budget was exhausted before every gap could be closed, and the remaining gaps are called out explicitly below.

Terminology note: 17hats uses the word **Project** everywhere in the UI and docs. The word "job" does not appear in any 17hats source found; it is not a 17hats term.

---

## 1. Summary

- A **Project** is the mandatory container for everything that happens with a contact: a contact (Lead, Hot Lead, Cold Prospect, Client, Other) must have at least one Project before any document, email, note, to-do, event or time log can be created. Docs describe it as "a manila file folder with the individual's name on it."
- A Project has exactly **one main contact** plus unlimited **Related Contacts**. To change the main contact you use **Edit > Move Project** (moves the whole project, with notes/emails/documents/time logs/activity, to another contact record).
- The **Projects list page** offers Grid and List views; top filter buttons for **All / Clients / Leads / Archived**; sort by **Project Name, Client Name, Project Date**; a search bar that also searches by **tag**; and, in List view, checkbox selection that surfaces a **Bulk Actions** menu (add/remove tags, archive, delete, apply workflow).
- The **Project Overview page** has: a header with project name, date/time/location, an Edit menu (Edit Project, Move Project, Archive, Add Lifecycle on legacy plans); a **Project Information / Details** block; **Important Documents** (questionnaires, contracts, invoices, quotes, plus draft and scheduled emails); **Workflows** with progress bars; **Related Contacts** in the sidebar; and bottom tabs for **Notes, Emails, Files, To-do's, Events, Phone Log, Time Log, Activity Log**.
- **Project status is not a first-class field.** "Lead vs Client" is a property of the *contact type*, not the project. The only explicit project states are **active** and **archived** (plus deletion, which is irreversible). "Completed" is achieved by archiving; there is no documented "cancelled" or "lost" project status. Within the newer **Pipelines** feature, projects have Active / Completed / Removed states relative to a pipeline.
- Projects are created (a) automatically by a **Lead Capture Form** submission (which also creates the contact, and can auto-tag and trigger a workflow), (b) automatically by an **Email Lead Capture rule**, (c) automatically by an **Online Scheduling** booking, (d) manually from a contact record via **Add a New Project / New Project**, and (e) by CSV import of contacts + projects. The mobile app can also create and edit projects.
- There are **no "Project Types" and no "Project Templates"** as named features. The closest equivalents are **Project Tags** (free-form labels used for filtering, bulk actions, Pipelines phases, and assigning projects to team members), **Workflow Templates** (which get copied into a project as an active workflow), and **Custom Project Fields** (account-level defined fields that appear in Project Details).
- **To-Dos** support due date + optional time, assignment to a user (multi-user accounts), a to-do calendar, recurrence (daily/weekly/monthly/yearly with interval and end conditions), and attachment to a project; to-dos also come from workflows and can trigger a follow-up email when checked off.
- **Archiving** hides the project's to-dos and events from the calendar, suppresses dashboard/workflow notifications, removes the project from any Pipeline, keeps completed client-facing documents visible to the client while hiding incomplete ones, and can be undone (un-archive). Bulk archive/delete exists from the List view.
- Not found in any source: project duplication/cloning, project numbering/IDs, project colour coding (colour comes from the assigned Calendar, not the project), per-project permissions (permissions are section-level per user; "assignment" of projects is done by tag convention), and a per-project custom "status" picklist.

---

## 2. Pages / screens

### 2.1 Projects list page (`Projects` in the left nav)

**Purpose.** Browse, find, filter and bulk-manage every project in the account.

**What the user sees.**
- A top row of filter buttons: **All**, **Clients**, **Leads**, **Archived** (VERIFIED — "How to Delete Projects in Bulk" and "Easy Navigation" articles). Note that the Clients/Leads split reflects the *contact type* of the project's main contact.
- A **view toggle: Grid or List** (VERIFIED — "How Are Projects Sorted?"). Grid shows project cards; List shows rows with checkboxes.
- **Sort** options: **Project Name, Client Name, Project Date** (VERIFIED). Ascending/descending toggle and the default sort order were not found in snippets (UNVERIFIED).
- A **search bar** that accepts project/contact text and also **tag names** — typing a tag name shows a drop-down option; selecting it lists all projects with that tag (VERIFIED — "Project Tags").
- Exact list columns were not found verbatim. Based on the sortable fields and the Project card contents, the list LIKELY shows project name, main contact/client name, project date, and tags; whether status, calendar, or last-activity columns appear is UNVERIFIED.
- No Kanban board, Gantt or board view exists on this page (VERIFIED via competitor write-up and 17hats' own Pipelines docs; Pipelines is a separate page).

**Actions available.**
- Open a project (click card/row).
- Switch Grid/List; change sort; filter All/Clients/Leads/Archived; search/filter by tag.
- **Bulk Actions** (List view only): check one or more rows and a "Bulk Actions" drop-down appears with **Add/Remove Tags**, **Archive**, **Delete**, **Apply Workflow** (VERIFIED — multiple help articles + release note "Bulk Actions - Documents & Projects"). Deletion "cannot be undone" (VERIFIED).
- Create a new project: the docs describe creating projects from a contact record ("Add a New Project" button on a new contact's profile; "New Project" once a first project exists). Whether a "+ New Project" button also lives on the Projects list page itself is LIKELY but not confirmed by snippet text.

**Navigation to/from.** Left nav "Projects"; from Dashboard widgets (Recent Client Activity, New Leads, etc.) which link into individual projects; from a Contact record's project list; from Calendar events linked to a project; from the Pipelines page (cards link to projects).

### 2.2 Project Overview page (individual project)

**Purpose.** "The central location for all information about the service you are providing to your lead or client" — email communication, documents, files, time logs, to-dos and more in one place (VERIFIED — "Project Overview").

**Header / top area.**
- Project title, with a **pencil icon** next to the name to edit details (VERIFIED).
- **Date, time and location** of the project shown at the top "for quick reference" (VERIFIED — Project Page feature page).
- An **Edit** button (top right) that opens a menu: **Edit Project**, **Move Project**, **Archive** (VERIFIED), and on legacy Founding Member plans **Add Lifecycle** (VERIFIED for that plan only). Un-archive is available for archived projects (VERIFIED by "you will need to un-archive the project in order to respond").
- Lead-specific header actions (e.g., convert-to-client buttons) were not documented at the project level; conversion happens via **Edit Contact > contact type**, or automatically when a quote is accepted, a contract is signed, or an invoice payment is made (VERIFIED — "Changing a Lead to a Client", "When do Hot Leads automatically turn into Clients?").

**Project Information / Project Details block.**
- Default fields shown: **Project Title, Primary Email, Project Date, Phone Number, Contact Type, assigned Calendar** (VERIFIED — "Project Overview").
- **Custom Project Fields** appear in this block once they have values (VERIFIED — "Custom Fields").
- Project Location and start/end time exist (they are exposed as tokens `project location`, `project start time`, `project end time`; VERIFIED via "Complete List of Tokens").
- Projects are **not required to have a date or a time** (VERIFIED). When a date is set, the project appears on the 17hats calendar under its assigned calendar (VERIFIED).

**Important Documents section.** Lists Questionnaires, Contracts, Invoices and Quotes belonging to the project, plus emails saved as draft and scheduled emails (VERIFIED). Actions: create new document from here (LIKELY via a "+"/New button — the help snippet describes the section but not the button label).

**Workflows section.** Shows each workflow applied to the project with a **progress bar**; "+" button to activate another workflow; clicking a workflow title lets you view/edit/delete steps *for this activated copy only* (VERIFIED). Applying a workflow copies the template's to-dos/action items/pauses into the project (VERIFIED).

**Related Contacts (sidebar).** Section with a "+" button (bottom right of the header) to add a new or existing contact as a related contact; unlimited related contacts per project (VERIFIED). Related contacts can be cc'd on emails and added as extra signers on contracts (VERIFIED).

**Bottom tabs.** **Notes, Emails, Files, To-do's, Events, Phone Log, Time Log, Activity Log** — each tab shows previously entered data and has a "+" button at the top to add an entry (VERIFIED — "How do I navigate the Project Overview screen?").
- *Notes*: free-text notes; 17hats "automatically logs the time and date for each entry" (VERIFIED — 17hats University). Pinning, rich text and note editing/deleting: UNVERIFIED.
- *Emails*: synced/sent email threads for this project; note that "only 17hats-created documents and emails will appear... not uploaded materials" in the activity/notes area (VERIFIED phrasing, exact tab it refers to LIKELY Notes/Activity).
- *Files*: upload and view outside files such as PDFs or JPEGs (VERIFIED). Size limits: UNVERIFIED.
- *To-do's*: project to-dos, both manual and workflow-generated (VERIFIED).
- *Events*: any calendar events linked to the project that are *not* the project date — "allowing you to organize multiple events within a single project" (VERIFIED). Google Calendar events can be linked to a project via a "project" drop-down on the event (VERIFIED).
- *Phone Log*: manual call log entries (VERIFIED that the tab exists; field set UNVERIFIED).
- *Time Log*: time entries recorded against the project via the pop-up timer, each with a rate and a bookkeeping category (VERIFIED — "Time Tracking").
- *Activity Log*: automatic history of changes/interactions on the project (VERIFIED existence; exact events logged UNVERIFIED).

**Bookkeeping summary.** Each project has a "mini Profit and Loss breakdown" showing payments/income plus any expenses assigned to the project in Bookkeeping (VERIFIED — "17hats Invoicing & Bookkeeping"). Where on the page it lives (sidebar vs. tab) was not found (UNVERIFIED).

**Lead Overview page.** A help article "Lead Overview: Lead Capture, Lead Overview Page" exists, implying leads captured via LCF land on a lead-flavoured version of the project page; the snippet did not describe differences from the client project page (UNVERIFIED whether it is a distinct layout or the same page filtered by contact type).

**Navigation to/from.** From Projects list, Contact record, Dashboard widgets, Calendar, Pipelines, email notifications. Out to: individual documents, contact record, calendar event, workflow editor (for the active copy).

### 2.3 Create Project dialog

**Purpose.** Add a project to an existing contact.

**What the user sees.** Snippets confirm the entry points ("Add a New Project" on a new contact's profile; "New Project" button once one exists) and the fields shown in Project Details afterward (Project Title, Project Date, Calendar). The exact dialog layout and full field list (e.g. whether location, time, tags, custom fields, and workflow selection are on the create form vs. the later Edit Project modal) could not be confirmed — UNVERIFIED. Tags are added in the **Edit Project** details pop-up by typing (auto-complete for existing tags; Enter creates a new tag) (VERIFIED).

**Other creation paths (all VERIFIED).**
- **Lead Capture Form**: creates contact + project; the form settings define the *project name* to use (e.g. "Wedding Photography"), can add contact/project tags, send an auto-response and trigger a workflow.
- **Email Lead Capture rule**: incoming email matching the rule creates a lead and project.
- **Online Scheduling booking**: a help article "Online Scheduling Services - Project Management" exists for how bookings map to new or existing projects; the exact setting text was not captured (LIKELY: per-service option to create a new project or attach to existing).
- **CSV import** of contacts and projects.
- **Mobile app** (iOS/Android): create new contacts and projects, view/edit existing ones, view notes and files within a project.

### 2.4 Edit Project modal

Opened from the pencil icon or **Edit > Edit Project**. Contains at least: project title, date (optional), time, location, assigned calendar, tags, and custom project fields (VERIFIED for title/date/calendar/tags; LIKELY for location/time/custom fields based on the details block and tokens).

### 2.5 Move Project dialog

**Edit > Move Project** opens a dialog: type the target contact's name, pick it, click **Move**. Moves the project with all Notes, Emails, Documents, Time-Logs and Activity (VERIFIED — help article + release note). Restriction noted in docs: projects that contain only Questionnaire or Quote documents, or *Draft* Invoice/Contract documents, can be moved — implying projects with sent/signed/paid invoices or contracts **cannot** be moved (LIKELY interpretation of the snippet).

### 2.6 Archive flow

**Edit > Archive** (single project) or **Bulk Actions > Archive** (List view). Effects (all VERIFIED from "How do I archive…", "How do I mark a project as complete?", "Archiving Projects: Calendar Dates", "Workflow Notifications: Archived Projects"):
- To-dos and events for the project are hidden from the calendar.
- No dashboard notifications (including workflow notifications) for the project.
- Completed client-facing documents remain visible to the client; incomplete ones are not accessible.
- New inbound emails for an archived project can still surface on the dashboard (if the email setting is on) but the project must be un-archived to reply.
- Project is removed from any Pipeline immediately, even if the pipeline tag stays.
- Archived projects are listed under the **Archived** filter and retain all data ("seals" rather than deletes).
- Archiving is optional; some members never archive.

### 2.7 Pipelines page (related, not part of Projects nav)

Up to **10 pipelines**, each with up to **5 phases**; each phase is defined **by a Project Tag** or **by days in prior phase**; a project enters a pipeline when it receives the first phase's tag; projects show as **Active / Completed / Removed** relative to the pipeline; movement is by adding/removing tags manually or via workflow automation (VERIFIED — "17hats Pipelines Overview", Pipelines feature page). This is the closest thing 17hats has to a project stage/status board.

### 2.8 Lifecycles (legacy)

A per-project stage tracker ("one Lifecycle per project, many Workflows") added via **Edit > Add Lifecycle**, with editable/renamable stages. Only available on discontinued **Founding Member** plans; not on Free CRM, Essentials, Standard or Premier (VERIFIED — "Lifecycles"). Effectively superseded by Pipelines.

### 2.9 Dashboard touchpoints

- **Recent Client Activity** widget shows the last five document events (invoice paid, contract signed, etc.), expandable to "See All Activity", filterable by **contact, project, activity type, tag(s), date** (VERIFIED).
- **New Leads vs Active Leads**: leads arriving via LCF/email rule land in "New Leads"; once certain actions are taken they move to "Active" (VERIFIED — this is a lead/dashboard state, not a project field).

---

## 3. Data & fields observed

| Entity | Field | Type | Required | Notes | Confidence |
|---|---|---|---|---|---|
| Project | Project Title / Name | text | Yes | Set on creation; LCF supplies a fixed name per form; editable via pencil icon | VERIFIED |
| Project | Main Contact | FK → Contact | Yes | Exactly one; changed only via Move Project | VERIFIED |
| Project | Contact Type (derived) | enum: Lead, Hot Lead, Cold Prospect, Client, Other Contact | — | Lives on the Contact, displayed in Project Details; drives Leads/Clients filter | VERIFIED |
| Project | Primary Email | text (derived from contact) | — | Displayed in Project Details | VERIFIED |
| Project | Phone Number | text (derived from contact) | — | Displayed in Project Details | VERIFIED |
| Project | Project Date | date | No | Optional; when set, project shows on calendar | VERIFIED |
| Project | Project Start Time / End Time | time | No | Exposed as tokens | VERIFIED (tokens) |
| Project | Project Location | text | No | Exposed as token; shown in header | VERIFIED (token), LIKELY (header) |
| Project | Assigned Calendar | FK → Calendar | LIKELY yes (default calendar setting exists) | Determines colour of project on calendar | VERIFIED |
| Project | Project Tags | multi-value text | No | Free-form, auto-complete, managed in Account Settings > Tag Management; can be auto-applied by LCF or Advanced Workflows | VERIFIED |
| Project | Archived flag | boolean | — | Only explicit project state | VERIFIED |
| Project | Custom Project Fields | user-defined (text/date/etc.) | No | Defined in Account Settings > Custom Fields; usable as tokens in emails, contracts, LCFs, questionnaires | VERIFIED |
| Project | ShootProof Gallery | link/ID | No | Exposed as a project token (integration) | VERIFIED (token) |
| Project | Lifecycle (legacy) | FK → Lifecycle, current stage | No | Founding Member plans only | VERIFIED |
| Project | Lead Source | picklist | No | Lead Source Reporting exists; whether stored on project vs contact UNVERIFIED | LIKELY |
| Project | Project number / ID | — | — | No user-visible project number found | UNVERIFIED / not found |
| Project | Colour | — | — | No per-project colour; colour comes from calendar | VERIFIED (absence) |
| Project | Status picklist (custom) | — | — | Not found | UNVERIFIED / not found |
| Related Contact | Contact | FK → Contact | — | Unlimited per project; used for email cc and extra contract signers | VERIFIED |
| Related Contact | Relationship label | text | ? | Not found in snippets | UNVERIFIED |
| Workflow (active) | Template ref, steps (To-Do / Action Item / Pause), progress | — | — | Copy of template; editable per project | VERIFIED |
| To-Do | Title | text | Yes | | VERIFIED |
| To-Do | Project | FK → Project | No (can be standalone) | | VERIFIED |
| To-Do | Due date | date | No | | VERIFIED |
| To-Do | Due time | time | No | "choose a due date and a time if necessary" | VERIFIED |
| To-Do | Assigned user | FK → User | No | Multi-user accounts only | VERIFIED |
| To-Do | Calendar | FK → Calendar | No | Recommended: dedicated To-Do calendar | VERIFIED |
| To-Do | Recurrence | daily/weekly/monthly/yearly + interval (e.g. every 1/2/3 weeks) + end after N occurrences or on date | No | | VERIFIED |
| To-Do | Notes/description | text | No | LIKELY present; not in snippets | LIKELY |
| To-Do | Completed flag | boolean | — | Checking off a workflow to-do can send its linked email | VERIFIED |
| To-Do | Reminder/notification | — | — | Not documented for to-dos (document email reminders are a separate feature) | UNVERIFIED |
| Note | Body, auto timestamp | text, datetime | — | | VERIFIED |
| File | Uploaded file (PDF, JPEG, etc.) | binary | — | Size limit not found | VERIFIED / limit UNVERIFIED |
| Event | Title, date/time, calendar, linked project | — | — | Non-project-date events live in Events tab; Google events can be linked | VERIFIED |
| Phone Log | entry | — | — | Fields not found | UNVERIFIED |
| Time Log | duration, rate, bookkeeping category, project | — | — | Timer pop-up; rates saved | VERIFIED |
| Activity Log | timestamped events | — | — | Content not enumerated | LIKELY |
| Bookkeeping | project P&L: income, payments, expenses tagged to project | derived | — | | VERIFIED |
| Pipeline membership | pipeline, phase, state (Active/Completed/Removed) | derived from tags/time | — | | VERIFIED |

---

## 4. Plan gating

Plans referenced in current docs: **Free CRM**, **Essentials (Level One)**, **Standard (Level Two)**, **Premier (Level Three)**; plus discontinued **Founding Member** plans. Third-party pricing posts note a 2025 pricing restructure, so tier names may have shifted (LIKELY).

| Capability | Gating | Confidence |
|---|---|---|
| Number of projects | Unlimited on all paid plans; **free trial capped at 3 projects** | VERIFIED (third-party pricing guides) / LIKELY |
| Projects, Project Overview, Notes, Files, Related Contacts, Archive, Move Project | All plans (core) | LIKELY |
| Tags (manual) | All plans | LIKELY |
| Auto-tagging via Advanced Workflows | **Premier / Level Three** only | VERIFIED |
| Workflows (basic) vs Advanced Workflows | Basic on lower tiers; Advanced on Premier | VERIFIED (17hats marketing + help) |
| Lifecycles | **Founding Member plans only**; not on Free/Essentials/Standard/Premier | VERIFIED |
| Pipelines | Available on current plans; exact tier not confirmed (LIKELY Standard/Premier) | UNVERIFIED |
| Multi-user / to-do assignment / per-user permissions | Essentials: 1 user, no extra seats; Standard: 1 user + $5/user/mo; Premier: 3 users + $5/user/mo | VERIFIED (third-party) / LIKELY |
| Time Tracking | Permission-gated per user; plan gating not confirmed | UNVERIFIED |
| Online Scheduling (booking → project) | Standard and above | VERIFIED (third-party) |
| Bookkeeping / project P&L | Present in paid tiers; exact gating not confirmed | UNVERIFIED |

---

## 5. User complaints, gaps, and confusion points

Found in reviews, comparison posts and help-article framing:

1. **Project vs Contact model confusion.** Users must create a project before doing anything with a contact; imported contacts have "no place to live" for documents until a project exists. The help center has multiple articles ("Projects vs Contacts", "Projects vs Lifecycle vs Workflows", "Terminology", "Vocabulary") purely to explain this, signalling recurring confusion. (VERIFIED that the articles exist.)
2. **No real project status.** Lead/Client is a contact attribute; "completed" = archived; there is no cancelled/lost/on-hold state. Users approximate status with tags, and 17hats' own Pipelines feature is built entirely on tag conventions. (VERIFIED by absence + Pipelines design.)
3. **Clunky tab-based page.** A comparison post says "understanding where and what your clients are doing within each of those tabs can get really clunky, really fast." (VERIFIED quote, third-party opinion.)
4. **Steep learning curve / dated interface.** Capterra/G2 summaries cite a steep learning curve and an interface that is intuitive but "clunky or lacking in customization." (VERIFIED, aggregate review sentiment.)
5. **No Kanban, Gantt, dependencies or milestones** at any tier; Pipelines is tag-driven, max 5 phases, not drag-and-drop by design. (VERIFIED via competitor article and 17hats docs.)
6. **Project assignment to team members is a workaround.** Official advice is to create a tag per team member and filter by it; there is no owner/assignee field on a project and no per-project visibility restriction. (VERIFIED.)
7. **Move Project restrictions.** Projects containing finalized invoices/contracts apparently cannot be moved between contacts. (LIKELY.)
8. **Archived-project email handling.** New emails for archived projects still surface on the dashboard, but you must un-archive to reply — a friction point called out in the help docs. (VERIFIED.)
9. **No duplicate/clone project.** No source mentions duplicating a project; repeat clients require a new project built from scratch (workflows/tags can be re-applied in bulk). (UNVERIFIED absence — not found.)
10. **Long-standing unresolved requests.** Review summaries mention users contacting support about issues "over years without seeing updates or fixes"; a competitor piece calls 17hats "frozen in time." (VERIFIED as opinion.)
11. **Limited branding on project-related client-facing surfaces** (beyond a logo). (VERIFIED, third-party opinion.)
12. **Automation stops short**: workflows can email and create to-dos but have fewer triggers than competitors. (VERIFIED, third-party opinion.)

---

## 6. Improvement opportunities for a clone

1. **First-class project status** with a default lifecycle (Lead → Booked/Active → In Progress → Delivered → Completed, plus Cancelled/Lost/On Hold) that is editable per account, shown as a column/filter on the list, and usable as a workflow trigger — while still supporting tag-based pipelines for users who like that model.
2. **Project Types / Templates**: a template bundling default name pattern, calendar, tags, custom fields, workflows, document templates and a to-do checklist; allow LCFs and booking services to select a template. This replaces 17hats' scattered LCF-name + tag + workflow setup.
3. **Duplicate project** (and "new project from previous project for this client") with options for which pieces to copy.
4. **Kanban/board view** of projects by status or by tag, with drag-and-drop that updates status/tags, alongside Grid and List views; saved views and column chooser on the List.
5. **Richer list page**: columns for status, next to-do, last activity, balance due, assigned user; filters by status/type/tag/date range/user; ascending/descending sort; export.
6. **Project ownership and permissions**: an assignee/owner field, optional "users see only their projects" mode, and per-project sharing — instead of tag conventions.
7. **Auto-generated project numbers** (configurable prefix) and optional per-project colour override for calendars.
8. **Multiple contacts with roles** (e.g., Bride, Groom, Planner, Billing) rather than one main contact + untyped related contacts; allow changing the primary contact in place without a "move."
9. **Unified timeline** that merges emails, notes, documents, payments, to-dos, calls, time entries and system events in one chronological feed with filters, rather than eight separate tabs.
10. **To-do improvements**: reminders/notifications on to-dos (missing in 17hats), sub-tasks, priorities, comments, and a "my tasks across projects" view.
11. **Archive/complete semantics**: separate "Complete" (keeps calendar history, stops reminders) from "Archive" (hides), with a rule for handling inbound email on completed projects without forcing un-archive.
12. **Move-project without restrictions**, with an audit entry, and merge-project support.
13. **Project-level financial summary** surfaced in the header (quoted, invoiced, paid, outstanding, expenses, hours logged, margin).
14. **Custom fields on the create form**, conditional fields per project type, and field-level tokens (already a 17hats strength — preserve it).

---

## 7. Confidence notes

Legend: VERIFIED = stated directly in a 17hats help article, feature page, blog, release note or reputable third-party snippet; LIKELY = strongly implied by sources; UNVERIFIED = not found.

- Projects list has Grid/List views, All/Clients/Leads/Archived filters, sort by Project Name/Client Name/Project Date, tag search — **VERIFIED**.
- Exact list columns, default sort, asc/desc toggle — **UNVERIFIED**.
- Bulk Actions (tags, archive, delete, apply workflow) from List view via checkboxes — **VERIFIED**.
- Project Overview sections (Project Information, Important Documents, Workflows, Related Contacts, Files) and bottom tabs (Notes, Emails, Files, To-do's, Events, Phone Log, Time Log, Activity Log) — **VERIFIED**.
- Default detail fields (Title, Primary Email, Project Date, Phone, Contact Type, Calendar) — **VERIFIED**.
- Location/start/end time as project attributes — **VERIFIED via tokens**; header placement **LIKELY**.
- Edit menu items Edit Project / Move Project / Archive — **VERIFIED**; Add Lifecycle — **VERIFIED (legacy plans)**.
- One main contact + unlimited Related Contacts — **VERIFIED**.
- Move Project behaviour and restriction on finalized documents — **VERIFIED / LIKELY** respectively.
- Creation paths (LCF, email lead capture, contact page buttons, online scheduling, CSV import, mobile app) — **VERIFIED**; whether a New Project button exists on the Projects list page — **LIKELY**.
- Full field list of the New Project dialog — **UNVERIFIED**.
- No "Project Types" or "Project Templates" features — **VERIFIED by absence across all 17hats sources searched**; possibility that a new feature exists post-2025 — **UNVERIFIED**.
- Project status = active/archived only; no cancelled/lost — **VERIFIED by absence**; Pipeline states Active/Completed/Removed — **VERIFIED**.
- Archiving effects (calendar, notifications, client document visibility, pipeline removal, email reply requirement) — **VERIFIED**.
- Tags: creation in Edit Project, auto-complete, Tag Management page, auto-tagging via Advanced Workflows (Premier), LCF auto-tag — **VERIFIED**.
- To-do fields (due date/time, assignee, calendar, recurrence with interval and end conditions) — **VERIFIED**; to-do reminders/notifications — **UNVERIFIED**.
- Notes auto-timestamp — **VERIFIED**; note pinning/editing — **UNVERIFIED**.
- Time tracking timer, rates, bookkeeping category — **VERIFIED**; per-project mini P&L — **VERIFIED**; its on-page location — **UNVERIFIED**.
- Custom Project Fields appear in Project Details and work as tokens — **VERIFIED**.
- Team permissions are section-level (Contacts & Projects, Calendars, Templates, Products, Time Tracking, Emails…) and project assignment is by tag — **VERIFIED**; per-project visibility restriction — **not found, UNVERIFIED**.
- Project numbering, project colour, duplicate project — **not found, UNVERIFIED (likely absent)**.
- Plan gating: unlimited projects, trial cap of 3 projects, user seat pricing, Advanced Workflows on Premier, Lifecycles on Founding Member only — **VERIFIED (mix of 17hats and third-party sources)**; 2025 pricing restructure details — **UNVERIFIED**.
- User complaints — quoted from review aggregators and competitor posts; treat as **VERIFIED opinions**, not measured data.

---

## 8. Sources

17hats Help Center
- [17hats Projects](https://help.17hats.com/en/articles/3110631-17hats-projects)
- [Project Overview](https://help.17hats.com/en/articles/3110647-project-overview)
- [How do I navigate the "Project Overview" screen?](https://help.17hats.com/en/articles/928568-how-do-i-navigate-the-project-overview-screen)
- [Video: Project Overview](https://help.17hats.com/en/articles/1031249-video-project-overview)
- [Projects Vs. Contacts](https://help.17hats.com/en/articles/879690-projects-vs-contacts)
- [Projects vs. Lifecycle vs. Workflows](https://help.17hats.com/en/articles/1052884-projects-vs-lifecycle-vs-workflows)
- [Projects collection](https://help.17hats.com/en/collections/550606-projects)
- [How Are Projects Sorted?](https://help.17hats.com/en/articles/927641-how-are-projects-sorted)
- [Project Tags](https://help.17hats.com/en/articles/1769384-project-tags)
- [Contacts Tags](https://help.17hats.com/en/articles/1769360-contacts-tags)
- [Tag Feature Overview](https://help.17hats.com/en/articles/3196308-tag-feature-overview)
- [Tag Management in 17hats](https://help.17hats.com/en/articles/6236261-tag-management-in-17hats)
- [Automatically Tag Contacts and Projects](https://help.17hats.com/en/articles/5910127-automatically-tag-contacts-and-projects)
- [How to Assign Projects Using Tags](https://help.17hats.com/en/articles/2952802-how-to-assign-projects-using-tags)
- [How to Add/Remove Tags in Bulk](https://help.17hats.com/en/articles/3760729-how-to-add-remove-tags-in-bulk)
- [How to Apply Workflows to Projects in Bulk](https://help.17hats.com/en/articles/3760752-how-to-apply-workflows-to-projects-in-bulk)
- [How to Archive Projects in Bulk](https://help.17hats.com/en/articles/6891071-how-to-archive-projects-in-bulk)
- [How to Delete or Archive Projects in Bulk](https://help.17hats.com/en/articles/2965836-how-to-delete-or-archive-projects-in-bulk)
- [How do I archive a Project or Contact in 17hats?](https://help.17hats.com/en/articles/879747-how-do-i-archive-a-project-or-contact-in-17hats)
- [How do I mark a project as complete?](https://help.17hats.com/en/articles/927255-how-do-i-mark-a-project-as-complete)
- [Archiving Projects: Calendar Dates](https://help.17hats.com/en/articles/879660-archiving-projects-calendar-dates)
- [Workflow Notifications: Archived Projects](https://help.17hats.com/en/articles/879555-workflow-notifications-archived-projects)
- [Move Projects between Contact Records](https://help.17hats.com/en/articles/2813332-move-projects-between-contact-records)
- [Related Contacts](https://help.17hats.com/en/articles/934803-related-contacts)
- [What is the Best Way to Send Contracts and Invoices to Related Contacts?](https://help.17hats.com/en/articles/934969-what-is-the-best-way-to-send-contracts-and-invoices-to-related-contacts)
- [Can I add more signatures to my contracts?](https://help.17hats.com/en/articles/962028-can-i-add-more-signatures-to-my-contracts)
- [Adding Contacts to 17hats](https://help.17hats.com/en/articles/3110621-adding-contacts-to-17hats)
- [17hats Contact Types](https://help.17hats.com/en/articles/924376-17hats-contact-types)
- [Changing a Lead to a Client](https://help.17hats.com/en/articles/879529-changing-a-lead-to-a-client)
- [When do Hot Leads automatically turn into Clients?](https://help.17hats.com/en/articles/977936-when-do-hot-leads-automatically-turn-into-clients)
- [New Leads vs. Active Leads](https://help.17hats.com/en/articles/2625550-new-leads-vs-active-leads)
- [Manually Adding Leads](https://help.17hats.com/en/articles/2509970-manually-adding-leads)
- [Lead Overview: Lead Capture, Lead Overview Page](https://help.17hats.com/en/articles/928565-lead-overview-lead-capture-lead-overview-page)
- [Lead Management Process Overview](https://help.17hats.com/en/articles/3113059-lead-management-process-overview)
- [Lead Capture Forms Overview](https://help.17hats.com/en/articles/853251-lead-capture-forms-overview)
- [Lead Capture Form Details](https://help.17hats.com/en/articles/3113718-lead-capture-form-details)
- [Email Lead Capture Form Details](https://help.17hats.com/en/articles/2823021-email-lead-capture-form-details)
- [Overview of Lead Source Reporting in 17hats](https://help.17hats.com/en/articles/7336856-overview-of-lead-source-reporting-in-17hats)
- [Lifecycles](https://help.17hats.com/en/articles/923689-lifecycles)
- [Video: Project Lifecycles](https://help.17hats.com/en/articles/1031241-video-project-lifecycles)
- [What is the difference between a Workflow and a Lifecycle?](https://help.17hats.com/en/articles/923760-what-is-the-difference-between-a-workflow-and-a-lifecycle)
- [17hats Pipelines Overview](https://help.17hats.com/en/articles/9764837-17hats-pipelines-overview)
- [Pipeline collection](https://help.17hats.com/en/collections/10244613-pipeline)
- [Workflow Overview](https://help.17hats.com/en/articles/1046329-workflow-overview)
- [Workflows: To-Dos, Action Items, Pauses](https://help.17hats.com/en/articles/879587-workflows-to-dos-action-items-pauses)
- [How to use a To-Do item in my workflow?](https://help.17hats.com/en/articles/928580-how-to-use-a-to-do-item-in-my-workflow)
- [Can I mark items as complete in a workflow?](https://help.17hats.com/en/articles/843678-can-i-mark-items-as-complete-in-a-workflow)
- [Custom Fields](https://help.17hats.com/en/articles/2545832-custom-fields)
- [Complete List of Tokens](https://help.17hats.com/en/articles/1235598-complete-list-of-tokens)
- [Time Tracking](https://help.17hats.com/en/articles/861657-time-tracking)
- [17hats Invoicing & Bookkeeping](https://help.17hats.com/en/articles/849340-17hats-invoicing-bookkeeping)
- [Users - Getting Started and Setting Permissions](https://help.17hats.com/en/articles/840254-users-getting-started-and-setting-permissions)
- [Working with Users in 17hats](https://help.17hats.com/en/articles/2968814-working-with-users-in-17hats)
- [Creating a Calendar Event](https://help.17hats.com/en/articles/927438-creating-a-calendar-event)
- [Adding a Google Event to a Project](https://help.17hats.com/en/articles/3149102-adding-a-google-event-to-a-project)
- [Recommended Calendar Setup](https://help.17hats.com/en/articles/3112379-recommended-calendar-setup)
- [Default Calendar Setting](https://help.17hats.com/en/articles/3598112-default-calendar-setting)
- [Online Scheduling Services - Project Management](https://help.17hats.com/en/articles/9894024-online-scheduling-services-project-management)
- [Recent Client Activity](https://help.17hats.com/en/articles/2679659-recent-client-activity)
- [17hats Dashboard](https://help.17hats.com/en/articles/3110596-17hats-dashboard)
- [Staying Organized in 17hats](https://help.17hats.com/en/articles/962094-staying-organized-in-17hats)
- [17hats Terminology](https://help.17hats.com/en/articles/3388927-17hats-terminology)
- [17hats Vocabulary](https://help.17hats.com/en/articles/3388289-17hats-vocabulary)
- [How do I import a CSV file of Contacts and Projects?](https://help.17hats.com/en/articles/934801-how-do-i-import-a-csv-file-of-contacts-and-projects)
- [Document Email Reminders](https://help.17hats.com/en/articles/2280471-document-email-reminders)

17hats feature pages, blog, release notes, University
- [Project Page Feature](https://www.17hats.com/features/project-page)
- [Tags Feature](https://www.17hats.com/features/tags)
- [Related Contacts Feature](https://www.17hats.com/features/related-contacts)
- [Pipelines Feature](https://www.17hats.com/features/pipelines)
- [Lead Capture Form Feature](https://www.17hats.com/features/lead-capture-form)
- [Multi Users Feature](https://www.17hats.com/features/multi-users)
- [Custom Fields Feature](https://www.17hats.com/features/custom-fields)
- [Mobile App Feature](https://www.17hats.com/features/mobile-app)
- [Dashboard Feature](https://www.17hats.com/features/dashboard)
- [Calendar Feature](https://www.17hats.com/features/calendar)
- [Profit/Loss Report Feature](https://www.17hats.com/features/profit-loss-report)
- [Key features](https://17hats.com/features)
- [Blog: Easy Navigation Within 17hats](https://blog.17hats.com/easy-navigation-within-17hats/)
- [Blog: 17 Ways To Use Tags In 17hats](https://blog.17hats.com/17-ways-to-use-tags-in-17hats/)
- [Blog: Tackling 17hats Tags for Optimized Organization](https://blog.17hats.com/tackling-17hats-tags-for-optimized-organization/)
- [Blog: Automate tagging](https://blog.17hats.com/automate-tagging-for-optimal-business-organization/)
- [Blog: The Power of Adding Related Contacts to a Project](https://blog.17hats.com/the-power-of-adding-related-contacts-to-a-project/)
- [Blog: Feature Friday: Using Recurring To-Dos](https://blog.17hats.com/feature-friday-using-recurring-to-dos/)
- [Blog: 17hats Pipelines: The Game-Changer](https://blog.17hats.com/17hats-pipelines-the-game-changer-for-small-business-efficiency/)
- [Blog: Meet Your New Secret Weapon: Pipelines](https://blog.17hats.com/tired-of-dropping-the-ball-meet-your-new-secret-weapon-pipelines/)
- [Blog: Up your marketing game with bulk actions](https://blog.17hats.com/level-marketing-bulk-actions/)
- [Blog: Reporting in 17hats](https://blog.17hats.com/reporting-in-17hats-your-businesss-secret-weapon/)
- [Release Notes: Move Projects Between Contacts](https://17hats.releasenotes.io/release/hbgWl-move-projects-between-contacts)
- [Release Notes: Bulk Actions - Documents & Projects](https://17hats.releasenotes.io/release/ktAT8-bulk-actions-documents-projects)
- [Release Notes: Custom Fields](https://17hats.releasenotes.io/release/70WRd-custom-fields)
- [Release Notes: Recent Client Activity](https://17hats.releasenotes.io/release/8XaJK-recent-client-activity)
- [Release Notes: projects tag](https://17hats.releasenotes.io/tag/projects)
- [Release Notes: archived projects tag](https://17hats.releasenotes.io/tag/archived%20projects)
- [17hats University: How To Add Project Notes in 17hats](https://www.17hatsuniversity.com/17hats-quick-tips/how-to-add-project-notes-in-17hats)
- [17hats University: How to Bulk Archive Projects](https://www.17hatsuniversity.com/17hats-quick-tips/17hats-tutorial-how-to-bulk-archive-projects-in-17hats)
- [17hats University: How To Use Custom Fields](https://www.17hatsuniversity.com/17hats-quick-tips/how-to-use-custom-fields-in-17hats)
- [17hats University: Pipelines Walkthrough](https://www.17hatsuniversity.com/17hats-quick-tips/pipelines-walkthrough)
- [17hats University: The Bookkeeping Tab](https://www.17hatsuniversity.com/17hats-quick-tips/the-bookkeeping-tab-in-17hats)
- [YouTube: How to bulk add Tags to Projects & Contacts](https://www.youtube.com/watch?v=LJGlHT3ZpLI)
- [YouTube: How to Add "Other" Contacts in 17hats](https://www.youtube.com/watch?v=v7WFWTO9zF8)
- [YouTube: 17Hats Tutorial (2026)](https://www.youtube.com/watch?v=nmPjubIb6_M)
- [App Store: 17hats](https://apps.apple.com/us/app/17hats/id1069498016)

Third-party reviews, pricing and comparisons
- [Capterra: 17hats Reviews](https://www.capterra.com/p/144328/17hats/reviews/)
- [G2: 17hats Reviews](https://www.g2.com/products/17hats/reviews)
- [Trustpilot: 17hats](https://www.trustpilot.com/review/www.17hats.com)
- [GetApp: 17hats](https://www.getapp.com/collaboration-software/a/17hats/)
- [Software Advice: 17hats](https://www.softwareadvice.com/bpm/17hats-profile/)
- [Plutio: Still Using 17hats? It Has No Kanban or Gantt Charts](https://www.plutio.com/freelancer-magazine/still-using-17hats)
- [Agiled: 17hats Pricing 2026](https://agiled.app/blog/17hats-pricing)
- [OneSuite: 17hats Pricing Guide](https://onesuite.io/blog/17hats-pricing/)
- [Zendo: Evaluating 17hats Pricing](https://getzendo.io/blog/17hats-pricing/)
- [Zendo: 17Hats vs HoneyBook](https://getzendo.io/blog/17hats-vs-honeybook/)
- [Taskip: 17hats Pricing 2026](https://taskip.net/17hats-pricing/)
- [HoneyBook: 17hats vs HoneyBook vs Dubsado](https://www.honeybook.com/blog/17hats-vs-honeybook-vs-dubsado)
- [Byte Bodega: 17Hats vs Honeybook vs Dubsado](https://www.bytebodega.com/17hats-vs-honeybook-vs-dubsado/)
- [Swell System: Dubsado vs 17Hats](https://swellsystem.com/dubsado-vs-17hats/)
- [Planning Pod comparison](https://planningpod.com/blog/honeybook-vs-dubsado-vs-planning-pod-vs-17hats-event-business-management-software-competitors-pricing)
- [Deb Mitzel Creative: 17hats Bulk Actions](https://debmitzelcreative.com/2024/10/09/17hats-bulk-actions-why-you-should-be-using-them/)
- [Deb Mitzel Creative: Set Up a 17hats Lead Capture Form](https://debmitzelcreative.com/2024/09/18/series-how-to-set-up-a-17hats-lead-capture-form/)
- [Deb Mitzel Creative: 17hats Custom Fields](https://debmitzelcreative.com/2025/09/03/17hats-custom-fields-personalize-client-experience/)
