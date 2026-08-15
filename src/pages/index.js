import React from 'react';
import { Link } from 'gatsby';
import {
  serif, sans, ACCENT, ACCENT_DARK, INK, MUTED, BODY_TEXT, PAPER,
  Grain2026, Nav2026, Footer2026, Head2026,
} from '../components/design2026/chrome';

// 2026 homepage redesign — self-contained page ported from the Claude Design
// mockup, using the shared 2026 chrome (components/design2026/). Section
// rhythm: main content sections (light, informational) alternating with
// interstitials (darker, atmospheric): Hero / three moves / About / mission /
// spaces / testimonials / call to action. Torn-edge transitions are baked
// into the section images themselves (wood-band.png, ice-torn.png) rather
// than a generic CSS mask.

const spaces = [
  {
    title: 'Find others',
    to: '/community',
    img: '/design2026/card-practice.jpg',
    alt: 'Hibiscus anthers gathered around a stigma',
    fallback: 'linear-gradient(135deg,#D4A88C 0%,#b9617a 100%)',
    text: "You're drawn to inner development — awareness, acceptance, integrity — and want a community to grow alongside.",
    radius: '8px 4px 6px 3px',
  },
  {
    title: 'Intentional practice',
    to: '/dojo',
    img: '/design2026/card-find-others.jpg',
    alt: 'A blue salvia bud beginning to open',
    fallback: 'linear-gradient(135deg,#3A5A8A 0%,#1E3550 100%)',
    text: 'You are interested in relational practices. Learn and practice with others in a peer-led developmental space.',
    radius: '3px 7px 4px 6px',
  },
  {
    title: 'Work with purpose',
    to: '/iv',
    img: '/design2026/card-work.jpg',
    alt: 'A frost-covered stamen against deep blue',
    fallback: 'linear-gradient(135deg,#cdd9e2 0%,#3A5A8A 100%)',
    text: 'You have a project or venture idea and want to develop it within a values-aligned community.',
    radius: '6px 3px 7px 4px',
  },
]

const kicker = {
  fontFamily: serif, fontSize: '13px', letterSpacing: '0.18em',
  textTransform: 'uppercase', fontWeight: 600,
};

const ctaButton = {
  display: 'inline-block', padding: '0.8rem 2rem', background: ACCENT,
  color: '#fff', textDecoration: 'none', fontFamily: sans, fontSize: '16px',
  fontWeight: 500, letterSpacing: '0.03em', borderRadius: '3px',
};

const NamedDefault = () => (
  <div style={{ fontFamily: sans, background: PAPER, color: INK }}>

    <Grain2026 />
    <Nav2026 />

    {/* ======== Hero ======== */}
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
        <div style={{ ...kicker, color: ACCENT_DARK, marginBottom: '1.5rem' }}>
          An experiment in becoming together
        </div>
        <h1 style={{
          fontFamily: serif, fontWeight: 400, lineHeight: 1.2, fontSize: 'clamp(2.5rem,5vw,4rem)',
          color: INK, margin: '0 0 1.5rem', textShadow: '0 1px 18px rgba(248,245,239,0.7)',
        }}>
          Something is <em style={{ color: ACCENT }}>already growing</em> here
        </h1>
        <p style={{
          color: INK, fontSize: '1.10rem', fontWeight: 500, lineHeight: 1.7, margin: '0 auto 2.5rem',
          maxWidth: '560px', textShadow: '0 1px 12px rgba(248,245,239,0.85)',
        }}>
          An online community for inner development, wise action, and human connection
          — peer-led, free, and five years into the work.
        </p>
        <Link to="/get-involved" style={ctaButton}>Enter the community</Link>
      </div>
    </section>

    {/* ======== Interstitial: the three moves ======== */}
    {/* wood-band.png carries its own ragged top/bottom edges (transparent PNG); the
        negative margin pulls it up to tear into the hero above. */}
    <section style={{ position: 'relative', zIndex: 3, marginTop: '-150px', textAlign: 'center' }}>
      <img src="/design2026/wood-band.png" alt="" aria-hidden="true"
        style={{ display: 'block', width: '100%', height: 'auto', pointerEvents: 'none' }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2,
      }}>
        <div style={{ maxWidth: '900px', padding: '0 2rem', textAlign: 'center' }}>
          <div style={{
            fontFamily: serif, fontSize: 'clamp(1.3rem,2.6vw,2.2rem)', fontWeight: 300,
            letterSpacing: '0.08em', color: '#E8DFD0', whiteSpace: 'nowrap',
          }}>
            Awareness&nbsp;&nbsp;·&nbsp;&nbsp;Acceptance&nbsp;&nbsp;·&nbsp;&nbsp;Integrity
          </div>
          <p style={{
            fontFamily: serif, fontStyle: 'italic', color: 'rgba(232,223,208,0.75)',
            fontSize: '1.05rem', lineHeight: 1.7, marginTop: '1.2rem', marginBottom: 0,
          }}>
            Three moves, practiced together, that add up to growing — as people and as a people.
          </p>
        </div>
      </div>
    </section>

    {/* ======== About ======== */}
    <section style={{ background: PAPER, padding: '2rem 2rem 8.5rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: serif, fontWeight: 300, lineHeight: 1.2,
          fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: '#5C4A3A', margin: '0 0 2rem',
        }}>
          We began with a hunch about what people could become together
        </h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem', marginTop: '2.5rem', alignItems: 'center',
        }}>
          <figure style={{ margin: 0 }}>
            <img src="/design2026/waterfall.jpg" alt="A small waterfall over dark rock in a quiet forest"
              style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: '7px 4px 8px 3px', display: 'block' }} />
            <figcaption style={{ fontSize: '14px', fontStyle: 'italic', color: MUTED, marginTop: '0.6rem' }}>
              By Bill — community member and avid photographer.
            </figcaption>
          </figure>
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div>
              <h3 style={{ fontFamily: serif, fontWeight: 500, fontStyle: 'italic', fontSize: 'clamp(1.2rem,2vw,1.5rem)', color: ACCENT_DARK, margin: '0 0 0.8rem' }}>
                How it started
              </h3>
              <p style={{ fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1rem', lineHeight: 1.7 }}>
                In early 2020, a small group began meeting weekly on an intuition: that genuine
                human development — becoming more aware, more honest, more capable of real
                contact — was possible in a virtual circle, and that doing it together was
                better than alone.
              </p>
              <p style={{ fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: 0, lineHeight: 1.7 }}>
                Five years and hundreds of gatherings later, something real has accumulated.
                The circle has grown to include people from thirty countries who share a pull
                toward a more spacious way of being.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: serif, fontWeight: 500, fontStyle: 'italic', fontSize: 'clamp(1.2rem,2vw,1.5rem)', color: ACCENT_DARK, margin: '0 0 0.8rem' }}>
                What we actually do
              </h3>
              <p style={{ fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1rem', lineHeight: 1.7 }}>
                Every Sunday we gather — not for a lecture, but for something closer to a
                living room with intention. Relational practices, peer-supported inner work,
                noticing exercises. Between calls, small pods of four meet to go deeper.
              </p>
              <p style={{ fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 }}>
                There is no teacher at the front of the room. We are peer-led, not
                expert-delivered. What makes it work is the regularity — depth requires
                continuity.
              </p>
              <Link to="/about" style={{ fontFamily: serif, fontStyle: 'italic', fontWeight: 500, fontSize: '17px', color: ACCENT, textDecoration: 'none' }}>
                More about who we are and where we came from →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ======== Interstitial: the mission ======== */}
    {/* ice-torn.png already carries transparent, ragged top/bottom edges — no CSS mask needed. */}
    <section style={{
      position: 'relative', zIndex: 3,
      background: 'url(/design2026/ice-torn.png) center/cover',
      minHeight: '460px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(12,18,24,0.62) 0%, rgba(12,18,24,0.42) 55%, transparent 80%), linear-gradient(180deg, rgba(12,18,24,0.55) 0%, rgba(12,18,24,0.45) 50%, rgba(12,18,24,0.62) 100%)',
      }} />
      <div style={{ textAlign: 'center', padding: '4rem 2rem', position: 'relative', zIndex: 2 }}>
        <div style={{ ...kicker, color: '#E8DFD0', marginBottom: '0.5rem' }}>Our mission</div>
        <p style={{
          fontFamily: serif, fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontStyle: 'italic', fontWeight: 400,
          color: '#FAF8F3', maxWidth: '600px', margin: '0 auto', lineHeight: 1.5,
          textShadow: '0 2px 22px rgba(8,12,16,0.9), 0 1px 4px rgba(8,12,16,0.8)',
        }}>
          Noticing and welcoming what is actually present — in ourselves and in each
          other — rather than what we think should be there.
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
              <div role="img" aria-label={s.alt} style={{
                height: '130px', marginBottom: '1.3rem', overflow: 'hidden',
                background: `url(${s.img}) center/cover, ${s.fallback}`,
              }} />
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
