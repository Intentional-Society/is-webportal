import React from 'react';
import { Link } from 'gatsby';
import {
  serif, sans, ACCENT_DARK, INK, BODY_TEXT, MUTED, PAPER,
  Grain2026, Nav2026, Footer2026, Head2026, HeaderBand,
} from '../components/design2026/chrome';

// A Practice Dojo season, kept for its inbound links.

// This page's own words, read by both the header band and the document head.
const PAGE = {
  title: 'Exploratory Practice Series',
  description: 'six guest teachers, six new-to-us practices',
  metaDescription: 'A Practice Dojo season with six guest teachers exploring awareness, relating, and embodiment practices.',
};

// The season's lineup. Dates ran the 2nd and 4th Saturdays of April-June.
const lineup = [
  { date: 'April 13', practice: 'Growth as Object', teacher: 'James Baker' },
  { date: 'April 27', practice: 'Dia-Logos', teacher: 'Romeck van Zeijl', note: '2 hours' },
  { date: 'May 11', practice: 'Alexander Technique', teacher: 'Michael Ashcroft' },
  { date: 'May 25', practice: 'Feldenkrais Method — Awareness through Movement', teacher: 'Seth Dellinger', note: '2 hours' },
  { date: 'June 8', practice: 'Mettā Meditation', teacher: 'Tasshin Fogleman' },
  { date: 'June 22', practice: 'Gendlin Focusing', teacher: 'Jessica Fan' },
];

const bodyP = { fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 };

const linkStyle = { color: ACCENT_DARK };

const sectionHeading = {
  fontFamily: serif, fontWeight: 300, lineHeight: 1.2,
  fontSize: 'clamp(1.5rem,2.6vw,2rem)', color: '#5C4A3A', margin: '2.5rem 0 1.4rem',
};

const NamedDefault = () => (
  <div style={{ fontFamily: serif, fontWeight: 300, color: INK, lineHeight: 1.7, background: PAPER, position: 'relative', overflowX: 'hidden' }}>

    <Grain2026 />
    <Nav2026 active="/dojo" />

    {/* ======== Header band ======== */}
    <HeaderBand
      image="/design2026/luminaria-field.jpg" focus="center 40%" credit="Bill"
      title={PAGE.title}
      description={PAGE.description}
    />

    {/* ======== Article body ======== */}
    <main style={{ position: 'relative', zIndex: 3, background: PAPER, padding: '4rem 2rem 5rem' }}>
      <article style={{ maxWidth: '720px', margin: '0 auto' }}>

        <p style={bodyP}>
          With open front doors, the Practice Dojo welcomes novices and experts alike to
          train in the varied arts of relational-developmental practices. This season, we
          welcome six guest teachers to guide us in exploring new-to-us awareness,
          relating, and embodiment tools.
        </p>

        <p style={bodyP}>
          The Exploratory Practice Series meets on the 2nd and 4th Saturdays of April, May,
          and June. All sessions start at 1pm Pacific Time (4pm Eastern, 8pm UTC), and
          usually last for 90 minutes.{' '}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScft8sEI3FuL-faqRU7w8Hp5gTrj0zePg6-bhKJM_gwXaVqVg/viewform"
            target="_blank" rel="noopener noreferrer" style={linkStyle}>Sign up for access here.</a>
        </p>

        <h2 style={sectionHeading}>The lineup</h2>

        <ul style={{ ...bodyP, paddingLeft: '1.2rem' }}>
          {lineup.map(item => (
            <li key={item.date} style={{ marginBottom: '0.5rem' }}>
              {item.date} — <strong style={{ fontWeight: 700 }}>{item.practice}</strong> with {item.teacher}
              {item.note && (
                <span style={{ color: MUTED, fontWeight: 500 }}> ({item.note})</span>
              )}
            </li>
          ))}
        </ul>

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(42,42,36,0.08)' }}>
          <Link to="/dojo" style={{
            fontFamily: sans, fontSize: '16px', fontWeight: 500, color: ACCENT_DARK, textDecoration: 'none',
            borderBottom: '1px solid rgba(26,66,50,0.3)',
          }}>← Back to the Dojo</Link>
        </div>

      </article>
    </main>

    <Footer2026 />
  </div>
);

export default NamedDefault;

export const Head = () => (
  <Head2026
    {...PAGE}
  />
);
