# AltSwitch

SaaS & open-source alternatives directory + newsletter signup.

## Stack

- Next.js 15 (App Router) + TypeScript + Tailwind CSS
- Static JSON seed data (`data/tools.json`)
- Newsletter emails stored in `/data/subscribers.json` (Railway volume) or local `data/`

## Develop

```bash
npm install
npm run dev
```

## Deploy

Pushed to GitHub and deployed on Railway. Set:

- `NEXT_PUBLIC_SITE_URL` — public site URL
- `SUBSCRIBERS_DIR` — defaults to `/data` (mount a volume there)

## MVP scope

- 20 tool pages with 4–6 alternatives each (pros/cons/bestFor/pricingNotes)
- Search, featured cards, about/monetization page
- Newsletter capture (no ESP yet — Resend/Buttondown later)
