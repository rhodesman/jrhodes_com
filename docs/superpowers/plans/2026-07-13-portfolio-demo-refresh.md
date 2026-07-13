# Portfolio Demo Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Liberty Mutual demo with the live Iron Radar app, and split the broken oPower/PG&E demo into its own Dockerized `opower.jasonrhodes.me` subdomain project with the AngularJS render bug fixed.

**Architecture:** Two independent deliverables. (1) Edit the two card-source files in the Vite/React resume app and rebuild `site/dist`. (2) Create a standalone sibling project `../opower-pge/` from the legacy static app, fix its blank-page bootstrap bug, and add nginx-based Docker deploy scaffolding.

**Tech Stack:** Vite 6 + React 19 + TypeScript (resume app); legacy AngularJS 1.2 static app; nginx:alpine + Docker (oPower deploy).

## Global Constraints

- Node engine / tooling as pinned in `package.json`; use existing `npm run` scripts only — no new dependencies.
- This project has **no test runner**. Verification = `npm run typecheck`, `npm run build`, local static server, and browser console/DOM inspection. Do not invent a test framework.
- External portfolio links open in a new tab; the render logic in `Portfolio.tsx` keys off `url.startsWith('http')`, so any external URL must use the full `https://` form.
- Iron Radar live URL: `https://ironradar.jasonrhodes.me/`. New oPower URL: `https://opower.jasonrhodes.me/`.
- Leave `site/live-demos/liberty-mutual/` and `site/live-demos/opower-pge/` on disk — unlink only, do not delete.
- New standalone project location: `/Users/jrhodes/Development/github/opower-pge/` (sibling to this repo, its own git repo).
- Commit messages end with the `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>` trailer. Work happens on branch `portfolio-demo-refresh` (already created) for Part 1.

---

## Task 1: Swap portfolio cards in the resume app

**Files:**
- Modify: `client/src/components/Portfolio.tsx` (the `PROJECTS` array)
- Modify: `client/src/data/projects.ts` (developer column — unused at runtime, updated for consistency)

**Interfaces:**
- Consumes: nothing from other tasks.
- Produces: rebuilt `site/dist/` served by `app.js`. No exported symbols other tasks depend on.

- [ ] **Step 1: Replace the Liberty Mutual card with an Iron Radar card in `Portfolio.tsx`**

Find this object in the `PROJECTS` array in `client/src/components/Portfolio.tsx`:

```tsx
  {
    name: 'Liberty Mutual Annual Review',
    category: 'Marketing',
    desc: 'Interactive corporate annual review site with video modals and multimedia content.',
    url: '/live-demos/liberty-mutual/',
    tags: ['jQuery', 'Bootstrap', 'Video', 'HTML5'],
    featured: false,
  },
```

Replace it with:

```tsx
  {
    name: 'Iron Radar',
    category: 'Security / Dashboard',
    desc: 'Framework-detection recon dashboard — identifies web technologies on target systems with confidence scoring, detection-coverage analysis, and CSV export.',
    url: 'https://ironradar.jasonrhodes.me/',
    tags: ['Node.js', 'SCSS', 'Docker', 'Security', 'Dashboard'],
    featured: true,
  },
```

- [ ] **Step 2: Repoint the oPower card URL in `Portfolio.tsx`**

In the same `PROJECTS` array, find the oPower card and change only its `url`:

```tsx
    url: '/live-demos/opower-pge/',
```

to:

```tsx
    url: 'https://opower.jasonrhodes.me/',
```

Leave the oPower card's `name`, `category`, `desc`, `tags`, and `featured` unchanged.

- [ ] **Step 3: Mirror the swaps in `client/src/data/projects.ts`**

In the `developer` column's `projects` array, replace these two lines:

```ts
      { name: 'Liberty Mutual', url: '/live-demos/liberty-mutual/' },
      { name: 'oPower - PG&E', url: '/live-demos/opower-pge/' },
```

with:

```ts
      { name: 'Iron Radar', url: 'https://ironradar.jasonrhodes.me/' },
      { name: 'oPower - PG&E', url: 'https://opower.jasonrhodes.me/' },
```

- [ ] **Step 4: Typecheck**

Run: `npm run typecheck`
Expected: exits 0, no errors.

- [ ] **Step 5: Build**

Run: `npm run build`
Expected: Vite build completes, writes to `site/dist/`, exits 0.

- [ ] **Step 6: Visually verify the cards**

Run the built site and confirm the portfolio section. Start the server:

Run: `PORT=8888 node app.js &` then fetch the built bundle to confirm the strings shipped:

Run: `grep -rl "Iron Radar" site/dist/assets/ && grep -rL "Liberty Mutual" site/dist/assets/*.js | head -1`
Expected: at least one built JS asset contains `Iron Radar`; the Liberty Mutual card text is gone from that bundle.

Then, if a browser is available, load `http://localhost:8888/#portfolio` and confirm: an "Iron Radar" card is present, no "Liberty Mutual Annual Review" card, and the oPower card's arrow link points to `https://opower.jasonrhodes.me/`. Stop the server afterward (`kill %1`).

- [ ] **Step 7: Commit**

```bash
git add client/src/components/Portfolio.tsx client/src/data/projects.ts site/dist
git commit -m "$(cat <<'EOF'
Swap Liberty Mutual demo for Iron Radar, repoint oPower to subdomain

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Scaffold the standalone oPower project

**Files:**
- Create: `/Users/jrhodes/Development/github/opower-pge/` (new directory + copied static app + its own git repo)

**Interfaces:**
- Consumes: the legacy static app at `site/live-demos/opower-pge/` as the source to copy.
- Produces: a working directory `../opower-pge/` containing the full static app at its root (`index.html`, `js/`, `css/`, `scss/`, `img/`, `partials/`, `favicon.ico`, `mobile/`, and the extra html files), initialized as a git repo. Later tasks modify files inside it.

- [ ] **Step 1: Copy the static app into the new project directory**

```bash
mkdir -p /Users/jrhodes/Development/github/opower-pge
cp -R /Users/jrhodes/Development/github/jrhodes_com/site/live-demos/opower-pge/. /Users/jrhodes/Development/github/opower-pge/
```

- [ ] **Step 2: Verify the copy**

Run: `ls /Users/jrhodes/Development/github/opower-pge/`
Expected: shows `index.html`, `js`, `css`, `scss`, `img`, `partials`, `favicon.ico`, `mobile`, plus the extra `.html` files (`iphone.html`, `ways-to-save-mobile.html`, `wts.appcache`).

- [ ] **Step 3: Initialize a git repo and make the baseline commit**

```bash
cd /Users/jrhodes/Development/github/opower-pge
git init -q
printf 'node_modules\n.DS_Store\n' > .gitignore
git add -A
git commit -q -m "$(cat <<'EOF'
Import oPower / PG&E static app from jrhodes_com live-demos

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

Expected: `git -C /Users/jrhodes/Development/github/opower-pge log --oneline` shows one commit.

---

## Task 3: Fix the blank-page render bug

**Files:**
- Modify: `/Users/jrhodes/Development/github/opower-pge/index.html` (and/or specific `js/vendor/*` or `partials/*` files, depending on the diagnosed cause)

**Interfaces:**
- Consumes: the scaffolded project from Task 2.
- Produces: a static app that renders the Overview page content (not a blank `ng-view`) when served over HTTP.

- [ ] **Step 1: Serve the app locally and capture the console**

```bash
cd /Users/jrhodes/Development/github/opower-pge
python3 -m http.server 8899 >/tmp/opower-http.log 2>&1 &
```

Then load `http://localhost:8899/` in a browser (or the Chrome MCP tools) and read the JavaScript console. The app bootstraps AngularJS 1.2 via `ng-app="app"` and renders the default route (`partials/overview.html`, `OverviewCtrl`) into `<div ng-view>`.

Record the FIRST error that halts execution. Likely causes, in priority order:
1. The external MyFonts loader in `js/app.js` (`//easy.myfonts.net/...`) throwing or hanging.
2. A `templateUrl` partial 404 (e.g. `partials/overview.html` path mismatch).
3. A vendor script (`foundation.js`, an angular plugin) throwing during `.run()`/bootstrap.

- [ ] **Step 2: Confirm the failure is the blank `ng-view`**

Run: `curl -s http://localhost:8899/partials/overview.html | head -5`
Expected: returns the partial's HTML (HTTP 200). If this 404s, the render bug is a missing/renamed partial and the fix is a path correction. If it returns HTML, the bug is a JS bootstrap error (go by the Step 1 console error).

- [ ] **Step 3: Apply the minimal fix for the diagnosed cause**

Fix only what the console/curl evidence points to. Examples of the minimal patch per cause:

- **Dead MyFonts loader breaking bootstrap:** in `js/app.js`, the IIFE that injects `easy.myfonts.net` is decorative (custom font only). If it throws, wrap its body so a failure can't halt the module, or remove the injection block. Do not touch unrelated app logic.
- **Partial 404 on the default route:** correct the `templateUrl` in the `$routeProvider` `.when('/:usertype?', {...})` block (or the offending route) to the real partial path under `partials/`.
- **Vendor script throwing:** if a non-essential vendor script (e.g. an analytics/font shim) errors, remove its `<script>` tag from `index.html`; keep all Angular-core and charting libs.

Make the smallest change that lets Angular finish bootstrapping.

- [ ] **Step 4: Verify content now renders**

Reload `http://localhost:8899/` and confirm the `ng-view` is populated — the Overview page shows content (headings/widgets), not an empty container. If using the Chrome MCP tools, check that `document.querySelector('[ng-view]').innerText.trim().length` is greater than 0 and the console has no bootstrap-halting error.

Also click the primary nav (`My Usage`, `Ways to Save`) and confirm each hash route (`#/my-usage`, `#/ways-to-save/smart-purchases`) swaps the `ng-view` content.

- [ ] **Step 5: Stop the local server**

Run: `kill %1` (the `python3 -m http.server` job), or `pkill -f "http.server 8899"`.

- [ ] **Step 6: Commit the fix**

```bash
cd /Users/jrhodes/Development/github/opower-pge
git add -A
git commit -q -m "$(cat <<'EOF'
Fix blank-page bootstrap so Overview and routes render

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 4: Add Docker deploy scaffolding and README

**Files:**
- Create: `/Users/jrhodes/Development/github/opower-pge/Dockerfile`
- Create: `/Users/jrhodes/Development/github/opower-pge/.dockerignore`
- Create: `/Users/jrhodes/Development/github/opower-pge/README.md`

**Interfaces:**
- Consumes: the fixed static app from Task 3.
- Produces: a buildable container image serving the app on port 80 via nginx, plus deploy docs. Terminal deliverable.

- [ ] **Step 1: Write the Dockerfile**

Create `/Users/jrhodes/Development/github/opower-pge/Dockerfile`:

```dockerfile
# Static oPower / PG&E demo served by nginx.
FROM nginx:alpine

# Copy the static site into nginx's web root.
COPY . /usr/share/nginx/html

# Remove build/deploy files that shouldn't be served.
RUN rm -f /usr/share/nginx/html/Dockerfile \
          /usr/share/nginx/html/.dockerignore \
          /usr/share/nginx/html/README.md

EXPOSE 80
```

- [ ] **Step 2: Write the .dockerignore**

Create `/Users/jrhodes/Development/github/opower-pge/.dockerignore`:

```
.git
.gitignore
.DS_Store
node_modules
```

- [ ] **Step 3: Write the README**

Create `/Users/jrhodes/Development/github/opower-pge/README.md`:

```markdown
# oPower / PG&E Energy Dashboard (demo)

Standalone deploy of the archived oPower "My Energy" AngularJS 1.2 dashboard,
originally built for PG&E. Split out of the jasonrhodes.me portfolio repo so it
can run at its own subdomain: **https://opower.jasonrhodes.me/**.

Pure static app — AngularJS + Foundation + charting libs, no backend.

## Run locally

    python3 -m http.server 8899
    # open http://localhost:8899/

## Build & run with Docker

    docker build -t opower-pge .
    docker run --rm -p 8080:80 opower-pge
    # open http://localhost:8080/

## Deploy (opower.jasonrhodes.me)

The image serves the static site on port 80 via nginx. On the server:

1. Build/run the container (e.g. `docker run -d --restart unless-stopped -p 8090:80 --name opower-pge opower-pge`).
2. Add a reverse-proxy vhost for `opower.jasonrhodes.me` pointing at the
   container's published port (mirrors the existing `ironradar` subdomain setup).
3. Add the `opower` DNS record for `jasonrhodes.me`.
```

- [ ] **Step 4: Verify the Docker build**

Run: `cd /Users/jrhodes/Development/github/opower-pge && docker build -t opower-pge .`
Expected: build succeeds, ends with `naming to ... opower-pge` / `Successfully tagged`.

- [ ] **Step 5: Smoke-test the container**

```bash
docker run --rm -d -p 8080:80 --name opower-smoke opower-pge
sleep 1
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:8080/
docker stop opower-smoke
```

Expected: `curl` prints `200`.

- [ ] **Step 6: Commit**

```bash
cd /Users/jrhodes/Development/github/opower-pge
git add -A
git commit -q -m "$(cat <<'EOF'
Add nginx Dockerfile, .dockerignore, and deploy README

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Manual follow-up (owner: Jason, not part of this plan)

- Create the `opower` DNS record for `jasonrhodes.me`.
- Add the reverse-proxy vhost on the server and run the container.
- Push `../opower-pge/` to `github.com/rhodesman/opower-pge`.
- Merge the `portfolio-demo-refresh` branch of this repo and deploy the rebuilt site.
