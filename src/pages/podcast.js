import React from 'react';
import { graphql } from 'gatsby';
import {
  sans, ACCENT, ACCENT_DARK, INK, MUTED, bodyP, sectionHeading, subsectionHeading,
  Head2026, HeaderBand, Page2026, Article2026, Divider, RawStyle,
} from '../components/design2026/chrome';

// The Intentional Society Podcast. Episode synopses below are JSX (short,
// hand-maintained), but the transcripts are long documents maintained outside
// the repo — they follow the practices.js pattern instead: markdown files
// under src/md/podcast-transcripts/, pulled in by the page query below and
// rendered through dangerouslySetInnerHTML inside a collapsed <details>.

// This page's own words, read by both the header band and the document head.
// siteName: false — the title already names the society.
const PAGE = {
  title: 'The Intentional Society Podcast',
  description: 'conversations from inside the community',
  metaDescription: 'Listen to the Intentional Society Podcast — conversations from inside the community.',
  siteName: false,
};

const episodeLinks = [
  { text: 'Listen on Spotify', href: 'https://open.spotify.com/show/6VObFjAmDWinl9c8fxLDZw' },
  { text: 'Listen on Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/the-intentional-society-podcast-liminal-stories/id6807853127' },
  { text: 'Watch on YouTube', href: 'https://www.youtube.com/@intentionalsociety/podcasts' },
];

// Episode list and synopses — kept in step with the transcripts in
// src/md/podcast-transcripts/ by `slug`, which matches each file's name.
const episodes = [
  {
    slug: 'ep1-jason-sears',
    title: 'Episode 1 — Jason Sears: Slow Work, Urgent Purpose',
    guest: 'Jason Sears, co-founder of VillageCo',
    recorded: 'August 2026',
    body: [
      "Jason Sears spent twenty years working in nonprofits before realizing he was treating symptoms rather than causes. The cause, as he saw it: we've lost the infrastructure that used to hold communities together — the regular gatherings, the shared rituals, the simple fact of knowing your neighbors.",
      'So he founded VillageCo, left his salary behind, and started building something new: a civic club model designed for an era of disconnection. Along the way he discovered Open Space Technology, learned to run an organization on consent rather than authority, and found out what happens when you slow everything down on purpose.',
      "This conversation covers the full arc — from a Boys and Girls Club mentor who told him the building could burn down and it wouldn't matter, to why he now thinks relationships might be the most reliable source of security any of us have.",
    ],
    themes: 'community infrastructure, consent-based decision making, Open Space Technology, leaving financial stability, relationships as security',
  },
  {
    slug: 'ep2-carol-xu',
    title: 'Episode 2 — Carol Xu: Following a Path That Makes No Sense on Paper',
    guest: 'Carol Xu, founder of Reimagine Livelihood and the Relational Dojo',
    recorded: '2026',
    body: [
      "Carol Xu spent the first thirty years of her life on a clear trajectory: top schools, a PhD at Berkeley, a future in academia studying the sociology of organizations. Then, somewhere inside a dissertation she couldn't finish, something broke.",
      "What followed was years of anxiety, meditation, and a slow dismantling of the identity she'd built her whole life around. She left academia. She stopped pretending the two halves of her life — the professional and the contemplative — weren't in conflict. And in that emptying, something new began to take shape.",
      "In this conversation, Carol talks about what it feels like to follow intuition when the rational mind can't justify it, what she learned about depression that changed how she understood her own mind, and why she thinks the way most of us relate to money and livelihood is quietly draining the life out of our communities.",
    ],
    themes: 'leaving academia, meditation, rational vs. heart-centered paradigm, intuition, livelihood, Reimagine Livelihood, Relational Dojo',
  },
  {
    slug: 'ep3-james-baker',
    title: 'Episode 3 — James Baker: Devoted',
    guest: 'James Baker, founder of Intentional Society',
    recorded: '2026',
    body: [
      'James Baker grew up with two missions handed to him: save the world in the religious sense, and solve the world as the gifted kid who could figure anything out. For years that worked — until he hit the ceiling of a 1,000-person engineering org, found himself yelling at his kids under the stress of it, and watched every strength he had turn counterproductive.',
      'What followed was a surrender into adult development psychology and relational practices, a career-ending pandemic pivot, and six months of deliberate drifting before the quiet tug of something new became undeniable. He started a weekly call, invited some friends, and tentatively named it Intentional Society.',
      "In this conversation, James traces the full arc — from evangelical kid captain-of-everything, through three waves of deconstruction, to the moment in a small attic yoga studio in Seattle that changed how he saw himself. At the end, Shaun asks him to point at the moon and name what he's devoted to. The answer is love — but not the clichéd kind.",
    ],
    themes: 'adult development, authentic relating, Intentional Society, deconstruction, leadership, source-ship, relational love, devotion',
  },
  {
    slug: 'ep4-faith',
    title: 'Episode 4 — Faith: Nothing Has to Be Thrown Away',
    guest: 'Faith, founder of Soul School',
    recorded: '2026',
    body: [
      'Faith once had it all on the good track — high-flying career in San Francisco tech startups, at the pinnacle of her field. In 2016, she walked away into a long, dark night. What followed was years of serious mental illness, isolation, and searching, before she found her way into what she now calls soul work.',
      "Today she describes her life as blissful — not in an escapist way. For Faith, joy is what happens when all the emotions are allowed to be there. She talks about not feeling alone even when she's lonely, about treating even her most painful experiences as something to cherish, and about life as a composition of dark and light where nothing has to be thrown away.",
      "In this conversation, Faith traces her journey from evangelical child to tech executive to spiritual guide — through Tantric Shaivism, bipolar disorder, the liminal web, and finally to soul logic: a way of navigating life that calls on intuition, beauty, and a relational partnership with the soul itself. She makes the case that beauty is a better guide than right and wrong.",
    ],
    themes: 'soul work, soul logic, dark night of the soul, beauty as guide, spiritual intelligence, imaginal practices, psychopomp work, meaning crisis, acceptance',
  },
];

const episodeMeta = { fontSize: '15px', color: MUTED, margin: '0.2rem 0 0.9rem', lineHeight: 1.6 };
const episodeBody = { ...bodyP, fontSize: '18px' };

const NamedDefault = ({ data }) => {
  const transcriptsBySlug = {};
  data.allFile.nodes.forEach(node => { transcriptsBySlug[node.name] = node; });

  return (
  <Page2026 active="/podcast">

    {/* The hover state for the Listen cards below — they're the only links on
        the page without one of their own. Scoped to those cards: as a bare
        `a:hover` this also faded the nav and all sixteen footer links, which
        then behaved differently here than on every other page. The 180ms
        matches the credit tooltip's fade in chrome.js. */}
    <RawStyle>{`
      .podcast-listen { transition: opacity 180ms ease; }
      .podcast-listen:hover { opacity: 0.8; }
      .rsc-item summary { list-style: none; cursor: pointer; display: flex; align-items: baseline; gap: 0.6rem; }
      .rsc-item summary::-webkit-details-marker { display: none; }
      .rsc-item summary::before { content: '›'; display: inline-block; color: ${ACCENT}; font-size: 1.1em; line-height: 1.4; transition: transform 0.15s; flex-shrink: 0; }
      .rsc-item[open] summary::before { transform: rotate(90deg); }
      .rsc-item { border-bottom: 1px solid rgba(42,42,36,0.08); padding: 0.9rem 0; }
      .podcast-transcript { font-size: 17px; line-height: 1.8; color: ${MUTED}; }
      .podcast-transcript p { margin: 0 0 1rem; }
      .podcast-transcript strong { color: ${INK}; }
      .podcast-transcript hr { border: none; border-top: 1px solid rgba(42,42,36,0.12); margin: 1.2rem 0; }
    `}</RawStyle>

    {/* ======== Header band ======== */}
    <HeaderBand
      image="pond-leaves.jpg" focus="center 45%" credit="Bill Claff" veil="news"
      title={PAGE.title}
      description={PAGE.description}
    />

    {/* ======== Article body ======== */}
    <Article2026>

      <p style={bodyP}>
        Something is shifting in how people understand work, community, and what a life is
        for. Some people feel it as restlessness. Some feel it as breakdown. Some follow a
        thread they can't quite name until, years later, they look back and see the
        shape of it.
      </p>
      <p style={bodyP}>
        Liminal Stories is a podcast about those people — the ones who left something
        behind before they knew what they were walking toward, who found themselves
        building new kinds of containers for human connection, and who are still,
        honestly, figuring it out.
      </p>
      <p style={bodyP}>
        Each conversation follows the arc: who you were before, what broke or called or
        quietly insisted, and what you're carrying now. The guests are thinkers,
        builders, and practitioners inside the intentional community and liminal web space
        — but the conversations are less about their projects than about the people behind
        them, and the larger thing they're all, in different ways, reaching for.
      </p>
      <p style={bodyP}>
        Hosted by Shaun Button. Part of the Intentional Society community.
      </p>

      <Divider />

      <h2 style={sectionHeading}>Listen</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1rem' }}>
        {episodeLinks.map(l => (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="podcast-listen" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
            background: '#FAF8F3', border: '1px solid rgba(42,42,36,0.1)', borderRadius: '6px',
            padding: '1.1rem 1.4rem', fontFamily: sans,
          }}>
            <span style={{ fontSize: '18px', fontWeight: 700, color: ACCENT_DARK }}>{l.text}</span>
            <span style={{ fontSize: '18px', color: ACCENT_DARK }}>→</span>
          </a>
        ))}
      </div>

      <Divider />

      <h2 style={sectionHeading}>Episodes</h2>
      {episodes.map(ep => {
        const node = transcriptsBySlug[ep.slug];
        return (
          <div key={ep.slug} style={{ marginBottom: '2rem' }}>
            <h3 style={subsectionHeading}>{ep.title}</h3>
            <p style={episodeMeta}>
              <strong>Guest:</strong> {ep.guest} <span style={{ margin: '0 0.5em' }}>·</span>
              <strong>Recorded:</strong> {ep.recorded}
            </p>
            {ep.body.map((paragraph, i) => (
              <p key={i} style={episodeBody}>{paragraph}</p>
            ))}
            <p style={episodeMeta}><strong>Themes:</strong> {ep.themes}</p>
            {node && (
              <details className="rsc-item">
                <summary style={{ fontFamily: sans, fontSize: '16px', fontWeight: 700, color: ACCENT_DARK }}>
                  Read the transcript
                </summary>
                <div className="podcast-transcript" style={{ marginTop: '0.9rem', paddingLeft: '1.5rem' }}
                  dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }}
                />
              </details>
            )}
          </div>
        );
      })}

    </Article2026>
  </Page2026>
  );
};

export default NamedDefault;

export const Head = ({ location }) => (
  <Head2026 {...PAGE} pathname={location.pathname} />
);

export const query = graphql`
  query {
    allFile(
      filter: { relativeDirectory: { eq: "md/podcast-transcripts" } }
    ) {
      nodes {
        name
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
