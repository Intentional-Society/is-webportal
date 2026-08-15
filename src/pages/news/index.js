import React from 'react';
import { Link } from 'gatsby';
import {
  serif, sans, ACCENT_DARK, INK, BODY_TEXT, PAPER, headerKicker,
  Grain2026, Nav2026, Footer2026, Head2026,
} from '../../components/design2026/chrome';

// 2026 redesign of the News page — self-contained page ported from the
// Claude Design mockup, using the shared 2026 chrome (components/design2026/).
// Add new posts to the top of `posts`; each renders as a listing entry plus a
// full article further down the page.

const posts = [
  {
    slug: 'funding-announcement-20260315',
    date: 'March 15, 2026',
    title: 'Intentional Society Announces $1.8 Million, 10-Year Funding Commitment',
    paragraphs: [
      `Intentional Society (IS), as stewarded by Intentional Society, LLC, today announced a $1.8 million funding commitment, spread over ten years, from a small private family foundation. The announcement was made at the organization's 5th anniversary event, subtitled "Launching a New Era," celebrating Intentional Society's journey from a small huddle into a network, organization, and ecosystem. This new era marks the evolution from an exploratory phase focused on inner and cultural development into a mature, integrated ecosystem encompassing economic impact, social action, and organizational capacity.`,
      `The funding will support three key areas: the IS Workteam, a contractor structure formed in December 2025 to increase operational capacity for the Intentional Society ecosystem; ongoing contributions to the Intentional Ventures system, which catalyzes values-aligned livelihoods; and relational grant streams to partners and allies in the broader liminal scene who are doing impactful work in the field. All 2026 allocations have been determined at this time.`,
      `"Making this commitment public is a signal of sustainability and perseverance," said James Baker, founder of Intentional Society. "The ecosystem we've grown together over these first five years has deep roots, and this funding grounds our intention to keep on this journey for the long term. I don't know what the world will look like in 10 years, but I'm confident that we're going to be supporting each other whatever happens."`,
      `For more information or media inquiries, please reach out to our team.`,
    ],
  },
  {
    slug: 'the-call',
    date: 'December 2020',
    title: 'The Call',
    paragraphs: [
      `Hi there. I'm James of December 2020, and this is my story of how we could grow bigger than our problems. Which problems? Well, I see three types: societal, relational, and personal.`,
      `Societal: our crumbling political norms and abysmal epidemic response have shown how little capability we have for large-scale coordination or sensemaking. We are gripped in culture war power struggle, with existential threats looming — inequity, authoritarianism, climate change, and the relentless progress of AI, nano-, bio-, and other technological power becoming more widely accessible.`,
      `Relational: our connections to physical tribes are gone or gutted. Church and traditional community connections are waning. We have fewer deep friendships, scattered more widely, strained by an age of algorithmically intermediated digital (dis-)connection and physical isolation. We crave belonging, connection, safety, and love.`,
      `Personal: we spend our lives in pursuit of happiness and find it elusive. Traumas large and small haunt us as we navigate adulting in a complex, rapidly changing world. The scripts of prior generations don't work for newer ones. We strive to fit in, to find ourselves, and to find meaning — then it's all overwhelming, so we cope by bingewatching shows while doomscrolling on our phones.`,
      `This whole complex system of you, I, we, and society must adapt by developing the capacity to survive and thrive at every level. None of us can beat the system alone, and there is no conventional solution. So what of a solution? More capable doing flows from being who we want to be, which starts with awareness and intention. Awareness is the means to pay attention to what's really happening — it breaks through the frames limiting our perspective. Intention is the will to cause something to change — it unlocks fluid, non-coercive motion through the paradox of accepting the world as it is alongside our desire to steer its future path.`,
      `Together they bring us the capacity to become our biggest selves and the capability to move through increasing complexity. This happens within our own selves, takes root in our relationships, and can then flow outward to grow a new system that can succeed the old one — personally, relationally, and societally.`,
      `Does this resonate with you? I was looking for allies: explorers and pioneers of co-creation, seeking to develop a kernel of inter-subjective practices supporting our growth in awareness and intentionality — particularly (but not exclusively) in mindfulness practices, human connection practices, adult development theory, cultural/societal evolution, and the future of work. We can find the way only by walking the path together.`,
      `Written by James, December 2020. Preserved here as a historical artifact of Intentional Society — the call that started it all.`,
    ],
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
    <header style={{
      position: 'relative', marginTop: '77px', minHeight: '280px', display: 'flex',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden',
      background: 'url(/design2026/driftwood.jpg) center 30%/cover, #1c2730',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(14,18,22,0.6) 0%, rgba(14,18,22,0.5) 50%, rgba(14,18,22,0.66) 100%)',
      }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '640px', padding: '3.5rem 2rem' }}>
        <div style={headerKicker}>News</div>
        <h1 style={{
          fontFamily: serif, fontWeight: 500, lineHeight: 1.25, fontSize: 'clamp(2rem,4vw,2.8rem)',
          color: '#FAF8F3', textShadow: '0 2px 24px rgba(8,12,16,0.8)', margin: 0,
        }}>
          Announcements and articles
        </h1>
      </div>
    </header>

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
        <div style={{ marginBottom: '3.5rem' }}>
          {posts.map(post => (
            <div key={post.slug} style={{
              paddingBottom: '1.4rem', marginBottom: '1.4rem', borderBottom: '1px solid rgba(42,42,36,0.08)',
              display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap',
            }}>
              <a href={`#${post.slug}`} style={{
                fontFamily: serif, fontWeight: 500, fontStyle: 'italic', fontSize: '1.3rem',
                color: ACCENT_DARK, textDecoration: 'none',
              }}>{post.title}</a>
              <span style={{ fontFamily: sans, fontSize: '14px', color: '#6B6860' }}>{post.date}</span>
            </div>
          ))}
        </div>

        {/* Full posts */}
        {posts.map(post => (
          <div key={post.slug} id={post.slug} style={{ marginBottom: '4rem', paddingTop: '1rem', scrollMarginTop: '6rem' }}>
            <div style={{
              fontFamily: sans, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase',
              fontWeight: 600, color: '#5C8770', marginBottom: '0.6rem',
            }}>{post.date}</div>
            <h2 style={{
              fontFamily: serif, fontWeight: 300, lineHeight: 1.25, fontSize: 'clamp(1.5rem,2.6vw,2rem)',
              color: '#5C4A3A', margin: '0 0 1.4rem',
            }}>{post.title}</h2>
            {post.paragraphs.map((p, i) => (
              <p key={i} style={{ fontSize: '20px', fontWeight: 500, color: BODY_TEXT, margin: '0 0 1.2rem', lineHeight: 1.7 }}>{p}</p>
            ))}
          </div>
        ))}

        <div style={{ textAlign: 'right', marginTop: '1rem' }}>
          <Link to="/history" style={{
            fontFamily: sans, fontSize: '16px', fontWeight: 500, color: ACCENT_DARK, textDecoration: 'none',
            borderBottom: '1px solid rgba(26,66,50,0.3)',
          }}>Next page: History →</Link>
        </div>

      </article>
    </main>

    <Footer2026 />
  </div>
);

export default NamedDefault;

export const Head = () => (
  <Head2026
    title="News — Intentional Society"
    description="Announcements and articles from Intentional Society."
  />
);
