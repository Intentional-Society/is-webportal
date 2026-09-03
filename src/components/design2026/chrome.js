import React from 'react';
import { Link } from 'gatsby';
import { FullBleedPhoto } from './photo';
// Self-hosted fonts (matches the weights previously loaded from Google
// Fonts: Cormorant Garamond 300/400/500 + 300/400 italic, DM Sans
// 300/400/500/600). Self-hosting avoids the async CDN fetch entirely, so
// weights are available immediately instead of swapping in mid-render —
// that swap-in was the cause of the nav-jitter bug (the fixed-position
// nav's box would nudge in height as each font weight arrived).
import '@fontsource/cormorant-garamond/300.css';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/300-italic.css';
import '@fontsource/cormorant-garamond/400-italic.css';
// 500-italic backs headerDescription, which is weight 500. Without it the
// browser matches down to 400-italic and the description line renders lighter
// than the weight it asks for.
import '@fontsource/cormorant-garamond/500-italic.css';
// 700-italic backs the emphasised words in the homepage mission verse. Without
// a real bold-italic face the browser synthesises one by slanting and smearing
// the 400 weight, which looks noticeably worse at display size.
import '@fontsource/cormorant-garamond/700-italic.css';
import '@fontsource/dm-sans/300.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/600.css';

// Shared chrome for the 2026-redesign pages (index, about, community, dojo, iv):
// design tokens, fixed nav, footer, and the Head font/meta boilerplate.
// These pages are self-contained (no Layout/MUI theme) — see CLAUDE.md.

export const serif = "'Cormorant Garamond', Georgia, serif";
export const sans = "'DM Sans', 'Gudea', sans-serif";
export const ACCENT = '#2E6B4F';
export const ACCENT_DARK = '#1A4232';
export const INK = '#2A2A24';
export const MUTED = '#6B6860';
export const BODY_TEXT = '#4A473F';
export const PAPER = '#F8F5EF';
// Warm brown for section headings — the one voice above body copy that isn't
// ink or accent.
export const HEADING = '#5C4A3A';

// Height of the fixed Nav2026 bar. Anything that has to sit below the nav or
// scroll clear of it derives from this — page header bands (marginTop), the
// mobile menu's top edge, scrollMarginTop on anchor targets. Don't hardcode
// the number anywhere else; change it here and the whole site follows.
export const NAV_HEIGHT = 66;
export const NAV_OFFSET = `${NAV_HEIGHT}px`;

// Canonical origin, no trailing slash. Head2026 builds absolute canonical and
// og:url values from it — share metadata can't use relative paths. It lives
// here rather than in gatsby-config's siteMetadata because Gatsby's Head API
// runs outside the page's React context, so a Head component can't run
// useStaticQuery to read that.
export const SITE_URL = 'https://www.intentionalsociety.org';

// Default share card: the homepage hero, the trail over the hill.
export const SHARE_IMAGE = '/design2026/share-hero.jpg';

const navLinks = [
  { text: 'About', to: '/about' },
  { text: 'Web', to: '/web' },
  { text: 'Community', to: '/community' },
  { text: 'Dojo', to: '/dojo' },
  { text: 'Ventures', to: '/iv' },
];

const moreLinks = [
  { text: 'Resources', to: '/resources' },
  { text: 'Friends', to: '/friends' },
  { text: 'News', to: '/news' },
  { text: 'Podcast', to: '/podcast' },
];

// Shared "eyebrow" / kicker label — solid color, no opacity, so it stays
// legible against photo headers on both desktop and mobile. Used by
// HeaderBand's optional `kicker` prop and by the 404 page's label; the
// interior pages that once carried kickers above their titles no longer do.
export const headerKicker = {
  fontFamily: sans, fontSize: '14px', letterSpacing: '0.18em',
  textTransform: 'uppercase', fontWeight: 600, color: '#E8DFD0',
  marginBottom: '1.2rem',
};

// ── Article text tokens ───────────────────────────────────────────────────
// The styles an article body is written in. Each of these was declared
// separately at the top of a dozen-odd pages, which is how /resources ended up
// with a body paragraph 0.6rem apart from everyone else's. Spread to vary one
// value at a call site — `{...sectionHeading, margin: '2.5rem 0 1.4rem'}` — so
// the deviation is visible as a deviation.

// Article-style prose: 20px/500 over BODY_TEXT. Not for MUTED secondary text
// (asides, captions, small print), which stays smaller — but give that an
// explicit fontWeight too, or it inherits the page wrapper's 300.
export const bodyP = { fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 };

// A bulleted list in body copy: bodyP's type, indented, with air between
// items. `margin`'s bottom value is the one that varies between pages.
export const bodyUl = { fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.4rem 1.4rem', padding: 0 };
export const bodyLi = { marginBottom: '0.4rem' };

// The h2 that opens a section of an article body.
export const sectionHeading = {
  fontFamily: serif, fontWeight: 300, lineHeight: 1.2,
  fontSize: 'clamp(1.5rem,2.6vw,2rem)', color: HEADING, margin: '0 0 1.4rem',
};

// Inline links inside body copy. ACCENT_DARK rather than ACCENT: at body size
// the lighter green doesn't hold up against BODY_TEXT.
export const linkStyle = { color: ACCENT_DARK };

// The short centred rule between sections. `margin` is the one thing that
// varies (a section that opens with a figure wants no leading gap).
export const Divider = ({ margin = '3rem auto' }) => (
  <hr style={{ border: 'none', borderTop: '1px solid rgba(42,42,36,0.12)', margin, width: '120px' }} />
);

// Paper-grain overlay, applied once per page above all content.
export const Grain2026 = () => (
  <div style={{
    position: 'fixed', inset: 0, backgroundImage: 'url(/design2026/grain.png)',
    backgroundSize: '500px 500px', backgroundRepeat: 'repeat',
    mixBlendMode: 'multiply', opacity: 0.38, pointerEvents: 'none', zIndex: 90,
  }} />
);

// Photo-credit hover tooltip: put className="credit-host" (plus
// position:'relative') on the photo's wrapper — a header, section, figure,
// or card div — and render <PhotoCredit name="Bill" /> as its last child.
// On touch devices (no hover) the tooltip stays visible, via the
// `@media (hover: none)` rule below (defined once, in Nav2026's stylesheet,
// since every 2026 page already renders <Nav2026 />).
export const PhotoCredit = ({ name, inset = 16 }) => (
  <div style={{ position: 'absolute', right: inset, bottom: inset, zIndex: 4 }}>
    <div className="credit-tip" style={{
      position: 'absolute', right: 0, bottom: 0, whiteSpace: 'nowrap',
      background: '#FAF8F3', color: '#2A2A24', fontFamily: sans, fontSize: '12px',
      fontWeight: 500, padding: '0.4rem 0.65rem', borderRadius: '3px',
      boxShadow: '0 6px 22px rgba(8,12,16,0.3)',
    }}>Photograph by {name}, community member</div>
  </div>
);

// The two dark veils that sit over a header photo so white type stays legible.
// `deep` is the interior-page default; `news` is a touch lighter, used by the
// News family (news index, articles) where the photos are already darker.
const VEILS = {
  deep: 'linear-gradient(180deg, rgba(14,18,22,0.62) 0%, rgba(14,18,22,0.55) 50%, rgba(14,18,22,0.68) 100%)',
  news: 'linear-gradient(180deg, rgba(14,18,22,0.6) 0%, rgba(14,18,22,0.5) 50%, rgba(14,18,22,0.66) 100%)',
};

// Two title sizes rather than a bespoke clamp per page — pages had drifted
// into nine different clamps, several by copy-paste rather than intent.
// `standard` is the default, sized to read as confidently as About's `large`
// without quite matching it. Community and Friends pass an explicit smaller
// raw clamp() instead of a named size — their headers carry extra content
// (a blockquote, a long list) that a bigger title crowded.
const TITLE_SIZES = {
  large: 'clamp(2.2rem,3.8vw,3.4rem)',
  standard: 'clamp(2.2rem,4.2vw,3.2rem)',
};

// Italic description line under a band's title. Deliberately not exported:
// pass the text as the band's `description` prop instead of styling a <p> at
// the call site.
const headerDescription = {
  color: '#FAF8F3', fontSize: '1.3rem', fontWeight: 500, fontStyle: 'italic',
  lineHeight: 1.6, margin: '0 auto', maxWidth: '600px',
  textShadow: '0 1px 12px rgba(8,12,16,0.8)',
};

// The header band every interior 2026 page opens with: full-bleed photo under
// a dark veil, a serif h1, optionally a description line beneath it. Props
// cover what genuinely differs page to page; everything else is fixed here on
// purpose, so the bands stay a family.
//
//   <HeaderBand image="/design2026/moss-roots.jpg" credit="Bill"
//     title="Fellow travelers in the wider ecosystem" />
//
// `description` is the italic line under the title — a string, or any node when
// it needs a link inside. `kicker` renders an eyebrow label above the h1. No
// page passes one now — the subpage kickers were dropped as redundant with the
// nav — but the prop still works if a band ever needs one again.
// `focus` is the CSS background-position ('center 40%'); `titleSize` a key of
// TITLE_SIZES, or a raw font-size/clamp() string for a genuine one-off; `width`
// the text column's max width; `veil` a key of VEILS above. Omit `credit` for a
// header whose photo isn't a community member's.
export const HeaderBand = ({
  image, focus = 'center', credit, kicker, title, description,
  titleSize = 'standard', width = '640px', veil = 'deep', dateLabel,
}) => (
  <header className="credit-host" style={{
    position: 'relative', marginTop: NAV_OFFSET, minHeight: '340px', display: 'flex',
    alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden',
    background: '#1c2730', // fallback behind the photo while it loads
  }}>
    <FullBleedPhoto image={image} focus={focus} />
    {credit && <PhotoCredit name={credit} />}
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, background: VEILS[veil],
    }} />
    <div style={{ position: 'relative', zIndex: 2, maxWidth: width, padding: '4rem 2rem' }}>
      {kicker && <div style={headerKicker}>{kicker}</div>}
      <h1 style={{
        fontFamily: serif, fontWeight: 500, lineHeight: 1.25,
        fontSize: TITLE_SIZES[titleSize] || titleSize,
        color: '#FAF8F3', textShadow: '0 2px 24px rgba(8,12,16,0.8)',
        margin: description ? '0 0 1.2rem' : 0,
      }}>{title}</h1>
      {/* Small caps date line under the title, used by the two News article
          pages instead of a kicker above it — doesn't affect the h1's margin
          the way a `description` does. */}
      {dateLabel && (
        <div style={{
          fontFamily: sans, fontSize: '14px', letterSpacing: '0.16em', textTransform: 'uppercase',
          fontWeight: 600, color: '#E8DFD0', marginTop: '1.1rem',
        }}>{dateLabel}</div>
      )}
      {description && <p style={headerDescription}>{description}</p>}
    </div>
  </header>
);

// Fixed top nav. `active` is the path of the current page ('/about', '/dojo', …);
// omit it on the homepage. Collapses to a hamburger below 920px — the desktop
// row needs ~890px for six links plus the logo, More and CTA, so the
// breakpoint carries only ~30px of slack: adding or renaming a nav link means
// re-checking it. "More" opens a dropdown with the secondary pages
// (Resources, Friends, News, Podcast).
export const Nav2026 = ({ active }) => {
  const [open, setOpen] = React.useState(false);
  const [moreOpen, setMoreOpen] = React.useState(false);
  React.useEffect(() => {
    if (!moreOpen) return undefined;
    const close = e => { if (!e.target.closest('.nav2026-more')) setMoreOpen(false); };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [moreOpen]);
  const moreActive = moreLinks.some(l => l.to === active);
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: NAV_OFFSET,
      boxSizing: 'border-box', padding: '0 2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: PAPER, borderBottom: '1px solid rgba(42,42,36,0.06)',
    }}>
      <style>{`
        .nav2026-links { display: flex; align-items: center; gap: 1.6rem; list-style: none; margin: 0; padding: 0; }
        .nav2026-burger { display: none; background: none; border: none; cursor: pointer; padding: 6px; }
        .nav2026-more { position: relative; }
        .nav2026-more-menu { position: absolute; top: calc(100% + 12px); right: -10px;
          background: ${PAPER}; border: 1px solid rgba(42,42,36,0.1); border-radius: 4px;
          box-shadow: 0 8px 24px rgba(42,42,36,0.12); list-style: none; margin: 0;
          padding: 0.4rem 0; min-width: 130px; }
        .nav2026-more-menu li { padding: 0; }
        .nav2026-more-menu a { display: block; padding: 0.45rem 1.1rem; }
        .nav2026-more-mobile-item { display: none; }
        @media (max-width: 920px) {
          .nav2026-links { display: none; position: fixed; top: ${NAV_OFFSET}; left: 0; right: 0;
            flex-direction: column; align-items: flex-start; gap: 0; background: #F8F5EF;
            border-bottom: 1px solid rgba(42,42,36,0.12); padding: 0.4rem 0 1rem; }
          .nav2026-links.nav2026-open { display: flex; }
          .nav2026-links li { padding: 0.55rem 2rem; }
          .nav2026-burger { display: block; }
          /* On mobile the hamburger menu already has plenty of vertical room,
             so "More" collapses away: hide the desktop dropdown trigger and
             show Resources/Friends/News as plain links in the main list. */
          .nav2026-more-desktop { display: none; }
          .nav2026-more-mobile-item { display: block; }
        }
        .credit-host { position: relative; }
        .credit-tip { opacity: 0; transform: translateY(3px); transition: opacity 180ms ease, transform 180ms ease; pointer-events: none; }
        .credit-host:hover .credit-tip, .credit-host:focus-within .credit-tip { opacity: 1; transform: translateY(0); }
        @media (hover: none) { .credit-tip { opacity: 1; transform: none; } }
      `}</style>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', color: INK, fontFamily: sans }}>
        <img src="/design2026/logo.png" alt="" style={{ width: '40px', height: '40px', objectFit: 'contain', display: 'block' }} />
        <span style={{ fontFamily: serif, fontSize: '18px' }}>Intentional Society</span>
      </Link>
      <button className="nav2026-burger" aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open} onClick={() => setOpen(!open)}>
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          {open
            ? <path d="M4 4 L18 18 M18 4 L4 18" stroke={INK} strokeWidth="2" strokeLinecap="round" />
            : <path d="M3 5.5 H19 M3 11 H19 M3 16.5 H19" stroke={INK} strokeWidth="2" strokeLinecap="round" />}
        </svg>
      </button>
      <ul className={`nav2026-links${open ? ' nav2026-open' : ''}`} style={{ fontFamily: sans }}>
        {navLinks.map(l => (
          <li key={l.text}>
            <Link to={l.to} style={{
              textDecoration: 'none', fontSize: '16px',
              color: l.to === active ? ACCENT_DARK : MUTED,
              fontWeight: l.to === active ? 600 : 500,
            }}>
              {l.text}
            </Link>
          </li>
        ))}
        <li className="nav2026-more nav2026-more-desktop">
          <button onClick={() => setMoreOpen(!moreOpen)} aria-expanded={moreOpen} style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            fontFamily: sans, fontSize: '16px',
            color: moreActive ? ACCENT_DARK : MUTED,
            fontWeight: moreActive ? 600 : 500,
            display: 'flex', alignItems: 'center', gap: '4px',
          }}>
            More
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"
              style={{ transform: moreOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }}>
              <path d="M2 3.5 L5 6.5 L8 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          {moreOpen && (
            <ul className="nav2026-more-menu">
              {moreLinks.map(l => (
                <li key={l.text}>
                  <Link to={l.to} style={{
                    textDecoration: 'none', fontSize: '16px',
                    color: l.to === active ? ACCENT_DARK : MUTED,
                    fontWeight: l.to === active ? 600 : 500,
                  }}>
                    {l.text}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        {/* Mobile only: Resources/Friends/News as plain links in the main list,
            rather than tucked behind a "More" toggle (see .nav2026-more-mobile-item). */}
        {moreLinks.map(l => (
          <li key={l.text} className="nav2026-more-mobile-item">
            <Link to={l.to} style={{
              textDecoration: 'none', fontSize: '16px',
              color: l.to === active ? ACCENT_DARK : MUTED,
              fontWeight: l.to === active ? 600 : 500,
            }}>
              {l.text}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/get-involved" style={{
            background: ACCENT, color: '#fff', padding: '0.55rem 1.3rem', borderRadius: '4px',
            fontSize: '15px', fontWeight: 600, textDecoration: 'none',
          }}>Get involved</Link>
        </li>
      </ul>
    </nav>
  );
};

// Three columns of four links each, in reading order — see Footer2026.
const footerColumns = [
  [
    { text: 'About', to: '/about' },
    { text: 'Web', to: '/web' },
    { text: 'Community', to: '/community' },
    { text: 'Practice Dojo', to: '/dojo' },
  ],
  [
    { text: 'Ventures', to: '/iv' },
    { text: 'Practices', to: '/resources#relational-practices' },
    { text: 'FAQ', to: '/resources#faq' },
    { text: 'Friends', to: '/friends' },
  ],
  [
    { text: 'News', to: '/news' },
    { text: 'Podcast', to: '/podcast' },
    { text: 'Get Involved', to: '/get-involved' },
    { text: 'Updates', to: '/get-involved#newsletter' },
  ],
];

export const Footer2026 = () => (
  <footer style={{ background: '#F2EDE4', borderTop: '1px solid rgba(42,42,36,0.08)', padding: '3rem 2rem', fontFamily: sans, overflowX: 'hidden' }}>
    <style>{`
      .footer2026-grid { display: grid; grid-template-columns: 1fr 1.7fr; gap: 2.5rem; }
      .footer2026-links { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0 1.2rem; }
      @media (max-width: 760px) { .footer2026-links { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 560px) {
        .footer2026-grid { grid-template-columns: 1fr; gap: 2rem; }
        .footer2026-links { grid-template-columns: 1fr; }
      }
    `}</style>
    <div className="footer2026-grid" style={{ maxWidth: '860px', margin: '0 auto' }}>
      <div>
        <img src="/design2026/logo.png" alt="" style={{ width: '44px', height: '44px', objectFit: 'contain', display: 'block', marginBottom: '0.7rem' }} />
        <h3 style={{ fontFamily: serif, fontWeight: 500, fontSize: '1.15rem', color: INK, margin: '0 0 0.3rem' }}>Intentional Society</h3>
        <p style={{ fontSize: '16px', fontWeight: 500, color: MUTED, margin: 0 }}>
          <span style={{ display: 'block' }}>Inner Development</span>
          <span style={{ display: 'block' }}>Wise Action</span>
          <span style={{ display: 'block' }}>Human Connection</span>
        </p>
      </div>
      <div>
        <h4 style={{ fontFamily: serif, fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: MUTED, margin: '0 0 1rem' }}>Explore</h4>
        <div className="footer2026-links">
          {footerColumns.map((col, i) => (
            <ul key={i} style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {col.map(l => (
                <li key={l.text} style={{ fontSize: '17px', fontWeight: 500, marginBottom: '0.65rem' }}>
                  <Link to={l.to} style={{ color: MUTED, textDecoration: 'none' }}>{l.text}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
    <div style={{
      maxWidth: '720px', margin: '2rem auto 0', paddingTop: '1.5rem',
      borderTop: '1px solid rgba(42,42,36,0.06)', fontSize: '14px', fontWeight: 500, color: MUTED,
    }}>
      © 2020–2026 Intentional Society. All rights reserved.
    </div>
  </footer>
);

// ── Page shell ────────────────────────────────────────────────────────────
// Everything an interior page has in common outside its own words: the
// wrapper, the grain overlay, the nav, and the footer. Twenty pages carried
// byte-identical copies of this before, so "self-contained page" meant
// re-typing the same four lines and one long style object every time.
//
//   <Page2026 active="/dojo">
//     <HeaderBand … />
//     <Article2026>…the page's actual copy…</Article2026>
//   </Page2026>
//
// `active` is the nav path to mark ('/about', '/dojo', …); omit it where no
// nav item matches. `style` merges over the wrapper for a page whose body is
// set differently — the homepage is sans-based, not serif — rather than
// forcing every page through one type default.
const pageShell = {
  fontFamily: serif, fontWeight: 300, color: INK, lineHeight: 1.7,
  background: PAPER, position: 'relative', overflowX: 'hidden',
};

export const Page2026 = ({ active, style, children }) => (
  <div style={{ ...pageShell, ...style }}>
    <Grain2026 />
    <Nav2026 active={active} />
    {children}
    <Footer2026 />
  </div>
);

// The centred reading column an article page's copy sits in. Pages that aren't
// articles (the homepage's full-bleed sections, 404's centred block) render
// their own <main> inside Page2026 instead of using this.
export const Article2026 = ({ width = '720px', children }) => (
  <main style={{ position: 'relative', zIndex: 3, background: PAPER, padding: '4rem 2rem 5rem' }}>
    <article style={{ maxWidth: width, margin: '0 auto' }}>{children}</article>
  </main>
);

// The rule-and-link that closes an article page, returning the reader to a
// parent the nav can't express (a news post to /news, a practice series to
// /dojo). Pass `href` instead of `to` for a destination off the site.
export const BackLink = ({ to, href, children }) => {
  const style = {
    fontFamily: sans, fontSize: '16px', fontWeight: 500, color: ACCENT_DARK,
    textDecoration: 'none', borderBottom: '1px solid rgba(26,66,50,0.3)',
  };
  return (
    <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(42,42,36,0.08)' }}>
      {href
        ? <a href={href} style={style}>{children}</a>
        : <Link to={to} style={style}>{children}</Link>}
    </div>
  );
};

// Gatsby Head contents shared by all 2026 pages: meta + per-page title/description.
//
// Takes the same PAGE object each page hands its HeaderBand, so the tab and the
// header band can't drift apart: `title` and `description` are the page's own
// words, and `metaTitle`/`metaDescription` override them only where the head
// genuinely needs different ones — a tab and a search result want a short label
// and a whole sentence, where a band can carry a phrase that only reads under
// its photo. The site name is appended here rather than typed into every page;
// pass `siteName: false` for a title that already contains it.
//
// Fonts are self-hosted via the @fontsource imports above (bundled with the
// page's JS, not fetched from a CDN). These pages don't use MUI's
// <CssBaseline/>, so nothing else resets the browser's default 8px body
// margin — do that here since Head2026 renders into <head> on every 2026 page.
//
// This is also where NAV_HEIGHT crosses into CSS. Inline styles can import the
// constant directly; a .module.css file can't, so it reads --is-nav-height
// instead of hardcoding a number that then drifts from the nav it's clearing.
// `pathname` comes from the `location` prop Gatsby hands every Head export —
// `export const Head = ({ location }) => <Head2026 {...PAGE} pathname={location.pathname} />`.
// It's threaded rather than read from a hook because the Head API renders
// outside the page's React context, so useLocation isn't available there.
// Omitting it just drops the canonical and og:url tags.
//
// `image` overrides the default share card for a page that wants its own;
// `ogType` is 'article' on the news posts and 'website' everywhere else.
export const Head2026 = ({
  title, description, metaTitle, metaDescription, siteName = true,
  pathname, image = SHARE_IMAGE, ogType = 'website',
}) => {
  const tabTitle = metaTitle || title;
  const fullTitle = siteName ? `${tabTitle} — Intentional Society` : tabTitle;
  const summary = metaDescription || description;
  // trailingSlash is "never" in gatsby-config, so match that here — except at
  // the root, where the canonical form keeps its slash.
  const url = pathname
    ? `${SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`
    : null;
  const imageUrl = `${SITE_URL}${image}`;
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={summary} />
      {url && <link rel="canonical" href={url} />}

      {/* Open Graph — Slack, Discord, LinkedIn, iMessage, Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Intentional Society" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={summary} />
      <meta property="og:image" content={imageUrl} />
      {url && <meta property="og:url" content={url} />}

      {/* Twitter/X reads its own namespace and falls back to og: for the rest */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={summary} />
      <meta name="twitter:image" content={imageUrl} />

      <style>{`
        :root { --is-nav-height: ${NAV_HEIGHT}px; }
        * { box-sizing: border-box; }
        body { margin: 0; -webkit-font-smoothing: antialiased; }
      `}</style>
    </>
  );
};
