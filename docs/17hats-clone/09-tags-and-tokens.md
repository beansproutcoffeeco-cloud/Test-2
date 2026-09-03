# Tags and tokens — deep dive

**Date:** 2026-09-03
**Method:** read-only Claude in Chrome pass over the live Bean Sprout 17hats
account. Nothing was created, edited, sent or deleted. Tag and field *names* are
reproduced because they are business configuration; no client names, contact
details, payment data or amounts appear here.

---

## The one-paragraph model

17hats has exactly two extension mechanisms, and they do opposite jobs.
A **tag** is a flat, untyped label that can be stuck on a contact or a project.
A **token** is a read-only merge placeholder that pulls a value out of a record
and drops it into text. Tags are how you write state onto a record and how the
automation engine reads it back; tokens are how you get state off a record and
into something a client sees. Neither has any structure of its own — a tag is
just a string, and a token is just a pointer to a field. Everything clever in
this account is built by convention on top of those two primitives, and every
sharp edge in it comes from the fact that the primitives carry no meaning.

---

# Part 1 — Tags

## What a tag actually is

A tag is a single string in **one global, flat namespace**. It has no colour, no
group, no description, no type, and no owner. The same tag can be attached to
both contacts and projects; nothing declares which it is *for*.

Tag Management lives at Account Settings > Account Templates > **Tag
Management** (`/app/account/tags`). The page's entire explanation of the feature
is one sentence: "Tags are key to keep your Clients and Projects organized."

The table has three columns — **TAGS, CONTACTS, PROJECTS** — where the last two
are live usage counts. It pages 25 at a time. Each row has a caret menu with
exactly three actions:

| Action | What it does |
| --- | --- |
| **Rename** | Renames in place, everywhere it is attached |
| **Delete** | Removes the tag and detaches it |
| **Merge** | Folds one tag into another, combining their attachments |

That is the whole management surface. There is no colour picker, no grouping, no
archive state, no "used by" drill-down, and no bulk cleanup.

## Every place a tag is written

Tags are set from far more places than the tag page suggests:

1. **Manually on a project** — the Tags row in the project sidebar.
2. **Manually on a contact** — contact tags exist but are barely used (see below).
3. **Projects list, BULK ACTIONS** — `Add Tags` and `Remove Tags` across a whole
   selection of projects.
4. **Lead Capture Form settings** — a form carries **Contact Tag(s)** and
   **Project Tag(s)** that are applied on submission.
5. **Workflow Action step** — every action has an `Add Tags` / `Remove Tags`
   pair that fires when the step runs, *and a second pair* under **Action
   Completed** that fires when the step's completion condition is met.
6. **Workflow step type `Add/Remove Tags`** — a step whose only job is tagging.
7. **Online Scheduling service** — `Add Project Tags upon cancellation` and
   `Remove Project Tags upon cancellation`.

## Every place a tag is read

1. **Pipelines.** A pipeline phase is *defined* by a project tag. Phase One and
   the terminal Completed state are always tag-driven; phases two to five choose
   between `By Tag` and `By Days in Prior Phase`. Tagging a project is literally
   how it moves across the board.
2. **Workflows.** Each workflow template has **START WORKFLOW TAGS** and **STOP
   WORKFLOW TAGS** behind a `START / STOP AUTOMATION` switch. Applying a start
   tag launches the workflow; applying a stop tag halts it. A reserved
   **END WORKFLOW** chip appears in stop lists.
3. **Search and filter.** Contacts has a "Search Tags..." box; Projects searches
   "by name or tag"; the projects list has a PROJECT TAGS column.

**This is the key structural fact.** A tag is simultaneously a human label, a
search key, a pipeline state machine, and the event bus for automation. One
untyped string is doing four jobs. Nothing in the product distinguishes a tag
that means "this is a wedding" from a tag that means "fire the follow-up
sequence now."

---

## How Bean Sprout uses tags today

### The shape of the inventory

| Measure | Value |
| --- | --- |
| Tags defined | 233 |
| Attached to nothing at all | 98 (42%) |
| Ever used on a project | 118 |
| Ever used on a contact | 21 |
| Used on **both** contacts and projects | 4 |
| Total project attachments | 3,845 |
| Total contact attachments | 227 |

Two things jump out. **Tagging here is a project discipline, not a contact
discipline** — project attachments outnumber contact attachments seventeen to
one. And **more than four in ten tags are dead weight**, which is what happens
when a flat namespace has no lifecycle.

The only four tags carrying both kinds of attachment are `STL EVENT`,
`MN Event`, `Past Client` and `Tax Exempt` — and those are exactly the cases
where the same fact is true of a person *and* of their job.

### The nine families

The tag vocabulary is not random. It has clear families, each doing a different
job, which is precisely the structure the product refuses to model.

**1. Workflow control — the machine.** 18 tags, and by volume the busiest thing
in the account.

| Tag | Projects |
| --- | --- |
| Stop Workflow Quote FollowUp | 231 |
| Stop Workflow Quote Generation | 203 |
| Start Workflow Quote FollowUP | 188 |
| END WORKFLOW | 82 |
| Start Workflow Master Workflow STL | 42 |
| Start Workflow Master Workflow MN | 28 |

These are not labels. They are function calls, written as strings onto a record,
because the product has no other way to say "now start that sequence."

**2. Stage and status.** The de-facto pipeline vocabulary: `Quote Sent` (158),
`Quote FollowUp Active` (135), `Review Stage` (121), `Client Retention` (118),
`Newsletter Sent` (117), `Reach Back Out` (99), `Future Outreach` (70),
`Event Execution` (62), `Onboarding` (55), `Quote Ready` (54),
`Questionnaire Sent` (44), `Discount Offer Sent` (44),
`Need to Send Questionnaire` (37), `Post Event FollowUp` (28), `Event Prep` (26),
`Check Quote` (21), `Booked` (13), `Dead Lead` (10).

**3. Task flags.** `Need to Call Client` (213) is the single most-attached
non-workflow tag in the account. Also `Send Text` (31),
`Need to Request Branding` (9), `Need to Pickup Pastry` (5),
`Pastries Picked Up` (5). These are to-dos stored as tags.

**4. Step counters.** Three parallel numbered series tracking how far a sequence
has run: `QF1`–`QF15` (quote follow-up, 8 of 15 in use, peaking at QF4 = 45),
`CF1`–`CF3`, and `TF1`–`TF5`. A counter is being emulated with fifteen
individual boolean labels because there is no numeric state on a project.

**5. Market and region.** `STL EVENT` (212 projects / 31 contacts),
`MN Event` (183 / 17), `BEYOND EVENT` (13). This is the account's most important
segmentation and it lives in a tag.

**6. Event type.** `CorporateConference` (57), `Wedding` (39), `SocialShower`
(34), `Other Event` (30), `Business Event` (16), `RetailBusiness` (15),
`other` (14), `private party` (9), `Conference` (5), `Retail` (3).

**7. Product and configuration mirrors.** `Espresso Bar` (137),
`Additional Barista` (74), `CST Latte Printing` (70), `All Branding Received`
(46), `CST Menu` (31), `ADD Cold Brew 25` (26), `CST Bar` (24), `CST Sleeves`
(19). The `ADD *` family (18 tags) mirrors the quote's add-on line items; the
`CST *` family (8 tags) mirrors custom-branding options.

**8. Lead source.** The `LS *` family is the account's only real *contact*
tagging: `LS Google` (40), `LS Online` (12), `LS Instagram` (6), `LS Referral`
(6), `LS Other` (4), `LS At an Event` (3),
`LS Wedding PlannerCaterorVenue` (3), `LS Facebook` (1).

**9. Client lifecycle.** `Past Client` (88 contacts / 55 projects).

### What is going wrong, concretely

**Event type and bar type are stored twice, in two incompatible systems.**
`Event Type` and `Bar Type` are both project **custom fields** with proper option
lists. They are *also* tags (`Wedding`, `CorporateConference`, `Espresso Bar`,
`Matcha Bar`). The custom field is the clean version; the tag is the version
that automation and pipelines can actually read. Nothing keeps the two in sync.

**Lead source is stored three times.** There is a built-in `Lead Source` field on
the project, with a proper managed list under Leads > Reporting. There is the
`LS *` tag family on contacts. And there is a completely dead third vocabulary —
`referred by facebook`, `referred by google ad`, `referred by instagram`,
`referred by online reviews`, `referred by online search`, `referred by other`,
`referred by yelp` — **seven tags, all with zero attachments**, plus scattered
strays like `Google Search Referral`, `Industry Referral`, `Marketing Referral`,
`Social Media Referral`, `Event Referral`, `WeddingKnot Referral`. Three
generations of the same idea, none retired.

**Add-on services are stored twice.** `Add-On Services` is a 31-option
multi-select custom field. The `ADD *` tag family duplicates it label by label.

**There is a live typo pair.** `Start Workflow BAR Affogato Worfklow` and
`Start Workflow BAR Affogato Workflow` both exist, both unused. This is exactly
what the Merge action is for, and it is exactly what a flat namespace with no
validation produces.

**Casing and spelling drift freely.** `Add Bottled Latte` against the `ADD *`
convention. `Glassware Recieved` misspelled. `Quote FollowUp` against
`Quote FollowUP`. `Stop Workflow Quote FollowUp` against
`Start Workflow Quote FollowUP` — the start and stop tags of the *same* workflow
are cased differently.

**Stop tags outnumber start tags and never get cleaned up.**
`Stop Workflow Quote FollowUp` sits on 231 projects against 188 for its start
tag. Stop tags accumulate permanently; nothing sweeps them. Over time every
finished project carries a growing pile of dead control flags.

---

# Part 2 — Tokens

## What a token actually is

A token is a **read-only merge placeholder**. You insert it from an
**INSERT TOKEN** dropdown, it renders inline in the editor as a highlighted chip
such as `[contact] First name`, and at send time it resolves against the record
the document belongs to.

Every token is a display label over an **expression**. Reading the underlying
values is the single most useful thing this pass produced, because it exposes
17hats' internal object model:

| Token | Expression |
| --- | --- |
| `[contact] First Name` | `contact.first_name` |
| `[contact] Address` | `contact.address.as_string` |
| `[project] Project Name` | `project.name` |
| `[project] Project Date` | `project.main_event.formatted_token_date('start')` |
| `[project-dates] Project Start Time` | `project.main_event.formatted_time('start')` |
| `[client-portal] Client Portal URL` | `project.client.portal_url` |
| `[account] Company Name` | `accountinfo.company_name` |
| `[scheduling] Service Duration` | `booking.booking_service.duration` |
| a custom contact field | `custom.contact.<numeric id>` |
| a custom project field | `custom.job.<numeric id>` |

Three things fall out of that table.

**A project is internally a `job`.** Custom project fields resolve to
`custom.job.<id>`. "Project" is the user-facing rename of an older `job` object.

**A project's dates hang off a `main_event`.** Project Date, Start Time and End
Time are all `project.main_event.*`, meaning a project owns one privileged
calendar event and the "project date" is really that event's date.

**The portal belongs to the contact, reached through the project.**
`project.client.portal_url`, not `project.portal_url`.

## The six namespaces

There are exactly six token namespaces, and no others. In this account they hold
**98 tokens**: 34 built-in and 64 generated from custom fields.

| Namespace | Built-in | From custom fields | Total |
| --- | --- | --- | --- |
| `[contact]` | 7 | 5 | 12 |
| `[project]` | 4 | 59 | 63 |
| `[project-dates]` | 3 | 0 | 3 |
| `[client-portal]` | 3 | 0 | 3 |
| `[account]` | 9 | 0 | 9 |
| `[scheduling]` | 8 | 0 | 8 |

Built-in contents:

- **`[contact]`** — First Name, Last Name, Full Name, Company Name, Address,
  Email Address, Phone Number.
- **`[project]`** — Project Name, Project Location, Project Date,
  Project Lead Source.
- **`[project-dates]`** — Project End Date, Project Start Time, Project End Time.
- **`[client-portal]`** — Client Portal URL, Client Portal Password,
  Password Protected.
- **`[account]`** — First Name, Last Name, Full Name, Company Name, Address,
  Email Address, Phone Number, Website, Universal Client Portal Link.
- **`[scheduling]`** — Service Name, Location Name, Location Address,
  Location Notes, Booking Date, Booking Start Time, Booking End Time,
  Service Duration.

### The gap that matters most

**There is no `[quote]`, `[invoice]`, `[contract]` or `[booking-document]`
namespace.** This was checked inside a template whose Type is *Quote Email*, and
the picker is identical to the one in a questionnaire question. So you cannot
merge a quote number, an invoice number, a total, a balance, an amount paid, a
due date, or a payment-schedule instalment into any text. Those values exist only
inside the rendered document layout.

That is why the account's email templates say "Your quote is below!" and rely on
the attached document rather than restating the number. Any email that wants to
say "your balance of X is due on Y" cannot be written.

There is also no `[user]` namespace — you cannot merge *which team member* is
assigned. `[account]` is the business, not the person.

## Where tokens can be used

Confirmed by finding an INSERT TOKEN control in each place:

- **Email templates** — both the **Subject** (its own "Insert Token" link) and
  the body. Alongside it sit **SIGNATURES** and **AI OPTIONS** dropdowns.
- **Questionnaire question text.**
- **Contract body** (next to INSERT FORM, which inserts client-fillable fields).
- **Quote line items** — both the Internal Name and the rich Description.
- **Client Portal default welcome message.**

The Custom Fields page states the rule as "token-enabled content like Emails,
Contracts, and Questionnaires."

## Custom fields are the only way to create a token

You cannot author a token directly. The only way to add one is to create a custom
field; it then appears simultaneously as a **token**, as a **"Maps To" target**
for questionnaire and lead-form questions, and as a row in the project sidebar.

Custom Fields (`/app/account/customfields`) has three tabs — **Contact Fields**,
**Project Fields**, **Account Fields** — and **six field types**:

| Type | Description | Label in the list view |
| --- | --- | --- |
| Short Field | single line | `Short Field` |
| Long Field | multiple lines | `Long Field` |
| Yes/No | simple yes or no | `Yes/No Field` |
| Choose from a List | one answer from a list | `Choose One Field: <options>` |
| Checkboxes | multiple answers from a list | `Choose Multiple Fields: <options>` |
| Date | choose a date | `Date Field` |

Note what is **not** there: no number, no currency, no email, no phone, no URL,
no file, and no default value.

---

## How Bean Sprout uses tokens today

### 59 project fields that are really an event operations spec

The Project Fields tab is the account's real schema. It clusters into five groups.

**The timing chain (8 fields).** `Prep Time [30]`,
`Travel To Event [+10 buffer]`, `Setup Time [75]`, `Service Start/End Time`,
`Strike Time [45]`, `Travel From Event`, `Cleanup Time [30]`, `Total Time` — all
Short Fields. Every one is a number typed into a text box, and the standard
duration is **encoded in the field name in square brackets** because custom
fields cannot carry a default value. That bracket convention is a workaround
wearing a costume.

**Venue logistics (9 fields).** `Project Location REAL` — the name says
everything about the built-in `Project Location` not being trusted — plus
`Load-In Details`, `Access to Venue (60-90 Minutes)`, `ADA Accessible`,
`9'2'' Clearance Parking Available`, `Is Power Available`,
`Leave Equipment Overnight`, `Access to Amenities`, `Day-of-Contact`.

**Menu configuration (19 fields).** `Bar Type` and `Add-On Services` are the two
big multi-selects (the latter with 31 options). Then a long tail of per-bar
choice fields: `Classic Syrup`, `Classic Syrup (Matcha bar)`, `Specialty #1`,
`Specialty #2`, `Matcha Specialty #1`, `Matcha Specialty #2`,
`Affogato Specialty #1`, `Pour-Over Selection`, `Cocktail Selection #1`,
`Cocktail Selection #2`, `Alt Beverage`, `Alt Beverage (cold brew bar)`,
`Alt Beverage (pour-over bar)`, and four `Drink Drop *` fields.

**The "Notes" twins (11 fields).** `Event Type Notes`, `Indoor/Outdoor Notes`,
`Access to Venue Notes`, `ADA Accessible Notes`, `Parking Notes`, `Power Notes`,
`Dress Code Notes`, `Alt Beverage Notes`, `Specialty #1 Notes`,
`Specialty #2 Notes`, `Additional Details #1`. **Almost every constrained field
has a free-text twin**, because Choose-One lists have no "Other, please specify"
escape hatch. Half the option lists end in a literal `Other.` value whose
explanation has to go somewhere else entirely.

**Commercial terms (5 fields).** `Gratuity Paid`, `Tip Jar Allowed`,
`Photo Allowed`, `Dress Code`, `Designs Sent`.

### Three patterns worth naming

**Duplicate fields stand in for conditional visibility.** `Alt Beverage` exists
three times, once per bar type. `Classic Syrup` exists twice. `Specialty #1`
exists in espresso, matcha and affogato variants. There is no way to show a field
only when `Bar Type` includes a given value, so the account creates one field per
branch and leaves the rest blank. That is a large share of the 59.

**Defaults live in field names.** `[30]`, `[75]`, `[45]`, `[+10 buffer]`.

**Free text is doing arithmetic.** `Total Time` is a Short Field that a human
computes from the seven timing fields above it. There is no formula type.

### The contact fields are payroll, not CRM

The five contact custom fields are `Account Type`
(Choose One: Checking / Savings / Other), `Client Billing Address`, `Bank Name`,
`Routing Number` and `Account Number`. The contact record is being used for
**barista onboarding and direct deposit**, not only for clients — which matches
the `Barista`, `ApplicantMN` and `ApplicantSTL` tags and the
"Onboarding Contract (Assistant Manager)" templates.

> **Security flag.** Bank routing and account numbers are sitting in generic
> Short Field custom fields, and every custom field is automatically exposed as a
> merge token in emails, contracts and questionnaires. One mis-picked token in a
> client-facing template would leak a bank account number. A clone must not let
> generic text fields hold this class of data: it needs a dedicated,
> encrypted-at-rest, token-excluded field type. This is worth fixing in 17hats
> too, by moving those five fields out of custom fields entirely.

---

# What this means for the clone

Ranked by how much pain each one removes.

**1. Split the one tag concept into three.** Bean Sprout's own vocabulary
already separates them; the product should too.
- **Labels** — `Wedding`, `STL EVENT`, `Past Client`. Human, searchable,
  colourable, groupable.
- **States** — `Quote Sent`, `Booked`, `Review Stage`. One value at a time from a
  defined set, with history. This is what pipelines should read.
- **Triggers** — everything named `Start Workflow *` / `Stop Workflow *`. These
  should not be tags at all.

**2. Give workflows real triggers and conditions.** 18 of this account's tags and
its two highest-volume attachments exist only to start and stop sequences.
Replace them with first-class events ("quote accepted", "invoice first payment",
"N days before project date") and conditions. That deletes an entire tag family
and the cleanup problem with it.

**3. Scope and type tags.** Contact tags and project tags should be separate
namespaces. 213 of 233 tags here are effectively project-only, and the flat list
makes that invisible.

**4. Give tags a lifecycle.** Show usage counts (17hats does), then act on them:
flag zero-use tags, suggest merges for near-duplicates like the Affogato typo
pair, and enforce a case convention on create. 42% dead tags is a product
failure, not a user failure.

**5. Fix custom fields where the workarounds are.** Every bracket-default,
Notes-twin and per-bar duplicate maps to one missing feature:
- **default values** (kills `[30]`, `[75]`, `[45]`)
- **"Other, please specify"** on choice fields (kills 11 Notes twins)
- **conditional visibility** driven by another field (kills the Alt Beverage,
  Classic Syrup and Specialty duplicates)
- **number, currency and duration types**, and a **computed** type
  (kills `Total Time` being typed by hand)
- **field groups** so 59 fields render as sections, not one flat column

**6. Add the missing token namespaces.** `[quote]`, `[invoice]`, `[contract]`
and `[user]`, carrying number, total, balance, amount paid, due date, next
instalment and assigned team member. This is the single most requested thing an
email template cannot do today.

**7. Stop custom fields from being the only token source, and stop them being a
security hole.** Sensitive field types must be excluded from the token picker by
construction.

**8. Reconcile duplicated concepts at the model level.** Event type, bar type,
add-on services and lead source should each exist once, as a typed field, and
automation should be able to read that field directly rather than needing a
mirrored tag.

---

## Appendix — tag families at a glance

| Family | Tags defined | In use | Purpose |
| --- | --- | --- | --- |
| `Start Workflow *` | 10 | 5 | launch a workflow |
| `Stop Workflow *` | 8 | 2 | halt a workflow |
| `ADD *` | 18 | 16 | mirror quote add-on line items |
| `CST *` | 8 | 8 | custom branding options |
| `LS *` | 13 | 8 | lead source, on contacts |
| `QF1`–`QF15` | 15 | 8 | quote follow-up step counter |
| `CF1`–`CF3` | 3 | 2 | second follow-up counter |
| `TF1`–`TF5` | 5 | 5 | third follow-up counter |
| `referred by *` | 7 | 0 | abandoned lead-source vocabulary |
