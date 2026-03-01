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

**Key components**:
- `src/components/layout.js` - Root layout with navigation
- `src/components/is-appbar.js` - Responsive navigation bar
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

### New stub page: `/web`
`src/pages/web.js` — "The Relational Web" placeholder page with lorem ipsum content. Not linked from the nav yet. Awaiting real content.
