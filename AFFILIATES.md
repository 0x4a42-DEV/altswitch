# AltSwitch Affiliates Log

Living log of affiliate / referral programs for [altswitch.xyz](https://altswitch.xyz).  
Update this file when a program moves between sections. Do not invent approvals.

**Last updated:** 2026-10-28 (Asia/Hong_Kong)

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
| **beehiiv** | Live (approved 2026-10-21) | `https://www.beehiiv.com?via=alt-switch` (via `alt-switch`) | `BEEHIIV_REFERRAL_URL`; Mailchimp alternative cards override via `affiliate.ts` (slug `beehiiv` / host beehiiv.com). Program runs on Dub (partners.dub.co/beehiiv) — **payouts go through Dub**. |
| **Vultr** | Live (approved 2026-10-21) | `https://www.vultr.com/?ref=9930011` (ref `9930011`) | `VULTR_REFERRAL_URL`; OSS self-host tip (with Railway/DO); Vultr card on `/alternatives/heroku` via `affiliate.ts` (slug `vultr` / host vultr.com). Customer referral program, not a % commission: per vultr.com/company/referral-program (checked 2026-10-21) you "earn up to $100" per referred customer, who must stay active 30+ days to count; payouts issued the business day after the 1st and 15th of each month. Exact amount and minimum-spend rules are in Vultr's program details / customer portal — not stated on the public page. |
| **Teable** | Live (approved 2026-10-25) | `https://teable.ai/?via=Altswitch` (via `Altswitch`) | `TEABLE_REFERRAL_URL`; Airtable (+ NocoDB sibling) alternative cards override via `affiliate.ts` (slug `teable` / hosts teable.ai + teable.io). Rewardful Friends of Teable — **25%** recurring × 12 months; PayPal payouts. |
| **Close CRM** | Live / Done (approved + wired 2026-10-28 PartnerStack) | `https://refer.close.com/9q4xm4f96mmh` | `CLOSE_REFERRAL_URL`; Pipedrive + HubSpot + Salesforce alternative cards override via `affiliate.ts` (slug `close` / hosts close.com + refer.close.com). Skip Calendly / PartnerStack onboarding calls. Agreement + payout setup may still be needed on PartnerStack. |

Non-partner alternatives use a plain official-site link (no `ref=` param, no `rel="sponsored"`). Only the real overrides above are sponsored.

**Decline → scrub PII:** If a program rejects/declines us, record it under Declined, then help Partner remove name/phone/email/address from that vendor (opt-out, delete affiliate account, or email support). Do not leave personal details sitting on declined programs.

**PartnerStack calls:** Partner is **not interested** in PartnerStack sales/onboarding calls — decline/skip; do not nudge. Wait for dashboard approval + paste referral link only.


---

## Applied — pending approval (do not chase / re-nudge)

Partner applied these; waiting for approval emails or dashboard links. Do **not** re-apply or chase. When Partner pastes an approval/link, move to **Done** and wire.

| Program | Applied | Notes | Covers GSC page(s) |
|--------|---------|-------|-------------------|
| **Kit (ConvertKit)** | ~2026-10-21 | PartnerStack; no link yet | Mailchimp (not a current top-GSC family) |
| **Freshworks (Freshdesk)** | ~2026-10-21 | PartnerStack; Freshdesk only (first card on Zendesk page) | **zendesk**, **intercom** (Freshdesk alt) |
| **Hostinger** | ~2026-10-19 | affiliates.hostinger.com; pending review | Hosting / WP-adjacent |
| **Crisp** | ~2026-10-21 | Applied via Hugo chatbot (Content Writer); awaiting feedback email (~5 days) then partnership call | **intercom** |
| **Zoho CRM** | 2026-10-27 | Partner submitted via https://www.zoho.com/affiliate/signup.html (hello@altswitch.xyz / Jon Berry / AltSwitch / Software Review Site / USA DC / HK). Captcha blocked on bot computer; Partner completed on their side. ~5 business days. Covers Pipedrive depth. Do not chase; paste referral URL when approved then wire affiliates.ts. **On decline: scrub Partner PII from Zoho.** | **pipedrive** |

---

## Pending / blocked (no usable apply path)

| Program | Status | Notes |
|--------|--------|-------|
| **ClickUp** | Blocked | Partners URL redirects to customer dashboard — no usable apply path yet. Revisit PartnerStack / official partners page later. |
| **Pipedrive** | No apply link | Apply page 404 / no working link. Do not invent a URL. Retry when PartnerStack or Pipedrive Partners publishes a live apply page. Pipedrive itself cannot monetize the Pipedrive GSC page — cover via **alts** (Close, Zoho, HubSpot). |

---

## Declined

| Program | Status | Notes |
|--------|--------|-------|
| **n8n** | Declined 2026-10-21 (via PartnerStack) | Demoted to a plain listing: still on `/alternatives/zapier` with factual description/pros/cons, but moved to the **last** position, no `ref=` param or `rel="sponsored"` (plain `https://n8n.io` link), and not used as a FAQ "best free/OSS" or "lower-cost" pick (Activepieces is). Re-apply in **1–2 months** (~Dec 2026). **If they decline again, remove n8n from the site completely.** Original apply path: https://n8n.io/affiliates/ → PartnerStack. |
| **Brevo** | Declined 2026-10-28 (via PartnerStack) | PartnerStack showed Active but Messages said not approved / no referral link. **Left Brevo PartnerStack program 2026-10-28**; PII scrub email sent to partners@brevo.com. Do **not** invent a referral URL. Plain official listings only (no `ref=` / no `rel="sponsored"`); demoted on HubSpot page (last card, not in quickPicks). Revisit only if Partner wants a later re-apply. |

Policy: programs that decline stay listed (factual, unchanged copy) but get no favourable placement — last in list, plain official link, not featured in FAQ picks. **Also scrub Partner PII** (name, phone, email, address) from that vendor’s affiliate account/support — do not leave personal details on declined programs.

---

## Top GSC query coverage (standing rule)

**Rule:** For every top GSC query/page, we must either (a) have a real affiliate/referral wired for at least one strong alt on that page, OR (b) have already applied and be pending. If neither, apply (or document blocked / no program).

**Dual-maximize:** Traffic without payouts is worthless. Rank and fill gaps by **impressions × likelihood of affiliate $** (commission quality × conversion fit × apply feasibility). **Airtable** is **wired** via Teable; **Pipedrive** is **wired** via Close (2026-10-28). Intercom/Zendesk already have pending coverage. Next $ depth: Zoho CRM / HubSpot Affiliates (Priority B).

GSC families from Partner 7-day snapshot (2026-10-25): intercom alternative(s), airtable alternatives, pipedrive alternatives, best intercom alternatives, open source zendesk alternative, zendesk alternative.

| Query family | Page | Coverage status | Best monetizable alt | Notes |
|-------------|------|-----------------|----------------------|-------|
| **pipedrive alternatives** | `/alternatives/pipedrive` | **wired** via Close (+ Zoho applied-pending) | **Close** (then Zoho CRM, HubSpot) | Close live `https://refer.close.com/9q4xm4f96mmh` wired 2026-10-28 (PartnerStack approved; skip Calendly). Zoho Affiliate still applied-pending (2026-10-27). Satisfies rule (a). Pipedrive itself still blocked. Optional depth: HubSpot Affiliates. |
| **airtable alternatives** | `/alternatives/airtable` | **wired** via Teable | **Teable** (then Baserow inquiry) | Live `https://teable.ai/?via=Altswitch` wired 2026-10-25. NocoDB/Rows/Grist/Notion: no usable cash affiliate. Optional depth: Baserow inquiry (Partner-needed). |
| **intercom alternative(s)** | `/alternatives/intercom` | **applied-pending** | Crisp (pending) + Freshdesk via Freshworks (pending) | Satisfies rule (b). Do not chase. Optional depth: Gorgias / Help Scout / HubSpot (see To-apply). |
| **zendesk alternative** (+ OSS zendesk) | `/alternatives/zendesk` | **applied-pending** | Freshdesk via Freshworks (pending) | Satisfies rule (b). OSS alts (Chatwoot, FreeScout) have no cash affiliate. Optional depth: Help Scout / Gorgias. |

### True gaps ranked (impressions × $ likelihood)

1. **Zoho CRM** — Pipedrive depth. **Applied-pending** 2026-10-27 (Partner submitted signup). Do not chase; paste referral URL when approved then wire. On decline: scrub PII.
2. **HubSpot Affiliates (Impact)** — Pipedrive + Intercom cards × 30% up to 1 year × explicitly welcomes SaaS reviewers / B2B marketplaces. Heavier review; still high $.
3. **Gorgias** — Intercom/Zendesk depth (pages already pending-covered) × 20% for 2 years × instant PartnerStack. Ecommerce-niche fit.
4. **Help Scout** — Intercom/Zendesk depth × 15–20% × PartnerStack. Same secondary priority as Gorgias.
5. **Close** — Pipedrive family. **Done / wired** 2026-10-28 (`https://refer.close.com/9q4xm4f96mmh`). PartnerStack approved; skip Calendly onboarding.
6. **Teable** — Airtable family. **Done / wired** 2026-10-25 (`https://teable.ai/?via=Altswitch`).

### No-program / not cash-affiliate (document, don't fake-apply)

| Brand | On page(s) | Finding (researched 2026-10-25) |
|-------|------------|--------------------------------|
| **NocoDB** | Airtable | No public affiliate/apply page found (terms mention referral credits only). Treat as **no-program**. |
| **Rows** | Airtable | No public affiliate/referral program found. **No-program**. |
| **Grist / Twenty / EspoCRM / Chatwoot / FreeScout / Plain / Front / Tidio / tawk.to** | various | No verified public cash affiliate for directory use. Leave plain listings. |
| **Attio** | Pipedrive | **Customer referral only** ($200 gift card / valid Pro–Enterprise referral; need an Attio account). Not a creator cash affiliate. See Partner-needed. |
| **Notion Databases** | Airtable | Notion PartnerStack closed to new affiliates (already Skip). |
| **Pipedrive** (the brand) | Pipedrive | Blocked — no apply link (see Pending). |

---

## To-apply gaps (public path; not yet applied)

Research verified 2026-10-25 (Close wired 2026-10-28). Airtable is wired via Teable; Pipedrive is wired via Close — those families satisfy rule (a). Prefer Priority B/C depth over Contabo/Fathom/etc. **Do not invent approvals or referral URLs.**

### Priority A — close GSC gaps (apply first)

*(empty — top GSC families are applied-pending)*

~~**Teable**~~ moved to **Done** (2026-10-25) — `https://teable.ai/?via=Altswitch` wired.

~~**Close CRM**~~ moved to **Done** (2026-10-28) — `https://refer.close.com/9q4xm4f96mmh` wired. PartnerStack approved; skip Calendly.

### Priority B — Pipedrive depth / high $

| Program | Apply URL | Commission (public) | Difficulty | Fairness check | Form fields / notes |
|--------|-----------|---------------------|------------|----------------|---------------------|
| **Zoho Affiliate** | https://www.zoho.com/affiliate/ · Signup: https://www.zoho.com/affiliate/signup.html | **15%** (tier 1) → **18%** / **20%** by volume; **12 months**; 90-day cookie; $100 wallet credit for referrals | **Medium** (in-house; ~5 business days; SMS verify) | **OK** — cons softened 2026-10-27 (dense UI / suite value / paid support tiers). Pricing notes match free-for-3 + paid editions. | Org type, name, industry, follower counts (YouTube etc.), Zoho product experience, marketing capabilities, mobile SMS verification. Covers Zoho CRM on Pipedrive page (and suite). |
| **HubSpot Affiliates** | https://www.hubspot.com/partners/affiliates → Impact signup | **30%** recurring up to **1 year**; 180-day cookie; Starter/Sprocket/Elite tiers | **Medium** (Impact; 2–3 business day review). Welcomes SaaS reviewers & B2B marketplaces | **OK** on Pipedrive Free CRM + Intercom Service Hub cards | Apply as content/SaaS directory; not Solutions Partner (agency) track. Email affiliates@hubspot.com if stuck. |

### Priority C — Intercom/Zendesk depth (pages already pending-covered)

| Program | Apply URL | Commission (public) | Difficulty | Fairness check | Form fields / notes |
|--------|-----------|---------------------|------------|----------------|---------------------|
| **Gorgias** | https://www.gorgias.com/affiliate-program → PartnerStack (instant signup per page FAQ) | **20%** of payments for **2 years** (tiers to 22/25/40% by volume). Quarterly payouts. No affiliate links in branded ads. | **Easy–Medium** (claims instant PartnerStack access) | **OK** — ecommerce niche + ticket/AI volume cons are factual | Ecommerce-heavy audience; AltSwitch is broader SaaS — still list Gorgias on Intercom/Zendesk; expect lower conversion than Close on Pipedrive traffic. |
| **Help Scout** | https://www.helpscout.com/partner/ (Affiliates) · PartnerStack: https://dash.partnerstack.com/application?company=helpscout&group=helpscoutaffiliates | **15%** (1–10 customers / 3 mo) or **20%** (11+); 90-day cookie. No PPC / coupon sites. | **Medium** (PartnerStack review) | **OK** | First/Last name, Email, Business name, Audience type, ≥3 industry focuses, promo channels, audience size, site/social links (`altswitch.xyz`). |

### Partner-needed (do not fake-apply)

| Item | Why Partner must act | Suggested action |
|------|----------------------|------------------|
| **Teable** | Live via `https://teable.ai/?via=Altswitch` (wired 2026-10-25). Vault: Teable Rewardful. PayPal for payouts later if Teable requires it | Optional: confirm PayPal in Rewardful when first payout approaches |
| **Close / PartnerStack** | Live via `https://refer.close.com/9q4xm4f96mmh` (wired 2026-10-28). Vault/PartnerStack: agreement + payout if still incomplete | **Skip Calendly / onboarding calls.** Optional: finish PartnerStack agreement + payout details when convenient. |
| **Zoho Affiliate approval** | Submitted 2026-10-27 by Partner (signup form; ~5 business days) | Do not chase. Paste referral URL when approved then wire. **If declined: scrub Partner PII from Zoho.** |
| **Attio referral** | Cash program does not exist; only customer referral ($200 gift card) requiring an Attio account | Optional: create Attio account → Account settings → Refer another team. Low priority vs Close cash 30% |
| **Baserow** | Only an **inquiry form** (https://baserow.io/form/xTktqPeYmEPbgC80nneRmK8dc2QRLMYMrGfbXav1SOQ) — name, email, **phone**, self-definition, website, reason. No public commission terms | Partner fills inquiry if wanting Airtable depth beyond Teable; disclose phone required |
| **Crisp feedback email / call** | Already applied; awaiting their process | Wait — do not chase (on hold) |
| **Fathom / bunny.net** | Paying-customer gate | Only if Partner is already a paying customer |
| **No LinkedIn** | Partner prefers not to provide personal LinkedIn on apps | Use altswitch.xyz / leave blank |

### Still on backlog (not GSC-blocking)

| Program | Apply URL | Why it fits | Commission (public) | Difficulty |
|--------|-----------|-------------|---------------------|------------|
| **Contabo** | https://contabo.com/en-us/affiliate-program/ → CJ | Cheap VPS next to Railway/DO | Fixed **€20–€250** per first qualifying order | Medium (CJ; ~1 week) |
| **Fathom Analytics** | https://usefathom.com/affiliates | Privacy GA alt | **25%** recurring | Medium — must be **paying** Fathom customer |
| **bunny.net** | https://bunny.net/affiliate/ | CDN/storage tips | **$20**/new paying customer | Easy if paying customer |
| **Ghost** | https://ghost.org/referrals/ | WP alternative | **30%** recurring lifetime | Hard — Ghost pub + ~10k audience |

### Skip / revisit later

| Program | Why skip |
|--------|----------|
| **Fly.io** | Official community: no affiliate program |
| **Notion** | PartnerStack closed to new affiliates (auto-decline) |
| **Canva** | Canvassador / affiliate applications currently closed |
| **Render** | No verified public self-serve affiliate; startup partner form ≠ affiliate |
| **Plausible** | No affiliate program by policy |
| **Hetzner** | Cloud referral program discontinued |
| **Vercel / Zapier** | PartnerStack / inquiry gates — revisit after Priority A–B wins |
| **ClickUp / Pipedrive** | See Pending (blocked / no apply link) |
| **NocoDB / Rows** | No public cash affiliate found (2026-10-25) |

When a program is approved: move it to **Done**, add the real URL to `affiliates.ts` / `affiliate.ts`, and disclose on `/about`.

---

## Process reminders

1. Prefer real referral overrides over fake `?ref=` params.
2. Disclose affiliates on `/about` and use `rel="sponsored"` on outbound cards (already in UI).
3. Never mark a program **Done** without a live URL in code.
4. Prefer programs with public apply pages or in-product self-serve dashboards; treat enterprise PartnerStack sales tracks as P3+.
5. **GSC coverage rule:** for every top GSC query/page, have (a) a real affiliate wired for at least one strong alt, OR (b) an application already pending. If neither → apply, or document blocked / no-program. Do not chase apps Partner marked on hold.
6. **Dual-maximize (traffic × profits):** impressions alone are worthless without payouts. When choosing what to apply or wire next, rank by **impressions × likelihood of affiliate $** (rate × fit × feasibility). Top GSC: Airtable wired (Teable); Pipedrive wired (Close); Intercom/Zendesk still applied-pending (Crisp/Freshworks). Next: Priority B depth (Zoho CRM / HubSpot).
7. **Brand fairness before apply:** audit how the site portrays that brand (fair, accurate, current pricing, no harsh cons) — partner managers check. Soften copy first if needed.
8. Do not invent approvals or referral URLs. Partner pastes links; then wire.

---

## New page gate (2026-10-30)

Do **not** add comparison pages for catalog completeness. Ship a new `/alternatives/[slug]` only if (1) a **Done** affiliate will feature on that page, or (2) a **Priority-B** program for that cluster is applied-pending / ready to apply this week. Full rule: `PAGE-GATE.md`. Prefer CTR fixes on pages that already have impressions.

