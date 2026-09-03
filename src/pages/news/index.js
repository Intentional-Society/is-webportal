import React from 'react';
import { Link } from 'gatsby';
import {
  serif, sans, ACCENT_DARK, INK, BODY_TEXT, PAPER,
  Grain2026, Nav2026, Footer2026, Head2026, HeaderBand,
} from '../../components/design2026/chrome';

// 2026 redesign of the News page — self-contained page ported from the
// Claude Design mockup, using the shared 2026 chrome (components/design2026/).
// Each post is now its own standalone page (so existing inbound links keep
// working) — this page just lists them. Add new posts to the top of `posts`.

// This page's own words, read by both the header band and the document head.
const PAGE = {
  title: 'Announcements and articles',
  metaTitle: 'News',
  metaDescription: 'Announcements and articles from Intentional Society.',
};

const posts = [
  {
    slug: 'funding-announcement-20260315',
    to: '/news/funding-announcement-20260315',
    date: 'March 15, 2026',
    title: 'Intentional Society Announces $1.8 Million, 10-Year Funding Commitment',
  },
  {
    slug: 'the-call',
    to: '/thecall',
    date: 'December 2020',
    title: 'The Call',
  },
];

const mediaAppearances = [
  { title: 'How to Handle Anything', href: 'https://www.youtube.com/watch?v=gVx8mAzcMDA', with: 'Life Itself', withHref: 'https://lifeitself.org/blog/how-to-handle-anything-in-life-and-community', date: '2023-11-23' },
  { title: 'Intentional Society @ The Stoa', href: 'https://www.youtube.com/watch?v=xaieyI-4TPo', date: '2022-02-28' },
  { title: 'Reach Truth (video) podcast w/ Tasshin Fogleman', href: 'https://www.youtube.com/watch?v=XWYgyjX3lZE', date: '2021-12-18' },
  { title: 'Microsolidarity YouTube channel w/ Richard Bartlett', href: 'https://www.youtube.com/watch?v=O5boJc88M9g', date: '2021-11-21' },
];

const NamedDefault = () => (
  <div style={{ fontFamily: serif, fontWeight: 300, color: INK, lineHeight: 1.7, background: PAPER, position: 'relative', overflowX: 'hidden' }}>

    <Grain2026 />
    <Nav2026 active="/news" />

    {/* ======== Header band ======== */}
    <HeaderBand
      image="/design2026/luminaria-field.jpg" focus="center 45%" credit="Bill" veil="news"
      title={PAGE.title}
    />

    {/* ======== Article body ======== */}
    <main style={{ position: 'relative', zIndex: 3, background: PAPER, padding: '4rem 2rem 5rem' }}>
      <article style={{ maxWidth: '720px', margin: '0 auto' }}>

        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
          flexWrap: 'wrap', padding: '1.2rem 1.5rem', marginBottom: '3rem',
          background: '#FAF8F3', borderLeft: '2px solid #7A9E8A',
        }}>
          <p style={{ fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: 0 }}>
            Looking for our weekly community updates? Those live on our newsletter archive.
          </p>
          <a href="https://buttondown.com/intentionalsociety/archive/" target="_blank" rel="noopener noreferrer" style={{
            fontFamily: sans, fontSize: '17px', fontWeight: 500, color: ACCENT_DARK, textDecoration: 'none',
            borderBottom: '1px solid rgba(26,66,50,0.3)', whiteSpace: 'nowrap',
          }}>Weekly updates archive →</a>
        </div>

        <h2 style={{
          fontFamily: serif, fontWeight: 300, lineHeight: 1.25, fontSize: 'clamp(1.5rem,2.6vw,2rem)',
          color: '#5C4A3A', margin: '0 0 1.2rem',
        }}>Media Appearances</h2>
        <ul style={{ listStyle: 'none', margin: '0 0 3.5rem', padding: 0 }}>
          {mediaAppearances.map(m => (
            <li key={m.href} style={{ fontSize: '16px', fontWeight: 500, color: BODY_TEXT, marginBottom: '0.6rem', lineHeight: 1.6 }}>
              <a href={m.href} target="_blank" rel="noopener noreferrer" style={{ color: ACCENT_DARK }}>{m.title}</a>
              {m.with && <> w/ <a href={m.withHref} target="_blank" rel="noopener noreferrer" style={{ color: ACCENT_DARK }}>{m.with}</a></>}
              <span style={{ color: '#6B6860' }}> — {m.date}</span>
            </li>
          ))}
        </ul>

        {/* Post list */}
        <div style={{ marginBottom: '1rem' }}>
          {posts.map(post => (
            <div key={post.slug} style={{
              paddingBottom: '1.4rem', marginBottom: '1.4rem', borderBottom: '1px solid rgba(42,42,36,0.08)',
              display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap',
            }}>
              <Link to={post.to} style={{
                fontFamily: serif, fontWeight: 500, fontStyle: 'italic', fontSize: '1.3rem',
                color: ACCENT_DARK, textDecoration: 'none',
              }}>{post.title}</Link>
              <span style={{ fontFamily: sans, fontSize: '14px', color: '#6B6860' }}>{post.date}</span>
            </div>
          ))}
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
