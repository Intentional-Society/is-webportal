import React from 'react';
import { Link } from 'gatsby';
import Typography from '@mui/material/Typography';
import Layout from '../components/layout';
import CenteredColumn from '../components/centered-column';
import ButtondownSignup from '../components/buttondownsignup';
import BlurbOfficeHours from '../components/blurb-officehours';
import * as GlobalCSS from '../styles/global.module.css';

const NamedDefault = ({ data }) => {
  return (
    <Layout>
      <div style={{ height: '30px' }}></div>
      <CenteredColumn>
        <Typography variant="h2">Get Involved</Typography>
        <p>Intrigued? Here are your options:</p>

        <a className={GlobalCSS.anchorOffset} id="newsletter"></a>
        <Typography variant="h3">Subscribe for Updates</Typography>
        <ButtondownSignup/>
        <p>Every Thursday, a friendly update with public events and reflections.
          Browse the <a href="https://buttondown.email/intentionalsociety/archive/">archive</a> for
          samples. Watch for a confirmation email to finish signing up.
        </p>

        <a className={GlobalCSS.anchorOffset} id="connection-calls"></a>
        <Typography variant="h3">Attend a Connection Call</Typography>
        <p>This call is like a picnic table out on our front lawn. 
           Open to all, new and familiar, with no agenda other than your curiosity!</p>

        <p><BlurbOfficeHours /> Bring your video camera (phone is okay), microphone, and
          your <Link to="/questions">questions</Link>.</p>

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