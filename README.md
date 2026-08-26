# DCR MILDA website

A production-oriented Next.js 16 artist site built around DCR MILDA's current music, 2026 tour, press materials, and worldwide booking flow.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Routes

- `/` — cinematic homepage: music, tour, story, visual archive, booking
- `/booking` — structured booking brief that opens the visitor's email client
- `/press-kit` — current biography, facts, downloadable/printable EPK, press imagery, and technical rider
- `/privacy` and `/terms` — lightweight legal pages
- Branded `not-found` state

## Before launch

- Replace each `Info soon` tour state with a verified promoter or ticketing URL as it becomes available. Never route an event row through a link aggregator.
- Confirm the 2026–27 booking email and add management/press contacts if different.
- Obtain photographer usage approvals and preferred credits for every image migrated from the previous site.
- Connect a transactional email service if the team wants silent server-side form delivery instead of the current privacy-first email handoff.
- Add analytics and consent only after the final measurement stack is selected.

See `ASSET_SOURCES.md` for the original logo, photography, and legacy social-link inventory.
