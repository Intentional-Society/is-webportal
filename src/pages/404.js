import React from 'react';
import { Link } from 'gatsby';
import {
  serif, sans, ACCENT, ACCENT_DARK, INK, MUTED, headerKicker,
  Head2026, Page2026,
  NAV_OFFSET,
} from '../components/design2026/chrome';

// 2026 redesign of the 404 page — brought onto the shared chrome so it
// doesn't look like a leftover from the old design when someone lands here.

// This page's own words. No header band here, so only the document head reads
// them.
const PAGE = {
  title: 'Page not found',
  metaDescription: "The page you're looking for doesn't exist.",
};

const quickLinks = [
  { text: 'About', to: '/about' },
  { text: 'Community', to: '/community' },
  { text: 'Dojo', to: '/dojo' },
  { text: 'Get involved', to: '/get-involved' },
];

const NamedDefault = () => (
  <Page2026>

    {/* Not an Article2026: this body is a single centred block filling the
        viewport, not a reading column. */}
    <main style={{
      position: 'relative', zIndex: 3, marginTop: NAV_OFFSET, minHeight: `calc(100vh - ${NAV_OFFSET})`,
      display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      padding: '4rem 2rem',
    }}>
      <div style={{ maxWidth: '680px' }}>
        <div style={{ ...headerKicker, color: MUTED }}>404</div>
        <h1 style={{
          fontFamily: serif, fontWeight: 400, lineHeight: 1.2, fontSize: '2.5rem',
          color: INK, margin: '0 0 1.2rem',
        }}>
          This path hasn't been <em style={{ color: ACCENT }}>walked yet</em>
        </h1>
        <p style={{ fontSize: '20px', fontWeight: 500, color: MUTED, margin: '0 0 2rem', lineHeight: 1.7 }}>
          The page you're looking for doesn't exist — maybe it moved, or the link was
          off. Let's get you back to solid ground.
        </p>
        <Link to="/" style={{
          display: 'inline-block', padding: '0.8rem 2rem', background: ACCENT,
          color: '#fff', textDecoration: 'none', fontFamily: sans, fontSize: '16px',
          fontWeight: 500, letterSpacing: '0.03em', borderRadius: '3px', marginBottom: '2.5rem',
        }}>Back to home</Link>

        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem 1.5rem',
          fontFamily: sans, fontSize: '15px', fontWeight: 500,
        }}>
          {quickLinks.map((l, i) => (
            <React.Fragment key={l.text}>
              {i > 0 && <span style={{ color: MUTED }}>·</span>}
              <Link to={l.to} style={{ color: ACCENT_DARK, textDecoration: 'none' }}>{l.text}</Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>

  </Page2026>
);

export default NamedDefault;

export const Head = () => (
  <Head2026
    {...PAGE}
  />
);
