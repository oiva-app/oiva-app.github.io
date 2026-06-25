## How were these graphics made?
- Source of truth for all final SVGs is `oiva-web-figures.ai`.
- The file is editable with Adobe Illustrator CS4.
- Files were exported from CS4 using [this script](https://github.com/svalenziano/adobe/blob/main/ExportArtboardsToSVG.jsx) and then optimized using `npx svgo ./src/assets/figures/900-finals/export/`
- The width and height of `760...svg` were manually edited to fill the lightbox bounds

## Lessons Learned
- Should have used the modern (paid) version of Adobe Illustrator from the start.  CS4 does not play nicely with SVGs.
- Affinity might be a good alternative, but I spent a few hours with it and found it frustrating and difficult to use.  It's possible a couple days of digging into it would have changed that.