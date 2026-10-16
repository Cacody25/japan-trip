# Japan 2026

Trip companion for Oct 30–Nov 11. Days, map, notes, phrases, and watch stops are static data in `src/data`. The site is a Vite app meant to be hosted on GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints, usually http://localhost:5173.

The map needs a Google Maps browser key. Copy `.env.example` to `.env.local` and set `VITE_GOOGLE_MAPS_API_KEY`. Restrict that key by HTTP referrer in Google Cloud. The rest of the app works if the key is missing.

## Host on GitHub Pages

1. Push this repo to GitHub, on the `main` branch.
2. In the repo, open Settings → Pages → Build and deployment, and choose **GitHub Actions**.
3. Optional: add a repository secret named `GOOGLE_MAPS_API_KEY` with the browser key. Also add the Pages URL as an allowed referrer on that key.
4. The workflow in `.github/workflows/pages.yml` builds and deploys on every push to `main`.

A user site (`username.github.io`) is served from `/`. Any other repo is served from `/repo-name/`. The workflow sets that base automatically.

Direct links such as `/map` survive a refresh via `404.html`, which GitHub Pages serves for unknown paths.
