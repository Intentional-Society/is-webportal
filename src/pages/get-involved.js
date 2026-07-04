import React from 'react';
import { Link } from 'gatsby';
import Typography from '@mui/material/Typography';
import Layout from '../components/layout';
import CenteredColumn from '../components/centered-column';
import ButtondownSignup from '../components/buttondownsignup';
import BlurbConnectionCall from '../components/blurb-connectioncall';
import * as GlobalCSS from '../styles/global.module.css';

const NamedDefault = ({ data }) => {
  return (
    <Layout>
      <div style={{ height: '30px' }}></div>
      <CenteredColumn>
        <Typography variant="h2">Get Involved</Typography>
        <p>Intrigued? Here are your options:</p>

        <a className={GlobalCSS.anchorOffset} id="newsletter"></a>
        <div style={{
          position: 'relative', overflow: 'hidden', borderRadius: '6px 3px 7px 4px',
          background: 'url(/design2026/newsletter-bg.jpg) center/cover no-repeat, linear-gradient(120deg,#d9c7e0 0%,#e8c9b0 50%,#cfe0d6 100%)',
          padding: '3rem 2rem', textAlign: 'center', margin: '2rem 0',
        }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'rgba(248,245,239,0.9)' }} />
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '500px', margin: '0 auto' }}>
            <Typography variant="h3" style={{ color: '#1A4232', marginBottom: '0.8rem' }}>Follow along</Typography>
            <p style={{ color: '#6B6860', fontSize: '15px', marginBottom: '1rem' }}>
              Not ready to jump in? Our weekly newsletter shares what we're learning,
              thinking, and building. No pressure, no spam.
            </p>
            <div style={{ display: 'inline-block', textAlign: 'left' }}>
              <ButtondownSignup />
            </div>
            <p style={{ color: '#6B6860', fontSize: '13px', margin: 0 }}>
              Every Thursday, a friendly update with public events and reflections.
              Browse the <a href="https://buttondown.email/intentionalsociety/archive/">archive</a> for
              samples. Watch for a confirmation email to finish signing up.
            </p>
          </div>
        </div>

        <a className={GlobalCSS.anchorOffset} id="connection-calls"></a>
        <div style={{
          position: 'relative', overflow: 'hidden', borderRadius: '4px 7px 3px 6px',
          padding: '3rem 2rem', textAlign: 'center', margin: '2rem 0',
          background: 'radial-gradient(ellipse at 50% 80%, rgba(46,107,79,0.25) 0%, transparent 60%), linear-gradient(175deg,#1e2822 0%,#1a2420 50%,#1e2420 100%)',
        }}>
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '550px', margin: '0 auto' }}>
            <div style={{
              fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
              fontWeight: 500, color: '#7A9E8A', marginBottom: '1rem', opacity: 0.85,
            }}>The best first step</div>
            <Typography variant="h3" style={{ color: '#FAF8F3', fontStyle: 'italic', marginBottom: '1rem' }}>
              Come sit with us for an hour
            </Typography>
            <p style={{ color: 'rgba(232,223,208,0.75)', fontSize: '15px', lineHeight: 1.7, marginBottom: '0.5rem' }}>
              This call is like a picnic table out on our front lawn. Open to all, new and
              familiar, with no agenda other than your curiosity! Bring your video camera
              (phone is okay), microphone, and
              your <Link to="/questions" style={{ color: '#7A9E8A' }}>questions</Link>.
            </p>
            <p style={{ color: 'rgba(232,223,208,0.9)', fontSize: '14px', marginTop: '1.5rem' }}>
              <BlurbConnectionCall />
            </p>
          </div>
        </div>

        <Typography variant="h3">Find Relational Practice Groups</Typography>
        <p>We love relational practices for personal development! You can find several
          at our sister site <a href="https://relationaldojo.org">Relational Dojo</a>.
        </p>

        <Typography variant="h3">Join the Relational Web</Typography>
        <p>You can join Intentional Society in earnest by weaving into our membership network we 
          call the <Link to="/web">relational web</Link>.</p>
        <p>Within the web, meeting every Sunday, is our <Link to="/community">Community</Link>.</p>

        <div style={{textAlign: 'right', marginBottom: '-25px'}}>
          Next page: <Link to="/web">Web</Link>
        </div>
      </CenteredColumn>
    </Layout>
  );
};

export default NamedDefault;