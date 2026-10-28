# Mobile Video Playback Reproduction

A minimal React Player example for investigating video play/pause behavior on mobile with Heap analytics loaded. It renders one full-viewport video with native controls.

## Run locally

```sh
npm ci
npm start
```

Open [localhost:3000](http://localhost:3000). This reproducer retains React 18, React Player 2, and Create React App 5 so changes to those dependencies do not silently change the case being investigated.

## Reproduce

1. In `public/index.html`, replace `YOUR_APP_ID` with a Heap application ID if testing the analytics integration.
2. Open the app on a phone or use a mobile viewport in browser developer tools.
3. Tap near the native play button, then alternate play and pause several times.
4. Compare the result with the Heap loader removed to isolate the integration.

The original report observed the issue in a mobile viewport rather than desktop. Device autoplay policies may require a user gesture before playback. The MP4 is hosted externally and is not included in this repository.

## Scope

This is a bug reproduction, not a complete video application. `npm run build` creates a production build; no automated playback tests are included. Native controls and analytics behavior require a manual browser/device check.
