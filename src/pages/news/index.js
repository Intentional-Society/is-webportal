import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';
import CenteredColumn from '../../components/centered-column';

const NewsIndex = () => (
  <Layout>
    <div style={{ height: '5vh' }}></div>
    <CenteredColumn>
      <h2>News Releases</h2>
      <ul>
        <li>
          <Link to="/news/funding-announcement-20260315">
            Intentional Society Announces $1.8 Million, 10-Year Funding Commitment
          </Link>
          {' '}— March 15, 2026
        </li>
      </ul>
      <div style={{textAlign: 'right', marginBottom: '-25px'}}>
        <Link to="/">Back to home page</Link>
      </div>
    </CenteredColumn>
  </Layout>
);

export default NewsIndex;
