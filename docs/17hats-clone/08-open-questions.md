# Open questions and verification list

## Needs the in-app walkthrough (Claude in Chrome, read only)
1. Exact left-nav labels and order; Quick Look panel contents.
2. Full list of the 13 questionnaire question types and which map to which field types.
3. Signature capture UI (draw vs type), initials support, PDF download location.
4. Quote decline flow and quote/invoice status names shown in the UI.
5. Exact workflow due-rule wording and the automatic vs "upon review" toggle label; completion-rule options for each action type.
6. Whether contact-level notes exist independent of projects.
7. Projects list columns and bulk actions.
8. Calendar views available and event editor fields.
9. Client portal card layout and sections in order.
10. Whether the single plan still enforces monthly document-send limits.
11. SMS add-on and Advanced Scheduling prices as shown in Plan Information.
12. Current processor list on the Integrations page (is PayPal still there?).
13. Any 2FA or security settings present.
14. What the mobile app can create vs only view (2026 rebuild).

## Product decisions for the owner
1. Product name and domain.
2. Price point and whether to offer a free tier.
3. Launch vertical: photographers first, or horizontal from day one?
4. Build native galleries later, or integrate only?
5. Which payment processor for launch besides Stripe (Square is connected in your workspace; PayPal?).
6. Whether to accept the Temporal dependency or start with BullMQ.
7. Whether QuickBooks or Xero comes first for accounting sync (QuickBooks is already connected in your workspace).

## Data-handling notes
- No 17hats account data was accessed in producing these documents.
- The walkthrough checklist forbids recording client PII, credentials, or payment details.
- Your QuickBooks, Gmail, Calendar, Notion, Microsoft 365 and Zapier connectors were not used for this task.
