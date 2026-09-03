import React from 'react';
import {
  sans, ACCENT, INK, MUTED, bodyP, bodyLi, sectionHeading,
  Head2026, HeaderBand, Page2026, Article2026, Divider, BackLink,
} from '../components/design2026/chrome';

// The Developmental Practice Series — a nine-week course, run in three units
// of three weeks. Editing the schedule means editing `units` below.

// This page's own words, read by both the header band and the document head.
const PAGE = {
  title: 'Developmental Practice Series',
  description: 'a nine-week course in being who we want to be',
  metaDescription: 'A nine-week peer-led course assembling a sequence of practices for post-conventional personal development, from Intentional Society.',
};

const SIGNUP_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfTKFx1wlprZ3dLVWdcwmggvQzeSoAbqLOaYpKFjAf_9XSFoQ/viewform';

// Three units of three weeks, each a stacking set of practices.
const units = [
  {
    unit: 'Unit 1 — Awareness',
    dates: 'July 10, July 17, July 24',
    practices: [
      ['Empathy Circle', 'receptive listening and reflection'],
      ['Parts Work (IFS)', 'listening to and being with parts-of-self'],
      ['Interpersonal Gap', 'perspectival awareness and frame hygiene'],
    ],
  },
  {
    unit: 'Unit 2 — Acceptance',
    dates: 'July 31, Aug 7, Aug 14',
    practices: [
      ['T-Group', 'noticing and naming our experiences'],
      ['Circling', 'welcoming everything in connection'],
      ['Inquiry Spiraling', 'perspective weaving, collective dreaming'],
    ],
  },
  {
    unit: 'Unit 3 — Integrity',
    dates: 'Aug 21, Aug 28, Sept 4',
    practices: [
      ['Nine Whys', '(re)connecting to desire, motivations, and purpose'],
      ['Pure coaching + Clean language', 'clean (space-holding, not self-injecting) coaching basics'],
      ['Case Clinic', 'developmental coaching in action'],
    ],
  },
];

// Pull-quote graphics: the words are the content, so each alt carries its own
// quote. All three previously shared one generic string, which left a screen
// reader with the fact that a reflection exists and none of what it said.
const reflections = [
  { n: 1, quote: 'THANK YOU SO MUCH multiple breakthrough insights, connection and emotional support, rich learning' },
  { n: 2, quote: 'please accept my deepest gratitude for your creative, powerful sessions which have benefitted me, and others, over the last months. Your skill and integrity are awe-inspiring. Please keep going!' },
  { n: 3, quote: 'This was an awesome season of learning for me' },
];

// Sections here follow a divider, so they carry their own leading gap.
const dpsHeading = { ...sectionHeading, margin: '3rem 0 1.4rem' };

const unitHeading = {
  fontFamily: sans, fontSize: '15px', letterSpacing: '0.1em', textTransform: 'uppercase',
  fontWeight: 600, color: INK, margin: '0 0 0.2rem',
};

// Teal CTA, replacing the markdown's inline-styled blue button.
const signUpButton = {
  display: 'inline-block', padding: '0.8rem 2rem', background: ACCENT,
  color: '#fff', textDecoration: 'none', fontFamily: sans, fontSize: '16px',
  fontWeight: 500, letterSpacing: '0.03em', borderRadius: '3px',
};

const SignUp = () => (
  <div style={{ textAlign: 'center', margin: '2rem 0' }}>
    <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" style={signUpButton}>Sign up here</a>
  </div>
);

const NamedDefault = () => (
  <Page2026 active="/dojo">

    {/* ======== Header band ======== */}
    <HeaderBand
      image="luminaria-row.jpg" credit="Bill"
      title={PAGE.title}
      description={PAGE.description}
    />

    {/* ======== Article body ======== */}
    <Article2026>

      <figure style={{ margin: '0 0 2.5rem' }}>
        <img src="/images/developmental/developmental-series-header.png"
          alt="IS Developmental Practice Series"
          style={{ width: '100%', display: 'block', borderRadius: '4px 7px 3px 6px' }} />
      </figure>

      <p style={bodyP}>
        Skillful relating to inner and outer challenges. Liberation from stuckness and
        not-okay-ness. Spacious ease and equanimity. These are learnable skills, freely
        available through interactive, relational, intentional practice in a supportive
        environment.
      </p>
      <p style={bodyP}>
        The key mechanism of psychological adult development is (roughly)
        perspective-expansion — our ability to move from "being caught up in it" to
        "seeing, welcoming, and working with it". Leveraging years of action-research
        experience from Intentional Society, the Developmental Practice Series assembles a
        powerful sequence of practices supporting post-conventional personal development.
      </p>
      <p style={bodyP}>
        In plain words, we're building a bridge to "being who we want to be" beyond what
        society typically offers us. This series is being run as a nine-week course on
        Thursdays starting July 10<sup>th</sup>, 9:00am to 10:30am Pacific (Noon Eastern,
        4pm UTC, 6pm CEST).
      </p>

      <SignUp />

      <Divider />

      <h2 style={dpsHeading}>Schedule and practices</h2>

      {units.map(u => (
        <section key={u.unit} style={{ margin: '0 0 2rem' }}>
          <div style={unitHeading}>{u.unit}</div>
          <div style={{ fontFamily: sans, fontSize: '15px', fontWeight: 500, color: MUTED, margin: '0 0 0.8rem' }}>{u.dates}</div>
          <ul style={{ ...bodyP, paddingLeft: '1.2rem', margin: 0 }}>
            {u.practices.map(([name, gloss]) => (
              <li key={name} style={bodyLi}>
                <strong style={{ fontWeight: 700 }}>{name}</strong> — {gloss}
              </li>
            ))}
          </ul>
        </section>
      ))}

      <p style={{ ...bodyP, fontStyle: 'italic' }}>
        Optional bonus session Sept 11 — wrap-up and retrospective.
      </p>

      <p style={bodyP}>
        After signing up, you'll receive a recurring calendar invite for all sessions. The
        skills do stack together in later practices, so we ask that participants intend to
        make at least 6 out of the 9 weeks.
      </p>

      <Divider />

      <h2 style={dpsHeading}>Reflections from 2024 participants</h2>

      <div style={{ display: 'flex', gap: '20px', margin: '0 0 2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {reflections.map(r => (
          <img key={r.n} src={`/images/developmental/reflections-2024-${r.n}.png`}
            alt={r.quote}
            style={{ flex: 1, maxWidth: '300px', minWidth: '250px', height: 'auto', borderRadius: '3px' }} />
        ))}
      </div>

      <SignUp />

      <Divider />

      <h2 style={dpsHeading}>About the facilitator</h2>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <img src="/images/developmental/james-facilitator.png" alt="James Baker, facilitator"
          style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '4px' }} />
        <p style={{ ...bodyP, flex: 1, minWidth: '280px', margin: 0 }}>
          James Baker has facilitated over 200 Intentional Society practice sessions since
          2021. He ran the first edition of this Developmental Practice Series in Q1 2024,
          and has also hosted a corporate-focused version called Relational Agility.
        </p>
      </div>

      <BackLink to="/dojo">← Back to the Dojo</BackLink>

    </Article2026>
  </Page2026>
);

export default NamedDefault;

export const Head = () => (
  <Head2026
    {...PAGE}
  />
);
