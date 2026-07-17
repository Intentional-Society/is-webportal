import React from 'react';
import { Link } from 'gatsby';
import {
  serif, sans, ACCENT_DARK, INK, BODY_TEXT, PAPER,
  Grain2026, Nav2026, Footer2026, Head2026,
} from '../components/design2026/chrome';

// 2026 redesign of the Ventures page — self-contained page ported from the
// Claude Design mockup, using the shared 2026 chrome (components/design2026/).

const linkStyle = { color: ACCENT_DARK };

const sectionHeading = {
  fontFamily: serif, fontWeight: 300, lineHeight: 1.2,
  fontSize: 'clamp(1.5rem,2.6vw,2rem)', color: '#5C4A3A', margin: '0 0 1.4rem',
};

const bodyP = { fontSize: '16px', color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 };

const divider = <hr style={{ border: 'none', borderTop: '1px solid rgba(42,42,36,0.12)', margin: '0 auto 3rem', width: '120px' }} />;

const NamedDefault = () => (
  <div style={{ fontFamily: serif, fontWeight: 300, color: INK, lineHeight: 1.7, background: PAPER, position: 'relative', overflowX: 'hidden' }}>

    <Grain2026 />
    <Nav2026 active="/iv" />

    {/* ======== Header band ======== */}
    <header style={{
      position: 'relative', marginTop: '77px', minHeight: '340px', display: 'flex',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden',
      background: 'url(/design2026/waterfall.jpg) center/cover, #1c2730',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(14,18,22,0.62) 0%, rgba(14,18,22,0.55) 50%, rgba(14,18,22,0.68) 100%)',
      }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '640px', padding: '4rem 2rem' }}>
        <div style={{
          fontFamily: sans, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
          fontWeight: 500, color: '#E8DFD0', opacity: 0.9, marginBottom: '1.2rem',
        }}>Intentional Ventures</div>
        <h1 style={{
          fontFamily: serif, fontWeight: 400, lineHeight: 1.25, fontSize: 'clamp(2rem,4vw,3rem)',
          color: '#FAF8F3', textShadow: '0 2px 24px rgba(8,12,16,0.8)', margin: 0,
        }}>
          Aligned livelihoods, woven into a relational economic web
        </h1>
      </div>
    </header>

    {/* ======== Article body ======== */}
    <main style={{ position: 'relative', zIndex: 3, background: PAPER, padding: '4rem 2rem 5rem' }}>
      <article style={{ maxWidth: '720px', margin: '0 auto' }}>

        <p style={bodyP}>
          The first goal of IV is to <strong style={{ fontWeight: 500 }}>catalyze aligned livelihoods</strong> for
          individuals in service to human thriving. The second goal of IV is to create
          a <strong style={{ fontWeight: 500 }}>relational economic web</strong> of abundance with
          clan / tribe / village-like bonds of support. These two goals are interdependent and
          equal in value. Livelihood is the more tangible individualized task, around which the
          more nebulous relational web layer hopes to cohere.
        </p>

        <p style={bodyP}>
          Intentional Ventures is by invitation only. We onboarded a new cohort in early 2026,
          and do not anticipate adding more participants for the near-to-medium-term future.
          However, we're still always interested in hearing from like-minded folks. You
          can <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWtrt_DBkpKHgujWzlxQJJiiW466NNU28s9dAe__ujVwS9_g/viewform?usp=sharing" target="_blank" rel="noopener noreferrer" style={linkStyle}>register
          your interest</a> or bring questions to an <Link to="/get-involved#connection-calls" style={linkStyle}>IS
          Connection Call</Link>.
        </p>

        <p style={bodyP}>IV heartbeat calls happen Fridays at 9am Pacific / Noon Eastern.</p>

        <p style={{ ...bodyP, marginBottom: '2rem' }}>
          The capital pool for IV investments intends to open to external donors in 2026.
        </p>

        {divider}

        <h2 style={sectionHeading}>History: the story so far</h2>

        <p style={bodyP}>Intentional Ventures began April 2024 with a founding team of about a dozen.</p>

        <p style={bodyP}>
          After three quarters with its founding team, at the end of 2024 IV had experimentally
          generated revenue, established key design principles, evolved a two-space structure,
          and added its first new (non-founding) participants.
        </p>

        <p style={{ ...bodyP, marginBottom: '0.8rem' }}>
          Inside Limicon 2025 (throughout March), some IV "exploration space" activities were
          shared in a four-part "Build-a-thon" series:
        </p>
        <ul style={{ fontSize: '16px', color: BODY_TEXT, margin: '0 0 1.4rem 1.4rem', padding: 0 }}>
          <li style={{ marginBottom: '0.4rem' }}>Generative ideation</li>
          <li style={{ marginBottom: '0.4rem' }}>Collaborative chemistry</li>
          <li style={{ marginBottom: '0.4rem' }}>Venture assembly</li>
          <li style={{ marginBottom: '0.4rem' }}>Storytelling practice</li>
        </ul>

        <p style={bodyP}>
          The functional alchemy of IV works via the management-and-integration of the polarity
          of inner work and outer work, all supported by relationality. In the inner dimension,
          IV provides psychological (inner) support via all members (via spotlights and other
          interactions), contributed from everyone's self-led time and energy. Broad relationality
          (to parts/I, group/we, system/world) supports our "three skills" of the
          rational-professional, interpersonal, and perspectival-developmental capabilities needed
          to "win at Game A while living Game B".
        </p>

        <p style={{ ...bodyP, marginBottom: '0.8rem' }}>
          Those "three skills" held as a baseline of Intentional Ventures participants are:
        </p>
        <ul style={{ fontSize: '16px', color: BODY_TEXT, margin: '0 0 1.4rem 1.4rem', padding: 0 }}>
          <li style={{ marginBottom: '0.4rem' }}><strong style={{ fontWeight: 500 }}>Rational-professional skill</strong>: systematic thought, self-management, conventional professional skills</li>
          <li style={{ marginBottom: '0.4rem' }}><strong style={{ fontWeight: 500 }}>Interpersonal skill</strong>: self-awareness, communication, robust emotional capacity and relational agility</li>
          <li style={{ marginBottom: '0.4rem' }}><strong style={{ fontWeight: 500 }}>Perspectival-developmental skill</strong>: fluid perspective-taking, complexity lens, metasystematicity</li>
        </ul>

        <p style={{ ...bodyP, marginBottom: '2rem' }}>
          Inspirations include <a href="https://www.enspiral.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Enspiral</a>, <a href="https://www.coralus.world/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Coralus</a>, and
          the hypothetical <a href="https://laymanpascal.substack.com/p/the-metamodern-business-bureau-mmbb" target="_blank" rel="noopener noreferrer" style={linkStyle}>Metamodern
          Business Bureau</a>.
        </p>

        <div style={{ textAlign: 'right' }}>
          <Link to="/friends" style={{
            fontFamily: sans, fontSize: '13px', color: ACCENT_DARK, textDecoration: 'none',
            borderBottom: '1px solid rgba(26,66,50,0.3)',
          }}>Next page: Friends →</Link>
        </div>

      </article>
    </main>

    <Footer2026 />
  </div>
);

export default NamedDefault;

export const Head = () => (
  <Head2026
    title="Intentional Ventures — Intentional Society"
    description="Aligned livelihoods, woven into a relational economic web."
  />
);
