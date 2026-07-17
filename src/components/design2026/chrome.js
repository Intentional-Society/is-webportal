import React from 'react';
import { Link } from 'gatsby';

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

const navLinks = [
  { text: 'About', to: '/about' },
  { text: 'Community', to: '/community' },
  { text: 'Dojo', to: '/dojo' },
  { text: 'Ventures', to: '/iv' },
  { text: 'More', to: '/resources' },
];

// Paper-grain overlay, applied once per page above all content.
export const Grain2026 = () => (
  <div style={{
    position: 'fixed', inset: 0, backgroundImage: 'url(/design2026/grain.png)',
    backgroundSize: '500px 500px', backgroundRepeat: 'repeat',
    mixBlendMode: 'multiply', opacity: 0.38, pointerEvents: 'none', zIndex: 90,
  }} />
);

// Fixed top nav. `active` is the path of the current page ('/about', '/dojo', …);
// omit it on the homepage.
export const Nav2026 = ({ active }) => (
  <nav style={{
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '0.8rem 2rem',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    background: PAPER, borderBottom: '1px solid rgba(42,42,36,0.06)',
  }}>
    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', color: INK, fontFamily: sans }}>
      <img src="/design2026/logo.jpg" alt="" style={{ width: '40px', height: '40px', objectFit: 'cover', display: 'block', mixBlendMode: 'multiply' }} />
      <span style={{ fontFamily: serif, fontSize: '18px' }}>Intentional Society</span>
    </Link>
    <ul style={{ display: 'flex', alignItems: 'center', gap: '1.6rem', listStyle: 'none', margin: 0, padding: 0, flexWrap: 'wrap', fontFamily: sans }}>
      {navLinks.map(l => (
        <li key={l.text}>
          <Link to={l.to} style={{
            textDecoration: 'none', fontSize: '14px',
            color: l.to === active ? ACCENT_DARK : MUTED,
            fontWeight: l.to === active ? 500 : 400,
          }}>
            {l.text}
          </Link>
        </li>
      ))}
      <li>
        <Link to="/get-involved" style={{
          background: ACCENT, color: '#fff', padding: '0.5rem 1.2rem', borderRadius: '4px',
          fontSize: '13px', fontWeight: 500, textDecoration: 'none',
        }}>Get involved</Link>
      </li>
    </ul>
  </nav>
);

export const Footer2026 = () => (
  <footer style={{ background: '#F2EDE4', borderTop: '1px solid rgba(42,42,36,0.08)', padding: '3rem 2rem', fontFamily: sans }}>
    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
      <div>
        <img src="/design2026/logo.jpg" alt="" style={{ width: '52px', height: '52px', objectFit: 'cover', display: 'block', marginBottom: '0.9rem', mixBlendMode: 'multiply' }} />
        <h3 style={{ fontFamily: serif, fontWeight: 300, fontSize: '1.1rem', color: INK, margin: '0 0 0.8rem' }}>Intentional Society</h3>
        <p style={{ fontSize: '13px', color: MUTED, lineHeight: 1.7, margin: 0 }}>
          An online community for inner development, wise action, and human connection.
          Peer-led, free, and always becoming.
        </p>
      </div>
      <div>
        <h4 style={{ fontFamily: serif, fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.15em', color: MUTED, margin: '0 0 1rem' }}>Our values</h4>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {['Awareness', 'Acceptance', 'Integrity', 'Relationship', 'Wisdom'].map(v => (
            <li key={v} style={{ fontSize: '13px', color: MUTED, marginBottom: '0.5rem' }}>{v}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 style={{ fontFamily: serif, fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.15em', color: MUTED, margin: '0 0 1rem' }}>Explore</h4>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {[
            { text: 'Community', to: '/community' },
            { text: 'Practice Dojo', to: '/dojo' },
            { text: 'Ventures', to: '/iv' },
            { text: 'Friends', to: '/friends' },
            { text: 'FAQ', to: '/questions' },
            { text: 'News', to: '/news' },
          ].map(l => (
            <li key={l.text} style={{ fontSize: '13px', marginBottom: '0.5rem' }}>
              <Link to={l.to} style={{ color: MUTED, textDecoration: 'none' }}>{l.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div style={{
      maxWidth: '900px', margin: '2rem auto 0', paddingTop: '1.5rem',
      borderTop: '1px solid rgba(42,42,36,0.06)', fontSize: '12px', color: MUTED, opacity: 0.6,
    }}>
      © 2020–2026 Intentional Society. All rights reserved. &nbsp;·&nbsp; Photography by
      community members Bill (nature &amp; macro) and Karla (ice).
    </div>
  </footer>
);

// Gatsby Head contents shared by all 2026 pages: fonts + per-page title/description.
export const Head2026 = ({ title, description }) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" />
  </>
);
