import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import CenteredColumn from '../components/centered-column';
import * as MarkdownStyles from '../styles/markdown-content.module.css';

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: '5vh' }}></div>
    <CenteredColumn>
      <div
        className={MarkdownStyles.markdownContent}
        dangerouslySetInnerHTML={{__html: data.content.childMarkdownRemark.html}}
      />
    </CenteredColumn>
  </Layout>
);

export default NamedDefault;

export const query = graphql`
  query {
    content: file(relativePath: { eq: "md/developmental-practice-series.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;
