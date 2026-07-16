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
- MUI v5 components for UI (AppBar, Typography, Button, etc.)
- Emotion for CSS-in-JS (via `gatsby-plugin-emotion`)
- CSS Modules (`.module.css`) for scoped styles
- Custom MUI theme in `src/gatsby-theme-material-ui-top-layout/theme.js` (primary: teal #24818E, background: #E8F0EC)

**Heading scale** (defined in `theme.js`, single source of truth for both MUI Typography and raw HTML):
- h1: 5rem (reserved, not currently used)
- h2: 3.5rem (page titles)
- h3: 2.125rem (section headings)
- h4: 1.5rem (sub-section headings)
- h5/h6: 1.25rem/1rem (minor headings)
- All headings use Gudea font; CssBaseline applies these styles to raw HTML elements (for markdown content)

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

Prettier is configured with:
- No semicolons
- No arrow function parens when possible
BUT Prettier also adds a lot of unwanted linebreaks into HTML, so we're currently not using it.

## Deployment

Deploys automatically to Netlify on push to master. Configuration in `netlify.toml`.

## Current Status Notes

### Home page (`src/pages/index.js`) — 2026 redesign (branch `2026-design`)
Self-contained page ported from a Claude Design mockup: own fixed nav and footer
(does NOT use `<Layout>`/MUI theme), Cormorant Garamond + DM Sans via Google Fonts
in the `Head` export, images in `static/design2026/`. Section rhythm alternates
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
