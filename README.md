# Layers of Place — Samarkand (Team A, MS-126M)

Interactive heritage experience. Static site: no build step, no server code.

## Open it
- **Double-click `index.html`.** Fonts and the map library are bundled in `fonts/` and `vendor/`.
- Only the **map tiles** need the internet (basemap from CARTO, terrain from AWS Open Data).
  If the map cannot load, the clue cards still appear and the game still works.
- Prefer a local server? In this folder run `python3 -m http.server 8000` and open http://localhost:8000/

## Put it online (stable link)
It is a plain static folder, so any static host works: GitHub Pages, Netlify (drag the folder onto app.netlify.com/drop), Vercel.
`404.html` sends any wrong address back to the home page.

## Edit the content
Everything the team writes lives in **`js/data.js`**:
- `TOPICS` — the five pages (facts F / interpretations I / questions Q, timeline, references)
- `CHAPTERS` — what changes on the map in each era (palette, sky, which sites exist)
- `DISPUTES` — where sources disagree
- `CLUES` — the three-level clue for each site (photo slots are marked `[TODO]`)
- `TEAM`, `CLOSING_QUESTION`, `PAIR_NOTES`

Search for `[TODO]` and `[verify]` to find what still needs filling or checking.

## Files
- `index.html`, `style.css`, `js/app.js` (behaviour), `js/art.js` (our own SVG drawings), `js/intro.js` (opening dig)
- `vendor/` MapLibre GL JS 4.7.1 (BSD-3) · `fonts/` Instrument Serif, JetBrains Mono, Inter (SIL OFL)
