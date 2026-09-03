import React from 'react';
import { Link, graphql } from 'gatsby';
import {
  serif, sans, ACCENT_DARK, INK, PAPER,
  Grain2026, Nav2026, Footer2026, Head2026, HeaderBand,
} from '../components/design2026/chrome';
import * as PracticesStyles from '../styles/practices.module.css';

// The Relational Practices Catalog. This is the one page whose copy is
// markdown (src/md/practices/*.md, rendered through gatsby-transformer-remark)
// rather than JSX, because the entries are maintained as documents; its type
// and color therefore live in practices.module.css instead of inline styles.
// See CLAUDE.md for the formatting rules the .md files follow.

// This page's own words, read by both the header band and the document head.
const PAGE = {
  title: 'Relational Practices Catalog',
  description: 'a recipe book for practicing together',
  metaDescription: 'A catalog of the relational practices used at Intentional Society, with facilitator notes and references.',
};

// Table of contents structure — drives both TOC rendering and body ordering.
const tocStructure = [
  { name: 'introduction', tocTitle: 'Introduction' },
  { name: 'part-one', heading: "Part One: Inner-Shaded — The 'I'", practices: [
    { name: 'noticing', tocTitle: 'Noticing (Interpersonal Gap Awareness)' },
    { name: 'parts-work', tocTitle: 'Parts Work (Internal Family Systems)' },
    { name: 'empathy-circling', tocTitle: 'Empathy Circling' },
    { name: 'social-noting', tocTitle: 'Social Noting' },
  ]},
  { name: 'part-two', heading: "Part Two: Interpersonal — The 'We'", practices: [
    { name: 't-group', tocTitle: 'T-Group' },
    { name: 'circling', tocTitle: 'Circling' },
    { name: 'authentic-relating-games', tocTitle: 'Authentic Relating Games' },
  ]},
  { name: 'part-three', heading: "Part Three: Outer-Shaded — The 'World'", practices: [
    { name: 'inquiry-spiraling', tocTitle: 'Inquiry Spiraling' },
    { name: 'nine-whys', tocTitle: 'Nine Whys' },
    { name: 'clean-coaching', tocTitle: 'Clean Coaching' },
    { name: 'edge-case', tocTitle: 'Edge Case (Case Clinic)' },
  ]},
  { name: 'conclusion', tocTitle: 'Conclusion' },
];

// Flatten tocStructure into ordered chapter list for body rendering.
const chapters = tocStructure.flatMap(entry =>
  entry.practices ? [{ name: entry.name }, ...entry.practices] : [entry]
);

const divider = <hr className={PracticesStyles.sectionRule} />;

const PracticesPage = ({ data }) => {
  const nodesByName = {};
  data.allFile.nodes.forEach(node => { nodesByName[node.name] = node; });
  const sections = chapters
    .map(ch => ({ ...ch, node: nodesByName[ch.name] }))
    .filter(s => s.node);

  return (
    <div style={{ fontFamily: serif, fontWeight: 300, color: INK, lineHeight: 1.7, background: PAPER, position: 'relative', overflowX: 'hidden' }}>

      <Grain2026 />
      <Nav2026 active="/resources" />

      {/* ======== Header band ======== */}
      <HeaderBand
        image="/design2026/rockfield.jpg" focus="center 65%" credit="Bill"
        title={PAGE.title}
        description={PAGE.description}
      />

      {/* ======== Article body ======== */}
      <main style={{ position: 'relative', zIndex: 3, background: PAPER, padding: '4rem 2rem 5rem' }}>
        <article style={{ maxWidth: '720px', margin: '0 auto' }}>

          <h2 style={{
            fontFamily: serif, fontSize: 'clamp(1.5rem,2.5vw,2.125rem)', fontWeight: 400,
            lineHeight: 1.25, color: '#cc0000', textAlign: 'center', margin: '0 0 1.5rem',
          }}>🚧 Under Construction — Not Yet Published 🚧</h2>

          <div className={PracticesStyles.bookLayout}>
            <nav className={PracticesStyles.toc} aria-label="Catalog contents">
              <ul>
                {tocStructure.map(entry =>
                  entry.heading ? (
                    <li key={entry.name}><a href={`#${entry.name}`}>{entry.heading}</a>
                      <ul>
                        {entry.practices.map(p => (
                          <li key={p.name}><a href={`#${p.name}`}>{p.tocTitle}</a></li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={entry.name}><a href={`#${entry.name}`}>{entry.tocTitle}</a></li>
                  )
                )}
              </ul>
            </nav>

            {sections.map((s, i) => (
              <React.Fragment key={s.name}>
                {/* The id sits on the section wrapper, which is what every TOC
                    link targets — so `.bookLayout section` in
                    practices.module.css is where the scroll-margin-top that
                    clears the nav has to live. */}
                <section id={s.name}
                  dangerouslySetInnerHTML={{ __html: s.node.childMarkdownRemark.html }}
                />
                {i < sections.length - 1 && divider}
              </React.Fragment>
            ))}
          </div>

          <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(42,42,36,0.08)' }}>
            <Link to="/resources" style={{
              fontFamily: sans, fontSize: '16px', fontWeight: 500, color: ACCENT_DARK, textDecoration: 'none',
              borderBottom: '1px solid rgba(26,66,50,0.3)',
            }}>← Back to Resources</Link>
          </div>

        </article>
      </main>

      <Footer2026 />
    </div>
  );
};

export default PracticesPage;

export const Head = () => (
  <Head2026
    {...PAGE}
  />
);

export const query = graphql`
  query {
    allFile(
      filter: { relativeDirectory: { eq: "md/practices" } }
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
