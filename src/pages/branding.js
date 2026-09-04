import React from 'react';
import {
  sans, MUTED, bodyP, sectionHeading,
  Head2026, HeaderBand, Page2026, Article2026, BackLink,
} from '../components/design2026/chrome';
import { StaticImage } from 'gatsby-plugin-image';

// Brand assets for press and partners.

// This page's own words, read by both the header band and the document head.
const PAGE = {
  title: 'Branding',
  description: 'marks and colors for press and partners',
  metaDescription: 'Intentional Society brand assets — wordmark, typeface, and color — for press and partners representing us in other media.',
};

// Sections here open under a preceding block rather than a divider, so they
// carry their own leading gap.
const brandHeading = { ...sectionHeading, margin: '2.5rem 0 1.4rem' };

// Swatch chip for the brand color, so the hex is shown as well as stated.
const swatch = {
  display: 'inline-block', width: '2.4rem', height: '2.4rem', borderRadius: '3px',
  background: '#24818E', verticalAlign: 'middle', marginRight: '0.7rem',
  border: '1px solid rgba(42,42,36,0.15)',
};

const NamedDefault = () => (
  <Page2026>

    {/* ======== Header band ======== */}
    <HeaderBand
      image="crescent-butterflyweed.jpg"
      title={PAGE.title}
      description={PAGE.description}
    />

    {/* ======== Article body ======== */}
    <Article2026>

      <p style={bodyP}>
        For press and partners, including representations of Intentional Society in
        other media.
      </p>

      <h2 style={brandHeading}>Wordmark</h2>

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

      <h2 style={brandHeading}>Color</h2>

      <p style={bodyP}>
        <span style={swatch} />
        <code style={{ fontFamily: sans, fontSize: '18px', fontWeight: 500 }}>#24818E</code>
      </p>

      <BackLink href="mailto:hello@intentionalsociety.org">
        Questions about using these? Get in touch →
      </BackLink>

    </Article2026>
  </Page2026>
);

export default NamedDefault;

export const Head = ({ location }) => (
  <Head2026 {...PAGE} pathname={location.pathname} />
);
