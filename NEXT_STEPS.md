# Next steps for Pushpa's portfolio

This codebase is David Heckhoff's "Portfolio 2025" template (david-hckh.com),
used here under the personal/educational terms in `license.md`. Per that
license, the attribution to David Heckhoff in the footer ("Originally created
by David Heckhoff", linked to david-hckh.com, and the copyright line) must
stay visible and must not be removed or edited. Everything else has been
updated with Pushpa's information.

## What's already done

- Hero name, job title, about copy, skills/services list -> from Pushpa's CV
- Location swapped from Germany to Helsinki, Finland (EN + DE)
- Social links: email + LinkedIn updated; GitHub left as a placeholder
  username in `src/content/social.ts` (`PUSHPA_GITHUB_USERNAME`) - update
  this with the real handle
- Site meta tags (title, description, OG/Twitter tags, canonical URL) point
  to pushpakoirala.com.np
- All 5 project slots rewritten with real text describing actual engineering
  work and content: ABB RobotStudio pick-and-place, PLC pneumatic cylinder
  control, IT/OT integration architecture, machine vision/deep learning
  coursework, and Nexara Fusion LinkedIn content
- New tag colors added for PLC, TIA Portal, RAPID, SCADA, MATLAB, Python,
  AutoCAD, Ladder Logic
- Both English and German translations updated to match

## What still needs real assets (marked with TODO comments in the code)

Each project file in `src/content/projects/en/*.ts` and `de/*.ts` currently
uses one of David's old placeholder images so the site doesn't break. Look
for the `// TODO(Pushpa):` comments at the top of each file:

- `streakon.ts` -> ABB RobotStudio pick-and-place: needs a RobotStudio
  screenshot or simulation recording
- `cubewar.ts` -> PLC pneumatic cylinder: needs a TIA Portal ladder logic
  screenshot or a photo of the physical setup
- `quibbo.ts` -> IT/OT integration architecture: needs a diagram or one of
  the SVG sketch illustrations from the Nexara Fusion LinkedIn posts
- `sharkie.ts` -> Machine vision/deep learning: needs a real screenshot from
  the coursework
- `pokedex.ts` -> Nexara Fusion content: needs a screenshot of an actual
  LinkedIn post

To swap an image: replace the imported file in
`src/assets/images/projects/<folder>/` with a real image (same filename, or
update the import path), and update the `alt`/`caption` text in the
corresponding project file.

The homepage project grid thumbnails (`src/assets/thumbnails/*.webp`) are
also still David's old placeholder thumbnails and should be swapped to match.

## Things intentionally left untouched

- `license.md`, the README's "Credits & Attribution" section, and the
  footer's "Originally created by David Heckhoff" line and copyright notice
  - required by the license terms, do not remove
- `public/de/legal.html` and `public/de/privacy.html` - these are David's
  German legal disclosure pages (Impressum), not reusable template fields.
  If Pushpa wants legal/privacy pages for his own site, these should be
  written fresh for his situation (Finland-based, Nepalese national) rather
  than adapted from someone else's legal notice
- The "Music produced by HM Surf" credit - unrelated third party, their
  music is still used in the site

## Before going live

1. Replace the GitHub placeholder in `src/content/social.ts`
2. Swap in real project images per the TODO list above
3. Decide on legal/privacy pages if needed for the live domain
4. Run `npm install` then `npm run build` to produce the `dist/` folder,
   or `npm run dev` to preview locally first
