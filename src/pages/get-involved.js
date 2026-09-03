import React from 'react';
import { Link } from 'gatsby';
import ButtondownSignup from '../components/buttondownsignup';
import BlurbConnectionCall, { CONNECTION_CALL_URL } from '../components/blurb-connectioncall';
import {
  serif, sans, ACCENT, INK, BODY_TEXT, PAPER,
  Grain2026, Nav2026, Footer2026, Head2026,
  NAV_OFFSET,
} from '../components/design2026/chrome';

// 2026 redesign of the Get Involved page — ported from the Claude Design
// "Sign Up" mockup, using the shared 2026 chrome (components/design2026/).
// Trimmed from an earlier version that duplicated the IS Web pitch (now just
// /web) and repeated the Connection Call date in both the header and body —
// this one states each thing once, as a short list of "here's what to do
// next" options. Keeps the working pieces: the Zoom registration link and
// next-call date (both sourced from blurb-connectioncall.js — see that file
// for the one place to update when a new call is scheduled), the Buttondown
// newsletter form, and the #connection-calls / #newsletter anchors that other
// pages deep-link to.

const linkStyle = { color: ACCENT };

const sectionHeading = {
  fontFamily: serif, fontWeight: 300, lineHeight: 1.2,
  fontSize: 'clamp(1.5rem,2.6vw,2rem)', color: '#5C4A3A', margin: '0 0 1.4rem',
};

const optionHeading = {
  fontFamily: serif, fontWeight: 500, fontStyle: 'italic', fontSize: '1.2rem', color: INK, margin: '0 0 0.4rem',
};

const bodyP = { fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 };

const ctaButton = {
  display: 'inline-block', padding: '0.9rem 2.2rem', background: ACCENT, color: '#fff',
  textDecoration: 'none', fontFamily: sans, fontSize: '15px', fontWeight: 500, borderRadius: '3px',
};

const NamedDefault = () => (
  <div style={{ fontFamily: serif, fontWeight: 300, color: INK, lineHeight: 1.7, background: PAPER, position: 'relative', overflowX: 'hidden' }}>

    <Grain2026 />
    <Nav2026 active="/get-involved" />

    {/* ======== Header ======== */}
    <a id="connection-calls" style={{ display: 'block', position: 'relative', top: '-20px', visibility: 'hidden' }}></a>
    <header id="connection-calls-hero" style={{
      position: 'relative', marginTop: NAV_OFFSET, minHeight: '340px', display: 'flex',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden',
      padding: '4rem 2rem',
      background: 'radial-gradient(ellipse at 50% 80%, rgba(46,107,79,0.25) 0%, transparent 60%), linear-gradient(175deg,#1e2822 0%,#1a2420 50%,#1e2420 100%)',
    }}>
      <style>{'#connection-calls-hero a { color: #7A9E8A; }'}</style>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', width: '100%' }}>
        <p style={{
          color: 'rgba(232,223,208,0.92)', fontWeight: 500,
          fontSize: 'clamp(1rem,4vw,1.5rem)', margin: '0 auto', lineHeight: 1.5, textAlign: 'center',
        }}>
          <span style={{ display: 'block', textWrap: 'balance' }}>Meet real people in the community to see if it's right for you</span>
          <span style={{ display: 'block', textWrap: 'balance' }}>Tell us about yourself, ask questions, get to know what this is about</span>
        </p>
      </div>
    </header>

    {/* ======== Details ======== */}
    <main style={{ position: 'relative', zIndex: 3, background: PAPER, padding: '4rem 2rem 5rem' }}>
      <article style={{ maxWidth: '720px', margin: '0 auto' }}>

        <h2 style={sectionHeading}>Intrigued? Here are your options</h2>

        <a id="newsletter" style={{ display: 'block', position: 'relative', top: '-90px', visibility: 'hidden' }}></a>
        <h4 style={optionHeading}>Subscribe for updates</h4>
        <p style={bodyP}>
          Every Thursday, a friendly update with public events and reflections. Browse
          the <a href="https://buttondown.email/intentionalsociety/archive/" target="_blank" rel="noopener noreferrer" style={linkStyle}>archive</a> for
          samples. Watch for a confirmation email to finish signing up.
        </p>
        <div style={{ marginBottom: '2.5rem' }}>
          <ButtondownSignup />
        </div>

        <h4 style={optionHeading}>Attend a Connection Call</h4>
        <p style={{ ...bodyP, marginBottom: '1rem' }}>
          This call is like a picnic table out on our front lawn. Open to all, new and
          familiar, with no agenda other than your curiosity!
        </p>
        <p style={{ ...bodyP, marginBottom: '2.5rem' }}>
          <BlurbConnectionCall /> Already have a
          referral? <a href="https://app.intentionalsociety.org" target="_blank" rel="noopener noreferrer" style={linkStyle}>Sign in at app.intentionalsociety.org</a>.
        </p>
        <a href={CONNECTION_CALL_URL} style={{ ...ctaButton, margin: '0 0 2.5rem' }}>Join a Connection Call</a>

        <h4 style={optionHeading}>Find relational practice groups</h4>
        <p style={{ ...bodyP, marginBottom: '2.5rem' }}>
          We love relational practices for personal development! You can find several at our
          sister site <a href="https://relationaldojo.org" target="_blank" rel="noopener noreferrer" style={linkStyle}>Relational Dojo</a>, or
          read more <Link to="/dojo" style={linkStyle}>on the Dojo page</Link>.
        </p>

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
