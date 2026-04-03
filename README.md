# jrhodes.com

Personal portfolio website for Jason Rhodes — UX Designer & Full Stack Developer.

## Tech Stack

- **Server:** Express 5 (Node.js)
- **Frontend:** Bootstrap 5, FontAwesome 6 Free, vanilla JS
- **Build:** Dart Sass (SCSS → CSS), Terser (JS minification)

## Getting Started

```bash
npm install
npm run dev
```

This starts the SCSS/JS file watchers and the Express server concurrently. The site runs at `http://localhost:8888`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Watch files + run dev server |
| `npm run build` | One-shot compile of CSS and JS |
| `npm run build:css` | Compile SCSS to `site/dist/main.css` |
| `npm run build:js` | Minify JS to `site/dist/main-min.js` |
| `npm start` | Build + start server (production) |
| `npm test` | Start server with Node inspector |

## Project Structure

```
app.js              Express server entry point
controls/routes.js  Route definitions (serves node_modules assets via /fw/:name)
site/               Static site root (served by Express)
  ├── index.html    Main page
  ├── dist/         Compiled CSS and JS output
  ├── webfonts/     FontAwesome 6 font files
  ├── img/          Images and logos
  └── live-demos/   Self-contained portfolio demo projects
src/                Source files
  ├── js/           JavaScript source (main.js, ansi.js)
  └── scss/         SCSS source (main.scss + partials in inc/)
```

## License

ISC
