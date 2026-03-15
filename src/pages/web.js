import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import CenteredColumn from '../components/centered-column';
import * as MarkdownStyles from '../styles/markdown-content.module.css';
import * as GlobalCSS from '../styles/global.module.css';

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: '30px' }}></div>
    <CenteredColumn>
      <div
        className={MarkdownStyles.markdownContent}
        dangerouslySetInnerHTML={{__html: data.content.childMarkdownRemark.html}}
      />
      <p style={{textAlign: 'center', padding: '12px 0'}}>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfISdXPBMxhn0Sr9TJ4_SVLSoTucaWv_y1c6crrJGJ0OnfZnQ/viewform"
          className={GlobalCSS.bigButton}>
          Join the web
        </a>
      </p>
      <div style={{textAlign: 'right', marginBottom: '-25px'}}>
        Next page: <Link to="/community">Community</Link>
      </div>
    </CenteredColumn>
  </Layout>
);

export default NamedDefault;

export const query = graphql`
  query {
    content: file(relativePath: { eq: "md/web.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;
