import React from 'react';
import { Link } from 'gatsby';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import ButtondownSignup from '../components/buttondownsignup';
// import IsHr from '../components/is-hr';
// import BlurbPractice from '../components/blurb-practice';
import CenteredColumn from '../components/centered-column';
// import * as GlobalCSS from '../styles/global.module.css';

/* imageList commented out for 5-year celebration page takeover
const imageList = [
  {
    image: '/images/logos/second-renaissance.jpg',
    link: 'https://secondrenaissance.net',
    comment: 'Exploring better futures through collective intelligence.'
  },
  {
    image: '/images/logos/life-itself.jpg',
    link: 'https://lifeitself.us',
    comment: 'A community for philosophy, culture, and sustainable living.'
  },
  {
    image: '/images/logos/enspiral.png',
    link: 'https://www.enspiral.com/',
    comment: 'A network of freelancers focused on self-managed organizations.'
  },
  {
    image: '/images/logos/microsolidarity.jpg',
    link: 'https://www.microsolidarity.cc/',
    comment: 'A framework for decentralized organizing and community-building.'
  },
  {
    image: '/images/logos/building-belonging.png',
    link: 'https://www.buildingbelonging.us/',
    comment: 'A movement for creating spaces where everyone belongs.'
  },
  {
    image: '/images/logos/starters-culture.png',
    link: 'https://www.startercultures.us/',
    comment: 'Co-creating new economic models for livelihoods and co-ops.'
  }
];
*/



const NamedDefault = ({ data }) => <>
  <Layout>
    <StaticImage src="../../static/images/bg/E7EFEBbg.png" layout="fullWidth" alt="" loading="eager"
                style={{ height: '60vh', zIndex: -1, position: 'absolute', 
                        top: '0px', left: '0px', right: '0px'}}
                imgStyle={{objectFit: 'fill'}}/>
    <div style={{ textAlign: 'center', margin: '0 auto', minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Typography variant="h2" style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 8vw, 3.75rem)' }}>
        Intentional Society
      </Typography>
      <Typography variant="h2" style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 8vw, 3.75rem)' }}>
        The 5-Year Celebration
      </Typography>
      <Typography variant="h2" style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 8vw, 3.75rem)' }}>
        Launching a New Era
      </Typography>
    </div>
    <CenteredColumn>
      <div style={{fontSize: '1.2em'}}>

        <p style={{textAlign: 'center', fontSize: '1.2em'}}>
          <b>March 15, 2026 &middot; 1:00 PM Pacific &middot; 90 minutes</b>
        </p>

        <p>Join us for a landmark gathering as we celebrate five years of Intentional Society!
          Hear stories from our journey, learn about our evolving programs,
          and be part of the launch of an expanded network.
          Plus, we have a significant announcement to share.
          Whether you've been with us from the start or are just discovering IS,
          this is the event to attend.</p>

        <p style={{textAlign: 'center'}}>
          <a href="https://us02web.zoom.us/meeting/register/8nzxXOk5Rzicpmo5mTMwlQ"
            style={{
              display: 'inline-block',
              backgroundColor: '#24818E',
              color: '#FFFFFF',
              padding: '12px 32px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '1.2em',
              fontWeight: 'bold'
            }}>
            Register on Zoom
          </a>
        </p>

        <p>Want to follow along with what we're doing and learning?
          Subscribe to our Weekly Update newsletter:</p>
        <ButtondownSignup></ButtondownSignup>

      </div>
    </CenteredColumn>
  </Layout>
</>;
export default NamedDefault;