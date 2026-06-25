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

**Markdown content pattern**: Pages can render content from `src/md/*.md` files via `gatsby-transformer-remark`. The page component queries the markdown file via GraphQL and renders with `dangerouslySetInnerHTML`. See `src/pages/web.js` or `src/pages/community.js` for examples. When converting an HTML page to markdown, do it in two commits: first the mechanical conversion (new `.md` file + rewired `.js`), then a separate commit for any copy rewrite, so content changes get a clean diff.

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

### 2026 design system (branch `2026-design`)
A long-lived design branch that imports the look of Shaun's prototype
(`profound-gumdrop-2790ec.netlify.app`) onto the live site's content. Key pieces:
- **Fonts**: Cormorant Garamond (display headings h1–h3) + DM Sans (body, h4–h6),
  self-hosted via `@fontsource`. Loaded in `layout.js`.
- **Palette/tokens**: warm palette defined in `theme.js` (teal `#2E6B4F`, warm-white
  `#F8F5EF` background) and as `--is-*` CSS variables in `global.module.css` for use
  in CSS modules. Greener teal replaces the old `#24818E`.
- **Grain texture**: `body::before` overlay in `layout.module.css`
  (`/images/design2026/grain.png`, multiply blend) sits subtly over every page.
- **Chrome**: `is-appbar.js` is a translucent blurred warm-white nav (round logo +
  serif wordmark + teal "Get Involved" CTA). `is-footer.js` is a new 3-column footer
  rendered site-wide by `layout.js` (which gained a `fullBleed` prop to let the
  homepage hero sit under the fixed nav).
- **Homepage** (`src/pages/index.js`): rebuilt section-for-section from the prototype
  (hero / about / ice quote / breath / four photo-path cards / testimonials /
  newsletter / stats / connection CTA) using real site content + internal links.
  Section styles live in `src/styles/home2026.module.css`; torn-paper dividers come
  from the reusable `src/components/torn-edge.js` (variants a–d).
- **Photography**: `/static/images/design2026/` (downloaded from the prototype;
  credits Bill + Karla). `squid.jpg` was absent on the prototype, so the connection
  CTA uses the prototype's gradient fallback.
- **Content still to confirm before production**: testimonial names (consent), the
  stats figures (esp. "250+ members"), and the connection-call section deliberately
  links to `/get-involved#connection-calls` rather than baking in a day/time.
- Other content pages inherit the new theme automatically and have not yet been
  individually restyled — that's the next iteration.

### `/web` page
`src/pages/web.js` renders content from `src/md/web.md` — "Join the IS Web" page describing the IS relational web, programs, and membership requirements. No signup button; the member app at `https://app.intentionalsociety.org` is linked as a reference for existing members in the "IS Web App" section.

### `/community` page
`src/pages/community.js` renders content from `src/md/community.md` — community description, Sunday Hub calls, and how to join. Includes a "Back to home page" link in the JSX layer.
