# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Gatsby.js static site for Intentional Society (intentionalsociety.org), a community-focused organization. The site deploys to Netlify.

## Development Commands

```bash
# Install dependencies
yarn

# Start development server (hot-reload at localhost:8000)
yarn develop

# Build for production
yarn build

# Serve production build locally
yarn serve

# Format code with Prettier
yarn format

# Clean Gatsby cache (useful when things break)
yarn clean
```

**Node version requirement**: Node 22 LTS (configured in `netlify.toml`).

## Architecture

**Gatsby file-based routing**: Pages in `src/pages/` map directly to URLs (e.g., `about.js` → `/about`).

**Layout pattern**: All pages wrap content in `<Layout>` (header/footer) and typically `<CenteredColumn>` for consistent width.

**Styling stack**:
- MUI v7 components for UI (AppBar, Typography, Button, etc.)
- Emotion for CSS-in-JS (via `gatsby-plugin-emotion`)
- CSS Modules (`.module.css`) for scoped styles
- Custom MUI theme in `src/gatsby-theme-material-ui-top-layout/theme.js` — 2026 design palette (primary: greener teal `#2E6B4F`, background: warm-white `#F8F5EF`). See "Readability pass" below for `body`/link/heading weight conventions.

**Heading scale** (defined in `theme.js`, single source of truth for both MUI Typography and raw HTML):
- h1: `clamp(2.5rem, 5vw, 4rem)`, weight 300, serif (Cormorant Garamond)
- h2: `clamp(2rem, 4vw, 2.8rem)`, weight 300, serif
- h3: `clamp(1.5rem, 2.5vw, 2.125rem)`, weight 400, serif
- h4: `1.5rem`, weight 500, sans (DM Sans)
- h5/h6: `1.25rem`/`1rem`, weight 500, sans
- h1–h3 use Cormorant Garamond (display serif); h4–h6 use DM Sans so sub-section labels stay crisp. `CssBaseline` applies these styles to raw HTML elements (for markdown content).

**Markdown content pattern**: Pages can render content from `src/md/*.md` files via `gatsby-transformer-remark`. The page component queries the markdown file via GraphQL and renders with `dangerouslySetInnerHTML`. See `src/pages/web.js` for an example. When converting an HTML page to markdown, do it in two commits: first the mechanical conversion (new `.md` file + rewired `.js`), then a separate commit for any copy rewrite, so content changes get a clean diff.

**Markdown anchors**: CSS Module classes can't be used inside markdown content (they get scoped/mangled). For deep-link anchor offsets that clear the AppBar, use inline styles in the markdown:
```html
<a id="section-name" style="display:block;position:relative;top:-74px;visibility:hidden"></a>
```

**Shared styles in `global.module.css`**: Includes `.big-button` (teal CTA button, currently unused — kept for future CTAs), `.anchorOffset` (AppBar-clearing anchors for use in JSX pages), and other utility classes.

**Key components**:
- `src/components/layout.js` - Root layout with navigation
- `src/components/is-appbar.js` - Responsive navigation bar (wordmark uses custom CSS class, not Typography)
- `src/components/centered-column.js` - Content width wrapper

**Practices catalog** (`src/pages/practices.js`): Assembles multiple md files from `src/md/practices/` into a single page. The `tocStructure` array in the JS file controls TOC grouping and body ordering. When pulling practice content from the Google Doc (published link), apply these formatting rules:
- Google Doc "Heading 2" → h3 (`###`) for the practice title
- "About This Practice", "The Practice", "Friends and References" → h4 (`####`)
- Bold-text sub-headers within The Practice (e.g. "Opening — Framing the Gap") → h4 (`####`)
- "Facilitator Overview" → h4; "Session length: ..." → plain text, not bold or heading
- Bold-text lines that are just emphasis (not structural headers) → keep as `**bold**`
- Epigraph quotes at the top → blockquote (`>`)
- Zoom chat instruction blocks → blockquote (`>`)
- Google redirect URLs (`google.com/url?q=...`) → extract the actual destination URL
- Bullet lists → standard markdown (`-`)
- Multi-line blockquotes (chat instructions) → add `<br>` at end of each line (except the last) to preserve line breaks; trailing spaces get stripped by tooling so use `<br>` tags instead

## Code Style

Prettier (`.prettierrc`) is configured with:
- Semicolons (`semi: true`)
- Single quotes (`singleQuote: true`, `avoidEscape`)
- No arrow function parens when possible (`arrowParens: avoid`)
- `printWidth: 9999` and `htmlWhitespaceSensitivity: strict`

BUT we don't run `yarn format` across the tree — Prettier adds a lot of
unwanted linebreaks into HTML/JSX. Write new code to match the config by hand:
**semicolons and single quotes**. `.eslintrc.json` enforces `semi: always` and
`quotes: single` as errors, so those two are the ones that actually matter.

Note that the codebase is mixed: an `eslint --fix` pass (commit `998042e`)
brought some files into line while others still have semicolon-less imports.
Don't reformat a file wholesale just to normalize it — that buries real changes
in noise.

## Deployment

Deploys automatically to Netlify on push to master. Configuration in `netlify.toml`.

## Current Status Notes

### Readability pass (branch `2026-design-ui-improvements`, 2026-08)
Member feedback was that body copy and links across the site read too small
and too light on both desktop and mobile. Conventions established in this
pass — apply them to any new page/section, not just where they're already
in place:
- **Body copy**: article-style prose colored `BODY_TEXT` (`#4A473F`) — the
  `bodyP` const on each page, plus any `<ul>`/`<p>` styled the same way — is
  20px/weight 500 (19px/500 for FAQ answers on `/resources` specifically).
  This does not apply to `MUTED` (`#6B6860`) secondary text (asides,
  small-print, list descriptions, photo captions), which stays smaller —
  but give it an *explicit* `fontWeight` (500 for anything that isn't purely
  decorative) rather than leaving it unset. Several bugs in this pass came
  from a `<p>`/`<span>` with a `color` but no `fontWeight`, which silently
  inherited the page wrapper's `fontWeight: 300` and rendered lighter than
  intended.
- **Header-band hero `<h1>`** (the pattern used on about/community/dojo/iv/
  friends/news/resources — serif, photo background, `textShadow`): weight
  500, not 400.
- **Links and nav**: nav links 16px/weight 500 (600 when active), footer
  links 17px/weight 500, "Next page: X →" footer links 16px/weight 500.
  No `opacity` on eyebrow/kicker text or footer copy — use a solid color
  instead (opacity read as too faint against both light and dark
  backgrounds).
- **Body margin**: both the MUI `CssBaseline` override and `Head2026`'s
  inline `<style>` explicitly zero the browser's default 8px `body`
  margin — don't remove either without re-checking layout at the page edges.
- **Old MUI theme** (`theme.js`): `body1`/`body2` typography variants were
  previously undefined (falling back to MUI's small defaults) — now set to
  1.15rem/weight 500 and 1rem/weight 500. The `MuiCssBaseline` override sets
  raw `<p>`/`<a>` styles too (weight 500 body text, underlined links with a
  hover-darken state), so markdown-rendered content picks these up
  automatically.

### 2026 redesign pages — shared chrome (`src/components/design2026/chrome.js`)
The redesigned pages (index, about, community, web, dojo, iv, resources,
friends, news, thecall, get-involved) are self-contained (do NOT use
`<Layout>`/MUI theme) and share one module for design tokens
(serif/sans/color constants), `Grain2026`, `Nav2026` (pass `active="/path"`;
collapses to a hamburger below 920px), `Footer2026`, `Head2026` (meta +
title/description), `PhotoCredit` (hover tooltip), `headerKicker` (the shared
eyebrow style), and `HeaderBand` — the photo/veil/kicker/h1 band every
interior page opens with. Prefer `HeaderBand` over hand-rolling a header:
props are `image`, `focus`, `credit`, `kicker`, `title`, `titleSize`
(`large`/`standard`/`compact`, or a raw clamp), `width`, `veil`
(`deep`/`news`), plus children for a lead paragraph (style with
`headerLead`). Edit chrome.js to change nav links or the footer everywhere
at once. Fonts (Cormorant Garamond, DM Sans)
are self-hosted via `@fontsource` imports at the top of chrome.js — not
loaded from Google Fonts. Self-hosting avoids an async CDN fetch that
previously caused a layout-jitter bug: as different font weights arrived at
different times, the fixed-position nav's rendered height nudged slightly on
each swap-in, which showed up as visible jumping since the nav never
reflows now (`Nav2026` has a fixed `height: 66px`; that number is repeated as
`marginTop` on every 2026 page's header band, as the mobile menu's `top`, and
as `NAV_HEIGHT` in index.js — move them together. It is unrelated to
`.anchorOffset`/`top:-74px`, which clear the *MUI* AppBar on old-theme pages).
Below 920px, `Nav2026`
collapses to a hamburger menu; on mobile all links — including
Resources/Friends/News — render as plain top-level items (no nested "More"
toggle, since the menu already has vertical room to spare there). Above
920px, Resources/Friends/News stay tucked behind a "More" dropdown to save
horizontal space. The logo is a transparent `static/design2026/logo.png`
(no mix-blend-mode hacks). Remaining old-theme pages (practices, contact,
history, orientation, programs, branding, series pages) still use the MUI
`<Layout>`, whose AppBar/Layout was restyled toward the 2026 look (same logo
+ grain); of those only practices and the series pages are linked from a
2026 page, the rest are orphans. Header photos are one per page: hero (home),
crystals-header (about), turkeytail-log (community), fungus-trunk (web),
luminaria-row (dojo), willow (iv and thecall), moss-roots (friends),
rockfield (resources), pond-leaves (news), luminaria-field (funding
announcement). get-involved keeps the
working Buttondown form and the `#newsletter` / `#connection-calls` anchors;
the Connection Call date and registration URL both live in
`src/components/blurb-connectioncall.js` (`<BlurbConnectionCall />` renders the
"Our next IS Connection Call is on ..." sentence in the hero, and the "Join a
Connection Call" button imports `CONNECTION_CALL_URL` from the same file) —
that file is the only place to edit when a new call is scheduled, and keeping
both there is what stops the button link from drifting out of sync with the
date. Master uses the same component, so the two branches stay in step.

### `/resources` page — 2026 redesign, merged with the old FAQ page
`src/pages/questions.js` (FAQ) was retired and folded into `resources.js`
(`/questions` now redirects to `/resources#faq` — see netlify.toml); the old
Media Appearances list moved to `/news` instead. Both the practices list and
the FAQ render as collapsed `<details>` (class `rsc-item`, styled via a
scoped `<style>` block in the page) for compactness — each practice kept
its original anchor id so old newsletter links (e.g.
`resources#empathy-circling`) still resolve; browsers auto-open a closed
`<details>` when navigating to a fragment inside it, so no extra JS is
needed for that. A small effect redirects the stale `#media` hash to `/news`.
Practice/FAQ `<summary>` text (`practiceSummary`/`faqSummary`) is 1.4rem.

### Home page (`src/pages/index.js`) — 2026 redesign (branch `2026-design`)
Self-contained page ported from a Claude Design mockup, using the shared
2026 chrome above, images in `static/design2026/`. Section rhythm alternates
main content (light, informational) with interstitials (darker, atmospheric):
Hero → three moves → About (links to /about) → mission → nav-to-spaces cards
(3, not 4) → testimonials → call to action → footer. Torn-paper edges are now
baked into the section images themselves rather than a generic CSS mask:
`wood-band.png` (three moves) and `ice-torn.png` (mission) carry transparent,
ragged top/bottom edges in their own alpha channel — the wood band overlaps
the hero via a negative margin, and ice-torn.png's edges just reveal the
cream page background around it. No reusable torn-edge component exists
anymore (the old SVG-mask `torn-section.js` was removed as unused).
Newsletter signup and Connection Call sections were moved to `/get-involved`
(styled blocks with anchors `#newsletter` and `#connection-calls`).

### `/web` page
`src/pages/web.js` renders content from `src/md/web.md` — "Join the IS Web" page describing the IS relational web, programs, and membership requirements. No signup button; the member app at `https://app.intentionalsociety.org` is linked as a reference for existing members in the "IS Web App" section.

### `/community` page — 2026 redesign
Same self-contained pattern as `index.js`/`about.js` (own nav/footer, no
Layout/MUI theme): dark crystals-photo header band ("A space full of
relationships that matter"), then an article body with the purpose-statement
blockquote, the community-members "tree" illustration, and How to Join /
Belonging sections, closing with a "Get involved" button and the shared
footer. No longer markdown-driven — `src/md/community.md` was removed and
its copy ported directly into JSX.

### `/dojo` and `/iv` pages — 2026 redesign
Same self-contained pattern (own nav/footer). `dojo.js` drops the old
strikethrough-"Practice" title in favor of a header-band kicker + blurb
("A skill-building space for developmental-relational practice") over
`dojo-header.webp` (a Japanese garden/dojo photo, credited in a small
caption bottom-right of the header — keep the credit if the image
changes). `iv.js` reuses `waterfall.jpg` as its header image. Both keep
their existing copy and internal links (Developmental Practice Series,
Being With It All, Connection Call, etc.) and end with a "Next page →"
link, matching the old pages' structure.
