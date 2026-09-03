import React from 'react';
import {
  serif, sans, ACCENT_DARK, INK, BODY_TEXT, PAPER,
  Grain2026, Nav2026, Footer2026, Head2026,
  NAV_OFFSET,
} from '../components/design2026/chrome';

// The Intentional Society Podcast — a new page. Its header is a custom h2
// (not the shared HeaderBand, which always renders an h1) so the page's one
// h1 stays the actual article title in the body. No PhotoCredit on the
// header photo — it isn't a HeaderBand credit-host, so add one the usual way
// (className="credit-host" + <PhotoCredit>) if this photo needs attribution.

const bodyP = { fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 };

const episodeLinks = [
  { text: 'Listen on Spotify', href: 'https://open.spotify.com/show/6VObFjAmDWinl9c8fxLDZw' },
  { text: 'Listen on Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/the-intentional-society-podcast-liminal-stories/id6807853127' },
];

const NamedDefault = () => (
  <div style={{ fontFamily: serif, fontWeight: 300, color: INK, lineHeight: 1.7, background: PAPER, position: 'relative', overflowX: 'hidden' }}>

    <Grain2026 />
    <Nav2026 active="/podcast" />

    <style>{'a:hover { opacity: 0.8; }'}</style>

    {/* ======== Header band ======== */}
    <header style={{
      position: 'relative', marginTop: NAV_OFFSET, minHeight: '340px', display: 'flex',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden',
      background: 'url(/design2026/pond-leaves.jpg) center 45%/cover, #1c2730',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(14,18,22,0.55) 0%, rgba(14,18,22,0.45) 50%, rgba(14,18,22,0.62) 100%)',
      }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', padding: '4rem 2rem' }}>
        <h2 style={{
          fontFamily: serif, fontWeight: 500, lineHeight: 1.25, fontSize: 'clamp(2.2rem,4.2vw,3.2rem)',
          color: '#FAF8F3', textShadow: '0 2px 24px rgba(8,12,16,0.8)', margin: 0,
        }}>Conversations from inside the community</h2>
      </div>
    </header>

    {/* ======== Article body ======== */}
    <main style={{ position: 'relative', zIndex: 3, background: PAPER, padding: '4rem 2rem 5rem' }}>
      <article style={{ maxWidth: '720px', margin: '0 auto' }}>

        <h1 style={{ fontFamily: serif, fontWeight: 500, lineHeight: 1.25, fontSize: 'clamp(1.9rem,3.4vw,2.6rem)', color: ACCENT_DARK, margin: '0 0 1.4rem' }}>
          The Intentional Society Podcast
        </h1>

        <p style={bodyP}>
          Friends of Intentional Society tell their stories of entering the liminal web. From
          hearing the call, to making the leap, and finding new ways. Discover how others
          arrived and the impact of relationality.
        </p>
        <p style={bodyP}>
          Shaun Button interviews guests to reveal the depth behind the individuals we
          encounter in the network.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(42,42,36,0.12)', margin: '3rem auto', width: '120px' }} />

        <h2 style={{
          fontFamily: serif, fontWeight: 300, lineHeight: 1.2, fontSize: 'clamp(1.5rem,2.6vw,1.9rem)',
          color: '#5C4A3A', margin: '0 0 1.4rem',
        }}>Listen</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1rem' }}>
          {episodeLinks.map(l => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
              background: '#FAF8F3', border: '1px solid rgba(42,42,36,0.1)', borderRadius: '6px',
              padding: '1.1rem 1.4rem', fontFamily: sans,
            }}>
              <span style={{ fontSize: '18px', fontWeight: 600, color: ACCENT_DARK }}>{l.text}</span>
              <span style={{ fontSize: '18px', color: ACCENT_DARK }}>→</span>
            </a>
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
    title="The Intentional Society Podcast"
    description="Listen to the Intentional Society Podcast — conversations from inside the community."
  />
);
