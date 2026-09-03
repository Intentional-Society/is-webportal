import React, { useState } from 'react';
import {
  sans, ACCENT_DARK, MUTED, bodyP,
  Head2026, HeaderBand, Page2026, Article2026,
} from '../components/design2026/chrome';

// A 19-slide orientation deck, walked through in place. Slides are numbered
// images in static/images/orientation/ — adding one means bumping TOTAL_SLIDES.

// This page's own words, read by both the header band and the document head.
const PAGE = {
  title: 'Orientation',
  description: 'a walk through who we are and how to take part',
  metaDescription: "An introduction to Intentional Society's purpose, vibe, and how to get involved, in nineteen slides.",
};

const TOTAL_SLIDES = 19;

// Captions for the slides that have one; the rest show none.
const slideTexts = [
  'Welcome to the Orientation!',
  "Intentional Society's core purpose.",
];

// Round arrow buttons flanking the slide. Disabled at each end rather than
// wrapping, matching the original.
const arrowButton = disabled => ({
  width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(42,42,36,0.15)',
  background: 'rgba(250,248,243,0.92)', color: disabled ? 'rgba(42,42,36,0.25)' : ACCENT_DARK,
  cursor: disabled ? 'default' : 'pointer', display: 'flex', alignItems: 'center',
  justifyContent: 'center', padding: 0,
});

const Chevron = ({ dir }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    style={{ transform: dir === 'left' ? 'rotate(180deg)' : 'none' }}>
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const NamedDefault = () => {
  const [slide, setSlide] = useState(0);
  const atStart = slide === 0;
  const atEnd = slide === TOTAL_SLIDES - 1;

  return (
    <Page2026>

      {/* ======== Header band ======== */}
      <HeaderBand
        image="moss.jpg" focus="center 45%" credit="Bill"
        title={PAGE.title}
        description={PAGE.description}
      />

      {/* ======== Article body ======== */}
      <Article2026>

        <p style={bodyP}>
          Welcome! These slides walk you through the Intentional Society orientation.
          They're meant to give you a visual and contextual intro to our purpose, vibe,
          and how to get involved.
        </p>

        <figure style={{ margin: '2.5rem 0 0', position: 'relative' }}>
          <img
            src={`/images/orientation/${slide + 1}.png`}
            alt={`Orientation slide ${slide + 1} of ${TOTAL_SLIDES}`}
            style={{ width: '100%', display: 'block', borderRadius: '4px 7px 3px 6px' }}
          />

          <div style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}>
            <button type="button" onClick={() => setSlide(s => Math.max(s - 1, 0))}
              disabled={atStart} aria-label="Previous slide" style={arrowButton(atStart)}>
              <Chevron dir="left" />
            </button>
          </div>
          <div style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
            <button type="button" onClick={() => setSlide(s => Math.min(s + 1, TOTAL_SLIDES - 1))}
              disabled={atEnd} aria-label="Next slide" style={arrowButton(atEnd)}>
              <Chevron dir="right" />
            </button>
          </div>

          <figcaption style={{ textAlign: 'center', marginTop: '1rem' }}>
            {slideTexts[slide] && (
              <div style={{ ...bodyP, margin: '0 0 0.4rem' }}>{slideTexts[slide]}</div>
            )}
            <div style={{ fontFamily: sans, fontSize: '14px', fontWeight: 500, color: MUTED }}>
              {slide + 1} / {TOTAL_SLIDES}
            </div>
          </figcaption>
        </figure>

      </Article2026>
    </Page2026>
  );
};

export default NamedDefault;

export const Head = ({ location }) => (
  <Head2026 {...PAGE} pathname={location.pathname} />
);
