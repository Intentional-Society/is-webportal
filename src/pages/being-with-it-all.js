import React from 'react';
import {
  bodyP, linkStyle,
  Head2026, HeaderBand, Page2026, Article2026, BackLink,
} from '../components/design2026/chrome';

// The Being With It All practice series, relaunching at Relational Dojo.

// This page's own words, read by both the header band and the document head.
const PAGE = {
  title: 'Being With It All',
  description: 'a simple radical practice of acceptance',
  metaDescription: 'A practice series from Intentional Society on welcoming the reality of what is — together, without pushing away or clinging.',
};

// Standing notice for the current session, above the evergreen description.
const noticeBox = {
  background: 'rgba(46,107,79,0.06)', border: '1px solid rgba(46,107,79,0.18)',
  borderRadius: '4px', padding: '1.2rem 1.4rem', margin: '0 0 2rem',
};

const NamedDefault = () => (
  <Page2026 active="/dojo">

    {/* ======== Header band ======== */}
    <HeaderBand
      image="pond-leaves.jpg" focus="center 45%" credit="Bill"
      title={PAGE.title}
      description={PAGE.description}
    />

    {/* ======== Article body ======== */}
    <Article2026>

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
        <em>Being With It All</em> is a simple radical practice of acceptance kindled in
        the shared space between our open hearts.
      </p>

      <BackLink to="/dojo">← Back to the Dojo</BackLink>

    </Article2026>
  </Page2026>
);

export default NamedDefault;

export const Head = () => (
  <Head2026
    {...PAGE}
  />
);
