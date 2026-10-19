# AltSwitch Affiliates Log

Living log of affiliate / referral programs for [altswitch.xyz](https://altswitch.xyz).  
Update this file when a program moves between sections. Do not invent approvals.

**Last updated:** 2026-10-19 (Asia/Hong_Kong)

Wiring lives in:
- `src/lib/affiliates.ts` — referral URL constants
- `src/lib/affiliate.ts` — slug/host overrides used by outbound links

---

## Done (wired live)

| Program | Status | Link / ID | Where wired |
|--------|--------|-----------|-------------|
| **Railway** | Live | `https://railway.com?referralCode=TsViJR` (code `TsViJR`) | `RAILWAY_REFERRAL_URL`; homepage/footer/about; OSS self-host tips; Railway alternative cards override via `affiliate.ts` |
| **DigitalOcean** | Live | `https://m.do.co/c/5da193244570` | `DIGITALOCEAN_REFERRAL_URL`; OSS self-host tips; DigitalOcean / App Platform alternative cards override via `affiliate.ts` |
| **Make** | Live | `https://www.make.com/en/register?pc=altswitch` (partner code `altswitch`) | `MAKE_REFERRAL_URL`; Zapier alternative cards override via `affiliate.ts` (slug `make` / host make.com) |
| **Cal.com** | Live | `https://refer.cal.com/alt-switch-lk8r` | `CAL_COM_REFERRAL_URL`; Calendly alternative cards override via `affiliate.ts` (slug `cal-com` / host cal.com) |
| **Tally** | Live | `https://tally.cello.so/03LRqMD3XGp` | `TALLY_REFERRAL_URL`; Typeform alternative cards override via `affiliate.ts` (slug `tally` / hosts tally.so, cello) |
| **MailerLite** | Live | `https://www.mailerlite.com/?linkId=lp_170762&sourceId=altswitch&tenantId=mailerlite` | `MAILERLITE_REFERRAL_URL`; Mailchimp alternative cards override via `affiliate.ts` (slug `mailerlite` / host mailerlite.com) |

Generic alternatives still use `affiliateParam: "ref=altswitch"` unless a real override exists above.

---

## Pending approval

| Program | Status | Notes |
|--------|--------|-------|
| **ClickUp** | Blocked | Partners URL redirects to customer dashboard — no usable apply path yet. Revisit PartnerStack / official partners page later. |
| **Pipedrive** | No apply link yet | Apply page 404 / no working link. Do not invent a URL. Retry when PartnerStack or Pipedrive Partners publishes a live apply page. Relevant to Salesforce/HubSpot/Pipedrive pages. |

---

## To do (prioritized apply list)

Practical programs for a **new alternatives directory** — prefer public apply / self-serve dashboard, avoid enterprise-only PartnerStack hell. Research verified 2026-10-18. Apply in priority order; none below are approved yet.

### P1 — apply first (easy / high fit)

| Program | Apply URL | Why it fits AltSwitch | Commission (public) | Difficulty |
|--------|-----------|----------------------|---------------------|------------|
| **beehiiv** | https://partners.dub.co/beehiiv/apply (overview: https://www.beehiiv.com/partners) | Listed Mailchimp alternative; creator/newsletter audience matches AltSwitch | **50%** first year (tiers up to **60%**); need a beehiiv account | **Easy** |
| **Hostinger** | https://affiliates.hostinger.com/signup (info: https://www.hostinger.com/affiliates) | WordPress / WooCommerce / Shopify-adjacent hosting; classic easy affiliate for directories | Up to **~40%** (volume tiers; first-term hosting; $100 + 3 conversions for PayPal) | **Easy** |
| **n8n** | https://n8n.io/affiliates/ → PartnerStack apply | Zapier alt + OSS self-host narrative; open to content/sites (not agency-only) | **30%** of n8n Cloud for **12 months** (PayPal; €100 min) | **Medium** (~2 weeks review) |
| **Kit (ConvertKit)** | https://kit.com/affiliate → PartnerStack | Strong Mailchimp alternative already on site; creator-email fit | **50%** of payments for **first 12 months** (+10–20% recurring after tier) | **Medium** (PartnerStack) |

### P2 — strong fits, slightly more friction

| Program | Apply URL | Why it fits AltSwitch | Commission (public) | Difficulty |
|--------|-----------|----------------------|---------------------|------------|
| **Freshworks (Freshdesk / Freshservice)** | https://www.freshworks.com/partners/affiliate-partner-individual/ | Explicitly welcomes **SaaS review & comparison sites**; maps to `/alternatives/zendesk` | **20–30%** of first-year revenue (tiered, up to 12 months) | **Medium** (PartnerStack; comparison-site friendly) |
| **Close CRM** | https://close.com/partners (affiliates track) | Listed Salesforce / HubSpot / Pipedrive alternative; affiliate creators welcome | **30%** first-year subscription | **Medium** (1–2 day review + short call) |
| **Contabo** | https://contabo.com/en-us/affiliate-program/ → CJ publisher (program via Contabo page) | Cheap VPS for OSS self-host callouts (next to Railway/DO) | Fixed **€20–€250** per first qualifying order (product table on page) | **Medium** (needs CJ account; ~1 week review) |
| **Brevo** | https://partners.brevo.com/affiliates (info: https://www.brevo.com/partners/affiliates/) | HubSpot + Mailchimp alternative already listed | **$5**/validated free + **$100**/first paid (90-day cookie) | **Medium** (PartnerStack; may want business email + real traffic) |
| **Vultr** | https://www.vultr.com/company/referral-program/ (link in customer portal) | Hosting / self-host secondary to Railway & DO | Up to **$100**/qualified referral (active 30+ days) | **Easy** (need Vultr account) |
| **Crisp** | https://crisp.chat/en/partnerships/ (Marketing program) | Intercom alternative on site; lighter than Zendesk PartnerStack | ~**20%** cashback or discount codes (manual partnership) | **Medium** (manual review; promote with content) |

### P3 — gatekept or secondary

| Program | Apply URL | Why it fits AltSwitch | Commission (public) | Difficulty |
|--------|-----------|----------------------|---------------------|------------|
| **Fathom Analytics** | https://usefathom.com/affiliates (Partners dashboard after purchase) | Privacy GA alternative on `/alternatives/google-analytics` | **25%** recurring | **Medium** — must be a **paying Fathom customer** |
| **bunny.net** | https://bunny.net/affiliate/ (enable in dashboard) | CDN/storage for WordPress & self-host tips | **$20**/new paying customer | **Easy** if paying bunny customer; else skip |
| **Ghost** | https://ghost.org/referrals/ | WordPress alternative; excellent recurring if approved | **30%** recurring lifetime | **Hard** — needs Ghost pub + ~**10k** audience |

### Skip / revisit later (not joinable right now)

| Program | Why skip |
|--------|----------|
| **Fly.io** | Official community: no affiliate program |
| **Notion** | PartnerStack closed to new affiliates (auto-decline) |
| **Canva** | Canvassador / affiliate applications currently closed |
| **Render** | No verified public self-serve affiliate; startup partner form ≠ affiliate |
| **Plausible** | No affiliate program by policy |
| **Hetzner** | Cloud referral program discontinued |
| **Vercel / Zapier** | PartnerStack / inquiry gates — revisit after P1–P2 wins |
| **ClickUp / Pipedrive** | See Pending (blocked / no apply link) |

When a program is approved: move it to **Done**, add the real URL to `affiliates.ts` / `affiliate.ts`, and disclose on `/about`.

---

## Process reminders

1. Prefer real referral overrides over fake `?ref=` params.
2. Disclose affiliates on `/about` and use `rel="sponsored"` on outbound cards (already in UI).
3. Never mark a program **Done** without a live URL in code.
4. Prefer programs with public apply pages or in-product self-serve dashboards; treat enterprise PartnerStack sales tracks as P3+.
