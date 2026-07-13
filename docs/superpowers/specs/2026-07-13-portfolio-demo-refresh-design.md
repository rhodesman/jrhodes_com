# Portfolio Demo Refresh — Design

**Date:** 2026-07-13
**Author:** Jason Rhodes (with Claude Code)

## Goal

Refresh the portfolio/demo section of the resume site (jasonrhodes.me):

1. Replace the old, dated **Liberty Mutual** demo with the newly-live **Iron Radar** app.
2. Fix the broken **oPower / PG&E** demo by splitting it into its own standalone,
   Dockerized subdomain project (`opower.jasonrhodes.me`) — the same pattern used for
   Iron Radar — since the AngularJS app itself is broken and separate hosting alone
   would not fix it.

## Background

- The site is a Vite + React + TypeScript app in `client/`, built to `site/dist/` and
  served by a PM2-managed Express app (`app.js`). The `CLAUDE.md` in the repo is stale
  (describes the old Express/Bootstrap site).
- Portfolio cards are rendered from a hardcoded `PROJECTS` array in
  `client/src/components/Portfolio.tsx`. This is the **only rendered source**.
  `client/src/data/projects.ts` (consumed by `Options.tsx`) exists but is **not imported
  anywhere**, so it has no runtime effect. It will be updated for consistency only.
- The oPower demo (`site/live-demos/opower-pge/`) is a 2014-era AngularJS 1.2 SPA
  (hash-routed, `ng-view`, ~15 vendor libs + an external MyFonts loader). It renders a
  blank page in a modern browser because the Angular app fails to bootstrap/render.
  Moving the same files to a subdomain does **not** fix this — the app must be repaired.
- Subdomains (e.g. `ironradar`, `neotek`) are separate deployments behind the server's
  reverse proxy. Iron Radar is deployed via Docker.

## Part 1 — Resume repo (`jrhodes_com`)

Edit `client/src/components/Portfolio.tsx`:

- **Remove** the Liberty Mutual card.
- **Add** an Iron Radar card:
  - `name`: `Iron Radar`
  - `category`: `Security / Dashboard`
  - `desc`: `Framework-detection recon dashboard — identifies web technologies on target
    systems with confidence scoring, detection-coverage analysis, and CSV export.`
  - `url`: `https://ironradar.jasonrhodes.me/`
  - `tags`: `['Node.js', 'SCSS', 'Docker', 'Security', 'Dashboard']`
  - `featured`: `true`
- **Change** the oPower card `url` from `/live-demos/opower-pge/` to
  `https://opower.jasonrhodes.me/`. Card copy and tags unchanged. (Card now opens in a
  new tab automatically, since the render logic keys off `url.startsWith('http')`.)

Mirror the same swaps in `client/src/data/projects.ts` (developer column: drop Liberty
Mutual, add Iron Radar, repoint oPower) for consistency, even though it is unused.

Then run `npm run build` so `site/dist` reflects the changes.

**Files kept on disk, unlinked:** `site/live-demos/liberty-mutual/` and
`site/live-demos/opower-pge/` remain in the repo but are no longer referenced by the site.

## Part 2 — Standalone oPower project

Create a new sibling project at `/Users/jrhodes/Development/github/opower-pge/`:

1. Copy the static app from `site/live-demos/opower-pge/` into the new project.
2. **Diagnose & fix the blank-page bug:** run the app locally, read the browser console,
   and patch whatever prevents Angular from bootstrapping/rendering (prime suspects: the
   external `easy.myfonts.net` loader, and/or a `templateUrl` partial that 404s on the
   default `/` → `partials/overview.html` route). Success = the Overview page renders with
   content, and primary nav routes (`My Usage`, `Ways to Save`, etc.) load their partials.
3. Add deploy scaffolding matching Iron Radar:
   - `Dockerfile` — `nginx:alpine` serving the static files.
   - `.dockerignore`
   - `README.md` — build/run instructions and the DNS + reverse-proxy steps for
     `opower.jasonrhodes.me`.
4. `git init` and commit, ready to push to `rhodesman/opower-pge`.

## Out of scope (owner: Jason)

- Creating the DNS record for `opower.jasonrhodes.me`.
- Adding the reverse-proxy vhost on the server.
- Building/running the container on the server.

These are documented in the new project's README; the deploy itself is manual.

## Success criteria

- Iron Radar card appears in the portfolio and links to the live app; Liberty Mutual is
  gone from the rendered site.
- oPower card links to `https://opower.jasonrhodes.me/` and opens in a new tab.
- `npm run build` succeeds and `site/dist` reflects the changes.
- The standalone `opower-pge` project renders content locally (no blank page) and has a
  working Docker build.
