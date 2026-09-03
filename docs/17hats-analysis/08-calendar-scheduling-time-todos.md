# 17hats — Module 08: Calendar, Online Scheduling, Time Tracking, and To-Dos

**Research date:** 2026-09-03
**Method:** WebSearch only (no logins, no account access, no data edits). WebFetch/curl were not attempted per instructions.

> **IMPORTANT RESEARCH LIMITATION.** 14 distinct searches were issued, but the session-wide WebSearch budget (200 calls, shared with other research modules) was exhausted after the first 4 returned results. The 10 searches that did not run covered: booking payment/intake questions/lead capture, To-Dos, Time Tracking, Weather widget / Today agenda, Outlook/iCloud/iCal, reschedule/cancel/time-zone handling, plan gating, user complaints, calendar event types/reminders/attendees, and group/round-robin scheduling. Everything in those areas below is marked **UNVERIFIED** (or **LIKELY** where it is a reasonable inference from a verified article title or snippet) and should be re-researched when search budget is available. Article URLs surfaced by the search index are listed in Sources even where their body text could not be read; they are the best starting points for a follow-up pass.

---

## 1. Summary

- **Calendar** offers day / week / month views, unlimited named, color-coded calendars, and the ability to show a single calendar at a time (e.g. only to-dos). **VERIFIED**
- 17hats officially recommends a minimum of **four calendars: Leads, Booked Clients, To-Dos, Personal**, and pushes color coding as the primary way to distinguish lead vs. client appointments at a glance. **VERIFIED**
- There are exactly **two calendar types**: native "17hats calendars" (visible only in 17hats) and **Google-type calendars** that two-way sync with a connected Google account. **VERIFIED**
- **Google Calendar sync is two-way** but constrained: **one Google account per 17hats account**, calendars must be **created in Google first** (17hats cannot create Google calendars), only **events** sync (**to-dos never sync**), and events on native 17hats calendars do not sync at all. **VERIFIED**
- Outlook is handled indirectly — a help article exists titled "Connect a Google Calendar to an Outlook Calendar Online", suggesting no native Outlook/Office 365 integration and no evidence of iCloud/Apple sync or an iCal feed was found. **LIKELY (title only)**
- **Online Scheduling** is built around **Services** (duration, buffer before/after, start-time increments of :00 / :15 / :30 / immediately after previous) and **Availability Schedules** (dates, times, booking limitations, calendar checks, team members). **VERIFIED**
- Services support three **Location types — In Person, Phone Call, Zoom** — with reusable **Location templates**; the Zoom location type is part of "Advanced Online Scheduling". **VERIFIED**
- The **Zoom integration** auto-creates a unique meeting URL per booking, injected into confirmation/reminder emails via the `[scheduling] Location Address` token. **VERIFIED**
- The booking calendar **can be embedded on the user's website**. **VERIFIED** (FAQ snippet). No evidence of Google Meet support was found. **UNVERIFIED**
- A **Calendly-to-17hats bridge via Google Calendar** is documented in the help center, implying some users prefer Calendly over 17hats' native scheduler — a signal about the native tool's maturity. **LIKELY (title only)**
- To-Dos, Time Tracking, Weather widget, and Today agenda: **no search results obtained** — see Section 7 for what is UNVERIFIED.

---

## 2. Pages / screens

### 2.1 Calendar page

**Purpose.** Central view of all appointments, project events, and to-dos, across native and Google-synced calendars.

**What the user sees (VERIFIED from Calendar feature page / Calendar Overview snippets).**
- A calendar grid switchable between **one day**, **one week**, or **the entire month**.
- A list of calendars, each with a **user-defined name** and **user-selected color**; events render in their calendar's color.
- Ability to filter to **only one calendar** at a time ("if you only want to see your tasks and not your appointments, you can do that").

**What the user sees (UNVERIFIED — not found).**
- Whether an **agenda/list view** exists. A 17hats University tip is titled "How to change the Calendar view", which likely walks through day/week/month only.
- Whether there is a dedicated "Today" or agenda panel on the Dashboard; whether a **weather widget** exists. No results obtained.

**Actions available.**
- Create a calendar event (help article "Creating a Calendar Event" exists — body not read). **LIKELY**
- Create/rename/recolor calendars with no limit on count. **VERIFIED**
- Connect a Google account and choose which Google calendars to sync (help: "How To Connect Your Google Calendar?", "Calendar: Create & sync new Google Calendar"). **VERIFIED (that the flows exist)**
- Sync calendars from multiple Google accounts — help article title suggests a workaround exists ("Sync Google Calendars from multiple Google Calendar accounts") despite the "only one Google account can be connected" rule; the likely method is sharing calendars between Google accounts on Google's side. **LIKELY**

**Navigation.** Calendar is a top-level nav item ("Calendar" feature page at 17hats.com/features/calendar). Events presumably link back to their Project. **LIKELY**

### 2.2 Calendar settings / Calendars list

**Purpose.** Manage the set of native and Google-type calendars.

**Observed (VERIFIED).** Two calendar types: *17hats calendar* (internal only) and *Google Calendar* (two-way sync). Recommended setup article ("Recommended Calendar Setup") pushes Leads / Booked Clients / To-Dos / Personal. A blog post "Calendar Organization Upgrade in 17hats" indicates the calendar organization UI was upgraded at some point (details not read). **LIKELY**

### 2.3 Online Scheduling — Services setup ("Setup Part 1 – Create your Services")

**Purpose.** Define the bookable appointment types.

**Observed (VERIFIED from snippets).**
- **Service Duration** (required).
- **Buffer Time before** and **Buffer Time after** (optional). Example given: 30-min service + 5 min before + 5 min after = 40 min blocked on calendar.
- **Service Time Frame** = Duration + both buffers; this is what actually blocks the calendar.
- **Start-time increment**: new appointments can start on the quarter hour, half hour, hour, or **immediately after the previous appointment (buffer included)**.
- **Location** (In Person / Phone Call / Zoom), with reusable **Location templates** shared across services.
- **Confirmation email** and **reminder email** per service, with token support including `[scheduling] Location Address`. **VERIFIED**

**Not found (UNVERIFIED).** Whether a service has: intake/custom questions, required payment at booking, a per-service booking link, an internal-vs-public flag, assignment to a specific team member, max bookings per day, or a lead-source/project-type mapping.

### 2.4 Online Scheduling — Availability settings ("Setup Part 2 – Availability Settings", "Availability Rules")

**Purpose.** Define when Services can be booked.

**Observed (VERIFIED from snippet).** An **Availability Schedule** "creates the parameters around the dates and times your contacts can book a Service with you. It will include **dates, times, booking limitations, calendar checks, and team members**."

**Interpretation (LIKELY).**
- *Dates* → date range / rolling window of bookability.
- *Times* → weekly hours grid.
- *Booking limitations* → likely minimum notice and/or max bookings per day/period (specific values UNVERIFIED).
- *Calendar checks* → which 17hats/Google calendars are checked for conflicts (busy-blocking).
- *Team members* → per-user availability; suggests team-aware scheduling exists but no evidence of round-robin or group/class events was found (UNVERIFIED).

### 2.5 Online Scheduling — Booking page (client-facing)

**Observed (VERIFIED).** The booking calendar **can be embedded** on the user's website. A **unique Zoom URL** is generated per booking when Zoom is connected and appears in confirmation and reminder emails.

**Not found (UNVERIFIED).** Hosted booking-page URL structure, per-service links, branding options, client time-zone detection, reschedule/cancel links in emails, whether booking creates a Lead/Contact/Project automatically, and whether a booking can trigger a Workflow.

### 2.6 Online Scheduling — Troubleshooting / FAQ

Help articles "Online Scheduling: FAQs" and "Online Scheduling Troubleshooting" exist. Only the embed FAQ answer was captured. **Other content UNVERIFIED.**

### 2.7 Zoom Integration settings

**Observed (VERIFIED).** Zoom is connected **per brand** ("connect your Zoom account with your 17hats brand"). Once connected, every scheduling booking gets its own meeting URL. Blog post "Online Scheduling + Zoom Integration: Transforming Frustration to Joy" and feature page "Online scheduling Zoom Integration" exist.

### 2.8 To-Do list page

**No search results obtained.** The only verified fact touching to-dos: help article "Are 'To Do' items synced to my Google Calendar?" — answer in snippet: **to-do items do not sync to Google; only Events two-way sync.** **VERIFIED.** Also verified: 17hats recommends a dedicated **To-Dos calendar**, and the calendar filter can show only tasks — so to-dos appear on the Calendar. **VERIFIED.**
Global vs. project to-dos, due dates, assignment, recurrence, reminders, completed view: **UNVERIFIED — not found.**

### 2.9 Time Tracking page

**No search results obtained.** Timers, manual entries, billable rates, per-project tracking, convert-to-invoice, reports: **UNVERIFIED — not found.**

### 2.10 Dashboard "Today" agenda and Weather widget

**No search results obtained.** **UNVERIFIED — not found.**

---

## 3. Data & fields observed

| Entity | Field | Type / values | Source | Confidence |
|---|---|---|---|---|
| Calendar | Name | text, user-defined | features/calendar; Recommended Calendar Setup | VERIFIED |
| Calendar | Color | color picker | features/calendar | VERIFIED |
| Calendar | Type | `17hats` \| `Google` | Calendar Overview snippet | VERIFIED |
| Calendar | Linked Google calendar | ref to calendar in the single connected Google account; must pre-exist in Google | Google Calendar Sync Explained | VERIFIED |
| Account | Connected Google account | max 1 | Google Calendar Sync Explained | VERIFIED |
| Event | Calendar | ref | Calendar Overview | VERIFIED |
| Event | Sync behavior | syncs only if calendar type = Google | Google Calendar Sync Explained | VERIFIED |
| Event | Title / start / end / all-day / project link / notes / attendees / reminders | — | not found | UNVERIFIED |
| To-Do | Sync to Google | never | "Are To Do items synced…" | VERIFIED |
| To-Do | Due date / assignee / recurrence / project link / completed | — | not found | UNVERIFIED |
| Service | Duration | minutes, required | Service Time Frame | VERIFIED |
| Service | Buffer before | minutes, optional | Service Time Frame | VERIFIED |
| Service | Buffer after | minutes, optional | Service Time Frame | VERIFIED |
| Service | Start-time increment | `:00` \| `:15` \| `:30` \| `immediately after previous` | Service Time Frame | VERIFIED |
| Service | Location | ref to Location; types `In Person` \| `Phone Call` \| `Zoom` | Service Locations | VERIFIED |
| Service | Confirmation email template | text w/ tokens | Zoom Integration | VERIFIED |
| Service | Reminder email template | text w/ tokens | Zoom Integration | VERIFIED |
| Service | Intake questions / price / payment required / booking link | — | not found | UNVERIFIED |
| Location | Type | `In Person` \| `Phone Call` \| `Zoom` | Service Locations | VERIFIED |
| Location | Address / details | text; reusable as template | Service Locations | VERIFIED |
| Location | Zoom (Advanced Online Scheduling only) | plan-gated | Service Locations | VERIFIED |
| Availability Schedule | Dates | date range | Availability Settings | VERIFIED (exists) |
| Availability Schedule | Times | time windows | Availability Settings | VERIFIED (exists) |
| Availability Schedule | Booking limitations | unspecified (likely min notice / max per day) | Availability Settings | LIKELY |
| Availability Schedule | Calendar checks | which calendars block availability | Availability Settings | LIKELY |
| Availability Schedule | Team members | refs | Availability Settings | VERIFIED (exists) |
| Booking | Zoom meeting URL | auto-generated per booking | Zoom Integration | VERIFIED |
| Email token | `[scheduling] Location Address` | resolves to address or Zoom link | Zoom Integration | VERIFIED |
| Brand | Zoom connection | 1 per brand | Zoom Integration | VERIFIED |
| Time entry | any | — | not found | UNVERIFIED |

---

## 4. Plan gating

- **Zoom as a Location type requires "Advanced Online Scheduling."** **VERIFIED** (Service Locations snippet). This strongly implies at least two tiers of Online Scheduling (basic vs. advanced) mapped to plan level. **LIKELY**
- Which plans (Essentials / Standard / Premier or the current names) include basic vs. advanced scheduling, Time Tracking, Google sync, or team members: **UNVERIFIED — search did not run.**

---

## 5. User complaints, gaps, and confusion points

Complaint-focused searches did not run. The following are gaps or confusion points **evidenced by the existence and wording of help articles** (LIKELY) or by verified limitations (VERIFIED):

1. **Only one Google account** can be connected — a verified limitation likely painful for users with separate personal/business Google accounts; a dedicated help article on "multiple Google Calendar accounts" exists, indicating this is a common question. **VERIFIED limitation / LIKELY pain point**
2. **17hats cannot create Google calendars** — user must create them in Google first, then sync. Ordering confusion is likely. **VERIFIED**
3. **To-dos never sync to Google** — dedicated FAQ article exists, so users evidently expect it. **VERIFIED**
4. **Events on native 17hats calendars silently don't sync** — users who put events on the wrong calendar type will not see them in Google. **VERIFIED**
5. **No native Outlook/Office 365 sync** — the help center's answer is to chain Google → Outlook. **LIKELY (article title)**
6. **Calendly bridge article exists** — implies some users find the native scheduler insufficient and run Calendly alongside it. **LIKELY**
7. A dedicated "Online Scheduling Troubleshooting" article exists — content not read. **UNVERIFIED**
8. Reddit / review-site sentiment on calendar sync reliability: **not obtained.**

---

## 6. Improvement opportunities for a clone

Grounded in verified limitations above:

1. **Multi-account Google sync** (multiple Google accounts, not just multiple calendars from one).
2. **Create Google calendars from inside the app** during sync setup.
3. **Native Outlook/Microsoft 365 and Apple/iCloud (CalDAV) sync**, plus a read-only **iCal feed URL** per calendar — none evidenced in 17hats.
4. **Sync to-dos as Google Tasks or as all-day events** (opt-in), closing the "to-dos don't sync" gap.
5. **Make sync-eligibility obvious in the event editor** (badge "will sync to Google" vs. "17hats-only") to prevent silent non-sync.
6. **Google Meet and Microsoft Teams** as first-class location types alongside Zoom, not gated behind an "advanced" tier.
7. **Agenda/list view and a Dashboard "Today" panel** — unverified in 17hats; cheap to include.
8. **Round-robin and group/class bookings** — no evidence 17hats has them; the Availability Schedule's "team members" field suggests only per-person availability.
9. **Explicit min-notice, max-per-day, and rolling-window fields** surfaced clearly (17hats bundles these vaguely as "booking limitations").
10. **Intake questions, deposit/payment at booking, and auto-create Lead + Project + trigger Workflow** from a booking — unverified in 17hats; treat as table stakes for the clone (competitors like HoneyBook/Dubsado/Calendly-with-Stripe offer them).
11. **Time tracking with timer, billable rate, and one-click convert to invoice line items** — could not verify 17hats' implementation; build it regardless.
12. Ship a **Calendly-import / Calendly-compatible embed** given evidence users pair 17hats with Calendly.

---

## 7. Confidence notes

| Claim | Status |
|---|---|
| Day / week / month calendar views | VERIFIED |
| Unlimited calendars, named and color-coded | VERIFIED |
| Filter to a single calendar (e.g. tasks only) | VERIFIED |
| Recommended 4 calendars: Leads, Booked Clients, To-Dos, Personal | VERIFIED |
| Two calendar types: 17hats vs Google | VERIFIED |
| Google sync is two-way (edits in either direction reflected) | VERIFIED |
| Only one Google account connectable | VERIFIED |
| Calendars must be created in Google first | VERIFIED |
| Only Events sync; To-dos do not | VERIFIED |
| Native-calendar events do not sync | VERIFIED |
| Agenda view exists | UNVERIFIED |
| Event fields (reminders, attendees, project link) | UNVERIFIED |
| iCal feed / iCloud / Apple sync | UNVERIFIED (no evidence found) |
| Outlook via Google bridge only | LIKELY (article title) |
| Service Duration required; buffers before/after optional | VERIFIED |
| Start-time increments :00/:15/:30/immediately after | VERIFIED |
| Availability Schedule contains dates, times, booking limitations, calendar checks, team members | VERIFIED |
| Specific min-notice / max-per-day settings | UNVERIFIED |
| Location types In Person / Phone / Zoom; Location templates | VERIFIED |
| Zoom requires Advanced Online Scheduling | VERIFIED |
| Zoom URL auto-generated per booking, in confirmation/reminder emails | VERIFIED |
| `[scheduling] Location Address` token | VERIFIED |
| Zoom connected per brand | VERIFIED |
| Booking calendar embeddable on website | VERIFIED |
| Google Meet support | UNVERIFIED (no evidence) |
| Intake questions / payment at booking / booking link per service | UNVERIFIED |
| Reschedule/cancel links, time-zone handling | UNVERIFIED |
| Booking → lead/project/workflow tie-in | UNVERIFIED |
| Group events / round-robin | UNVERIFIED (no evidence) |
| To-Do page details (global vs project, due, assign, recurring, completed) | UNVERIFIED |
| Time Tracking (timers, rates, convert to invoice, reports) | UNVERIFIED |
| Weather widget / Today agenda | UNVERIFIED |
| Plan tier mapping | UNVERIFIED |
| User complaints from Reddit/review sites | UNVERIFIED (search not run) |

---

## 8. Sources

Snippets read (VERIFIED content came from these):
- [17hats – Calendar Feature](https://www.17hats.com/features/calendar)
- [Calendar Overview | 17hats Help Center](https://help.17hats.com/en/articles/894193-calendar-overview)
- [Recommended Calendar Setup | 17hats Help Center](https://help.17hats.com/en/articles/3112379-recommended-calendar-setup)
- [Staying Organized: 5 calendars you need in your 17hats account – 17hats Blog](https://blog.17hats.com/staying-organized-5-calendars-you-need-in-your-17hats-account/)
- [Google Calendar Sync Explained | 17hats Help Center](https://help.17hats.com/en/articles/7438269-google-calendar-sync-explained)
- [Google Calendars - 17hats Integration](https://www.17hats.com/integration/google-com)
- [Are "To Do" items synced to my Google Calendar? | 17hats Help Center](https://help.17hats.com/en/articles/927254-are-to-do-items-synced-to-my-google-calendar)
- [Online Scheduling - Service Time Frame | 17hats Help Center](https://help.17hats.com/en/articles/9893901-online-scheduling-service-time-frame)
- [Online Scheduling: Setup Part 2 - Availability Settings | 17hats Help Center](https://help.17hats.com/en/articles/2913385-online-scheduling-setup-part-2-availability-settings)
- [Online Scheduling Service Locations | 17hats Help Center](https://help.17hats.com/en/articles/9893949-online-scheduling-service-locations)
- [Zoom Integration | 17hats Help Center](https://help.17hats.com/en/articles/4124528-zoom-integration)
- [Online Scheduling: FAQs | 17hats Help Center](https://help.17hats.com/en/articles/2921704-online-scheduling-faqs)

Surfaced by search but body not read (titles only — follow-up targets):
- [Creating a Calendar Event | 17hats Help Center](https://help.17hats.com/en/articles/927438-creating-a-calendar-event)
- [Calendar Organization Upgrade in 17hats – 17hats Blog](https://blog.17hats.com/calendar-organization-upgrade-in-17hats/)
- [17hats Tutorial: How to change the Calendar view – 17hats University](https://www.17hatsuniversity.com/17hats-quick-tips/17hats-tutorial-how-to-change-the-calendar-view)
- [Calendars collection | 17hats Help Center](https://help.17hats.com/en/collections/550523-calendars)
- [Sync Google Calendars from multiple Google Calendar accounts | 17hats Help Center](https://help.17hats.com/en/articles/853432-sync-google-calendars-from-multiple-google-calendar-accounts)
- [How To: Connect Calendly to 17hats Through Google Calendar | 17hats Help Center](https://help.17hats.com/en/articles/2499452-how-to-connect-calendly-to-17hats-through-google-calendar)
- [Connect a Google Calendar to an Outlook Calendar Online | 17hats Help Center](https://help.17hats.com/en/articles/1273006-connect-a-google-calendar-to-an-outlook-calendar-online)
- [Calendar: Create & sync new Google Calendar | 17hats Help Center](https://help.17hats.com/en/articles/11003245-calendar-create-sync-new-google-calendar)
- [How To Connect Your Google Calendar? | 17hats Help Center](https://help.17hats.com/en/articles/966461-how-to-connect-your-google-calendar)
- [Connecting a Google Calendar to Your 17hats Account – 17hats University](https://www.17hatsuniversity.com/17hats-quick-tips/connecting-a-google-calendar-to-your-17hats-account)
- [Online Scheduling: Start here! | 17hats Help Center](https://help.17hats.com/en/articles/2912511-online-scheduling-start-here)
- [Online Scheduling: Setup Part 1 - Create your Services | 17hats Help Center](https://help.17hats.com/en/articles/2913378-online-scheduling-setup-part-1-create-your-services)
- [Online Scheduling: Availability Rules | 17hats Help Center](https://help.17hats.com/en/articles/9967692-online-scheduling-availability-rules)
- [Online Scheduling Troubleshooting | 17hats Help Center](https://help.17hats.com/en/articles/3287818-online-scheduling-troubleshooting)
- [Online Scheduling collection | 17hats Help Center](https://help.17hats.com/en/collections/1698393-online-scheduling)
- [17hats – Online Scheduling Feature](https://www.17hats.com/features/online-scheduling)
- [17hats – Online scheduling Zoom Integration Feature](https://www.17hats.com/features/online-scheduling-zoom-integration)
- [Feature Spotlight: Online Scheduling Locations – 17hats Blog](https://blog.17hats.com/feature-spotlight-online-scheduling-locations/)
- [Online Scheduling + Zoom Integration: Transforming Frustration to Joy – 17hats Blog](https://blog.17hats.com/online-scheduling-zoom-integration-transforming-frustration-to-joy/)
- [Simplify Booking With Online Scheduling – 17hats Blog](https://blog.17hats.com/simplify-booking-with-online-scheduling/)

Searches attempted but blocked by exhausted budget (no results): payment/intake/lead-capture; To-Dos; Time Tracking; weather/Today; Outlook/iCloud/iCal; reschedule/cancel/time zone; plan comparison; Reddit/review complaints; event types/reminders/attendees; group/round-robin.
