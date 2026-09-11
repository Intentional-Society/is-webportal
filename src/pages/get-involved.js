import React from 'react';
import { Link } from 'gatsby';
import ButtondownSignup from '../components/buttondownsignup';
import BlurbConnectionCall, { CONNECTION_CALL_URL } from '../components/blurb-connectioncall';
import {
  sans, ACCENT, bodyP, sectionHeading,
  Head2026, HeaderBand, Page2026, Article2026,
} from '../components/design2026/chrome';

// 2026 redesign of the Get Involved page — ported from the Claude Design
// "Sign Up" mockup, using the shared 2026 chrome (components/design2026/).
// #newsletter and #connection-calls are floating offset anchors above their
// sections rather than ids on the headings, so the fixed nav doesn't cover
// the heading a deep link lands on.

const PAGE = {
  title: 'Get Involved',
  description: 'meet real people, ask questions, find spaces that match your edges',
  metaDescription: 'Come to a Connection Call — the easiest first step into the Intentional Society web of trust and collaboration.',
};

const linkStyle = { color: ACCENT };

// Each option's h2 — the leading gap separates it from the option above.
const optionHeading = { ...sectionHeading, margin: '2.6rem 0 1rem' };

// Floating offset anchor above a section, clearing the fixed nav.
const anchor = { display: 'block', position: 'relative', top: '-90px', visibility: 'hidden' };

const ctaButton = {
  display: 'inline-block', padding: '0.9rem 2.2rem', background: ACCENT, color: '#fff',
  textDecoration: 'none', fontFamily: sans, fontSize: '15px', borderRadius: '3px',
};

const NamedDefault = () => (
  <Page2026 active="/get-involved">

    <HeaderBand image="wing-scales-macro.jpg" credit="Bill Claff" title={PAGE.title} description={PAGE.description} />

    {/* ======== Details ======== */}
    <Article2026>

      <p style={bodyP}>Want to make contact? Here are several options.</p>

      <a id="newsletter" style={anchor}></a>
      <h2 style={{ ...optionHeading, marginTop: 0 }}>Subscribe for updates</h2>
      <div style={{ marginBottom: '1.2rem' }}>
        <ButtondownSignup />
      </div>
      <p style={bodyP}>
        Every Thursday, a friendly update with public events and reflections. Browse
        the <a href="https://buttondown.email/intentionalsociety/archive/" target="_blank" rel="noopener noreferrer" style={linkStyle}>archive</a> for
        samples. Watch for a confirmation email to finish signing up.
      </p>

      <a id="connection-calls" style={anchor}></a>
      <h2 style={optionHeading}>Attend a Connection Call</h2>
      <p style={{ ...bodyP, marginBottom: '1rem' }}>
        This call is like a picnic table out on our front lawn. Open to all, new and
        familiar, with no agenda other than your curiosity!
      </p>
      <p style={{ ...bodyP, marginBottom: '2.5rem' }}>
        <BlurbConnectionCall /> Already have a
        referral? <a href="https://app.intentionalsociety.org" target="_blank" rel="noopener noreferrer" style={linkStyle}>Sign in at app.intentionalsociety.org</a>.
      </p>
      {/* No bottom margin: an inline-block's won't collapse with the next
          heading's, so the following h2 owns the gap. */}
      <a href={CONNECTION_CALL_URL} style={ctaButton}>Join a Connection Call</a>

      <h2 style={optionHeading}>Find relational practice groups</h2>
      <p style={{ ...bodyP, marginBottom: '2.5rem' }}>
        We love relational practices for personal development! You can find several at our
        sister site <a href="https://relationaldojo.org" target="_blank" rel="noopener noreferrer" style={linkStyle}>Relational Dojo</a>, or
        read more <Link to="/dojo" style={linkStyle}>on the Dojo page</Link>.
      </p>

      <h2 style={optionHeading}>Still have questions?</h2>
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
