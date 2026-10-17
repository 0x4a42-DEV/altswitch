# AltSwitch Affiliates Log

Living log of affiliate / referral programs for [altswitch.xyz](https://altswitch.xyz).  
Update this file when a program moves between sections. Do not invent approvals.

**Last updated:** 2026-10-17 (Asia/Hong_Kong)

Wiring lives in:
- `src/lib/affiliates.ts` — referral URL constants
- `src/lib/affiliate.ts` — slug/host overrides used by outbound links

---

## Done (wired live)

| Program | Status | Link / ID | Where wired |
|--------|--------|-----------|-------------|
| **Railway** | Live | `https://railway.com?referralCode=TsViJR` (code `TsViJR`) | `RAILWAY_REFERRAL_URL`; homepage/footer/about; OSS self-host tips; Railway alternative cards override via `affiliate.ts` |
| **DigitalOcean** | Live | `https://m.do.co/c/5da193244570` | `DIGITALOCEAN_REFERRAL_URL`; OSS self-host tips; DigitalOcean / App Platform alternative cards override via `affiliate.ts` |

Generic alternatives still use `affiliateParam: "ref=altswitch"` unless a real override exists above.

---

## Pending approval

| Program | Status | Notes |
|--------|--------|-------|
| **MailerLite** | Applied — awaiting approval | Strong fit for `/alternatives/mailchimp`. Open program historically; wait for email/dashboard decision before wiring a real affiliate URL. |
| **ClickUp** | Blocked | Partners URL redirects to customer dashboard — no usable apply path yet. Revisit PartnerStack / official partners page later. |
| **Pipedrive** | No apply link yet | Apply page 404 / no working link. Do not invent a URL. Retry when PartnerStack or Pipedrive Partners publishes a live apply page. Relevant to Salesforce/HubSpot/Pipedrive pages. |

---

## To do (research / apply later)

High-value candidates — **research or apply only**; none of these are approved yet.

| Program | Priority | Notes |
|--------|----------|-------|
| **HubSpot** | Medium | Partner / affiliate programs exist but often partner-tier gated. Research before applying; we already list HubSpot Free as a Pipedrive alt. |
| **Notion** | Low–medium | Affiliates were PartnerStack / historically closed to new apps — re-check before applying. |
| **Render** | Low | No clear public self-serve affiliate verified; skip inventing links. Fine as an organic alternative on Heroku/Vercel pages. |
| **Freshworks / Freshdesk** | Medium | Often via PartnerStack; maps to Zendesk/Intercom-style pages. |
| **Contabo / Vultr** | Medium | Hosting referrals for self-host callouts (secondary to Railway/DO). |
| **Hostinger** | Low–medium | Shared hosting angle for WordPress/WooCommerce audiences. |
| **Crisp** | Low | Support-chat alternative monetization if program still open. |
| **bunny.net** | Low | CDN/storage for self-host / media pages. |
| **Make / n8n Cloud** | Research | Zapier-alt pages; check whether public affiliate exists before wiring. |
| **Cal.com** | Research | Calendly-alt; check partner program before inventing refs. |

When a program is approved: move it to **Done**, add the real URL to `affiliates.ts` / `affiliate.ts`, and disclose on `/about`.

---

## Process reminders

1. Prefer real referral overrides over fake `?ref=` params.
2. Disclose affiliates on `/about` and use `rel="sponsored"` on outbound cards (already in UI).
3. Never mark a program **Done** without a live URL in code.
