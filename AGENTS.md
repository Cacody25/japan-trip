# Japan 2026

Static Vite + React trip companion. Content lives in `src/data`. There is no backend.

## Local setup

```bash
npm install
npm run dev
```

`npm run build` writes `dist/`. GitHub Pages deploys that folder with `.github/workflows/pages.yml`.

## Map key

`VITE_GOOGLE_MAPS_API_KEY` is read at build time from `.env.local` locally, and from the `GOOGLE_MAPS_API_KEY` Actions secret in CI. The app still builds and the other screens still work when it is unset.

## Checks

Run `npm run build` and `npm run lint` after code changes.
