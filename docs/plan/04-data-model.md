# Data Model (v0 — to be reconciled with live capture)

Conventions: every table has `id uuid pk`, `account_id uuid` (tenant, RLS),
`created_at`, `updated_at`, and `deleted_at` (soft delete) unless noted.
Money is stored as integer minor units + `currency`. Times are `timestamptz`;
each account has a default `timezone`.

## Tenant & users

| Table | Key columns |
|---|---|
| accounts | name, slug, timezone, currency, locale, plan, trial_ends_at, brand_id, settings jsonb |
| users | account_id, email, name, role (owner/admin/member/limited), auth_provider, 2fa_enabled, color, signature_html |
| brands | logo_url, primary_color, accent_color, font, email_header_html, email_footer_html, custom_domain, portal_slug |
| subscriptions | account_id, stripe_customer_id, stripe_subscription_id, plan, status, seats, period_end |
| api_keys / webhooks | account_id, hashed_key, scopes; url, events[], secret, active |
| audit_log (append-only) | account_id, actor_user_id, entity_type, entity_id, action, diff jsonb, ip, at |

## CRM

| Table | Key columns |
|---|---|
| contacts | first_name, last_name, email(s), phone(s), address jsonb, company_id, type (lead/client/vendor/other — 17hats: Hot Lead/Cold Prospect/Client/Other), lead_status (new/contacted/qualified/proposal/won/lost; reversible), source, referral, owner_user_id, tags[], custom_fields jsonb, portal_enabled, consent jsonb, merged_into_id |
| companies | name, website, address jsonb, phone, custom_fields jsonb |
| contact_notes | contact_id, body_md, author_user_id, pinned |
| tags | name, color, scope (contact/project/both) |
| custom_field_defs | entity (contact/project), key, label, type (text/number/date/select/multi/bool/url), options[], position |
| lead_forms | name, fields jsonb (schema), settings jsonb (redirect, autoresponder_template_id, project_type_id, workflow_id, notify_user_ids, captcha), embed_token |
| lead_form_submissions (append-only) | lead_form_id, contact_id, project_id, raw_answers jsonb, ip, referrer, utm jsonb |

## Projects

| Table | Key columns |
|---|---|
| project_types | name, color, default_workflow_ids[], default_fields jsonb |
| projects | name, number (per-account sequence), project_type_id, status (lead/booked/active/completed/archived/cancelled/lost), stage_id, primary_contact_id, event_date, start_date, end_date, location jsonb, owner_user_id, tags[], custom_fields jsonb, value_cents (rollup), color |
| pipelines / pipeline_phases | 17hats Pipelines: lead/client boards with ≤5 tag- or time-driven phases; ours: unlimited, drag-drop writes back status/tags |
| project_contacts | project_id, contact_id, role (client/partner/vendor/planner/billing…), is_primary, hide_from_client_list, can_sign |
| phone_logs | project_id, contact_id, direction, duration, notes, at (17hats Phone Log tab) |
| project_notes | project_id, body_md, author_user_id, pinned |
| todos | project_id (nullable → global), title, due_at, assignee_user_id, completed_at, priority, recurrence rrule, source (manual/workflow), step_run_id |
| files | owner entity (project/contact/document), storage_key, name, mime, size, uploaded_by, visibility (internal/client) |
| timeline_events (append-only) | project_id, kind, summary, payload jsonb, actor (user/client/system), at |

## Catalog & documents

| Table | Key columns |
|---|---|
| products | name, description_md, price_cents, unit, taxable, category, sku, active, image_url |
| packages | name, description_md, price_cents, line_items jsonb, addon_product_ids[] |
| tax_rates | name, rate_bps, compound, default |
| document_templates | kind (quote/contract/invoice/questionnaire), name, body jsonb (block model), settings jsonb, version |
| documents | kind, project_id, contact_id, template_id, number, title, status, body jsonb (frozen snapshot on send), settings jsonb, issued_at, expires_at, due_at, viewed_at, sent_at, accepted_at, signed_at, paid_at, total_cents, balance_cents, currency, public_token, pdf_key, bundle_id |
| document_bundles | groups quote+contract+invoice into one client session (17hats "3-in-1") |
| line_items | document_id, product_id, name, description, qty, unit_price_cents, discount, tax_rate_id, optional (bool), selected (bool), selectable_group, position |
| document_versions (append-only) | document_id, version, body jsonb, changed_by, reason |
| document_views (append-only) | document_id, at, ip, ua, contact_id |
| signatures (append-only) | document_id, signer (contact/user), signer_name, signer_email, image_key, typed_text, ip, ua, at, document_hash, certificate_pdf_key |
| questionnaire_answers | document_id, question_key, value jsonb, answered_at |

## Money

| Table | Key columns |
|---|---|
| payment_providers | account_id, provider (stripe/square/paypal), external_account_id, capabilities jsonb, status |
| payment_schedules | document_id (invoice), installments jsonb [{label, amount_cents|percent, due rule, autopay}] |
| payments (append-only) | invoice_id, amount_cents, method (card/ach/cash/check/other), provider, external_id, fee_cents, tip_cents, status, received_at, recorded_by |
| refunds (append-only) | payment_id, amount_cents, reason, external_id |
| saved_payment_methods | contact_id, provider, external_id, brand, last4, exp, consent_at |
| reminders | invoice_id, rule (days before/after due), template_id, sent_at |
| bank_connections | provider (Plaid), item_id, institution, status |
| transactions | source (bank/manual/invoice/expense), date, amount_cents, payee, category_id, project_id, receipt_file_id, reconciled |
| categories | name, type (income/expense/transfer), parent_id, tax_line |
| recurring_invoices | template document_id, rrule, next_run_at, contact_id, autopay |

## Communication

| Table | Key columns |
|---|---|
| mailboxes | user_id, provider (gmail/ms365/smtp), oauth_token_enc, sync_cursor, status |
| email_threads / emails | mailbox_id, contact_id, project_id, direction, subject, body_html, snippet, message_id, in_reply_to, sent_at, opened_at, attachments[] |
| email_templates | name, category, subject, body_html, tokens_used[] |
| notifications | user_id, kind, entity ref, read_at |
| sms_messages (improvement, later) | provider, direction, body, contact_id |

## Automation

| Table | Key columns |
|---|---|
| workflow_templates | name, category, description, version, active |
| workflow_steps | template_id, version, key, kind (send_email/send_document/create_todo/create_event/wait/set_status/add_tag/notify/start_workflow/webhook), config jsonb, delay jsonb {anchor: previous|project_date|event_date|fixed, offset_days, time_of_day}, condition jsonb, approval (auto/require), position, parent_step_key (branching) |
| automation_rules | trigger (event name + filter), action (start workflow / send email / notify), active |
| workflow_runs | template_id, version, project_id, status (active/paused/completed/cancelled), started_by, started_at |
| step_runs | run_id, step_key, status (pending/scheduled/awaiting_approval/done/skipped/failed), due_at, executed_at, result jsonb, error |
| domain_events (append-only outbox) | name, entity_type, entity_id, payload jsonb, occurred_at, processed_at |

## Calendar & scheduling

| Table | Key columns |
|---|---|
| calendars | user_id, name, color, external (google/ms) ids, sync settings |
| events | calendar_id, project_id, title, starts_at, ends_at, all_day, location, description, attendees jsonb, rrule, reminders jsonb, kind (project/personal/booking/todo) |
| booking_services | name, duration_min, buffer_before/after, price_cents, location_type (in_person/phone/zoom/meet), availability jsonb, min_notice_h, max_per_day, questions jsonb, confirmation_template_id, workflow_id, project_type_id, slug |
| bookings | service_id, contact_id, project_id, starts_at, status, answers jsonb, payment_id, reschedule_token |
| time_entries | project_id, user_id, started_at, ended_at, minutes, billable, rate_cents, note, invoiced_line_item_id |

## Reporting (materialized views, refreshed by worker)

- `mv_revenue_by_month`, `mv_revenue_by_project_type`, `mv_lead_sources`, `mv_outstanding_ar`, `mv_pipeline_value_by_stage`.
