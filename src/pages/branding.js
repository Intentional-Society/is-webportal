import React from 'react';
import {
  serif, sans, ACCENT_DARK, INK, BODY_TEXT, MUTED, PAPER,
  Grain2026, Nav2026, Footer2026, Head2026, HeaderBand,
} from '../components/design2026/chrome';
import { StaticImage } from 'gatsby-plugin-image';

// Brand assets for press and partners.

// This page's own words, read by both the header band and the document head.
const PAGE = {
  title: 'Branding',
  description: 'marks and colors for press and partners',
  metaDescription: 'Intentional Society brand assets — wordmark, typeface, and color — for press and partners representing us in other media.',
};

const bodyP = { fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 };

const sectionHeading = {
  fontFamily: serif, fontWeight: 300, lineHeight: 1.2,
  fontSize: 'clamp(1.5rem,2.6vw,2rem)', color: '#5C4A3A', margin: '2.5rem 0 1.4rem',
};

// Swatch chip for the brand color, so the hex is shown as well as stated.
const swatch = {
  display: 'inline-block', width: '2.4rem', height: '2.4rem', borderRadius: '3px',
  background: '#24818E', verticalAlign: 'middle', marginRight: '0.7rem',
  border: '1px solid rgba(42,42,36,0.15)',
};

const NamedDefault = () => (
  <div style={{ fontFamily: serif, fontWeight: 300, color: INK, lineHeight: 1.7, background: PAPER, position: 'relative', overflowX: 'hidden' }}>

    <Grain2026 />
    <Nav2026 />

    {/* ======== Header band ======== */}
    <HeaderBand
      image="/design2026/crescent-butterflyweed.jpg" credit="Bill"
      title={PAGE.title}
      description={PAGE.description}
    />

    {/* ======== Article body ======== */}
    <main style={{ position: 'relative', zIndex: 3, background: PAPER, padding: '4rem 2rem 5rem' }}>
      <article style={{ maxWidth: '720px', margin: '0 auto' }}>

        <p style={bodyP}>
          For press and partners, including representations of Intentional Society in
          other media.
        </p>

        <h2 style={sectionHeading}>Wordmark</h2>

        <figure style={{ margin: '0 0 1.2rem' }}>
          <StaticImage
            src="../../static/images/branding/intentional-society-wordmark2024.png"
            alt="The Intentional Society wordmark"
            layout="constrained" width={620} placeholder="blurred"
            formats={['auto', 'webp', 'avif']}
            style={{ width: '100%', display: 'block' }}
          />
        </figure>
        <p style={{ fontSize: '16px', fontWeight: 500, color: MUTED, margin: '0 0 1.2rem' }}>
          If higher-fidelity rendering is needed, the wordmark is set in Gudea.
        </p>

        <h2 style={sectionHeading}>Color</h2>

        <p style={bodyP}>
          <span style={swatch} />
          <code style={{ fontFamily: sans, fontSize: '18px', fontWeight: 500 }}>#24818E</code>
        </p>

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(42,42,36,0.08)' }}>
          <a href="mailto:hello@intentionalsociety.org" style={{
            fontFamily: sans, fontSize: '16px', fontWeight: 500, color: ACCENT_DARK, textDecoration: 'none',
            borderBottom: '1px solid rgba(26,66,50,0.3)',
          }}>Questions about using these? Get in touch →</a>
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
