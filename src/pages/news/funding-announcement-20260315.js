import React from 'react';
import { Link } from 'gatsby';
import {
  serif, sans, ACCENT_DARK, INK, BODY_TEXT, PAPER, headerKicker,
  Grain2026, Nav2026, Footer2026, Head2026, PhotoCredit,
  NAV_OFFSET,
} from '../../components/design2026/chrome';

// 2026 redesign of the funding announcement — previously an old-theme
// markdown-driven page (src/md/funding-announcement-20260315.md) whose
// content was also duplicated inline on /news. Now a standalone page in the
// shared 2026 chrome (components/design2026/), matching thecall.js; /news
// just links here.

const bodyP = { fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 };

const NamedDefault = () => (
  <div style={{ fontFamily: serif, fontWeight: 300, color: INK, lineHeight: 1.7, background: PAPER, position: 'relative', overflowX: 'hidden' }}>

    <Grain2026 />
    <Nav2026 active="/news" />

    {/* ======== Header band ======== */}
    <header className="credit-host" style={{
      position: 'relative', marginTop: NAV_OFFSET, minHeight: '340px', display: 'flex',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden',
      background: 'url(/design2026/luminaria-field.jpg) center 40%/cover, #1c2730',
    }}>
      <PhotoCredit name="Bill" />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(14,18,22,0.6) 0%, rgba(14,18,22,0.5) 50%, rgba(14,18,22,0.66) 100%)',
      }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', padding: '3.5rem 2rem' }}>
        <div style={headerKicker}>News · March 15, 2026</div>
        <h1 style={{
          fontFamily: serif, fontWeight: 500, lineHeight: 1.25, fontSize: 'clamp(1.8rem,3.4vw,2.6rem)',
          color: '#FAF8F3', textShadow: '0 2px 24px rgba(8,12,16,0.8)', margin: 0,
        }}>Intentional Society Announces $1.8 Million, 10-Year Funding Commitment</h1>
      </div>
    </header>

    {/* ======== Article body ======== */}
    <main style={{ position: 'relative', zIndex: 3, background: PAPER, padding: '4rem 2rem 5rem' }}>
      <article style={{ maxWidth: '720px', margin: '0 auto' }}>

        <p style={bodyP}>
          Intentional Society (IS), as stewarded by Intentional Society, LLC, today announced
          a $1.8 million funding commitment, spread over ten years, from a small private
          family foundation. The announcement was made at the organization's 5th anniversary
          event, subtitled "Launching a New Era," celebrating Intentional Society's journey
          from a small huddle into a network, organization, and ecosystem. This new era marks
          the evolution from an exploratory phase focused on inner and cultural development
          into a mature, integrated ecosystem encompassing economic impact, social action, and
          organizational capacity.
        </p>
        <p style={bodyP}>
          The funding will support three key areas: the IS Workteam, a contractor structure
          formed in December 2025 to increase operational capacity for the Intentional Society
          ecosystem; ongoing contributions to the Intentional Ventures system, which catalyzes
          values-aligned livelihoods; and relational grant streams to partners and allies in
          the broader liminal scene who are doing impactful work in the field. All 2026
          allocations have been determined at this time.
        </p>
        <p style={bodyP}>
          "Making this commitment public is a signal of sustainability and perseverance," said
          James Baker, founder of Intentional Society. "The ecosystem we've grown together over
          these first five years has deep roots, and this funding grounds our intention to
          keep on this journey for the long term. I don't know what the world will look like in
          10 years, but I'm confident that we're going to be supporting each other whatever
          happens."
        </p>
        <p style={bodyP}>For more information or media inquiries, please reach out to our team.</p>

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(42,42,36,0.08)' }}>
          <Link to="/news" style={{
            fontFamily: sans, fontSize: '16px', fontWeight: 500, color: ACCENT_DARK, textDecoration: 'none',
            borderBottom: '1px solid rgba(26,66,50,0.3)',
          }}>← Back to News</Link>
        </div>

      </article>
    </main>

    <Footer2026 />
  </div>
);

export default NamedDefault;

export const Head = () => (
  <Head2026
    title="Intentional Society Announces $1.8 Million, 10-Year Funding Commitment"
    description="A ten-year, $1.8 million commitment to keep Intentional Society free and peer-led."
  />
);
