import React from 'react';
import { Link } from 'gatsby';

// 2026 redesign of the Community page — self-contained page (own nav/footer)
// ported from the Claude Design mockup, matching the pattern established by
// the redesigned homepage and About page (src/pages/index.js, about.js).

const serif = "'Cormorant Garamond', Georgia, serif";
const sans = "'DM Sans', 'Gudea', sans-serif";
const ACCENT = '#2E6B4F';
const ACCENT_DARK = '#1A4232';
const INK = '#2A2A24';
const MUTED = '#6B6860';
const BODY_TEXT = '#4A473F';
const PAPER = '#F8F5EF';

const navLinks = [
  { text: 'About', to: '/about' },
  { text: 'Community', to: '/community', active: true },
  { text: 'Dojo', to: '/dojo' },
  { text: 'Ventures', to: '/iv' },
  { text: 'More', to: '/resources' },
];

const linkStyle = { color: ACCENT_DARK };

const sectionHeading = {
  fontFamily: serif, fontWeight: 300, lineHeight: 1.2,
  fontSize: 'clamp(1.5rem,2.6vw,2rem)', color: '#5C4A3A', margin: '0 0 1.4rem',
};

const bodyP = { fontSize: '16px', color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 };

const divider = <hr style={{ border: 'none', borderTop: '1px solid rgba(42,42,36,0.12)', margin: '3rem auto', width: '120px' }} />;

const NamedDefault = () => (
  <div style={{ fontFamily: serif, fontWeight: 300, color: INK, lineHeight: 1.7, background: PAPER, position: 'relative', overflowX: 'hidden' }}>

    {/* Grain texture overlay */}
    <div style={{
      position: 'fixed', inset: 0, backgroundImage: 'url(/design2026/grain.png)',
      backgroundSize: '500px 500px', backgroundRepeat: 'repeat',
      mixBlendMode: 'multiply', opacity: 0.38, pointerEvents: 'none', zIndex: 90,
    }} />

    {/* Navigation */}
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
            <Link to={l.to} style={{ textDecoration: 'none', color: l.active ? ACCENT_DARK : MUTED, fontSize: '14px', fontWeight: l.active ? 500 : 400 }}>
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

    {/* ======== Header band ======== */}
    <header style={{
      position: 'relative', marginTop: '77px', minHeight: '340px', display: 'flex',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden',
      background: 'url(/design2026/crystals.jpg) center/cover, #1c2730',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(14,18,22,0.62) 0%, rgba(14,18,22,0.55) 50%, rgba(14,18,22,0.68) 100%)',
      }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '640px', padding: '4rem 2rem' }}>
        <div style={{
          fontFamily: sans, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
          fontWeight: 500, color: '#E8DFD0', opacity: 0.9, marginBottom: '1.2rem',
        }}>Community</div>
        <h1 style={{
          fontFamily: serif, fontWeight: 400, lineHeight: 1.25, fontSize: 'clamp(2.2rem,4.2vw,3.2rem)',
          color: '#FAF8F3', textShadow: '0 2px 24px rgba(8,12,16,0.8)', margin: 0,
        }}>
          A space full of relationships that matter
        </h1>
      </div>
    </header>

    {/* ======== Article body ======== */}
    <main style={{ position: 'relative', zIndex: 3, background: PAPER, padding: '4rem 2rem 5rem' }}>
      <article style={{ maxWidth: '720px', margin: '0 auto' }}>

        <blockquote style={{
          fontFamily: serif, fontSize: 'clamp(1.2rem,2.2vw,1.5rem)', fontStyle: 'italic', fontWeight: 300,
          color: '#5C4A3A', borderLeft: '2px solid #7A9E8A', paddingLeft: '1.5rem', margin: '0 0 2.5rem', lineHeight: 1.6,
        }}>
          "Home is where somebody notices when you are no longer there."
          <div style={{ fontSize: '14px', fontStyle: 'normal', color: MUTED, marginTop: '0.6rem' }}>
            — <a href="https://www.goodreads.com/quotes/220390-home-is-where-somebody-notices-when-you-are-no-longer" target="_blank" rel="noopener noreferrer" style={{ color: MUTED }}>Aleksandar Hemon</a>
          </div>
        </blockquote>

        <figure style={{ margin: '0 0 2.5rem', textAlign: 'center' }}>
          <img src="/design2026/community-tree.png" alt="A tree of community members' faces, each rooted in Intentional Society"
            style={{ width: '100%', maxWidth: '340px', height: 'auto', display: 'inline-block' }} />
          <figcaption style={{ fontSize: '12px', fontStyle: 'italic', color: MUTED, marginTop: '0.6rem', opacity: 0.8 }}>
            Some of the faces that make up this community.
          </figcaption>
        </figure>

        <p style={bodyP}>
          Community is such an overused and abused word, but we use it to signify a space full
          of relationships that matter. The kind where, if they're gone, you miss them. We do
          this by spending face-to-face time with each other, deepening our connections and care
          over time. We gather by videocall weekly on <strong style={{ fontWeight: 500 }}>Sundays</strong> at
          1pm Pacific: a clear consistent heartbeat of connection that's been beating for over
          five years now.
        </p>

        <p style={{ fontSize: '15px', color: MUTED, margin: '0 0 0.6rem' }}>Our purpose statement has been:</p>
        <blockquote style={{
          fontFamily: serif, fontSize: '1.15rem', fontStyle: 'italic', fontWeight: 300, color: INK,
          borderLeft: '2px solid #7A9E8A', paddingLeft: '1.5rem', margin: '0 0 1.5rem', lineHeight: 1.7,
        }}>
          Those who together are becoming<br />
          the people we want to be<br />
          and doing what we value<br />
          in growing integrity relating to<br />
          each other, ourselves, and the world
        </blockquote>

        <p style={bodyP}>
          So "being who we want to be" is the organizing task — one which is catalyzed by being
          in community with each other. We do (developmental-relational) practices, and we
          explore growth edge inquiries, all with a living-room feel of familiarity and safety.
          The space can hold laughter, tension, tenderness, and a diversity of meaning-making. We
          have three generations represented, several countries and continents, and a breadth of
          socioeconomic and cultural backgrounds. Community members may spark, lead, or facilitate
          sessions in this leader-ful collective playground.
        </p>

        {divider}

        <h2 style={sectionHeading}>Belonging in an ecosystem of growing and doing</h2>
        <p style={bodyP}>
          If you're looking for focused practice aimed at personal skill-building, you'll
          find <Link to="/dojo" style={linkStyle}>Relational Dojo</Link> groups more purposeful and
          easier to navigate.
        </p>
        <p style={bodyP}>
          Other lightweight relational programs like Pods, Crews, and the Gumball Machine were
          incubated by this community but are now accessible (in parallel with this community,
          not conflated with community membership) to everyone inside
          the <Link to="/web" style={linkStyle}>IS web</Link>.
        </p>

        {divider}

        <h2 style={sectionHeading}>How to join</h2>
        <p style={{ ...bodyP, marginBottom: '2rem' }}>
          Community membership signup has become a component inside
          our <Link to="/web" style={linkStyle}>relational web</Link> signup form — joining at the
          (larger) network level grants access to Community Hub Calls as well as other programs.
        </p>

        <Link to="/get-involved" style={{
          display: 'inline-block', padding: '0.8rem 2rem', background: ACCENT, color: '#fff',
          textDecoration: 'none', fontFamily: sans, fontSize: '14px', fontWeight: 400,
          letterSpacing: '0.05em', borderRadius: '3px',
        }}>Get involved</Link>

      </article>
    </main>

    {/* ======== Footer ======== */}
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
  </div>
);

export default NamedDefault;

export const Head = () => (
  <>
    <title>Community — Intentional Society</title>
    <meta name="description" content="A space full of relationships that matter — how Intentional Society's weekly community gathers, and how to join." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" />
  </>
);
