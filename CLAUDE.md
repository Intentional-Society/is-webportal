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

**One theme.** Every page is a 2026-design page built from
`src/components/design2026/chrome.js`. There is no `<Layout>`, no
`<CenteredColumn>` and no MUI — the chrome module is the shared layer, and
`<Page2026>` is the shell:

```jsx
<Page2026 active="/dojo">
  <HeaderBand image="willow.jpg" credit="Bill" title={PAGE.title} />
  <Article2026>
    <p style={bodyP}>…</p>
    <BackLink to="/dojo">← Back to the Dojo</BackLink>
  </Article2026>
</Page2026>
```

`Page2026` owns the wrapper, `<Grain2026 />`, `<Nav2026 />` and
`<Footer2026 />`; `Article2026` owns the `<main>`/`<article>` reading column.
A page that isn't an article (the homepage's full-bleed sections, 404's
centred block) renders its own `<main>` inside `Page2026` instead. Body copy
uses the tokens `chrome.js` exports — `bodyP`, `sectionHeading`, `linkStyle`,
`<Divider />` — spreading to vary one value (`{...sectionHeading, margin:
'2.5rem 0 1.4rem'}`) rather than redeclaring the whole object. Copy an
existing page (`thecall.js` is the smallest complete example) rather than
inventing a shape.

**Styling stack**:
- Inline styles for page bodies, driven by the tokens exported from `chrome.js`
  (`serif`, `sans`, `ACCENT`, `ACCENT_DARK`, `INK`, `MUTED`, `BODY_TEXT`, `PAPER`)
- CSS Modules (`.module.css`) where a page needs real CSS — currently only
  `practices.module.css`, which styles markdown the page can't reach inline
- Scoped `<style>` blocks inside a page for pseudo-elements, `:hover`, media
  queries, and `<details>` markers (see `resources.js`, `history.js`)

There is no global stylesheet. `Head2026` emits the only site-wide CSS: a
`box-sizing` reset and the `body { margin: 0 }` that replaces the browser
default.

**Page identity**: every page declares one `PAGE` const near the top and hands
it to both its `HeaderBand` and its `Head2026`, so the header and the metadata
can't drift. See "Page metadata" below.

**Markdown content pattern**: `src/pages/practices.js` is the only page that
still renders markdown (`src/md/practices/*.md` through
`gatsby-transformer-remark` and `dangerouslySetInnerHTML`), because its catalog
entries are maintained as documents rather than as JSX. Its type and color live
in `src/styles/practices.module.css`, which mirrors the `chrome.js` tokens by
hand — change one and update the other. Every other page's copy is JSX.

**Page metadata**: each page declares a single `PAGE` const near the top and
feeds it to both its `HeaderBand` and its `Head2026`, so the visible header and
the document head can't drift apart:

```js
const PAGE = {
  title: 'The IS Web',
  description: 'our extended network across the liminal landscape',
  metaDescription: 'The relational web of trust and collaboration around ...',
};
// ...
<HeaderBand title={PAGE.title} description={PAGE.description} ... />
export const Head = () => <Head2026 {...PAGE} />;
```

`Head2026` also emits the share metadata every page needs: Open Graph and
Twitter card tags built from the same title and description, plus a canonical
`<link>`. Two things follow from that:

- **Pass `location` through.** The Head export is
  `({ location }) => <Head2026 {...PAGE} pathname={location.pathname} />`.
  Gatsby's Head API renders outside the page's React context, so a Head
  component can't call `useLocation` — the path has to be threaded from the
  prop Gatsby supplies. Without it the canonical and `og:url` tags are simply
  omitted, so a new page that forgets it fails quietly.
- **`SITE_URL` and `SHARE_IMAGE` live in `chrome.js`**, not in
  `gatsby-config`'s `siteMetadata`, for the same reason: `useStaticQuery`
  isn't available in a Head component. Share URLs must be absolute.

`PAGE` takes two optional keys for this: `image` to override the default share
card (`static/design2026/share-hero.jpg`, the homepage hero), and `ogType`,
which is `'article'` on the two news posts and `'website'` everywhere else.

`metaTitle` and `metaDescription` override `title`/`description` only where the
head genuinely needs different words — a tab wants a short label, a search
result wants a whole sentence, and several band descriptions are fragments that
only read under a title. Where the title works for both, omit `metaTitle`.
`Head2026` appends `" — Intentional Society"` itself; pass `siteName: false` for
a title that already contains it (home, podcast, the funding announcement).
Do not hand-type the suffix.

There is no `gatsby-ssr.js`. One used to inject a site-wide title and
description from `siteMetadata` via `onRenderBody`, which duplicated every
page's own tags — two `<title>` elements per page, the generic one first, which
is the copy a crawler takes. Every page owns its head now; don't reintroduce a
global default.

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
**semicolons and single quotes**, which `.eslintrc.json` enforces as errors.

`yarn lint` is expected to pass clean. It extends `eslint:recommended` and
`plugin:react/recommended`, so `no-undef` and `no-unused-vars` are live —
they catch an import that's been dropped while still in use, which the
build otherwise catches only at the end. Four rules are deliberately off,
and it's worth knowing why before turning any back on:
- `react/no-unescaped-entities` — this is a prose site; it would want
  `&apos;` and `&quot;` through every sentence of copy.
- `react/prop-types` — no PropTypes anywhere, by choice.
- `react/react-in-jsx-scope` — Gatsby 5's JSX transform handles it.
- `react/no-danger` — `practices.js` renders markdown through
  `dangerouslySetInnerHTML` on purpose.

`process` is declared as a global rather than switching on `env.node`: the
only use is webpack's build-time `process.env.NODE_ENV` in `photo.js`, in
code that otherwise runs in the browser.

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
  links 17px/weight 500, "← Back to X" article links 16px/weight 500.
  No `opacity` on eyebrow/kicker text or footer copy — use a solid color
  instead (opacity read as too faint against both light and dark
  backgrounds).
- **Body margin**: `Head2026`'s inline `<style>` zeroes the browser's default
  8px `body` margin for the whole site — don't remove it without re-checking
  layout at the page edges.

### Shared chrome (`src/components/design2026/chrome.js`)
Every page is self-contained and shares one module for design tokens
(serif/sans/color constants), `Grain2026`, `Nav2026` (pass `active="/path"`;
collapses to a hamburger below 920px), `Footer2026`, `Head2026` (meta +
title/description), `PhotoCredit` (hover tooltip), `headerKicker` (the shared
eyebrow style), and `HeaderBand` — the photo/veil/kicker/h1 band every
interior page opens with. Prefer `HeaderBand` over hand-rolling a header:
props are `image`, `focus`, `credit`, `kicker`, `title`, `description` (the
italic line under the title — a string, or a node when it needs a link
inside), `titleSize` (`large`/`standard`/`compact`, or a raw clamp), `width`,
and `veil` (`deep`/`news`). The band renders and styles the description
itself, so don't reach for the (private) `headerDescription` style at a call
site. `HeaderBand` takes no children — every band is title + optional
description. Edit chrome.js to change nav links or the footer everywhere
at once. Fonts (Cormorant Garamond, DM Sans)
are self-hosted via `@fontsource` imports at the top of chrome.js — not
loaded from Google Fonts. Self-hosting avoids an async CDN fetch that
previously caused a layout-jitter bug: as different font weights arrived at
different times, the fixed-position nav's rendered height nudged slightly on
each swap-in, which showed up as visible jumping since the nav never
reflows now (`Nav2026` has a fixed `height: 66px`; that number is repeated as
`marginTop` on every 2026 page's header band, as the mobile menu's `top`, and
as `NAV_HEIGHT` in index.js — move them together).
Below 920px, `Nav2026`
collapses to a hamburger menu; on mobile all links — including
Resources/Friends/News — render as plain top-level items (no nested "More"
toggle, since the menu already has vertical room to spare there). Above
920px, Resources/Friends/News stay tucked behind a "More" dropdown to save
horizontal space. The logo is a transparent `static/design2026/logo.png`
(no mix-blend-mode hacks). Header photos live in `src/images/bands/` — that
directory is what `FullBleedPhoto`'s static query reads, so a new header photo
has to go there and nowhere else. There are more pages than photos now, so
several are reused: hero (home), crystals-header (about, contact),
turkeytail-log (community, programs), fungus-trunk (web), luminaria-row (dojo,
developmental-practice-series), willow (iv, thecall), moss-roots (friends,
history), rockfield (resources, practices), pond-leaves (news,
being-with-it-all), luminaria-field (funding announcement,
exploratory-practice-series), moss (orientation), crescent-butterflyweed
(branding). Worth commissioning more so the reuse can be unwound.
get-involved keeps the
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
Same self-contained pattern as `index.js`/`about.js` (own nav/footer): dark
crystals-photo header band, then an article body with the purpose-statement
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
Being With It All, Connection Call, etc.).
