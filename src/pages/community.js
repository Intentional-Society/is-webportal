import React from 'react';
import { Link } from 'gatsby';
import Typography from '@mui/material/Typography';
import Layout from '../components/layout';
import CenteredColumn from '../components/centered-column';
import * as GlobalCSS from '../styles/global.module.css';

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: '5vh' }}></div>
    <CenteredColumn>
      <Typography variant="h2">Community</Typography>

      <p>Community is an overused word, but ours is a meaningful communion, 
        a space of relationship-building, belonging, acceptance, play, and exploration. 
        It is emergent, messy, and full of laughter and tenderness. Membership in this community is a declaration of relationship.
        What happens inside the membership membrane?</p>

      <a className={GlobalCSS.anchorOffset} id="hub"></a>
      <Typography variant="h3">Community Hub Calls</Typography>
      <p> We gather by videocall weekly on <b>Sundays</b> at 1pm Pacific: a clear consistent heartbeat 
        of connection. We do new and trusty practices, we explore questions and edges, and we build 
        deep trust and relationship over time. There's a living-room vibe of familiarity and 
        safety going deeper than the average <Link to="/dojo">Practice Dojo</Link> experience.
        Varied members may spark, lead, or facilitate sessions in this leader-ful open-space playground collective.</p>
      
      <a className={GlobalCSS.anchorOffset} id="crews"></a>
      <Typography variant="h3">Crews and Pods</Typography>
      <p>Alongside and independently of our Hub congregating, we run small groups like our Pod Program. 
        An IS "pod" typically consists of four people doing four calls together. Each participant gets a turn 
        in the center, choosing a core practice like circling or casework. Self-led Crews are also invited to
        self-organize for any shared purpose and duration. For example, the 
        "Arts in IS" crew currently meets monthly and shares a variety of creative explorations with one another. 
      </p>

      <a className={GlobalCSS.anchorOffset} id="membership"></a>
      <Typography variant="h3">How to join</Typography>

      <p>To join, <a href="https://docs.google.com/forms/d/e/1FAIpQLSebSp8vQsfRINQhHGw83Z-AEL3CtDtdcB5Edyc4kdCAq03XEg/viewform">read 
        more and apply here.</a> Membership is free (always has been), and the 
        light application-and-agreements membrane that defines membership exists to let us 
        create openness and safety in our private cozyweb and manage our private data sharing.
        You're invited to attend a <Link to="/get-involved#connection-calls">Connection Call</Link> for 
        orientation purposes, yet if you've been to at least one Practice Dojo session previously,
        you probably have enough of the vibe to dive in if you prefer.</p>
        
      <div style={{textAlign: 'right', marginBottom: '-25px'}}>
        <Link to="/">Back to home page</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;