# AltSwitch

SaaS & open-source alternatives directory + newsletter signup.

## Stack

- Next.js 15 (App Router) + TypeScript + Tailwind CSS
- Static JSON seed data (`src/data/tools.json`)
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

## Scope

- Tool comparison pages with alternatives (pros/cons/bestFor/pricingNotes)
- Search, featured cards, about page
- Newsletter capture
