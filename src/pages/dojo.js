import React from 'react';
import { Link } from 'gatsby';

// 2026 redesign of the Dojo page — self-contained page (own nav/footer)
// ported from the Claude Design mockup, matching the pattern established by
// the redesigned homepage, About, and Community pages.

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
  { text: 'Community', to: '/community' },
  { text: 'Dojo', to: '/dojo', active: true },
  { text: 'Ventures', to: '/iv' },
  { text: 'More', to: '/resources' },
];

const linkStyle = { color: ACCENT_DARK };

const sectionHeading = {
  fontFamily: serif, fontWeight: 300, lineHeight: 1.2,
  fontSize: 'clamp(1.5rem,2.6vw,2rem)', color: '#5C4A3A', margin: '0 0 1.4rem',
};

const bodyP = { fontSize: '16px', color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 };
const smallP = { fontSize: '15px', color: MUTED, margin: '0 0 0.5rem' };

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
      background: 'url(/design2026/dojo-header.webp) center/cover, #1c2730',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(14,18,22,0.62) 0%, rgba(14,18,22,0.55) 50%, rgba(14,18,22,0.68) 100%)',
      }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '640px', padding: '4rem 2rem' }}>
        <div style={{
          fontFamily: sans, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
          fontWeight: 500, color: '#E8DFD0', opacity: 0.9, marginBottom: '1.2rem',
        }}>Relational Dojo</div>
        <h1 style={{
          fontFamily: serif, fontWeight: 400, lineHeight: 1.25, fontSize: 'clamp(1.5rem,3vw,2.2rem)',
          color: '#FAF8F3', textShadow: '0 2px 24px rgba(8,12,16,0.8)', margin: 0,
        }}>
          A skill-building space for developmental-relational practice
        </h1>
      </div>
      <div style={{
        position: 'absolute', bottom: '0.5rem', right: '0.9rem', zIndex: 2,
        fontFamily: sans, fontSize: '10px', color: 'rgba(232,223,208,0.55)',
      }}>
        Image: <a href="https://photodojodsi.fandom.com/wiki/Dojo_Background" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(232,223,208,0.7)' }}>Photo Dojo DSI Wiki</a>
      </div>
    </header>

    {/* ======== Article body ======== */}
    <main style={{ position: 'relative', zIndex: 3, background: PAPER, padding: '4rem 2rem 5rem' }}>
      <article style={{ maxWidth: '720px', margin: '0 auto' }}>

        <p style={bodyP}>
          Our Practice Dojo activities have merged into the new, independent platform
          of <a href="https://relationaldojo.org" target="_blank" rel="noopener noreferrer" style={linkStyle}>Relational Dojo</a>! Please
          check out the Dojo website for current practice group offerings.
        </p>

        <h3 style={{ fontFamily: serif, fontWeight: 400, fontStyle: 'italic', lineHeight: 1.2, fontSize: '1.3rem', margin: '2rem 0 2.5rem' }}>
          <a href="https://relationaldojo.org" target="_blank" rel="noopener noreferrer" style={linkStyle}>Relational Dojo →</a>
        </h3>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(42,42,36,0.12)', margin: '0 auto 3rem', width: '120px' }} />

        <h2 style={sectionHeading}>Practice Dojo history</h2>

        <p style={bodyP}>
          The Practice Dojo became its own space in 2024 with the debut of the
          IS <Link to="/developmental-practice-series" style={linkStyle}>Developmental Practice Series</Link>, followed
          by an Exploratory Practice Series tour and the
          heartfelt <Link to="/being-with-it-all" style={linkStyle}>Being With It All</Link> series.
        </p>

        <p style={bodyP}>
          We co-hosted some <a href="https://tasshin.com/blog/what-is-circling/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Circling</a> practice
          series with our friends
          at <a href="https://www.startercultures.us/creative-offerings/communication-dojo" target="_blank" rel="noopener noreferrer" style={linkStyle}>Communication
          Dojo</a>. We showed up
          at <a href="https://www.limicon2025.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Limicon 2025</a> throughout
          March 2025. Latter 2025 also brought refined iterations of
          the <Link to="/developmental-practice-series" style={linkStyle}>DPS course</Link> and <Link to="/being-with-it-all" style={linkStyle}>Being
          With It All</Link>.
        </p>

        <p style={{ ...bodyP, marginBottom: '0.8rem' }}>
          The Practice Dojo is a skill-building space welcoming novices and experts alike to
          train in a variety of <em>developmental-relational practices</em>.
        </p>
        <ul style={{ fontSize: '16px', color: BODY_TEXT, margin: '0 0 1.2rem 1.4rem', padding: 0 }}>
          <li style={{ marginBottom: '0.4rem' }}><strong style={{ fontWeight: 500 }}>developmental</strong> grows and shifts your perspective-taking capacity</li>
          <li style={{ marginBottom: '0.4rem' }}><strong style={{ fontWeight: 500 }}>relational</strong> is caring interactive presence with joint attention and reflection</li>
          <li style={{ marginBottom: '0.4rem' }}><strong style={{ fontWeight: 500 }}>practice</strong> is participatory enactment of a way-of-being, shifting how/who we are</li>
        </ul>

        {divider}

        <h2 style={sectionHeading}>Further geekery</h2>

        <p style={bodyP}>
          Why dojo? The "<a href="https://en.wikipedia.org/wiki/Dojo" target="_blank" rel="noopener noreferrer" style={linkStyle}>dojo</a>" metaphor
          helps transmit the nature of this practice space: it is a programmatic facilitated
          space of immersive experiential learning and transformative growth. From the Japanese
          (traceable to Sanskrit), it translates literally as "place of the way" with
          a <a href="https://www.ijf.org/news/show/the-dojo-a-place-of-study-and-practice" target="_blank" rel="noopener noreferrer" style={linkStyle}>lineage</a> of
          rich meaning and many applicable connotations. (The closest western-flavored metaphors
          might be "<a href="https://en.wikipedia.org/wiki/Gymnasium_(ancient_Greece)" target="_blank" rel="noopener noreferrer" style={linkStyle}>gymnasium</a>" or
          "(dance) studio".)
        </p>

        <p style={{ ...bodyP, marginBottom: '0.6rem' }}>What counts as a developmental-relational practice?</p>
        <p style={smallP}>Category-anchoring practice examples:</p>
        <ul style={{ fontSize: '16px', color: BODY_TEXT, margin: '0 0 1.2rem 1.4rem', padding: 0 }}>
          <li style={{ marginBottom: '0.4rem' }}>T-Group (focus on me)</li>
          <li style={{ marginBottom: '0.4rem' }}>Circling (focus on relating me-and-you)</li>
          <li style={{ marginBottom: '0.4rem' }}>Collective Presencing (focus on we)</li>
          <li style={{ marginBottom: '0.4rem' }}>Case Clinic (focus on relating me-and-world)</li>
        </ul>

        <p style={smallP}>More practices that easily belong:</p>
        <p style={{ fontSize: '15px', color: MUTED, marginBottom: '1.2rem' }}>
          Empathy Circling, Dialogos (Vervaeke–Sengstock), Bohm Dialogue, CP-adjacent forms such
          as Communal Reverie, Ephemeral Group Process, and Inquiry Spiraling, Authentic Relating
          Games, some Liberating Structures such as Nine Whys and Troika Consulting, Sacred
          Ground Experience, Uncertainment, Grief Circles, Glass Bead Game.
        </p>

        <p style={smallP}>More practices that can/could sometimes belong with appropriate relational holding:</p>
        <p style={{ fontSize: '15px', color: MUTED, marginBottom: '2rem' }}>
          Clean/Pure Coaching, Parts Work (IFS), Ideal Parent Figure Protocol, Appreciative
          Inquiry, Death Cafe, Imaginal work, Shadow work, Open Stance circles, OANMarket/Gifting
          practice.
        </p>

        <div style={{ textAlign: 'right' }}>
          <Link to="/iv" style={{
            fontFamily: sans, fontSize: '13px', color: ACCENT_DARK, textDecoration: 'none',
            borderBottom: '1px solid rgba(26,66,50,0.3)',
          }}>Next page: Ventures →</Link>
        </div>

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
    <title>Relational Dojo — Intentional Society</title>
    <meta name="description" content="A skill-building space for developmental-relational practice." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" />
  </>
);
