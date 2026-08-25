import React from 'react';
import { Link } from 'gatsby';
import {
  serif, sans, ACCENT, ACCENT_DARK, INK, MUTED, BODY_TEXT, PAPER,
  Grain2026, Nav2026, Footer2026, Head2026, PhotoCredit,
  NAV_HEIGHT, NAV_OFFSET,
} from '../components/design2026/chrome';

// 2026 homepage redesign — self-contained, using the shared 2026 chrome
// (components/design2026/). Light content sections alternate with darker
// atmospheric interstitials. Torn edges are baked into the section images
// (wood-band.png, ice-torn.png), not a CSS mask.

const spaces = [
  {
    title: 'Find others',
    to: '/community',
    img: '/design2026/flame-azalea.jpg',
    alt: 'A cluster of orange flame azalea blossoms',
    fallback: 'linear-gradient(135deg,#D4A88C 0%,#b9617a 100%)',
    text: "You're drawn to inner development — awareness, acceptance, integrity — and want a community to grow alongside.",
    radius: '8px 4px 6px 3px',
  },
  {
    title: 'Intentional practice',
    to: '/dojo',
    img: '/design2026/cosmos.jpg',
    alt: 'A magenta cosmos flower against soft green',
    fallback: 'linear-gradient(135deg,#7A9E8A 0%,#b9617a 100%)',
    text: 'You are interested in relational practices. Learn and practice with others in a peer-led developmental space.',
    radius: '3px 7px 4px 6px',
  },
  {
    title: 'Work with purpose',
    to: '/iv',
    img: '/design2026/monarch-goldenrod.jpg',
    alt: 'A monarch butterfly feeding on goldenrod',
    fallback: 'linear-gradient(135deg,#D4A88C 0%,#7A9E8A 100%)',
    text: 'You have a project or venture idea and want to develop it within a values-aligned community.',
    radius: '6px 3px 7px 4px',
  },
]

const kicker = {
  fontFamily: serif, fontSize: '13px', letterSpacing: '0.18em',
  textTransform: 'uppercase', fontWeight: 600,
};

// Theory-of-change line: three accented phrases joined by two smaller plain
// verbs, as a flex row that folds to a stack when it runs out of room.
// The clamp's floor is the load-bearing number, not its ceiling — 2.2rem is the
// largest that still folds to three lines on a 360px phone. nowrap on both, so
// wrapping only ever happens between items.
const tocPhrase = { fontSize: 'clamp(2.2rem,3vw,4rem)', whiteSpace: 'nowrap' };
const tocLabelSize = '0.92rem';
// Plain serif rather than the tracked small caps used for labels elsewhere:
// these are part of the sentence, not a label on it. Sized in em so the
// contrast with the phrase stays constant at any phrase size.
const tocJoin = {
  fontFamily: serif, fontSize: '0.53em', fontWeight: 400,
  color: ACCENT_DARK, whiteSpace: 'nowrap',
};

// The "·" between the three moves. Padding rather than &nbsp; keeps the line's
// wrap points, so it can break on a phone instead of overflowing the band.
const moveSeparator = { padding: '0 0.32em' };

// 700 is a real self-hosted Cormorant italic face, not a synthesised bold.
const missionKey = { fontWeight: 700 };

// Teal CTA button — currently unused (the hero's "Enter the community" button
// became a scroll cue); kept for future CTAs, like .big-button in global.module.css.
const ctaButton = {
  display: 'inline-block', padding: '0.8rem 2rem', background: ACCENT,
  color: '#fff', textDecoration: 'none', fontFamily: sans, fontSize: '16px',
  fontWeight: 500, letterSpacing: '0.03em', borderRadius: '3px',
};

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

const NamedDefault = () => (
  <div style={{ fontFamily: sans, background: PAPER, color: INK }}>

    <Grain2026 />
    <Nav2026 />

    {/* ======== Hero ======== */}
    {/* Hero photo is licensed stock, not a member's — so no PhotoCredit. */}
    <section style={{
      position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', textAlign: 'center', overflow: 'hidden',
      background: 'url(/design2026/hero.jpg) center 60%/cover, linear-gradient(165deg,#F8F5EF 0%,#E8DFD0 46%,#cdd9cf 100%)',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 42%, rgba(248,245,239,0.55) 0%, rgba(248,245,239,0.15) 45%, transparent 70%), linear-gradient(180deg, rgba(248,245,239,0.1) 0%, transparent 35%, rgba(38,50,61,0.12) 100%)',
      }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '680px', padding: '2rem' }}>
        {/* lineHeight 1.7, not a display line's usual 1.2: three separate
            statements, not one wrapped sentence. */}
        <h1 style={{
          fontFamily: serif, fontWeight: 400, lineHeight: 1.7, fontSize: 'clamp(2.5rem,5vw,4rem)',
          color: INK, margin: '0 0 1.5rem', textShadow: '0 1px 18px rgba(248,245,239,0.7)',
        }}>
          {/* A premise, a question, the response. First word alternates — see
              .hero-swap below. */}
          <em className="hero-swap-line" style={{ color: ACCENT, display: 'block' }}>
            <span className="hero-swap">
              <span className="hero-swap-word hero-swap-a">collapse</span>
              <span className="hero-swap-word hero-swap-b">abundance</span>
            </span> is arriving.
          </em>
          <em style={{ color: ACCENT, display: 'block' }}>what now?</em>
          <em style={{ color: ACCENT, display: 'block' }}>be more intentional.</em>
        </h1>
        <p style={{
          color: INK, fontSize: '1.10rem', fontWeight: 500, lineHeight: 1.7, margin: '0 auto 2.5rem',
          maxWidth: '560px', textShadow: '0 1px 12px rgba(248,245,239,0.85)',
        }}>
          Intentional Society is a micro-society organizing around becoming who we want
          to be, individually and collectively, in order to face an uncertain world with
          capacity, joy, and integrity.
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
          /* Both words share one grid cell, so the slot is as wide as the wider
             of them and the rest of the line never shifts. justify-items: end
             keeps the space before "is arriving." a single space in both
             states — a gap inside the sentence reads as a typo. */
          .hero-swap { display: inline-grid; justify-items: end; vertical-align: baseline; }
          /* A quarter of the two words' width difference, pulled left. A fixed
             slot can't centre both states, so this splits the error (~12px each
             way) instead of centring one. Re-measure if either word changes. */
          .hero-swap-line { position: relative; left: -0.283em; }
          .hero-swap-word { grid-area: 1 / 1; }
          /* 7s: 2s hold, 1.5s cross-fade, twice (percentages are those seconds
             over 7). Both words sit at 0.4 mid-fade rather than 0.5, so the pair
             sums to 0.8 and the line dips as it turns over instead of stacking
             into a jumble. linear, or the easing hitches at that midpoint. */
          .hero-swap-a { animation: heroSwapA 7s linear infinite; }
          .hero-swap-b { animation: heroSwapB 7s linear infinite; }
          @keyframes heroSwapA {
            0%, 28.57% { opacity: 1; }   39.29% { opacity: 0.4; }
            50%, 78.57% { opacity: 0; }  89.29% { opacity: 0.4; }
            100% { opacity: 1; }
          }
          @keyframes heroSwapB {
            0%, 28.57% { opacity: 0; }   39.29% { opacity: 0.4; }
            50%, 78.57% { opacity: 1; }  89.29% { opacity: 0.4; }
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
            /* Both words at once, slashed — no motion, meaning intact. */
            .hero-swap { display: inline; }
            .hero-swap-word { animation: none; opacity: 1; }
            .hero-swap-a::after { content: '/'; }
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
      <img src="/design2026/wood-band.png" alt="" aria-hidden="true"
        style={{ display: 'block', width: '100%', height: 'auto', pointerEvents: 'none' }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2,
      }}>
        <div style={{ maxWidth: '900px', padding: '0 2rem', textAlign: 'center' }}>
          {/* Padded separator spans with real spaces, not &nbsp; inside one
              unbreakable string: the line needs a ~470px viewport to fit, so on
              a phone it has to be able to wrap. */}
          <div style={{
            fontFamily: serif, fontSize: 'clamp(1.35rem,3.6vw,3rem)', fontWeight: 300,
            letterSpacing: '0.08em', color: '#E8DFD0', lineHeight: 1.4,
          }}>
            Awareness <span style={moveSeparator}>·</span> Acceptance <span style={moveSeparator}>·</span> Integrity
          </div>
        </div>
      </div>
    </section>

    {/* ======== Theory of change ======== */}
    {/* The band above names the moves; this names what they add up to. A flex
        row so it reads as one chain and folds to a stack on a phone with no
        breakpoint to maintain. The label is a kicker rather than an inline
        "...:" lead-in, matching "Our mission" below. 1rem of side padding, not
        2rem — those 32px are what hold the fold to three lines at 360px. */}
    <section style={{ background: PAPER, padding: '3.5rem 1rem 1.5rem', textAlign: 'center' }}>
      <div style={{ ...kicker, fontSize: tocLabelSize, color: '#5C4A3A', marginBottom: '1.2rem' }}>
        Our theory of change
      </div>
      <h2 style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'center',
        columnGap: '0.7em', rowGap: '0.3em', maxWidth: '1750px', margin: '0 auto',
        fontFamily: serif, fontWeight: 400, lineHeight: 1.25, color: INK,
        ...tocPhrase,
      }}>
        <em style={{ color: ACCENT }}>human connection</em>
        <span style={tocJoin}>catalyzes</span>
        <em style={{ color: ACCENT }}>inner development</em>
        <span style={tocJoin}>leading to</span>
        <em style={{ color: ACCENT }}>wise action</em>
      </h2>
    </section>

    {/* ======== About ======== */}
    <section style={{ background: PAPER, padding: '2rem 2rem 8.5rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* No section heading — the theory-of-change line above does that job. */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem', alignItems: 'center',
        }}>
          <figure className="credit-host" style={{ margin: 0, position: 'relative' }}>
            <PhotoCredit name="Bill" />
            <img src="/design2026/waterfall.jpg" alt="A small waterfall over dark rock in a quiet forest"
              style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: '7px 4px 8px 3px', display: 'block' }} />
          </figure>
          <div>
            <h3 style={{ fontFamily: serif, fontWeight: 500, fontStyle: 'italic', fontSize: 'clamp(1.2rem,2vw,1.5rem)', color: ACCENT_DARK, margin: '0 0 0.8rem' }}>
              How Intentional Society began
            </h3>
            <p style={{ fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1rem', lineHeight: 1.7 }}>
              In early 2021, a small group began weekly online calls exploring the
              intersection of relational practices with adult development psychology,
              seeking to marry theory with practice and understand <em>how</em> we can grow
              big enough to handle anything life throws at us.
            </p>
            <p style={{ fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: 0, lineHeight: 1.7 }}>
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
              What that means for you
            </h3>
            <p style={{ fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 }}>
              Intentional Society isn't one place or one thing you do. It's a stance, a way
              of being — with your evolving self, with others, and with the world around you.
              We offer spaces for practice in small groups, in a school (training/learning)
              context, in a congregational setting, and/or in a workshop (livelihood support)
              model, all linked across a networked relational web which connects and
              celebrates a multiplicity of journeys. The chaotic complexity of this world is
              calling each of us to source and lead as best we can, and so we choose to grow
              our capacity for wise and loving responsiveness.
            </p>
            <Link to="/about" style={{ fontFamily: serif, fontStyle: 'italic', fontWeight: 500, fontSize: '17px', color: ACCENT, textDecoration: 'none' }}>
              More about us →
            </Link>
          </div>
          <figure className="credit-host" style={{ margin: 0, position: 'relative' }}>
            <PhotoCredit name="Bill" />
            <img src="/design2026/fungus-trunk.jpg" alt="Layers of turkey-tail fungus climbing a mossy trunk"
              style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: '4px 8px 3px 7px', display: 'block' }} />
          </figure>
        </div>
      </div>
    </section>

    {/* ======== Interstitial: the mission ======== */}
    {/* ice-torn.png already carries transparent, ragged top/bottom edges — no CSS mask needed. */}
    <section className="credit-host" style={{
      position: 'relative', zIndex: 3,
      background: 'url(/design2026/ice-torn.png) center/cover',
      minHeight: '460px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
    }}>
      <PhotoCredit name="Karla" />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(12,18,24,0.62) 0%, rgba(12,18,24,0.42) 55%, transparent 80%), linear-gradient(180deg, rgba(12,18,24,0.55) 0%, rgba(12,18,24,0.45) 50%, rgba(12,18,24,0.62) 100%)',
      }} />
      <div style={{ textAlign: 'center', padding: '4rem 2rem', position: 'relative', zIndex: 2 }}>
        <div style={{ ...kicker, color: '#E8DFD0', marginBottom: '0.5rem' }}>Our mission</div>
        {/* Set as verse — each line its own block, so the authored breaks hold. */}
        <p style={{
          fontFamily: serif, fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontStyle: 'italic', fontWeight: 400,
          color: '#FAF8F3', maxWidth: '600px', margin: '0 auto', lineHeight: 1.5,
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
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ fontFamily: serif, fontSize: '1.6rem', fontWeight: 400, color: '#5C4A3A' }}>
            What brings you here?
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {spaces.map(s => (
            <Link key={s.title} to={s.to} style={{
              background: '#FAF8F3', border: '1px solid rgba(42,42,36,0.06)', padding: '0 0 1.8rem',
              textDecoration: 'none', color: INK, position: 'relative', overflow: 'hidden',
              borderRadius: s.radius, display: 'block',
            }}>
              <div className="credit-host" role="img" aria-label={s.alt} style={{
                position: 'relative', height: '130px', marginBottom: '1.3rem', overflow: 'hidden',
                background: `url(${s.img}) center/cover, ${s.fallback}`,
              }}>
                <PhotoCredit name="Bill" inset={8} />
              </div>
              <h3 style={{ fontFamily: serif, fontWeight: 500, fontSize: '1.3rem', margin: '0 0 0.8rem', padding: '0 1.5rem' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '18px', fontWeight: 500, color: BODY_TEXT, lineHeight: 1.6, padding: '0 1.5rem', margin: 0 }}>
                {s.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ======== Interstitial: testimonials ======== */}
    <section style={{
      position: 'relative', background: 'url(/design2026/moss.jpg) center/cover',
      padding: '4rem 2rem 5rem', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'rgba(237,241,233,0.92)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', padding: '3rem 2rem', marginBottom: '2rem', position: 'relative' }}>
          <div style={{
            fontFamily: serif, fontSize: '6rem', color: '#7A9E8A', opacity: 0.3, position: 'absolute',
            top: '-0.5rem', left: '50%', transform: 'translateX(-50%)', lineHeight: 1,
          }}>“</div>
          <blockquote style={{
            fontFamily: serif, fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontStyle: 'italic', fontWeight: 400,
            color: INK, lineHeight: 1.6, maxWidth: '650px', margin: '0 auto 1rem',
          }}>
            People are joining to be challenged beyond that fabric of the regular relationship…
            experimentation of relating differently and growing into a version of myself I want to be.
          </blockquote>
          <div style={{ fontSize: '15px', color: MUTED }}>— Renee</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div style={{ padding: '1.5rem', background: '#FAF8F3', borderLeft: '2px solid #7A9E8A' }}>
            <blockquote style={{ fontSize: '18px', fontWeight: 500, color: INK, fontStyle: 'italic', margin: '0 0 0.8rem', lineHeight: 1.7 }}>
              "There is often a sense of 'relaxation towards experimentation.' It is OK to express
              myself freely… a 'familiar frame' that does create a sense of intimacy and openness."
            </blockquote>
            <div style={{ fontSize: '15px', color: MUTED }}>— Jochen</div>
          </div>
          <div style={{ padding: '1.5rem', background: '#FAF8F3', borderLeft: '2px solid #7A9E8A' }}>
            <blockquote style={{ fontSize: '18px', fontWeight: 500, color: INK, fontStyle: 'italic', margin: '0 0 0.8rem', lineHeight: 1.7 }}>
              "This space reminds me that there are other people living unconventional lives…
              it reminds me to not give up on aspiring to live fully."
            </blockquote>
            <div style={{ fontSize: '15px', color: MUTED }}>— fig</div>
          </div>
        </div>
      </div>
    </section>

    {/* ======== Call to action ======== */}
    <section style={{
      position: 'relative', zIndex: 3, padding: '5rem 2rem', textAlign: 'center', overflow: 'hidden',
      background: 'radial-gradient(ellipse at 50% 80%, rgba(46,107,79,0.25) 0%, transparent 60%), linear-gradient(175deg,#1e2822 0%,#1a2420 50%,#1e2420 100%)',
    }}>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '550px', margin: '0 auto' }}>
        <div style={{ ...kicker, color: '#7A9E8A', marginBottom: '1rem' }}>The next step</div>
        <h2 style={{
          fontFamily: serif, fontWeight: 400, fontStyle: 'italic', lineHeight: 1.2,
          fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: '#FAF8F3', margin: '0 0 1rem',
        }}>
          Come find your place here
        </h2>
        <p style={{ color: 'rgba(250,248,243,0.85)', fontSize: '17px', margin: '0 0 0.5rem', lineHeight: 1.7 }}>
          Follow along with our newsletter, drop into a Connection Call, or step into the
          relational web — there's a doorway for every level of curiosity.
        </p>
        <Link to="/get-involved" style={{
          display: 'inline-block', marginTop: '1.5rem', padding: '0.8rem 2rem',
          border: '1px solid rgba(122,158,138,0.4)', color: '#7A9E8A', textDecoration: 'none',
          fontSize: '15px', fontWeight: 500, borderRadius: '3px',
        }}>Get involved</Link>
      </div>
    </section>

    <Footer2026 />
  </div>
);

export default NamedDefault;

export const Head = () => (
  <Head2026
    title="Intentional Society"
    description="An online community for inner development, wise action, and human connection — peer-led, free, and five years into the work."
  />
);
