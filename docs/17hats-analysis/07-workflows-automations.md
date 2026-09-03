# 17hats — Module 07: Workflows & Automations

Research method: web search only (16 distinct queries against help.17hats.com, 17hats.com feature pages, blog.17hats.com, 17hats.releasenotes.io, review sites, and third-party comparison articles). No account was accessed. Search snippets, not full pages, were the source of every claim below; where a snippet was insufficient the gap is stated explicitly. Confidence tags in Section 8 apply throughout.

Research date: 2026-09-03.

---

## 1. Summary

- 17hats Workflows are **linear, step-based checklists** attached to a Project. Each workflow is a list of three step kinds: **To-Do**, **Action Item**, and **Pause**. There is no visual/node-based canvas; third-party reviewers describe the engine as "closer to a sophisticated checklist than a true automation graph."
- **Action Items** are the automation payload: send an Email, Quote, Contract, Invoice, or Questionnaire; start another Workflow; archive the Project; change the calendar the Project appears on; add/remove Project Tags; assign tasks to specific team members. Each Action Item can run **automatically** or **"upon your review"** (the automated vs manual-approval distinction).
- **Timing** is expressed as a number of days before/after a **base date** (usually the Project/event date) or relative to the **completion of the previous step**. Document-sending steps have configurable **completion triggers** (e.g., invoice step is "complete" when sent, when first payment is made, or when fully paid; contract step when signed; quote step when the linked contract/invoice actions occur).
- Workflows are started **manually** (the "+" next to Workflows on a Project, or bulk from the Projects list view), **automatically from a Lead Capture Form** (one default workflow per form, or a different workflow per answer of a "Choose From a List" question), **from an Online Scheduling Service booking** (with optional approval gating), **from another Workflow** (Action Item "start a new workflow"), and — new in March 2026 — **by applying/removing a Project Tag** ("Start/Stop Workflow Automation").
- A Project can run **multiple workflows concurrently**. There is no limit on the number of workflow templates.
- **Pause/Resume** of an in-flight workflow exists (Project > Workflow > Edit > Pause Workflow); progress is preserved. Template edits **do not propagate** to already-applied workflows — you must edit the copy on the Project or re-apply.
- **Lifecycles** (a.k.a. Pipelines) are a separate concept from Workflows: stage-based project progress (e.g., New Lead → Booking → Onboarded → Working) driven by triggers such as "contract sent" or "invoice paid," with an optional automatic move from the Lead calendar to the Booked calendar.
- A **Marketplace** (marketplace.17hats.com, also reachable from Documents & Emails) sells/gives away Workflow templates plus the email/document templates they depend on; installed items land under "My Templates."
- **Plan gating**: historically Workflows split into "Basic" (lower tiers) and "Advanced" (Premier). As of 2026 new signups get a single ~$60/month plan that includes Advanced Workflows; legacy tiered accounts still exist.
- **Known gaps** (per comparison articles and the absence of any help-center evidence): no if/then branching inside workflows (branching exists only in questionnaires and lead-form-to-workflow routing), no loops, delays are expressed in whole days, no visual builder. No evidence was found of a "Workflow 2.0," "Rules," or conditional-trigger release.

---

## 2. Pages / screens

Navigation labels below come from help-center snippets; exact menu names may differ slightly in the live app.

### 2.1 Workflow Templates list (Documents & Emails > Workflows)

- **Purpose**: Library of reusable workflow templates.
- **What the user sees**: List of workflow templates (name, presumably step count). "My Templates" section holds both hand-built templates and Marketplace-installed ones. No cap on template count.
- **Actions**: Create new workflow template; open/edit an existing template; (LIKELY) duplicate/delete. Link out to Marketplace.
- **Navigation**: Reached from the Documents & Emails area (the Marketplace is also linked from this page). From here you open a template into the Workflow Builder.
- **Not found**: Whether templates can be foldered/tagged or searched.

### 2.2 Workflow Builder (template editor)

- **Purpose**: Define the ordered list of steps in a template.
- **What the user sees**: A vertical, ordered list of steps. Each step is one of:
  - **To-Do** — a task for you (e.g., "call client," "order album"). Can be checked off; completing it can trigger the next steps. To-Dos appear on your calendar/task list.
  - **Action Item** — an automated action: send Email / Quote / Contract / Invoice / Questionnaire (using a saved template), start another Workflow, archive the Project, change the Project's calendar, add or remove a Project Tag, assign a task to a team member.
  - **Pause** — a hard stop; nothing after it runs until the Pause is manually checked off.
- **Per-step configuration (observed)**:
  - Timing: N days before/after the base date, or relative to previous step completion (see Section 3).
  - For Action Items: **Automatic** vs **requires your review/approval** before sending.
  - For document Action Items: **completion trigger** (what counts as "done" so the next step may proceed) — e.g., for invoices: "When sent," "When the first invoice payment is made," "When invoice is fully paid"; for contracts: when signed; for quotes: keyed to the linked contract/invoice actions.
  - Which email/document template to use.
- **Actions**: Add step, reorder steps (help center references "delete, add, or rearrange items"), edit step, delete step, save template.
- **Navigation**: From Workflow Templates list; the builder for an *applied* workflow is reached from the Project page.
- **Not found**: Step-level names for the UI controls; whether steps can be grouped; whether there is a "notify me" step distinct from a To-Do.

### 2.3 Marketplace (marketplace.17hats.com)

- **Purpose**: Browse/purchase/install templates from other 17hats users ("Partners").
- **What the user sees**: Item listings for Emails, Quotes, Contracts, Invoices, Questionnaires, Lead Capture Forms, Online Scheduling Services, and Workflows. The current Marketplace is **external and public to browse** (the original lived inside the app).
- **Actions**: Purchase/install (items auto-install into the account), then edit installed items under My Templates to match branding.
- **Navigation**: Direct URL, or the Documents & Emails page in-app.

### 2.4 Project page — Workflows section

- **Purpose**: Show and manage workflows applied to a specific Project.
- **What the user sees**: A "Workflows" section with a "+" control; each applied workflow is listed with its steps and their state. A **Lifecycle progress bar** also appears on the Project page (and as an at-a-glance meter in other views) — this is the Lifecycle, not the Workflow.
- **Actions**:
  - "+" to apply a workflow template (choose template, LIKELY set base date).
  - Open an applied workflow > **Edit** > **Pause Workflow** / Resume.
  - Edit the applied copy's steps (required if the template changed after application).
  - Check off To-Dos and Pauses; approve/send review-gated Action Items.
- **Navigation**: Projects list > Project > Workflows. Also reached via the Lifecycle bar and Overview.
- **Not found**: Exact step-status vocabulary (e.g., "Pending," "Awaiting approval," "Completed," "Skipped") — no snippet named these. A per-step "Skip" control was **not** confirmed.

### 2.5 Projects list — bulk apply

- **Purpose**: Apply one workflow to many projects at once.
- **What the user sees**: Projects page toggled from **grid** view to **list** view; checkboxes per project; bulk action menu.
- **Actions**: Select projects > Bulk action > Apply Workflow. (Third-party blog "17hats Bulk Actions" (Oct 2024) confirms bulk actions including workflow application.)
- **Navigation**: Projects top-level nav.

### 2.6 Lead Capture Form details — Workflow assignment

- **Purpose**: Auto-start a workflow when a form is submitted.
- **Path**: Leads > Lead Capture Form > select form > arrow next to **Form Details** > **Edit** > select a **Workflow**.
- **Conditional routing**: Leads > Lead Capture Form > form > **Add** > **Choose from a List** > enter question, answer choices, and the Workflow for each answer choice.
- **Related**: Lead Capture **Auto-Replies** (immediate reply email) are configured separately from the workflow.

### 2.7 Online Scheduling Service — Workflows tab

- **Purpose**: Auto-start a workflow when a client books.
- **Behavior**: If **Approval Settings** are enabled, the workflow triggers when you manually confirm the booking, or automatically confirms via the Workflow Trigger. The workflow will not advance to the next step until quote items are selected, the contract is signed, and the invoice is paid (prevents premature auto-approval).

### 2.8 Project Tags — Start/Stop Workflow Automation (new, March 2026)

- **Purpose**: Start or stop a workflow by applying a Project Tag.
- **Behavior**: Tags can be applied automatically from Lead Capture Form answers (see "Automate tagging" blog) or manually; a tag rule starts or stops a named workflow so the system "responds to what the client actually did" without manually starting/pausing workflows.
- **Navigation**: Help article "Start/Stop Workflow Automation" (id 13928403). Exact settings location not captured in snippets (LIKELY under Account Settings > Tags or the Workflow template).

### 2.9 Lifecycle settings

- **Purpose**: Define stage progression for projects (separate from workflows).
- **What the user sees**: A starter lifecycle with multiple editable stages. For each stage: name (e.g., New Lead, Booking, Meeting), a **start trigger** (e.g., contract sent, invoice paid), and an option to **change the project date/calendar** to move from the Lead calendar to the Booked calendar.
- **Recommended pipeline (17hats blog)**: Booked (quote accepted + first payment) → Onboarded (onboarding workflow completed) → Working (work begun). 17hats frames the client journey as four systems: **Lead Management, Booking, Onboarding, Fulfillment**.

### 2.10 Account Settings > Reminders (Document Email Reminders)

- Not a workflow page, but relevant: automated **upcoming / overdue document reminders** are configured here, and 17hats explicitly advises *not* building reminder steps into workflows because this handles them.

---

## 3. Triggers, actions, and timing options

### 3.1 Workflow start triggers

| Trigger | How configured | Confidence |
|---|---|---|
| Manual — single project | Project page > "+" next to Workflows | VERIFIED |
| Manual — bulk | Projects list view > select > bulk Apply Workflow | VERIFIED |
| Lead Capture Form submitted (default workflow) | Form Details > Edit > select Workflow | VERIFIED |
| Lead Capture Form answer-based routing | "Choose From a List" question > workflow per answer | VERIFIED |
| Online Scheduling Service booking (optionally after approval) | OSS > Workflows tab / Approval Settings | VERIFIED |
| Another workflow's Action Item ("start a new workflow") | Action Item type | VERIFIED |
| Project Tag applied → start workflow | Start/Stop Workflow Automation (Mar 2026) | VERIFIED |
| Project Tag applied → stop workflow | Start/Stop Workflow Automation (Mar 2026) | VERIFIED |
| Project Type assigned → default workflow | — | UNVERIFIED (no snippet found; 17hats appears to key defaults to Lead Capture Forms and Lifecycles rather than a "Project Type" field) |
| Quote accepted / Contract signed / Invoice paid / Questionnaire completed as *workflow start* | — | UNVERIFIED as start triggers; VERIFIED as *step completion* triggers (below) and as *Lifecycle stage* triggers |

### 3.2 Step types and actions

| Step type | Action | Notes | Confidence |
|---|---|---|---|
| To-Do | Create a task for you/team | Shows on calendar/to-do list; checking it off can release subsequent steps | VERIFIED |
| Action Item | Send Email | Uses email template | VERIFIED |
| Action Item | Send Quote | Completion trigger configurable | VERIFIED |
| Action Item | Send Contract | Complete when signed | VERIFIED |
| Action Item | Send Invoice | Complete when sent / first payment / fully paid | VERIFIED |
| Action Item | Send Questionnaire | Complete when completed | VERIFIED |
| Action Item | Start a new Workflow | Chains workflows | VERIFIED |
| Action Item | Archive the Project | | VERIFIED |
| Action Item | Change the calendar the Project appears on | e.g., Lead → Booked | VERIFIED |
| Action Item | Add / remove Project Tag | Cited in 17hats-vs-HoneyBook article | LIKELY |
| Action Item | Assign task to specific team member | Cited in 17hats-vs-HoneyBook article | LIKELY |
| Pause | Hard stop until manually checked off | | VERIFIED |
| — | Create calendar event (standalone) | Not found as a distinct step; To-Dos land on calendar | UNVERIFIED |
| — | Notify / internal notification step | Not found as a distinct step; To-Do used for self-reminders | UNVERIFIED |
| — | Change Lifecycle stage directly | Not found; Lifecycle stages move on their own triggers | UNVERIFIED |

### 3.3 Approval mode per Action Item

| Mode | Behavior | Confidence |
|---|---|---|
| Automatic | Step executes when its timing/precondition is met | VERIFIED |
| Upon your review (manual approval) | Step waits for you to review/approve before sending | VERIFIED (wording "completed within 17hats automatically, or upon your review") |

### 3.4 Timing options

| Timing option | Detail | Confidence |
|---|---|---|
| N days before base date | Base date = project/event/session date | VERIFIED |
| N days after base date | e.g., thank-you email 2 days after session | VERIFIED |
| After previous step completes | "trigger based on the previous item being completed" | VERIFIED |
| N days after previous step completes | Implied by "elapsed time" language | LIKELY |
| Immediately | Implied (0 days / on trigger) | LIKELY |
| Specific time of day | Not found | UNVERIFIED |
| Business-hours / weekday restriction | Not found | UNVERIFIED |
| Hour/minute-level delays | Not found; all examples are whole days | UNVERIFIED (LIKELY unsupported) |

Note on dates: workflow step timing is computed from the workflow's **base date**, but email/document **template merge fields** for date/time pull from the **project date and time** — a documented source of confusion if the two differ.

### 3.5 Step completion triggers (gate the *next* step)

| Step | Completion options | Confidence |
|---|---|---|
| Send Invoice | When sent; when first payment made; when fully paid | VERIFIED |
| Send Contract | When signed/accepted | VERIFIED |
| Send Quote | Based on related actions on the contract/invoice attached to the quote | VERIFIED |
| Send Questionnaire | When completed (LIKELY also "when sent") | LIKELY |
| Send Email | When sent | LIKELY |
| To-Do / Pause | When manually checked off | VERIFIED |

---

## 4. Data & fields observed

**Workflow template**
- Name
- Ordered steps[]
- (LIKELY) Basic vs Advanced classification depending on plan

**Step**
- Type: To-Do | Action Item | Pause
- Title/description
- Timing: offset (days), anchor (base date | previous step), direction (before | after)
- For Action Items: action subtype (Email / Quote / Contract / Invoice / Questionnaire / Start Workflow / Archive Project / Change Calendar / Add-Remove Tag / Assign Task), linked template ID, approval mode (automatic | review), completion trigger
- For To-Do: assignee (LIKELY), due offset
- Runtime state on applied copy: done / not done; approval pending (names UNVERIFIED)

**Applied workflow (on Project)**
- Source template
- Base date
- Status: active | paused
- Per-step runtime state
- Note: applied copies are decoupled from the template (no propagation)

**Project**
- Project date/time (drives merge fields)
- Calendar (Lead / Booked / custom)
- Tags[] (drive Start/Stop automation)
- Lifecycle stage
- Workflows[] (multiple concurrent)

**Lead Capture Form**
- Default workflow
- Per-answer workflow map on "Choose From a List" questions
- Auto-reply email
- Auto-tag rules

**Lifecycle**
- Stages[]: name, start trigger (contract sent, invoice paid, etc.), optional calendar change

---

## 5. Plan gating

- Help article "Workflows: Advanced vs Basic" (id 7432912) confirms a two-level split existed. Historical tiers per third-party pricing guides: **Essentials ~$15/mo**, **Standard ~$30/mo**, **Premier ~$45–60/mo**; Advanced Workflows, Zapier, client portal, and questionnaire if/then logic were Premier-only. 17hats' own guidance: "if you are ready for automation — Premier."
- As of 2026, **new signups get a single plan (~$60/month)** that includes the former Premier features, including Advanced Workflows. Still-paid add-ons: recurring billing, advanced scheduling, time tracking, bank connect, QuickBooks Online sync (~$5–10/month each).
- Exactly which workflow capabilities were "Basic" vs "Advanced" was not captured in snippets (UNVERIFIED). A plausible reading from the comparison articles is that Basic = To-Do checklists (the "To-Do Workflows" feature page) and Advanced = Action Items that auto-send documents/emails and chain workflows.

---

## 6. User complaints, gaps, and confusion points

- **Setup burden**: Multiple Capterra reviewers report it "took days to figure out," "unfriendly user experience," and time-consuming configuration; a comparison site says most users spend 2–3 days configuring before sending a first proposal.
- **Limited starter templates**: Complaints about having to build workflows from scratch; the Marketplace partially mitigates this.
- **No branching inside a workflow**: Conditional behavior is only available at entry (lead-form answer → workflow) or via tags (start/stop). Everything else must be handled by building multiple parallel workflows or manual Pause/To-Do gates.
- **Template edits don't propagate**: Changing a template leaves in-flight project workflows unchanged; users must fix each applied copy or re-apply — a frequent source of "why didn't my change take effect."
- **Base date vs project date**: Step timing keys off the workflow base date while merge fields key off the project date/time; mismatches produce wrong dates in emails.
- **Whole-day granularity**: No evidence of hour-level delays or send-time-of-day control.
- **Scaling**: Reviewers say it fits 1–2 person businesses but "can be lacking" with multiple employees and product lines.
- **Notification fan-out**: Help center states there's no way to send completion notifications (quote accepted, contract signed, invoice paid, questionnaire done) to multiple email addresses.
- **UI polish**: Reviewers consistently rate the interface below HoneyBook's, though "automation tinkerers" prefer 17hats' granularity.
- **Approval-gated OSS bookings**: The three-condition gate (quote items selected, contract signed, invoice paid) before advancing may confuse users who expect the workflow to run on booking.

---

## 7. Improvement opportunities for a clone

1. **Conditional branching in the step list** — if/else on document status, questionnaire answers, tag presence, project field values, payment amount; keep the linear list UX but allow "branch" steps that fork and rejoin.
2. **Visual + list dual view** — a node graph for understanding, a list for fast editing (Dubsado 3.0 went node-based; 17hats users like lists).
3. **Sub-day timing and send windows** — hours/minutes, "send at 9:00 local," business-days-only, skip weekends/holidays, timezone-aware.
4. **Template versioning with propagation** — record template version on each applied workflow; offer "update in-flight workflows to latest version" with a diff and a safe merge for not-yet-run steps.
5. **Dry-run / simulation** — preview the exact dates and recipients every step would fire given a base date, before applying.
6. **Explicit step states** — Pending / Scheduled (with fire time) / Awaiting approval / Running / Done / Skipped / Failed, each visible on the project and filterable globally ("all steps awaiting my approval today").
7. **Per-step skip, reschedule, and re-run** on in-flight workflows, with an audit log.
8. **First-class triggers** for document events (quote accepted, contract signed, invoice paid, questionnaire completed, appointment booked, payment failed) as *workflow start* triggers, not only step-completion gates.
9. **Project Type → default workflow(s) and lifecycle**, plus lead-form → project type mapping.
10. **Internal notification step** (email/SMS/push to owner or teammate) distinct from To-Dos; multi-recipient notifications.
11. **Wait-until step** (wait for tag, for questionnaire answer, for date field) rather than only manual Pause.
12. **Workflow-level variables** (e.g., "delivery date," "second shooter") that steps can reference, with merge-field consistency between timing and templates.
13. **Global automation inbox** — one place listing every review-gated item across all projects.
14. **Loop/recurring steps** — e.g., "remind every 3 days until paid, max 4 times."
15. **Bulk operations parity** — pause/resume/skip across many projects, with filtering by workflow and step.
16. **Marketplace with dependency bundling** — installing a workflow pulls in the email/document templates it references and maps them automatically.

---

## 8. Confidence notes

| Claim | Status |
|---|---|
| Three step types: To-Do, Action Item, Pause | VERIFIED (help.17hats.com 879587) |
| Action Items send Email/Quote/Contract/Invoice/Questionnaire; start workflow; archive project; change calendar | VERIFIED (help 1037910 / 879587) |
| Action Items can add/remove tags and assign tasks to team members | LIKELY (17hats-vs-HoneyBook blog) |
| Action Items run automatically or "upon your review" | VERIFIED (help 879587) |
| Invoice completion triggers: sent / first payment / fully paid | VERIFIED (help 2165133) |
| Quote completion keyed to linked contract/invoice | VERIFIED (help 2165100) |
| Timing in days before/after base date or after previous step | VERIFIED (Improve Photography walkthrough; feature page) |
| Merge fields use project date/time, timing uses base date | VERIFIED (Improve Photography) |
| Specific time of day / business hours / sub-day delays | UNVERIFIED (no evidence; likely absent) |
| Manual apply via "+" on Project; bulk from list view | VERIFIED (help 1828264, 3760752) |
| Multiple concurrent workflows per project | VERIFIED (features/workflows page) |
| Unlimited workflow templates | VERIFIED (features/workflows page) |
| Lead form default workflow and per-answer routing | VERIFIED (help 853251 / 3113718 / 840255) |
| OSS booking triggers workflow; approval gating rule | VERIFIED (help 2933608) |
| Start/Stop via Project Tag, March 2026 | VERIFIED (help 13928403; blog) |
| Pause/Resume in-flight workflow via Edit > Pause Workflow | VERIFIED (help 13753480) |
| Template edits do not propagate | VERIFIED (help 879497) |
| Per-step Skip / Remove on in-flight workflow | UNVERIFIED |
| Step status labels (pending, awaiting approval, done, skipped) | UNVERIFIED |
| Dedicated "notify" or "calendar event" step types | UNVERIFIED (no evidence; To-Dos cover reminders) |
| Marketplace sells Workflows; external public site; install to My Templates | VERIFIED (help 840250; blog) |
| Lifecycle stages with triggers and calendar move | VERIFIED (help 923689) |
| Four systems: Lead Mgmt, Booking, Onboarding, Fulfillment | VERIFIED (help 3113033) |
| Project Type → default workflow | UNVERIFIED |
| Basic vs Advanced workflows exist | VERIFIED (help 7432912); which features are in each: UNVERIFIED |
| Single ~$60 plan for new signups includes Advanced Workflows | LIKELY (multiple 2026 third-party pricing articles) |
| No branching/loops inside workflows | LIKELY (comparison articles; absence in help center) |
| "Workflow 2.0", "Rules", conditional triggers release | UNVERIFIED — no evidence found in any search |
| Document reminders handled outside workflows | VERIFIED (help 2280471) |
| No multi-recipient completion notifications | VERIFIED (help snippet) |
| Setup-difficulty complaints | VERIFIED (Capterra snippets) |

---

## 9. Sources

Official 17hats
- [Workflow Overview](https://help.17hats.com/en/articles/1046329-workflow-overview)
- [Workflows: To-Dos, Action Items, Pauses](https://help.17hats.com/en/articles/879587-workflows-to-dos-action-items-pauses)
- [Workflows: Action Items](https://help.17hats.com/en/articles/1037910-workflows-action-items)
- [Workflows: Advanced vs Basic](https://help.17hats.com/en/articles/7432912-workflows-advanced-vs-basic)
- [How to use a To-Do item in my workflow](https://help.17hats.com/en/articles/928580-how-to-use-a-to-do-item-in-my-workflow)
- [How to use a "Pause" item in my workflow](https://help.17hats.com/en/articles/928579-how-to-use-a-pause-item-in-my-workflow)
- [How to Pause and Resume a Workflow](https://help.17hats.com/en/articles/13753480-how-to-pause-and-resume-a-workflow)
- [Start/Stop Workflow Automation](https://help.17hats.com/en/articles/13928403-start-stop-workflow-automation)
- [New Feature: Start/Stop Workflow Automations (blog)](https://blog.17hats.com/new-feature-start-stop-workflow-automations/)
- [All About Workflows — Triggering Your Workflow](https://help.17hats.com/en/articles/1828264-all-about-workflows-triggering-your-workflow)
- [How to Apply Workflows to Projects in Bulk](https://help.17hats.com/en/articles/3760752-how-to-apply-workflows-to-projects-in-bulk)
- [Updating Workflow Templates](https://help.17hats.com/en/articles/879497-updating-workflow-templates)
- [Workflows: Send Quote Completion Triggers](https://help.17hats.com/en/articles/2165100-workflows-send-quote-completion-triggers)
- [Workflows: Send Invoice Completion Triggers](https://help.17hats.com/en/articles/2165133-workflows-send-invoice-completion-triggers)
- [Online Scheduling Service — Workflows](https://help.17hats.com/en/articles/2933608-online-scheduling-service-workflows)
- [Automated Lead Workflows](https://help.17hats.com/en/articles/840255-automated-lead-workflows)
- [Lead Capture Forms Overview](https://help.17hats.com/en/articles/853251-lead-capture-forms-overview)
- [Lead Capture Form Details](https://help.17hats.com/en/articles/3113718-lead-capture-form-details)
- [Lead Capture Auto-Replies](https://help.17hats.com/en/articles/1131025-lead-capture-auto-replies)
- [Lifecycles](https://help.17hats.com/en/articles/923689-lifecycles)
- [Projects vs. Lifecycle vs. Workflows](https://help.17hats.com/en/articles/1052884-projects-vs-lifecycle-vs-workflows)
- [Recommended Processes Overview](https://help.17hats.com/en/articles/3113033-recommended-processes-overview)
- [Document Email Reminders](https://help.17hats.com/en/articles/2280471-document-email-reminders)
- [17hats Marketplace (help)](https://help.17hats.com/en/articles/840250-17hats-marketplace)
- [Workflows collection](https://help.17hats.com/en/collections/550642-workflows)
- [Advanced Workflows feature page](https://www.17hats.com/features/workflows)
- [Workflow Trigger feature page](https://www.17hats.com/features/workflow-trigger)
- [To-Do Workflows feature page](https://www.17hats.com/features/to-do-workflow)
- [Lead Capture Form feature page](https://www.17hats.com/features/lead-capture-form)
- [Questionnaire If/Then Logic feature page](https://www.17hats.com/features/questionnaire-if-then-logic)
- [17hats Pricing](https://17hats.com/pricing)
- [17hats Release Notes](https://17hats.releasenotes.io/) · [tag: workflow](https://17hats.releasenotes.io/tag/workflow) · [tag: template marketplace](https://17hats.releasenotes.io/tag/template%20marketplace)
- [Jumpstart Your Journey with 17hats Marketplace (blog)](https://blog.17hats.com/jumpstart-your-journey-with-17hats-marketplace/)
- [Installing Marketplace Items in 5 Easy Steps (blog)](https://blog.17hats.com/installing-marketplace-items-in-5-easy-steps/)
- [A Guide to Utilizing Newly Installed Marketplace Items (blog)](https://blog.17hats.com/a-guide-to-utilizing-newly-installed-17hats-marketplace-items/)
- [Marketplace sellers](https://www.17hats.com/marketplace-sellers)
- [Workflows for Products (blog)](https://blog.17hats.com/elevate-your-automation-game-workflows-for-products/)
- [The Mighty Power of Lead Capture Forms (blog)](https://blog.17hats.com/the-mighty-power-of-lead-capture-forms-in-17hats/)
- [Automate tagging (blog)](https://blog.17hats.com/automate-tagging-for-optimal-business-organization/)
- [17hats Pipelines (blog)](https://blog.17hats.com/17hats-pipelines-the-game-changer-for-small-business-efficiency/)
- [17hats vs Dubsado Full Feature Comparison (blog)](https://blog.17hats.com/17hats-vs-dubsado-full-feature-comparison/)
- [17hats vs HoneyBook Features (blog)](https://blog.17hats.com/17hats-vs-honeybook-features-automation-client-management-compared/)
- [17hats vs HoneyBook Full Feature Comparison (blog)](https://blog.17hats.com/17hats-vs-honeybook-full-feature-comparison/)

Third-party
- [Step by Step: Designing a Portrait Session Workflow with 17hats — Improve Photography](https://improvephotography.com/49290/step-by-step-designing-a-portrait-session-workflow-with-17hats/)
- [Under the Covers with 17Hats Part 3: Workflows & Lifecycles — Worcus](http://www.worcus.com/under-the-covers-with-17hats-part-3/)
- [17hats Bulk Actions — debmitzelcreative.com](https://debmitzelcreative.com/2024/10/09/17hats-bulk-actions-why-you-should-be-using-them/)
- [17hats Tutorials — 17hats University](https://www.17hatsuniversity.com/17hats-tutorials)
- [17hats vs Dubsado — Agiled](https://agiled.app/compare/17hats-vs-dubsado)
- [Dubsado vs 17hats — Plutio](https://www.plutio.com/compare/dubsado-vs-17hats)
- [17hats vs HoneyBook — Plutio](https://www.plutio.com/compare/17hats-vs-honeybook)
- [Dubsado vs 17Hats — Swell System](https://swellsystem.com/dubsado-vs-17hats/)
- [HoneyBook vs 17Hats — Swell System](https://swellsystem.com/honeybook-vs-17hats/)
- [17hats vs Dubsado — Agency Handy](https://www.agencyhandy.com/client-portal/17hats-vs-dubsado/)
- [17hats vs HoneyBook — Agency Handy](https://www.agencyhandy.com/client-portal/17hats-vs-honeybook/)
- [HoneyBook vs 17hats — Karly Whitaker](https://karlywhitaker.com/blog/honeybook-vs-17hats/)
- [17hats vs HoneyBook vs Dubsado — HoneyBook](https://www.honeybook.com/blog/17hats-vs-honeybook-vs-dubsado)
- [HoneyBook vs 17hats — HoneyBook](https://www.honeybook.com/blog/honeybook-vs-17hats)
- [Dubsado vs 17hats — Life Coach Magazine](https://www.lifecoachmagazine.com/dubsado-vs-17hats/)
- [17hats vs Dubsado — Solution Integrators](https://solutionintegrators.us/17hats-vs-dubsado/)
- [17hats Pricing 2026 — Agiled](https://agiled.app/blog/17hats-pricing)
- [17hats Pricing — OneSuite](https://onesuite.io/blog/17hats-pricing/)
- [17hats Pricing — Zendo](https://getzendo.io/blog/17hats-pricing/)
- [17hats Pricing — SaaSworthy](https://www.saasworthy.com/product/17hats/pricing)
- [17hats Reviews — Capterra](https://www.capterra.com/p/144328/17hats/reviews/)
- [17hats Reviews — G2](https://g2.com/products/17hats/reviews)
