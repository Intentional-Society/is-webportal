import React from 'react';
import { Link } from 'gatsby';
import Typography from '@mui/material/Typography';
import Layout from '../components/layout';
import CenteredColumn from '../components/centered-column';

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: '5vh' }}></div>
    <CenteredColumn>
      <Typography variant="h2">The Relational Web</Typography>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <Typography variant="h3">Lorem Ipsum</Typography>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.</p>

      <Typography variant="h3">Lorem Ipsum</Typography>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo.</p>

      <div style={{textAlign: 'right', marginBottom: '-25px'}}>
        <Link to="/">Back to home page</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;
