import React from 'react';
import { Link } from 'gatsby';
import {
  serif, sans, ACCENT_DARK, INK, BODY_TEXT, PAPER,
  Grain2026, Nav2026, Footer2026, Head2026, HeaderBand,
} from '../components/design2026/chrome';

// The Being With It All practice series, relaunching at Relational Dojo.

// This page's own words, read by both the header band and the document head.
const PAGE = {
  title: 'Being With It All',
  description: 'a simple radical practice of acceptance',
  metaDescription: 'A practice series from Intentional Society on welcoming the reality of what is — together, without pushing away or clinging.',
};

const bodyP = { fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 };

const linkStyle = { color: ACCENT_DARK };

// Standing notice for the current session, above the evergreen description.
const noticeBox = {
  background: 'rgba(46,107,79,0.06)', border: '1px solid rgba(46,107,79,0.18)',
  borderRadius: '4px', padding: '1.2rem 1.4rem', margin: '0 0 2rem',
};

const NamedDefault = () => (
  <div style={{ fontFamily: serif, fontWeight: 300, color: INK, lineHeight: 1.7, background: PAPER, position: 'relative', overflowX: 'hidden' }}>

    <Grain2026 />
    <Nav2026 active="/dojo" />

    {/* ======== Header band ======== */}
    <HeaderBand
      image="/design2026/pond-leaves.jpg" focus="center 45%" credit="Bill"
      title={PAGE.title}
      description={PAGE.description}
    />

    {/* ======== Article body ======== */}
    <main style={{ position: 'relative', zIndex: 3, background: PAPER, padding: '4rem 2rem 5rem' }}>
      <article style={{ maxWidth: '720px', margin: '0 auto' }}>

        <div style={noticeBox}>
          <p style={{ ...bodyP, margin: 0 }}>
            <strong style={{ fontWeight: 700 }}>January 2026:</strong> Relaunching
            at <a href="https://relationaldojo.org" target="_blank" rel="noopener noreferrer" style={linkStyle}>Relational
            Dojo</a>! Our next session is <strong style={{ fontWeight: 700 }}>Saturday, January 17<sup>th</sup> from
            1:00 to 2:30pm Pacific Time</strong> (4pm Eastern, 9pm UTC).{' '}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdsTSZGVw6vidkEieIbAzhjmmZuO8btB3g8Js4uYrkZKavkxQ/viewform"
              target="_blank" rel="noopener noreferrer" style={linkStyle}>Sign up for BWIA calendar invites.</a>
          </p>
        </div>

        <figure style={{ margin: '0 0 2rem' }}>
          <img
            src="/images/being-with-it-all.png"
            alt="Being With It All"
            style={{
              maxWidth: '700px', width: '100%', height: 'auto', display: 'block',
              margin: '0 auto', borderRadius: '4px 7px 3px 6px',
            }}
          />
        </figure>

        <p style={bodyP}>
          Life is a lot sometimes, isn't it? Everything happens so much. Everything
          everywhere all at once. Atrocities around the world, violence in our neighborhood,
          all the way to frailties of our bodies. Sacredness weaves its way through the
          suffering, and joy, yet we often find numbing and distraction to be easier than
          facing the extremes.
        </p>
        <p style={bodyP}>
          There's a secret to peace in the midst of everything: to let it be. To be with it
          all, we welcome the reality of what is, the is-ness of what is true — and we
          welcome our own experience, without pushing away or clinging. When we practice
          being, together, we find our capacity expanding. Fear recedes. Turbulence calms.
          Our hearts beat on, grounding our connection to life.
        </p>
        <p style={bodyP}>
          <em style={{ fontStyle: 'italic' }}>Being With It All</em> is a simple radical
          practice of acceptance kindled in the shared space between our open hearts.
        </p>

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(42,42,36,0.08)' }}>
          <Link to="/dojo" style={{
            fontFamily: sans, fontSize: '16px', fontWeight: 500, color: ACCENT_DARK, textDecoration: 'none',
            borderBottom: '1px solid rgba(26,66,50,0.3)',
          }}>← Back to the Dojo</Link>
        </div>

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
