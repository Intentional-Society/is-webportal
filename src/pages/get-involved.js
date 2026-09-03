import React from 'react';
import { Link } from 'gatsby';
import ButtondownSignup from '../components/buttondownsignup';
import BlurbConnectionCall, { CONNECTION_CALL_URL } from '../components/blurb-connectioncall';
import {
  serif, sans, ACCENT, INK, bodyP, sectionHeading,
  Head2026, HeaderBand, Page2026, Article2026,
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
// pages deep-link to — those ids now sit on the option headings themselves
// rather than on offset empty <a>s above them.

// This page's own words, read by both the header band and the document head.
// The band gets to be playful; the head keeps the plain label people actually
// search for and the sentence that reads as a result.
const PAGE = {
  title: 'Want more?',
  description: 'Oh, do you have some options',
  metaTitle: 'Get Involved',
  metaDescription: 'Come to a Connection Call — the easiest first step into the Intentional Society web of trust and collaboration.',
};

const linkStyle = { color: ACCENT };

// Deep-link targets have to clear the fixed nav. Derived from NAV_OFFSET for
// the same reason practices.module.css reads --is-nav-height: so the clearance
// tracks the nav instead of being a hand-tuned number beside it.
const anchorTarget = { scrollMarginTop: `calc(${NAV_OFFSET} + 1.5rem)` };

const optionHeading = {
  fontFamily: serif, fontWeight: 500, fontStyle: 'italic', fontSize: '1.2rem', color: INK, margin: '0 0 0.4rem',
};

const ctaButton = {
  display: 'inline-block', padding: '0.9rem 2.2rem', background: ACCENT, color: '#fff',
  textDecoration: 'none', fontFamily: sans, fontSize: '15px', fontWeight: 500, borderRadius: '3px',
};

const NamedDefault = () => (
  <Page2026 active="/get-involved">

    {/* ======== Header band ======== */}
    <HeaderBand
      image="luminaria-row.jpg" focus="center 55%" credit="Bill"
      title={PAGE.title}
      description={PAGE.description}
    />

    {/* ======== Details ======== */}
    <Article2026>

      {/* The pitch the old dark hero carried, now that the band above says
          the page's name instead. */}
      <p style={bodyP}>
        Meet real people in the community to see if it's right for you. Tell us about
        yourself, ask questions, get to know what this is about.
      </p>

      <h2 style={sectionHeading}>Intrigued? Here are your options</h2>

      <h3 id="newsletter" style={{ ...optionHeading, ...anchorTarget }}>Subscribe for updates</h3>
      <p style={bodyP}>
        Every Thursday, a friendly update with public events and reflections. Browse
        the <a href="https://buttondown.email/intentionalsociety/archive/" target="_blank" rel="noopener noreferrer" style={linkStyle}>archive</a> for
        samples. Watch for a confirmation email to finish signing up.
      </p>
      <div style={{ marginBottom: '2.5rem' }}>
        <ButtondownSignup />
      </div>

      <h3 id="connection-calls" style={{ ...optionHeading, ...anchorTarget }}>Attend a Connection Call</h3>
      <p style={{ ...bodyP, marginBottom: '1rem' }}>
        This call is like a picnic table out on our front lawn. Open to all, new and
        familiar, with no agenda other than your curiosity!
      </p>
      <p style={{ ...bodyP, marginBottom: '2.5rem' }}>
        <BlurbConnectionCall /> Already have a
        referral? <a href="https://app.intentionalsociety.org" target="_blank" rel="noopener noreferrer" style={linkStyle}>Sign in at app.intentionalsociety.org</a>.
      </p>
      <a href={CONNECTION_CALL_URL} style={{ ...ctaButton, margin: '0 0 2.5rem' }}>Join a Connection Call</a>

      <h3 style={optionHeading}>Find relational practice groups</h3>
      <p style={{ ...bodyP, marginBottom: '2.5rem' }}>
        We love relational practices for personal development! You can find several at our
        sister site <a href="https://relationaldojo.org" target="_blank" rel="noopener noreferrer" style={linkStyle}>Relational Dojo</a>, or
        read more <Link to="/dojo" style={linkStyle}>on the Dojo page</Link>.
      </p>

    </Article2026>
  </Page2026>
);

export default NamedDefault;

export const Head = () => (
  <Head2026
    {...PAGE}
  />
);
