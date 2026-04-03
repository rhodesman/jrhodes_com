# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Jason Rhodes (UX Designer & Full Stack Developer). Built with Express 5, Bootstrap 5, and FontAwesome Pro (vendored SCSS).

## Commands

- **Development:** `npm run dev` — runs SCSS watcher, JS watcher, and Express server concurrently
- **Full build:** `npm run build` — compiles SCSS and minifies JS
- **Build CSS only:** `npm run build:css` — compiles `src/scss/main.scss` → `site/dist/main.css`
- **Build JS only:** `npm run build:js` — minifies `src/js/ansi.js` + `src/js/main.js` → `site/dist/main-min.js`
- **Production start:** `npm start` — builds then runs the server on port 8888
- **Debug:** `npm test` — runs `node --inspect app.js`

## Architecture

- **`app.js`** — Express 5 server entry point. Serves static files from `site/` and registers routes from `controls/routes.js`.
- **`controls/routes.js`** — Route definitions. The `/fw/:name` route proxies node_modules assets (Bootstrap JS/CSS) to the frontend.
- **`site/`** — Static site root served by Express. Contains `index.html`, built assets in `dist/`, images, webfonts, and `live-demos/` (self-contained demo projects).
- **`src/`** — Source files:
  - `src/scss/main.scss` → compiled to `site/dist/main.css` (via Dart Sass)
  - `src/js/main.js` → minified to `site/dist/main-min.js` (via Terser, bundled with ansi.js)
  - `src/js/ansi.js` — Jurassic Park terminal easter egg used on the landing page
- **`site/live-demos/`** — Standalone portfolio demo projects (Curious George, Curious World, Liberty Mutual, oPower). Each is self-contained with its own assets.

## Build Notes

- SCSS is compiled with Dart Sass (`sass` npm package). JS is minified with Terser.
- FontAwesome Pro 5.10.1 is vendored in `src/scss/vendors/` — it uses old `@import` syntax and `/` division which produce deprecation warnings. These are from the vendor code, not project code.
- `site/dist/` contains compiled output and is served directly. Always run `npm run build` after changing source files.
