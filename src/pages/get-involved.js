import React from 'react';
import { Link } from 'gatsby';
import ButtondownSignup from '../components/buttondownsignup';
import BlurbConnectionCall, { CONNECTION_CALL_URL } from '../components/blurb-connectioncall';
import {
  serif, sans, ACCENT, INK, bodyP, sectionHeading,
  Head2026, PhotoCredit, Page2026, Article2026,
  NAV_OFFSET,
} from '../components/design2026/chrome';

// 2026 redesign of the Get Involved page — ported from the Claude Design
// "Sign Up" mockup, using the shared 2026 chrome (components/design2026/).
// The hero is a full-bleed photo carrying the old dark-gradient pitch text
// directly (rather than a HeaderBand + a duplicate paragraph below it), so
// #newsletter and #connection-calls are floating offset anchors above their
// sections again rather than living on the heading elements themselves —
// the connection-calls one has to clear the whole hero, not just the nav.

// This page's own words, read by the document head only — the hero carries
// its own words instead of a HeaderBand title.
const PAGE = {
  metaTitle: 'Get Involved',
  metaDescription: 'Come to a Connection Call — the easiest first step into the Intentional Society web of trust and collaboration.',
};

const linkStyle = { color: ACCENT };

const optionHeading = {
  fontFamily: serif, fontWeight: 500, fontStyle: 'italic', fontSize: '1.2rem', color: INK, margin: '0 0 0.4rem',
};

const ctaButton = {
  display: 'inline-block', padding: '0.9rem 2.2rem', background: ACCENT, color: '#fff',
  textDecoration: 'none', fontFamily: sans, fontSize: '15px', fontWeight: 500, borderRadius: '3px',
};

const NamedDefault = () => (
  <Page2026 active="/get-involved">

    {/* ======== Hero: Connection Call primary CTA ======== */}
    <a id="connection-calls" style={{ display: 'block', position: 'relative', top: '-20px', visibility: 'hidden' }}></a>
    <div className="credit-host" style={{ position: 'relative', marginTop: NAV_OFFSET }}>
      <header id="connection-calls-hero" style={{
        position: 'relative', minHeight: '340px', display: 'flex',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem 2rem',
        background: 'radial-gradient(ellipse at 50% 80%, rgba(46,107,79,0.35) 0%, transparent 60%), linear-gradient(175deg, rgba(30,40,34,0.72) 0%, rgba(26,36,32,0.72) 50%, rgba(30,36,32,0.78) 100%), url(/design2026/wing-scales-macro.jpg) center/cover',
      }}>
        <style>{'#connection-calls-hero a { color: #7A9E8A; }'}</style>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', width: '100%' }}>
          <p style={{ color: 'rgba(232,223,208,0.92)', fontWeight: 500, fontSize: 'clamp(1rem,4vw,1.5rem)', margin: '0 auto', lineHeight: 1.5, textAlign: 'center' }}>
            <span style={{ display: 'block', textWrap: 'balance' }}>Meet real people in the community to see if it's right for you</span>
            <span style={{ display: 'block', textWrap: 'balance' }}>Tell us about yourself, ask questions, get to know what this is about</span>
          </p>
        </div>
      </header>
      <PhotoCredit name="Bill Claff" />
    </div>

    {/* ======== Details ======== */}
    <Article2026>

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

      <h4 style={optionHeading}>Still have questions?</h4>
      <p style={{ ...bodyP, marginBottom: '1.5rem' }}>
        Reach out and we'll get back to you. <Link to="/contact" style={linkStyle}>Contact us →</Link>
      </p>

    </Article2026>
  </Page2026>
);

export default NamedDefault;

export const Head = ({ location }) => (
  <Head2026 {...PAGE} pathname={location.pathname} />
);
