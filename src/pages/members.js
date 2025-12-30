import React from 'react';
import { Link } from 'gatsby';
import Typography from '@mui/material/Typography';
import Layout from '../components/layout';
import CenteredColumn from '../components/centered-column';

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: '5vh' }}></div>
    <CenteredColumn>
      <Typography variant="h2">Members Community</Typography>

      <p>Membership in Intentional Society is a declaration of relationship.
        What happens inside the membership membrane?
      </p>

      <Typography variant="h5">Community Hub Calls</Typography>
      <p>Many community members gather on Sundays at 1pm Pacific / 4pm Eastern for weekly "Hub" calls, 
        which are the heartbeat of Intentional Society. These are led by a variety of experienced members, 
        and commonly center around either a relational practice or a topical exploration. We meet 12-of-every-13 
        weeks, using a seasonal lifecycle to refresh ourselves quarterly.
      </p>

      <Typography variant="h5">Pods</Typography>
      <p>
        An IS "pod" consists of four people doing four calls together. Each participant gets a turn 
        in the center, choosing a core practice like circling or casework. We've started running one cycle 
        per season, and these are appreciated as a vehicle to deepen relationships and perspective-taking.
      </p>

      <Typography variant="h5">Crews</Typography>
      <p>
        IS "crews" are self-organized groups with some shared purpose or interest. For example, the 
        "Arts in IS" crew currently meets monthly and shares a variety of creative explorations with one another. 
        We draw some organizing principles from <a href="https://www.microsolidarity.cc/">Microsolidarity</a>.
      </p>
      
      <Typography variant="h5">How to join</Typography>
      <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSebSp8vQsfRINQhHGw83Z-AEL3CtDtdcB5Edyc4kdCAq03XEg/viewform">Read 
        more and apply here.</a> Membership is free (always has been), and the 
        light application-and-agreements membrane that defines membership exists to let us 
        create openness and safety in our private cozyweb and manage our private data sharing. 
        You're invited to attend a <Link to="/get-involved#connection-calls">Connection Call</Link> for 
        orientation purposes, yet if you've been to at least one Practice Dojo session previously,
        you probably have enough of the vibe to dive in if you prefer.
      </p>

      <div style={{textAlign: 'right', marginBottom: '-25px'}}>
        <Link to="/">Back to home page</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;