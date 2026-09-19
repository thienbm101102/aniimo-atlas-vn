# MinMax's Aniipedia

Interactive static map for Aniimo world markers.

Version: `v0.3.63`

## What Is Included

- Separate map scenes for Idyll, Whisperwake Isles, Astra, and The Lost Islets.
- Filterable marker layers for items, Aniimo, eggs, teleports, ambers, and misc markers.
- A small startup manifest at `data/map_site_data.json`, with marker data loaded per map from `data/maps/`.
- WebP map previews for first paint and GPU-safe detail tiles for zoomed-in views.
- Static assets under `assets/`, so the site can be hosted without a build step.
- Browser-saved respawn tracking for verified overworld collectible nodes.

## Run Locally

From this folder:

```powershell
python -m http.server 5173
```

Then open:

```text
http://127.0.0.1:5173/
```

## Deploy To GitHub Pages

This folder is ready to be used as its own GitHub repository.

1. Push the repository to GitHub.
2. In the GitHub repository settings, enable Pages with `GitHub Actions` as the source.
3. Pushes to `main` will publish through `.github/workflows/deploy-pages.yml`.

## Tracking Data

Tracking data is stored locally in the visitor's browser. It survives page
refreshes on the same browser and device, but is not yet shared between
devices. The local data format is deliberately kept stable so it can be
imported into Discord-backed sync later.

## Coordinate Convention

- Website `x` = scene position axis `1`.
- Website `y` = scene position axis `3`.
- Scene position axis `2` is exported as `height_y`.

## GitHub Pages

The site is path-safe for GitHub Pages project sites. Relative data and asset
requests are anchored to the deployed project directory, so repositories such
as `https://USERNAME.github.io/REPOSITORY/` can load `data/*.json`,
`data/maps/*.json`, and `assets/*` without moving the files to the domain root.

Recommended deployment:

1. Keep the generated folder contents at the repository root.
2. Keep `.github/workflows/deploy-pages.yml` committed.
3. Push to `main` and wait for the **Deploy to GitHub Pages** workflow to finish.
4. Open the Pages URL with the repository path, for example
   `https://USERNAME.github.io/REPOSITORY/`.

Do not open the HTML through `github.com/.../blob/main/index.html`; GitHub's
file viewer is not a web host and will not execute `fetch()` for the app data.

