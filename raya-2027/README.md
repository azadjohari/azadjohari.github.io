# Aidilfitri 2027 family portal

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

Before publishing changes to CSS, JavaScript or trip details, run `python raya-2027/update-assets.py` from the repository root. This updates content-based asset URLs so mobile browsers fetch matching files. Verify with `python raya-2027/update-assets.py --check`.

Merge the portal into the branch used by the repository's GitHub Pages configuration (currently the repository default branch is `master`). If Pages publishes from the repository root, the directory is served at `/raya-2027/`. Confirm the Pages source in repository Settings → Pages before publication.

## Checks

Run `node --check raya-2027/app.js` and `node --check raya-2027/trip.js`. Manually verify both languages, checklist persistence after reload, link copying, mobile layout and print preview.

## Meeting and countdowns

The family Google Meet link and both proposed travel countdowns appear above the hero. Update `departureOptions` in `trip.js` if the proposed dates change, alongside the displayed `dates` text. Countdown timestamps include Malaysia’s UTC+08:00 offset and target midnight on each option’s first day, not a confirmed departure time. Timers update every second and show a date-reached message after their target. Both options remain TBC.

## Regression checks

Run `node raya-2027/tests/render.test.cjs` to check translation fallbacks, both languages and the accommodation entry. Proposed stays are listed in the accommodation table in `index.html`; bilingual descriptions are in `app.js`.

## Search visibility

The page includes a robots meta directive requesting `noindex`, `nofollow`, `noarchive`, `nosnippet` and `noimageindex`. Crawlers must be able to fetch the page to discover these directives, so do not block `/raya-2027/` in `robots.txt`.

These directives depend on crawler support. They do not restrict access, prevent browser caching, or remove copies already stored by third parties. The public GitHub repository also remains accessible. GitHub Pages does not provide per-page custom HTTP cache headers through this HTML file. Existing search results may require a recrawl or a removal request to the relevant search engine.

## Meeting calendar download

The next family meeting is Saturday, 24 October 2026 from 09:00 to 11:00 Malaysia time (01:00–03:00 UTC). The meeting area links to `family-meeting-2026-10-24.ics`, which includes the Google Meet URL. The calendar event has a two-hour duration. When changing the meeting, update both languages in `app.js`, the HTML time and fallback text, the calendar file and link, then refresh asset URLs.
