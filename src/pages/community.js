import React from 'react';
import { Link } from 'gatsby';
import {
  serif, sans, ACCENT, ACCENT_DARK, INK, MUTED, BODY_TEXT, PAPER,
  Grain2026, Nav2026, Footer2026, Head2026, HeaderBand,
} from '../components/design2026/chrome';
import { StaticImage } from 'gatsby-plugin-image';

// 2026 redesign of the Community page — self-contained page ported from the
// Claude Design mockup, using the shared 2026 chrome (components/design2026/).

// This page's own words, read by both the header band and the document head.
const PAGE = {
  title: 'IS Community Calls',
  description: 'relationships that matter as we craft an intentional culture together',
  metaDescription: "A space full of relationships that matter — how Intentional Society's weekly community gathers, and how to join.",
};

const linkStyle = { color: ACCENT_DARK };

const sectionHeading = {
  fontFamily: serif, fontWeight: 300, lineHeight: 1.2,
  fontSize: 'clamp(1.5rem,2.6vw,2rem)', color: '#5C4A3A', margin: '0 0 1.4rem',
};

const bodyP = { fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 };

const divider = <hr style={{ border: 'none', borderTop: '1px solid rgba(42,42,36,0.12)', margin: '3rem auto', width: '120px' }} />;

const NamedDefault = () => (
  <div style={{ fontFamily: serif, fontWeight: 300, color: INK, lineHeight: 1.7, background: PAPER, position: 'relative', overflowX: 'hidden' }}>

    <Grain2026 />
    <Nav2026 active="/community" />

    {/* ======== Header band ======== */}
    <HeaderBand
      image="/design2026/turkeytail-log.jpg" credit="Bill"
      titleSize="clamp(2rem,4vw,3rem)"
      title={PAGE.title}
      description={PAGE.description}
    />

    {/* ======== Article body ======== */}
    <main style={{ position: 'relative', zIndex: 3, background: PAPER, padding: '4rem 2rem 5rem' }}>
      <article style={{ maxWidth: '720px', margin: '0 auto' }}>

        <blockquote style={{
          fontFamily: serif, fontSize: 'clamp(1.2rem,2.2vw,1.5rem)', fontStyle: 'italic', fontWeight: 400,
          color: '#5C4A3A', borderLeft: '2px solid #7A9E8A', paddingLeft: '1.5rem', margin: '0 0 2.5rem', lineHeight: 1.6,
        }}>
          "Home is where somebody notices when you are no longer there."
          <div style={{ fontSize: '18px', fontStyle: 'normal', color: MUTED, marginTop: '0.6rem' }}>
            — <a href="https://www.goodreads.com/quotes/220390-home-is-where-somebody-notices-when-you-are-no-longer" target="_blank" rel="noopener noreferrer" style={{ color: MUTED }}>Aleksandar Hemon</a>
          </div>
        </blockquote>

        <figure style={{ margin: '0 0 2.5rem', textAlign: 'center' }}>
          <StaticImage src="../images/photos/community-tree.png" alt="A tree of community members' faces, each rooted in Intentional Society"
            layout="constrained" width={340} placeholder="none" formats={['auto', 'webp']}
            style={{ width: '100%', maxWidth: '340px', display: 'inline-block' }} />
          <figcaption style={{ fontSize: '16px', fontStyle: 'italic', color: MUTED, marginTop: '0.6rem' }}>
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

        <p style={{ fontSize: '16px', fontWeight: 500, color: MUTED, margin: '0 0 0.6rem' }}>Our purpose statement has been:</p>
        <blockquote style={{
          fontFamily: serif, fontSize: '1.15rem', fontStyle: 'italic', fontWeight: 400, color: INK,
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
          Community membership signup happens through the relational web form below — joining at
          the (larger) network level grants access to Community Hub Calls as well as other programs.
        </p>

        <Link to="/get-involved" style={{
          display: 'inline-block', padding: '0.8rem 2rem', background: ACCENT, color: '#fff',
          textDecoration: 'none', fontFamily: sans, fontSize: '16px', fontWeight: 500,
          letterSpacing: '0.03em', borderRadius: '3px',
        }}>Get involved</Link>

      </article>
    </main>

    <Footer2026 />
  </div>
);

export default NamedDefault;

export const Head = () => (
  <Head2026
    {...PAGE}
  />
);
