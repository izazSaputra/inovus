# Inovus Design Guide

This file is the visual reference for Inovus. Read it together with `AGENTS.md`
and `docs/project-brief.md` before changing the site's visual design. Follow the
owner's latest direction if it updates this guide, then keep this file aligned.

## Product and audience

- Inovus is the class profile and memory site for PTI-B, cohort 2025, at
  Universitas Negeri Malang.
- The site should feel like a friendly home for classmates: easy to browse,
  warm, and visually expressive without requiring classmates to maintain posts.
- Use natural Indonesian for public-facing content. English navigation labels
  are present in the current implementation; do not change them without being
  asked.
- The visual reference is [WRI Dev](https://wridev.id/en/). Take inspiration
  from its clear community presentation, not its identity or exact layout.

## Visual direction

- Use a light, warm-neutral foundation with Persian Blue as the main brand
  color and Blazing Flame as a small accent.
- Keep generous spacing and a clear type hierarchy. Let typography and class
  photos carry the personality; avoid adding decoration without a purpose.
- As a loose guide, use about 75% neutral, 20% blue, and 5% orange across a
  page. This is not a per-component quota.
- Keep the desktop design as the current focus. Add and verify narrow layouts
  when the owner moves to the responsive pass.

## Color tokens

Use the shared CSS variables from `src/styles/global.css`; do not introduce
near-duplicate color literals in components.

| Role | Name | Hex reference | Current CSS token |
| --- | --- | --- | --- |
| Main page background | Warm White | `#FAFAF8` | `--background` |
| Cards and panels | White | `#FFFFFF` | `--surface` |
| Main brand, active links | Persian Blue | `#0C35C6` | `--primary` |
| Small highlights | Blazing Flame | `#FC480E` | `--accent` |
| Borders and placeholders | Alabaster Grey | `#E0E0E0` | `--border`, `--placeholder-color` |
| Main text | Onyx | `#151515` | `--text` |
| Supporting text | Text Grey | `#626262` | `--text-muted` |

Current OKLCH values are defined in `src/styles/global.css`. Use white text on
blue buttons and dark text on orange surfaces when contrast needs to stay
readable. Separators alone should not communicate an interactive state.

## Typography

- **Open Sauce One** is the main interface and body font.
- **OffBit Dot** is the pixel-style display font. Use it sparingly for a short
  phrase or brand moment, not for paragraphs or small labels.
- **OffBit Bold** (registered in CSS as `Offbit`) is the solid display variant.
- The local font files and `@font-face` declarations live under `public/fonts`
  and `src/styles/global.css` respectively. Preserve their existing family
  names and weights when using the CSS variables `--font-sans`,
  `--font-display`, and `--font-display-none`.

## Layout and components

- Keep the site split into separate pages rather than one long scrolling home
  page. The planned destinations are Home, About, People, and Moments; the
  route currently used by the About page is `/about`.
- The homepage is assembled from separate Astro components: hero, about
  preview, member preview, gallery preview, and footer. Keep shared navigation
  and footer in `src/components/Global/` and page sections grouped by page in
  `src/components/`.
- Use the existing `.container` framing, dashed separators, spacing, and
  palette as the site's visual language. Check existing components before
  inventing another treatment.
- Hero sections may use large centered typography, a small cohort label, and a
  concise description. Avoid repeating the exact same headline across pages.
- Make image frames intentional: set a clear aspect or height, use
  `object-fit: cover` only when cropping is wanted, and adjust
  `object-position` so faces remain visible. Give images useful alt text.

## Content and imagery

- Use class photos already supplied in `src/assets/` when they fit the page.
- Keep placeholders clearly labelled until real member or event photos are
  provided. Never invent people, events, class statistics, achievements, or
  social accounts.
- The meaning behind the name Inovus, the complete member list, and class
  organization details still need owner-provided information. Do not guess at
  their meaning or present sample copy as fact.
- Production logo files have not yet been added. Do not redraw or alter the
  supplied logo based on memory; use a text wordmark only as a temporary
  treatment.

## Accessibility and interaction

- Use semantic headings and landmarks, descriptive image alternatives,
  keyboard-accessible links, and visible focus states.
- Keep motion subtle and respect `prefers-reduced-motion` when adding animated
  effects.
- Hover styling must not be the only way to identify an interactive element.

## Current implementation notes

- The project uses Astro components with scoped CSS and global tokens in
  `src/styles/global.css`.
- Home and About components are in progress. Other destinations may not exist
  yet; check `src/pages/` before linking to or describing them as implemented.
- The reference and role descriptions above express design intent. They do not
  mean every planned page, asset, or responsive state has been implemented.
