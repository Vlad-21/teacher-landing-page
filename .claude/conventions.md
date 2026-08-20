# Project Rules

Rules to follow when working in this repository.

## Related rules

- @.claude/rules/design.rules.md — general design/layout principles for the landing page.
- @.claude/rules/seo.rules.md — SEO, semantics, and accessibility rules.
- @.claude/rules/design.md — description of the landing page's *current* design system and page structure (tokens, components, section order) as actually implemented. Read this to understand what's already built before making changes; update it whenever the implemented design or structure changes.

## Client preferences

- @.claude/client/preferences.md — the client's actual brand and design preferences (color, typography, signature elements). This is the **primary source of truth** for what the client wants — check it before making any content, copy, or design change to the landing page, and defer to it over `design.rules.md` where the two conflict.

## Conventions

- No external JS/CSS dependencies beyond the Google Fonts link already in `index.html`'s `<head>`. Keep the site fully static and self-contained otherwise. (See `client/preferences.md` for which font families are currently specified.)
- New icons should follow the existing inline-SVG pattern (24x24 viewbox, `stroke="currentColor"`, `stroke-width="2"`, rounded caps/joins) rather than introducing an icon font or SVG sprite system.
- Color/spacing/radius/shadow values belong in the `:root` tokens in `styles.css`, not hardcoded per-rule.
- The contact form has no backend — it stays a `mailto:` handoff unless a real backend/form service is explicitly introduced.
