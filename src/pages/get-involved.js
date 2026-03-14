import React from 'react';
import { Link } from 'gatsby';
import Typography from '@mui/material/Typography';
import Layout from '../components/layout';
import CenteredColumn from '../components/centered-column';
import ButtondownSignup from '../components/buttondownsignup';
import BlurbOfficeHours from '../components/blurb-officehours';
import BlurbPractice from '../components/blurb-practice';
import * as GlobalCSS from '../styles/global.module.css';

const NamedDefault = ({ data }) => {
  return (
    <Layout>
      <div style={{ height: '30px' }}></div>
      <CenteredColumn>
        <Typography variant="h2">Get Involved</Typography>
        <p> </p>

        <a className={GlobalCSS.anchorOffset} id="connection-calls"></a>
        <Typography variant="h3">Connection Calls</Typography>
        <p>Want to learn about Intentional Society, its history, values, and core practices?
           Want to connect with one-or-more people of IS? This is a great entry point for new folks,
           and can also satisfy the personal-connection prerequisite for community membership.
           Open to all, new and familiar, with flexible agenda.</p>

        <p><BlurbOfficeHours /> Bring your video camera (phone is okay), microphone, and
          any <Link to="/questions">questions</Link> you might have.</p>

        <Typography variant="h3">Relational Dojo</Typography>
        <p>Relational practices provide paths of personal development. Our former Practice Dojo has
          now merged into Relational Dojo, an independent platform at <a href="https://relationaldojo.org">relationaldojo.org</a>.
          
        </p>

        <Typography variant="h3">Membership</Typography>
        <p>You can join Intentional Society by weaving into our <Link to="/web">relational web</Link> network.</p>

        <Typography variant="h2">Information streams</Typography>

        <a className={GlobalCSS.anchorOffset} id="newsletter"></a>
        <Typography variant="h3">Weekly Updates Newsletter</Typography>
        <p>Stay informed with this public weekly newsletter about what we're doing and learning.
          Every Thursday, you'll receive a short update
          sharing what's coming up and what's alive from recent learning.
          To see what to expect, you can browse
          the 250+ email <a href="https://buttondown.email/intentionalsociety/archive/">newsletter archive</a>.
        </p>
        <p>Enter your email to subscribe to Intentional Society Weekly Updates:
        </p>
        <ButtondownSignup/>
        <p>Then, don't forget to go click on the confirmation email! You won't be subscribed if you don't.</p>

        <Typography variant="h3">Twitter</Typography>
        <p>Follow <a href="https://twitter.com/IntentionalSoc">@IntentionalSoc</a> on
          Twitter if that's your thing. Shares some newsletter content,
          occasional announcements, not much of a nag/reminder stream. Also a handy
          way to simply refer to Intentional Society in tweets, even if you don't follow the account.</p>

        <div style={{textAlign: 'right', marginBottom: '-25px'}}>
          Next page: <Link to="/history">History</Link>
        </div>
      </CenteredColumn>
    </Layout>
  );
};

export default NamedDefault;