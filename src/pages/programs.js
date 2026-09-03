import React from 'react';
import { Link } from 'gatsby';
import {
  serif, sans, ACCENT_DARK, INK, BODY_TEXT, MUTED, PAPER,
  Grain2026, Nav2026, Footer2026, Head2026, HeaderBand,
} from '../components/design2026/chrome';

// The relational programs open to members of the IS web.

// This page's own words, read by both the header band and the document head.
const PAGE = {
  title: 'Relational Programs',
  description: 'ways to meet each other inside the web',
  metaDescription: 'Relational programs available to members of the Intentional Society web — Gumball Machine, Presence Pods, Casework Pods, Thematic Crews, and Arts in IS.',
};

// Each program's `when` is its scheduled run, where one is set.
const programs = [
  {
    name: 'The Gumball Machine',
    text: "For those who want to meet new people but aren't sure where to start, pull a lever and get matched with a stranger for an intro call, and be surprised by who you meet.",
  },
  {
    name: 'Presence Pods',
    text: "For those craving real connection and wanting to feel truly seen, join a small group of four rotating over four calls where each person gets a turn being held by the group's warm, Circling-style curiosity and reflection.",
    when: 'Running Q2 of 2026',
  },
  {
    name: 'Casework Pods',
    text: "For those who want support with something real and to offer that same support to others, bring a live challenge into a group of four rotating over four calls where each person gets a turn being met with empathic reflection focused on what they're navigating.",
    when: 'Running Q3 of 2026',
  },
  {
    name: 'Thematic Crews',
    text: 'For those who want to do specific things with like-minded people, call or join a crew around a shared interest or practice in a self-organized group that forms around what lights you up.',
  },
  {
    name: 'Arts in IS',
    text: 'This group believes artistic expression has the capacity to be a vibrant part of culture and personal development. We meet as a group to encourage exploration of multiple modes of artistic creation, develop ways to do co-creation, and offer sessions at occasional IS community calls.',
  },
];

const bodyP = { fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 };

const linkStyle = { color: ACCENT_DARK };

const programName = {
  fontFamily: serif, fontWeight: 500, fontSize: '1.5rem', color: INK,
  margin: '0 0 0.4rem', lineHeight: 1.3,
};

const NamedDefault = () => (
  <div style={{ fontFamily: serif, fontWeight: 300, color: INK, lineHeight: 1.7, background: PAPER, position: 'relative', overflowX: 'hidden' }}>

    <Grain2026 />
    <Nav2026 active="/web" />

    {/* ======== Header band ======== */}
    <HeaderBand
      image="/design2026/turkeytail-log.jpg" focus="center 45%" credit="Bill"
      title={PAGE.title}
      description={PAGE.description}
    />

    {/* ======== Article body ======== */}
    <main style={{ position: 'relative', zIndex: 3, background: PAPER, padding: '4rem 2rem 5rem' }}>
      <article style={{ maxWidth: '720px', margin: '0 auto' }}>

        <p style={bodyP}>
          These programs are available to members of
          the <Link to="/web" style={linkStyle}>IS web</Link>.
        </p>

        {programs.map(p => (
          <section key={p.name} style={{ margin: '2.5rem 0' }}>
            <h2 style={programName}>{p.name}</h2>
            {p.when && (
              <div style={{
                fontFamily: sans, fontSize: '13px', letterSpacing: '0.16em',
                textTransform: 'uppercase', fontWeight: 600, color: MUTED,
                margin: '0 0 0.6rem',
              }}>{p.when}</div>
            )}
            <p style={{ ...bodyP, margin: 0 }}>{p.text}</p>
          </section>
        ))}

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(42,42,36,0.08)' }}>
          <Link to="/web" style={{
            fontFamily: sans, fontSize: '16px', fontWeight: 500, color: ACCENT_DARK, textDecoration: 'none',
            borderBottom: '1px solid rgba(26,66,50,0.3)',
          }}>Next page: The IS Web →</Link>
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
