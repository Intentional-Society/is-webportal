import React from 'react';
import {
  MUTED, bodyP, sectionHeading, linkStyle,
  Head2026, HeaderBand, Page2026, Article2026, BackLink,
} from '../components/design2026/chrome';

// A Practice Dojo season from 2024, kept for its inbound links.

// This page's own words, read by both the header band and the document head.
const PAGE = {
  title: 'Exploratory Practice Series',
  description: 'six guest teachers, six new-to-us practices',
  metaDescription: 'A Practice Dojo season with six guest teachers exploring awareness, relating, and embodiment practices.',
};

// The season's lineup. Dates ran the 2nd and 4th Saturdays of April-June 2024.
const lineup = [
  { date: 'April 13', practice: 'Growth as Object', teacher: 'James Baker' },
  { date: 'April 27', practice: 'Dia-Logos', teacher: 'Romeck van Zeijl', note: '2 hours' },
  { date: 'May 11', practice: 'Alexander Technique', teacher: 'Michael Ashcroft' },
  { date: 'May 25', practice: 'Feldenkrais Method — Awareness through Movement', teacher: 'Seth Dellinger', note: '2 hours' },
  { date: 'June 8', practice: 'Mettā Meditation', teacher: 'Tasshin Fogleman' },
  { date: 'June 22', practice: 'Gendlin Focusing', teacher: 'Jessica Fan' },
];

// The lineup opens under a paragraph rather than a divider, so it carries its
// own leading gap.
const lineupHeading = { ...sectionHeading, margin: '2.5rem 0 1.4rem' };

const NamedDefault = () => (
  <Page2026 active="/dojo">

    {/* ======== Header band ======== */}
    <HeaderBand
      image="luminaria-field.jpg" focus="center 40%"
      title={PAGE.title}
      description={PAGE.description}
    />

    {/* ======== Article body ======== */}
    <Article2026>

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

      <h2 style={lineupHeading}>The 2024 lineup</h2>

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

      <BackLink to="/dojo">← Back to the Dojo</BackLink>

    </Article2026>
  </Page2026>
);

export default NamedDefault;

export const Head = ({ location }) => (
  <Head2026 {...PAGE} pathname={location.pathname} />
);
