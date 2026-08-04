import React from 'react';
import { Link } from 'gatsby';
import ButtondownSignup from '../components/buttondownsignup';
import {
  serif, sans, ACCENT_DARK, INK, MUTED, BODY_TEXT, PAPER,
  Grain2026, Nav2026, Footer2026, Head2026,
} from '../components/design2026/chrome';

// 2026 redesign of the Get Involved page — ported from the Claude Design
// "Sign Up" mockup, using the shared 2026 chrome (components/design2026/).
// Keeps the working pieces: the Zoom Connection Call registration link, the
// Buttondown newsletter form, and the #connection-calls / #newsletter
// anchors that other pages deep-link to.

// Update this whenever a new Connection Call is scheduled — no date is shown
// on the page itself (it was going stale faster than anyone updated it), so
// this is the only place a change is needed.
const CONNECTION_CALL_URL = 'https://us02web.zoom.us/meeting/register/oidEr1pEQM6izJUD-HsUrw';

const linkStyle = { color: ACCENT_DARK };

const sectionHeading = {
  fontFamily: serif, fontWeight: 300, lineHeight: 1.2,
  fontSize: 'clamp(1.5rem,2.6vw,2rem)', color: '#5C4A3A', margin: '0 0 1.4rem',
};

const bodyP = { fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 };

const pillars = ['Inner development', 'Wise action', 'Human connection'];

const features = [
  { title: 'Quarterly Convening', desc: "The whole network gathers once a quarter — a party and a catalyst for hearing what's alive, coordinating crews, and updating shared strategy." },
  { title: 'IS Web App', desc: 'Sign in to see the member directory and the relational map charting trust and collaboration across the web.' },
  { title: 'Relational Programs', desc: 'Gumball Machine, Presence Pods, Casework Pods, Thematic Crews, Arts in IS, and more.' },
  { title: 'Weekly Community Calls', desc: 'Running 5+ years as the heartbeat of mutual support — developmental-relational practice and growth-edge exploration every Sunday.' },
  { title: '(Future) Mesh Access', desc: 'Growing trust-ramps into a wider mesh of allied communities across the field.' },
];

const divider = <hr style={{ border: 'none', borderTop: '1px solid rgba(42,42,36,0.12)', margin: '2.5rem auto', width: '120px' }} />;

const NamedDefault = () => (
  <div style={{ fontFamily: serif, fontWeight: 300, color: INK, lineHeight: 1.7, background: PAPER, position: 'relative', overflowX: 'hidden' }}>

    <Grain2026 />
    <Nav2026 active="/get-involved" />

    {/* ======== Hero: Connection Call primary CTA ======== */}
    <a id="connection-calls" style={{ display: 'block', position: 'relative', top: '-20px', visibility: 'hidden' }}></a>
    <header id="connection-calls-hero" style={{
      position: 'relative', marginTop: '77px', minHeight: '460px', display: 'flex',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden',
      padding: '4rem 2rem',
      background: 'radial-gradient(ellipse at 50% 80%, rgba(46,107,79,0.25) 0%, transparent 60%), linear-gradient(175deg,#1e2822 0%,#1a2420 50%,#1e2420 100%)',
    }}>
      <style>{`#connection-calls-hero a { color: #7A9E8A; }`}</style>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', width: '100%' }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center',
          gap: '0.7rem', marginBottom: '1.6rem', fontFamily: sans, fontSize: '15px',
          fontWeight: 500, textTransform: 'uppercase', color: '#FAF8F3', letterSpacing: '0.1em',
        }}>
          {pillars.map((p, i) => (
            <React.Fragment key={p}>
              {i > 0 && <span style={{ color: 'rgba(250,248,243,0.4)' }}>·</span>}
              <span>{p}</span>
            </React.Fragment>
          ))}
        </div>
        <p style={{ color: 'rgba(232,223,208,0.7)', fontSize: '24px', margin: '0 auto 0.5rem', lineHeight: 1.7, textAlign: 'center' }}>
          <b>Meet real people in the community to see if it's right for you</b><br />
          <b>Tell us about yourself, ask questions, get to know what this is about</b>
        </p>
        <a href={CONNECTION_CALL_URL} style={{
          display: 'inline-block', marginTop: '1.6rem', padding: '0.9rem 2.2rem',
          background: '#7A9E8A', textDecoration: 'none',
          fontFamily: sans, fontSize: '15px', fontWeight: 500, borderRadius: '3px',
        }}>
          <span style={{ color: '#1a2420' }}>Join a Connection Call</span>
        </a>
        <p style={{ color: 'rgba(232,223,208,0.5)', fontSize: '13px', marginTop: '1rem' }}>
          Already have a referral? <a href="https://app.intentionalsociety.org" target="_blank" rel="noopener noreferrer">Sign in at app.intentionalsociety.org</a>
        </p>
      </div>
    </header>

    {/* ======== Details ======== */}
    <main style={{ position: 'relative', zIndex: 3, background: PAPER, padding: '4rem 2rem 5rem' }}>
      <article style={{ maxWidth: '720px', margin: '0 auto' }}>

        <h2 style={sectionHeading}>What is the IS Web?</h2>
        <p style={{ ...bodyP, marginBottom: '2.5rem' }}>
          A relational web of trust and collaboration — the full network of humans associated
          with Intentional Society, aligned around inner development, wise action, and human
          connection. Membership is lightweight and non-exclusive; it asks for intentionality
          more than any fixed commitment. Read more about how it
          works <Link to="/web" style={linkStyle}>on the Web page</Link>.
        </p>

        {divider}

        <h2 style={sectionHeading}>What's inside</h2>
        {features.map(f => (
          <div key={f.title} style={{ marginBottom: '1.2rem' }}>
            <h4 style={{ fontFamily: serif, fontWeight: 500, fontStyle: 'italic', fontSize: '1.05rem', color: INK, margin: '0 0 0.3rem' }}>{f.title}</h4>
            <p style={{ fontSize: '15px', color: MUTED, margin: 0, lineHeight: 1.7 }}>{f.desc}</p>
          </div>
        ))}

        {divider}

        <h2 style={sectionHeading}>Time commitment</h2>
        <p style={{ ...bodyP, marginBottom: '2rem' }}>
          A couple hours per quarter covers the light-touch web-level rhythm — roughly one
          90-minute Convening plus a bit of updating your profile. Programs, congregations,
          and crews inside the web run at whatever deeper rhythm fits you.
        </p>

        {divider}

        {/* Newsletter — kept from the previous Get Involved page */}
        <a id="newsletter" style={{ display: 'block', position: 'relative', top: '-90px', visibility: 'hidden' }}></a>
        <h2 style={sectionHeading}>Not ready yet? Follow along</h2>
        <p style={bodyP}>
          Our weekly newsletter shares what we're learning, thinking, and building.
          No pressure, no spam. Every Thursday, a friendly update with public events and
          reflections — browse the <a href="https://buttondown.email/intentionalsociety/archive/" target="_blank" rel="noopener noreferrer" style={linkStyle}>archive</a> for
          samples, and watch for a confirmation email to finish signing up.
        </p>
        <ButtondownSignup />

        <div style={{ textAlign: 'right', marginTop: '2rem' }}>
          <Link to="/community" style={{
            fontFamily: sans, fontSize: '13px', color: ACCENT_DARK, textDecoration: 'none',
            borderBottom: '1px solid rgba(26,66,50,0.3)',
          }}>Next page: Community →</Link>
        </div>

      </article>
    </main>

    <Footer2026 />
  </div>
);

export default NamedDefault;

export const Head = () => (
  <Head2026
    title="Get Involved — Intentional Society"
    description="Come to a Connection Call — the easiest first step into the Intentional Society web of trust and collaboration."
  />
);
