import React from 'react';
import { Link } from 'gatsby';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import ButtondownSignup from '../components/buttondownsignup';
import IsHr from '../components/is-hr';
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
      <Typography variant="h2" style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 8vw, 3.75rem)', margin: 0 }}>
        Intentional Society
      </Typography>
      <Typography variant="h2" style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 8vw, 3.75rem)', margin: 0 }}>
        The 5-Year Celebration
      </Typography>
      <Typography variant="h2" style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 8vw, 3.75rem)', margin: 0 }}>
        Launching a New Era
      </Typography>
    </div>
    <CenteredColumn>
      <div style={{fontSize: '1.2em'}}>

        <p style={{textAlign: 'center', fontSize: '1.2em'}}>
          <b>March 15, 2026 &middot; 1:00 PM Pacific &middot; 90 minutes</b>
        </p>

        <p>Intentional Society is building a better world from the inside out. We've been meeting
          for five years now, growing together and expanding our activities. We invite you to
          celebrate with us, and to join us in launching an expanded relational web that supports
          more of us in divergent coherence!</p>

        <p style={{textAlign: 'center', padding: '12px 0'}}>
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

        <div style={{fontSize: '0.85em'}}>
          <p>For the last five years, Intentional Society has been a gathering of friends
            "being who we want to be" — one which has unfolded from a single weekly video call into a
            multi-faceted ecosystem of practices, relating, and entrepreneurial spaces. Having firmly
            rooted our culture in developmental &amp; relational inner exploration, we're now marking an
            ongoing phase shift: balancing doing and being by integrating outer action.</p>
          <p>A more beautiful world already exists whenever-and-wherever our biggest selves touch each
            other's humanity. As we look forward into our next era, we seek to anchor and grow bigger
            islands of coherence amidst this chaotic and accelerating world. "Be the change" flows from
            our hearts out into service of a thriving future guided by the question, "Can we humans
            become wise enough to hold our great power?"</p>
          <p>Come to hear stories from the history and breadth of Intentional Society, and to celebrate
            what "awareness, acceptance, integrity" has meant to people over the last half-decade. Come
            to hear about what we've learned, and about the latest developments of our relational and
            entrepreneurial programs. Come for the literal million-dollar announcement, and to
            collaborate in launching an expanding relational web.</p>
          <p>We invite you to join us on March 15th to celebrate and to connect with this part of the
            greater whole we're already becoming.</p>
        </div>
        <p style={{textAlign: 'center', padding: '12px 0'}}>
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
        <br /><br />
        <IsHr />
        <p>Want to follow along with what we're doing and learning?
          Subscribe to our Weekly Update newsletter:</p>
        <ButtondownSignup></ButtondownSignup>

      </div>
    </CenteredColumn>
  </Layout>
</>;
export default NamedDefault;