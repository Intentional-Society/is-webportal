import React from 'react';
import {
  sans, ACCENT_DARK, bodyP, sectionHeading,
  Head2026, HeaderBand, Page2026, Article2026, Divider,
} from '../components/design2026/chrome';

// The Intentional Society Podcast.

// This page's own words, read by both the header band and the document head.
// siteName: false — the title already names the society.
const PAGE = {
  title: 'The Intentional Society Podcast',
  description: 'conversations from inside the community',
  metaDescription: 'Listen to the Intentional Society Podcast — conversations from inside the community.',
  siteName: false,
};

// A touch smaller than the shared section heading — this page has only the
// one section, under a band that is already doing the announcing.
const listenHeading = { ...sectionHeading, fontSize: 'clamp(1.5rem,2.6vw,1.9rem)' };

const episodeLinks = [
  { text: 'Listen on Spotify', href: 'https://open.spotify.com/show/6VObFjAmDWinl9c8fxLDZw' },
  { text: 'Listen on Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/the-intentional-society-podcast-liminal-stories/id6807853127' },
];

const NamedDefault = () => (
  <Page2026 active="/podcast">

    {/* The hover state for the Listen cards below — they're the only links on
        the page without one of their own. Scoped to those cards: as a bare
        `a:hover` this also faded the nav and all sixteen footer links, which
        then behaved differently here than on every other page. The 180ms
        matches the credit tooltip's fade in chrome.js. */}
    <style>{`
      .podcast-listen { transition: opacity 180ms ease; }
      .podcast-listen:hover { opacity: 0.8; }
    `}</style>

    {/* ======== Header band ======== */}
    <HeaderBand
      image="pond-leaves.jpg" focus="center 45%" credit="Bill" veil="news"
      width="720px"
      title={PAGE.title}
      description={PAGE.description}
    />

    {/* ======== Article body ======== */}
    <Article2026>

      <p style={bodyP}>
        Friends of Intentional Society tell their stories of entering the liminal web. From
        hearing the call, to making the leap, and finding new ways. Discover how others
        arrived and the impact of relationality.
      </p>
      <p style={bodyP}>
        Shaun Button interviews guests to reveal the depth behind the individuals we
        encounter in the network.
      </p>

      <Divider />

      <h2 style={listenHeading}>Listen</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1rem' }}>
        {episodeLinks.map(l => (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="podcast-listen" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
            background: '#FAF8F3', border: '1px solid rgba(42,42,36,0.1)', borderRadius: '6px',
            padding: '1.1rem 1.4rem', fontFamily: sans,
          }}>
            <span style={{ fontSize: '18px', fontWeight: 600, color: ACCENT_DARK }}>{l.text}</span>
            <span style={{ fontSize: '18px', color: ACCENT_DARK }}>→</span>
          </a>
        ))}
      </div>

    </Article2026>
  </Page2026>
);

export default NamedDefault;

export const Head = ({ location }) => (
  <Head2026 {...PAGE} pathname={location.pathname} />
);
