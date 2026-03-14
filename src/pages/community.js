import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import CenteredColumn from '../components/centered-column';
import * as MarkdownStyles from '../styles/markdown-content.module.css';

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: '30px' }}></div>
    <CenteredColumn>
      <div
        className={MarkdownStyles.markdownContent}
        dangerouslySetInnerHTML={{__html: data.content.childMarkdownRemark.html}}
      />
      <div style={{textAlign: 'right', marginBottom: '-25px'}}>
        <Link to="/">Back to home page</Link>
      </div>
    </CenteredColumn>
  </Layout>
);

export default NamedDefault;

export const query = graphql`
  query {
    content: file(relativePath: { eq: "md/community.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;
