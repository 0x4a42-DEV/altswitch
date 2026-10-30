# AltSwitch

SaaS & open-source alternatives directory ([altswitch.xyz](https://altswitch.xyz)).

## Stack

- Next.js 15 (App Router) + TypeScript + Tailwind CSS
- Static JSON seed data (`src/data/tools.json`)
- Optional email capture → `/data/subscribers.json` (Railway volume) — **newsletter sends parked** (no ESP campaigns yet)

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
- Affiliate-aware outbound links (`AFFILIATES.md`, `PAGE-GATE.md`)
- `/articles` — **killed/parked** until GSC clicks convert toward affiliate $ (see `ARTICLES.md`)
- Newsletter capture UI kept; sends parked

## Partner ops

- `AFFILIATES.md` — live / pending / declined partners
- `OWNER-CHECKLIST.md` — what Partner pastes (do not chase)
- `PAGE-GATE.md` — when new comparison pages are allowed
