# Risks & Open Questions

## Open questions to close in Phase 0 (live capture + interviews)

| # | Question | Why it matters | How to answer |
|---|---|---|---|
| Q1 | Exact left-nav and route map of app.17hats.com (does a "Leads" top-level exist? "Templates" vs "Documents & Emails"?) | IA of our shell | `tools/capture/` run |
| Q2 | Client Portal auth model (password vs magic link), portal URL pattern, what clients can see/do | Portal design | capture from a test client email on own account |
| Q3 | Does 17hats log IP/timestamp for signatures anywhere (certificate page, signed PDF footer)? | Legal parity claim | open a signed contract on own account |
| Q4 | Quote numbering, notes/terms fields, countersign flow | Quote builder parity | capture |
| Q5 | Full 13 questionnaire question types; file upload? required flag? | Builder scope | capture |
| Q6 | Zapier app triggers/actions list | Integration scope | Zapier directory once search available |
| Q7 | Scheduling: min-notice/max-per-day fields, intake questions, payment at booking | Scheduling scope | capture |
| Q8 | To-do reminders/notifications; Time tracking UI | Parity | capture |
| Q9 | Exact add-on prices (extra user, bank connect, time tracking, recurring, brand, QBO, advanced scheduling) | Pricing | 17hats pricing page |
| Q10 | Which vertical is our beachhead? (photographers = crowded; events/catering/coffee = underserved?) | Starter kits, marketing | interviews |

## Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Scope**: parity surface is very large (≈150 rows in the matrix) | High | High | Phase 1 limited to the booking loop; everything else behind flags; starter kits reduce perceived gaps |
| **Payments compliance & fraud** (Stripe Connect, chargebacks, tips, ACH returns) | Med | High | Stripe-hosted elements (SAQ-A), Connect Standard accounts so tenants own KYC, Radar rules |
| **E-signature enforceability** | Med | High | Audit trail per ESIGN/UETA guidance, legal review, immutable PDFs, consent-to-esign checkbox |
| **Email deliverability** (17hats itself had to move lead emails to a dedicated sender) | High | Med | Per-tenant DKIM/SPF setup UI, shared pool fallback, bounce/complaint handling, warm-up |
| **Automation bugs = client-facing mistakes** (double sends, wrong dates) | Med | High | Idempotent step execution, dry-run, "review before send" default for new users, kill switch per account |
| **Calendar sync conflicts / data loss** | Med | Med | One-way first, then two-way with conflict log; never delete remotely without confirmation |
| **Bank feed cost & reliability (Plaid)** | Med | Med | Ship .qbo/.ofx import first; Plaid behind plan gate; cache aggressively |
| **Multi-tenant data leak** | Low | Critical | Postgres RLS + tests per table; no raw SQL without tenant guard |
| **Trademark / copying 17hats content** | Med | High | Copy behaviour, never copy text, template wording, screenshots, or branding; write our own templates; legal review of contract templates |
| **Migration friction from 17hats** (no full export on their side) | High | Med | CSV importers + PDF drop-zone + concierge migration for first 100 accounts |
| **Research gaps** (modules 09/10 unverified; search budget) | High | Med | Phase 0.1–0.3 |
| **Team size** | High | High | Cut Phase 2 scope before Phase 1 quality |

## Compliance checklist (pre-launch)

- [ ] Terms of Service, Privacy Policy, DPA template, cookie policy
- [ ] E-sign consent language and certificate format reviewed by counsel
- [ ] PCI SAQ-A attestation (no card data touches our servers)
- [ ] GDPR/CCPA: export, delete, consent capture, sub-processor list
- [ ] Email: CAN-SPAM footer on marketing-type templates; unsubscribe for non-transactional
- [ ] Accessibility: WCAG 2.1 AA on client-facing pages
- [ ] Backups + restore drill; status page
