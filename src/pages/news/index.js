import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';
import CenteredColumn from '../../components/centered-column';

const NewsIndex = () => (
  <Layout>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 64px - 120px)' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
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
        </CenteredColumn>
        <div style={{ flex: 1 }}></div>
        <div style={{textAlign: 'right', maxWidth: '960px', margin: '0 auto', padding: '0 50px', marginBottom: '-25px', width: '100%', boxSizing: 'border-box'}}>
          <Link to="/">Back to home page</Link>
        </div>
      </div>
    </div>
  </Layout>
);

export default NewsIndex;
