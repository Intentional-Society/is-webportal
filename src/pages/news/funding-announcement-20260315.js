import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import CenteredColumn from '../../components/centered-column';
import * as MarkdownStyles from '../../styles/markdown-content.module.css';

const FundingAnnouncement = ({ data }) => (
  <Layout>
    <div style={{ height: '30px' }}></div>
    <CenteredColumn>
      <div
        className={MarkdownStyles.markdownContent}
        dangerouslySetInnerHTML={{__html: data.content.childMarkdownRemark.html}}
      />
      <div style={{textAlign: 'right', marginBottom: '-25px'}}>
        <Link to="/news/">Back to News</Link>
      </div>
    </CenteredColumn>
  </Layout>
);

export default FundingAnnouncement;

export const query = graphql`
  query {
    content: file(relativePath: { eq: "md/funding-announcement-20260315.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;
