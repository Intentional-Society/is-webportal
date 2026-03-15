import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import CenteredColumn from '../components/centered-column';
import IsHr from '../components/is-hr';
import * as MarkdownStyles from '../styles/markdown-content.module.css';
import * as PracticesStyles from '../styles/practices.module.css';

// Table of contents structure — drives both TOC rendering and body ordering
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

// Flatten tocStructure into ordered chapter list for body rendering
const chapters = tocStructure.flatMap(entry =>
  entry.practices ? [{ name: entry.name }, ...entry.practices] : [entry]
);

const PracticesPage = ({ data }) => {
  const nodesByName = {};
  data.allFile.nodes.forEach(node => { nodesByName[node.name] = node; });
  const sections = chapters
    .map(ch => ({ ...ch, node: nodesByName[ch.name] }))
    .filter(s => s.node);

  return (
    <Layout>
      <div style={{ height: '30px' }}></div>
      <CenteredColumn>
        <h2 style={{textAlign: 'center'}}>Relational Practices Catalog</h2>
        <div className={PracticesStyles.bookLayout}>
        <nav className={PracticesStyles.toc}>
          <ul>
            {tocStructure.map((entry, i) =>
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
        <IsHr />
        {sections.map((s, i) => (
          <React.Fragment key={s.name}>
            <a id={s.name} style={{display:'block',position:'relative',top:'-74px',visibility:'hidden'}}></a>
            <div
              className={`${MarkdownStyles.markdownContent}`}
              dangerouslySetInnerHTML={{__html: s.node.childMarkdownRemark.html}}
            />
            {i < sections.length - 1 && <IsHr />}
          </React.Fragment>
        ))}
        </div>
        <div style={{textAlign: 'right', marginBottom: '-25px'}}>
          <Link to="/">Back to home page</Link>
        </div>
      </CenteredColumn>
    </Layout>
  );
};

export default PracticesPage;

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
