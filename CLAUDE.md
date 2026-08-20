# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page static landing site for Viktoriia Kryshchuk, an English tutor. Plain HTML/CSS/JS with no build tooling, no package manager, and no framework — it is meant to be deployed as-is to any static host (e.g. Netlify, GitHub Pages).

## Commands

There is no build, lint, or test setup. To preview changes, open `index.html` directly in a browser, or serve the directory locally:

```
python3 -m http.server 8080
```

`file://` navigation may fail inside sandboxed browser-automation tools (e.g. Claude in Chrome) — a local HTTP server is required for those.

## Architecture

- `index.html` — the entire page, one file, sections in scroll order: hero → about → services (`#services`) → experience timeline (`#experience`) → education → skills/languages (`#skills`) → contact (`#contact`). Section anchors are targeted by the nav links in the header.
- `styles.css` — all styling. Design tokens (colors, fonts, radii, shadows) are defined once as CSS custom properties at the top of `:root` and referenced everywhere via `var(...)` — update a token there rather than hardcoding a new color/radius inline.
- `script.js` — small vanilla-JS behaviors only: mobile nav toggle, footer year, and the contact form (which builds a `mailto:` link rather than submitting anywhere, since there is no backend).
- `assets/` — `favicon.svg` and the tutor's photo (`viktoriia.jpg`). No icon library or font-icon set is used; all icons are hand-written inline SVGs directly in `index.html` (stroke-based, `currentColor`, sized via the `.service-icon`/`.contact-icon` wrapper in CSS) so the page stays dependency-free.

### Rules

@.claude/conventions.md
