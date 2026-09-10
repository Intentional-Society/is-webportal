import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import {
  serif, sans, ACCENT, ACCENT_DARK, INK, MUTED, BODY_TEXT, PAPER, HEADING,
  Head2026, PhotoCredit, Page2026,
  NAV_HEIGHT, NAV_OFFSET,
} from '../components/design2026/chrome';
import { FullBleedPhoto } from '../components/design2026/photo';

// 2026 homepage redesign — self-contained, using the shared 2026 chrome
// (components/design2026/). Light content sections alternate with darker
// atmospheric interstitials. Torn edges are baked into the section images
// (wood-band.png, ice-torn.png), not a CSS mask.

// ======== Page metadata ========
// The homepage has no header band and its title is the bare site name, so
// siteName: false rather than "Intentional Society — Intentional Society".
const PAGE = {
  title: 'Intentional Society',
  metaDescription: 'An online community for inner development, wise action, and human connection — peer-led, free, and five years into the work.',
  siteName: false,
};

// ======== Palette ========
// Shades this page uses beyond the chrome.js tokens.
const SAGE = '#7A9E8A';       // quote rule and mark, card fallbacks, CTA border
const SAND = '#E8DFD0';       // light type and hero wash over dark grounds
const CREAM = '#FAF8F3';      // light type on the dark interstitials
const CARD_PAPER = '#FDFCF9'; // card fill, a shade lighter than PAPER
const MOSS_TINT = '#EDF1E9';  // quotes section ground; its veil is this at 0.78
// Darker than HEADING and ACCENT, because that veil lets enough of the moss
// through that the standard pair goes soft.
const QUOTES_LABEL = '#4A3B2E';
const QUOTES_ACCENT = '#245741';

// ======== Shared type ========
// The page's two big serif statements — the Awareness · Acceptance · Integrity
// band and the theory-of-change line — are set at one size.
const STATEMENT_SIZE = 'clamp(1.35rem,3.6vw,3rem)';

// The page's small-cap section labels.
const smallcap = {
  fontFamily: serif, fontSize: '0.92rem', letterSpacing: '0.18em',
  textTransform: 'uppercase', fontWeight: 600,
};

// ======== "What brings you here?" cards ========
// One major radius and one minor, alternating axes: TL/BR are 38 across by 20
// down, TR/BL the reverse.
const CARD_RADIUS = '38px 20px / 20px 38px';
const cardGrid = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem',
};
const cardBox = {
  background: CARD_PAPER, border: '1px solid rgba(42,42,36,0.14)', padding: '0 0 1.6rem',
  textDecoration: 'none', color: INK, position: 'relative', overflow: 'hidden',
  borderRadius: CARD_RADIUS, display: 'flex', flexDirection: 'column',
};
const cardPhoto = {
  position: 'relative', height: '130px', marginBottom: '1.3rem', overflow: 'hidden',
};
const cardPhotoImage = {
  position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0,
};
const cardHeading = {
  fontFamily: serif, fontWeight: 500, fontSize: '1.3rem',
  margin: '0 0 0.8rem', padding: '0 1.5rem',
};
const cardText = {
  fontSize: '18px', color: BODY_TEXT, lineHeight: 1.6,
  padding: '0 1.5rem', margin: '0 0 1.5rem',
};

// `photo` names a query alias in HomeCardImages below; `fallback` shows while
// that image loads. Each card carries the header-band photo of the page it
// links to, so the card and its destination read as the same place.
const spaces = [
  {
    title: 'Find the others',
    to: '/community',
    photo: 'turkeytailLog',
    alt: 'Layers of turkey-tail fungus fanning along a mossy fallen log',
    credit: 'Bill Claff',
    fallback: 'linear-gradient(135deg,#C99A72 0%,#4A5240 100%)',
    text: "I'm looking for deep connection with inner development and caring culture",
    cta: 'Community',
  },
  {
    title: 'Grow myself',
    to: '/dojo',
    photo: 'luminariaRow',
    alt: 'A line of paper luminaria glowing along a path at night',
    credit: 'Bill Claff',
    fallback: 'linear-gradient(135deg,#E0B57E 0%,#241F1A 100%)',
    text: "I'm interested in friendly low-stakes developmental-relational practice space",
    cta: 'Relational Dojo',
  },
  {
    title: 'Align my work',
    to: '/iv',
    photo: 'willow',
    alt: 'Looking up through the branches of a willow into a bright cloudy sky',
    credit: 'Karla',
    fallback: `linear-gradient(135deg,${SAGE} 0%,#9BB7CE 100%)`,
    text: "I'm looking for support to find integrity and meaning in my livelihood.",
    cta: 'Intentional Ventures',
  },
];

// The wide fourth card, below the grid rather than in it.
const webCard = {
  title: 'Be a part of the extended web',
  to: '/web',
  photo: 'crystals',
  alt: 'Interlocking crystals in vivid colour under a polarizing microscope',
  credit: 'Bill Claff',
  fallback: 'linear-gradient(135deg,#E8B24A 0%,#8A6FA8 100%)',
  text: "I'm already a friend and ally to this ethos and the people who are living it. I want to be connected and weave across the ecosystem as opportunities arise.",
  cta: 'The IS Web',
};

// Every card is one <a>; .space-card in the section's <style> block carries the
// border, shadow, hover lift and CTA type that make it read as a target.
const SpaceCard = ({ card, image, wide }) => (
  <Link className={`space-card${wide ? ' space-card-wide' : ''}`} to={card.to} style={cardBox}>
    <div className="credit-host space-card-photo" style={{ ...cardPhoto, background: card.fallback }}>
      <GatsbyImage image={image} alt={card.alt} objectFit="cover" style={cardPhotoImage} />
      <PhotoCredit name={card.credit} variant="overlay" inset={8} />
    </div>
    <h3 style={cardHeading}>{card.title}</h3>
    <p style={cardText}>{card.text}</p>
    <span className="space-card-cta">
      <span className="space-card-arrow" aria-hidden="true">→</span>
      <span className="space-card-cta-text">{card.cta}</span>
    </span>
  </Link>
);

// ======== Quotes ========
// One style for all three: the big “ from the feature quote over the pair's
// green rule and fill, the fill translucent so the moss reads through.
const quoteBox = {
  position: 'relative', padding: '2.9rem 1.6rem 1.4rem',
  background: 'rgba(250,248,243,0.62)', borderLeft: `2px solid ${SAGE}`,
};
const quoteMark = {
  fontFamily: serif, fontSize: '5rem', color: SAGE, opacity: 0.3,
  position: 'absolute', top: '0.5rem', left: '1.3rem', lineHeight: 1,
};
const quoteText = {
  fontFamily: serif, fontSize: 'clamp(1.15rem,1.7vw,1.4rem)', fontStyle: 'italic',
  color: INK, lineHeight: 1.6, margin: '0 0 0.8rem',
};
const quoteAttrib = { fontSize: '15px', fontWeight: 500, color: MUTED };
const quotePair = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem', marginTop: '2rem',
};

const Quote = ({ who, children }) => (
  <div style={quoteBox}>
    <div style={quoteMark} aria-hidden="true">“</div>
    <blockquote style={quoteText}>{children}</blockquote>
    <div style={quoteAttrib}>— {who}</div>
  </div>
);

// ======== Theory of change ========
// Three accented phrases joined by two smaller plain verbs, as a flex row that
// folds to a stack when it runs out of room. nowrap here and on tocJoin, so
// wrapping only ever happens between items, never inside a phrase.
const tocLine = {
  display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'center',
  columnGap: '0.7em', rowGap: '0.3em', maxWidth: '1750px', margin: '0 auto',
  fontFamily: serif, fontWeight: 400, lineHeight: 1.25, color: INK,
  fontSize: STATEMENT_SIZE, whiteSpace: 'nowrap',
};
// Plain serif rather than the tracked small caps used for labels elsewhere:
// these are part of the sentence, not a label on it. Sized in em so the
// contrast with the phrase stays constant at any phrase size.
const tocJoin = {
  fontFamily: serif, fontSize: '0.53em', fontWeight: 400,
  color: ACCENT_DARK, whiteSpace: 'nowrap',
};
// <em> for the emphasis, upright for the look — colour and scale carry it, so
// the italic would be a third signal.
const tocKey = { color: QUOTES_ACCENT, fontStyle: 'normal' };

// ======== Mission and the three moves ========
// The "·" between the three moves. Padding rather than &nbsp; keeps the line's
// wrap points, so it can break on a phone instead of overflowing the band.
const moveSeparator = { padding: '0 0.32em' };

// 700 is a real self-hosted Cormorant italic face, not a synthesised bold.
const missionKey = { fontWeight: 700 };

// ======== Hero scroll cue ========
// `scroll-behavior: smooth` has no duration knob and Chrome's own reads as
// hurried, so the glide is animated by hand. Only number to touch to retune it.
const SCROLL_CUE_MS = 1100;

const easeInOutCubic = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const glideToThreeMoves = event => {
  const target = document.getElementById('three-moves');
  if (!target) return; // let the browser follow the href as a fallback
  event.preventDefault();

  const startY = window.scrollY;
  const endY = startY + target.getBoundingClientRect().top - NAV_HEIGHT;
  const settle = () => window.history.replaceState(null, '', '#three-moves');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.scrollTo(0, endY);
    settle();
    return;
  }

  const started = performance.now();
  const step = now => {
    const t = Math.min(1, (now - started) / SCROLL_CUE_MS);
    window.scrollTo(0, startY + (endY - startY) * easeInOutCubic(t));
    if (t < 1) window.requestAnimationFrame(step);
    else settle();
  };
  window.requestAnimationFrame(step);
};

const NamedDefault = () => {
  // Constrained card thumbnails, cut from the same band photos the four linked
  // pages open with. Query aliases here are what a card's `photo` field names.
  // aspectRatio just bounds the generated height; every card box is a fixed
  // 130px and the image cover-fills it. width: 520 with CONSTRAINED also emits
  // a 2x file, which is what the wide fourth card draws from.
  const cardData = useStaticQuery(graphql`
    query HomeCardImages {
      turkeytailLog: file(relativePath: { eq: "images/bands/turkeytail-log.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 520, aspectRatio: 2.1, placeholder: BLURRED, quality: 78, formats: [AUTO, WEBP, AVIF])
        }
      }
      luminariaRow: file(relativePath: { eq: "images/bands/luminaria-row.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 520, aspectRatio: 2.1, placeholder: BLURRED, quality: 78, formats: [AUTO, WEBP, AVIF])
        }
      }
      willow: file(relativePath: { eq: "images/bands/willow.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 520, aspectRatio: 2.1, placeholder: BLURRED, quality: 78, formats: [AUTO, WEBP, AVIF])
        }
      }
      crystals: file(relativePath: { eq: "images/bands/crystals-header.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 520, aspectRatio: 2.1, placeholder: BLURRED, quality: 78, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  // The homepage body is sans, not the serif every article page is set in,
  // and its sections are full-bleed rather than a reading column — so it
  // overrides the shell's type and renders no Article2026.
  return (
  <Page2026 style={{ fontFamily: sans, fontWeight: 400, lineHeight: 'normal', overflowX: 'visible' }}>

    {/* ======== Hero ======== */}
    {/* Hero photo is licensed stock, not a member's — so no PhotoCredit. */}
    <section style={{
      position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', textAlign: 'center', overflow: 'hidden',
      background: `linear-gradient(165deg,${PAPER} 0%,${SAND} 46%,#cdd9cf 100%)`,
    }}>
      <FullBleedPhoto image="hero.jpg" focus="center 60%" />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
        background: 'radial-gradient(ellipse at 50% 42%, rgba(248,245,239,0.55) 0%, rgba(248,245,239,0.15) 45%, transparent 70%), linear-gradient(180deg, rgba(248,245,239,0.1) 0%, transparent 35%, rgba(38,50,61,0.12) 100%)',
      }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '680px', padding: '2rem' }}>
        {/* 1.4 is only a fallback — .hero-h1 > em splits it into leading within
            a statement plus margin between them. */}
        <h1 className="hero-h1" style={{
          fontFamily: serif, fontWeight: 400, lineHeight: 1.4, fontSize: 'clamp(2.5rem,5vw,4rem)',
          color: INK, margin: '0 0 1.5rem', textShadow: '0 1px 18px rgba(248,245,239,0.7)',
        }}>
          {/* A premise, a question, the response. First word alternates — see
              .hero-swap below. */}
          <em style={{ color: ACCENT, display: 'block' }}>
            <span className="hero-swap">
              <span className="hero-swap-word hero-swap-a">collapse</span>
              <span className="hero-swap-word hero-swap-b">abundance</span>
              <span className="hero-swap-word hero-swap-c">change</span>
            </span> is arriving.
          </em>
          <em style={{ color: ACCENT, display: 'block' }}>what now?</em>
          <em style={{ color: ACCENT, display: 'block' }}>live more intentionally.</em>
        </h1>
        <p style={{
          color: INK, fontSize: '1.10rem', lineHeight: 1.7, margin: '0 auto 2.5rem',
          maxWidth: '560px', textShadow: '0 1px 12px rgba(248,245,239,0.85)',
        }}>
          The world is moving fast. How shall we meet each moment? Intentional Society
          is a micro-society for becoming who we want to be, to face an uncertain world
          with capacity, joy, and integrity.
        </p>
        {/* Scroll cue. The <a> carries the accessible name; the SVG is decorative. */}
        <a href="#three-moves" aria-label="Scroll down to the next section"
          onClick={glideToThreeMoves}
          className="hero-scroll-cue" style={{ color: ACCENT_DARK, display: 'inline-block', lineHeight: 0 }}>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d="M12 4.5v14" />
            <path d="M5.5 12.5 12 19l6.5-6.5" />
          </svg>
        </a>
        <style>{`
          /* Lines inside a statement hug at 1.1 so a wrapped one reads as a
             single thought; the 1.4 between statements is margin instead
             (1.1 + 0.3 = 1.4). */
          .hero-h1 > em { line-height: 1.1; margin-bottom: 0.3em; }
          .hero-h1 > em:last-child { margin-bottom: 0; }
          /* All three words share one grid cell, so the slot is as wide as the
             widest and the line never shifts; justify-items: end keeps the space
             before "is arriving." a single space — a gap there reads as a typo.
             The margin re-centres that fixed slot, splitting the error ~23px
             each way at 63px: (3.835em - 2.393em) / 2, doubled because margin
             also shrinks the line's measured width. It belongs on the slot, not
             the <em>: on the <em> it shifts every line, including a wrapped
             " is arriving." that has no slot to compensate for. */
          .hero-swap {
            display: inline-grid; justify-items: end; vertical-align: baseline;
            margin-left: -0.721em;
          }
          .hero-swap-word { grid-area: 1 / 1; }
          /* 9s: 1.5s hold, 1.5s cross-fade, three times, each word leading the
             last by 3s. The two words mid-fade sit at 0.4, not 0.5, so the pair
             sums to 0.8 and the line dips as it turns over instead of stacking
             into a jumble. linear, or the easing hitches at that midpoint. */
          .hero-swap-a { animation: heroSwapA 9s linear infinite; }
          .hero-swap-b { animation: heroSwapB 9s linear infinite; }
          .hero-swap-c { animation: heroSwapC 9s linear infinite; }
          @keyframes heroSwapA {
            0%, 16.667% { opacity: 1; }        25% { opacity: 0.4; }
            33.333%, 83.333% { opacity: 0; }   91.667% { opacity: 0.4; }
            100% { opacity: 1; }
          }
          @keyframes heroSwapB {
            0%, 16.667% { opacity: 0; }        25% { opacity: 0.4; }
            33.333%, 50% { opacity: 1; }       58.333% { opacity: 0.4; }
            66.667%, 100% { opacity: 0; }
          }
          @keyframes heroSwapC {
            0%, 50% { opacity: 0; }            58.333% { opacity: 0.4; }
            66.667%, 83.333% { opacity: 1; }   91.667% { opacity: 0.4; }
            100% { opacity: 0; }
          }
          .hero-scroll-cue { animation: heroScrollCue 1.8s ease-in-out infinite; border-radius: 50%; }
          .hero-scroll-cue:hover { opacity: 1; }
          .hero-scroll-cue:focus-visible { outline: 2px solid ${ACCENT_DARK}; outline-offset: 6px; }
          @keyframes heroScrollCue {
            0%, 100% { transform: translateY(0);     opacity: 0.7; }
            50%      { transform: translateY(5px); opacity: 1; }
          }
          /* No scroll-behavior: smooth here — glideToThreeMoves() drives the
             scroll itself, and a smooth html would fight its per-frame scrollTo. */
          @media (prefers-reduced-motion: reduce) {
            .hero-scroll-cue { animation: none; opacity: 0.9; }
            /* All three words at once, slashed — no motion, meaning intact. */
            .hero-swap { display: inline; }
            .hero-swap-word { animation: none; opacity: 1; }
            .hero-swap-a::after, .hero-swap-b::after { content: '/'; }
          }
        `}</style>
      </div>
    </section>

    {/* ======== Interstitial: the three moves ======== */}
    {/* wood-band.png carries its own ragged edges; the negative margin pulls it
        up to tear into the hero. The overlap needs both axes — the band's height
        tracks viewport width (1600x600 at width:100%), the hero it covers tracks
        height — so max() splits the range at their crossover, aspect 13/9 ≈ 1.44.
        vh governs phones and tablets, vw every landscape desktop; dial the vw
        term for big displays, the vh term for phones. */}
    <section id="three-moves" style={{
      position: 'relative', zIndex: 3, marginTop: 'calc(-1 * max(13vh, 9vw))', textAlign: 'center',
      scrollMarginTop: NAV_OFFSET, /* clears the fixed nav */
    }}>
      <StaticImage src="../images/photos/wood-band.png" alt="" layout="fullWidth"
        placeholder="none" formats={['auto', 'webp']}
        style={{ display: 'block', width: '100%', pointerEvents: 'none' }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2,
      }}>
        <div style={{ maxWidth: '900px', padding: '0 2rem', textAlign: 'center' }}>
          {/* Padded separator spans with real spaces, not &nbsp; inside one
              unbreakable string: the line needs a ~470px viewport to fit, so on
              a phone it has to be able to wrap. */}
          <div style={{
            fontFamily: serif, fontSize: STATEMENT_SIZE, fontWeight: 300,
            letterSpacing: '0.08em', color: SAND, lineHeight: 1.4,
          }}>
            Awareness <span style={moveSeparator}>·</span> Acceptance <span style={moveSeparator}>·</span> Integrity
          </div>
        </div>
      </div>
    </section>

    {/* ======== About ======== */}
    {/* 5rem top: this now follows the wood band directly. */}
    <section style={{ background: PAPER, padding: '5rem 2rem 8.5rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem', alignItems: 'center',
        }}>
          <figure className="credit-host" style={{ margin: 0, position: 'relative' }}>
            <PhotoCredit name="Bill Claff" variant="corner" />
            <StaticImage src="../images/photos/waterfall.jpg" alt="A small waterfall over dark rock in a quiet forest"
              layout="constrained" width={640} aspectRatio={0.8} placeholder="blurred" formats={['auto', 'webp', 'avif']}
              style={{ width: '100%', borderRadius: '7px 4px 8px 3px', display: 'block' }} />
          </figure>
          <div>
            <h3 style={{ fontFamily: serif, fontWeight: 500, fontStyle: 'italic', fontSize: 'clamp(1.2rem,2vw,1.5rem)', color: ACCENT_DARK, margin: '0 0 0.8rem' }}>
              How Intentional Society began
            </h3>
            <p style={{ fontSize: '20px', color: BODY_TEXT, margin: '0 0 1rem', lineHeight: 1.7 }}>
              In early 2021, a small group began weekly online calls exploring the
              intersection of relational practices with adult development psychology,
              seeking to marry theory with practice and understand <em>how</em> we can grow
              big enough to handle anything life throws at us.
            </p>
            <p style={{ fontSize: '20px', color: BODY_TEXT, margin: 0, lineHeight: 1.7 }}>
              Five+ years and hundreds of gatherings later, we now make up a network of
              relationships and an ecosystem of affiliated spaces, integrating developmental
              (perspective-taking) expansion to more parts of our lives as we "be the change"
              and embody "the more beautiful world our hearts know is possible".
            </p>
          </div>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem', marginTop: '3rem', alignItems: 'center',
        }}>
          <div>
            <h3 style={{ fontFamily: serif, fontWeight: 500, fontStyle: 'italic', fontSize: 'clamp(1.2rem,2vw,1.5rem)', color: ACCENT_DARK, margin: '0 0 0.8rem' }}>
              What it means
            </h3>
            <p style={{ fontSize: '20px', color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 }}>
              Intentional Society isn't one place or one thing you do. It's a stance, a way
              of being — with your evolving self, with others, and with the world around you.
              We offer spaces for increasing capacity: small group practice spaces, training 
              spaces, a congregational space, and a livelihood-workshopping space, 
              loosely linked by a networked relational web which connects and
              celebrates a multiplicity of journeys. The chaotic complexity of this world is
              calling each of us to source and lead as best we can, and so we choose to grow
              our capacity for wise and loving responsiveness.
            </p>
            <Link to="/about" style={{ fontFamily: serif, fontStyle: 'italic', fontWeight: 500, fontSize: '17px', color: ACCENT, textDecoration: 'none' }}>
              More about us →
            </Link>
          </div>
          <figure className="credit-host" style={{ margin: 0, position: 'relative' }}>
            <PhotoCredit name="Bill Claff" variant="corner" />
            <StaticImage src="../images/photos/fungus-trunk.jpg" alt="Layers of turkey-tail fungus climbing a mossy trunk"
              layout="constrained" width={640} aspectRatio={0.8} placeholder="blurred" formats={['auto', 'webp', 'avif']}
              style={{ width: '100%', borderRadius: '4px 8px 3px 7px', display: 'block' }} />
          </figure>
        </div>
      </div>
    </section>

    {/* ======== Interstitial: the mission ======== */}
    {/* ice-torn.png already carries transparent, ragged top/bottom edges — no CSS mask needed. */}
    <section className="credit-host" style={{
      position: 'relative', zIndex: 3,
      minHeight: '460px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
    }}>
      {/* Transparent ragged top/bottom edges must show the PAPER sections
          through them, so placeholder="none" — a blur-up layer would fill the
          torn edges with a colored rectangle. */}
      <StaticImage src="../images/bands/ice-torn.png" alt="" layout="fullWidth"
        placeholder="none" formats={['auto', 'webp']} objectFit="cover" objectPosition="center"
        style={{ position: 'absolute', inset: 0, height: '100%', zIndex: 0 }} />
      <PhotoCredit name="Karla" variant="overlay" />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(12,18,24,0.62) 0%, rgba(12,18,24,0.42) 55%, transparent 80%), linear-gradient(180deg, rgba(12,18,24,0.55) 0%, rgba(12,18,24,0.45) 50%, rgba(12,18,24,0.62) 100%)',
      }} />
      <div style={{ textAlign: 'center', padding: '4rem 2rem', position: 'relative', zIndex: 2 }}>
        <div style={{ ...smallcap, color: SAND, marginBottom: '0.5rem' }}>Our mission:</div>
        {/* Set as verse — each line its own block, so the authored breaks hold. */}
        <p style={{
          fontFamily: serif, fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontStyle: 'italic', fontWeight: 400,
          color: CREAM, maxWidth: '600px', margin: '0 auto', lineHeight: 1.5,
          textShadow: '0 2px 22px rgba(8,12,16,0.9), 0 1px 4px rgba(8,12,16,0.8)',
        }}>
          <span style={{ display: 'block' }}>Those who together are <strong style={missionKey}>becoming</strong></span>
          <span style={{ display: 'block' }}>the people we <strong style={missionKey}>want</strong> to <strong style={missionKey}>be</strong></span>
          <span style={{ display: 'block' }}>and <strong style={missionKey}>doing</strong> what we <strong style={missionKey}>value</strong></span>
          <span style={{ display: 'block' }}>in growing <strong style={missionKey}>integrity</strong> relating to</span>
          <span style={{ display: 'block' }}>each other, ourselves, and the world</span>
        </p>
      </div>
    </section>

    {/* ======== Nav to spaces ======== */}
    <section style={{ background: PAPER, padding: '4rem 2rem 5rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{
          fontFamily: serif, fontSize: '1.6rem', fontWeight: 400, color: HEADING,
          textAlign: 'center', marginBottom: '2.5rem',
        }}>
          What brings you here?
        </div>
        <div style={cardGrid}>
          {spaces.map(s => (
            <SpaceCard key={s.title} card={s} image={getImage(cardData[s.photo])} />
          ))}
        </div>
        <SpaceCard card={webCard} image={getImage(cardData[webCard.photo])} wide />
        <style>{`
          /* The whole card is one <a>, so it has to look like a target. */
          .space-card {
            box-shadow: 0 1px 2px rgba(42,42,36,0.05), 0 8px 20px rgba(42,42,36,0.06);
            transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
          }
          .space-card:hover, .space-card:focus-visible {
            transform: translateY(-4px);
            box-shadow: 0 2px 4px rgba(42,42,36,0.07), 0 16px 34px rgba(42,42,36,0.13);
            border-color: rgba(46,107,79,0.35);
          }
          .space-card:focus-visible { outline: 2px solid ${ACCENT_DARK}; outline-offset: 3px; }
          /* Swooped bottom edge: the two horizontal radii sum to 100%, so the
             curves meet in one arc instead of leaving a flat run between. */
          .space-card-photo { border-radius: 0 0 60% 40% / 0 0 26px 9px; }
          /* Two columns plus the gap between them: with three 1fr columns at a
             1.5rem gap that's 66.667% - 0.5rem. Below 832px the grid is already
             down to two columns, where that width is simply the container. */
          .space-card-wide { width: calc(66.6667% - 0.5rem); margin: 1.5rem auto 0; }
          @media (max-width: 831px) { .space-card-wide { width: 100%; } }
          .space-card-cta {
            margin-top: auto; padding: 0 1.5rem;
            font-family: ${serif}; font-size: 1.3rem; font-weight: 500;
            color: ${ACCENT}; transition: color 180ms ease;
          }
          .space-card:hover .space-card-cta { color: ${ACCENT_DARK}; }
          .space-card-cta-text {
            text-decoration: underline; text-decoration-thickness: 1px;
            text-underline-offset: 4px; text-decoration-color: rgba(46,107,79,0.5);
            transition: text-decoration-color 180ms ease;
          }
          .space-card:hover .space-card-cta-text { text-decoration-color: ${ACCENT_DARK}; }
          .space-card-arrow {
            display: inline-block; margin-right: 0.4rem;
            transition: transform 180ms ease;
          }
          .space-card:hover .space-card-arrow { transform: translateX(3px); }
          @media (prefers-reduced-motion: reduce) {
            .space-card, .space-card-arrow, .space-card-cta-text { transition: none; }
            .space-card:hover, .space-card:focus-visible { transform: none; }
            .space-card:hover .space-card-arrow { transform: none; }
          }
        `}</style>
      </div>
    </section>

    {/* ======== Interstitial: testimonials ======== */}
    <section style={{
      position: 'relative', background: MOSS_TINT,
      padding: '4rem 2rem 5rem', overflow: 'hidden',
    }}>
      <FullBleedPhoto image="moss.jpg" focus="center" />
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, background: 'rgba(237,241,233,0.78)' }} />
      {/* The band above names the moves; this names what they add up to. A flex
          row so it reads as one chain and folds to a stack on a phone with no
          breakpoint to maintain. Outside the 900px quote column so the line has
          room to run; the -1rem margin pulls the section's gutter back to the
          1rem this line needs to fold cleanly on a phone. */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', margin: '0 -1rem 6rem' }}>
        <div style={{ ...smallcap, color: QUOTES_LABEL, marginBottom: '1.2rem' }}>
          Our theory of change:
        </div>
        <h2 style={tocLine}>
          <em style={tocKey}>human connection</em>
          <span style={tocJoin}>catalyzes</span>
          <em style={tocKey}>inner development</em>
          <span style={tocJoin}>enables</span>
          <em style={tocKey}>wise action</em>
        </h2>
      </div>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ ...smallcap, color: QUOTES_LABEL, textAlign: 'center', marginBottom: '1.2rem' }}>
          What's our vibe? Quotes from Community:
        </div>
        <Quote who="Renee">
          People are joining to be challenged beyond that fabric of the regular relationship…
          experimentation of relating differently and growing into a version of myself I want to be.
        </Quote>
        <div style={quotePair}>
          <Quote who="Jochen">
            There is often a sense of &lsquo;relaxation towards experimentation.&rsquo; It is OK to
            express myself freely… a &lsquo;familiar frame&rsquo; that does create a sense of
            intimacy and openness.
          </Quote>
          <Quote who="fig">
            This space reminds me that there are other people living unconventional lives…
            it reminds me to not give up on aspiring to live fully.
          </Quote>
        </div>
      </div>
    </section>

    {/* ======== Call to action ======== */}
    <section style={{
      position: 'relative', zIndex: 3, padding: '5rem 2rem', textAlign: 'center', overflow: 'hidden',
      background: 'radial-gradient(ellipse at 50% 80%, rgba(46,107,79,0.25) 0%, transparent 60%), linear-gradient(175deg,#1e2822 0%,#1a2420 50%,#1e2420 100%)',
    }}>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '550px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: serif, fontWeight: 400, fontStyle: 'italic', lineHeight: 1.2,
          fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: CREAM, margin: '0 0 1rem',
        }}>
          Follow your curiosity one step closer
        </h2>
        <p style={{ color: 'rgba(250,248,243,0.85)', fontSize: '17px', margin: '0 0 0.5rem', lineHeight: 1.7 }}>
          Subscribe to our newsletter, drop into a Connection Call, or step into the
          relational web — whatever next step is right for you.
        </p>
        <Link to="/get-involved" style={{
          display: 'inline-block', marginTop: '1.5rem', padding: '0.8rem 2rem',
          border: '1px solid rgba(122,158,138,0.4)', color: SAGE, textDecoration: 'none',
          fontSize: '15px', borderRadius: '3px',
        }}>Get involved</Link>
      </div>
    </section>

  </Page2026>
  );
};

export default NamedDefault;

export const Head = ({ location }) => (
  <Head2026 {...PAGE} pathname={location.pathname} />
);
