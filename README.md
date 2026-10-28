# Mobile Video Playback Reproduction

A minimal React Player example for investigating video play/pause behavior on mobile with optional Heap analytics. It renders one full-viewport video with native controls.

## Run locally

Use Node.js 24 LTS (24.15 or newer) and npm.

```sh
nvm use
npm ci
npm start
```

Open [localhost:3000](http://localhost:3000). The build uses Vite while the reproduction keeps its original exact React 18.2.0 and React Player 2.16.0 runtime versions.

## Reproduce

1. Copy `.env.example` to `.env.local`.
2. To test the integration, set `VITE_HEAP_APP_ID` to your public Heap application ID and restart Vite. Leaving it blank loads no Heap script.
3. Open the app on a phone or use a mobile viewport in browser developer tools.
4. Tap near the native play button, then alternate play and pause several times.
5. Compare the result with `VITE_HEAP_APP_ID` blank to isolate the integration.

The original report observed the issue in a mobile viewport rather than desktop. Device autoplay policies may require a user gesture. The MP4 is hosted externally and is not included in this repository; load failures show a visible error.

## Checks

```sh
npm run check      # lint, tests, and production build
npm test           # loader and player configuration tests
npm run preview    # preview the production build locally
```

Tests verify that analytics is disabled without configuration, that repeated initialization does not load duplicate scripts, and that the original player settings remain intact. The player is mocked in tests. Native mobile controls, successful media playback, and live Heap behavior require a manual browser/device check; this cleanup does not claim to resolve the original playback issue.
