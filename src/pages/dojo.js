import React from 'react';
import { Link } from 'gatsby';
import {
  serif, sans, ACCENT_DARK, INK, MUTED, BODY_TEXT, PAPER,
  Grain2026, Nav2026, Footer2026, Head2026, HeaderBand,
} from '../components/design2026/chrome';

// 2026 redesign of the Dojo page — self-contained page ported from the
// Claude Design mockup, using the shared 2026 chrome (components/design2026/).

const linkStyle = { color: ACCENT_DARK };

const sectionHeading = {
  fontFamily: serif, fontWeight: 300, lineHeight: 1.2,
  fontSize: 'clamp(1.5rem,2.6vw,2rem)', color: '#5C4A3A', margin: '0 0 1.4rem',
};

const bodyP = { fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 };
const smallP = { fontSize: '16px', fontWeight: 500, color: MUTED, margin: '0 0 0.5rem' };

const divider = <hr style={{ border: 'none', borderTop: '1px solid rgba(42,42,36,0.12)', margin: '3rem auto', width: '120px' }} />;

const NamedDefault = () => (
  <div style={{ fontFamily: serif, fontWeight: 300, color: INK, lineHeight: 1.7, background: PAPER, position: 'relative', overflowX: 'hidden' }}>

    <Grain2026 />
    <Nav2026 active="/dojo" />

    {/* ======== Header band ======== */}
    <HeaderBand
      image="/design2026/luminaria-row.jpg" credit="Bill"
      kicker="Relational Dojo" titleSize="clamp(1.5rem,3vw,2.2rem)"
      title="A skill-building space for developmental-relational practice"
    />

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
        <ul style={{ fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.2rem 1.4rem', padding: 0 }}>
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
        <ul style={{ fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.2rem 1.4rem', padding: 0 }}>
          <li style={{ marginBottom: '0.4rem' }}>T-Group (focus on me)</li>
          <li style={{ marginBottom: '0.4rem' }}>Circling (focus on relating me-and-you)</li>
          <li style={{ marginBottom: '0.4rem' }}>Collective Presencing (focus on we)</li>
          <li style={{ marginBottom: '0.4rem' }}>Case Clinic (focus on relating me-and-world)</li>
        </ul>

        <p style={{ ...bodyP, marginBottom: '0.5rem' }}>More practices that easily belong:</p>
        <p style={{ fontSize: '20px', fontWeight: 500, color: BODY_TEXT, marginBottom: '1.2rem', lineHeight: 1.7 }}>
          Empathy Circling, Dialogos (Vervaeke–Sengstock), Bohm Dialogue, CP-adjacent forms such
          as Communal Reverie, Ephemeral Group Process, and Inquiry Spiraling, Authentic Relating
          Games, some Liberating Structures such as Nine Whys and Troika Consulting, Sacred
          Ground Experience, Uncertainment, Grief Circles, Glass Bead Game.
        </p>

        <p style={{ ...bodyP, marginBottom: '0.5rem' }}>More practices that can/could sometimes belong with appropriate relational holding:</p>
        <p style={{ fontSize: '20px', fontWeight: 500, color: BODY_TEXT, marginBottom: '2rem', lineHeight: 1.7 }}>
          Clean/Pure Coaching, Parts Work (IFS), Ideal Parent Figure Protocol, Appreciative
          Inquiry, Death Cafe, Imaginal work, Shadow work, Open Stance circles, OANMarket/Gifting
          practice.
        </p>

        <div style={{ textAlign: 'right' }}>
          <Link to="/iv" style={{
            fontFamily: sans, fontSize: '16px', fontWeight: 500, color: ACCENT_DARK, textDecoration: 'none',
            borderBottom: '1px solid rgba(26,66,50,0.3)',
          }}>Next page: Ventures →</Link>
        </div>

      </article>
    </main>

    <Footer2026 />
  </div>
);

export default NamedDefault;

export const Head = () => (
  <Head2026
    title="Relational Dojo — Intentional Society"
    description="A skill-building space for developmental-relational practice."
  />
);
