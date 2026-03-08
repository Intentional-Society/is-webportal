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

**Markdown content pattern**: Pages can render content from `src/md/*.md` files via `gatsby-transformer-remark`. The page component queries the markdown file via GraphQL and renders with `dangerouslySetInnerHTML`. See `src/pages/web.js` or `src/pages/developmental-practice-series.js` for examples.

**Key components**:
- `src/components/layout.js` - Root layout with navigation
- `src/components/is-appbar.js` - Responsive navigation bar (wordmark uses custom CSS class, not Typography)
- `src/components/centered-column.js` - Content width wrapper

## Code Style

Prettier is configured with:
- No semicolons
- No arrow function parens when possible
BUT Prettier also adds a lot of unwanted linebreaks into HTML, so we're currently not using it.

## Deployment

Deploys automatically to Netlify on push to master. Configuration in `netlify.toml`.

## Current Status Notes

### Home page (`src/pages/index.js`) — temporary event takeover
As of 2026-02-28, the home page is taken over to promote the 5-Year Celebration event:
- **Event**: "The 5-Year Celebration: Launching a New Era" — March 15, 2026, 1:00 PM Pacific, 90 min via Zoom
- **Registration link**: `https://us02web.zoom.us/meeting/register/8nzxXOk5Rzicpmo5mTMwlQ`
- Hero shows three white h2 lines with responsive `clamp(2rem, 8vw, 3.75rem)` font sizing
- Body: teaser paragraph, first Register button, longer context section (4 paragraphs at 0.85em), second Register button, IsHr, newsletter signup
- **Restore after event**: Unused imports (`Grid`, `BlurbPractice`, `GlobalCSS`) and `imageList` are commented out, not deleted — easy to restore the original page

### `/web` page
`src/pages/web.js` renders content from `src/md/web.md` — "Join the relational web" page describing the IS relational web, programs, and membership requirements. Not linked from the nav yet.
