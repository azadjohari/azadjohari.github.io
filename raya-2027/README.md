# Raya 2027 family portal

Static, bilingual (Bahasa Melayu / English) family trip portal for:
https://azadjohari.github.io/raya-2027/

No build tools, dependencies, accounts or backend are needed. The existing repository pages are unaffected.

## Update trip information

Edit `trip.js` to add confirmed destinations, dates, transport, accommodation and itinerary entries. Use `{ ms: 'Bahasa Melayu text', en: 'English text' }` for each field. Unknown fields should stay `null`; do not substitute estimated Raya dates for confirmed travel dates.

The draft notice and planning status are intentionally visible. Update both language versions of these labels in `app.js` when the trip is confirmed.

This repository and GitHub Pages website are public. Share only information intended for public viewing; use the family's private channel for passport numbers, booking references, private addresses and personal contact details.

The packing checklist and language preference use browser localStorage. Checklist changes are personal to the device/browser and are not shared with other family members. If storage is blocked, the checklist works for the current page session. The copy-link button has a manual-copy fallback, and the print button uses a print-specific layout.

## Preview and publish

From the repository root, run `python -m http.server 8000` and open `http://localhost:8000/raya-2027/`.

Merge the portal into the branch used by the repository's GitHub Pages configuration (currently the repository default branch is `master`). If Pages publishes from the repository root, the directory is served at `/raya-2027/`. Confirm the Pages source in repository Settings → Pages before publication.

## Checks

Run `node --check raya-2027/app.js` and `node --check raya-2027/trip.js`. Manually verify both languages, checklist persistence after reload, link copying, mobile layout and print preview.
