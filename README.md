# jrhodes.com

Personal portfolio website for Jason Rhodes — Sr. Web Developer, Development Team Lead & Frontend Engineer.

## Tech Stack

- **Frontend:** React 19 + TypeScript, built with Vite 6
- **Styling:** SCSS (compiled by Vite via `sass-embedded`), Bootstrap 5, FontAwesome 6 Free
- **Server:** Express 5 (Node.js) — serves the built SPA and static assets

## Getting Started

```bash
npm install
npm run dev
```

`npm run dev` runs the Vite dev server and the Express server together. The app runs at `http://localhost:8888`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Run the Vite client and Express server concurrently |
| `npm run build` | Build the React app (`client/`) to `site/dist/` |
| `npm run typecheck` | Type-check with `tsc --noEmit` |
| `npm start` | Build, then start the Express server (production) |
| `npm run serve` | Start the Express server without building |
| `npm test` | Launch the server with the Node inspector (no test suite) |

## Project Structure

```
app.js                Express server — serves site/dist then the rest of site/
controls/routes.js    Stub for future server-side endpoints
client/               Vite + React + TypeScript source
  ├── index.html      Vite HTML entry
  ├── vite.config.ts  Vite config
  └── src/
      ├── main.tsx        App entry (mounts <App>, imports FontAwesome CSS)
      ├── App.tsx         Page composition
      ├── components/     Section components (Hero, Portfolio, etc.) + games
      ├── data/           projects.ts (not currently imported)
      ├── lib/            ansi.ts (console easter egg)
      └── styles/         main.scss + inc/ partials
site/                 Static root served by Express
  ├── dist/           Vite build output (gitignored)
  └── live-demos/     Self-contained legacy demo projects
```

## Deployment

Runs under PM2 (`ecosystem.config.js`) on port 8888, behind nginx-proxy-manager and Cloudflare. Redeploy with `git pull && npm run build && pm2 restart jrhodes-com`.

## License

ISC
