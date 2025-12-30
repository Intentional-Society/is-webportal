import React from 'react';
import { Link } from 'gatsby';
import Typography from '@mui/material/Typography';
import Layout from '../components/layout';
import CenteredColumn from '../components/centered-column';
import { StaticImage } from 'gatsby-plugin-image';

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: '5vh' }}></div>
    <CenteredColumn>
      <Typography variant="h2">Branding</Typography>
      <p>For press and partners including representations of Intentional Society in other media</p>
      <p>Wordmark: <StaticImage src="../../static/images/branding/intentional-society-wordmark2024.png"/> </p>
      <p>If higher-fidelity rendering is needed: This is Gudea font with a background color #24818E</p>
    </CenteredColumn>
    </Layout>
);

export default NamedDefault;

