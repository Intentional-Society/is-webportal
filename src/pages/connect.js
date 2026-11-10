import React from 'react';
import { Link } from 'gatsby';
import ButtondownSignup from '../components/buttondownsignup';
import BlurbConnectionCall, { CONNECTION_CALL_URL } from '../components/blurb-connectioncall';
import {
  sans, ACCENT, bodyP, sectionHeading, subsectionHeading,
  Head2026, HeaderBand, Page2026, Article2026,
} from '../components/design2026/chrome';

// 2026 redesign of the Connect page — ported from the Claude Design
// "Sign Up" mockup, using the shared 2026 chrome (components/design2026/).
// #newsletter and #connection-calls are floating offset anchors above their
// sections rather than ids on the headings, so the fixed nav doesn't cover
// the heading a deep link lands on.

// siteName: false — the meta title already names the society.
const PAGE = {
  title: 'Connect',
  metaTitle: 'Connect with Intentional Society',
  siteName: false,
  description: 'how to connect with the people and ideas of Intentional Society',
  metaDescription: 'Start at an open Connection Call — the best first step into Intentional Society — or find other ways to get in touch.',
};

const linkStyle = { color: ACCENT };

// Each section's h2 — the leading gap separates it from the section above.
const optionHeading = { ...sectionHeading, margin: '2.6rem 0 1rem' };

// Floating offset anchor above a section, clearing the fixed nav.
const anchor = { display: 'block', position: 'relative', top: '-90px', visibility: 'hidden' };

const ctaButton = {
  display: 'inline-block', padding: '0.9rem 2.2rem', background: ACCENT, color: '#fff',
  textDecoration: 'none', fontFamily: sans, fontSize: '15px', borderRadius: '3px',
};

const NamedDefault = () => (
  <Page2026 active="/connect">

    <HeaderBand image="wing-scales-macro.jpg" credit="Bill Claff" title={PAGE.title} description={PAGE.description} />

    {/* ======== Details ======== */}
    <Article2026>

      <a id="connection-calls" style={anchor}></a>
      <h2 style={{ ...optionHeading, marginTop: 0 }}>Attend a Connection Call</h2>
      <p style={{ ...bodyP, marginBottom: '1rem' }}>
        Showing up to an IS Connection Call is almost always the best place to start!
        Think of the setting as a picnic table on a sunny day, out on the front lawn in
        front of the campus. Walk up, sit down, and discover who else is at the table and
        what kind of conversation wants to emerge! Open to all, first-timers through
        regulars, with no fixed agenda other than our collective curiosity.
      </p>
      <p style={{ ...bodyP, marginBottom: '2.5rem' }}>
        <BlurbConnectionCall />
      </p>
      {/* No bottom margin: an inline-block's won't collapse with the next
          heading's, so the following h2 owns the gap. */}
      <a href={CONNECTION_CALL_URL} style={ctaButton}>Join a Connection Call</a>

      <h2 style={optionHeading}>Other ways to connect</h2>

      <a id="newsletter" style={anchor}></a>
      <h3 style={subsectionHeading}>Subscribe for updates</h3>
      <div style={{ marginBottom: '1.2rem' }}>
        <ButtondownSignup />
      </div>
      <p style={{ ...bodyP, marginBottom: '2rem' }}>
        Every Thursday, a friendly update with public events and reflections. Browse
        the <a href="https://buttondown.email/intentionalsociety/archive/" target="_blank" rel="noopener noreferrer" style={linkStyle}>archive</a> for
        samples. Watch for a confirmation email to finish signing up.
      </p>

      <h3 style={subsectionHeading}>Sign in to the Web</h3>
      <p style={{ ...bodyP, marginBottom: '2rem' }}>
        Already have an IS Web App account? <a href="https://app.intentionalsociety.org" target="_blank" rel="noopener noreferrer" style={linkStyle}>Sign in at app.intentionalsociety.org</a>.
      </p>

      <h3 style={subsectionHeading}>Find relational practice groups</h3>
      <p style={{ ...bodyP, marginBottom: '2rem' }}>
        We love relational practices for personal development! You can find several at our
        sister site <a href="https://relationaldojo.org" target="_blank" rel="noopener noreferrer" style={linkStyle}>Relational Dojo</a>, or
        read more <Link to="/dojo" style={linkStyle}>on the Dojo page</Link>.
      </p>

      <h3 style={subsectionHeading}>Still have questions?</h3>
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
